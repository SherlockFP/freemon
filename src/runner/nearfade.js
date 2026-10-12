// nearfade.js — hides geometry that is too close to the camera (dither fade 4.5 m -> gone at 2.5 m), per fragment on the GPU.
// Works for every InstancedMesh material (decor, obstacles, pickups, critters) with zero per-frame JS cost / allocations.
export function nearFade(mat, near = 2.5, far = 4.5) {
  if (!mat || mat.__nearFade) return mat;
  mat.__nearFade = true;
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (shader, renderer) => {
    if (prev) prev.call(mat, shader, renderer);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying float vNearD;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvNearD = length(mvPosition.xyz);');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vNearD;')
      .replace('void main() {', `void main() {
  if (vNearD < ${far.toFixed(2)}) {
    float nfK = clamp((vNearD - ${near.toFixed(2)}) / ${(far - near).toFixed(2)}, 0.0, 1.0);
    float nfH = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
    if (nfK <= nfH) discard;
  }`);
  };
  const pk = mat.customProgramCacheKey ? mat.customProgramCacheKey.bind(mat) : null;
  mat.customProgramCacheKey = () => (pk ? pk() : '') + '|nearfade';
  mat.needsUpdate = true;
  return mat;
}
