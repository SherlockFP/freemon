import * as THREE from 'three';

// Visual modes ("GÖRÜNÜM"): material-level shader tweaks + an optional cheap post pass.
export const VISUAL_MODES = [
  { id: 'normal', name: 'NORMAL' },
  { id: 'toon', name: 'ÇİZGİ FİLM' },
  { id: 'pixel', name: 'PİKSEL' },
  { id: 'postcard', name: 'KARTPOSTAL' },
];

// Uniforms shared by every patched material, so switching modes never recompiles shaders.
export const SU = {
  uTime: { value: 0 },
  uToon: { value: 0 },
  uSnap: { value: new THREE.Vector2(0, 0) },
  uSparkle: { value: 1 },
};

const VERT_PARS = /* glsl */`
varying vec3 vCigW;
uniform vec2 uSnap;
`;

const VERT_MAIN = /* glsl */`
#include <project_vertex>
{
  vec4 cigW = vec4( transformed, 1.0 );
  #ifdef USE_BATCHING
    cigW = batchingMatrix * cigW;
  #endif
  #ifdef USE_INSTANCING
    cigW = instanceMatrix * cigW;
  #endif
  vCigW = ( modelMatrix * cigW ).xyz;
  // PSX-style vertex wobble: snap clip-space positions to the low-res pixel grid.
  if ( uSnap.x > 0.0 ) {
    gl_Position.xy = floor( gl_Position.xy / gl_Position.w * uSnap + 0.5 ) / uSnap * gl_Position.w;
  }
}
`;

const FRAG_PARS = /* glsl */`
varying vec3 vCigW;
uniform float uTime;
uniform float uToon;
uniform float uSparkle;
float cigHash( vec3 p ) {
  p = fract( p * 0.3183099 + 0.1 );
  p *= 17.0;
  return fract( p.x * p.y * p.z * ( p.x + p.y + p.z ) );
}
`;

const FRAG_MAIN = /* glsl */`
{
  vec3 cigAlb = max( diffuseColor.rgb, vec3( 0.02 ) );
  float cigAlbL = dot( cigAlb, vec3( 0.299, 0.587, 0.114 ) );
  float cigL = dot( outgoingLight, vec3( 0.299, 0.587, 0.114 ) );
  float cigShade = cigL / cigAlbL; // ≈ received light
  vec3 cigView = normalize( vViewPosition );

  #ifdef CIG_SNOW
    // Only bright, near-white texels are "snow" (dirt, roads and stripes stay as they are).
    float cigWhite = smoothstep( 0.6, 0.82, min( cigAlb.r, min( cigAlb.g, cigAlb.b ) ) );
    // Snow is never grey in shade: it goes cool blue.
    float cigSh = 1.0 - smoothstep( 0.5, 1.05, cigShade );
    outgoingLight = mix( outgoingLight, outgoingLight * vec3( 0.72, 0.84, 1.06 ) * 1.1, cigSh * cigWhite );
    // Wind ripples across the powder.
    float cigRip = sin( vCigW.x * 0.85 + sin( vCigW.z * 0.23 ) * 3.0 + vCigW.z * 0.31 );
    outgoingLight *= 1.0 - cigWhite * 0.045 * ( cigRip * 0.5 + 0.5 );
    // Glitter: tiny world-anchored points that twinkle as the camera moves.
    float cigDist = length( vViewPosition );
    if ( uSparkle > 0.0 && cigDist < 70.0 ) {
      float cellK = 2.6;
      vec3 cell = floor( vCigW * cellK );
      float h = cigHash( cell );
      vec3 f = fract( vCigW * cellK ) - 0.5;
      float pr = 0.09 + cigDist * 0.0035;
      float dotMask = 1.0 - smoothstep( pr * 0.5, pr, length( f ) );
      float tw = fract( h * 37.1 + dot( cigView, vec3( 2.7, 4.1, 1.9 ) ) * 1.3 + uTime * 0.25 );
      float twinkle = smoothstep( 0.7, 1.0, tw );
      float spark = step( 0.82, h ) * dotMask * twinkle * ( 1.0 - cigDist / 70.0 );
      outgoingLight += vec3( 1.0, 0.98, 0.92 ) * spark * cigWhite * 1.4 * uSparkle;
    }
  #endif

  if ( uToon > 0.5 ) {
    // Cel shading: 3 flat light bands, hue of the lighting kept.
    float band = cigShade < 0.55 ? 0.55 : ( cigShade < 0.95 ? 0.84 : 1.12 );
    outgoingLight = outgoingLight * ( band / max( cigShade, 0.05 ) );
    // Comic colours: push saturation.
    float tl = dot( outgoingLight, vec3( 0.299, 0.587, 0.114 ) );
    outgoingLight = max( mix( vec3( tl ), outgoingLight, 1.35 ), 0.0 );
    // Ink edges where faces turn away from the camera.
    float ndv = abs( dot( normal, cigView ) );
    outgoingLight *= mix( 0.12, 1.0, smoothstep( 0.16, 0.34, ndv ) );
  }
}
#include <opaque_fragment>
`;

const patched = new WeakSet();

// Inject the shared look into a Lambert (or Basic) material. `snow: true` adds glitter + blue shadows.
export function patchMaterial(mat, { snow = false } = {}) {
  if (!mat || patched.has(mat)) return mat;
  patched.add(mat);
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (shader, renderer) => {
    prev?.call(mat, shader, renderer);
    shader.uniforms.uTime = SU.uTime;
    shader.uniforms.uToon = SU.uToon;
    shader.uniforms.uSnap = SU.uSnap;
    shader.uniforms.uSparkle = SU.uSparkle;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\n${VERT_PARS}`)
      .replace('#include <project_vertex>', VERT_MAIN);
    let fs = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${snow ? '#define CIG_SNOW\n' : ''}${FRAG_PARS}`);
    // Basic materials have no lighting; outgoingLight still exists in their shader.
    fs = fs.replace('#include <opaque_fragment>', FRAG_MAIN);
    shader.fragmentShader = fs;
  };
  const key = snow ? 'cig-snow' : 'cig-std';
  const prevKey = mat.customProgramCacheKey?.bind(mat);
  mat.customProgramCacheKey = () => `${prevKey ? prevKey() : ''}|${key}`;
  mat.needsUpdate = true;
  return mat;
}

// ---------- post pass ----------
const POST_VERT = /* glsl */`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4( position.xy, 0.0, 1.0 ); }
`;

const POST_FRAG = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform sampler2D tScene;
uniform vec2 uRes;
uniform float uTime;
uniform int uMode; // 2 = pixel, 3 = postcard

float bayer4( vec2 p ) {
  vec2 q = mod( floor( p ), 4.0 );
  int i = int( q.x ) + int( q.y ) * 4;
  int m[16] = int[16]( 0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5 );
  return ( float( m[i] ) + 0.5 ) / 16.0;
}
float hash12( vec2 p ) {
  vec3 p3 = fract( vec3( p.xyx ) * 0.1031 );
  p3 += dot( p3, p3.yzx + 33.33 );
  return fract( ( p3.x + p3.y ) * p3.z );
}

void main() {
  vec3 c = texture2D( tScene, vUv ).rgb;
  c = pow( max( c, 0.0 ), vec3( 1.0 / 2.2 ) ); // linear → display

  if ( uMode == 2 ) {
    // Retro: limited palette with ordered dithering on the low-res grid.
    float levels = 9.0;
    float d = bayer4( vUv * uRes ) - 0.5;
    c = floor( c * ( levels - 1.0 ) + 0.5 + d * 0.55 ) / ( levels - 1.0 );
    c = mix( c, c * vec3( 1.02, 1.0, 1.06 ), 0.5);
  } else if ( uMode == 3 ) {
    // Postcard: warm, slightly faded print with vignette and paper grain.
    float l = dot( c, vec3( 0.299, 0.587, 0.114 ) );
    c = mix( vec3( l ), c, 1.35 );
    c = ( c - 0.5 ) * 1.12 + 0.5;
    c = c * vec3( 1.07, 1.0, 0.86 ) + vec3( 0.02, 0.012, 0.0 );
    c = mix( c, vec3( 1.0, 0.95, 0.85 ), 0.03 );
    vec2 v = vUv - 0.5;
    c *= 1.0 - 0.42 * pow( length( v * vec2( 1.0, 0.8 ) ) * 1.35, 2.6 );
    c += ( hash12( vUv * uRes + fract( uTime ) * 91.0 ) - 0.5 ) * 0.045;
  }
  gl_FragColor = vec4( clamp( c, 0.0, 1.0 ), 1.0 );
}
`;

export class PostFX {
  constructor(renderer) {
    this.renderer = renderer;
    this.mode = 'normal';
    this.rt = null;
    this.quadScene = new THREE.Scene();
    this.quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.mat = new THREE.ShaderMaterial({
      vertexShader: POST_VERT,
      fragmentShader: POST_FRAG,
      uniforms: {
        tScene: { value: null },
        uRes: { value: new THREE.Vector2(1, 1) },
        uTime: SU.uTime,
        uMode: { value: 0 },
      },
      depthTest: false,
      depthWrite: false,
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.mat);
    quad.frustumCulled = false;
    this.quadScene.add(quad);
    this.size = new THREE.Vector2();
  }

  setMode(id) {
    this.mode = VISUAL_MODES.some((m) => m.id === id) ? id : 'normal';
    SU.uToon.value = this.mode === 'toon' ? 1 : 0;
    SU.uSparkle.value = this.mode === 'pixel' ? 0 : 1;
    this.mat.uniforms.uMode.value = this.mode === 'pixel' ? 2 : this.mode === 'postcard' ? 3 : 0;
    this.resize();
  }

  usesTarget() {
    return this.mode === 'pixel' || this.mode === 'postcard';
  }

  resize() {
    const r = this.renderer;
    r.getDrawingBufferSize(this.size);
    if (!this.usesTarget()) {
      SU.uSnap.value.set(0, 0);
      if (this.rt) { this.rt.dispose(); this.rt = null; }
      return;
    }
    let w = this.size.x, h = this.size.y;
    if (this.mode === 'pixel') {
      // ~200 px tall regardless of device resolution.
      const k = 200 / h;
      w = Math.max(64, Math.round(w * k));
      h = 200;
      SU.uSnap.value.set(w / 2, h / 2);
    } else {
      SU.uSnap.value.set(0, 0);
    }
    const filter = this.mode === 'pixel' ? THREE.NearestFilter : THREE.LinearFilter;
    if (!this.rt || this.rt.width !== w || this.rt.height !== h || this.rt.texture.magFilter !== filter) {
      this.rt?.dispose();
      this.rt = new THREE.WebGLRenderTarget(w, h, { minFilter: filter, magFilter: filter, depthBuffer: true });
    }
    this.mat.uniforms.uRes.value.set(w, h);
  }

  render(scene, camera) {
    const r = this.renderer;
    if (!this.usesTarget()) {
      r.render(scene, camera);
      return;
    }
    r.setRenderTarget(this.rt);
    r.render(scene, camera);
    r.setRenderTarget(null);
    this.mat.uniforms.tScene.value = this.rt.texture;
    r.render(this.quadScene, this.quadCam);
  }
}
