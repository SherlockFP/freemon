const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./runner-bdoq9YiG.js","./music-Cm24JTA3.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1004,m=1005,h=1006,g=1007,_=1008,v=1009,y=1010,b=1011,x=1012,S=1013,C=1014,w=1015,T=1016,E=1017,D=1018,O=1020,k=35902,A=35899,j=1021,ee=1022,M=1023,te=1026,N=1027,ne=1028,re=1029,ie=1030,ae=1031,oe=1033,se=33776,ce=33777,le=33778,P=33779,ue=35840,de=35841,fe=35842,pe=35843,me=36196,he=37492,ge=37496,_e=37488,ve=37489,ye=37490,be=37491,xe=37808,Se=37809,Ce=37810,we=37811,Te=37812,Ee=37813,De=37814,Oe=37815,ke=37816,Ae=37817,je=37818,Me=37819,Ne=37820,F=37821,Pe=36492,Fe=36494,Ie=36495,I=36283,Le=36284,Re=36285,ze=36286,Be=2300,Ve=2301,He=2302,Ue=2303,We=2400,Ge=2401,Ke=2402,qe=3200,Je=`srgb`,Ye=`srgb-linear`,Xe=`linear`,Ze=`srgb`,Qe=7680,$e=35044,et=35048,tt=2e3;function nt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function rt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function it(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function at(){let e=it(`canvas`);return e.style.display=`block`,e}var ot={};function st(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ct(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=ct(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=ct(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function lt(...e){let t=e.join(` `);t in ot||(ot[t]=!0,L(...e))}function ut(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var dt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ft=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},pt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),mt=Math.PI/180,ht=180/Math.PI;function gt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pt[e&255]+pt[e>>8&255]+pt[e>>16&255]+pt[e>>24&255]+`-`+pt[t&255]+pt[t>>8&255]+`-`+pt[t>>16&15|64]+pt[t>>24&255]+`-`+pt[n&63|128]+pt[n>>8&255]+`-`+pt[n>>16&255]+pt[n>>24&255]+pt[r&255]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]).toLowerCase()}function _t(e,t,n){return Math.max(t,Math.min(n,e))}function vt(e,t){return(e%t+t)%t}function yt(e,t,n){return(1-n)*e+n*t}function bt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function xt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}o=Symbol.iterator;var z=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=z,e.prototype.isVector2=!0;var St=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var B=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ct.copy(this).projectOnVector(e),this.sub(Ct)}reflect(e){return this.sub(Ct.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=B,t.prototype.isVector3=!0;var Ct=new B,wt=new St,V=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return lt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Tt.makeScale(e,t)),this}rotate(e){return lt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Tt.makeRotation(-e)),this}translate(e,t){return lt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Tt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=V,n.prototype.isMatrix3=!0;var Tt=new V,Et=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ot(){let e={enabled:!0,workingColorSpace:Ye,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=At(e.r),e.g=At(e.g),e.b=At(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=jt(e.r),e.g=jt(e.g),e.b=jt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Xe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return lt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return lt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ye]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:Et,fromXYZ:Dt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:r,transfer:Ze,toXYZ:Et,fromXYZ:Dt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),e}var kt=Ot();function At(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function jt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Mt,Nt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mt===void 0&&(Mt=it(`canvas`)),Mt.width=e.width,Mt.height=e.height;let t=Mt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Mt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=it(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=At(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(At(t[e]/255)*255):t[e]=At(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Pt=0,Ft=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pt++}),this.uuid=gt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(It(r[t].image)):e.push(It(r[t]))}else e=It(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function It(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Nt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var Lt=0,Rt=new B,zt=class e extends ft{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=h,o=_,s=M,c=v,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lt++}),this.uuid=gt(),this.name=``,this.source=new Ft(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rt).x}get height(){return this.source.getSize(Rt).y}get depth(){return this.source.getSize(Rt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null,zt.DEFAULT_MAPPING=300,zt.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var Bt=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=Bt,r.prototype.isVector4=!0;var Vt=class extends ft{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let r=new zt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:h,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ft(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ht=class extends Vt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ut=class extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Wt=class extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Gt=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Kt.setFromMatrixColumn(e,0).length(),i=1/Kt.setFromMatrixColumn(e,1).length(),a=1/Kt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jt,e,Yt)}lookAt(e,t,n){let r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Xt.crossVectors(n,Qt),Xt.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Xt.crossVectors(n,Qt)),Xt.normalize(),Zt.crossVectors(Qt,Xt),r[0]=Xt.x,r[4]=Zt.x,r[8]=Qt.x,r[1]=Xt.y,r[5]=Zt.y,r[9]=Qt.y,r[2]=Xt.z,r[6]=Zt.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],N=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*N,i[12]=a*w+o*O+s*ee+c*ne,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*N,i[13]=l*w+u*O+d*ee+f*ne,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*N,i[14]=p*w+m*O+h*ee+g*ne,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*N,i[15]=_*w+v*O+y*ee+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Kt.set(r[0],r[1],r[2]).length(),o=Kt.set(r[4],r[5],r[6]).length(),s=Kt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),qt.copy(this);let c=1/a,l=1/o,u=1/s;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=l,qt.elements[5]*=l,qt.elements[6]*=l,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,t.setFromRotationMatrix(qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=tt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=tt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=Gt,i.prototype.isMatrix4=!0;var Kt=new B,qt=new Gt,Jt=new B(0,0,0),Yt=new B(1,1,1),Xt=new B,Zt=new B,Qt=new B,$t=new Gt,en=new St,tn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-_t(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(_t(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $t.makeRotationFromQuaternion(e),this.setFromRotationMatrix($t,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return en.setFromEuler(this),this.setFromQuaternion(en,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER=`XYZ`;var nn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},rn=0,an=new B,on=new St,sn=new Gt,cn=new B,ln=new B,un=new B,dn=new St,fn=new B(1,0,0),pn=new B(0,1,0),mn=new B(0,0,1),hn={type:`added`},gn={type:`removed`},_n={type:`childadded`,child:null},vn={type:`childremoved`,child:null},yn=class e extends ft{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rn++}),this.uuid=gt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new tn,r=new St,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new V}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return on.setFromAxisAngle(e,t),this.quaternion.multiply(on),this}rotateOnWorldAxis(e,t){return on.setFromAxisAngle(e,t),this.quaternion.premultiply(on),this}rotateX(e){return this.rotateOnAxis(fn,e)}rotateY(e){return this.rotateOnAxis(pn,e)}rotateZ(e){return this.rotateOnAxis(mn,e)}translateOnAxis(e,t){return an.copy(e).applyQuaternion(this.quaternion),this.position.add(an.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fn,e)}translateY(e){return this.translateOnAxis(pn,e)}translateZ(e){return this.translateOnAxis(mn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cn.copy(e):cn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ln.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(ln,cn,this.up):sn.lookAt(cn,ln,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),on.setFromRotationMatrix(sn),this.quaternion.premultiply(on.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hn),_n.child=e,this.dispatchEvent(_n),_n.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gn),vn.child=e,this.dispatchEvent(vn),vn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hn),_n.child=e,this.dispatchEvent(_n),_n.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ln,e,un),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ln,dn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};yn.DEFAULT_UP=new B(0,1,0),yn.DEFAULT_MATRIX_AUTO_UPDATE=!0,yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=class extends yn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},xn={type:`move`},Sn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Tn={h:0,s:0,l:0};function En(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,kt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=kt.workingColorSpace){if(e=vt(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=En(i,r,e+1/3),this.g=En(i,r,e),this.b=En(i,r,e-1/3)}return kt.colorSpaceToWorking(this,r),this}setStyle(e,t=Je){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){let n=Cn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=At(e.r),this.g=At(e.g),this.b=At(e.b),this}copyLinearToSRGB(e){return this.r=jt(e.r),this.g=jt(e.g),this.b=jt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return kt.workingToColorSpace(Dn.copy(this),e),Math.round(_t(Dn.r*255,0,255))*65536+Math.round(_t(Dn.g*255,0,255))*256+Math.round(_t(Dn.b*255,0,255))}getHexString(e=Je){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.workingToColorSpace(Dn.copy(this),t);let n=Dn.r,r=Dn.g,i=Dn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=kt.workingColorSpace){return kt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Je){kt.workingToColorSpace(Dn.copy(this),e);let t=Dn.r,n=Dn.g,r=Dn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Tn);let n=yt(wn.h,Tn.h,t),r=yt(wn.s,Tn.s,t),i=yt(wn.l,Tn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new H;H.NAMES=Cn;var On=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new H(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},kn=class extends yn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},An=new B,jn=new B,Mn=new B,Nn=new B,Pn=new B,Fn=new B,In=new B,Ln=new B,Rn=new B,zn=new B,Bn=new Bt,Vn=new Bt,Hn=new Bt,Un=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),An.subVectors(e,t),r.cross(An);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){An.subVectors(r,t),jn.subVectors(n,t),Mn.subVectors(e,t);let a=An.dot(An),o=An.dot(jn),s=An.dot(Mn),c=jn.dot(jn),l=jn.dot(Mn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Nn)!==null&&Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Nn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Nn.x),s.addScaledVector(a,Nn.y),s.addScaledVector(o,Nn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Bn.setScalar(0),Vn.setScalar(0),Hn.setScalar(0),Bn.fromBufferAttribute(e,t),Vn.fromBufferAttribute(e,n),Hn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Bn,i.x),a.addScaledVector(Vn,i.y),a.addScaledVector(Hn,i.z),a}static isFrontFacing(e,t,n,r){return An.subVectors(n,t),jn.subVectors(e,t),An.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),An.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Pn.subVectors(r,n),Fn.subVectors(i,n),Ln.subVectors(e,n);let s=Pn.dot(Ln),c=Fn.dot(Ln);if(s<=0&&c<=0)return t.copy(n);Rn.subVectors(e,r);let l=Pn.dot(Rn),u=Fn.dot(Rn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Pn,a);zn.subVectors(e,i);let f=Pn.dot(zn),p=Fn.dot(zn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Fn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return In.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(In,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Pn,a).addScaledVector(Fn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Kn):Kn.fromBufferAttribute(r,t),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),qn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),qn.copy(e.boundingBox)),qn.applyMatrix4(e.matrixWorld),this.union(qn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),tr.subVectors(this.max,er),Jn.subVectors(e.a,er),Yn.subVectors(e.b,er),Xn.subVectors(e.c,er),Zn.subVectors(Yn,Jn),Qn.subVectors(Xn,Yn),$n.subVectors(Jn,Xn);let t=[0,-Zn.z,Zn.y,0,-Qn.z,Qn.y,0,-$n.z,$n.y,Zn.z,0,-Zn.x,Qn.z,0,-Qn.x,$n.z,0,-$n.x,-Zn.y,Zn.x,0,-Qn.y,Qn.x,0,-$n.y,$n.x,0];return!ir(t,Jn,Yn,Xn,tr)||(t=[1,0,0,0,1,0,0,0,1],!ir(t,Jn,Yn,Xn,tr))?!1:(nr.crossVectors(Zn,Qn),t=[nr.x,nr.y,nr.z],ir(t,Jn,Yn,Xn,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gn=[new B,new B,new B,new B,new B,new B,new B,new B],Kn=new B,qn=new Wn,Jn=new B,Yn=new B,Xn=new B,Zn=new B,Qn=new B,$n=new B,er=new B,tr=new B,nr=new B,rr=new B;function ir(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){rr.fromArray(e,a);let o=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),s=t.dot(rr),c=n.dot(rr),l=r.dot(rr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ar=new B,or=new z,sr=0,cr=class extends ft{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=$e,this.updateRanges=[],this.gpuType=w,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix4(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyNormalMatrix(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.transformDirection(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bt(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bt(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bt(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},lr=class extends cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ur=class extends cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},dr=class extends cr{constructor(e,t,n){super(new Float32Array(e),t,n)}},fr=new Wn,pr=new B,mr=new B,hr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?fr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(pr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(mr)),this.expandByPoint(pr.copy(e.center).sub(mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gr=0,_r=new Gt,vr=new yn,yr=new B,br=new Wn,xr=new Wn,Sr=new B,Cr=class e extends ft{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gr++}),this.uuid=gt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(nt(e)?ur:lr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _r.makeRotationFromQuaternion(e),this.applyMatrix4(_r),this}rotateX(e){return _r.makeRotationX(e),this.applyMatrix4(_r),this}rotateY(e){return _r.makeRotationY(e),this.applyMatrix4(_r),this}rotateZ(e){return _r.makeRotationZ(e),this.applyMatrix4(_r),this}translate(e,t,n){return _r.makeTranslation(e,t,n),this.applyMatrix4(_r),this}scale(e,t,n){return _r.makeScale(e,t,n),this.applyMatrix4(_r),this}lookAt(e){return vr.lookAt(e),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new dr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];br.setFromBufferAttribute(n),this.morphTargetsRelative?(Sr.addVectors(this.boundingBox.min,br.min),this.boundingBox.expandByPoint(Sr),Sr.addVectors(this.boundingBox.max,br.max),this.boundingBox.expandByPoint(Sr)):(this.boundingBox.expandByPoint(br.min),this.boundingBox.expandByPoint(br.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(br.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];xr.setFromBufferAttribute(n),this.morphTargetsRelative?(Sr.addVectors(br.min,xr.min),br.expandByPoint(Sr),Sr.addVectors(br.max,xr.max),br.expandByPoint(Sr)):(br.expandByPoint(xr.min),br.expandByPoint(xr.max))}br.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Sr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Sr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Sr.fromBufferAttribute(a,t),o&&(yr.fromBufferAttribute(e,t),Sr.add(yr)),r=Math.max(r,n.distanceToSquared(Sr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new cr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new cr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sr.fromBufferAttribute(e,t),Sr.normalize(),e.setXYZ(t,Sr.x,Sr.y,Sr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new cr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},wr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=$e,this.updateRanges=[],this.version=0,this.uuid=gt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Tr=new B,Er=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix4(e),this.setXYZ(t,Tr.x,Tr.y,Tr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyNormalMatrix(e),this.setXYZ(t,Tr.x,Tr.y,Tr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.transformDirection(e),this.setXYZ(t,Tr.x,Tr.y,Tr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){st(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new cr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){st(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dr=new B,Or=new B,kr=new V,Ar=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Dr.subVectors(n,t).cross(Or.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Dr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kr.getNormalMatrix(e),r=this.coplanarPoint(Dr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},jr=0,Mr=class extends ft{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=gt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qe,this.stencilZFail=Qe,this.stencilZPass=Qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ar().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Nr=class extends Mr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pr,Fr=new B,Ir=new B,Lr=new B,Rr=new z,zr=new z,Br=new Gt,Vr=new B,Hr=new B,Ur=new B,Wr=new z,Gr=new z,Kr=new z,qr=class extends yn{constructor(e=new Nr){if(super(),this.isSprite=!0,this.type=`Sprite`,Pr===void 0){Pr=new Cr;let e=new wr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Pr.setIndex([0,1,2,0,2,3]),Pr.setAttribute(`position`,new Er(e,3,0,!1)),Pr.setAttribute(`uv`,new Er(e,2,3,!1))}this.geometry=Pr,this.material=e,this.center=new z(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&R(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Ir.setFromMatrixScale(this.matrixWorld),Br.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ir.multiplyScalar(-Lr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Jr(Vr.set(-.5,-.5,0),Lr,a,Ir,r,i),Jr(Hr.set(.5,-.5,0),Lr,a,Ir,r,i),Jr(Ur.set(.5,.5,0),Lr,a,Ir,r,i),Wr.set(0,0),Gr.set(1,0),Kr.set(1,1);let o=e.ray.intersectTriangle(Vr,Hr,Ur,!1,Fr);if(o===null&&(Jr(Hr.set(-.5,.5,0),Lr,a,Ir,r,i),Gr.set(0,1),o=e.ray.intersectTriangle(Vr,Ur,Hr,!1,Fr),o===null))return;let s=e.ray.origin.distanceTo(Fr);s<e.near||s>e.far||t.push({distance:s,point:Fr.clone(),uv:Un.getInterpolation(Fr,Vr,Hr,Ur,Wr,Gr,Kr,new z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jr(e,t,n,r,i,a){Rr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?zr.copy(Rr):(zr.x=a*Rr.x-i*Rr.y,zr.y=i*Rr.x+a*Rr.y),e.copy(t),e.x+=zr.x,e.y+=zr.y,e.applyMatrix4(Br)}var Yr=new B,Xr=new B,Zr=new B,Qr=new B,$r=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yr.copy(this.origin).addScaledVector(this.direction,t),Yr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xr.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Xr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=Qr.dot(this.direction),s=-Qr.dot(Zr),c=Qr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Xr).addScaledVector(Zr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Yr.subVectors(e.center,this.origin);let n=Yr.dot(this.direction),r=Yr.dot(Yr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,N=C/w,ne=1/w,re=T-te*D,ie=E-N*D,ae=O-te*A,oe=k-N*A,se=j-te*M,ce=ee-N*M,le=se*oe-ce*ae,P=re*ce-ie*se,ue=ae*ie-oe*re;if(r){if(le<0||P<0||ue<0)return null}else if((le<0||P<0||ue<0)&&(le>0||P>0||ue>0))return null;let de=le+P+ue;if(de===0)return null;let fe=ne*(le*D+P*A+ue*M);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ei=class extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ti=new Gt,ni=new $r,ri=new hr,ii=new B,ai=new B,oi=new B,si=new B,ci=new B,li=new B,ui=new B,di=new B,fi=class extends yn{constructor(e=new Cr,t=new ei){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){li.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ci.fromBufferAttribute(s,e),a?li.addScaledVector(ci,r):li.addScaledVector(ci.sub(t),r))}t.add(li)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ri.copy(n.boundingSphere),ri.applyMatrix4(i),ni.copy(e.ray).recast(e.near),!(ri.containsPoint(ni.origin)===!1&&(ni.intersectSphere(ri,ii)===null||ni.origin.distanceToSquared(ii)>(e.far-e.near)**2))&&(ti.copy(i).invert(),ni.copy(e.ray).applyMatrix4(ti),(n.boundingBox===null||ni.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=mi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=mi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=mi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=mi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function pi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;di.copy(s),di.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(di);return l<n.near||l>n.far?null:{distance:l,point:di.clone(),object:e}}function mi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ai),e.getVertexPosition(c,oi),e.getVertexPosition(l,si);let u=pi(e,t,n,r,ai,oi,si,ui);if(u){let e=new B;Un.getBarycoord(ui,ai,oi,si,e),i&&(u.uv=Un.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=Un.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=Un.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};Un.getNormal(ai,oi,si,t.normal),u.face=t,u.barycoord=e}return u}var hi=class extends zt{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gi=class extends cr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_i=new Gt,vi=new Gt,yi=[],bi=new Wn,xi=new Gt,Si=new fi,Ci=new hr,wi=class extends fi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,xi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),bi.copy(e.boundingBox).applyMatrix4(_i),this.boundingBox.union(bi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),Ci.copy(e.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Ci)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Si.geometry=this.geometry,Si.material=this.material,Si.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ci.copy(this.boundingSphere),Ci.applyMatrix4(n),e.ray.intersectsSphere(Ci)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,_i),vi.multiplyMatrices(n,_i),Si.matrixWorld=vi,Si.raycast(e,yi);for(let e=0,n=yi.length;e<n;e++){let n=yi[e];n.instanceId=i,n.object=this,t.push(n)}yi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new hi(new Float32Array(r*this.count),r,this.count,ne,w));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ti=new hr,Ei=new z(.5,.5),Di=new B,Oi=class{constructor(e=new Ar,t=new Ar,n=new Ar,r=new Ar,i=new Ar,a=new Ar){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476+Ei.distanceTo(e.center),Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Di.x=r.normal.x>0?e.max.x:e.min.x,Di.y=r.normal.y>0?e.max.y:e.min.y,Di.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Di)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ki=class extends Mr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ai=new Gt,ji=new $r,Mi=new hr,Ni=new B,Pi=class extends yn{constructor(e=new Cr,t=new ki){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mi.copy(n.boundingSphere),Mi.applyMatrix4(r),Mi.radius+=i,e.ray.intersectsSphere(Mi)===!1)return;Ai.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Ai);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ni.fromBufferAttribute(l,n),Fi(Ni,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ni.fromBufferAttribute(l,a),Fi(Ni,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Fi(e,t,n,r,i,a,o){let s=ji.distanceSqToPoint(e);if(s<n){let n=new B;ji.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ii=class extends zt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Li=class extends zt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ri=class extends zt{constructor(e,t,n=C,r,i,a,o=f,s=f,c,l=te,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ft(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},zi=class extends Ri{constructor(e,t=C,n=301,r,i,a=f,o=f,s,c=te){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Bi=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vi=class e extends Cr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new dr(c,3)),this.setAttribute(`normal`,new dr(l,3)),this.setAttribute(`uv`,new dr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Hi=class e extends Cr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new B,g=new B;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new dr(o,3)),this.setAttribute(`normal`,new dr(s,3)),this.setAttribute(`uv`,new dr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ui=class e extends Cr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new dr(a,3)),this.setAttribute(`normal`,new dr(o,3)),this.setAttribute(`uv`,new dr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Wi=class e extends Cr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new dr(u,3)),this.setAttribute(`normal`,new dr(d,3)),this.setAttribute(`uv`,new dr(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gi=class e extends Wi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ki=class e extends Cr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new dr(i,3)),this.setAttribute(`normal`,new dr(i.slice(),3)),this.setAttribute(`uv`,new dr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new B,r=new B,i=new B;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new B;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new B;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new B,t=new B,n=new B,r=new B,o=new z,s=new z,c=new z;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},qi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new z:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,r=[],i=[],a=[],o=new B,s=new Gt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(_t(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(_t(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ji=class extends qi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new z){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Yi=class extends Ji{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Xi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Zi=new B,Qi=new B,$i=new Xi,ea=new Xi,ta=new Xi,na=class extends qi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Qi.subVectors(r[0],r[1]).add(r[0]),c=Qi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Zi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Zi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),$i.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ea.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ta.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&($i.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ea.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ta.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set($i.calc(s),ea.calc(s),ta.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ra(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ia(e,t){let n=1-e;return n*n*t}function aa(e,t){return 2*(1-e)*e*t}function oa(e,t){return e*e*t}function sa(e,t,n,r){return ia(e,t)+aa(e,n)+oa(e,r)}function ca(e,t){let n=1-e;return n*n*n*t}function la(e,t){let n=1-e;return 3*n*n*e*t}function ua(e,t){return 3*(1-e)*e*e*t}function da(e,t){return e*e*e*t}function fa(e,t,n,r,i){return ca(e,t)+la(e,n)+ua(e,r)+da(e,i)}var pa=class extends qi{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(fa(e,r.x,i.x,a.x,o.x),fa(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ma=class extends qi{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(fa(e,r.x,i.x,a.x,o.x),fa(e,r.y,i.y,a.y,o.y),fa(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends qi{constructor(e=new z,t=new z){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends qi{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends qi{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(sa(e,r.x,i.x,a.x),sa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends qi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(sa(e,r.x,i.x,a.x),sa(e,r.y,i.y,a.y),sa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new z){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ra(o,s.x,c.x,l.x,u.x),ra(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this}},ba=Object.freeze({__proto__:null,ArcCurve:Yi,CatmullRomCurve3:na,CubicBezierCurve:pa,CubicBezierCurve3:ma,EllipseCurve:Ji,LineCurve:ha,LineCurve3:ga,QuadraticBezierCurve:_a,QuadraticBezierCurve3:va,SplineCurve:ya}),xa=class extends qi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ba[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ba[n.type]().fromJSON(n))}return this}},Sa=class extends xa{constructor(e){super(),this.type=`Path`,this.currentPoint=new z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ha(this.currentPoint.clone(),new z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new _a(this.currentPoint.clone(),new z(e,t),new z(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new pa(this.currentPoint.clone(),new z(e,t),new z(n,r),new z(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new ya([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ji(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ca=class extends Sa{constructor(e){super(e),this.uuid=gt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Sa().fromJSON(n))}return this}};function wa(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ta(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ma(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Da(a,o,n,s,c,l,0),o}function Ta(e,t,n,r,i){let a;if(i===no(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=$a(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=$a(i/r|0,e[i],e[i+1],a);return a&&Ga(a,a.next)&&(eo(a),a=a.next),a}function Ea(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(Ga(n,n.next)||Wa(n.prev,n,n.next)===0)){if(eo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Da(e,t,n,r,i,a,o){if(!e)return;!o&&a&&La(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ka(e,r,i,a):Oa(e)){t.push(c.i,e.i,l.i),eo(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Aa(Ea(e),t),Da(e,t,n,r,i,a,2)):o===2&&ja(e,t,n,r,i,a):Da(Ea(e),t,n,r,i,a,1);break}}}function Oa(e){let t=e.prev,n=e,r=e.next;if(Wa(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ha(i,s,a,c,o,l,m.x,m.y)&&Wa(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ka(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Wa(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=za(p,m,t,n,r),v=za(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ha(s,u,c,d,l,f,y.x,y.y)&&Wa(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ha(s,u,c,d,l,f,b.x,b.y)&&Wa(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ha(s,u,c,d,l,f,y.x,y.y)&&Wa(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ha(s,u,c,d,l,f,b.x,b.y)&&Wa(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Aa(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Ga(r,i)&&Ka(r,n,n.next,i)&&Xa(r,i)&&Xa(i,r)&&(t.push(r.i,n.i,i.i),eo(n),eo(n.next),n=e=i),n=n.next}while(n!==e);return Ea(n)}function ja(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ua(o,e)){let s=Qa(o,e);o=Ea(o,o.next),s=Ea(s,s.next),Da(o,t,n,r,i,a,0),Da(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ma(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ta(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ba(o))}i.sort(Na);for(let e=0;e<i.length;e++)n=Pa(i[e],n);return n}function Na(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Pa(e,t){let n=Fa(e,t);if(!n)return t;let r=Qa(n,e);return Ea(r,r.next),Ea(n,n.next)}function Fa(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Ga(e,n))return n;do{if(Ga(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Va(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Xa(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Ia(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Ia(e,t){return Wa(e.prev,e,t.prev)<0&&Wa(t.next,e,e.next)<0}function La(e,t,n,r){let i=e;do i.z===0&&(i.z=za(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ra(i)}function Ra(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function za(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ba(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Va(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ha(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Va(e,t,n,r,i,a,o,s)}function Ua(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ya(e,t)&&(Xa(e,t)&&Xa(t,e)&&Za(e,t)&&(Wa(e.prev,e,t.prev)||Wa(e,t.prev,t))||Ga(e,t)&&Wa(e.prev,e,e.next)>0&&Wa(t.prev,t,t.next)>0)}function Wa(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ga(e,t){return e.x===t.x&&e.y===t.y}function Ka(e,t,n,r){let i=Ja(Wa(e,t,n)),a=Ja(Wa(e,t,r)),o=Ja(Wa(n,r,e)),s=Ja(Wa(n,r,t));return!!(i!==a&&o!==s||i===0&&qa(e,n,t)||a===0&&qa(e,r,t)||o===0&&qa(n,e,r)||s===0&&qa(n,t,r))}function qa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ja(e){return e>0?1:e<0?-1:0}function Ya(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ka(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Xa(e,t){return Wa(e.prev,e,e.next)<0?Wa(e,t,e.next)>=0&&Wa(e,e.prev,t)>=0:Wa(e,t,e.prev)<0||Wa(e,e.next,t)<0}function Za(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Qa(e,t){let n=to(e.i,e.x,e.y),r=to(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function $a(e,t,n,r){let i=to(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function eo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function to(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function no(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var ro=class{static triangulate(e,t,n=2){return wa(e,t,n)}},io=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];ao(e),oo(n,e);let a=e.length;t.forEach(ao);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,oo(n,t[e]);let o=ro.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function ao(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function oo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var so=class e extends Cr{constructor(e=new Ca([new z(.5,.5),new z(-.5,.5),new z(-.5,-.5),new z(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new dr(r,3)),this.setAttribute(`uv`,new dr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?co:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new B,b=new B,x=new B}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!io.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];io.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||R(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new z(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new z(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let ee=[],M,te=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];M=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),M[e]=A(t[e],t[r],t[i]);ee.push(M),te=te.concat(M)}let N;if(p===0)N=io.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);se(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];M=ee[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],M[e],a);se(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}N=io.triangulateShape(e,t)}let ne=N.length,re=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],te[e],re):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),se(x.x,x.y,x.z)):se(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],te[t],re):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),se(x.x,x.y,x.z)):se(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);se(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];M=ee[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],M[e],r);_?se(i.x,i.y+g[s-1].y,g[s-1].x+n):se(i.x,i.y,c+n)}}}ie(),ae();function ie(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<ne;e++){let n=N[e];ce(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<ne;e++){let n=N[e];ce(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<ne;e++){let t=N[e];ce(t[2],t[1],t[0])}for(let e=0;e<ne;e++){let t=N[e];ce(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ae(){let e=r.length/3,t=0;oe(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];oe(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function oe(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);le(t+r+n,t+i+n,t+i+a,t+r+a)}}}function se(e,t,n){a.push(e),a.push(t),a.push(n)}function ce(e,t,i){P(e),P(t),P(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ue(o[0]),ue(o[1]),ue(o[2])}function le(e,t,i,a){P(e),P(t),P(a),P(t),P(i),P(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ue(s[0]),ue(s[1]),ue(s[3]),ue(s[1]),ue(s[2]),ue(s[3])}function P(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ue(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ba[i.type]().fromJSON(i)),new e(r,t.options)}},co={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new z(a,o),new z(s,c),new z(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new z(o,1-c),new z(l,1-d),new z(f,1-m),new z(h,1-_)]:[new z(s,1-c),new z(u,1-d),new z(p,1-m),new z(g,1-_)]}};function lo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var uo=class e extends Ki{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},fo=class e extends Ki{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},po=class e extends Cr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new dr(p,3)),this.setAttribute(`normal`,new dr(m,3)),this.setAttribute(`uv`,new dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},mo=class e extends Cr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new dr(p,3)),this.setAttribute(`normal`,new dr(m,3)),this.setAttribute(`uv`,new dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ho=class e extends Cr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new B,f=new B,p=new B;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new dr(c,3)),this.setAttribute(`normal`,new dr(l,3)),this.setAttribute(`uv`,new dr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function go(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(vo(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(vo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function _o(e){let t={};for(let n=0;n<e.length;n++){let r=go(e[n]);for(let e in r)t[e]=r[e]}return t}function vo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function yo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function bo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}var xo={clone:go,merge:_o},So=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Co=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wo=class extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=So,this.fragmentShader=Co,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=yo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Bt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Gt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},To=class extends wo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Eo=class extends Mr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new H(16777215),this.specular=new H(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Do=class extends Mr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Oo=class extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=qe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ko=class extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ao(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function jo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Mo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},No=class extends Mo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:We,endingEnd:We}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ge:i=e,o=2*t-n;break;case Ke:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ge:a=e,s=2*n-t;break;case Ke:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Po=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Fo=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Io=class extends Mo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=zo(n,t,g,y,r);i[p]=Lo(x,o,_,b,m)}return i}};function Lo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ro(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function zo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Lo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ro(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Bo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ao(t,this.TimeBufferType),this.values=Ao(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ao(e.times,Array),values:Ao(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),jo(e.settings)&&(n.settings={inTangents:Ao(e.settings.inTangents,Array),outTangents:Ao(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Io(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Be:t=this.InterpolantFactoryMethodDiscrete;break;case Ve:t=this.InterpolantFactoryMethodLinear;break;case He:t=this.InterpolantFactoryMethodSmooth;break;case Ue:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Be;case this.InterpolantFactoryMethodLinear:return Ve;case this.InterpolantFactoryMethodSmooth:return He;case this.InterpolantFactoryMethodBezier:return Ue}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;jo(this.settings)&&(Vo(this.settings.inTangents,e),Vo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&rt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===He,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,jo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Vo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Bo.prototype.ValueTypeName=``,Bo.prototype.TimeBufferType=Float32Array,Bo.prototype.ValueBufferType=Float32Array,Bo.prototype.DefaultInterpolation=Ve;var Ho=class extends Bo{constructor(e,t,n){super(e,t,n)}};Ho.prototype.ValueTypeName=`bool`,Ho.prototype.ValueBufferType=Array,Ho.prototype.DefaultInterpolation=Be,Ho.prototype.InterpolantFactoryMethodLinear=void 0,Ho.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends Bo{constructor(e,t,n,r){super(e,t,n,r)}};Uo.prototype.ValueTypeName=`color`;var Wo=class extends Bo{constructor(e,t,n,r){super(e,t,n,r)}};Wo.prototype.ValueTypeName=`number`;var Go=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)St.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ko=class extends Bo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}};Ko.prototype.ValueTypeName=`quaternion`,Ko.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends Bo{constructor(e,t,n){super(e,t,n)}};qo.prototype.ValueTypeName=`string`,qo.prototype.ValueBufferType=Array,qo.prototype.DefaultInterpolation=Be,qo.prototype.InterpolantFactoryMethodLinear=void 0,qo.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends Bo{constructor(e,t,n,r){super(e,t,n,r)}};Jo.prototype.ValueTypeName=`vector`;var Yo=class extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xo=class extends Yo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zo=new Gt,Qo=new B,$o=new B,es=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=v,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qo),$o.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($o),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ts=new B,ns=new St,rs=new B,is=class extends yn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=tt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ts,ns,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ts,ns,rs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ts,ns,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ts,ns,rs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},as=new B,os=new z,ss=new z,cs=class extends is{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ht*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ht*2*Math.atan(Math.tan(mt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,os,ss),t.subVectors(ss,os)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ls=class extends is{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},us=class extends es{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends Yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new us}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},fs=-90,ps=1,ms=class extends yn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new cs(fs,ps,e,t);r.layers=this.layers,this.add(r);let i=new cs(fs,ps,e,t);i.layers=this.layers,this.add(i);let a=new cs(fs,ps,e,t);a.layers=this.layers,this.add(a);let o=new cs(fs,ps,e,t);o.layers=this.layers,this.add(o);let s=new cs(fs,ps,e,t);s.layers=this.layers,this.add(s);let c=new cs(fs,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},hs=class extends cs{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},gs=`\\[\\]\\.:\\/`,_s=RegExp(`[\\[\\]\\.:\\/]`,`g`),vs=`[^\\[\\]\\.:\\/]`,ys=`[^`+gs.replace(`\\.`,``)+`]`,bs=`((?:WC+[\\/:])*)`.replace(`WC`,vs),xs=`(WCOD+)?`.replace(`WCOD`,ys),Ss=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,vs),Cs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,vs),ws=RegExp(`^`+bs+xs+Ss+Cs+`$`),Ts=[`material`,`materials`,`bones`,`map`],Es=class{constructor(e,t,n){let r=n||Ds.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ds=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(_s,``)}static parseTrackName(e){let t=ws.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ts.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ds.Composite=Es,Ds.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ds.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ds.prototype.GetterByBindingType=[Ds.prototype._getValue_direct,Ds.prototype._getValue_array,Ds.prototype._getValue_arrayElement,Ds.prototype._getValue_toArray],Ds.prototype.SetterByBindingTypeAndVersioning=[[Ds.prototype._setValue_direct,Ds.prototype._setValue_direct_setNeedsUpdate,Ds.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ds.prototype._setValue_array,Ds.prototype._setValue_array_setNeedsUpdate,Ds.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ds.prototype._setValue_arrayElement,Ds.prototype._setValue_arrayElement_setNeedsUpdate,Ds.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ds.prototype._setValue_fromArray,Ds.prototype._setValue_fromArray_setNeedsUpdate,Ds.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function Os(e,t,n,r){let i=ks(r);switch(n){case j:return e*t;case ne:return e*t/i.components*i.byteLength;case re:return e*t/i.components*i.byteLength;case ie:return e*t*2/i.components*i.byteLength;case ae:return e*t*2/i.components*i.byteLength;case ee:return e*t*3/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case oe:return e*t*4/i.components*i.byteLength;case se:case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case le:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:case pe:return Math.max(e,16)*Math.max(t,8)/4;case ue:case fe:return Math.max(e,8)*Math.max(t,8)/2;case me:case he:case _e:case ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ge:case ye:case be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ne:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case F:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pe:case Fe:case Ie:return Math.ceil(e/4)*Math.ceil(t/4)*16;case I:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Re:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ks(e){switch(e){case v:case y:return{byteLength:1,components:1};case x:case b:case T:return{byteLength:2,components:1};case E:case D:return{byteLength:2,components:4};case C:case S:case w:return{byteLength:4,components:1};case k:case A:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function As(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function js(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ms={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},U={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},Ns={basic:{uniforms:_o([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.fog]),vertexShader:Ms.meshbasic_vert,fragmentShader:Ms.meshbasic_frag},lambert:{uniforms:_o([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.fog,U.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:Ms.meshlambert_vert,fragmentShader:Ms.meshlambert_frag},phong:{uniforms:_o([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.fog,U.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ms.meshphong_vert,fragmentShader:Ms.meshphong_frag},standard:{uniforms:_o([U.common,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.roughnessmap,U.metalnessmap,U.fog,U.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ms.meshphysical_vert,fragmentShader:Ms.meshphysical_frag},toon:{uniforms:_o([U.common,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.gradientmap,U.fog,U.lights,{emissive:{value:new H(0)}}]),vertexShader:Ms.meshtoon_vert,fragmentShader:Ms.meshtoon_frag},matcap:{uniforms:_o([U.common,U.bumpmap,U.normalmap,U.displacementmap,U.fog,{matcap:{value:null}}]),vertexShader:Ms.meshmatcap_vert,fragmentShader:Ms.meshmatcap_frag},points:{uniforms:_o([U.points,U.fog]),vertexShader:Ms.points_vert,fragmentShader:Ms.points_frag},dashed:{uniforms:_o([U.common,U.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ms.linedashed_vert,fragmentShader:Ms.linedashed_frag},depth:{uniforms:_o([U.common,U.displacementmap]),vertexShader:Ms.depth_vert,fragmentShader:Ms.depth_frag},normal:{uniforms:_o([U.common,U.bumpmap,U.normalmap,U.displacementmap,{opacity:{value:1}}]),vertexShader:Ms.meshnormal_vert,fragmentShader:Ms.meshnormal_frag},sprite:{uniforms:_o([U.sprite,U.fog]),vertexShader:Ms.sprite_vert,fragmentShader:Ms.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ms.background_vert,fragmentShader:Ms.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:Ms.backgroundCube_vert,fragmentShader:Ms.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ms.cube_vert,fragmentShader:Ms.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ms.equirect_vert,fragmentShader:Ms.equirect_frag},distance:{uniforms:_o([U.common,U.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ms.distance_vert,fragmentShader:Ms.distance_frag},shadow:{uniforms:_o([U.lights,U.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:Ms.shadow_vert,fragmentShader:Ms.shadow_frag}};Ns.physical={uniforms:_o([Ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:Ms.meshphysical_vert,fragmentShader:Ms.meshphysical_frag};var Ps={r:0,b:0,g:0},Fs=new Gt,Is=new V;Is.set(-1,0,0,0,1,0,0,0,1);function Ls(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new fi(new Vi(1,1,1),new wo({name:`BackgroundCubeMaterial`,uniforms:go(Ns.backgroundCube.uniforms),vertexShader:Ns.backgroundCube.vertexShader,fragmentShader:Ns.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Is),l.material.toneMapped=kt.getTransfer(i.colorSpace)!==Ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new fi(new po(2,2),new wo({name:`BackgroundMaterial`,uniforms:go(Ns.background.uniforms),vertexShader:Ns.background.vertexShader,fragmentShader:Ns.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=kt.getTransfer(i.colorSpace)!==Ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ps,bo(e)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Rs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function zs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Bs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Vs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ar,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Hs=4,Us=6,Ws=20,Gs=256,Ks=new ls,qs=new H,Js=null,Ys=0,Xs=0,Zs=!1,Qs=new B,$s=new B,ec=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Qs}=i;Js=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Js,Ys,Xs),this._renderer.xr.enabled=Zs,e.scissorTest=!1,rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Js=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:h,minFilter:h,generateMipmaps:!1,type:T,format:M,colorSpace:Ye,depthBuffer:!1},r=nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tc(r)),this._blurMaterial=ac(r,e,t),this._ggxMaterial=ic(r,e,t)}return r}_compileMaterial(e){let t=new fi(new Cr,e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,n,r,i){let a=new cs(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(qs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fi(new Vi,new ei({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(qs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;rc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;rc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ks)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Hs?n-d+Hs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,rc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ks),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,rc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ks)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];rc(t,3*l*(r>this._lodMax-Hs?r-this._lodMax+Hs:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ks)}};function tc(e){let t=[],n=[],r=e,i=e-Hs+1+Us;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?$s.set(1,r,n):e===1?$s.set(-n,1,-r):e===2?$s.set(-n,r,1):e===3?$s.set(-1,r,-n):e===4?$s.set(-n,-1,r):$s.set(n,r,-1),$s.toArray(l,(e*6+t)*3)}}let u=new Cr;u.setAttribute(`position`,new cr(c,3)),u.setAttribute(`outputDirection`,new cr(l,3)),n.push(new fi(u,null)),r>Hs&&r--}return{lodMeshes:n,sizeLods:t}}function nc(e,t,n){let r=new Ht(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function rc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ic(e,t,n){return new wo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ac(e,t,n){return new wo({name:`SphericalGaussianBlur`,defines:{SAMPLES:Ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function oc(){return new wo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sc(){return new wo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var lc=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ii(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vi(5,5,5),i=new wo({name:`CubemapFromEquirect`,uniforms:go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new fi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=h),new ms(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function uc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new lc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ec(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ec(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function dc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&lt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function fc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?ur:lr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function pc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function mc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function hc(e,t,n){let r=new WeakMap,i=new Bt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Ut(h,p,m,u);g.type=w,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function gc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var _c={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function vc(e,t,n,r,i,a){let o=new Ht(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Cr;l.setAttribute(`position`,new dr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new dr([0,2,0,0,2,0],2));let u=new To({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new fi(l,u),f=new ls(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Ht(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new Ht(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},kt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=_c[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var yc=new zt,bc=new Ri(1,1),xc=new Ut,Sc=new Wt,Cc=new Ii,wc=[],Tc=[],Ec=new Float32Array(16),Dc=new Float32Array(9),Oc=new Float32Array(4);function kc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=wc[i];if(a===void 0&&(a=new Float32Array(i),wc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ac(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function jc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Mc(e,t){let n=Tc[t];n===void 0&&(n=new Int32Array(t),Tc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Nc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ac(n,t))return;e.uniform2fv(this.addr,t),jc(n,t)}}function Fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ac(n,t))return;e.uniform3fv(this.addr,t),jc(n,t)}}function Ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ac(n,t))return;e.uniform4fv(this.addr,t),jc(n,t)}}function Lc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ac(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),jc(n,t)}else{if(Ac(n,r))return;Oc.set(r),e.uniformMatrix2fv(this.addr,!1,Oc),jc(n,r)}}function Rc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ac(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),jc(n,t)}else{if(Ac(n,r))return;Dc.set(r),e.uniformMatrix3fv(this.addr,!1,Dc),jc(n,r)}}function zc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ac(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),jc(n,t)}else{if(Ac(n,r))return;Ec.set(r),e.uniformMatrix4fv(this.addr,!1,Ec),jc(n,r)}}function Bc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ac(n,t))return;e.uniform2iv(this.addr,t),jc(n,t)}}function Hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ac(n,t))return;e.uniform3iv(this.addr,t),jc(n,t)}}function Uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ac(n,t))return;e.uniform4iv(this.addr,t),jc(n,t)}}function Wc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ac(n,t))return;e.uniform2uiv(this.addr,t),jc(n,t)}}function Kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ac(n,t))return;e.uniform3uiv(this.addr,t),jc(n,t)}}function qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ac(n,t))return;e.uniform4uiv(this.addr,t),jc(n,t)}}function Jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(bc.compareFunction=n.isReversedDepthBuffer()?518:515,a=bc):a=yc,n.setTexture2D(t||a,i)}function Yc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Sc,i)}function Xc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Cc,i)}function Zc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||xc,i)}function Qc(e){switch(e){case 5126:return Nc;case 35664:return Pc;case 35665:return Fc;case 35666:return Ic;case 35674:return Lc;case 35675:return Rc;case 35676:return zc;case 5124:case 35670:return Bc;case 35667:case 35671:return Vc;case 35668:case 35672:return Hc;case 35669:case 35673:return Uc;case 5125:return Wc;case 36294:return Gc;case 36295:return Kc;case 36296:return qc;case 35678:case 36198:case 36298:case 36306:case 35682:return Jc;case 35679:case 36299:case 36307:return Yc;case 35680:case 36300:case 36308:case 36293:return Xc;case 36289:case 36303:case 36311:case 36292:return Zc}}function $c(e,t){e.uniform1fv(this.addr,t)}function el(e,t){let n=kc(t,this.size,2);e.uniform2fv(this.addr,n)}function tl(e,t){let n=kc(t,this.size,3);e.uniform3fv(this.addr,n)}function nl(e,t){let n=kc(t,this.size,4);e.uniform4fv(this.addr,n)}function rl(e,t){let n=kc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function il(e,t){let n=kc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function al(e,t){let n=kc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ol(e,t){e.uniform1iv(this.addr,t)}function sl(e,t){e.uniform2iv(this.addr,t)}function cl(e,t){e.uniform3iv(this.addr,t)}function ll(e,t){e.uniform4iv(this.addr,t)}function ul(e,t){e.uniform1uiv(this.addr,t)}function dl(e,t){e.uniform2uiv(this.addr,t)}function fl(e,t){e.uniform3uiv(this.addr,t)}function pl(e,t){e.uniform4uiv(this.addr,t)}function ml(e,t,n){let r=this.cache,i=t.length,a=Mc(n,i);Ac(r,a)||(e.uniform1iv(this.addr,a),jc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?bc:yc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function hl(e,t,n){let r=this.cache,i=t.length,a=Mc(n,i);Ac(r,a)||(e.uniform1iv(this.addr,a),jc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Sc,a[e])}function gl(e,t,n){let r=this.cache,i=t.length,a=Mc(n,i);Ac(r,a)||(e.uniform1iv(this.addr,a),jc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Cc,a[e])}function _l(e,t,n){let r=this.cache,i=t.length,a=Mc(n,i);Ac(r,a)||(e.uniform1iv(this.addr,a),jc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||xc,a[e])}function vl(e){switch(e){case 5126:return $c;case 35664:return el;case 35665:return tl;case 35666:return nl;case 35674:return rl;case 35675:return il;case 35676:return al;case 5124:case 35670:return ol;case 35667:case 35671:return sl;case 35668:case 35672:return cl;case 35669:case 35673:return ll;case 5125:return ul;case 36294:return dl;case 36295:return fl;case 36296:return pl;case 35678:case 36198:case 36298:case 36306:case 35682:return ml;case 35679:case 36299:case 36307:return hl;case 35680:case 36300:case 36308:case 36293:return gl;case 36289:case 36303:case 36311:case 36292:return _l}}var yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qc(t.type)}},bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vl(t.type)}},xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Sl=/(\w+)(\])?(\[|\.)?/g;function Cl(e,t){e.seq.push(t),e.map[t.id]=t}function wl(e,t,n){let r=e.name,i=r.length;for(Sl.lastIndex=0;;){let a=Sl.exec(r),o=Sl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Cl(n,l===void 0?new yl(s,e,t):new bl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new xl(s),Cl(n,e)),n=e}}}var Tl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);wl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function El(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Dl=37297,Ol=0;function kl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Al=new V;function jl(e){kt._getMatrix(Al,kt.workingColorSpace,e);let t=`mat3( ${Al.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(e)){case Xe:return[t,`LinearTransferOETF`];case Ze:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ml(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+kl(e.getShaderSource(t),r)}return i}function Nl(e,t){let n=jl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Pl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Fl(e,t){let n=Pl[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Il=new B;function Ll(){return kt.getLuminanceCoefficients(Il),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Il.x.toFixed(4)}, ${Il.y.toFixed(4)}, ${Il.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Rl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Vl).join(`
`)}function zl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Bl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Vl(e){return e!==``}function Hl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ul(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(e){return e.replace(Wl,ql)}var Kl=new Map;function ql(e,t){let n=Ms[t];if(n===void 0){let e=Kl.get(t);if(e!==void 0)n=Ms[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Gl(n)}var Jl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(e){return e.replace(Jl,Xl)}function Xl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Zl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ql={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function $l(e){return Ql[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var eu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function tu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:eu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var nu={302:`ENVMAP_MODE_REFRACTION`};function ru(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:nu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var iu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function au(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:iu[e.combine]||`ENVMAP_BLENDING_NONE`}function ou(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function su(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=$l(n),l=tu(n),u=ru(n),d=au(n),f=ou(n),p=Rl(n),m=zl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Vl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Vl).join(`
`),_.length>0&&(_+=`
`)):(g=[Zl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Vl).join(`
`),_=[Zl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ms.tonemapping_pars_fragment,n.toneMapping===0?``:Fl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ms.colorspace_pars_fragment,Nl(`linearToOutputTexel`,n.outputColorSpace),Ll(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Vl).join(`
`)),o=Gl(o),o=Hl(o,n),o=Ul(o,n),s=Gl(s),s=Hl(s,n),s=Ul(s,n),o=Yl(o),s=Yl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=El(i,i.VERTEX_SHADER,y),S=El(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ml(i,x,`vertex`),n=Ml(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Tl(i,h),T=Bl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Dl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ol++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var cu=0,lu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uu(e),t.set(e,n)),n}},uu=class{constructor(e){this.id=cu++,this.code=e,this.usedTimes=0}};function du(e){return e===1030||e===37490||e===36285}function fu(e,t,n,r,i,a){let o=new nn,s=new lu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ns[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,te=h.isBatchedMesh===!0,N=!!i.map,ne=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=_e&&!!i.transmissionMap,Ae=_e&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,F=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let Ie={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:te,batchingColor:te&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&du(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:F,combine:i.combine,mapUv:N&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:P&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(N||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&kt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&kt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ns[t];n=xo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new su(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function pu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function mu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function hu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||mu),r.length>1&&r.sort(t||hu),i.length>1&&i.sort(t||hu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function _u(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new gu,e.set(t,[i])):n>=r.length?(i=new gu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function vu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new H};break;case`SpotLight`:n={position:new B,direction:new B,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function yu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var bu=0;function xu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Su(e){let t=new vu,n=yu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new Gt,o=new Gt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(xu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=U.LTC_FLOAT_1,r.rectAreaLTC2=U.LTC_FLOAT_2):(r.rectAreaLTC1=U.LTC_HALF_1,r.rectAreaLTC2=U.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=bu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Cu(e){let t=new Su(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function wu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Cu(e),t.set(n,[a])):r>=i.length?(a=new Cu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Tu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Du=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Ou=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],ku=new Gt,Au=new B,ju=new B;function Mu(e,t,n){let r=new Oi,i=new z,a=new z,o=new Bt,s=new Oo,c=new ko,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new wo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:Tu,fragmentShader:Eu}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Cr;g.setAttribute(`position`,new cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new fi(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Ht(i.x,i.y,{format:ie,type:T,minFilter:h,magFilter:h,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ri(i.x,i.y,w),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=te,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new lc(i.x),d.map.depthTexture=new zi(i.x,C)):(d.map=new Ht(i.x,i.y),d.map.depthTexture=new Ri(i.x,i.y,C)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=te,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Au.setFromMatrixPosition(l.matrixWorld),e.position.copy(Au),ju.copy(e.position),ju.add(Du[t]),e.up.copy(Ou[t]),e.lookAt(ju),e.updateMatrixWorld(),n.makeTranslation(-Au.x,-Au.y,-Au.z),ku.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(ku,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ht(i.x,i.y,{format:ie,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Nu(e,t){function n(){let t=!1,n=new Bt,r=null,i=new Bt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=dt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(N)[1]),M=te>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Bt().fromArray(ie),se=new Bt().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ue(e.BLEND),g=!1);return}if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(M&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+ee-1),ne!==t&&(e.activeTexture(t),ne=t)}function we(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+ee-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function F(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:F,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:I,viewport:Le,reset:Be}}function Pu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):it(`canvas`)}function T(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Xe:kt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),te(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),re(t)}function te(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ne(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function ne(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function re(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ie=0;function ae(){ie=0}function oe(){return ie}function se(e){ie=e}function ce(){let e=ie;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ie+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&F(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){be(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){be(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let pe={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},me={[f]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[m]:e.NEAREST_MIPMAP_LINEAR,[h]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[_]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,pe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,pe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,pe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,he[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ee));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=le(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ne(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ve(n.start,r.width,4),c=ve(t.start,r.width,4);n.start<=i+1&&a===c&&ve(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function be(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=_e(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=kt.getPrimaries(kt.workingColorSpace),r=o.colorSpace===``?null:kt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Pe(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);ge(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=j(o,t);if(o.isDepthTexture)p=A(o.format===N,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&ye(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=Os(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=Os(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Fe(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Fe(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,o,s){if(o.image.length!==6)return;let c=_e(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=kt.getPrimaries(kt.workingColorSpace),r=o.colorSpace===``?null:kt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Pe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=k(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=j(o,h);ge(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Fe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Me(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,ee)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=Me(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)we(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?we(i.__webglFramebuffer[0],t,0):we(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ce(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ce(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,i){let a=r.get(t);n!==void 0&&Se(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Te(t)}function De(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,M);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ne(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Se(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ge(c,a),Se(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ge(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Se(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Te(t)}function Oe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let ke=[],Ae=[];function je(t){if(t.samples>0){if(Ne(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ke.length=0,Ae.length=0,ke.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ke.push(l),Ae.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Me(e){return Math.min(i.maxSamples,e.samples)}function Ne(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function F(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(kt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=P,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Fu(e,t){function n(n,r=``){let i,a=kt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Iu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Bi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wo({vertexShader:Iu,fragmentShader:Lu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fi(new po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zu=class extends ft{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Ru,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],w=new z,T=null,E=null,D=new cs;D.viewport=new Bt;let k=new cs;k.viewport=new Bt;let A=[D,k],j=new hs,ee=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Sn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Sn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Sn,x[e]=t),t.getHandSpace()};function re(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ee=null,ne=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?N:te,a=_.stencil?O:C);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Ht(d.textureWidth,d.textureHeight,{format:M,type:v,depthTexture:new Ri(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ht(f.framebufferWidth,f.framebufferHeight,{format:M,type:v,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let oe=new B,se=new B;function ce(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),j.near=k.near=D.near=t,j.far=k.far=D.far=n,(ee!==j.near||ne!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),ee=j.near,ne=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,k.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;le(j,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?ce(j,D,k):j.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),P(e,j,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ht*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)},this.getCameraTexture=function(e){return g[e]};let ue=null;function de(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=A[n];o===void 0&&(o=new cs,o.layers.enable(n),o.viewport=new Bt,A[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Bi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let fe=new As;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},Bu=new Gt,Vu=new V;Vu.set(-1,0,0,0,1,0,0,0,1);function Hu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,bo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Bu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Vu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Uu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Wu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gu=null;function Ku(){return Gu===null&&(Gu=new hi(Wu,16,16,ie,T),Gu.name=`DFG_LUT`,Gu.minFilter=h,Gu.magFilter=h,Gu.wrapS=u,Gu.wrapT=u,Gu.generateMipmaps=!1,Gu.needsUpdate=!0),Gu}var qu=class{constructor(e={}){let{canvas:t=at(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=v}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([oe,ae,re]),g=new Set([v,C,x,O,E,D]),y=new Uint32Array(4),b=new Int32Array(4),S=new B,w=null,k=null,A=[],j=[],ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,te=!1,N=null,ne=null,ie=null,se=null;this._outputColorSpace=Je;let ce=0,le=0,P=null,ue=-1,de=null,fe=new Bt,pe=new Bt,me=null,he=new H(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new Bt(0,0,_e,ve),Ce=new Bt(0,0,_e,ve),we=!1,Te=new Oi,Ee=!1,De=!1,Oe=new Gt,ke=new B,Ae=new Bt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return P===null?ye:1}let F=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,I,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Ye,Xe,Ze,Qe,$e,et,nt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),F===null){let t=`webgl2`;if(F=Pe(t,e),F===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),R(`WebGLRenderer: `+e.message),e}function ot(){Fe=new dc(F),Fe.init(),nt=new Fu(F,Fe),Ie=new Bs(F,Fe,e,nt),I=new Nu(F,Fe),Ie.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),ne=F.createFramebuffer(),ie=F.createFramebuffer(),se=F.createFramebuffer(),Le=new mc(F),Re=new pu,ze=new Pu(F,Fe,I,Re,Ie,nt,Le),Be=new uc(M),Ve=new js(F),rt=new Rs(F,Ve),He=new fc(F,Ve,Le,rt),Ue=new gc(F,He,Ve,rt,Le),Qe=new hc(F,Ie,ze),Ye=new Vs(Re),We=new fu(M,Be,Fe,Ie,rt,Ye),Ge=new Hu(M,Re),Ke=new _u,qe=new wu(Fe),Ze=new Ls(M,Be,I,Ue,p,s),Xe=new Mu(M,Ue,Ie),it=new Uu(F,Le,Ie,I),$e=new zs(F,Fe,Le),et=new pc(F,Fe,Le),Le.programs=We.programs,M.capabilities=Ie,M.extensions=Fe,M.properties=Re,M.renderLists=Ke,M.shadowMap=Xe,M.state=I,M.info=Le}m!==1009&&(ee=new vc(m,t.width,t.height,o,r,i));let ct=new zu(M,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){if(ct.isPresenting){L(`WebGLRenderer: Can't change size while VR device is presenting.`);return}_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ee.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(ye).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(ye).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=h.has(t)}if(e){let e=P.texture.type,t=g.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,F.clearBufferuiv(F.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,F.clearBufferiv(F.COLOR,0,b))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),N=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),Ze.dispose(),Ke.dispose(),qe.dispose(),Re.dispose(),Be.dispose(),Ue.dispose(),rt.dispose(),it.dispose(),We.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,yt),ct.removeEventListener(`sessionend`,bt),xt.stop()};function lt(e){e.preventDefault(),st(`WebGLRenderer: Context Lost.`),te=!0}function dt(){st(`WebGLRenderer: Context Restored.`),te=!1;let e=Le.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;ot(),Le.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function ft(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),Re.remove(e)}function ht(e){let t=Re.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Ve.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=Re.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){N!==null&&e.isNodeMaterial&&N.setObject(r,e),Ee===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),N!==null&&N.renderStart(e,t,n),k=qe.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),N!==null&&N.updateLights(k.state.lightsArray),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),Ee===!0&&Ye.setGlobalState(this.clippingPlanes,t),N!==null&&Xe.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),k=j.pop(),N!==null&&N.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=Re.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new As;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,ct.setAnimationLoop(e),e===null?xt.stop():xt.start()},ct.addEventListener(`sessionstart`,yt),ct.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;N!==null&&N.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=ee!==null&&(P===null||n)&&ee.begin(M,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,P),k=qe.get(e,j.length),k.init(t),k.state.textureUnits=ze.getTextureUnits(),j.push(k),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(Oe,tt,t.reversedDepth),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),w=Ke.get(e,A.length),w.init(),A.push(w),ct.enabled===!0&&ct.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&z(e,t,-1/0,M.sortObjects)}z(e,t,0,M.sortObjects),w.finish(),N!==null&&N.updateLights(k.state.lightsArray),M.sortObjects===!0&&w.sort(be,xe),Me=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Me&&Ze.addToRenderList(w,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ye.beginShadows();let i=k.state.shadowsArray;if(Xe.render(i,e,t),Ee===!0&&Ye.endShadows(),(r&&ee.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Me&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(w,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Me&&Ze.render(e),St(w,e,t)}P!==null&&le===0&&(ze.updateMultisampleRenderTarget(P),ze.updateRenderTargetMipmap(P)),r&&ee.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),rt.resetDefaultState(),ue=-1,de=null,j.pop(),j.length>0?(k=j[j.length-1],ze.setTextureUnits(k.state.textureUnits),Ee===!0&&Ye.setGlobalState(M.clippingPlanes,k.state.camera)):k=null,A.pop(),w=A.length>0?A[A.length-1]:null,N!==null&&N.renderEnd()};function z(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Te)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=Ue.update(e),a=e.material;a.visible&&w.push(e,i,a,n,Ae.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Te))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&w.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&w.push(e,i,a,n,Ae.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)z(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Ee===!0&&Ye.setGlobalState(M.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Ht(1,1,{generateMipmaps:!0,type:e?T:v,minFilter:_,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(he),ge=M.getClearAlpha(),ge<1&&M.setClearColor(16777215,.5),M.clear(),Me&&Ze.render(n);let u=M.toneMapping;M.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Ee===!0&&Ye.setGlobalState(M.clippingPlanes,r),wt(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,V(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}M.setRenderTarget(s,c,l),M.setClearColor(he,ge),d!==void 0&&(r.viewport=d),M.toneMapping=u}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&V(o,t,n,s,l,c)}}function V(e,t,n,r,i,a){N!==null&&i.isNodeMaterial&&N.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=je);let r=Re.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=We.getUniforms(e),N!==null&&e.isNodeMaterial&&N.build(e,n,s),e.onBeforeCompile(s,M),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),Dt(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Tl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=Re.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];S.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(S))return n}return null}function At(e,t,n,r,i){t.isScene!==!0&&(t=je),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:kt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Re.get(r),y=k.state.lights;if(Ee===!0&&(De===!0||e!==de)){let t=e===de&&r.id===ue;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),N&&r.isNodeMaterial&&N.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(I.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ue&&(ue=r.id,C=!0),v.needsLights){let e=Ot(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(F,`projectionMatrix`,e.projectionMatrix),T.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(F,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&T.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(F,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&T.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&T.setValue(F,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&T.setValue(F,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){T.setOptional(F,i,`bindMatrix`),T.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(F,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(T.setOptional(F,i,`batchingTexture`),T.setValue(F,`batchingTexture`,i._matricesTexture,ze),T.setOptional(F,i,`batchingIdTexture`),T.setValue(F,`batchingIdTexture`,i._indirectTexture,ze),T.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(F,`batchingColorTexture`,i._colorsTexture,ze));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Ku()),C){if(T.setValue(F,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&jt(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,ye,ve,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Tl.upload(F,Et(v),E,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Tl.upload(F,Et(v),E,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(F,`center`,i.center),T.setValue(F,`modelViewMatrix`,i.modelViewMatrix),T.setValue(F,`normalMatrix`,i.normalMatrix),T.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=Re.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Re.get(e.texture).__webglTexture=t,Re.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Re.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=Re.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),ue=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,Re.get(e.texture).__webglTexture,Re.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Re.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Re.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?Re.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=ne),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=Re.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Re.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Re.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function Nt(e){let t=Re.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Re.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=P===null?null:Re.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Re.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=P===null?null:Re.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ut(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Re.get(e),r=Re.get(t),h=Re.get(n.__renderTarget),g=Re.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Re.has(e)){let n=Re.get(e),r=Re.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,ie),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){Re.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,I.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return tt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=kt._getUnpackColorSpace()}},W={trackW:28,trackWEnd:50,townW:70,grade:.3,townRun:210,flattenLen:45,startR:.55,minR:.4,eatRatio:.9,growK:.85,expectedR:[.6,2.4,4.4,7,9.5],bandUp:5,bandDown:1.2,bandMin:.02,bandMax:2.5,passiveGrow:.006,contactK:.7,baseSpeed:12,sizeSpeed:3.4,maxSpeed:26,accel:5,steerSens:1.1,steerStiff:46,steerMass:.32,smashRatio:2,smashLoss:.09,momentumTime:.45,bumpLoss:.1,patchMelt:.25,gravity:24,milestones:[1.4,2.6,4.2,6.5,9.5],milestoneNames:[`BÜYÜYOR!`,`ÇIĞ!`,`MEGA ÇIĞ!`,`FELAKET!`,`KIYAMET!`],snowDensity:.45,comboWindow:.9,townReach:.12,starThresholds:[.3,.6,.85],viewAhead:260,viewBehind:40},Ju={pebble:.02,bush_small:.01,penguin:.03,rabbit:.004,gift:.005,traffic_cone:.004,person:.08,skier:.09,snowman:.3,sled:.02,bench:.06,fence:.05,pine_small:.15,car:1.4,car_blue:1.5,snowmobile:.4,deer:.25,kiosk:3,pine:1.2,yeti:.6,boulder:18,cabin:45,bus:12,lift_pylon:9,truck:15,pine_big:6,hotel:4200,gondola_station:900,water_tower:700,rock_big:1600,house:160,house_tall:260,shop:120,apartment:2400,clocktower:1300,barn:140,chunk:.05,k_sedan:1.3,k_sports:1.2,k_suv:2,k_taxi:1.3,k_police:1.5,k_van:2.2,k_ambulance:3,k_pickup:1.9,k_tractor:3.5,k_truck:9,k_delivery:7,k_garbage_truck:12,k_firetruck:14,k_snowman:.3,k_snowman_hat:.35,k_tent:.1,k_canoe:.05},Yu=[.02,.1,1.5,20,1e3],Xu={person:`İNSAN`,skier:`KAYAKÇI`,snowman:`KARDAN ADAM`,penguin:`PENGUEN`,deer:`GEYİK`,car:`ARABA`,car_blue:`ARABA`,snowmobile:`KAR MOTORU`,kiosk:`KULÜBE`,yeti:`YETİ`,boulder:`KAYA`,cabin:`DAĞ EVİ`,bus:`OTOBÜS`,lift_pylon:`TELEFERİK DİREĞİ`,truck:`KAR KÜREME`,pine_big:`DEV ÇAM`,pine:`ÇAM`,hotel:`OTEL`,gondola_station:`TELEFERİK`,water_tower:`SU KULESİ`,rock_big:`KAYALIK`,k_sedan:`ARABA`,k_sports:`SPOR ARABA`,k_suv:`CİP`,k_taxi:`TAKSİ`,k_police:`POLİS ARABASI`,k_van:`MİNİBÜS`,k_ambulance:`AMBULANS`,k_pickup:`KAMYONET`,k_tractor:`TRAKTÖR`,k_truck:`KAMYON`,k_delivery:`KARGO KAMYONU`,k_garbage_truck:`ÇÖP KAMYONU`,k_firetruck:`İTFAİYE`,k_snowman:`KARDAN ADAM`,k_snowman_hat:`KARDAN ADAM`,k_tent:`ÇADIR`,k_canoe:`KANO`,k_sled:`KIZAK`,k_gingerbread:`ZENCEFİLLİ ADAM`,k_pine_a_big:`DEV ÇAM`,k_pine_b_big:`DEV ÇAM`};function Zu(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Cr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Qu(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Qu(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Qu(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new cr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var $u=[[`pebble`,`bush_small`,`penguin`,`rabbit`,`gift`,`traffic_cone`],[`person`,`skier`,`snowman`,`sled`,`bench`,`fence`,`pine_small`],[`car`,`car_blue`,`snowmobile`,`deer`,`kiosk`,`pine`,`yeti`,`boulder`],[`cabin`,`bus`,`lift_pylon`,`truck`,`pine_big`],[`hotel`,`gondola_station`,`water_tower`,`rock_big`]],ed=Math.PI,td=ed/2,nd=new tn,rd=new St,id=new B,ad=new B,od=new Gt,sd=new B(0,1,0),cd=new B,ld=new B,ud=new B,dd=new B,fd=new B;function pd(e,t,n,r=0){let i=Math.sin(Math.round(e*1e3)*12.9898+Math.round(t*1e3)*78.233+Math.round(n*1e3)*37.719+r*19.19)*43758.5453;return i-Math.floor(i)}function md(e,t,n){let r=e.attributes.position;for(let e=0;e<r.count;e++){let i=r.getX(e),a=r.getY(e),o=r.getZ(e),s=1+t*(pd(i,a,o,n)*2-1);r.setXYZ(e,i*s,a*s,o*s)}}function hd(e=9213610,t=.55,n=0){let r=new H(e),i=r.clone().multiplyScalar(.7),a=r.clone().lerp(new H(16777215),.22),o=new H(16777215),s=new H(15003899),c=new H;return(e,r)=>{let l=pd(r.x,r.y,r.z,n);if(e.y>t)return l>.45?o:s;let u=Math.min(1,Math.max(0,.15+e.y*.5+l*.45));return c.copy(i).lerp(a,u).clone()}}function gd(e,t,n){switch(e){case`+z`:return[t,n,0];case`-z`:return[-t,-n,ed];case`+x`:return[n,-t,td];default:return[-n,t,-td]}}var _d=class{constructor(){this.parts=[],this.stack=[new Gt]}push(e=0,t=0,n=0,r=0,i=0,a=0,o=1){nd.set(r,i,a),rd.setFromEuler(nd),id.set(e,t,n),ad.set(o,o,o);let s=new Gt().compose(id,rd,ad);return this.stack.push(this.stack[this.stack.length-1].clone().multiply(s)),this}pop(){return this.stack.pop(),this}add(e,t,n=0,r=0,i=0,a=null,o=null){let s=e.index?e.toNonIndexed():e;for(let e of Object.keys(s.attributes))e!==`position`&&s.deleteAttribute(e);return nd.set(a?a[0]:0,a?a[1]:0,a?a[2]:0),rd.setFromEuler(nd),o==null?ad.set(1,1,1):typeof o==`number`?ad.set(o,o,o):ad.set(o[0],o[1],o[2]),id.set(n,r,i),od.compose(id,rd,ad),od.premultiply(this.stack[this.stack.length-1]),s.applyMatrix4(od),this.parts.push({g:s,col:t}),this}box(e,t,n,r,i=0,a=0,o=0,s=null){return this.add(new Vi(e,t,n),r,i,a,o,s)}boxB(e,t,n,r,i=0,a=0,o=0,s=null){return this.box(e,t,n,r,i,a+t/2,o,s)}cyl(e,t,n,r,i,a=0,o=0,s=0,c=null,l=!1){return this.add(new Wi(e,t,n,r,1,l),i,a,o,s,c)}cylB(e,t,n,r,i,a=0,o=0,s=0,c=null,l=!1){return this.cyl(e,t,n,r,i,a,o+n/2,s,c,l)}cone(e,t,n,r,i=0,a=0,o=0,s=null,c=!1){return this.cyl(0,e,t,n,r,i,a,o,s,c)}coneB(e,t,n,r,i=0,a=0,o=0,s=null,c=!1){return this.cyl(0,e,t,n,r,i,a+t/2,o,s,c)}ball(e,t,n=0,r=0,i=0,a=null,o=1,s=0,c=0){let l=new uo(e,o);return s&&md(l,s,c),this.add(l,t,n,r,i,null,a)}blob(e,t,n=0,r=0,i=0,a=null,o=7,s=5){return this.add(new mo(e,o,s),t,n,r,i,null,a)}quad(e,t,n,r=0,i=0,a=0,o=null){return this.add(new po(e,t),n,r,i,a,o)}disc(e,t,n,r=0,i=0,a=0,o=null){return this.add(new Ui(e,t),n,r,i,a,o)}tbox(e,t,n,r,i=0,a=0,o=0,s=1,c=1,l=0,u=null){let d=new Vi(e,t,n),f=d.attributes.position;for(let e=0;e<f.count;e++)f.getY(e)>0&&(f.setX(e,f.getX(e)*s),f.setZ(e,f.getZ(e)*c+l));return this.add(d,r,i,a,o,u)}tboxB(e,t,n,r,i=0,a=0,o=0,s=1,c=1,l=0,u=null){return this.tbox(e,t,n,r,i,a+t/2,o,s,c,l,u)}rod(e,t,n,r,i,a=6,o=!0){cd.set(e[0],e[1],e[2]),ld.set(t[0],t[1],t[2]),fd.copy(ld).sub(cd);let s=fd.length();fd.normalize(),rd.setFromUnitVectors(sd,fd),nd.setFromQuaternion(rd);let c=new Wi(r,n,s,a,1,!o);return this.add(c,i,(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2,[nd.x,nd.y,nd.z])}strut(e,t,n,r,i=n){cd.set(e[0],e[1],e[2]),ld.set(t[0],t[1],t[2]),fd.copy(ld).sub(cd);let a=fd.length();fd.normalize(),rd.setFromUnitVectors(sd,fd),nd.setFromQuaternion(rd);let o=new Vi(n,a,i);return this.add(o,r,(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2,[nd.x,nd.y,nd.z])}extrudeZ(e,t,n,r=0,i=0,a=0){let o=[],s=e.length;for(let n=1;n<s-1;n++)o.push(e[0][0],e[0][1],t/2,e[n][0],e[n][1],t/2,e[n+1][0],e[n+1][1],t/2),o.push(e[0][0],e[0][1],-t/2,e[n+1][0],e[n+1][1],-t/2,e[n][0],e[n][1],-t/2);let c=new Cr;return c.setAttribute(`position`,new dr(o,3)),this.add(c,n,r,i,a)}fq(e,t,n,r,i,a,o,s=0){let[c,l,u]=gd(e,i,o);return this.quad(t,n,r,c,a,l,[0,u,s])}fdisc(e,t,n,r,i,a,o){let[s,c,l]=gd(e,i,o);return this.disc(t,n,r,s,a,c,[0,l,0])}fbox(e,t,n,r,i,a,o,s){let[c,l,u]=gd(e,a,s);return this.box(t,n,r,i,c,o,l,[0,u,0])}win(e,t,n,r,i,a,o={}){let s=o.frame??16777215,c=o.glass??8176878;return this.fq(e,i+.3,a+.3,s,t,n,r+.03),this.fq(e,i,a,c,t,n,r+.06),o.bars!==!1&&(this.fq(e,.08,a,s,t,n,r+.09),this.fq(e,i,.08,s,t,n,r+.09)),o.sill&&this.fbox(e,i+.5,.14,.34,s,t,n-a/2-.22,r+.14),this}build(e,t,n,r={}){let i=[];for(let{g:e,col:t}of this.parts){let n=e.attributes.position,r=n.count,a=new Float32Array(r*3);if(typeof t==`function`)for(let e=0;e<r;e+=3){cd.fromBufferAttribute(n,e),ld.fromBufferAttribute(n,e+1),ud.fromBufferAttribute(n,e+2),dd.subVectors(ud,ld).cross(fd.subVectors(cd,ld)).normalize(),id.copy(cd).add(ld).add(ud).multiplyScalar(1/3);let r=t(dd,id);r.isColor||(r=new H(r));for(let t=0;t<3;t++)a[(e+t)*3]=r.r,a[(e+t)*3+1]=r.g,a[(e+t)*3+2]=r.b}else{let e=new H(t);for(let t=0;t<r;t++)a[t*3]=e.r,a[t*3+1]=e.g,a[t*3+2]=e.b}e.setAttribute(`color`,new cr(a,3)),i.push(e)}let a=Zu(i,!1);if(!a)throw Error(`props: merge failed for "${e}"`);return a.computeBoundingBox(),r.ground&&(a.translate(0,-a.boundingBox.min.y,0),a.computeBoundingBox()),a.computeVertexNormals(),a.computeBoundingSphere(),{name:e,geometry:a,radius:a.boundingSphere.radius,height:a.boundingBox.max.y,tier:t,kind:n}}},vd=16777215;function yd(e,t){e.cylB(t.trunkR*.7,t.trunkR,t.trunkH,6,8014634),t.tiers.forEach(([n,r,i],a)=>{let o=t.greens[Math.min(a,t.greens.length-1)],s=[0,a*.45,0];e.coneB(r,i,t.seg,o,0,n,0,s),e.coneB(r*.5800000000000001*1.07,i*.5800000000000001+.03,t.seg,vd,0,n+i*.42,0,s,!0)})}function bd(e,t){let n=t.lean||0;for(let n of[-1,1])e.boxB(.17,.64,.2,t.pants,n*.1,.1,0),e.boxB(.18,.11,.3,t.boots,n*.1,0,.04);e.push(0,.74,0,n),e.boxB(.46,.56,.28,t.jacket,0,0,0),e.boxB(.34,.1,.34,t.scarf,0,.5,0),t.helmet?(e.blob(.17,t.skin,0,.7,.01,null,6,4),e.blob(.19,t.beanie,0,.74,0,[1,.9,1.03],6,4),e.box(.28,.07,.05,t.goggles,0,.69,.175)):(e.blob(.17,t.skin,0,.7,.01),e.box(.045,.055,.04,2040880,-.06,.66,.17),e.box(.045,.055,.04,2040880,.06,.66,.17),e.blob(.19,t.beanie,0,.79,0,[1,.78,1]),e.ball(.05,16777215,0,.96,0,null,0));for(let n of[-1,1])e.push(n*.3,.5,0,t.armSwing||0,0,n*.1),e.box(.12,.5,.14,t.jacket,0,-.26,0),e.box(.13,.1,.15,t.mitt,0,-.55,0),e.pop();e.pop()}function xd(e,t,n,r){let i=r.t??.18,a=r.ts??.26,o=r.ovh??.5,s=r.oz??.4,c=r.snow!==!1,l=r.snowInset??.5,u=n+2*s;if(e.push(r.x||0,r.y||0,r.z||0,0,r.ry||0,0),r.wallCol!=null){let i=t.concat(t.slice(0,-1).reverse().map(([e,t])=>[-e,t]));e.extrudeZ(i,n,r.wallCol)}let d=(t,n,r,i,a,o,s,c,l)=>{let u=n[0]-t[0],d=n[1]-t[1],f=Math.hypot(u,d);u/=f,d/=f;let p=d,m=-u,h=f+i-r,g=(r+f+i)/2,_=t[0]+u*g+p*(a+o/2),v=t[1]+d*g+m*(a+o/2);e.box(h,o,s,c,l*_,v,0,[0,0,Math.atan2(d,l*u)])},f=t.length-2;for(let e of[1,-1])for(let n=0;n<=f;n++){let s=t[n],p=t[n+1];d(s,p,n===0?-o:-.04,n===f?0:.04,0,i,u,r.roofCol,e),c&&d(s,p,n===0?l:-.04,n===f?0:.04,i,a,u+.14,vd,e)}{let n=t[f],o=t[f+1],s=o[0]-n[0],l=o[1]-n[1],d=Math.hypot(s,l);s/=d,l/=d;let p=Math.max(.3,Math.abs(s)),m=o[1],h=(t,n,r)=>{let i=t/p,a=i/Math.SQRT2;e.box(a,a,r,n,0,m+i/2,0,[0,0,ed/4])};h(i,r.roofCol,u),c&&h(i+a,vd,u+.14)}e.pop()}function Sd(e,t){return[[e/2,0],[0,t]]}function Cd(e,t,n,r=.4){e.tboxB(t+.9,r,n+.9,vd,0,0,0,.93,.93)}function wd(e,t,n,r,i,a){e.fdisc(t,a*1.12,10,2765656,n,r,i+.03),e.fdisc(t,a,10,16776692,n,r,i+.06);for(let o=0;o<4;o++){let s=o*td,c=a*.78;e.fq(t,.16,a*.2,2765656,n+Math.sin(s)*c,r+Math.cos(s)*c,i+.09,-s)}let o=(a,o,s)=>{e.fq(t,s,o,2765656,n+Math.sin(a)*o/2,r+Math.cos(a)*o/2,i+.12,-a)};o(-1,a*.55,.2),o(1.05,a*.8,.13)}function Td(e,t,n,r,i){e.strut([t,n,r],[t,n-1.2,r],.14,4870750),e.boxB(.5,.3,.5,4870750,t,n-1.35,r),e.tboxB(1.7,1.5,1.5,i,t,n-2.9,r,.86,.86),e.boxB(1.4,.18,1.2,vd,t,n-1.4,r),e.fq(`+z`,1.3,.8,8176878,t,n-2.1,r+.745),e.fq(`-z`,1.3,.8,8176878,-t,n-2.1,-r+.745),e.fq(`+x`,1.1,.8,8176878,-r,n-2.1,t+.815),e.fq(`-x`,1.1,.8,8176878,r,n-2.1,-t+.815)}function Ed(){let e=new _d,t=hd(10134456,2,1);return e.ball(.22,t,0,.14,0,[1.15,.72,.9],1,.16,1),e.ball(.12,t,.2,.08,.14,[1,.7,.9],0,.12,2),e.build(`pebble`,0,`rock`,{ground:!0})}function Dd(){let e=new _d;e.ball(.3,3122010,0,.23,0,[1.05,.8,1],1,.06,3),e.blob(.2,3981418,.26,.15,.12,[1,.85,1],6,4),e.blob(.18,2593871,-.24,.14,.14,[1,.85,1],6,4),e.blob(.17,vd,.02,.41,-.02,[1.1,.5,1.1],6,3);for(let[t,n,r]of[[.12,.34,.24],[-.1,.3,.27]])e.ball(.035,15218223,t,n,r,null,0);return e.build(`bush_small`,0,`static`,{ground:!0})}function Od(){let e=new _d,t=2504013;e.ball(1,t,0,.24,0,[.15,.22,.13],1),e.blob(1,16054267,0,.23,.065,[.11,.18,.09]),e.blob(.1,t,0,.5,.015),e.coneB(.035,.09,6,16751903,0,.485,.105,[td,0,0]),e.box(.03,.035,.03,16777215,-.045,.52,.095),e.box(.03,.035,.03,16777215,.045,.52,.095),e.quad(.018,.022,1382172,-.045,.52,.1115),e.quad(.018,.022,1382172,.045,.52,.1115);for(let n of[-1,1])e.box(.04,.2,.09,t,n*.165,.26,0,[0,0,n*.3]),e.boxB(.09,.03,.14,16751903,n*.07,0,.05);return e.build(`penguin`,0,`walker`,{ground:!0})}function kd(){let e=new _d,t=14271397,n=16447215,r=16752565;e.blob(1,t,0,.15,0,[.13,.14,.2],7,5),e.blob(.1,t,0,.27,.17,[.95,.95,1.1]);for(let i of[-1,1])e.blob(1,t,i*.045,.43,.14,[.035,.14,.02],5,3),e.quad(.03,.17,r,i*.045,.43,.16),e.boxB(.06,.03,.12,n,i*.08,0,-.03),e.quad(.035,.04,2040880,i*.088,.295,.22,[0,i*1.1,0]);return e.ball(.065,n,0,.18,-.2,null,0),e.box(.04,.03,.03,r,0,.255,.285),e.build(`rabbit`,0,`walker`,{ground:!0})}function Ad(){let e=new _d,t=16765503;return e.boxB(.44,.3,.44,14036826,0,0,0),e.boxB(.48,.12,.48,11870794,0,.28,0),e.boxB(.09,.3,.47,t,0,0,0),e.boxB(.47,.3,.09,t,0,0,0),e.boxB(.09,.124,.51,t,0,.28,0),e.boxB(.51,.124,.09,t,0,.28,0),e.blob(1,t,-.07,.45,0,[.09,.06,.04],6,4),e.blob(1,t,.07,.45,0,[.09,.06,.04],6,4),e.box(.06,.06,.06,16103452,0,.43,0),e.build(`gift`,0,`static`)}function jd(){let e=new _d;return e.boxB(.38,.04,.38,2829107),e.cylB(.03,.13,.46,8,16734751,0,.04,0),e.cylB(.0757+.006,.097+.006,.1,8,16777215,0,.19,0),e.build(`traffic_cone`,0,`static`)}function Md(){let e=new _d;return bd(e,{jacket:16739116,pants:2962785,boots:3878703,beanie:2147512,scarf:16777215,skin:16764057,mitt:2147512}),e.build(`person`,1,`walker`)}function Nd(){let e=new _d;e.push(0,.04,0),bd(e,{jacket:3107839,pants:1846110,boots:2106414,beanie:16765503,scarf:16731501,skin:16764057,mitt:2106414,lean:.38,armSwing:-.95,helmet:!0,goggles:16753434}),e.pop();for(let t of[-1,1])e.boxB(.1,.035,1.5,15087942,t*.13,0,.1),e.box(.1,.03,.24,15087942,t*.13,.065,.96,[-.5,0,0]),e.strut([t*.42,.04,-.4],[t*.38,1,.45],.03,4870750),e.disc(.07,6,4870750,t*.42,.1,-.4,[-td,0,0]);return e.build(`skier`,1,`skier`,{ground:!0})}function Pd(){let e=new _d;e.blob(.4,vd,0,.4,0,null,8,5),e.blob(.3,vd,0,.8,0,null,7,5),e.blob(.22,vd,0,1.17,0,null,7,4),e.cylB(.25,.25,.08,6,15218223,0,.96,0),e.coneB(.04,.26,5,16742938,0,1.15,.2,[td,0,0]),e.quad(.06,.06,2040880,-.08,1.24,.205),e.quad(.06,.06,2040880,.08,1.24,.205);for(let t=0;t<3;t++)e.quad(.06,.06,2040880,0,.88-t*.14-.05+.1,.298-t*.012+0);e.cylB(.2,.2,.03,5,2106414,0,1.33,0),e.cylB(.12,.12,.24,5,2106414,0,1.35,0);for(let t of[-1,1])e.strut([t*.26,.85,0],[t*.7,1.05,.05],.04,8014634),e.strut([t*.55,.99,.03],[t*.66,1.2,.05],.03,8014634);return e.build(`snowman`,1,`static`)}function Fd(){let e=new _d,t=10119738,n=7042692;for(let r of[-1,1])e.boxB(.05,.08,1.3,n,r*.24,0,0),e.box(.05,.05,.28,n,r*.24,.1,.72,[-.8,0,0]),e.boxB(.05,.12,.05,n,r*.24,.08,-.45),e.boxB(.05,.12,.05,n,r*.24,.08,.35),e.boxB(.05,.05,1.3,t,r*.24,.2,0);for(let t=0;t<5;t++)e.boxB(.66,.04,.17,15022139,0,.25,-.5+t*.25);return e.boxB(.6,.05,.05,t,0,.22,.65),e.strut([0,.25,.65],[0,.12,1],.025,16765503),e.build(`sled`,1,`static`,{ground:!0})}function Id(){let e=new _d,t=11893055,n=3818063;for(let t of[-1,1])e.boxB(.07,.45,.5,n,t*.72,0,0),e.boxB(.07,.45,.07,n,t*.72,.45,-.22);for(let n=0;n<3;n++)e.boxB(1.6,.05,.14,t,0,.45,-.17+n*.17);for(let n=0;n<2;n++)e.box(1.6,.14,.04,t,0,.75+n*.18,-.24,[-.12,0,0]);return e.boxB(1.4,.08,.5,vd,0,.5,0),e.build(`bench`,1,`static`)}function Ld(){let e=new _d,t=9067054;for(let n of[-1,1])e.boxB(.14,1,.14,t,n*.93,0,0),e.boxB(.2,.07,.2,vd,n*.93,1,0);e.boxB(2,.1,.06,t,0,.3,-.06),e.boxB(2,.1,.06,t,0,.66,-.06);for(let t=0;t<5;t++){let n=-.72+t*.36;e.boxB(.18,.86,.04,11893055,n,.05,0),e.boxB(.2,.05,.06,vd,n,.91,0)}return e.boxB(2,.05,.14,vd,0,.76,-.06),e.build(`fence`,1,`static`)}function Rd(){let e=new _d;return yd(e,{trunkH:.7,trunkR:.14,seg:7,tiers:[[.45,.95,1],[1.05,.72,.95],[1.65,.46,.85]],greens:[2001484,2596954,3192168]}),e.build(`pine_small`,1,`tree`)}function zd(e,t,n={}){let r=new _d;r.boxB(1.85,.55,4.2,t,0,.32,0),r.tboxB(1.65,.62,2.3,3493995,0,.87,-.2,.82,.62,-.15),r.boxB(1.4,.08,1.48,t,0,1.49,-.35),n.roofBox?(r.boxB(1,.3,1.3,2830138,0,1.57,-.35),r.boxB(.9,.1,1.2,vd,0,1.87,-.35)):r.boxB(1.3,.12,1.3,vd,0,1.57,-.35),r.boxB(1.5,.07,.95,vd,0,.87,1.52),r.boxB(1.5,.07,.55,vd,0,.87,-1.74);for(let e of[-1,1])for(let t of[-1.32,1.32])r.cyl(.38,.38,.3,8,1909033,e*.93,.38,t,[0,0,td]),r.disc(.22,6,13226460,e*1.1,.38,t,[0,e*td,0]);for(let e of[-1,1])r.boxB(.34,.16,.06,16773280,e*.6,.55,2.1),r.boxB(.3,.14,.06,9376017,e*.62,.58,-2.1);return r.boxB(1.9,.18,.14,3159100,0,.26,2.04),r.boxB(1.9,.18,.14,3159100,0,.26,-2.04),r.build(e,2,`car`)}function Bd(){return zd(`car`,15218223)}function Vd(){return zd(`car_blue`,3112417,{roofBox:!0})}function Hd(){let e=new _d,t=2017494,n=2961721;e.boxB(.55,.5,1.5,n,0,0,-.75),e.cyl(.25,.25,.55,8,n,0,.25,-1.5,[0,0,td]),e.cyl(.25,.25,.55,8,n,0,.25,0,[0,0,td]),e.tboxB(.95,.55,2,t,0,.5,-.6,.85,.85),e.boxB(.5,.18,1.3,n,0,1.05,-.75),e.boxB(.52,.04,.5,16765503,0,.7,-.6),e.tboxB(1,.65,1.5,t,0,.45,1.05,.62,.62),e.boxB(.52,.05,.9,vd,0,1.1,1),e.boxB(.5,.18,.08,16774584,0,.7,1.82),e.box(.75,.45,.05,10738175,0,1.3,.35,[-.45,0,0]),e.strut([-.48,1.12,.3],[.48,1.12,.3],.07,n),e.strut([0,.9,.5],[0,1.12,.3],.08,n);for(let t of[-1,1])e.boxB(.16,.05,1.3,n,t*.58,0,1.35),e.box(.16,.05,.4,n,t*.58,.12,2.18,[-.5,0,0]),e.strut([t*.58,.1,1.3],[t*.36,.7,1],.08,n);return e.build(`snowmobile`,2,`static`)}function Ud(){let e=new _d,t=12088115,n=3811874,r=15720637;e.ball(1,t,0,1.3,0,[.45,.48,1],1),e.blob(1,15387551,0,1.12,.05,[.38,.3,.8],7,4),e.ball(.14,16777215,0,1.55,-1,[1,1.2,.9],0);for(let r of[-1,1])e.rod([r*.25,1.1,.62],[r*.25,.1,.68],.15,.08,t,6,!1),e.rod([r*.27,1.15,-.62],[r*.26,.1,-.7],.17,.08,t,6,!1),e.boxB(.13,.12,.17,n,r*.25,0,.68),e.boxB(.13,.12,.17,n,r*.26,0,-.7);e.rod([0,1.45,.7],[0,2.1,1.1],.33,.2,t,6,!1),e.ball(1,t,0,2.18,1.28,[.21,.2,.34],1),e.blob(.07,2827040,0,2.12,1.6,null,5,4);for(let n of[-1,1])e.box(.04,.05,.04,1382172,n*.17,2.25,1.4),e.cone(.1,.34,5,t,n*.27,2.36,1.12,[.2,0,-n*1.1]),e.rod([n*.12,2.35,1.12],[n*.5,3.1,.95],.065,.04,r,5,!1),e.rod([n*.27,2.68,1.05],[n*.2,3.02,1.3],.045,.025,r,5,!1),e.rod([n*.4,2.88,.99],[n*.72,3.25,1],.045,.025,r,5,!1),e.rod([n*.36,2.78,.99],[n*.38,3.15,.72],.04,.025,r,5,!1);return e.build(`deer`,2,`walker`)}function Wd(){let e=new _d,t=4165592,n=2765656;Cd(e,3.2,2.6,.3),e.boxB(3.2,2.4,2.6,t,0,.15,0);for(let t of[-1,1])for(let n of[-1,1])e.boxB(.16,2.4,.16,vd,t*1.6,.15,n*1.3);e.fq(`+z`,2.1,1.3,vd,0,1.55,1.33),e.fq(`+z`,1.9,1.1,n,0,1.55,1.36),e.boxB(2.3,.1,.55,13079127,0,.95,1.55),e.fq(`+z`,.8,.8,16765503,-1.3,1.65,1.33),e.fq(`+z`,.08,.7,15087942,-1.3,1.65,1.36,.5),e.fq(`+z`,.08,.7,3107839,-1.3,1.65,1.37,-.5);for(let t=0;t<7;t++){let n=-1.5+t*.5;e.box(.5,.07,1,t%2?vd:15218223,n,2.45,1.75,[.33,0,0]),e.quad(.5,.22,t%2?vd:15218223,n,2.14,2.23)}return xd(e,Sd(2.6,1),3.2,{y:2.55,ry:td,roofCol:8014379,wallCol:t,ovh:.35,oz:.3,ts:.2}),e.fq(`-z`,1.4,.9,vd,0,1.6,1.33),e.fq(`-z`,1.2,.7,n,0,1.6,1.36),[15087942,16765503,3127658].forEach((t,n)=>e.box(.1,1.9,.04,t,1.82+n*.01,1.1,-.7+n*.28,[0,0,-.12])),e.build(`kiosk`,2,`static`)}function Gd(){let e=new _d;return yd(e,{trunkH:1.3,trunkR:.28,seg:8,tiers:[[.9,1.95,2],[2.2,1.55,1.9],[3.5,1.15,1.8],[4.6,.75,1.55]],greens:[1802312,2200917,2730594,3325294]}),e.build(`pine`,2,`tree`)}function Kd(){let e=new _d,t=15267071,n=12377333,r=2042436;for(let r of[-1,1])e.blob(1,n,r*.42,.15,.14,[.34,.17,.46],6,4),e.rod([r*.4,1.2,0],[r*.42,.2,.05],.38,.33,t,7,!1);e.ball(1,t,0,1.5,0,[.92,.85,.8],1),e.blob(1,16251903,0,1.4,.55,[.6,.6,.3],6,4);for(let r of[-1,1])e.rod([r*.85,1.95,0],[r*1.12,.85,.28],.3,.26,t,7,!1),e.blob(1,n,r*1.14,.72,.32,[.3,.3,.3],6,4);e.ball(1,t,0,2.18,.15,[.55,.5,.52],1),e.blob(1,10472426,0,2.08,.62,[.4,.32,.16],7,4);for(let t of[-1,1])e.disc(.11,8,16777215,t*.17,2.2,.785),e.disc(.055,6,r,t*.17,2.19,.79),e.cone(.09,.3,5,15985096,t*.36,2.62,.08,[0,0,-t*.45]),e.cone(.2,.5,6,n,t*.72,2.3,-.1,[0,0,-t*.7]);return e.blob(.07,r,0,2.1,.785,null,5,4),e.fq(`+z`,.3,.05,r,0,1.97,.775),e.fq(`+z`,.1,.04,r,-.17,2,.775,-.7),e.fq(`+z`,.1,.04,r,.17,2,.775,.7),e.fq(`+z`,.05,.06,16777215,-.06,1.93,.78),e.fq(`+z`,.05,.06,16777215,.06,1.93,.78),e.cone(.2,.5,6,n,0,2,-.7,[-1.2,0,0]),e.cone(.18,.45,6,n,0,1.5,-.8,[-1.5,0,0]),e.cone(.15,.4,6,n,0,2.7,-.05,[-.2,0,0]),e.build(`yeti`,2,`walker`,{ground:!0})}function qd(){let e=new _d,t=hd(8753059,.68,4);return e.ball(1.5,t,0,1.15,0,[1.12,.82,1],1,.2,4),e.ball(.95,t,1.3,.55,.7,[1,.75,1],1,.2,5),e.ball(.6,t,-1.2,.35,.9,[1,.7,1],1,.2,6),e.build(`boulder`,2,`rock`,{ground:!0})}function Jd(){let e=new _d,t=8.4,n=7.2,r=.5,i=8357780;e.boxB(8.700000000000001,r,7.5,i,0,0,0),e.boxB(t,3.6,n,11037242,0,r,0);for(let t=0;t<4;t++)e.boxB(8.5,.12,7.3,8276516,0,1.1+t*.85,0);xd(e,Sd(t,2.6),n,{y:4.1,roofCol:5978665,wallCol:12155463,ovh:1,oz:.9,t:.22,ts:.34,snowInset:.7});let a=n/2;e.boxB(2.8,.3,1.3,i,0,0,4),e.fbox(`+z`,1.8,2.7,.14,15324080,0,1.85,3.65),e.fbox(`+z`,1.4,2.5,.14,5911072,0,1.75,3.7),e.fq(`+z`,.6,.8,16767095,0,2.3,3.79);for(let t of[-1,1]){let n=t*2.9;e.win(`+z`,n,2.4,a,1.1,1.2,{glass:16767095,sill:!0}),e.fbox(`+z`,.45,1.5,.1,13120815,n-.95,2.4,3.66),e.fbox(`+z`,.45,1.5,.1,13120815,n+.95,2.4,3.66)}e.win(`+z`,0,5.05,a,.9,.9,{glass:16767095});for(let n of[`+x`,`-x`])for(let r of[-1.6,1.6])e.win(n,r,2.4,t/2,1,1.2,{glass:16767095});return e.win(`-z`,-1.6,2.4,a,1,1.2,{glass:16767095}),e.win(`-z`,1.6,2.4,a,1,1.2,{glass:16767095}),e.boxB(1,3,1,9080728,2.4,4.5,-1.2),e.boxB(1.25,.2,1.25,6251629,2.4,7.5,-1.2),e.boxB(1.15,.2,1.15,vd,2.4,4.1+3.6,-1.2),e.build(`cabin`,3,`static`)}function Yd(){let e=new _d,t=3493995,n=2830138;e.boxB(2.55,2.35,11,16761370,0,.55,0),e.boxB(2.62,.4,10.6,3112417,0,.75,0),e.boxB(2.62,.12,11,n,0,1.3,0);for(let n=0;n<6;n++){let r=4-n*1.55;e.fq(`+x`,1.2,.85,t,-r,2.15,1.33),e.fq(`-x`,1.2,.85,t,r,2.15,1.33)}e.fq(`+z`,2.2,1,t,0,2.15,5.53),e.fq(`-z`,1.9,.8,t,0,2.2,5.53),e.fq(`+z`,1.5,.28,16756736,0,2.78,5.53),e.boxB(2.3,.28,10.4,vd,0,2.9,0);for(let t=0;t<3;t++)e.boxB(.12,.05,3,[15087942,3107839,3127658][t],-.6+t*.6,3.15,-1.5);for(let t of[-1,1])for(let n of[-3.4,3.4])e.cyl(.58,.58,.4,8,1909033,t*1.2,.58,n,[0,0,td]),e.disc(.32,6,13226460,t*1.42,.58,n,[0,t*td,0]);for(let t of[-1,1])e.boxB(.36,.26,.08,16773280,t*.95,.85,5.5),e.boxB(.3,.22,.08,16726570,t*.95,.85,-5.5);return e.boxB(2.65,.22,.2,n,0,.45,5.52),e.boxB(2.65,.22,.2,n,0,.45,-5.52),e.build(`bus`,3,`car`)}function Xd(){let e=new _d,t=7109257,n=15223354,r=3818063;e.boxB(2.6,.5,1.8,10133931);for(let n of[-1,1])e.strut([n*.95,.4,0],[n*.28,10.4,0],.32,t,.32);for(let n of[2.6,5.4,8]){let r=.95-n/10*.67;e.strut([-r,n,0],[r,n,0],.16,t)}e.strut([-.9,.5,0],[.45,5.4,0],.12,t),e.strut([.9,.5,0],[-.45,5.4,0],.12,t),e.boxB(6.4,.38,.4,n,0,10.4,0),e.boxB(.6,.25,.7,r,0,10.2,0);for(let t of[-1,1])e.strut([t*2.7,10.7,0],[t*2.7,11,0],.3,r),e.cyl(.38,.38,.24,8,r,t*2.7,11.05,0,[0,0,td]),e.boxB(.07,.07,3.6,2106414,t*2.7,11.4,0),e.boxB(.34,.5,.34,n,t*3.1,10,0);return e.boxB(.7,.45,.05,16765503,0,9.4,.28),e.boxB(1.8,.12,1.4,vd,0,.5,0),e.build(`lift_pylon`,3,`static`)}function Zd(){let e=new _d,t=16747039,n=15231504,r=2830138,i=3493995;e.boxB(2.2,.4,7.2,r,0,.7,-.2),e.boxB(2.4,1.7,2.1,t,0,1.1,1.55),e.boxB(1.95,1,1.1,t,0,1.1,3.15),e.boxB(2.5,.12,2.2,n,0,2.8,1.55),e.boxB(2.2,.16,1.9,vd,0,2.92,1.55),e.fq(`+z`,1.95,.9,i,0,2.3,2.63),e.fq(`+x`,1.4,.85,i,-1.7,2.3,1.23),e.fq(`-x`,1.4,.85,i,1.7,2.3,1.23),e.fq(`+z`,1.5,.6,r,0,1.5,3.73);for(let t of[-1,1])e.boxB(.34,.26,.08,16773280,t*.72,1.7,3.7);e.boxB(2.4,.3,.3,r,0,.75,3.75),e.boxB(1.2,.22,.32,16757504,0,3.08,1.9),e.cylB(.09,.09,1.4,6,10134448,1,2.4,.5);for(let t of[-1,1])e.box(1.75,1.3,.22,16765471,t*.84,1.05,4.5,[0,t*.3,0]),e.box(1.75,.18,.26,r,t*.84,1.62,4.5,[0,t*.3,0]),e.strut([t*.7,.95,3.6],[t*.85,.95,4.35],.16,r);e.boxB(2.4,1.2,3.4,n,0,1.1,-1.75),e.boxB(2.55,.14,3.5,r,0,2.3,-1.75),e.blob(1,15133938,0,2.3,-1.75,[1.05,.5,1.6],7,4);for(let t of[-1,1])e.boxB(.34,.22,.08,16726570,t*.8,1,-3.5);for(let t of[-1,1])for(let n of[2.4,-1.4,-2.9])e.cyl(.7,.7,.45,8,1909033,t*1.1,.7,n,[0,0,td]),e.disc(.38,6,13226460,t*1.35,.7,n,[0,t*td,0]);return e.build(`truck`,3,`car`)}function Qd(){let e=new _d;return yd(e,{trunkH:2.6,trunkR:.55,seg:8,tiers:[[1.8,3.8,3.4],[4.2,3.2,3.2],[6.4,2.6,3],[8.6,1.95,2.7],[10.6,1.3,2.6]],greens:[1473090,1805646,2203480,2732643,3326064]}),e.build(`pine_big`,3,`tree`)}function $d(){let e=new _d,t=15983555,n=12155463,r=9080728,i=8010544;e.boxB(18.4,1.2,9.4,r,0,0,0),e.boxB(18,10,9,t,0,1.2,0),e.boxB(7,15.2,10,16248018,0,0,.5),xd(e,Sd(9,3.6),18,{y:11.2,ry:td,roofCol:i,wallCol:t,ovh:.8,oz:.6,ts:.34}),xd(e,Sd(7,4.6),10,{y:15.2,z:.5,roofCol:i,wallCol:16248018,ovh:.7,oz:.6,ts:.34});for(let t of[-1,1])for(let r of[4.7,8.2])e.boxB(5,.22,1.2,n,t*6.2,r,5.1),e.boxB(5,.8,.1,14235198,t*6.2,r+.22,5.65);for(let t of[-1,1])for(let n of[3,6.5,9.7])for(let r of[-1.3,1.3])e.win(`+z`,t*6.2+r,n,4.5,1.2,1.6,{frame:16777215,bars:!0});for(let t of[7,10.5,14])for(let n of[-1.5,1.5])e.win(`+z`,n,t,5.5,1.3,1.6,{glass:16769162});e.boxB(4.2,.22,2.4,14235198,0,4,6.5),e.boxB(4.4,.16,2.6,vd,0,4.22,6.5),e.fbox(`+z`,2.6,3,.15,5911072,0,2.7,5.55),e.fq(`+z`,1,1.7,16769162,-.55,3.1,5.64),e.fq(`+z`,1,1.7,16769162,.55,3.1,5.64);for(let t of[-1,1])e.boxB(.25,4,.25,n,t*1.9,0,7.4);e.fbox(`+z`,4.6,.9,.15,3029593,0,5.4,5.55);for(let t=0;t<5;t++)e.fq(`+z`,.5,.6,16765503,-1.7+t*.85,5.4,5.64);for(let t of[`+x`,`-x`])for(let n of[3,6.5,9.7])for(let r of[-1.8,1.8])e.win(t,r,n,9,1.2,1.5);for(let t of[3,6.5,9.7])for(let n of[-6.5,-3,3,6.5])e.win(`-z`,n,t,4.5,1.2,1.5);for(let t of[-1,1])e.boxB(1.1,4.2,1.1,r,t*7.4,11.2,-1.4),e.boxB(1.4,.25,1.4,vd,t*7.4,15.4,-1.4);return Cd(e,18.4,9.4,.5),e.build(`hotel`,4,`static`)}function ef(){let e=new _d;e.push(0,0,0,0,0,0,.92);let t=15134197,n=14235198,r=3818063;e.boxB(12.4,.5,8.4,9080728),e.boxB(12,6.2,8,t,0,.5,0),e.boxB(12.12,.9,8.12,n,0,4.4,0),xd(e,Sd(8,1.7),12,{y:6.7,ry:td,roofCol:n,wallCol:t,ovh:.7,oz:.6,ts:.34}),e.fq(`+z`,9.6,3.6,vd,0,2.6,4.03),e.fq(`+z`,9.2,3.2,7059174,0,2.6,4.06);for(let t=-3;t<=3;t++)e.fq(`+z`,.12,3.2,vd,t*1.3,2.6,4.09);e.fq(`+z`,9.2,.12,vd,0,2.6,4.09),e.fbox(`+z`,5,.8,.15,3029593,0,5.3,4.05);for(let t=0;t<4;t++)e.fq(`+z`,.6,.5,16765503,-1.5+t*1,5.3,4.14);e.boxB(3.6,.5,1.2,13226460,0,0,4.8);for(let t of[`+x`,`-x`])for(let n of[-2,2])e.win(t,n,3,6,1.6,1.8);for(let t of[-3.5,0,3.5])e.win(`-z`,t,3,4,1.8,1.8);e.boxB(1.8,.6,1.8,10133931,9,0,0),e.rod([9,.6,0],[9,14.2,0],.46,.28,7109257,8),e.boxB(.4,.4,4.4,15223354,9,13.5,0);for(let t of[-1,1])e.cyl(.55,.55,.28,8,r,9,14.2,t*1.7,[td,0,0]),e.strut([6.2,6.4,t*1.7],[9,14.7,t*1.7],.1,2106414),e.strut([9,14.7,t*1.7],[11.6,15.5,t*1.7],.1,2106414),e.boxB(1,1,1,r,6.5,5.8,t*1.7);let i=e=>6.4+(e-6.2)*(14.7-6.4)/2.8;return Td(e,7.1,i(7.1),1.7,15218223),Td(e,8.1,i(8.1),-1.7,16761370),e.build(`gondola_station`,4,`static`)}function tf(){let e=new _d;e.push(0,0,0,0,0,0,.94);let t=7109257,n=e=>3.2-e/10*.8;for(let n of[-1,1])for(let r of[-1,1])e.strut([n*3.2,0,r*3.2],[n*2.4,10.1,r*2.4],.38,t),e.boxB(.9,.3,.9,10133931,n*3.2,0,r*3.2);for(let r of[3.4,6.7,9.7]){let i=n(r);e.strut([-i,r,i],[i,r,i],.22,t),e.strut([-i,r,-i],[i,r,-i],.22,t),e.strut([i,r,-i],[i,r,i],.22,t),e.strut([-i,r,-i],[-i,r,i],.22,t)}[[.2,3.4],[3.4,6.7]].forEach(([r,i])=>{let a=n(r),o=n(i);e.strut([-a,r,a],[o,i,o],.14,t),e.strut([a,r,-a],[-o,i,-o],.14,t),e.strut([a,r,a],[o,i,-o],.14,t),e.strut([-a,r,-a],[-o,i,o],.14,t)}),e.cylB(.25,.25,10.2,6,10134448),e.cylB(3.7,3.7,.3,8,4870750,0,9.9,0),e.cylB(3.2,3.2,4.2,8,4175536,0,10.2,0),e.cylB(3.3,3.3,.7,8,16777215,0,11.6,0),e.cylB(3.3,3.3,.25,8,15218223,0,12.4,0);let r=3.7;return e.coneB(r,2.2,8,14235198,0,14.4,0),e.coneB(r*.55*1.07,1.2500000000000002,8,vd,0,15.39,0,null,!0),e.cylB(.06,.06,.8,5,4870750,0,16.5,0),e.ball(.22,16765503,0,17.3,0,null,0),e.build(`water_tower`,4,`static`,{ground:!0})}function nf(){let e=new _d,t=hd(8094873,.45,9);return e.ball(3.6,t,0,3.8,0,[1,1.5,.9],1,.26,11),e.ball(2.8,t,3.8,2.2,1.2,[1,1.2,1],1,.26,12),e.ball(2.5,t,-3.5,2,1.6,[1,1.1,1],1,.26,13),e.ball(1.9,t,1,1.3,3.4,[1,.9,1],1,.24,14),e.ball(1.6,t,-1.5,1.1,-3.3,[1,1,1],1,.24,15),e.build(`rock_big`,4,`rock`,{ground:!0})}function rf(){let e=new _d,t=7.2,n=11069121,r=16777215;Cd(e,t,6,.4),e.boxB(t,4.2,6,n,0,.2,0),xd(e,Sd(t,2.6),6,{y:4.4,roofCol:14248266,wallCol:n,ovh:.45,oz:.4}),e.boxB(2.2,.35,.7,12107980,0,0,3.35),e.fbox(`+z`,1.7,2.5,.12,r,0,1.6,3.02),e.fbox(`+z`,1.3,2.3,.12,12738618,0,1.5,3.06),e.fq(`+z`,.5,.6,10475775,0,1.9,3.13),e.fq(`+z`,.12,.12,16765503,.42,1.3,3.13);for(let t of[-1,1]){let n=t*2.3;e.win(`+z`,n,2.9,3,1.3,1.4,{sill:!0}),e.fbox(`+z`,.4,1.6,.1,6989528,n-1,2.9,3.05),e.fbox(`+z`,.4,1.6,.1,6989528,n+1,2.9,3.05)}e.fdisc(`+z`,.68,8,r,0,5.4,3.03),e.fdisc(`+z`,.52,8,8176878,0,5.4,3.06);for(let n of[`+x`,`-x`])e.win(n,0,2.9,t/2,1.3,1.4);for(let t of[-2.3,2.3])e.win(`-z`,t,2.9,3,1.3,1.4);return e.boxB(.95,3.2,.95,11818826,2.1,4.4+.4,-1),e.boxB(1.2,.25,1.2,vd,2.1,8,-1),e.build(`house`,3,`building`)}function af(){let e=new _d,t=2.8,n=.2,r=16761249,i=16777215,a=5/2;Cd(e,5,5,.4),e.boxB(5,8.399999999999999,5,r,0,n,0);for(let r=1;r<3;r++)e.boxB(5.12,.16,5.12,i,0,n+r*t-.08,0);xd(e,Sd(5,2.1),5,{y:8.599999999999998,roofCol:3906222,wallCol:r,ovh:.4,oz:.35}),e.boxB(1.9,.35,.7,12107980,-1,0,2.85),e.fbox(`+z`,1.5,2.4,.12,i,-1,.35+1.2,2.52),e.fbox(`+z`,1.15,2.2,.12,8081320,-1,.35+1.1,2.56),e.win(`+z`,1.15,1.7,a,1.2,1.3,{sill:!0});for(let r=1;r<3;r++){let i=n+r*t+1.5;for(let t of[-1.15,1.15])e.win(`+z`,t,i,a,1.1,1.4,{sill:r===1})}e.boxB(3.4,.16,.95,i,0,3.05,2.95),e.boxB(3.4,.75,.08,3906222,0,3.21,3.38),e.fdisc(`+z`,.55,8,i,0,9.549999999999997,2.53),e.fdisc(`+z`,.42,8,8176878,0,9.549999999999997,2.56);for(let r of[`+x`,`-x`])for(let i=0;i<3;i++)e.win(r,0,n+i*t+1.6,5/2,1.1,1.4);for(let r=0;r<3;r++)for(let i of[-1.15,1.15])e.win(`-z`,i,n+r*t+1.6,a,1.1,1.4);return e.boxB(.8,2.2,.8,11818826,-1.3,8.999999999999998,-.8),e.boxB(1,.22,1,vd,-1.3,11.199999999999998,-.8),e.build(`house_tall`,3,`building`)}function of(){let e=new _d,t=7.4,n=13218544,r=16777215,i=[16735370,16777215];Cd(e,t,6,.4),e.boxB(t,4.4,6,n,0,.2,0),e.boxB(7.6000000000000005,1.9,.6,n,0,4.300000000000001,3.05),e.boxB(7.9,.25,.9,vd,0,6.200000000000001,3.05),e.fq(`+z`,6.6,1.2,2765656,0,5.250000000000001,3.38);for(let t=0;t<3;t++)e.fdisc(`+z`,.36,8,16763187,-1.8+t*1.8,5.250000000000001,3.41);xd(e,Sd(6,1.9),t,{y:4.6000000000000005,ry:td,roofCol:8015418,wallCol:n,ovh:.15,oz:.2,ts:.3,snowInset:.2});for(let t=0;t<7;t++){let n=-3.17+t*1.057;e.box(1.057,.08,1.7,i[t%2],n,3.88,3.85,[.33,0,0]),e.quad(1.057,.32,i[t%2],n,3.5,4.62)}e.fq(`+z`,4.4,2.3,r,-1.3,2.1,3.03),e.fq(`+z`,4,1.9,11461631,-1.3,2.1,3.06);for(let t of[-2.3,-1.3,-.3])e.fq(`+z`,.08,1.9,r,t,2.1,3.09);e.fbox(`+z`,1.5,2.6,.12,r,2.55,1.65,3.02),e.fbox(`+z`,1.2,2.4,.12,3127206,2.55,.35+1.2,3.06),e.fq(`+z`,.6,.8,11461631,2.55,1.9,3.13),e.boxB(1.9,.35,.7,12107980,2.55,0,3.35);for(let n of[`+x`,`-x`])for(let r of[-1.4,1.4])e.win(n,r,2.7,t/2,1.2,1.4);for(let t of[-2.3,0,2.3])e.win(`-z`,t,2.7,3,1.2,1.4);return e.boxB(.8,2,.8,11818826,-2.4,4.9,-1),e.boxB(1,.22,1,vd,-2.4,6.9,-1),e.build(`shop`,3,`building`)}function sf(){let e=new _d,t=2.9,n=.5,r=5*t,i=14725962;e.boxB(12.4,n,8.4,10133931),e.boxB(12,r,8,16769162,0,n,0);for(let t of[-1,1])for(let a of[-1,1])e.boxB(.6,r,.6,i,t*5.73,n,a*3.73);e.boxB(12.2,.3,8.2,i,0,6.3-.15,0),e.boxB(12.5,.55,8.5,16052712,0,15,0),e.boxB(11.8,.4,7.8,vd,0,15.3,0),e.boxB(3.2,2,3,i,-3.2,15.5,-1),e.boxB(3.4,.3,3.2,vd,-3.2,17.5,-1),e.cylB(.7,.7,1.4,6,7109257,3,15.5,1),e.boxB(1.8,.2,1.8,vd,3,16.9,1),e.boxB(2.8,.3,1,12107980,0,0,4.5),e.fbox(`+z`,2.4,2.7,.14,16777215,0,1.85,4.03),e.fbox(`+z`,1,2.5,.12,3112417,-.55,1.75,4.08),e.fbox(`+z`,1,2.5,.12,3112417,.55,1.75,4.08),e.boxB(3.4,.2,1.4,14235198,0,3.5,4.7),e.boxB(3.5,.14,1.5,vd,0,3.7,4.7);for(let t of[-3.9,3.9])e.win(`+z`,t,2,4,1.4,1.5);for(let r=1;r<5;r++){let i=n+r*t+1.5;for(let t of[-4.2,-1.4,1.4,4.2])e.win(`+z`,t,i,4,1.3,1.5,{glass:(r+(t>0))%3==0?16771496:8176878})}for(let r of[`+x`,`-x`])for(let i=0;i<5;i++)for(let a of[-1.8,1.8])e.win(r,a,n+i*t+1.5,6,1.3,1.5);for(let r=0;r<5;r++)for(let i of[-4.2,-1.4,1.4,4.2])e.win(`-z`,i,n+r*t+1.5,4,1.3,1.5);for(let r of[2,4])for(let a of[-1,1]){let o=n+r*t;e.boxB(2.2,.16,1,i,a*2.8,o,4.45),e.boxB(2.2,.7,.08,16777215,a*2.8,o+.16,4.9)}return Cd(e,12,8,.35),e.build(`apartment`,4,`building`)}function cf(){let e=new _d,t=15721414,n=16182483,r=10133931,i=3120798;e.boxB(7.2,1,7.2,r),e.boxB(6.2,6,6.2,t,0,1,0),e.boxB(6.5,.4,6.5,r,0,6.8,0),e.boxB(5,8.5,5,n,0,7,0),e.boxB(5.8,5,5.8,t,0,15.5,0),e.boxB(6.4,.5,6.4,r,0,20.5,0),e.fbox(`+z`,2,3.2,.14,16777215,0,2.6,3.15),e.fbox(`+z`,1.6,3,.14,7028522,0,2.5,3.2),e.boxB(2.8,.3,1,12107980,0,0,3.5);for(let t of[`+z`,`-z`,`+x`,`-x`]){for(let n of[10,13.5])e.fq(t,.9,1.8,16777215,0,n,2.53),e.fq(t,.6,1.5,2765656,0,n,2.56);wd(e,t,0,18,2.9,2)}for(let t of[`+x`,`-x`])for(let n of[-1.4,1.4])e.win(t,n,3.6,3.1,1,1.6);for(let t of[-1.4,1.4])e.win(`-z`,t,3.6,3.1,1,1.6);e.win(`+z`,-2,3.6,3.1,.8,1.6),e.win(`+z`,2,3.6,3.1,.8,1.6);let a=3.5*Math.SQRT2*1;e.coneB(a,4.2,4,i,0,21,0,[0,ed/4,0]),e.coneB(a*.6*1.05,2.56,4,vd,0,22.68,0,[0,ed/4,0],!0);for(let t of[-1,1])for(let r of[-1,1])e.boxB(.5,.9,.5,n,t*2.9,21,r*2.9),e.coneB(.5*Math.SQRT2*.6,.9,4,i,t*2.9,21.9,r*2.9,[0,ed/4,0]);return e.cylB(.1,.1,1.2,5,16765503,0,25,0),e.ball(.3,16765503,0,26.2,0,null,0),Cd(e,7.2,7.2,.35),e.build(`clocktower`,4,`building`)}function lf(){let e=new _d,t=4.4,n=.2,r=14236206,i=11545120,a=16777215;Cd(e,9,11,.4),e.boxB(9,t,11,r,0,n,0),xd(e,[[9/2,0],[3,2.2],[0,3.6]],11,{y:4.6000000000000005,roofCol:6120824,wallCol:r,ovh:.45,oz:.5,t:.2,ts:.3,snowInset:.4});for(let r of[-1,1])for(let i of[-1,1])e.boxB(.3,t,.3,a,r*(9/2-.1),n,i*5.4);e.fq(`+z`,3.9,3.9,a,0,2.35,5.53);for(let t of[-1,1]){e.fq(`+z`,1.8,3.7,i,t*.93,2.25,5.56);let n=Math.atan2(1.8,3.7),r=Math.hypot(1.8,3.7)*.97;e.fq(`+z`,.16,r,a,t*.93,2.25,5.59,n),e.fq(`+z`,.16,r,a,t*.93,2.25,5.59,-n)}e.fq(`+z`,1.7,1.5,a,0,5.9,5.53),e.fq(`+z`,1.3,1.1,3813162,0,5.9,5.56),e.fq(`+z`,.1,1.1,a,0,5.9,5.59),e.fq(`-z`,1.7,1.5,a,0,5.9,5.53),e.fq(`-z`,1.3,1.1,3813162,0,5.9,5.56),e.fq(`-z`,2.2,2.4,a,0,1.6,5.53),e.fq(`-z`,1.9,2.1,i,0,.4+1.05,5.56);for(let t of[`+x`,`-x`])for(let n of[-3,0,3])e.fq(t,1.5,1.3,a,n,2.8,4.53),e.fq(t,1.1,.9,3813162,n,2.8,4.56);return e.build(`barn`,3,`building`)}var uf=[Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf];function df(){let e={};for(let t of uf){let n=t();e[n.name]=n}return e}function ff(e){let t=e>>>0,n=()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296};return{next:n,range:(e,t)=>e+(t-e)*n(),int:(e,t)=>e+Math.floor(n()*(t-e+1)),pick:e=>e[Math.floor(n()*e.length)],chance:e=>n()<e,sign:()=>n()<.5?-1:1}}function pf(e=new Date){return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function mf(e=new Date){let t=Date.UTC(2026,9,1),n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Math.max(1,Math.floor((n-t)/864e5)+1)}var hf=[{id:`normal`,name:`NORMAL`},{id:`toon`,name:`ÇİZGİ FİLM`},{id:`pixel`,name:`PİKSEL`},{id:`postcard`,name:`KARTPOSTAL`}],gf={uTime:{value:0},uToon:{value:0},uSnap:{value:new z(0,0)},uSparkle:{value:1}},_f=`
varying vec3 vCigW;
uniform vec2 uSnap;
`,vf=`
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
`,yf=`
varying vec3 vCigW;
uniform float uTime;
uniform float uToon;
uniform float uSparkle;
float cigHash( vec3 p ) {
  p = fract( p * 0.3183099 + 0.1 );
  p *= 17.0;
  return fract( p.x * p.y * p.z * ( p.x + p.y + p.z ) );
}
`,bf=`
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
`,xf=new WeakSet;function Sf(e,{snow:t=!1}={}){if(!e||xf.has(e))return e;xf.add(e);let n=e.onBeforeCompile;e.onBeforeCompile=(r,i)=>{n?.call(e,r,i),r.uniforms.uTime=gf.uTime,r.uniforms.uToon=gf.uToon,r.uniforms.uSnap=gf.uSnap,r.uniforms.uSparkle=gf.uSparkle,r.vertexShader=r.vertexShader.replace(`#include <common>`,`#include <common>\n${_f}`).replace(`#include <project_vertex>`,vf);let a=r.fragmentShader.replace(`#include <common>`,`#include <common>\n${t?`#define CIG_SNOW
`:``}${yf}`);a=a.replace(`#include <opaque_fragment>`,bf),r.fragmentShader=a};let r=t?`cig-snow`:`cig-std`,i=e.customProgramCacheKey?.bind(e);return e.customProgramCacheKey=()=>`${i?i():``}|${r}`,e.needsUpdate=!0,e}var Cf=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4( position.xy, 0.0, 1.0 ); }
`,wf=`
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
`,Tf=class{constructor(e){this.renderer=e,this.mode=`normal`,this.rt=null,this.quadScene=new kn,this.quadCam=new ls(-1,1,1,-1,0,1),this.mat=new wo({vertexShader:Cf,fragmentShader:wf,uniforms:{tScene:{value:null},uRes:{value:new z(1,1)},uTime:gf.uTime,uMode:{value:0}},depthTest:!1,depthWrite:!1});let t=new fi(new po(2,2),this.mat);t.frustumCulled=!1,this.quadScene.add(t),this.size=new z}setMode(e){this.mode=hf.some(t=>t.id===e)?e:`normal`,gf.uToon.value=+(this.mode===`toon`),gf.uSparkle.value=this.mode===`pixel`?0:1,this.mat.uniforms.uMode.value=this.mode===`pixel`?2:this.mode===`postcard`?3:0,this.resize()}usesTarget(){return this.mode===`pixel`||this.mode===`postcard`}resize(){if(this.renderer.getDrawingBufferSize(this.size),!this.usesTarget()){gf.uSnap.value.set(0,0),this.rt&&(this.rt.dispose(),this.rt=null);return}let e=this.size.x,t=this.size.y;if(this.mode===`pixel`){let n=200/t;e=Math.max(64,Math.round(e*n)),t=200,gf.uSnap.value.set(e/2,t/2)}else gf.uSnap.value.set(0,0);let n=this.mode===`pixel`?f:h;(!this.rt||this.rt.width!==e||this.rt.height!==t||this.rt.texture.magFilter!==n)&&(this.rt?.dispose(),this.rt=new Ht(e,t,{minFilter:n,magFilter:n,depthBuffer:!0})),this.mat.uniforms.uRes.value.set(e,t)}render(e,t){let n=this.renderer;if(!this.usesTarget()){n.render(e,t);return}n.setRenderTarget(this.rt),n.render(e,t),n.setRenderTarget(null),this.mat.uniforms.tScene.value=this.rt.texture,n.render(this.quadScene,this.quadCam)}},Ef=0,Df=1,Of=2,kf=3,Af=new Gt,jf=new St,Mf=new B,Nf=new B,Pf=new B(0,1,0),Ff=[[`k_present_a`,`k_present_b`,`k_present_c`,`k_candy_cane`,`k_candy_cane_green`,`k_lantern`,`k_cone`,`k_rock_small`],[`k_snowman`,`k_snowman_hat`,`k_sled`,`k_bench`,`k_gingerbread`,`k_campfire`,`k_tent_small`,`k_pine_small`],[`k_sedan`,`k_sports`,`k_suv`,`k_taxi`,`k_police`,`k_van`,`k_ambulance`,`k_pickup`,`k_tractor`,`k_tent`,`k_canoe`,`k_pine_a`,`k_pine_b`,`k_rock_a`,`k_rock_b`],[`k_truck`,`k_delivery`,`k_garbage_truck`,`k_firetruck`,`k_pine_a_big`,`k_pine_b_big`,`k_rock_c`,`k_rock_d`],[]],If=[`k_house_a`,`k_house_b`,`k_house_c`,`k_house_d`,`k_house_e`,`k_house_f`,`k_house_g`,`k_house_h`,`k_house_i`,`k_house_j`,`k_house_k`,`k_house_l`],Lf=[`k_sedan`,`k_taxi`,`k_police`,`k_van`,`k_planter`,`k_tree_small`,`k_snowman`,`k_bench`];function Rf(e,t){let n=t?7:e;return{L:Math.min(520+n*45,1100),density:Math.min(.95+n*.05,1.5),townRows:Math.min(6+n,13),ramps:n<2?1:Math.min(2+(n>>1),6),patches:n<3?0:Math.min(n-1,7),roads:n<2?0:Math.min(1+(n>>1),5)}}var zf=class{constructor(e,t,{seed:n,level:r,daily:i}){this.scene=e,this.lib=t,this.rng=ff(n);let a=Rf(r,i);this.P=a,this.L=a.L,this.townStart=a.L+28,this.townEnd=this.townStart+a.townRows*17+30,this.dEnd=this.townEnd+160,this.statics=[],this.movers=[],this.ramps=[],this.patches=[],this.roads=[],this.buildings=[],this.maxPropR=1,this.time=0,this.group=new bn,e.add(this.group),this.tiers=$u.map((e,n)=>[...e,...Ff[n].filter(e=>t[e])]),this.houses=If.filter(e=>t[e]),this.street=Lf.filter(e=>t[e]),this.mat=Sf(new Do({vertexColors:!0,flatShading:!0})),this.snowMat=Sf(new Do({vertexColors:!0,flatShading:!0}),{snow:!0}),this.avgColor={};for(let e in t)this.avgColor[e]=Vf(t[e].geometry);this.generate(),this.statics.sort((e,t)=>e.d-t.d),this.buildInstancing(),this.buildTerrain(),this.buildRamps(),this.buildPisteMarkers()}halfWidth(e){let t=W.trackW/2,n=W.trackWEnd/2,r=W.townW/2;if(e<=this.L){let r=Math.max(0,e/this.L);return t+(n-t)*r*r}let i=Math.min(1,(e-this.L)/W.flattenLen);return n+(r-n)*i*i*(3-2*i)}baseY(e){let t=W.grade,n=this.L,r=W.flattenLen;if(e<=n)return-t*e+4*Math.sin(e*.011);let i=-t*n+4*Math.sin(n*.011),a=Math.min(e-n,r);return i-t*(a-a*a/(2*r))}groundY(e,t){let n=this.baseY(t),r=this.halfWidth(t),i=Math.abs(e)-r,a=t>this.L?Math.max(0,1-(t-this.L)/30):1;return i>0&&(n+=i*i*.014+i*.22+i*.1*Math.sin(t*.05+e*.13)),n+=a*.2*Math.sin(e*.45+t*.09)*Math.sin(t*.13-e*.2),n}rampAt(e,t){for(let n=0;n<this.ramps.length;n++){let r=this.ramps[n],i=t-r.d;if(!(i<0||i>r.len||Math.abs(e-r.x)>r.w/2))return r.h*(i/r.len)**1.4}return 0}footY(e){let t=Math.min(e.r*.7,6);return Math.min(this.groundY(e.x,e.d),this.groundY(e.x,e.d+t),this.groundY(e.x,e.d-t),this.groundY(e.x+t,e.d),this.groundY(e.x-t,e.d))}compactMovers(e){let t=this.movers,n=0;for(let r=0;r<t.length;r++){let i=t[r];if(i.alive){if(i.kind===`chunk`&&i.d<e-60){i.alive=!1;continue}t[n++]=i}}t.length=n}inPatch(e,t){for(let n=0;n<this.patches.length;n++){let r=this.patches[n],i=(e-r.x)/r.rx,a=(t-r.d)/r.rd;if(i*i+a*a<1)return!0}return!1}add(e,t,n,r={}){let i=this.lib[e];if(!i)return null;let a=r.s??.9+this.rng.next()*.25,o={type:e,def:i,x:t,d:n,y:0,rot:r.rot??this.rng.range(0,Math.PI*2),s:a,r:i.radius*a,h:i.height*a,tier:i.tier,kind:i.kind,mass:(Ju[e]??Yu[i.tier]??1)*a*a*a,alive:!0,decor:!!r.decor,move:r.move??Ef,m:null,ox:t,od:n,vx:r.vx??0,vd:r.vd??0,phase:this.rng.range(0,6.28)};return o.r>this.maxPropR&&i.kind!==`building`&&!r.decor&&(this.maxPropR=o.r),o.move===Ef?this.statics.push(o):this.movers.push(o),i.kind===`building`&&this.buildings.push(o),o}expectedR(e){let t=W.expectedR,n=Math.max(0,Math.min(1,e/this.L))*(t.length-1),r=Math.min(t.length-2,Math.floor(n));return t[r]+(t[r+1]-t[r])*(n-r)}foodTier(e){return e<.14?0:e<.38?1:e<.66?2:3}mixTier(e){let t=this.rng.next();return Math.max(0,Math.min(3,t<.4?e-1:t<.92?e:e+1))}pickTier(e){let t=this.tiers[Math.max(0,Math.min(4,e))];return this.rng.pick(t)}generate(){let e=this.rng,t=this.L;for(let t=0;t<9;t++)this.add(e.pick([`gift`,`traffic_cone`,`penguin`,`bush_small`]),Math.sin(t*.5)*1.5,10+t*3.2);let n=[];for(let r=0;r<this.P.ramps;r++)n.push({kind:`ramp`,d:t*(.2+.7*(r+e.next()*.6)/this.P.ramps)});for(let r=0;r<this.P.patches;r++)n.push({kind:`patch`,d:t*(.25+.65*(r+e.next())/this.P.patches)});for(let r=0;r<this.P.roads;r++)n.push({kind:`road`,d:t*(.3+.6*(r+e.next()*.5)/this.P.roads)});n.sort((e,t)=>e.d-t.d);let r=44,i=0;for(;r<t-12;){for(;i<n.length&&n[i].d<=r;){let e=n[i++];e.kind===`ramp`?r+=this.placeRamp(r):e.kind===`patch`?r+=this.placePatch(r):r+=this.placeRoad(r)}let a=r/t,o=this.foodTier(a),s=this.halfWidth(r)-1.5,c=e.next();c<.34?this.patternLine(r,o,s):c<.62?this.patternCluster(r,o,s):c<.8?this.patternFiller(r,o,s):c<.92?this.patternObstacle(r,o,s):this.patternMovers(r,o,s),r+=e.range(8,14)/this.P.density}if(this.generateBanks(),this.generateTown(),this.ramps.length){let e=e=>this.ramps.some(t=>Math.abs(e.x-t.x)<t.w/2+e.r*.5&&e.d>t.d-e.r&&e.d<t.d+t.len+e.r);this.statics=this.statics.filter(t=>t.decor||!e(t)),this.movers=this.movers.filter(t=>!e(t))}}patternLine(e,t,n){let r=this.rng,i=this.pickTier(this.mixTier(t)),a=this.lib[i],o=r.int(5,9),s=Math.max(2.2,a.radius*2.4),c=r.range(-n*.8,n*.8),l=r.range(0,n*.4),u=r.range(.05,.12);for(let t=0;t<o;t++){let r=Hf(c+Math.sin(t*s*u)*l,-n,n);this.add(i,r,e+t*s)}t>0&&r.chance(.6)&&this.patternFiller(e+o*s*.5,t-1,n,5)}patternCluster(e,t,n){let r=this.rng,i=r.range(-n*.7,n*.7),a=this.pickTier(Math.min(3,t+ +!!r.chance(.25))),o=this.add(a,i,e+6),s=(o?o.r:2)+r.range(1.5,4),c=this.pickTier(this.mixTier(t)),l=r.int(6,11);for(let a=0;a<l;a++){let o=a/l*Math.PI*2+r.next()*.4,u=s*r.range(.8,1.3);this.add(r.chance(.7)?c:this.pickTier(Math.max(0,t-1)),Hf(i+Math.cos(o)*u,-n,n),e+6+Math.sin(o)*u)}}patternFiller(e,t,n,r=0){let i=this.rng,a=r||i.int(6,12),o=Math.max(0,t-+!!i.chance(.5));for(let r=0;r<a;r++)this.add(this.pickTier(i.chance(.8)?o:this.mixTier(t)),i.range(-n,n),e+i.range(0,14))}patternObstacle(e,t,n){let r=this.rng,i=Math.min(4,t+1),a=this.pickTier(i),o=i>=4?r.sign()*r.range(n*.55,n*.85):r.range(-n*.6,n*.6);this.add(a,o,e+8);let s=this.pickTier(t),c=o>0?-1:1;for(let t=0;t<6;t++)this.add(s,Hf(o+c*(5+Math.sin(t*.6)*3),-n,n),e+t*3)}patternMovers(e,t,n){let r=this.rng;if(t<=1||r.chance(.5)){let t=r.int(3,6);for(let i=0;i<t;i++)this.add(`skier`,r.range(-n,n),e+r.range(0,10),{move:Df,vd:r.range(5,8.5),rot:Math.PI})}else{let t=r.pick([`penguin`,`deer`,`yeti`,`person`]),i=r.range(-n*.7,n*.7),a=t===`yeti`?r.int(1,3):r.int(4,8);for(let o=0;o<a;o++)this.add(t,Hf(i+r.range(-5,5),-n,n),e+r.range(0,10),{move:Of})}}placeRamp(e){let t=this.rng,n=this.halfWidth(e),r=t.range(6,8),i=t.range(-n+r,n-r);this.ramps.push({x:i,d:e,w:r,len:9,h:2.6});let a=e/this.L,o=this.foodTier(a),s=e+30;for(let e=0;e<14;e++)this.add(this.pickTier(this.rng.chance(.6)?o:Math.max(0,o-1)),Hf(i+t.range(-7,7),-n+1,n-1),s+t.range(-6,10));return 52}placePatch(e){let t=this.rng,n=this.halfWidth(e),r=t.range(4,8),i=t.range(8,16),a=t.range(-n+r*.5,n-r*.5);this.patches.push({x:a,d:e+i,rx:r,rd:i});let o=this.foodTier(e/this.L);for(let s=0;s<5;s++)this.add(this.pickTier(o),Hf(a+t.range(-r,r)*.6,-n+1,n-1),e+i+t.range(-i*.5,i*.5));return i*2+14}placeRoad(e){let t=this.rng;this.roads.push({d:e,w:7});let n=t.int(2,4),r=e/this.L;for(let i=0;i<n;i++){let n=i%2==0?-1.7:1.7,a=n<0?1:-1,o=r>.55&&t.chance(.4)?t.pick([`bus`,`truck`]):t.pick([`car`,`car_blue`,`snowmobile`]);this.add(o,t.range(-40,40),e+n,{move:kf,vx:a*t.range(6,10),rot:a>0?Math.PI/2:-Math.PI/2,s:1})}return 18}generateBanks(){let e=this.rng;for(let t=-60;t<this.dEnd;t+=e.range(2.5,5.5))for(let n of[-1,1]){if(e.chance(.15))continue;let r=this.halfWidth(t),i=e.range(1,34),a=this.lib.k_pine_a&&e.chance(.45),o=i<6?a?`k_pine_small`:`pine_small`:i<18?a?e.pick([`k_pine_a`,`k_pine_b`]):e.pick([`pine`,`pine`,`pine_small`,`boulder`]):a?e.pick([`k_pine_a_big`,`k_pine_b_big`]):e.pick([`pine_big`,`pine`,`rock_big`,`pine_big`]);t>this.L&&o===`rock_big`||this.add(o,n*(r+i),t,{decor:!0})}}generateTown(){let e=this.rng,t=W.townW/2,n=this.P.townRows,r=[`house`,`shop`,`barn`,`house`,`house_tall`],i=[`house_tall`,`apartment`,`shop`,`house`,`apartment`];for(let a=0;a<n;a++){let o=this.townStart+10+a*17,s=a/n;for(let n of[-1,1]){let a=9+e.range(0,2);for(;a<t-3;){let c=this.houses.length&&e.chance(.55)?e.pick(this.houses):e.pick(s<.5?r:i);if(!this.lib[c])break;let l=e.range(.9,1.1),u=this.lib[c].radius*l*.75;if(a+u>t+2)break;this.add(c,n*(a+u),o+e.range(-1.5,1.5),{rot:n>0?-Math.PI/2:Math.PI/2,s:l}),a+=u*2+e.range(1.5,3.5)}}let c=[`person`,`person`,`bench`,`traffic_cone`,`car`,`car_blue`,`snowman`,...this.street];for(let t=0;t<4;t++)this.add(e.pick(c),e.range(-7,7),o+8+e.range(-3,3));a%3==1&&this.add(e.pick([`kiosk`,`shop`]),e.range(-4,4),o+8)}this.add(`clocktower`,0,this.townStart+10+n*17,{rot:0,s:1})}buildInstancing(){let e={};for(let t of this.statics)e[t.type]=(e[t.type]||0)+1;for(let t of this.movers)e[t.type]=(e[t.type]||0)+1;this.meshes={};for(let t in e){let n=new wi(this.lib[t].geometry,this.mat,e[t]);n.instanceMatrix.setUsage(et),n.frustumCulled=!1,n.count=0,this.meshes[t]=n,this.group.add(n)}for(let e of this.statics)e.y=this.footY(e)-.05,Mf.set(e.x,e.y,-e.d),jf.setFromAxisAngle(Pf,e.rot),Nf.setScalar(e.s),Af.compose(Mf,jf,Nf),e.m=new Float32Array(16),Af.toArray(e.m);this.moverMat=new Float32Array(16)}lowerBound(e){let t=this.statics,n=0,r=t.length;for(;n<r;){let i=n+r>>1;t[i].d<e?n=i+1:r=i}return n}update(e,t,n=W.viewAhead,r=W.viewBehind){this.ahead=n,this.behind=r,this.time+=e;let i=this.time;for(let t of this.movers)if(t.alive){if(t.move===Df)t.d+=t.vd*e,t.x=Hf(t.ox+Math.sin(i*.9+t.phase)*4,-this.halfWidth(t.d)+1,this.halfWidth(t.d)-1),t.rot=Math.PI+Math.cos(i*.9+t.phase)*.5;else if(t.move===Of){let e=i*.5+t.phase;t.x=t.ox+Math.sin(e)*2.5,t.d=t.od+Math.sin(e*.7)*2,t.rot=Math.atan2(Math.cos(e)*2.5,Math.cos(e*.7)*-1.4)}else t.move===kf&&(t.x+=t.vx*e,t.x>45&&(t.x=-45),t.x<-45&&(t.x=45));t.y=this.footY(t)-.05}this.compactMovers(t),this.render(t)}render(e){(!this.meshList||this.meshList.length!==Object.keys(this.meshes).length)&&(this.meshList=Object.values(this.meshes));let t=this.meshList;for(let e=0;e<t.length;e++)t[e].userData.prev=t[e].count,t[e].count=0;let n=e-(this.behind??W.viewBehind),r=e+(this.ahead??W.viewAhead),i=this.lowerBound(n),a=this.lowerBound(r);for(let e=i;e<a;e++){let t=this.statics[e];if(!t.alive)continue;let n=this.meshes[t.type];n.instanceMatrix.array.set(t.m,n.count*16),n.count++}for(let e of this.movers){if(!e.alive||e.d<n||e.d>r)continue;let t=this.meshes[e.type];Mf.set(e.x,e.y,-e.d),jf.setFromAxisAngle(Pf,e.rot),Nf.setScalar(e.s),Af.compose(Mf,jf,Nf),Af.toArray(t.instanceMatrix.array,t.count*16),t.count++}for(let e=0;e<t.length;e++){let n=t[e];if(n.visible=n.count>0,!n.count&&!n.userData.prev)continue;let r=n.instanceMatrix;r.clearUpdateRanges(),r.addUpdateRange(0,Math.max(1,n.count)*16),r.needsUpdate=!0}}query(e,t,n,r){r.length=0;let i=n+this.maxPropR,a=this.lowerBound(t-i),o=this.lowerBound(t+i);for(let t=a;t<o;t++){let i=this.statics[t];i.alive&&!i.decor&&Math.abs(i.x-e)<n+i.r&&r.push(i)}if(t>this.L)for(let a of this.buildings)a.alive&&Math.abs(a.d-t)>=i&&Math.abs(a.d-t)<n+a.r&&Math.abs(a.x-e)<n+a.r&&r.push(a);for(let i of this.movers)i.alive&&Math.abs(i.d-t)<n+i.r&&Math.abs(i.x-e)<n+i.r&&r.push(i);return r}spawnChunk(e,t,n){let r=this.chunkDef||(this.chunkDef=Bf());if(!this.meshes.chunk){let e=new wi(r.geometry,this.mat,64);e.instanceMatrix.setUsage(et),e.frustumCulled=!1,e.count=0,this.meshes.chunk=e,this.group.add(e),this.lib.chunk=r}let i=0;for(let e of this.movers)e.type===`chunk`&&e.alive&&e.d>t-40&&i++;if(i>=60)return;let a={type:`chunk`,def:r,x:Hf(e,-this.halfWidth(t)+1,this.halfWidth(t)-1),d:t,y:0,rot:0,s:n,r:n,h:n*2,tier:0,kind:`chunk`,mass:Ju.chunk*n*n*n*20,alive:!0,move:99,ox:e,od:t,vx:0,vd:0,phase:0};this.movers.push(a)}kill(e){e.alive=!1}townProgress(){let e=0,t=0;for(let n of this.buildings)e++,n.alive||t++;return e?t/e:0}buildTerrain(){let e=this.dEnd,t=Math.ceil((e- -70)/4),n=new Float32Array(47*(t+1)*3),r=new Float32Array(47*(t+1)*3),i=new H,a=new H(16054527),o=new H(14543094),s=new H(14871800),c=new H(9069639),l=new H(7314002),u=new H(12174031),d=new H(10989756),f=0;for(let p=0;p<=t;p++){let m=-70+p/t*(e- -70),h=this.halfWidth(m);for(let e=0;e<=46;e++){let t=e/46*2-1,p=Math.sign(t)*Math.abs(t)**1.6*160/2,g=this.groundY(p,m);n[f]=p,n[f+1]=g,n[f+2]=-m;let _=Math.abs(p)-h;_>0?i.copy(s).lerp(o,Math.min(1,.5+.5*Math.sin(m*.07+p))).lerp(a,Math.max(0,1-_/6)):i.copy(a).lerp(o,.25+.25*Math.sin(p*.7+m*.21));for(let e of this.patches){let t=(p-e.x)/(e.rx+1.5),n=(m-e.d)/(e.rd+1.5),r=t*t+n*n;r<1&&i.copy(r<.6?c:l).lerp(c,Math.sin(p*3+m)*.3+.3)}for(let e of this.roads)Math.abs(m-e.d)<e.w/2&&i.copy(u);if(m>this.townStart-6&&m<this.townEnd+20&&_<0){let e=((m-this.townStart-10+8.5)%17+17)%17<5;(Math.abs(p)<7.5||e)&&i.copy(d)}r[f]=i.r,r[f+1]=i.g,r[f+2]=i.b,f+=3}}let p=[];for(let e=0;e<t;e++)for(let t=0;t<46;t++){let n=e*47+t,r=n+1,i=n+46+1,a=i+1;p.push(n,r,i,r,a,i)}let m=new Cr;m.setAttribute(`position`,new cr(n,3)),m.setAttribute(`color`,new cr(r,3)),m.setIndex(p),m.computeVertexNormals(),this.terrain=new fi(m,this.snowMat),this.terrain.frustumCulled=!1,this.group.add(this.terrain)}buildRamps(){if(!this.ramps.length)return;let e=[],t=[],n=new H(16777215),r=new H(4892927),i=new H(16742959),a=(n,r,i,a)=>{e.push(n,r,-i),t.push(a.r,a.g,a.b)};for(let e of this.ramps){let t=(t,n)=>this.groundY(t,e.d+n)+e.h*(n/e.len)**1.4,o=e.x-e.w/2,s=e.x+e.w/2;for(let c=0;c<8;c++){let l=c/8*e.len,u=(c+1)/8*e.len,d=c>=7?i:c%2?n:r;a(o,t(o,l),e.d+l,d),a(s,t(s,l),e.d+l,d),a(o,t(o,u),e.d+u,d),a(s,t(s,l),e.d+l,d),a(s,t(s,u),e.d+u,d),a(o,t(o,u),e.d+u,d);for(let n of[o,s]){let i=this.groundY(n,e.d+l)-.3,o=this.groundY(n,e.d+u)-.3;a(n,i,e.d+l,r),a(n,t(n,l),e.d+l,r),a(n,o,e.d+u,r),a(n,t(n,l),e.d+l,r),a(n,t(n,u),e.d+u,r),a(n,o,e.d+u,r)}}let c=e.len;a(o,this.groundY(o,e.d+c)-.3,e.d+c,i),a(o,t(o,c),e.d+c,i),a(s,t(s,c),e.d+c,i),a(o,this.groundY(o,e.d+c)-.3,e.d+c,i),a(s,t(s,c),e.d+c,i),a(s,this.groundY(s,e.d+c)-.3,e.d+c,i)}let o=new Cr;o.setAttribute(`position`,new dr(e,3)),o.setAttribute(`color`,new dr(t,3)),o.computeVertexNormals();let s=new fi(o,Sf(new Do({vertexColors:!0,flatShading:!0,side:2}),{snow:!0}));s.frustumCulled=!1,this.group.add(s)}buildPisteMarkers(){let e=new Wi(.09,.09,1.8,5).translate(0,.9,0),t=new Do({color:16777215}),n=Math.ceil(this.L/14)*2,r=new wi(e,t,n),i=new H(16738858),a=new H(3112447),o=0;for(let e=6;e<this.L&&o<n-1;e+=14)for(let t of[-1,1]){let n=t*(this.halfWidth(e)+.6);Af.makeTranslation(n,this.groundY(n,e),-e),r.setMatrixAt(o,Af),r.setColorAt(o,t<0?i:a),o++}r.count=o,this.group.add(r)}buildBackdrop(){let e=this.rng,t=new Gi(1,1,7,1).translate(0,.5,0),n=t.attributes.position,r=new Float32Array(n.count*3),i=new H(9413567),a=new H(16777215);for(let e=0;e<n.count;e++){let t=n.getY(e)>.55?a:i;r[e*3]=t.r,r[e*3+1]=t.g,r[e*3+2]=t.b}t.setAttribute(`color`,new cr(r,3));let o=new wi(t,new Do({vertexColors:!0,flatShading:!0,fog:!1}),40);for(let t=0;t<40;t++){let n=this.dEnd*(t/40)+e.range(0,80)+150,r=t%2?1:-1,i=e.range(120,260),a=i*e.range(.55,.8),s=r*(a+e.range(90,200));Mf.set(s,this.baseY(n)-40,-n),jf.setFromAxisAngle(Pf,e.range(0,6)),Nf.set(a,i,a),Af.compose(Mf,jf,Nf),o.setMatrixAt(t,Af)}o.frustumCulled=!1,this.group.add(o)}dispose(){this.scene.remove(this.group);let e=new Set;for(let t in this.lib)t!==`chunk`&&e.add(this.lib[t].geometry);this.group.traverse(t=>{t.isMesh&&(t.isInstancedMesh&&t.dispose(),e.has(t.geometry)||t.geometry.dispose(),t.material.map?.dispose(),t.material.dispose())})}};function Bf(){let e=new uo(1,0).toNonIndexed(),t=new Float32Array(e.attributes.position.count*3),n=new H(16186111);for(let e=0;e<t.length;e+=3)t[e]=n.r,t[e+1]=n.g,t[e+2]=n.b;return e.setAttribute(`color`,new cr(t,3)),e.translate(0,.8,0),e.computeBoundingSphere(),{name:`chunk`,geometry:e,radius:1,height:2,tier:0,kind:`chunk`}}function Vf(e){let t=e.attributes.color;if(!t)return new H(13421772);let n=0,r=0,i=0;for(let e=0;e<t.count;e++)n+=t.getX(e),r+=t.getY(e),i+=t.getZ(e);return new H(n/t.count,r/t.count,i/t.count)}function Hf(e,t,n){return e<t?t:e>n?n:e}var Uf=28,Wf=new B,Gf=new St,Kf=new St,qf=new Gt,Jf=new B,Yf=new B(0,1,0),Xf=new B,Zf=class{constructor(e,t,n){this.lib=t,this.material=n,this.group=new bn,this.spin=new bn,this.group.add(this.spin),e.add(this.group),this.snow=new fi(Qf(),Sf(new Do({vertexColors:!0,flatShading:!0}),{snow:!0})),this.spin.add(this.snow),this.stuck={},this.reset(.55)}reset(e){this.r=e,this.x=0,this.d=0,this.y=0,this.vx=0,this.vy=0,this.speed=0,this.airborne=!1,this.airTime=0,this.spin.quaternion.identity();for(let e in this.stuck)this.stuck[e].items.length=0,this.stuck[e].mesh.count=0;this.snow.scale.setScalar(e)}setRadius(e){this.r=e,this.snow.scale.setScalar(e),this.bury()}roll(e,t){let n=Math.hypot(e,t);n<1e-5||(Xf.set(-t,0,-e).normalize(),Gf.setFromAxisAngle(Xf,n/this.r),this.spin.quaternion.premultiply(Gf))}rollAxis(e,t){Math.abs(t)<1e-6||(Gf.setFromAxisAngle(e,t),this.spin.quaternion.premultiply(Gf))}sync(){this.group.position.set(this.x,this.y,-this.d)}stick(e,t,n){let r=this.stuck[e.name];if(!r){let t=new wi(e.geometry,this.material,Uf);t.count=0,t.frustumCulled=!1,this.spin.add(t),r=this.stuck[e.name]={mesh:t,items:[]}}Wf.copy(t).sub(this.group.position),Wf.lengthSq()<1e-6&&Wf.set(Math.random()-.5,1,Math.random()-.5),Wf.normalize(),Wf.y=Math.abs(Wf.y)*.6+.35,Wf.x+=(Math.random()-.5)*.6,Wf.normalize(),Kf.copy(this.spin.quaternion).invert(),Wf.applyQuaternion(Kf);let i=this.r*.78,a={px:Wf.x*i,py:Wf.y*i,pz:Wf.z*i,q:new St().setFromUnitVectors(Yf,Wf),s:n,top:i+e.height*n*.8};Gf.setFromAxisAngle(Yf,Math.random()*Math.PI*2),a.q.multiply(Gf),Xf.set(Math.random()-.5,0,Math.random()-.5).normalize(),Gf.setFromAxisAngle(Xf,(Math.random()-.5)*.9),a.q.multiply(Gf),r.items.length>=Uf&&r.items.shift(),r.items.push(a),this.writeSlot(r)}bury(){let e=this.r*1.02;for(let t in this.stuck){let n=this.stuck[t],r=n.items,i=0;for(let t=0;t<r.length;t++)r[t].top>e&&(r[i++]=r[t]);i!==r.length&&(r.length=i,this.writeSlot(n))}}writeSlot(e){let{mesh:t,items:n}=e;for(let e=0;e<n.length;e++){let r=n[e];Wf.set(r.px,r.py,r.pz),Jf.setScalar(r.s),qf.compose(Wf,r.q,Jf),t.setMatrixAt(e,qf)}t.count=n.length,t.instanceMatrix.needsUpdate=!0}stuckCount(){let e=0;for(let t in this.stuck)e+=this.stuck[t].items.length;return e}};function Qf(){let e=new uo(1,3),t=e.attributes.position,n=new Float32Array(t.count*3),r=new H(16777215),i=new H(13624055),a=new H,o=new B;for(let e=0;e<t.count;e++){o.fromBufferAttribute(t,e).normalize();let s=Math.sin(o.x*5.1+o.y*2.3)*Math.sin(o.z*4.3-o.x*1.7)+Math.sin(o.y*7.7+o.z*3.1)*.5;o.multiplyScalar(1+s*.045),t.setXYZ(e,o.x,o.y,o.z),a.copy(r).lerp(i,Math.max(0,s)*.6),n[e*3]=a.r,n[e*3+1]=a.g,n[e*3+2]=a.b}return e.setAttribute(`color`,new cr(n,3)),e.computeVertexNormals(),e}var $f=700,ep=90,tp=new Gt,np=new St,rp=new B,ip=new B,ap=new H,op=class{constructor(e,t){this.scene=e,this.world=t;let n=new uo(1,0),r=Sf(new Do({flatShading:!0}));this.parts=new wi(n,r,$f),this.parts.instanceMatrix.setUsage(et),this.parts.frustumCulled=!1,this.parts.count=0;for(let e=0;e<$f;e++)this.parts.setColorAt(e,ap.setRGB(1,1,1));e.add(this.parts),this.px=new Float32Array($f*3),this.pv=new Float32Array($f*3),this.life=new Float32Array($f),this.maxLife=new Float32Array($f),this.size=new Float32Array($f),this.spinA=new Float32Array($f),this.n=0,this.axis=new B(.3,1,.5).normalize();let i=new Cr;this.trailPos=new Float32Array(540),i.setAttribute(`position`,new cr(this.trailPos,3).setUsage(et)),this.trailCol=new Float32Array(540).fill(1),i.setAttribute(`color`,new cr(this.trailCol,3));let a=[];for(let e=0;e<89;e++){let t=e*2;a.push(t,t+1,t+2,t+1,t+3,t+2)}i.setIndex(a),this.trail=new fi(i,new ei({color:12375022,transparent:!0,opacity:.75,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,side:2})),this.trail.frustumCulled=!1,e.add(this.trail),this.trailPts=[],this.trailAcc=0;let o=document.createElement(`canvas`);o.width=o.height=64;let s=o.getContext(`2d`),c=s.createRadialGradient(32,32,4,32,32,32);c.addColorStop(0,`rgba(40,70,120,0.55)`),c.addColorStop(1,`rgba(40,70,120,0)`),s.fillStyle=c,s.fillRect(0,0,64,64),this.shadow=new fi(new po(1,1).rotateX(-Math.PI/2),new ei({map:new Li(o),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),this.shadow.frustumCulled=!1,e.add(this.shadow)}setTrailStyle(e){let t=this.trail.material;if(t.color.setHex(e.rainbow?16777215:e.color),t.vertexColors=!!e.rainbow,t.blending=e.glow?2:1,t.opacity=e.glow?.9:.75,t.needsUpdate=!0,e.rainbow){let t=new H;for(let n=0;n<ep;n++){e.palette?t.setHex(e.palette[Math.floor(n/6)%e.palette.length]):t.setHSL(n/ep*2%1,.85,.6);for(let e of[0,3])this.trailCol[n*6+e]=t.r,this.trailCol[n*6+e+1]=t.g,this.trailCol[n*6+e+2]=t.b}this.trail.geometry.attributes.color.needsUpdate=!0}}reset(){this.n=0,this.parts.count=0,this.trailPts.length=0,this.trail.geometry.setDrawRange(0,0)}burst(e,t,n,r,i,a=6,o=.25,s=4){let c=typeof i==`number`?ap.setHex(i):i;for(let i=0;i<r;i++){let r;r=this.n<$f?this.n++:Math.random()*$f|0;let i=Math.random()*Math.PI*2,l=Math.random();this.px[r*3]=e+(Math.random()-.5)*o*2,this.px[r*3+1]=t+Math.random()*o,this.px[r*3+2]=-n+(Math.random()-.5)*o*2,this.pv[r*3]=Math.cos(i)*a*(.3+l),this.pv[r*3+1]=s*(.5+Math.random()),this.pv[r*3+2]=Math.sin(i)*a*(.3+l),this.maxLife[r]=this.life[r]=.6+Math.random()*.9,this.size[r]=o*(.5+Math.random()),this.spinA[r]=Math.random()*6,this.parts.setColorAt(r,c)}this.parts.instanceColor.needsUpdate=!0}update(e,t){let n=this.world,r=this.n;for(let t=0;t<r;t++){if(this.life[t]-=e,this.life[t]<=0){r--,this.copyPart(r,t),t--;continue}let i=t*3;this.pv[i+1]-=22*e,this.px[i]+=this.pv[i]*e,this.px[i+1]+=this.pv[i+1]*e,this.px[i+2]+=this.pv[i+2]*e;let a=n.groundY(this.px[i],-this.px[i+2]);this.px[i+1]<a&&(this.px[i+1]=a,this.pv[i+1]*=-.3,this.pv[i]*=.6,this.pv[i+2]*=.6),this.spinA[t]+=e*8;let o=this.life[t]/this.maxLife[t];rp.set(this.px[i],this.px[i+1],this.px[i+2]),np.setFromAxisAngle(this.axis,this.spinA[t]),ip.setScalar(this.size[t]*Math.min(1,o*3)),tp.compose(rp,np,ip),this.parts.setMatrixAt(t,tp)}this.n=r,this.parts.count=r,this.parts.instanceMatrix.needsUpdate=!0;let i=n.groundY(t.x,t.d)+n.rampAt(t.x,t.d),a=Math.max(0,t.y-t.r-i);this.shadow.position.set(t.x,i+.06,-t.d),this.shadow.scale.setScalar(t.r*2.6*(1+a*.05));let o=Math.max(.5,t.r);this.shadow.rotation.x=-Math.atan((n.groundY(t.x,t.d-o)-n.groundY(t.x,t.d+o))/(2*o)),this.shadow.material.opacity=Math.max(.2,1-a*.08),this.updateTrail(e,t)}copyPart(e,t){if(e!==t){for(let n=0;n<3;n++)this.px[t*3+n]=this.px[e*3+n],this.pv[t*3+n]=this.pv[e*3+n];this.life[t]=this.life[e],this.maxLife[t]=this.maxLife[e],this.size[t]=this.size[e],this.spinA[t]=this.spinA[e],this.parts.getColorAt(e,ap),this.parts.setColorAt(t,ap),this.parts.instanceColor.needsUpdate=!0}}updateTrail(e,t){let n=this.trailPts,r=n[n.length-1],i=.6+t.r*.25;for(t.airborne?r&&!r.gap&&n.push({x:r.x,d:r.d,w:0,gap:!0}):(!r||Math.hypot(t.x-r.x,t.d-r.d)>i)&&(r&&r.gap&&n.push({x:t.x,d:t.d,w:0,gap:!0}),n.push({x:t.x,d:t.d,w:t.r*.85}));n.length>ep;)n.shift();let a=this.world,o=this.trailPos,s=n.length;for(let e=0;e<s;e++){let t=n[e],r=n[Math.min(s-1,e+1)],i=n[Math.max(0,e-1)],c=r.x-i.x,l=r.d-i.d,u=Math.hypot(c,l)||1;c/=u,l/=u;let d=Math.min(1,e/12),f=t.w*d,p=t.x+l*f,m=t.d-c*f,h=t.x-l*f,g=t.d+c*f;o[e*6]=p,o[e*6+1]=a.groundY(p,m)+.04,o[e*6+2]=-m,o[e*6+3]=h,o[e*6+4]=a.groundY(h,g)+.04,o[e*6+5]=-g}this.trail.geometry.attributes.position.needsUpdate=!0,this.trail.geometry.setDrawRange(0,Math.max(0,(s-1)*6))}},sp=class{constructor(e){this.dx=0,this.down=!1,this.pointerId=null,this.lastX=0,this.keys={left:!1,right:!1},this.tapHandlers=[],this.jumpQueued=!1,this.swipe={x:0,y:0,t:0,used:!1,lx:0,ly:0},this.laneQueued=0,this.diveQueued=!1,this.doubleTapQueued=!1,this.lastTapT=0,e.addEventListener(`pointerdown`,t=>{if(this.pointerId===null){this.pointerId=t.pointerId,this.down=!0,this.lastX=t.clientX,this.swipe.x=t.clientX,this.swipe.y=t.clientY,this.swipe.t=performance.now(),this.swipe.used=!1,this.swipe.lx=t.clientX,this.swipe.ly=t.clientY;try{e.setPointerCapture(t.pointerId)}catch{}}}),e.addEventListener(`pointermove`,e=>{if(e.pointerId!==this.pointerId)return;let t=e.getCoalescedEvents?e.getCoalescedEvents():null,n=t&&t.length?t[t.length-1].clientX:e.clientX;this.dx+=n-this.lastX,this.lastX=n;let r=this.swipe;if(!r.used){let t=r.y-e.clientY,n=Math.abs(e.clientX-r.x);t>38&&t>n*1.3&&performance.now()-r.t<280&&(r.used=!0,this.jumpQueued=!0),-t>38&&-t>n*1.3&&performance.now()-r.t<280&&(r.used=!0,this.diveQueued=!0)}let i=n-r.lx,a=e.clientY-r.ly;Math.abs(i)>40&&Math.abs(i)>Math.abs(a)*1.2&&(this.laneQueued=Math.max(-2,Math.min(2,this.laneQueued+Math.sign(i))),r.lx=n,r.ly=e.clientY)});let t=e=>{if(e.pointerId!==this.pointerId)return;this.pointerId=null,this.down=!1;let t=this.swipe,n=performance.now();n-t.t<220&&Math.abs(e.clientX-t.x)<14&&Math.abs(e.clientY-t.y)<14&&(n-this.lastTapT<300?(this.doubleTapQueued=!0,this.lastTapT=0):this.lastTapT=n);for(let t of this.tapHandlers)t(e)};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t),e.addEventListener(`lostpointercapture`,t),e.addEventListener(`contextmenu`,e=>e.preventDefault());for(let e of[`gesturestart`,`gesturechange`,`gestureend`])document.addEventListener(e,e=>e.preventDefault());document.addEventListener(`touchmove`,e=>e.preventDefault(),{passive:!1}),window.addEventListener(`keydown`,e=>{(e.key===`ArrowLeft`||e.key===`a`||e.key===`A`)&&(this.keys.left=!0),(e.key===`ArrowRight`||e.key===`d`||e.key===`D`)&&(this.keys.right=!0),(e.key===` `||e.key===`ArrowUp`||e.key===`w`||e.key===`W`)&&!e.repeat&&(this.jumpQueued=!0),(e.key===`ArrowDown`||e.key===`s`||e.key===`S`)&&!e.repeat&&(this.diveQueued=!0),!e.repeat&&(e.key===`ArrowLeft`||e.key===`a`||e.key===`A`)&&(this.laneQueued=Math.max(-2,this.laneQueued-1)),!e.repeat&&(e.key===`ArrowRight`||e.key===`d`||e.key===`D`)&&(this.laneQueued=Math.min(2,this.laneQueued+1))}),window.addEventListener(`blur`,()=>{this.keys.left=this.keys.right=!1,this.dx=0,this.pointerId=null,this.down=!1}),window.addEventListener(`keyup`,e=>{(e.key===`ArrowLeft`||e.key===`a`||e.key===`A`)&&(this.keys.left=!1),(e.key===`ArrowRight`||e.key===`d`||e.key===`D`)&&(this.keys.right=!1)})}onRelease(e){this.tapHandlers.push(e)}consumeDx(){let e=this.dx;return this.dx=0,e}consumeJump(){let e=this.jumpQueued;return this.jumpQueued=!1,e}consumeLane(){let e=this.laneQueued;return this.laneQueued=0,e}consumeDoubleTap(){let e=this.doubleTapQueued;return this.doubleTapQueued=!1,e}consumeDive(){let e=this.diveQueued;return this.diveQueued=!1,e}keyAxis(){return+!!this.keys.right-!!this.keys.left}},cp=e=>document.getElementById(e),lp=new Intl.NumberFormat(`tr-TR`);function up(e){let t=Math.round(e*1e3);if(t<1e3)return`${t} kg`;let n=Math.round(e*10)/10;return n<10?`${n.toFixed(1).replace(`.`,`,`)} ton`:`${lp.format(Math.round(e))} ton`}var dp=class{constructor(){this.el={hud:cp(`hud`),level:cp(`hud-level`),prog:cp(`hud-prog`),dot:cp(`hud-dot`),tons:cp(`hud-tons`),combo:cp(`hud-combo`),floats:cp(`floats`),banner:cp(`banner`),hint:cp(`hint`),menu:cp(`menu`),menuLevel:cp(`menu-level`),menuStars:cp(`menu-stars`),daily:cp(`btn-daily`),result:cp(`result`),resTitle:cp(`res-title`),resStars:cp(`res-stars`),resPct:cp(`res-pct`),resTons:cp(`res-tons`),resSub:cp(`res-sub`),next:cp(`btn-next`),toast:cp(`toast`),pause:cp(`pause`),debug:cp(`debug`),sound:cp(`btn-sound`),haptic:cp(`btn-haptic`),coins:cp(`hud-coins`),vitals:cp(`hud-vitals`),pips:cp(`hud-pips`),grow:cp(`hud-grow`),powers:cp(`hud-powers`),yeti:cp(`hud-yeti`),yetiFill:cp(`hud-yetifill`),resCoins:cp(`res-coins`),menuBest:cp(`menu-best`),resLabel:document.querySelector(`.res-label`)},this.floatCount=0,this.lastTonsText=``,this.pulseT=0,this.timers=[]}on(e,t){cp(e).addEventListener(`click`,e=>{e.stopPropagation(),t(e)})}showMenu({level:e,stars:t,dailyNum:n,dailyBest:r,theme:i}){this.clearTimers(),this.el.menu.classList.remove(`hidden`),this.el.result.classList.add(`hidden`),this.el.pause.classList.add(`hidden`),this.el.hud.classList.add(`hidden`),this.el.menuLevel.textContent=i?`DAĞ ${e} · ${i.toLocaleUpperCase(`tr-TR`)}`:`DAĞ ${e}`,this.el.menuStars.innerHTML=[0,1,2].map(e=>`<span class="${e<t?``:`off`}">★</span>`).join(``),this.el.daily.textContent=r?`🏔️ GÜNÜN DAĞI #${n} · ${up(r)}`:`🏔️ GÜNÜN DAĞI #${n}`}runnerHud(e,t){this.el.menu.classList.add(`hidden`),this.el.result.classList.add(`hidden`),this.el.result.classList.toggle(`runner`,e),this.el.hud.classList.toggle(`hidden`,!e),this.el.coins.classList.toggle(`hidden`,!e),this.el.vitals.classList.toggle(`hidden`,!e),this.el.yeti.classList.toggle(`hidden`,!e),this.lastVitals=``,e&&(this.el.level.textContent=t.toUpperCase(),this.el.floats.innerHTML=``,this.el.banner.innerHTML=``,this.floatCount=0,this.setCombo(0),this.hint(!0,`kaydır · yukarı: zıpla`),this.lastBiome=t)}runnerStats(e,t,n,r,i,a){let o=Math.round(e).toLocaleString(`tr-TR`);o!==this.lastTonsText&&(this.el.tons.textContent=o,this.lastTonsText=o);let s=`❄️ ${t}`;s!==this.lastCoins&&(this.el.coins.textContent=s,this.lastCoins=s),a&&a!==this.lastBiome&&(this.el.level.textContent=a.toUpperCase(),this.lastBiome=a),n>1?(this.el.combo.textContent=`x${n} SKOR`,this.el.combo.classList.add(`on`)):this.el.combo.textContent.endsWith(`SKOR`)&&this.el.combo.classList.remove(`on`),this.setProgress(r)}runnerVitals({tier:e,tiers:t,grow:n,gap:r,yetiMax:i,helmet:a,magnet:o,rocket:s,x2:c,superjump:l,sled:u}){let d=`${e}|${Math.round(n*20)}|${Math.round(r)}|${a}|${o}|${s}|${c}|${l}|${u}`;if(d===this.lastVitals)return;if(this.lastVitals=d,this.lastTier!==e||!this.el.pips.children.length){this.lastTier=e;let n=``;for(let r=0;r<t;r++){let t=14+r*4;n+=`<div class="pip ${r>e?`off`:e===0?`danger`:``}" style="width:${t}px;height:${t}px"></div>`}this.el.pips.innerHTML=n}this.el.grow.style.width=`${Math.round(Math.max(0,Math.min(1,n))*100)}%`;let f=1-Math.max(0,Math.min(1,r/i));this.el.yetiFill.style.width=`${Math.round(f*100)}%`,this.el.yeti.classList.toggle(`close`,r<14),this.el.powers.textContent=`${u?`🛷`:``}${a?`⛑️`:``}${o?`🧲`:``}${s?`🚀`:``}${c?`✖️2`:``}${l?`👟`:``}`}showRunnerResult({title:e,distance:t,score:n,coins:r,best:i,isBest:a,canRevive:o,reviveCost:s=0,boxes:c=0}){this.clearTimers(),this.el.hud.classList.add(`hidden`),this.el.coins.classList.add(`hidden`),this.el.vitals.classList.add(`hidden`),this.el.yeti.classList.add(`hidden`),this.el.result.classList.remove(`hidden`),this.el.result.classList.add(`runner`),this.el.resTitle.textContent=e,this.el.resLabel.textContent=`metre`,this.el.resSub.textContent=a?`YENİ REKOR!`:`REKOR ${i.toLocaleString(`tr-TR`)}`,this.el.resCoins.classList.remove(`hidden`),this.el.resCoins.textContent=`❄️ +${r}${c?`  ·  🎁 x${c}`:``}`,this.el.next.textContent=o?s?`DEVAM ET 💎${s}`:`DEVAM ET ▶`:`ANA MENÜ`;let l=performance.now(),u=()=>{let e=Math.min(1,(performance.now()-l)/900),r=1-(1-e)**3;this.el.resPct.textContent=`${Math.round(t*r).toLocaleString(`tr-TR`)} m`,this.el.resTons.textContent=`SKOR ${Math.round(n*r).toLocaleString(`tr-TR`)}`,e<1&&(this.raf=requestAnimationFrame(u))};u()}hideResult(){this.el.result.classList.add(`hidden`),this.el.hud.classList.remove(`hidden`),this.el.coins.classList.remove(`hidden`),this.el.vitals.classList.remove(`hidden`),this.el.yeti.classList.remove(`hidden`),this.lastVitals=``}setMenuBest(e){this.el.menuBest.textContent=e}startRun(e){this.clearTimers(),this.el.vitals.classList.add(`hidden`),this.el.yeti.classList.add(`hidden`),this.el.result.classList.remove(`runner`),this.el.resCoins.classList.add(`hidden`),this.el.resLabel.textContent=`kasaba yıkıldı`,this.el.coins.classList.add(`hidden`),this.el.menu.classList.add(`hidden`),this.el.result.classList.add(`hidden`),this.el.hud.classList.remove(`hidden`),this.el.level.textContent=e,this.el.floats.innerHTML=``,this.el.banner.innerHTML=``,this.floatCount=0,this.setCombo(0)}hint(e,t=`sürükle`){this.el.hint.classList.toggle(`hidden`,!e),e&&(this.el.hint.lastElementChild.textContent=t)}setTons(e){let t=up(e);t!==this.lastTonsText&&(this.el.tons.textContent=t,this.lastTonsText=t)}pulse(){this.el.tons.classList.add(`pulse`),clearTimeout(this.pulseT),this.pulseT=setTimeout(()=>this.el.tons.classList.remove(`pulse`),90)}setProgress(e){let t=`${Math.max(0,Math.min(1,e))*100}%`;this.el.prog.style.width=t,this.el.dot.style.left=t}setCombo(e){e>=3?(this.el.combo.textContent=`KOMBO x${e}`,this.el.combo.classList.add(`on`)):this.el.combo.classList.remove(`on`)}float(e,t,n,r=``){if(this.floatCount>8)return;let i=document.createElement(`div`);i.className=`float ${r}`,i.textContent=e,i.style.left=`${t}px`,i.style.top=`${n}px`,this.floatCount++,i.addEventListener(`animationend`,()=>{i.remove(),this.floatCount--}),this.el.floats.appendChild(i)}banner(e,t=1){this.el.banner.innerHTML=``;let n=document.createElement(`div`);n.className=`b l${t}`,n.textContent=e,this.el.banner.appendChild(n)}showResult({title:e,pct:t,stars:n,tons:r,sub:i,coins:a,hasNext:o},s){this.el.resCoins.classList.toggle(`hidden`,!a),a&&(this.el.resCoins.textContent=`❄️ +${a}`),this.el.hud.classList.add(`hidden`),this.el.result.classList.remove(`hidden`),this.el.resTitle.textContent=e,this.el.resSub.textContent=i||``,this.el.next.textContent=o?`SONRAKİ DAĞ`:`ANA MENÜ`;let c=this.el.resStars.children;for(let e of c)e.classList.remove(`on`);this.clearTimers();let l=performance.now(),u=()=>{let e=Math.min(1,(performance.now()-l)/1100),n=1-(1-e)**3;this.el.resPct.textContent=`%${Math.round(t*100*n)}`,this.el.resTons.textContent=up(r*n),e<1&&(this.raf=requestAnimationFrame(u))};u();for(let e=0;e<n;e++)this.timers.push(setTimeout(()=>{c[e].classList.add(`on`),s?.star(e)},500+e*380))}clearTimers(){for(let e of this.timers)clearTimeout(e);this.timers.length=0,cancelAnimationFrame(this.raf)}toast(e){this.el.toast.textContent=e,this.el.toast.classList.add(`on`),clearTimeout(this.toastT),this.toastT=setTimeout(()=>this.el.toast.classList.remove(`on`),1600)}showPause(e){this.el.pause.classList.toggle(`hidden`,!e)}setToggle(e,t){this.el[e].classList.toggle(`off`,!t)}debug(e){this.el.debug.classList.remove(`hidden`),this.el.debug.textContent=e}},fp=[[`snow_crunch_1`,.85],[`snow_crunch_2`,.57],[`snow_crunch_3`,.57],[`snow_crunch_4`,.94],[`snow_crunch_5`,.82],[`impact_soft_1`,.54],[`impact_soft_2`,.56],[`impact_soft_3`,.51],[`hit_1`,1.25],[`hit_2`,1.16],[`hit_3`,.86],[`crash_wood_1`,1.2],[`crash_wood_2`,1.16],[`crash_wood_3`,1.07],[`crash_glass_1`,1.68],[`crash_glass_2`,1],[`crash_rock_1`,1.25],[`crash_rock_2`,1.36],[`break_1`,1.44],[`break_2`,1.82],[`break_3`,1.25],[`break_4`,1.17],[`ui_click`,.75],[`ui_select`,.58],[`ui_confirm`,.37],[`ui_back`,.72],[`ui_toggle`,.33],[`coin_1`,.8],[`coin_2`,.62],[`jingle_win`,.55],[`jingle_lose`,.59],[`jingle_milestone`,.59],[`jingle_star`,.77]],pp=16,mp=.004,hp=null,gp=null,_p=null,vp=0,yp=0,bp=Object.create(null),xp=Object.create(null),Sp=Array(pp).fill(null),Cp=e=>{let t=/^(.*)_\d+$/.exec(e);return t?t[1]:e};function wp(e,t,n){let r={buf:t,gain:n};(bp[e]||(bp[e]=[])).push(r);let i=Cp(e);i!==e&&(bp[i]||(bp[i]=[])).push(r)}function Tp(e,t){return new Promise(n=>{let r=!1,i=e=>{r||(r=!0,n(e||null))},a=()=>{r||(r=!0,n(null))};try{let n=e.decodeAudioData(t,i,a);n&&typeof n.then==`function`&&n.then(i,a)}catch{a()}})}function Ep(e,t){try{if(!t||t.numberOfChannels<2)return t;let n=e.createBuffer(1,t.length,t.sampleRate),r=n.getChannelData(0),i=t.getChannelData(0),a=t.getChannelData(1);for(let e=0;e<r.length;e++)r[e]=(i[e]+a[e])*.5;return n}catch{return t}}async function Dp(e,t,n){if(!e||typeof e.decodeAudioData!=`function`||typeof fetch!=`function`)return 0;hp=e,gp=t||e.destination;let r=0,i=async t=>{try{let i=await fetch(n+t[0]+`.ogg`);if(!i||i.status>=400)return!1;let a=await Tp(e,await i.arrayBuffer());return a?(wp(t[0],Ep(e,a),t[1]),r++,!0):!1}catch{return!1}},a=await Promise.all([i(fp[0]),i(fp[fp.length-1])]);return!a[0]&&!a[1]?0:(await Promise.all(fp.slice(1,-1).map(i)),r)}function Op(){this.onended=null;try{this.disconnect()}catch{}let e=this._g;if(this._g=null,e)try{e.disconnect()}catch{}Sp[this._s]===this&&(Sp[this._s]=null,yp--)}function kp(e){let t=Sp[e];Sp[e]=null,yp--;try{let e=hp.currentTime;t._g.gain.cancelScheduledValues(e),t._g.gain.setTargetAtTime(0,e,mp),t.stop(e+.03)}catch{}}var Ap=(e,t)=>typeof e==`number`&&e===e&&e!==1/0&&e!==-1/0?e:t;function jp(e,t){let n=bp[e];if(!n||!hp||!gp)return null;let r=t?Ap(t.prio,0):0,i=-1;for(let e=0;e<pp;e++)if(Sp[e]===null){i=e;break}if(i<0){for(let e=0;e<pp;e++){let t=Sp[e];t._p<=r&&(i<0||t._p<Sp[i]._p||t._p===Sp[i]._p&&t._n<Sp[i]._n)&&(i=e)}if(i<0)return null;kp(i)}let a=n.length,o=0;a>1&&(o=Math.random()*a|0,o===xp[e]&&(o=(o+1)%a),xp[e]=o);let s=n[o],c=Math.max(0,Ap(t&&t.volume,1)),l=Math.min(4,Math.max(.1,Ap(t&&t.rate,1))),u=Ap(t&&t.detune,0),d=Ap(t&&t.when,0),f=Ap(t&&t.dur,0),p=hp.createBufferSource();p.buffer=s.buf,l!==1&&(p.playbackRate.value=l),u!==0&&(p.detune.value=u);let m=hp.createGain(),h=c*s.gain;m.gain.value=h,p.connect(m),m.connect(gp),p._g=m,p._s=i,p._p=r,p._n=++vp,p.onended=Op,Sp[i]=p,yp++;try{let e=d>0?d:hp.currentTime;if(p.start(e),f>0){let t=Math.min(.05,f*.5);m.gain.setValueAtTime(h,e+f-t),m.gain.linearRampToValueAtTime(0,e+f),p.stop(e+f+.005)}}catch{return Op.call(p),null}return p}var Mp={load(e,t,n=`./sfx/`){return _p||(_p=Dp(e,t,n).catch(()=>0)),_p},has(e){let t=bp[e];return!!t&&t.length>0},play(e,t){try{return jp(e,t)}catch{return null}},active(){return yp}},Np=`cig.muted`,Pp=24,Fp=.7,Ip=392,Lp=[0,2,4,7,9],Rp=1976,zp=-.22,Bp=2**(.78/12),Vp=2**(10.78/12),Hp={pop:1.4,bump:1,crash:.7,roll:1,whoosh:1,land:1,milestone:.6,ui:1.5,star:1.25,win:1.25,lose:1.25},Up={pop:.5,bumpSoft:.9,bumpHit:.8,crashBreak:.8,crashWood:.75,crashRock:.6,crashGlass:.45,landSoft:1,landCrunch:.7,ui:1,coin:.7,starJingle:.55,win:.9,lose:.9,milestone:.6},Wp={__proto__:null,click:`ui_click`,select:`ui_select`,confirm:`ui_confirm`,back:`ui_back`,toggle:`ui_toggle`},Gp=1,Kp=2,qp=2,Jp=3,Yp=4,Xp=null,Zp=null,Qp=null,$p=!1,em=null,tm=null,nm=null,rm=mm(),im=!1,am=0,om=0,sm=[],cm=null,lm={pop:-1,popS:-1,bump:-1,crash:-1,land:-1,ui:-1,whoosh:-1},um=(e,t)=>e+Math.random()*(t-e),dm=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t,fm=e=>e>0?e<1?e:1:0,pm=()=>typeof performance<`u`?performance.now():Date.now();function mm(){try{return globalThis.localStorage.getItem(Np)===`1`}catch{return!1}}function hm(){try{globalThis.localStorage.setItem(Np,rm?`1`:`0`)}catch{}}function gm(e,t){let n=0;for(let t=0;t<e.length;t++)n+=e[t]*e[t];let r=t/(Math.sqrt(n/e.length)||1);for(let t=0;t<e.length;t++)e[t]*=r}function _m(e,t){let n=e.createBuffer(1,Math.floor(e.sampleRate*t),e.sampleRate),r=n.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=Math.random()*2-1;return gm(r,.3),n}function vm(e,t){let n=Math.floor(e.sampleRate*t),r=Math.floor(e.sampleRate*.25),i=new Float32Array(n+r),a=0;for(let e=0;e<i.length;e++)a=(a+.02*(Math.random()*2-1))/1.02,i[e]=a;let o=e.createBuffer(1,n,e.sampleRate),s=o.getChannelData(0);for(let e=0;e<n;e++)s[e]=i[e];for(let e=0;e<r;e++){let t=e/r*Math.PI*.5;s[e]=i[n+e]*Math.cos(t)+i[e]*Math.sin(t)}return gm(s,.3),o}function ym(e,t){let n=e.createBuffer(1,Math.floor(e.sampleRate*t),e.sampleRate),r=n.getChannelData(0),i=300/e.sampleRate,a=Math.exp(-1/(e.sampleRate*.0012)),o=0;for(let e=0;e<r.length;e++)Math.random()<i&&(o=Math.max(o,.35+.65*Math.random())),r[e]=(Math.random()*2-1)*o,o*=a;return gm(r,.25),n}function bm(){am=pm()+400;try{let e=Xp.resume();e&&typeof e.catch==`function`&&e.catch(()=>{})}catch{}}function xm(){if(!Xp||!Zp||rm||im)return!1;let e=Xp.state;if(e===`running`)return!0;if(e===`closed`)return!1;let t=pm();if(t<am)return!0;if(t-om>600){om=t;try{let e=Xp.resume();e&&typeof e.catch==`function`&&e.catch(()=>{})}catch{}}return!1}function Sm(e,t){let n=Xp.currentTime;return n-lm[e]<t?!1:(lm[e]=n,!0)}function Cm(e){if(e.done)return;e.done=!0;let t=sm.indexOf(e);t>=0&&sm.splice(t,1);try{e.out.disconnect()}catch{}}function wm(e){let t=sm.indexOf(e);t>=0&&sm.splice(t,1);try{let t=Xp.currentTime;e.out.gain.cancelScheduledValues(t),e.out.gain.setTargetAtTime(0,t,.005);for(let n=0;n<e.nodes.length;n++)try{e.nodes[n].stop(t+.04)}catch{}}catch{}}function Tm(e,t,n){let r=Xp.currentTime;for(let e=sm.length-1;e>=0;e--)sm[e].end<r-.25&&Cm(sm[e]);if(sm.length>=Pp){let t=-1;for(let n=0;n<sm.length;n++)sm[n].prio<=e&&(t<0||sm[n].prio<sm[t].prio)&&(t=n);if(t<0)return null;wm(sm[t])}let i=Dm(n);i.connect(Zp);let a={out:i,prio:e,end:r+t+.1,live:0,done:!1,nodes:[]};return sm.push(a),a}function Em(e,t){e.live++,e.nodes.push(t),t.onended=()=>{try{t.disconnect()}catch{}--e.live<=0&&Cm(e)}}function Dm(e){let t=Xp.createGain();return t.gain.value=e===void 0?0:e,t}function Om(e,t,n){let r=Xp.createBiquadFilter();return r.type=e,r.frequency.value=t,n!==void 0&&(r.Q.value=n),r}function km(){for(let e=0;e<arguments.length-1;e++)arguments[e].connect(arguments[e+1])}function Am(e,t,n,r,i){e.setValueAtTime(1e-4,t),e.linearRampToValueAtTime(Math.max(n,2e-4),t+r),e.exponentialRampToValueAtTime(1e-4,t+r+i)}function jm(e,t,n,r,i){e.setValueAtTime(n,t),e.exponentialRampToValueAtTime(r,t+i)}function Mm(e,t,n,r){let i=Xp.createBufferSource();return i.buffer=t,i.loop=!0,Em(e,i),i.start(n,um(0,Math.max(0,t.duration-.05))),i.stop(n+r),i}function Nm(e,t,n,r,i){let a=Xp.createOscillator();return a.type=t,a.frequency.value=n,Em(e,a),a.start(r),a.stop(r+i),a}function Pm(e,t,n,r,i,a,o,s,c){let l=Nm(e,t,r,n,s+c+.03);i&&i!==r&&jm(l.frequency,n,r,i,a);let u=Dm();return Am(u.gain,n,o,s,c),km(l,u,e.out),l}function Fm(e,t,n,r,i,a,o,s,c,l,u){let d=Mm(e,t,n,l+u+.04),f=Om(r,i,o);a&&a!==i&&jm(f.frequency,n,i,a,s);let p=Dm();Am(p.gain,n,c,l,u),km(d,f,p,e.out)}function Im(e,t,n,r,i,a,o,s,c,l,u){let d=Mm(e,t,n,u+.05),f=Om(r,i,s);f.frequency.setValueAtTime(i,n),f.frequency.exponentialRampToValueAtTime(a,n+l),f.frequency.exponentialRampToValueAtTime(o,n+u);let p=Dm();p.gain.setValueAtTime(1e-4,n),p.gain.linearRampToValueAtTime(Math.max(c,2e-4),n+l),p.gain.exponentialRampToValueAtTime(1e-4,n+u),km(d,f,p,e.out)}function Lm(e,t,n,r,i,a,o,s){let c=Nm(e,t,r,n,s+.05);jm(c.frequency,n,r,i,o);let l=Dm();l.gain.setValueAtTime(1e-4,n),l.gain.linearRampToValueAtTime(Math.max(a,2e-4),n+o),l.gain.exponentialRampToValueAtTime(1e-4,n+s),km(c,l,e.out)}function Rm(e,t,n,r,i,a,o,s,c){let l=Mm(e,nm,t,n+r+.1),u=Om(`bandpass`,(a+o)*.5,s),d=Dm();d.gain.setValueAtTime(1e-4,t);let f=r/i,p=t+n,m=p;for(let e=0;e<i;e++){let e=Math.max(.006,Math.min(um(.018,.04),f*.8)),t=c*(1-.7*((m-p)/r))*um(.5,1);u.frequency.setValueAtTime(um(a,o),m),d.gain.setValueAtTime(1e-4,m),d.gain.linearRampToValueAtTime(Math.max(t,2e-4),m+.002),d.gain.exponentialRampToValueAtTime(1e-4,m+e),m+=f*um(.85,1.15)}km(l,u,d,e.out)}var zm={volume:1,rate:1,detune:0,when:0,prio:0,dur:0};function Bm(e,t,n,r,i,a){return zm.volume=t,zm.rate=n,zm.prio=r,zm.when=i,zm.dur=a||0,Mp.play(e,zm)}var Vm=e=>Mp.has(e);function Hm(){if(!$p&&Xp&&Qp){$p=!0;try{let e=Mp.load(Xp,Qp);e&&typeof e.catch==`function`&&e.catch(()=>{})}catch{}}}function Um(e){let t=e;return t>10&&(t=5+(t-11)%6),12*Math.floor(t/5)+Lp[t%5]}function Wm(e){let t=e.createGain();t.gain.value=rm?0:Fp;let n=e.createDynamicsCompressor();n.threshold.value=-12,n.knee.value=20,n.ratio.value=6,n.attack.value=.004,n.release.value=.2,t.connect(n),n.connect(e.destination);try{let t=e.createBuffer(1,1,22050),n=e.createBufferSource();n.buffer=t,n.connect(e.destination),n.start(0)}catch{}let r=e.createGain();r.gain.value=1,r.connect(t),Xp=e,Zp=t,Qp=r,em=_m(e,2),tm=vm(e,4),nm=ym(e,2)}function Gm(){try{let e=globalThis.navigator;e&&e.audioSession&&(e.audioSession.type=`playback`)}catch{}try{if(!Xp){let e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return;let t;try{t=new e({latencyHint:`interactive`})}catch{t=new e}try{Wm(t)}catch{Xp=null,Zp=null,Qp=null,em=tm=nm=null;try{t.close()}catch{}return}}im=!1,Xp.state!==`running`&&bm(),Hm()}catch{}}function Km(e){if(rm=!!e,hm(),Xp&&Zp){let e=Xp.currentTime;Zp.gain.cancelScheduledValues(e),Zp.gain.setTargetAtTime(rm?0:Fp,e,.015)}rm&&Xm()}function qm(){return rm}function Jm(){if(!Xp)return;im=!0,Xm();let e=Xp.suspend();e&&typeof e.catch==`function`&&e.catch(()=>{})}function Ym(){Xp&&(im=!1,bm())}function Xm(){if(!cm||!Xp)return;let e=Xp.currentTime;cm.out.gain.cancelScheduledValues(e),cm.out.gain.setTargetAtTime(0,e,.03),cm.sp=0}function Zm(){let e=Dm(0);e.connect(Zp);let t=Xp.createBufferSource();t.buffer=tm,t.loop=!0;let n=Om(`lowpass`,200,.7);km(t,n,Dm(1.2),e),t.start(0,um(0,tm.duration-.1));let r=Xp.createOscillator();r.type=`triangle`,r.frequency.value=70;let i=Dm(0);km(r,i,e),r.start();let a=Xp.createBufferSource();a.buffer=em,a.loop=!0;let o=Om(`bandpass`,2e3,.6),s=Dm(0);km(a,o,s,e),a.start(0,um(0,em.duration-.1));let c=Xp.createOscillator();c.type=`sine`,c.frequency.value=3;let l=Dm(0);return km(c,l),l.connect(e.gain),c.start(),{out:e,lp:n,sub:r,subG:i,hbp:o,hg:s,lfo:c,lfoG:l,sp:-1,sz:-1}}function Qm(e,t){if(!xm())return;let n=fm(dm(e,0)),r=fm(dm(t,0));if(n<.01&&(n=0),!cm){if(n===0)return;cm=Zm()}if(Math.abs(n-cm.sp)+Math.abs(r-cm.sz)<.003)return;cm.sp=n,cm.sz=r;let i=Xp.currentTime,a=n===0?0:n**1.2*(.16+.2*r)*Hp.roll;cm.out.gain.setTargetAtTime(a,i,.09),cm.lp.frequency.setTargetAtTime((140+620*n)*(1-.5*r),i,.12),cm.sub.frequency.setTargetAtTime(96-44*r+14*n,i,.15),cm.subG.gain.setTargetAtTime(n===0?0:.05+.1*r,i,.12),cm.hbp.frequency.setTargetAtTime(1600+1600*n,i,.12),cm.hg.gain.setTargetAtTime(.7*n*n*(1-.4*r),i,.1),cm.lfo.frequency.setTargetAtTime((1.5+5*n)/(.8+.8*r),i,.15),cm.lfoG.gain.setTargetAtTime(a*.16,i,.1)}function $m(e,t){if(!xm()||!Sm(`pop`,.022))return;let n=fm(dm(e,.3)),r=Math.max(0,Math.floor(dm(t,0))),i=Tm(Gp,.45,Hp.pop);if(!i)return;let a=Xp.currentTime+.002,o=Math.min(r,10)/10,s=Ip*2**((Um(r)-n*4)/12)*um(.97,1.03);Pm(i,`triangle`,a,s*1.05,s,.012,.2*(1+.3*o),.002,.15+.05*n),Pm(i,`sine`,a,s*2,0,0,.07+.07*o,.001,.07);let c=Vm(`snow_crunch`),l=um(2300,3800)*(1-.4*n);Fm(i,nm,a,`bandpass`,l,l*.7,um(.9,1.5),.08,2*(.7+.3*n)*(c?.55:1),.002,.05+.07*n),Fm(i,em,a,`highpass`,um(2500,3500),0,.7,0,.3*(c?.6:1),8e-4,.012),n>.2&&Pm(i,`sine`,a,um(130,160)*(1-.3*n),50,.11,.3*n,.003,.12),c&&Sm(`popS`,.04)&&Bm(`snow_crunch`,Up.pop*(.75+.45*n),(1.5-.75*n)*um(.92,1.08),Gp,a,.12+.2*n)}function eh(e){if(!xm()||!Sm(`bump`,.07))return;let t=fm(dm(e,.5)),n=Tm(Jp,.9,Hp.bump);if(!n)return;let r=Xp.currentTime+.002,i=.4+.6*t,a=Vm(`impact_soft`),o=Vm(`hit`),s=a||o?.65:1;Pm(n,`sine`,r,um(105,125),40,.16,.6*i*s,.003,.3),Pm(n,`triangle`,r,um(170,200),80,.12,.45*i*(o?.4:1),.002,.14),Fm(n,tm,r,`lowpass`,280,120,.7,.2,.6*i*s,.004,.22),Fm(n,em,r,`lowpass`,1200,300,.7,.2,.7*i*(a||o?.8:1),.004,.16),Rm(n,r,.03,.25+.15*t,4+Math.round(8*t),700,2e3,.8,.9*i*(a||o?.8:1)),a&&Bm(`impact_soft`,Up.bumpSoft*(.55+.45*t),(1.1-.15*t)*um(.94,1.06),Jp,r,0),o&&Bm(`hit`,Up.bumpHit*(.45+.55*t),um(.94,1.06),Jp,r,.4)}function th(e){if(!xm()||!Sm(`crash`,.06))return;let t=fm(dm(e,.7)),n=Tm(3.5,1.8,Hp.crash);if(!n)return;let r=Xp.currentTime+.002,i=.55+.45*t,a=Vm(`break`)||Vm(`crash_wood`)||Vm(`crash_rock`)||Vm(`crash_glass`),o=a?.5:1;Pm(n,`sine`,r,um(70,90),26,.6,.55*i,.004,.95),Pm(n,`triangle`,r,um(150,190),55,.25,.5*i*(a?.7:1),.002,.28),Fm(n,tm,r,`lowpass`,650,150,.8,.7,.8*i*(a?.85:1),.004,.8),Fm(n,em,r,`lowpass`,7e3,400,.8,.6,.9*i*o,.002,.55),Rm(n,r,.08,.7+.5*t,8+Math.round(14*t),600,4200,1,.6*i*o),Rm(n,r,.2,.9+.4*t,5+Math.round(8*t),250,1400,.9,.5*i*o),a&&nh(t,r)}function nh(e,t){let n=3.5,r=(1.1-.22*e)*um(.95,1.05),i=.7+.5*e;if(e<.4){!Bm(`crash_wood`,Up.crashWood*i,r,n,t,0)&&!Bm(`break`,Up.crashBreak*i,r,n,t,0)&&(Bm(`crash_rock`,Up.crashRock*i,r,n,t,0)||Bm(`crash_glass`,Up.crashGlass*i,r,n,t,0));return}if(Bm(`break`,Up.crashBreak*i,r,n,t,0)||Bm(`crash_rock`,Up.crashRock*i,r,n,t,0),Bm(`crash_wood`,Up.crashWood*.6*i,r*um(.95,1.05),n,t+.015,0),e>.65){let i=Math.random()<.4;Bm(i?`crash_glass`:`crash_rock`,(i?Up.crashGlass:Up.crashRock)*(.5+.5*e),r,n,t+.04,0)}}function rh(){if(!xm()||!Sm(`whoosh`,.3))return;let e=Tm(qp,1.3,Hp.whoosh);if(!e)return;let t=Xp.currentTime+.002,n=Mm(e,em,t,1.25),r=Om(`bandpass`,320,1.1);r.frequency.setValueAtTime(320,t),r.frequency.exponentialRampToValueAtTime(2800,t+.5),r.frequency.exponentialRampToValueAtTime(900,t+1.15);let i=Dm();i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(1.6,t+.38),i.gain.exponentialRampToValueAtTime(1e-4,t+1.2),km(n,r,i,e.out),Im(e,tm,t,`lowpass`,300,500,200,.7,.6,.3,1),Im(e,em,t+.05,`highpass`,4500,5500,4e3,.7,.12,.3,.9)}function ih(e){if(!xm()||!Sm(`land`,.1))return;let t=fm(dm(e,.5)),n=Tm(Jp,.9,Hp.land);if(!n)return;let r=Xp.currentTime+.002,i=.4+.6*t,a=Vm(`impact_soft`),o=Vm(`snow_crunch`),s=a?.75:1,c=o?.6:1;Pm(n,`sine`,r,um(100,120),42,.14,.75*i*s,.003,.28),Pm(n,`triangle`,r,um(150,175),70,.12,.4*i,.002,.16),Fm(n,tm,r,`lowpass`,240,110,.7,.25,.55*i*s,.004,.3),Fm(n,em,r,`lowpass`,2400,500,.7,.3,.7*i*c,.008,.3),Rm(n,r,.04,.3,3+Math.round(8*t),900,2400,.8,.8*i*c),a&&Bm(`impact_soft`,Up.landSoft*(.5+.5*t),(1.1-.2*t)*um(.95,1.05),Jp,r,.45),o&&Bm(`snow_crunch`,Up.landCrunch*(.6+.4*t),(1-.3*t)*um(.94,1.06),Jp,r+.012,0)}function ah(e){if(!xm())return;let t=Math.max(1,Math.min(6,Math.floor(dm(e,1)))),n=Tm(Yp,2.4,Hp.milestone);if(!n)return;let r=Xp.currentTime+.01,i=Math.min(8,4+t),a=Math.max(.045,.075-t*.005);if(Vm(`jingle_milestone`))Bm(`jingle_milestone`,Up.milestone*(.85+.03*t),2**((Um(t-1)+zp)/12),Yp,r,0);else{let e=[0,4,7,12,16,19,24,28],o=261.63*2**((t-1)*2/12);for(let s=0;s<i;s++){let c=r+s*a,l=s===i-1,u=o*2**(e[s]/12)*um(.998,1.002),d=.17+s/i*.1;Pm(n,`triangle`,c,u,0,0,d,.004,l?.7+.1*t:.2),Pm(n,`sine`,c,u*2,0,0,d*.4,.003,l?.5:.14),l&&t>=2&&(Pm(n,`sine`,c,u*1.5,0,0,d*.5,.006,.8),Pm(n,`sine`,c,u*.5,0,0,d*.5,.006,.9))}}let o=.4+.05*t;Im(n,tm,r,`lowpass`,90,520,140,.8,.9+.1*t,o,1.9),Lm(n,`sine`,r,50,78,.28+.04*t,o,1.8),Im(n,em,r,`bandpass`,500,2500,900,.8,.5+.05*t,o,1.5),t>=4&&Fm(n,em,r+i*a,`highpass`,5e3,0,.7,0,.1,.01,.6)}function oh(e){if(!xm()||!Sm(`ui`,.03))return;let t=typeof e==`string`?Wp[e]:void 0;if((!t||!Vm(t))&&(t=`ui_click`),Vm(t)){Bm(t,Up.ui,um(.97,1.03),Kp,Xp.currentTime+.001,0);return}let n=Tm(Kp,.15,Hp.ui);if(!n)return;let r=Xp.currentTime+.001;Pm(n,`sine`,r,1500,900,.03,.26,.001,.05),Pm(n,`triangle`,r,3e3,1800,.03,.06,.001,.03),Fm(n,em,r,`highpass`,3500,0,.7,0,.12,8e-4,.008)}function sh(e){if(!xm())return;let t=Math.max(0,Math.min(2,Math.round(dm(e,0)))),n=Tm(Yp,1.6,Hp.star);if(!n)return;let r=Xp.currentTime+.005,i=r+.07,a=784*2**([0,4,7][t]/12);Pm(n,`sine`,r,a*.5,a,.09,.1,.01,.08),Pm(n,`sine`,i,a,0,0,.28,.003,.7+.15*t),Pm(n,`sine`,i,a*2.76,0,0,.08,.002,.35),Pm(n,`sine`,i,a*5.4,0,0,.04,.002,.2),Fm(n,em,i,`highpass`,6e3+t*500,0,.7,0,.07+.02*t,.001,.12),t===2&&(Pm(n,`triangle`,i,a*2,0,0,.12,.004,1),Pm(n,`sine`,i,a*1.5,0,0,.1,.004,.9)),Vm(`coin`)&&Bm(`coin`,Up.coin,a*2/Rp,Yp,i,0),t===2&&Vm(`jingle_star`)&&Bm(`jingle_star`,Up.starJingle,Vp,Yp,i,0)}function ch(){if(!xm())return;if(Vm(`jingle_win`)){Bm(`jingle_win`,Up.win,Bp,Yp,Xp.currentTime+.01,0);return}let e=Tm(Yp,1.6,Hp.win);if(!e)return;let t=Xp.currentTime+.01,n=Om(`lowpass`,3200,.7);n.connect(e.out);let r=(t,r,i,a)=>{let o=Dm();o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(a,t+.012),o.gain.linearRampToValueAtTime(a*.8,t+i*.6),o.gain.exponentialRampToValueAtTime(1e-4,t+i);let s=Nm(e,`sawtooth`,r*um(.998,1.002),t,i+.03),c=Nm(e,`triangle`,r,t,i+.03);km(s,o),km(c,o),o.connect(n)};r(t,523.25,.13,.1),r(t+.11,659.25,.13,.1),r(t+.22,783.99,.13,.1);let i=t+.36;r(i,523.25,.9,.07),r(i,659.25,.9,.07),r(i,783.99,.9,.07),r(i,1046.5,.9,.08),Fm(e,em,i,`highpass`,5500,0,.7,0,.09,.01,.5),Pm(e,`sine`,i+.04,2093,0,0,.05,.002,.25),Pm(e,`sine`,i+.16,2637,0,0,.05,.002,.25),Pm(e,`sine`,i+.28,3136,0,0,.05,.002,.3)}function lh(){if(!xm())return;if(Vm(`jingle_lose`)){Bm(`jingle_lose`,Up.lose,1,Yp,Xp.currentTime+.01,0);return}let e=Tm(Yp,1.8,Hp.lose);if(!e)return;let t=Xp.currentTime+.01,n=[[466.16,.26],[440,.26],[415.3,.26],[392,.9]],r=0;for(let e=0;e<n.length;e++)r+=n[e][1]+.03;let i=Om(`lowpass`,500,3),a=Dm();km(a,i,e.out);let o=Nm(e,`sawtooth`,n[0][0],t,r+.1),s=Nm(e,`triangle`,n[0][0]*.5,t,r+.1);km(o,a),km(s,a);let c=Nm(e,`sine`,5.5,t,r+.1),l=Dm(0);km(c,l),l.connect(o.detune),l.connect(s.detune),a.gain.setValueAtTime(1e-4,t),i.frequency.setValueAtTime(380,t);let u=.16,d=t;for(let e=0;e<n.length;e++){let t=n[e][0],r=n[e][1],c=e===n.length-1;o.frequency.setValueAtTime(t,d),s.frequency.setValueAtTime(t*.5,d),c&&(o.frequency.exponentialRampToValueAtTime(t*.92,d+r),s.frequency.exponentialRampToValueAtTime(t*.46,d+r),l.gain.setValueAtTime(0,d),l.gain.linearRampToValueAtTime(24,d+r*.6)),a.gain.setValueAtTime(1e-4,d),a.gain.linearRampToValueAtTime(u,d+.025),a.gain.linearRampToValueAtTime(u*.85,d+r*.75),a.gain.exponentialRampToValueAtTime(1e-4,d+r),i.frequency.setValueAtTime(380,d),i.frequency.exponentialRampToValueAtTime(1500,d+(c?.25:.09)),i.frequency.exponentialRampToValueAtTime(500,d+r),d+=r+.03}}var uh=(e,t)=>function(){try{return e.apply(null,arguments)}catch{return t}},dh={init:uh(Gm),setMuted:uh(Km),isMuted:uh(qm,!1),pop:uh($m),bump:uh(eh),crash:uh(th),setRoll:uh(Qm),whoosh:uh(rh),land:uh(ih),milestone:uh(ah),ui:uh(oh),star:uh(sh),win:uh(ch),lose:uh(lh),suspend:uh(Jm),resume:uh(Ym)},fh;(function(e){e.Unimplemented=`UNIMPLEMENTED`,e.Unavailable=`UNAVAILABLE`})(fh||(fh={}));var ph=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},mh=e=>e?.androidBridge?`android`:e?.webkit?.messageHandlers?.bridge?`ios`:`web`,hh=e=>{let t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>t===null?mh(e):t.name,a=()=>i()!==`web`,o=e=>!!(l.get(e)?.platforms.has(i())||s(e)),s=e=>n.PluginHeaders?.find(t=>t.name===e),c=t=>e.console.error(t),l=new Map;return n.convertFileSrc||(n.convertFileSrc=e=>e),n.getPlatform=i,n.handleError=c,n.isNativePlatform=a,n.isPluginAvailable=o,n.registerPlugin=(e,a={})=>{let o=l.get(e);if(o)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),o.proxy;let c=i(),u=s(e),d,f=async()=>(!d&&c in a?d=d=typeof a[c]==`function`?await a[c]():a[c]:t!==null&&!d&&`web`in a&&(d=d=typeof a.web==`function`?await a.web():a.web),d),p=(t,r)=>{if(u){let i=u?.methods.find(e=>r===e.name);if(i)return i.rtype===`promise`?t=>n.nativePromise(e,r.toString(),t):(t,i)=>n.nativeCallback(e,r.toString(),t,i);if(t)return t[r]?.bind(t)}else if(t)return t[r]?.bind(t);else throw new ph(`"${e}" plugin is not implemented on ${c}`,fh.Unimplemented)},m=t=>{let n,r=(...r)=>{let i=f().then(i=>{let a=p(i,t);if(a){let e=a(...r);return n=e?.remove,e}throw new ph(`"${e}.${t}()" is not implemented on ${c}`,fh.Unimplemented)});return t===`addListener`&&(i.remove=async()=>n()),i};return r.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:t,writable:!1,configurable:!1}),r},h=m(`addListener`),g=m(`removeListener`),_=(e,t)=>{let n=h({eventName:e},t),r=async()=>{let r=await n;g({eventName:e,callbackId:r},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn(`Using addListener() without 'await' is deprecated.`),await r()},i},v=new Proxy({},{get(e,t){switch(t){case`$$typeof`:return;case`toJSON`:return()=>({});case`addListener`:return u?_:h;case`removeListener`:return g;default:return m(t)}}});return r[e]=v,l.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(a),...u?[c]:[]])}),v},n.Exception=ph,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},gh=(e=>e.Capacitor=hh(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),_h=gh.registerPlugin,vh=class{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(!r){if(n){let n=this.retainedEventArguments[e];n||(n=[]),n.push(t),this.retainedEventArguments[e]=n}return}r.forEach(e=>e(t))}hasListeners(e){return!!this.listeners[e]?.length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e=`not implemented`){return new gh.Exception(e,fh.Unimplemented)}unavailable(e=`not available`){return new gh.Exception(e,fh.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);r!==-1&&this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}},yh=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),bh=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),xh=class extends vh{async getCookies(){let e=document.cookie,t={};return e.split(`;`).forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,`CAP_COOKIE`).split(`CAP_COOKIE`);n=bh(n).trim(),r=bh(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=yh(e.key),n=yh(e.value),r=e.expires?`; expires=${e.expires.replace(`expires=`,``)}`:``,i=(e.path||`/`).replace(`path=`,``),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:``;document.cookie=`${t}=${n||``}${r}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{let e=document.cookie.split(`;`)||[];for(let t of e)document.cookie=t.replace(/^ +/,``).replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}};_h(`CapacitorCookies`,{web:()=>new xh});var Sh=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(`,`)>=0?e.split(`,`)[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),Ch=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},wh=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let[r,i]=n,a,o;return Array.isArray(i)?(o=``,i.forEach(e=>{a=t?encodeURIComponent(e):e,o+=`${r}=${a}&`}),o.slice(0,-1)):(a=t?encodeURIComponent(i):i,o=`${r}=${a}`),`${e}&${o}`},``).substr(1):null,Th=(e,t={})=>{let n=Object.assign({method:e.method||`GET`,headers:e.headers},t),r=Ch(e.headers)[`content-type`]||``;if(typeof e.data==`string`)n.body=e.data;else if(r.includes(`application/x-www-form-urlencoded`)){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes(`multipart/form-data`)||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete(`content-type`),n.headers=r}else(r.includes(`application/json`)||typeof e.data==`object`)&&(n.body=JSON.stringify(e.data));return n},Eh=class extends vh{async request(e){let t=Th(e,e.webFetchExtra),n=wh(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get(`content-type`)||``,{responseType:o=`text`}=i.ok?e:{};a.includes(`application/json`)&&(o=`json`);let s,c;switch(o){case`arraybuffer`:case`blob`:c=await i.blob(),s=await Sh(c);break;case`json`:s=await i.json();break;default:s=await i.text()}let l={};return i.headers.forEach((e,t)=>{l[t]=e}),{data:s,headers:l,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:`GET`}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:`POST`}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:`PUT`}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:`PATCH`}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:`DELETE`}))}};_h(`CapacitorHttp`,{web:()=>new Eh});var Dh;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(Dh||(Dh={}));var Oh;(function(e){e.StatusBar=`StatusBar`,e.NavigationBar=`NavigationBar`})(Oh||(Oh={}));var kh=class extends vh{async setStyle(){this.unavailable(`not available for web`)}async setAnimation(){this.unavailable(`not available for web`)}async show(){this.unavailable(`not available for web`)}async hide(){this.unavailable(`not available for web`)}},Ah=_h(`SystemBars`,{web:()=>new kh}),jh=`modulepreload`,Mh=function(e,t){return new URL(e,t).href},Nh={},Ph=function(e){return e.pathname.endsWith(`.css`)},Fh=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Mh(t,n);let r=s(t);if(r.href in Nh)return;Nh[r.href]=!0;let i=Ph(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:jh,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ih=()=>{},Lh=`cig.haptics`,Rh=35,zh={light:8,medium:15,heavy:30,success:[10,40,10],warning:[30,60,30],select:5},Bh=!1;try{Bh=!!gh.isNativePlatform()}catch{Bh=!1}var Vh=()=>typeof performance<`u`?performance.now():Date.now(),Hh=!0;try{Hh=localStorage.getItem(Lh)!==`0`}catch{}var Uh=-1/0,Wh=null,Gh=null;function Kh(){return Gh||(Gh=Fh(()=>import(`./esm-Dqgu_hx1.js`).then(async e=>{try{await e.Haptics.selectionStart()}catch{}return Wh=e,e}),[],import.meta.url).catch(()=>null)),Gh}function qh(e,t){let{Haptics:n,ImpactStyle:r,NotificationType:i}=e,a;switch(t){case`light`:a=n.impact({style:r.Light});break;case`medium`:a=n.impact({style:r.Medium});break;case`heavy`:a=n.impact({style:r.Heavy});break;case`success`:a=n.notification({type:i.Success});break;case`warning`:a=n.notification({type:i.Warning});break;case`select`:a=n.selectionChanged();break;default:return}a&&typeof a.catch==`function`&&a.catch(Ih)}function Jh(e){if(typeof navigator>`u`||typeof navigator.vibrate!=`function`)return;let t=navigator.userActivation;(!t||t.hasBeenActive)&&navigator.vibrate(zh[e])}var Yh=new Set,Xh=new Set,Zh=!1,Qh=!1;function $h(e){if(e===Zh)return;Zh=e;let t=e?Yh:Xh;for(let e of Array.from(t))try{e()}catch{}}typeof document<`u`&&document.addEventListener(`visibilitychange`,()=>{Qh||$h(document.visibilityState===`hidden`)});var eg=[];function tg(e){try{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.cssText=`position:fixed;top:0;left:0;opacity:0;pointer-events:none;`,document.body.appendChild(t),t.select(),t.setSelectionRange(0,e.length);let n=document.execCommand(`copy`);return document.body.removeChild(t),!!n}catch{return!1}}async function ng(e){try{if(navigator.clipboard&&typeof navigator.clipboard.writeText==`function`)return await navigator.clipboard.writeText(e),!0}catch{}return tg(e)}var rg=null,ig={isNative:Bh,init(){return rg||(rg=(async()=>{if(Bh){try{await Ah.hide()}catch{}try{let{App:e}=await Fh(async()=>{let{App:e}=await import(`./esm-BA4BT-YI.js`);return{App:e}},[],import.meta.url);await e.addListener(`appStateChange`,e=>$h(!e.isActive)),Qh=!0,await e.addListener(`backButton`,()=>{let e=eg[eg.length-1];if(e)try{e()}catch{}})}catch{}Kh()}})().catch(Ih),rg)},haptic(e=`light`){if(!Hh||!(e in zh))return;let t=Vh();if(!(t-Uh<Rh)){Uh=t;try{Bh?Wh?qh(Wh,e):Kh().then(t=>t&&qh(t,e)).catch(Ih):Jh(e)}catch{}}},setHapticsEnabled(e){Hh=!!e;try{localStorage.setItem(Lh,Hh?`1`:`0`)}catch{}},hapticsEnabled(){return Hh},onPause(e){return typeof e==`function`?(Yh.add(e),()=>Yh.delete(e)):Ih},onResume(e){return typeof e==`function`?(Xh.add(e),()=>Xh.delete(e)):Ih},onBack(e){return typeof e==`function`?(eg.push(e),()=>{let t=eg.lastIndexOf(e);t>=0&&eg.splice(t,1)}):Ih},async share({text:e,url:t}={}){let n=[e,t].filter(Boolean).join(`
`);if(!n)return`failed`;try{if(typeof navigator<`u`&&typeof navigator.share==`function`){let n={};if(e&&(n.text=e),t&&(n.url=t),typeof navigator.canShare!=`function`||navigator.canShare(n))try{return await navigator.share(n),`shared`}catch(e){if(e&&e.name===`AbortError`)return`failed`}}}catch{}try{return await ng(n)?`copied`:`failed`}catch{return`failed`}}},ag=`cig.save.v1`,og=()=>({level:1,stars:{},best:{},daily:{},coins:0,owned:{skin:[`classic`],trail:[`classic`]},selected:{skin:`classic`,trail:`classic`},totalTons:0,runs:0,runner:{best:0,bestDist:0,runs:0}}),G=og();try{let e=localStorage.getItem(ag);if(e){let t=JSON.parse(e),n=og();G={...n,...t,owned:{...n.owned,...t.owned},selected:{...n.selected,...t.selected}},(!Number.isFinite(G.level)||G.level<1)&&(G.level=1),(!Number.isFinite(G.coins)||G.coins<0)&&(G.coins=0);for(let e of[`stars`,`best`,`daily`])(!G[e]||typeof G[e]!=`object`)&&(G[e]={});(!G.runner||typeof G.runner!=`object`)&&(G.runner=n.runner)}}catch{}function sg(){try{localStorage.setItem(ag,JSON.stringify(G))}catch{}}var cg={get level(){return G.level},starsFor:e=>G.stars[e]||0,bestFor:e=>G.best[e]||0,dailyFor:e=>G.daily[e]||null,totalStars(){let e=0;for(let t in G.stars)e+=G.stars[t];return e},recordLevel(e,t,n){G.stars[e]=Math.max(G.stars[e]||0,t),G.best[e]=Math.max(G.best[e]||0,n),t>0&&e>=G.level&&(G.level=e+1),sg()},recordDaily(e,t){let n=G.daily[e];(!n||t.tons>n.tons)&&(G.daily[e]=t),sg()},recordRun(e){G.totalTons+=e,G.runs++,sg()},runnerBest:()=>G.runner?.best||0,runnerBestDist:()=>G.runner?.bestDist||0,recordRunner(e,t){G.runner||(G.runner={best:0,bestDist:0,runs:0}),G.runner.best=Math.max(G.runner.best,e),G.runner.bestDist=Math.max(G.runner.bestDist,t),G.runner.runs++,sg()},get coins(){return G.coins},addCoins(e){G.coins+=Math.max(0,Math.floor(e)),sg()},spend(e){return G.coins<e?!1:(G.coins-=e,sg(),!0)},isOwned:(e,t)=>(G.owned[e]||[]).includes(t),own(e,t){G.owned[e]||(G.owned[e]=[]),G.owned[e].includes(t)||G.owned[e].push(t),sg()},selected:e=>G.selected[e],select(e,t){G.selected[e]=t,sg()}},lg=Math.PI*2,ug={common:{rank:0,label:`SIRADAN`,color:`#8e9db3`},rare:{rank:1,label:`NADİR`,color:`#2f7dff`},epic:{rank:2,label:`EPİK`,color:`#a855f7`},legendary:{rank:3,label:`EFSANE`,color:`#ffb400`}},dg=[{id:`classic`,name:`Klasik Kar`,rarity:`common`,price:0,preview:{a:`#ffffff`,b:`#cfe2f7`,pattern:`solid`}},{id:`tenis`,name:`Tenis Topu`,rarity:`common`,price:120,preview:{a:`#d8f43a`,b:`#a6c51a`,c:`#ffffff`,pattern:`tennis`}},{id:`ice`,name:`Buz Kristali`,rarity:`common`,price:150,preview:{a:`#d6f8ff`,b:`#33b2e8`,pattern:`facets`}},{id:`basket`,name:`Basket Topu`,rarity:`common`,price:180,preview:{a:`#f58a24`,b:`#c8591a`,c:`#1b1410`,pattern:`seams`}},{id:`futbol`,name:`Futbol Topu`,rarity:`common`,price:200,preview:{a:`#ffffff`,b:`#1a1c22`,pattern:`pentagon`}},{id:`kurabiye`,name:`Kurabiye`,rarity:`common`,price:220,preview:{a:`#e6b66e`,b:`#5d3016`,pattern:`cookie`}},{id:`simit`,name:`Simit`,rarity:`common`,price:250,preview:{a:`#d98c3a`,b:`#a85a1a`,c:`#fff2c8`,pattern:`sesame`}},{id:`donut`,name:`Donut`,rarity:`common`,price:280,preview:{a:`#ff8fc4`,b:`#d9a05a`,c:`#ffffff`,pattern:`donut`}},{id:`kofte`,name:`Köfte`,rarity:`common`,price:300,preview:{a:`#9b5528`,b:`#43200d`,c:`#5cc552`,pattern:`stripes`}},{id:`karpuz`,name:`Karpuz`,rarity:`common`,price:300,preview:{a:`#7fd96c`,b:`#1b6a31`,pattern:`stripes`}},{id:`bowling`,name:`Bowling Topu`,rarity:`common`,price:300,preview:{a:`#3b2db0`,b:`#0f0a30`,c:`#43b9f0`,pattern:`bowl`}},{id:`yuz`,name:`Kardan Kafa`,rarity:`rare`,price:0,unlock:{stars:6},preview:{a:`#ffffff`,b:`#cfe2f7`,c:`#ff7a1a`,pattern:`face`}},{id:`penguen`,name:`Penguen Top`,rarity:`rare`,price:0,unlock:{stars:10},preview:{a:`#26365c`,b:`#f4f7fb`,c:`#ff9a1a`,pattern:`penguin`}},{id:`robot`,name:`Robo-Top`,rarity:`rare`,price:0,unlock:{stars:24},preview:{a:`#aab6c8`,b:`#5a6678`,c:`#35e6ff`,pattern:`panels`}},{id:`pamuk`,name:`Pamuk Şeker`,rarity:`rare`,price:500,preview:{a:`#ff9fd0`,b:`#c7a6ff`,pattern:`swirl`}},{id:`nazar`,name:`Nazar Boncuğu`,rarity:`rare`,price:500,preview:{a:`#12389e`,b:`#3fc1ff`,c:`#ffffff`,pattern:`eye`}},{id:`kirpi`,name:`Kirpi`,rarity:`rare`,price:650,preview:{a:`#7a5230`,b:`#3a281a`,c:`#f0d2a8`,pattern:`quills`}},{id:`poncik`,name:`Ponçik`,rarity:`rare`,price:750,preview:{a:`#ffd6e7`,b:`#ffa9c8`,c:`#2a1a2a`,pattern:`fluff`}},{id:`disko`,name:`Disko Topu`,rarity:`rare`,price:800,preview:{a:`#e9f1ff`,b:`#7d8db4`,c:`#ff6ad5`,pattern:`tiles`}},{id:`baklava`,name:`Baklava`,rarity:`rare`,price:800,preview:{a:`#f2b33d`,b:`#a8620f`,c:`#7fb83a`,pattern:`baklava`}},{id:`balkabagi`,name:`Balkabağı`,rarity:`rare`,price:0,unlock:{secret:`balkabagi`},preview:{a:`#ff8a1a`,b:`#c8520a`,c:`#ffe45a`,pattern:`pumpkin`}},{id:`zombi`,name:`Zombi Kafa`,rarity:`rare`,price:0,unlock:{secret:`zombi`},preview:{a:`#8fcf6a`,b:`#4f7f3a`,c:`#e8f0d0`,pattern:`zombie`}},{id:`dunya`,name:`Mini Dünya`,rarity:`epic`,price:0,unlock:{stars:18},preview:{a:`#2c78de`,b:`#4cb050`,c:`#ffffff`,pattern:`globe`}},{id:`ahtapot`,name:`Ahtapot`,rarity:`epic`,price:1100,preview:{a:`#a24ce0`,b:`#6a2aa8`,c:`#ffc6ea`,pattern:`octo`}},{id:`lav`,name:`Lav Topu`,rarity:`epic`,price:1200,preview:{a:`#2e2834`,b:`#ff7a1a`,pattern:`cracks`,glow:!0}},{id:`hali`,name:`Kilim`,rarity:`epic`,price:1400,preview:{a:`#c1272d`,b:`#1f2f66`,c:`#e8b43a`,pattern:`kilim`}},{id:`ates`,name:`Ateş Topu`,rarity:`epic`,price:1500,preview:{a:`#ffd23a`,b:`#ff3a10`,c:`#ffb000`,pattern:`flame`,glow:!0}},{id:`plazma`,name:`Plazma`,rarity:`epic`,price:1600,preview:{a:`#1d0a58`,b:`#6a34e0`,c:`#c6f4ff`,pattern:`plasma`,glow:!0}},{id:`zehir`,name:`Zehir`,rarity:`epic`,price:1800,preview:{a:`#7dff4a`,b:`#1b9e2a`,c:`#e6ffa6`,pattern:`goo`,glow:!0}},{id:`altin`,name:`Altın Top`,rarity:`epic`,price:2e3,preview:{a:`#ffe681`,b:`#d8940c`,pattern:`facets`,glow:!0}},{id:`buzejder`,name:`Buz Ejderi`,rarity:`legendary`,price:3e3,preview:{a:`#7fe3ff`,b:`#1b78c6`,c:`#e8fcff`,pattern:`scales`,glow:!0}},{id:`cini`,name:`İznik Çinisi`,rarity:`legendary`,price:3500,preview:{a:`#1b3f9e`,b:`#1fb5b0`,c:`#d8402a`,pattern:`tile`}},{id:`karasivi`,name:`Kara Sıvı`,rarity:`legendary`,price:4500,preview:{a:`#1a2048`,b:`#05060c`,c:`#5a74ff`,pattern:`tendrils`}},{id:`kizilkaos`,name:`Kızıl Kaos`,rarity:`legendary`,price:5500,preview:{a:`#e01428`,b:`#3a0610`,c:`#ff5a48`,pattern:`tendrils`}},{id:`galaksi`,name:`Galaksi`,rarity:`legendary`,price:0,unlock:{secret:`galaksi`},preview:{a:`#0b0b3a`,b:`#6a2aa8`,c:`#ffffff`,pattern:`stars`,glow:!0}}],fg=[{id:`classic`,name:`Kar İzi`,rarity:`common`,price:0,preview:{a:`#e8f2ff`,b:`#bcd3ee`,pattern:`solid`}},{id:`pink`,name:`Pembe`,rarity:`common`,price:100,preview:{a:`#ffc2e2`,b:`#ff6fb5`,pattern:`solid`}},{id:`neon`,name:`Neon Mavi`,rarity:`common`,price:300,preview:{a:`#9aeeff`,b:`#1fa8ff`,pattern:`solid`,glow:!0}},{id:`kalp`,name:`Kalp`,rarity:`rare`,price:450,preview:{a:`#ffb3dc`,b:`#ff3f9a`,pattern:`solid`,glow:!0}},{id:`gold`,name:`Altın Toz`,rarity:`rare`,price:500,preview:{a:`#ffe681`,b:`#ffb300`,pattern:`solid`,glow:!0}},{id:`zehirli`,name:`Zehir İzi`,rarity:`rare`,price:600,preview:{a:`#c4ff7a`,b:`#1fc84a`,pattern:`solid`,glow:!0}},{id:`simsek`,name:`Şimşek`,rarity:`rare`,price:700,preview:{a:`#d4f2ff`,b:`#2f66ff`,pattern:`solid`,glow:!0}},{id:`fire`,name:`Ateş`,rarity:`rare`,price:800,preview:{a:`#ffd23a`,b:`#ff3a10`,pattern:`solid`,glow:!0}},{id:`rainbow`,name:`Gökkuşağı`,rarity:`epic`,price:0,unlock:{stars:12},preview:{a:`#ff4d4d`,b:`#7a5cff`,pattern:`swirl`}},{id:`kaos`,name:`Kaos İzi`,rarity:`epic`,price:1500,preview:{a:`#ff2a3a`,b:`#14000a`,pattern:`solid`}},{id:`galaksi`,name:`Yıldız Tozu`,rarity:`epic`,price:1800,preview:{a:`#d6b8ff`,b:`#5b3bd6`,pattern:`solid`,glow:!0}},{id:`cini`,name:`Çini İzi`,rarity:`legendary`,price:3200,preview:{a:`#1b3f9e`,b:`#1fb5b0`,pattern:`bands`}}],pg={classic:{color:12375022,rainbow:!1,glow:!1},rainbow:{color:16777215,rainbow:!0,glow:!1},gold:{color:16764730,rainbow:!1,glow:!0},pink:{color:16748488,rainbow:!1,glow:!1},neon:{color:3854591,rainbow:!1,glow:!0},fire:{color:16742938,color2:16722442,rainbow:!1,glow:!0},simsek:{color:6994175,color2:3103999,rainbow:!1,glow:!0},zehirli:{color:8257354,color2:1222698,rainbow:!1,glow:!0},kaos:{color:14685224,color2:1179658,rainbow:!1,glow:!1},galaksi:{color:10514687,color2:4885759,rainbow:!1,glow:!0},kalp:{color:16740277,color2:16752592,rainbow:!1,glow:!0},cini:{color:1785758,color2:2078128,rainbow:!0,glow:!1,palette:[1785758,2078128,16052192,2078128]}};function mg(e){let t={...pg[e]||pg.classic};return t.palette&&(t.palette=t.palette.slice()),t}function hg(e){let t=e=>ug[e.rarity]?ug[e.rarity].rank:0;return e.map((e,t)=>[e,t]).sort((e,n)=>{let r=e[0],i=n[0];return t(r)-t(i)||(r.unlock&&r.unlock.secret?1:0)-(i.unlock&&i.unlock.secret?1:0)||r.price-i.price||(r.unlock&&r.unlock.stars||0)-(i.unlock&&i.unlock.stars||0)||e[1]-n[1]}).map(e=>e[0])}var gg=e=>e<0?0:e>1?1:e,_g=(e,t,n)=>{let r=gg((n-e)/(t-e));return r*r*(3-2*r)};function vg(e,t,n){let r=Math.imul(e,73856093)^Math.imul(t,19349663)^Math.imul(n,83492791);return r=Math.imul(r^r>>>15,2246822507),r=Math.imul(r^r>>>13,3266489909),((r^r>>>16)>>>0)/4294967296}function K(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=e-r,s=t-i,c=n-a,l=o*o*(3-2*o),u=s*s*(3-2*s),d=c*c*(3-2*c),f=vg(r,i,a),p=vg(r+1,i,a),m=vg(r,i+1,a),h=vg(r+1,i+1,a),g=vg(r,i,a+1),_=vg(r+1,i,a+1),v=vg(r,i+1,a+1),y=vg(r+1,i+1,a+1),b=f+(p-f)*l,x=m+(h-m)*l,S=g+(_-g)*l,C=v+(y-v)*l,w=b+(x-b)*u;return w+(S+(C-S)*u-w)*d}function yg(e,t,n,r=3){let i=.5,a=1,o=0,s=0;for(let c=0;c<r;c++)o+=i*K(e*a,t*a,n*a),s+=i,i*=.5,a*=2.03;return o/s}function bg(e){let t=e>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var xg=new B;function Sg({detail:e,shape:t,paint:n,perFace:r=!0,alpha:i=!1}){let a=new uo(1,e);a.deleteAttribute(`uv`);let o=a.attributes.position,s=o.count,c=new Float32Array(s*3);for(let e=0;e<s;e++){xg.fromBufferAttribute(o,e).normalize(),c[e*3]=xg.x,c[e*3+1]=xg.y,c[e*3+2]=xg.z;let n=1+(t?t(xg.x,xg.y,xg.z):0);o.setXYZ(e,xg.x*n,xg.y*n,xg.z*n)}let l=i?4:3,u=new Float32Array(s*l),d=new H,f=(e,t)=>{let n=e*l;u[n]=d.r,u[n+1]=d.g,u[n+2]=d.b,i&&(u[n+3]=t)};if(r)for(let e=0;e<s;e+=3){let t=c[e*3]+c[e*3+3]+c[e*3+6],r=c[e*3+1]+c[e*3+4]+c[e*3+7],i=c[e*3+2]+c[e*3+5]+c[e*3+8],a=Math.hypot(t,r,i)||1;t/=a,r/=a,i/=a;let o=n(t,r,i,d),s=o===void 0?1:o;f(e,s),f(e+1,s),f(e+2,s)}else for(let e=0;e<s;e++){let t=n(c[e*3],c[e*3+1],c[e*3+2],d);f(e,t===void 0?1:t)}return a.setAttribute(`color`,new cr(u,l)),a.computeVertexNormals(),a}function Cg(e,t){let n=e.attributes.position,r=new Float32Array(n.count*3),i=new H;for(let e=0;e<n.count;e++)typeof t==`function`?t(n.getX(e),n.getY(e),n.getZ(e),i):i.set(t),r[e*3]=i.r,r[e*3+1]=i.g,r[e*3+2]=i.b;return e.setAttribute(`color`,new cr(r,3)),e}function wg(e){let t=e.map(e=>e.index?e.toNonIndexed():e),n=0;for(let e of t)n+=e.attributes.position.count;let r=new Float32Array(n*3),i=new Float32Array(n*3),a=0;for(let e of t)r.set(e.attributes.position.array,a*3),i.set(e.attributes.color.array,a*3),a+=e.attributes.position.count;for(let n=0;n<e.length;n++)e[n].dispose(),t[n]!==e[n]&&t[n].dispose();let o=new Cr;return o.setAttribute(`position`,new cr(r,3)),o.setAttribute(`color`,new cr(i,3)),o.computeVertexNormals(),o}var Tg=e=>new Do({vertexColors:!0,flatShading:!0,...e}),Eg=e=>new Eo({vertexColors:!0,flatShading:!0,...e}),Dg=1/31,Og=new H,kg=new St,Ag=new B,jg=new B(0,1,0),Mg=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Ng=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Pg=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},Fg=(e,t,n=1)=>[e[0]+t[0]*n,e[1]+t[1]*n,e[2]+t[2]*n];function Ig(e,t,n=0){let r=[],i=Math.PI*(3-Math.sqrt(5));for(let a=0;a<e;a++){let o=1-2*(a+.5)/e,s=Math.sqrt(Math.max(0,1-o*o)),c=[Math.cos(i*a)*s,o,Math.sin(i*a)*s];n&&t&&(c=Pg([c[0]+(t()-.5)*n,c[1]+(t()-.5)*n,c[2]+(t()-.5)*n])),r.push(c)}return r}function Lg(e){let t=e()*2-1,n=e()*lg,r=Math.sqrt(1-t*t);return[r*Math.cos(n),t,r*Math.sin(n)]}function Rg(e,t=[0,1,0]){e=Pg(e);let n=Ng(t,e);return Math.hypot(n[0],n[1],n[2])<1e-4&&(n=Ng([1,0,0],e)),n=Pg(n),{F:e,R:n,U:Ng(e,n)}}function zg(e,t,n,r=1){let i=e.F[0]+e.R[0]*t+e.U[0]*n,a=e.F[1]+e.R[1]*t+e.U[1]*n,o=e.F[2]+e.R[2]*t+e.U[2]*n,s=Math.hypot(i,a,o)||1;i/=s,a/=s,o/=s;let c=typeof r==`function`?r(i,a,o):r;return[i*c,a*c,o*c]}var Bg=class{constructor(){this.p=[],this.c=[]}get count(){return this.p.length/3}tri(e,t,n,r,i=!0){this.tri3(e,t,n,r,r,r,i)}tri3(e,t,n,r,i,a,o=!0){if(o){let r=(t[1]-e[1])*(n[2]-e[2])-(t[2]-e[2])*(n[1]-e[1]),o=(t[2]-e[2])*(n[0]-e[0])-(t[0]-e[0])*(n[2]-e[2]),s=(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]);if(r*(e[0]+t[0]+n[0])+o*(e[1]+t[1]+n[1])+s*(e[2]+t[2]+n[2])<0){let e=t;t=n,n=e;let r=i;i=a,a=r}}this.p.push(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2]),this.c.push(r.r,r.g,r.b,i.r,i.g,i.b,a.r,a.g,a.b)}triN(e,t,n,r,i){let a=(t[1]-e[1])*(n[2]-e[2])-(t[2]-e[2])*(n[1]-e[1]),o=(t[2]-e[2])*(n[0]-e[0])-(t[0]-e[0])*(n[2]-e[2]),s=(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]);a*i[0]+o*i[1]+s*i[2]<0?this.tri(e,n,t,r,!1):this.tri(e,t,n,r,!1)}quad(e,t,n,r,i,a=!0){this.tri(e,t,n,i,a),this.tri(e,n,r,i,a)}geo(e,t){let n=e.index?e.toNonIndexed():e,r=n.attributes.position,i=n.attributes.color;for(let e=0;e<r.count;e++){let n=r.getX(e),a=r.getY(e),o=r.getZ(e);this.p.push(n,a,o),t===void 0?this.c.push(i.getX(e),i.getY(e),i.getZ(e)):(typeof t==`function`?t(n,a,o,Og):Og.set(t),this.c.push(Og.r,Og.g,Og.b))}n!==e&&n.dispose(),e.dispose()}build(){let e=new Cr;return e.setAttribute(`position`,new cr(new Float32Array(this.p),3)),e.setAttribute(`color`,new cr(new Float32Array(this.c),3)),e.computeVertexNormals(),e}},Vg=new St;function Hg(e,t,n,r=1,i=1,a=1){return e.deleteAttribute(`uv`),e.scale(r,i,a),e.applyQuaternion(Vg.setFromUnitVectors(jg,Ag.set(t[0],t[1],t[2]).normalize())),e.translate(n[0],n[1],n[2]),e}var Ug=(e,t,n=5,r=!0)=>{let i=new Gi(e,t,n,1,r);return i.translate(0,t/2,0),i},Wg=(e,t=1)=>new uo(e,t);function Gg(e,t,n,r,i,a,o,s=1){if(s>0){let c=[(n[0]+r[0])/2,(n[1]+r[1])/2],l=[(r[0]+i[0])/2,(r[1]+i[1])/2],u=[(i[0]+n[0])/2,(i[1]+n[1])/2];Gg(e,t,n,c,u,a,o,s-1),Gg(e,t,c,r,l,a,o,s-1),Gg(e,t,u,l,i,a,o,s-1),Gg(e,t,c,l,u,a,o,s-1);return}e.tri(zg(t,n[0],n[1],a),zg(t,r[0],r[1],a),zg(t,i[0],i[1],a),o,!0)}function Kg(e,t,n,r,i,a=0){let o=0,s=0;for(let e of n)o+=e[0],s+=e[1];o/=n.length,s/=n.length;for(let c=0;c<n.length;c++)Gg(e,t,[o,s],n[c],n[(c+1)%n.length],r,i,a)}function qg(e,t,n,r,i,a,o,s,c,l=0,u=0){let d=[],f=Math.cos(l),p=Math.sin(l);for(let e=0;e<o;e++){let t=e/o*lg,s=Math.cos(t)*i,c=Math.sin(t)*a;d.push([n+s*f-c*p,r+s*p+c*f])}Kg(e,t,d,s,c,u)}function Jg(e,t,n,r,i,a=!1){let o=t.length,s=[],c=[];for(let e=0;e<o;e++){let i=t[a?(e+o-1)%o:Math.max(0,e-1)],l=t[a?(e+1)%o:Math.min(o-1,e+1)],u=Pg(Ng(t[e],[l[0]-i[0],l[1]-i[1],l[2]-i[2]])),d=typeof r==`function`?r(t[e][0],t[e][1],t[e][2]):r,f=Pg(Fg(t[e],u,n/2)),p=Pg(Fg(t[e],u,-n/2));s.push([f[0]*d,f[1]*d,f[2]*d]),c.push([p[0]*d,p[1]*d,p[2]*d])}let l=a?o:o-1;for(let t=0;t<l;t++){let n=(t+1)%o,r=typeof i==`function`?i(t):i;e.tri(s[t],c[t],c[n],r,!0),e.tri(s[t],c[n],s[n],r,!0)}}function Yg(e,t,n=Math.PI/2){let r=Pg(e),i=Pg(Ng(r,Math.abs(r[1])<.9?[0,1,0]:[1,0,0])),a=Ng(r,i),o=[],s=Math.cos(n),c=Math.sin(n);for(let e=0;e<t;e++){let n=e/t*lg,l=Math.cos(n),u=Math.sin(n);o.push([r[0]*s+(i[0]*l+a[0]*u)*c,r[1]*s+(i[1]*l+a[1]*u)*c,r[2]*s+(i[2]*l+a[2]*u)*c])}return o}function Xg(e,t){let n=e.attributes.position.array,r=t===void 0?n.length/9:t,i=new Float32Array(r*3);for(let e=0;e<r;e++){let t=e*9,r=n[t]+n[t+3]+n[t+6],a=n[t+1]+n[t+4]+n[t+7],o=n[t+2]+n[t+5]+n[t+8],s=Math.hypot(r,a,o)||1;i[e*3]=r/s,i[e*3+1]=a/s,i[e*3+2]=o/s}return i}function Zg(e,t,n,r,i){let a=t*9;e[a]=e[a+3]=e[a+6]=n,e[a+1]=e[a+4]=e[a+7]=r,e[a+2]=e[a+5]=e[a+8]=i}function Qg(e,t,n,r=1.5){let i=e.attributes.position.array,a=e.attributes.color.array,o=new Float32Array(i.length+t.length),s=new Float32Array(a.length+n.length);o.set(i),o.set(t,i.length),s.set(a),s.set(n,a.length);let c=new Cr;return c.setAttribute(`position`,new cr(o,3).setUsage(et)),c.setAttribute(`color`,new cr(s,3).setUsage(et)),c.computeVertexNormals(),c.boundingSphere=new hr(new B,r),e.dispose(),{geometry:c,offset:i.length}}function $g(e,t){let n=new Float32Array(t*3),r=new Uint16Array(t),i=new Map,a=[],o=[],s=[];for(let c=0;c<t;c++){let t=e[c*3],l=e[c*3+1],u=e[c*3+2],d=Math.hypot(t,l,u)||1;n[c*3]=t/d,n[c*3+1]=l/d,n[c*3+2]=u/d;let f=Math.round(t*2048)+`,`+Math.round(l*2048)+`,`+Math.round(u*2048),p=i.get(f);p===void 0&&(p=a.length,i.set(f,p),a.push(d),o.push(t*3.1+l*2.3+u*4.1),s.push(-t*2.2+l*4.7+u*1.9)),r[c]=p}let c=a.length,l=Float32Array.from(a),u=Float32Array.from(o),d=Float32Array.from(s),f=new Float32Array(c);return{apply(e,i,a,o){let s=i*o,p=i*o*1.7;for(let e=0;e<c;e++)f[e]=l[e]*(1+a*(Math.sin(s+u[e])+.6*Math.sin(p+d[e]))*.62);for(let i=0;i<t;i++){let t=f[r[i]],a=i*3;e[a]=n[a]*t,e[a+1]=n[a+1]*t,e[a+2]=n[a+2]*t}}}}function e_(e,t){e&&e.getWorldQuaternion?(e.getWorldQuaternion(kg),kg.invert(),Ag.set(0,1,0).applyQuaternion(kg),t[0]=Ag.x,t[1]=Ag.y,t[2]=Ag.z):(t[0]=0,t[1]=1,t[2]=0)}var t_=class{constructor({dirs:e,len:t,thick:n,prof:r,seg:i=6,rootR:a=.7,apex:o=.12,rnd:s}){let c=this.n=e.length,l=this.nr=r.length;this.seg=i,this.rootR=a,this.apex=o,this.T0=new Float32Array(c*3),this.P=new Float32Array(c*3),this.Q=new Float32Array(c*3),this.L=Float32Array.from(t),this.th=Float32Array.from(n),this.psi0=new Float32Array(c),this.ph=new Float32Array(c),this.s=Float32Array.from(r,e=>e[0]),this.rho=Float32Array.from(r,e=>e[1]),this.kap=new Float32Array(l),this.out={psi:0,len:1,thick:1},this.cosK=new Float32Array(i),this.sinK=new Float32Array(i);for(let e=0;e<i;e++)this.cosK[e]=Math.cos(e/i*lg),this.sinK[e]=Math.sin(e/i*lg);for(let t=0;t<c;t++){let n=Pg(e[t]),r=Pg(Ng(n,Math.abs(n[1])<.9?[0,1,0]:[1,0,0])),i=Ng(n,r);this.T0.set(n,t*3),this.P.set(r,t*3),this.Q.set(i,t*3),this.psi0[t]=s?s()*lg:t*2.4,this.ph[t]=s?s()*lg:t*1.7}let u=[];for(let e=0;e<l-1;e++)for(let t=0;t<i;t++){let n=(t+1)%i,r=e*i+t,a=e*i+n,o=(e+1)*i+t,s=(e+1)*i+n;u.push(r,a,s,r,s,o)}for(let e=0;e<i;e++)u.push((l-1)*i+e,(l-1)*i+(e+1)%i,l*i);this.idx=Uint16Array.from(u),this.vPer=u.length,this.ring=new Float32Array((l*i+1)*3)}get vertexCount(){return this.n*this.vPer}animate(e,t,n,r){let{n:i,nr:a,seg:o,T0:s,P:c,Q:l,s:u,rho:d,ring:f,idx:p,kap:m,out:h,cosK:g,sinK:_,vPer:v}=this;for(let y=0;y<i;y++){h.psi=this.psi0[y],h.len=1,h.thick=1;for(let e=0;e<a;e++)m[e]=0;r&&r(y,n,h,m,u);let i=this.L[y]*h.len,b=this.th[y]*h.thick,x=y*3,S=s[x],C=s[x+1],w=s[x+2],T=Math.cos(h.psi),E=Math.sin(h.psi),D=c[x]*T+l[x]*E,O=c[x+1]*T+l[x+1]*E,k=c[x+2]*T+l[x+2]*E,A=l[x]*T-c[x]*E,j=l[x+1]*T-c[x+1]*E,ee=l[x+2]*T-c[x+2]*E,M=S*this.rootR,te=C*this.rootR,N=w*this.rootR,ne=0,re=u[0],ie=1,ae=0;for(let e=0;e<a;e++){if(e>0){let t=(u[e]-re)*i,n=m[e],r=ne+.5*n*t,a=Math.cos(r),o=Math.sin(r);M+=(S*a+D*o)*t,te+=(C*a+O*o)*t,N+=(w*a+k*o)*t,ne+=n*t,re=u[e],ie=Math.cos(ne),ae=Math.sin(ne)}let t=D*ie-S*ae,n=O*ie-C*ae,r=k*ie-w*ae,a=b*d[e],s=e*o*3;for(let e=0;e<o;e++){let i=g[e]*a,o=_[e]*a;f[s++]=M+t*i+A*o,f[s++]=te+n*i+j*o,f[s++]=N+r*i+ee*o}}let oe=this.apex*i,se=a*o*3;f[se]=M+(S*ie+D*ae)*oe,f[se+1]=te+(C*ie+O*ae)*oe,f[se+2]=N+(w*ie+k*ae)*oe;let ce=t+y*v*3;for(let t=0;t<v;t++){let n=p[t]*3;e[ce++]=f[n],e[ce++]=f[n+1],e[ce++]=f[n+2]}}}bake(e){let t=new Float32Array(this.vertexCount*3),n=new Float32Array(this.vertexCount*3);this.animate(t,0,0,null);let{n:r,nr:i,seg:a,idx:o,vPer:s,s:c}=this;for(let t=0;t<r;t++)for(let r=0;r<s;r++){let l=o[r],u=l>=i*a,d=u?i-1:l/a|0,f=u?-1:l%a;e(t,d,f,u?1:c[d],Og,u);let p=(t*s+r)*3;n[p]=Og.r,n[p+1]=Og.g,n[p+2]=Og.b}return{pos:t,col:n}}},n_=(e,t,n)=>Math.sin(e*5.1+t*2.3)*Math.sin(n*4.3-e*1.7)+Math.sin(t*7.7+n*3.1)*.5;function r_(){let e=new uo(1,3),t=e.attributes.position,n=new Float32Array(t.count*3),r=new H(16777215),i=new H(13624055),a=new H,o=new B;for(let e=0;e<t.count;e++){o.fromBufferAttribute(t,e).normalize();let s=n_(o.x,o.y,o.z);o.multiplyScalar(1+s*.045),t.setXYZ(e,o.x,o.y,o.z),a.copy(r).lerp(i,Math.max(0,s)*.6),n[e*3]=a.r,n[e*3+1]=a.g,n[e*3+2]=a.b}return e.setAttribute(`color`,new cr(n,3)),e.computeVertexNormals(),e}function i_(){return{geometry:r_(),material:Tg(),puff:16777215}}function a_(){let e=new H(3125482),t=new H(8839423),n=new H(15137791);return{geometry:Sg({detail:1,shape:(e,t,n)=>(K(e*1.7+4,t*1.7,n*1.7)-.5)*.4,paint:(r,i,a,o)=>{let s=gg(.55*K(r*2.3+9,i*2.3+2,a*2.3+5)+.45*K(r*8+3,i*8+1,a*8+7));s<.5?o.copy(e).lerp(t,s*2):o.copy(t).lerp(n,(s-.5)*2)}}),material:Eg({shininess:110,specular:16777215,emissive:739174}),puff:12578815}}function o_(){let e=bg(1453),t=[];for(let n=0;n<20;n++){let n=e()*2-1,r=e()*lg,i=Math.sqrt(1-n*n);t.push(i*Math.cos(r),n,i*Math.sin(r))}let n=Math.cos(.12),r=new H(10179880),i=new H(12614212),a=new H(3807754),o=new H(6040595),s=new H(5027141),c=new H(3050551);return{geometry:Sg({detail:7,shape:(e,t,n)=>(yg(e*2.2+1.3,t*2.2+7.1,n*2.2+3.7,2)-.5)*.2+(K(e*6,t*6,n*6)-.5)*.05,paint:(e,l,u,d)=>{d.copy(r).lerp(i,gg((yg(e*3.1,l*3.1+5,u*3.1,2)-.35)*2.2));let f=Math.sin((e*.85+l*.6+u*.25)*17);f>.3&&K(e*2.6+11,l*2.6,u*2.6)>.3&&d.copy(f>.72?a:o);for(let r=0;r<t.length;r+=3)if(e*t[r]+l*t[r+1]+u*t[r+2]>n){d.copy(r%2?s:c);break}}}),material:Tg(),puff:10179880}}function s_(){let e=new H(16752592),t=new H(13084415),n=new H(10479359),r=new H(16777215),i=(e,t,n)=>(yg(e*1.7+2,t*1.7+9,n*1.7+4,2)-.5)*.36+(K(e*4.6+6,t*4.6,n*4.6+2)-.5)*.16;return{geometry:Sg({detail:5,perFace:!1,shape:i,paint:(a,o,s,c)=>{let l=Math.atan2(s,a)*2+o*5+yg(a*2,o*2,s*2,2)*2.5,u=.5+.5*Math.sin(l);c.copy(e).lerp(t,u),K(a*2.4+5,o*2.4,s*2.4+8)>.68&&c.lerp(n,.45),c.lerp(r,gg(i(a,o,s)*2.2+.1)*.55)}}),material:Tg(),puff:16754902}}function c_(){let e=new H(4105547),t=new H(1335338),n=new H(10478206),r=new H(14473614),i=new H(7227934);return{geometry:Sg({detail:6,shape:(e,t,n)=>(K(e*2.6+1,t*2.6,n*2.6+3)-.5)*.04,paint:(a,o,s,c)=>{let l=Math.atan2(s,a),u=Math.sin(l*8+Math.sin(o*5+l*2)*.9);u>.45?c.copy(t):u<-.72?c.copy(n):c.copy(e),o<-.82?c.copy(r):o>.93&&c.copy(i)}}),material:Tg(),puff:16733804}}function l_(){let e=new uo(1,3);e.deleteAttribute(`uv`);let t=e.attributes.position,n=t.count/3,r=new Float32Array(t.count*3),i=new Float32Array(n),a=new Float32Array(n),o=bg(777);for(let e=0;e<n;e++){let n=e*3,s=(t.getX(n)+t.getX(n+1)+t.getX(n+2))/3,c=(t.getY(n)+t.getY(n+1)+t.getY(n+2))/3,l=(t.getZ(n)+t.getZ(n+1)+t.getZ(n+2))/3;for(let e=0;e<3;e++)t.setXYZ(n+e,s+(t.getX(n+e)-s)*.88,c+(t.getY(n+e)-c)*.88,l+(t.getZ(n+e)-l)*.88);i[e]=o(),a[e]=.6+o()*.4;let u=a[e];for(let e=0;e<3;e++)r[(n+e)*3]=u*.9,r[(n+e)*3+1]=u*.93,r[(n+e)*3+2]=u}e.setAttribute(`color`,new cr(r,3));let s=Cg(new uo(.92,1),1382966);s.deleteAttribute(`uv`);let c=wg([e,s]),l=c.attributes.color;l.setUsage(et);let u=l.array,d=Eg({shininess:120,specular:16777215,emissive:1317424}),f=0,p=0;return{geometry:c,material:d,puff:15004415,update:e=>{if(f+=e,p+=e,!(p<1/30)){p=0;for(let e=0;e<n;e++){let t=i[e],n=f*2.1+t*lg,r=.32+.3*Math.sin(f*3.3+t*41),o=.5+.5*Math.sin(n),s=.5+.5*Math.sin(n+2.094),c=.5+.5*Math.sin(n+4.189),l=a[e]*(1-r),d=e*9,p=l*.9+o*r,m=l*.93+s*r,h=l+c*r;u[d]=u[d+3]=u[d+6]=p,u[d+1]=u[d+4]=u[d+7]=m,u[d+2]=u[d+5]=u[d+8]=h}l.needsUpdate=!0}}}}function u_(){let e=new H(14258957),t=new H(16765498),n=new H(16773806);return{geometry:Sg({detail:3,shape:(e,t,n)=>(yg(e*2.4+3,t*2.4+1,n*2.4+8,2)-.5)*.22,paint:(r,i,a,o)=>{let s=gg((.5*K(r*4+1,i*4+7,a*4+3)+.5*K(r*11+2,i*11,a*11+5)-.2)*1.7);s<.5?o.copy(e).lerp(t,s*2):o.copy(t).lerp(n,(s-.5)*2)}}),material:Eg({shininess:90,specular:16773552,emissive:4007936}),puff:16767050}}function d_(e){let t=Tg();return t.onBeforeCompile=t=>{t.uniforms.uGlow=e,t.fragmentShader=t.fragmentShader.replace(`void main() {`,`uniform float uGlow;
void main() {`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
#ifdef USE_COLOR_ALPHA
	totalEmissiveRadiance += diffuseColor.rgb * ( vColor.a * uGlow );
#endif`)},t.customProgramCacheKey=()=>`cig-lava-v1`,t}function f_(){let e=new H(3814209),t=new H(5918815),n=new H(6954256),r=new H(16738832),i=new H(16765530),a=(e,t,n)=>{let r=Math.abs(K(e*2.5+7,t*2.5+1,n*2.5+4)-.5),i=Math.abs(K(e*5.2+2,t*5.2+9,n*5.2+6)-.5),a=1-_g(.018,.058,r),o=r<.15?(1-_g(.012,.04,i))*.8:0;return Math.max(a,o)},o=Sg({detail:7,alpha:!0,shape:(e,t,n)=>(yg(e*2.6+5,t*2.6,n*2.6+2,2)-.5)*.14-a(e,t,n)*.05,paint:(o,s,c,l)=>{let u=a(o,s,c);return u>.8?(l.copy(i),1):u>.26?(l.copy(r),.85):(l.copy(e).lerp(t,gg((K(o*4+3,s*4,c*4+1)-.4)*2.5)),u>.06?(l.copy(n),.25):0)}}),s={value:1.1},c=d_(s),l=0;return{geometry:o,material:c,puff:16742938,update:e=>{l+=e,s.value=1.05+.28*Math.sin(l*2.6)+.08*Math.sin(l*7.3)}}}function p_(){let e=new B(1,.4,.15).normalize(),t=.535,n=(e,t,n)=>yg(e*1.8+3.1,t*1.8+1.7,n*1.8+5.3,4),r=(t,n,r)=>Math.abs(t*e.x+n*e.y+r*e.z),i=new H(1856960),a=new H(3837670),o=new H(15127434),s=new H(4173386),c=new H(8829002),l=new H(11109711),u=new H(15328733),d=new H(15923455);return{geometry:Sg({detail:7,shape:(e,i,a)=>Math.max(0,n(e,i,a)-t)*.3+_g(.9,.94,r(e,i,a))*.015,paint:(e,f,p,m)=>{let h=n(e,f,p);if(r(e,f,p)>.925-K(e*6,f*6,p*6)*.04){m.copy(d);return}h<.49000000000000005?m.copy(i).lerp(a,gg((h-.3)*1.2)):h<t?m.copy(a):h<.553?m.copy(o):h<.605?m.copy(s).lerp(c,(h-t-.018)/.052):h<.655?m.copy(c).lerp(l,(h-t-.07)/.05):m.copy(l).lerp(u,gg((h-t-.12)/.05))}}),material:Tg(),puff:5025872}}function m_(){let e=r_(),t=new B(0,.25,1).normalize(),n=new B(0,1,0).cross(t).normalize(),r=new B().crossVectors(t,n),i=e=>1+n_(e.x,e.y,e.z)*.045,a=(e,i)=>new B().copy(t).addScaledVector(n,e).addScaledVector(r,i).normalize(),o=[e],s=new H(1447453),c=new H(3158076),l=(e,t,n,r)=>r.copy(s).lerp(c,gg(t*.5+.5)*.5),u=(e,t,n,r)=>{let a=e.clone().multiplyScalar(i(e)+t*.2),s=new uo(t,n);s.deleteAttribute(`uv`),s.translate(a.x,a.y,a.z),o.push(Cg(s,r))};u(a(-.3,.27),.11,1,l),u(a(.3,.27),.11,1,l);for(let e=-3;e<=3;e++){let t=e/3;u(a(t*.46,-.22+.17*t*t),.055,0,l)}let d=a(0,-.03),f=new Gi(.12,.42,9,1);f.deleteAttribute(`uv`),f.translate(0,.21,0),f.applyQuaternion(new St().setFromUnitVectors(new B(0,1,0),d)),f.translate(d.x*.96,d.y*.96,d.z*.96);let p=new H(16751162),m=new H(15030796),h=Cg(f,(e,t,n,r)=>{let i=gg((e*d.x+t*d.y+n*d.z-.96)/.42);r.copy(p).lerp(m,i)});return o.push(h),{geometry:wg(o),material:Tg(),puff:16777215}}function h_(){let e=new B(0,.3,1).normalize(),t=new H(657942),n=new H(4178431),r=new H(16777215),i=new H(1194142),a=new H(1920968);return{geometry:Sg({detail:8,shape:(e,t,n)=>(K(e*3,t*3+2,n*3)-.5)*.03,paint:(o,s,c,l)=>{let u=Math.acos(Math.max(-1,Math.min(1,o*e.x+s*e.y+c*e.z)));u<.26?l.copy(t):u<.52?l.copy(n):u<.84?l.copy(r):l.copy(i).lerp(a,gg((K(o*3+4,s*3,c*3+9)-.35)*1.5)*.7)}}),material:Eg({shininess:100,specular:10469375}),puff:4170495}}function g_(){let e=bg(6661),t=new H(395021),n=new H(1121092),r=Sg({detail:4,perFace:!1,shape:(e,t,n)=>-.2+(yg(e*1.7+2,t*1.7+5,n*1.7+9,2)-.5)*.1,paint:(e,r,i,a)=>a.copy(t).lerp(n,gg((K(e*2.4+1,r*2.4+6,i*2.4+3)-.45)*2.2))}),i=$g(r.attributes.position.array,r.attributes.position.count),a=Ig(15,e,.35),o=new t_({dirs:a,len:a.map(()=>.4+e()*.22),thick:a.map(()=>.1+e()*.02),prof:[[0,1.7],[.1,1.35],[.22,.98],[.38,.74],[.55,.62],[.72,.6],[.86,.7],[.95,.82]],seg:6,rootR:.72,apex:.12,rnd:e}),s=o.bake((e,r,i,a,o)=>o.copy(t).lerp(n,a*a*.9)),{geometry:c,offset:l}=Qg(r,s.pos,s.col),u=c.attributes.position,d=o.ph,f=(e,t,n,r,i)=>{let a=d[e];n.psi+=.9*Math.sin(t*.8+a),n.len=.86+.14*Math.sin(t*1.7+a*2);let o=5+1.8*Math.sin(t*1.1+a*3);for(let e=1;e<r.length;e++)r[e]=o*Math.sin(t*2.1+a+i[e]*3.4)*(.35+i[e])},p=0,m=0,h=e=>{p+=e,m+=e,!(m<Dg)&&(m=0,i.apply(u.array,p,.028,2.2),o.animate(u.array,l,p,f),u.needsUpdate=!0)};return h(Dg),{geometry:c,material:Eg({shininess:170,specular:8360191,emissive:197644}),puff:1712720,update:h}}function __(){let e=bg(9137),t=new H(14685224),n=new H(10095132),r=new H(459011),i=new H(16730682),a=Sg({detail:4,perFace:!1,shape:(e,t,n)=>-.2+(yg(e*2+8,t*2+1,n*2+3,2)-.5)*.14,paint:(e,a,o,s)=>{let c=K(e*2.2+4,a*2.2,o*2.2+9);s.copy(t).lerp(n,gg((c-.45)*2.2));let l=Math.sin(e*5.5+a*3.2+c*6.5)+.5*Math.sin(o*9+a*4+c*3);s.lerp(r,_g(.4,.65,l)),s.lerp(i,gg((K(e*5+9,a*5,o*5+2)-.72)*3)*.6)}}),o=$g(a.attributes.position.array,a.attributes.position.count),s=Ig(22,e,.5),c=new t_({dirs:s,len:s.map(()=>.44+e()*.24),thick:s.map(()=>.105+e()*.03),prof:[[0,1.7],[.1,1.4],[.24,1.05],[.4,.8],[.58,.68],[.76,.7],[.9,.78]],seg:5,rootR:.72,apex:.14,rnd:e}),l=c.bake((e,i,a,o,s)=>{e%3==0?s.copy(r).lerp(t,o*o):s.copy(t).lerp(n,o*.4).lerp(r,_g(.55,1,o)*(e%2?.85:.35))}),{geometry:u,offset:d}=Qg(a,l.pos,l.col),f=u.attributes.position,p=c.ph,m=(e,t,n,r,i)=>{let a=p[e];n.psi+=1.4*Math.sin(t*1.9+a)+t*.45*(e%2?1:-1),n.len=.78+.22*Math.sin(t*3.4+a*2)+.06*Math.sin(t*7.3+a);let o=7+2.5*Math.sin(t*2.3+a*3);for(let e=1;e<r.length;e++)r[e]=o*Math.sin(t*4.2+a+i[e]*4.6)*(.3+i[e])},h=Eg({shininess:120,specular:16751242,emissive:3146762}),g=0,_=0,v=e=>{g+=e,_+=e,h.emissiveIntensity=.7+.6*Math.sin(g*3.1)+.25*Math.sin(g*8.7),!(_<Dg)&&(_=0,o.apply(f.array,g,.05,3.3),c.animate(f.array,d,g,m),f.needsUpdate=!0)};return v(Dg),{geometry:u,material:h,puff:12849182,update:v}}function v_(){let e=new H(3139627),t=new H(956964),n=new H(11075388),r=Sg({detail:5,perFace:!1,shape:(e,t,n)=>-.1+(yg(e*2+3,t*2+7,n*2+1,2)-.5)*.12,paint:(r,i,a,o)=>{let s=K(r*2.6+5,i*2.6,a*2.6+2);o.copy(e).lerp(t,gg((s-.4)*2.2)),o.lerp(n,gg((K(r*4.5+1,i*4.5+6,a*4.5)-.62)*3.2)*.8)}}),i=$g(r.attributes.position.array,r.attributes.position.count),a=bg(3141),o=new uo(1,1),s=o.attributes.position.array,c=s.length/3,l=new Float32Array(11),u=new Float32Array(11),d=new Float32Array(11),f=new Float32Array(11).fill(-1),p=new Float32Array(33);for(let e=0;e<11;e++)l[e]=.14+a()*.12,u[e]=.28+a()*.4,d[e]=a()*4;let m=new Float32Array(11*c*3),h=new Float32Array(11*c*3),g=new H(7208762),_=new H(15138740);for(let e=0;e<11;e++)for(let t=0;t<c;t++)g.clone().lerp(_,gg(s[t*3+1]*.5+.5)).toArray(h,(e*c+t)*3);let{geometry:v,offset:y}=Qg(r,m,h),b=v.attributes.position,x=e=>{let t=b.array;for(let n=0;n<11;n++){let r=e*u[n]+d[n],i=Math.floor(r),a=r-i;if(i!==f[n]){f[n]=i;let e=vg(i,n,7)*2-1,t=vg(i,n,13)*lg,r=Math.sqrt(1-e*e);p[n*3]=r*Math.cos(t),p[n*3+1]=e,p[n*3+2]=r*Math.sin(t)}let o;o=a<.8?l[n]*_g(0,.8,a):a<.97?l[n]*(1+.45*((a-.8)/.17)):0;let m=p[n*3]*.9,h=p[n*3+1]*.9,g=p[n*3+2]*.9,_=y+n*c*3;for(let e=0;e<c;e++)t[_++]=m+s[e*3]*o,t[_++]=h+s[e*3+1]*o,t[_++]=g+s[e*3+2]*o}},S=0,C=0,w=e=>{S+=e,C+=e,!(C<Dg)&&(C=0,i.apply(b.array,S,.03,2.6),x(S),b.needsUpdate=!0)};return w(Dg),o.dispose(),{geometry:v,material:Eg({shininess:90,specular:15400896,emissive:672784}),puff:8257338,update:w}}function y_(){let e=bg(2718),t=new H(787504),n=new H(5909202),r=new H(11565311),i=new H(16739032),a=Sg({detail:9,paint:(e,a,o,s)=>{let c=yg(e*2.2+3,a*2.2+1,o*2.2+6,3);s.copy(t).lerp(n,gg((c-.35)*2.4));let l=1-Math.abs(2*K(e*3.4+8,a*3.4,o*3.4+4)-1);s.lerp(r,l**7*.9),s.lerp(i,(1-Math.abs(2*K(e*2.4+2,a*2.4+7,o*2.4+1)-1))**9*.7)}}),o=a.attributes.color.array,s=o.length/9,c=o.slice(),l=Xg(a),u=Math.cos(.085),d=e=>Math.min(9,Math.max(0,Math.floor((e*.5+.5)*10))),f=Array.from({length:1e3},()=>[]);for(let e=0;e<s;e++)f[(d(l[e*3])*10+d(l[e*3+1]))*10+d(l[e*3+2])].push(e);let p=[],m=new Float32Array(s);for(let t=0;t<7;t++){p.push([]);for(let n=0;n<5;n++){m.fill(0);let n=Lg(e),r=Pg(Ng(n,Lg(e))),i=8+(e()*4|0);for(let t=0;t<i;t++){let t=(e()-.5)*1.8,i=Math.cos(t),a=Math.sin(t),o=Ng(n,r);r=[r[0]*i+o[0]*a,r[1]*i+o[1]*a,r[2]*i+o[2]*a];for(let e=0;e<3;e++){let e=.065,t=Pg([n[0]+r[0]*e,n[1]+r[1]*e,n[2]+r[2]*e]),i=Ng(Ng(t,r),t);n=t,r=Pg(i);let a=d(n[0]),o=d(n[1]),s=d(n[2]);for(let e=Math.max(0,a-1);e<=Math.min(9,a+1);e++)for(let t=Math.max(0,o-1);t<=Math.min(9,o+1);t++)for(let r=Math.max(0,s-1);r<=Math.min(9,s+1);r++){let i=f[(e*10+t)*10+r];for(let e=0;e<i.length;e++){let t=i[e],r=l[t*3]*n[0]+l[t*3+1]*n[1]+l[t*3+2]*n[2];if(r>u){let e=(r-u)/(1-u);e>m[t]&&(m[t]=e)}}}}}let a=0;for(let e=0;e<s;e++)m[e]>0&&a++;let o=new Uint16Array(a),c=new Float32Array(a),h=0;for(let e=0;e<s;e++)m[e]>0&&(o[h]=e,c[h]=m[e],h++);p[t].push({fl:o,wl:c})}}let h=new Uint8Array(7),g=new Float32Array(7),_=new H(14674687),v=new H(8019199),y=new H(16735472),b=()=>{for(let t=0;t<7;t++)e()<.55&&(h[t]=e()*5|0),g[t]=e()<.18?0:.7+e()*.5};b();let x=()=>{o.set(c);for(let e=0;e<7;e++){let t=g[e];if(t<=0)continue;let{fl:n,wl:r}=p[e][h[e]];for(let e=0;e<n.length;e++){let i=r[e],a,s,c;if(i>.62){let e=3*t;a=_.r*e,s=_.g*e,c=_.b*e}else if(i>.25){let e=2.4*t;a=v.r*e,s=v.g*e,c=v.b*e}else{let e=1.5*t;a=y.r*e,s=y.g*e,c=y.b*e}Zg(o,n[e],a,s,c)}}a.attributes.color.needsUpdate=!0};x();let S=0,C=e=>{S+=e,!(S<.055)&&(S=0,b(),x())},w=Eg({shininess:140,specular:12570879,emissive:1707082});return a.attributes.color.setUsage(et),{geometry:a,material:w,puff:10128639,update:C}}function b_(){let e=bg(8080),t=new H(658484),n=new H(4856978),r=new H(12597928),i=new H(2066128),a=new H(14077183),o=Pg([.35,.8,.45]),s=Sg({detail:8,paint:(e,s,c,l)=>{let u=yg(e*2+1,s*2+5,c*2+9,3);l.copy(t).lerp(n,gg((u-.3)*2.2)),l.lerp(r,gg((K(e*2.8+4,s*2.8,c*2.8+7)-.5)*2.6)*.85),l.lerp(i,gg((K(e*2.5+9,s*2.5+3,c*2.5)-.52)*2.6)*.8);let d=Math.abs(e*o[0]+s*o[1]+c*o[2]);l.lerp(a,_g(.3,0,d)*(.35+.65*K(e*6+2,s*6,c*6+5))*.8)}}),c=s.attributes.color.array,l=c.length/9,u=Xg(s),d=[],f=new Uint8Array(l),p=[[1,1,1],[.7,.85,1],[1,.9,.6],[1,.65,.92]],m=(t,n)=>{if(f[t])return;f[t]=1;let r=p[e()*p.length|0];d.push({f:t,r:r[0],g:r[1],b:r[2],sp:1.5+e()*4,ph:e()*lg,gain:n?3.4:2.2})};for(let t=0;t<70;t++)m(e()*l|0,!1);for(let t=0;t<12;t++){let t=Lg(e),n=Math.cos(.13);for(let e=0;e<l;e++)u[e*3]*t[0]+u[e*3+1]*t[1]+u[e*3+2]*t[2]>n&&m(e,!0)}let h=d.length,g=new Uint16Array(h),_=new Float32Array(h),v=new Float32Array(h),y=new Float32Array(h),b=new Float32Array(h),x=new Float32Array(h),S=new Float32Array(h);d.forEach((e,t)=>{g[t]=e.f,_[t]=e.r,v[t]=e.g,y[t]=e.b,b[t]=e.sp,x[t]=e.ph,S[t]=e.gain});let C=0,w=0,T=()=>{for(let e=0;e<h;e++){let t=S[e]*(.18+.82*(.5+.5*Math.sin(C*b[e]+x[e])));Zg(c,g[e],_[e]*t,v[e]*t,y[e]*t)}s.attributes.color.needsUpdate=!0};return T(),s.attributes.color.setUsage(et),{geometry:s,material:Tg({emissive:1383e3}),puff:8018687,update:e=>{C+=e,w+=e,!(w<.045)&&(w=0,T())}}}function x_(){let e=bg(1881),t=Sg({detail:4,perFace:!1,shape:(e,t,n)=>-.3+(yg(e*2+2,t*2+5,n*2+1,2)-.5)*.1,paint:(e,t,n,r)=>{let i=K(e*3+1,t*3+2,n*3+5);r.setRGB(2,.5+i*.45,.05+i*.08)}}),n=Ig(26,e,.5),r=new t_({dirs:n,len:n.map(()=>.46+e()*.16),thick:n.map(()=>.16+e()*.04),prof:[[0,1.8],[.2,1.55],[.42,1.2],[.66,.8],[.86,.4]],seg:5,rootR:.5,apex:.32,rnd:e}),i=r.bake((e,t,n,r,i,a)=>{a?i.setRGB(1.1,.06,.02):r<.25?i.setRGB(2.3,1.45,.2):r<.6?i.setRGB(2.1,.75-(r-.25)*1.2,.06):i.setRGB(1.7,.2,.03)}),{geometry:a,offset:o}=Qg(t,i.pos,i.col),s=a.attributes.position,c=r.ph,l=r.P,u=r.Q,d=r.T0,f=[0,1,0],p=(e,t,n,r,i)=>{let a=c[e],o=e*3,s=f[0]*l[o]+f[1]*l[o+1]+f[2]*l[o+2],p=f[0]*u[o]+f[1]*u[o+1]+f[2]*u[o+2];n.psi=Math.atan2(p,s),n.len=(.66+.5*Math.max(0,f[0]*d[o]+f[1]*d[o+1]+f[2]*d[o+2]))*(.84+.16*Math.sin(t*12+a*5))+.05*Math.sin(t*20.5+a*2);let m=2.4*Math.sqrt(s*s+p*p);for(let e=1;e<r.length;e++)r[e]=m*(.5+i[e])+3.2*Math.sin(t*8.5+a+i[e]*5.5)*i[e]},m=0,h=0,g=(e,t,n)=>{m+=e,h+=e,!(h<Dg)&&(h=0,e_(n,f),r.animate(s.array,o,m,p),s.needsUpdate=!0)};return g(Dg,0,null),{geometry:a,material:Tg({emissive:4854784}),puff:16742938,update:g}}function S_(){let e=Ig(62,bg(7007),.55),t=[1806294,3782894,7327999,2781136,9694463].map(e=>new H(e)),n=new H(671616),r=new H(15006719),i=0,a=0,o=0,s=(t,n,r)=>{i=-2,a=-2,o=0;for(let s=0;s<e.length;s++){let c=e[s],l=t*c[0]+n*c[1]+r*c[2];l>i?(a=i,i=l,o=s):l>a&&(a=l)}},c=(e,t,n)=>{s(e,t,n);let r=gg((i-.93)/.07),o=1-_g(0,.03,i-a);return-.07+.1*r-.045*o},l=Sg({detail:8,shape:c,paint:(e,c,l,u)=>{s(e,c,l);let d=gg((i-.93)/.07),f=1-_g(0,.028,i-a);u.copy(t[o%t.length]).lerp(r,d*d*.5),u.lerp(n,f*.85)}}),u=l.attributes.position.count/3,d=Xg(l),f=new Bg;f.geo(l);let p=(e,t,n)=>1+c(e,t,n),m=Yg(Pg([.9,.2,-.35]),72),h=new H(8379647),g=new H(16777215);for(let e=-5;e<=5;e++){let t=m[(36+e*4+72)%72],n=.22+.2*Math.cos(e/5*1.2),r=Hg(Ug(.11,n,5,!0),t,[t[0]*.93,t[1]*.93,t[2]*.93]);f.geo(r,(e,r,i,a)=>{let o=gg((e*t[0]+r*t[1]+i*t[2]-.93)/n);a.copy(h).lerp(g,o)})}let _=Rg([.45,.28,.85]),v=(e,t,n)=>p(e,t,n)+.02,y=[[-.19,0],[-.1,.085],[.02,.105],[.13,.075],[.2,0],[.13,-.065],[0,-.085],[-.1,-.065]].map(e=>[e[0]*1.35,e[1]*1.35]);Kg(f,_,y.map(e=>[e[0]*1.25,e[1]*1.4]),v,new H(399930),0),Kg(f,_,y,(e,t,n)=>v(e,t,n)+.006,new H(1.2,2.3,2.7),0),Kg(f,_,[[0,.115],[.032,0],[0,-.108],[-.032,0]],(e,t,n)=>v(e,t,n)+.012,new H(266268),0);let b=f.build(),x=b.attributes.color;x.setUsage(et);let S=x.array,C=S.slice(0,u*9),w=0,T=0;return{geometry:b,material:Eg({shininess:130,specular:16777215,emissive:732234}),puff:10479871,update:e=>{if(w+=e,T+=e,T<.05)return;T=0;let t=w*.9,n=Math.cos(t)*.936,r=Math.sin(t)*.936;for(let e=0;e<u;e++){let t=1-Math.abs(d[e*3]*n+d[e*3+1]*.35+d[e*3+2]*r)/.15,i=e*9;if(t>0){let e=1+1.7*t*t,n=.3*t*t;for(let t=0;t<3;t++)S[i+t*3]=C[i+t*3]*e+n,S[i+t*3+1]=C[i+t*3+1]*e+n,S[i+t*3+2]=C[i+t*3+2]*e+n}else for(let e=0;e<9;e++)S[i+e]=C[i+e]}x.needsUpdate=!0}}}function C_(){let e=[10135480,12898012,7898784,11451088].map(e=>new H(e)),t=Sg({detail:6,paint:(t,n,r,i)=>{let a=(Math.floor((Math.atan2(r,t)/lg+1)*8)%8+8)%8,o=n<-.8?0:n<-.35?1:n<.35?2:n<.8?3:4;i.copy(e[vg(a,o,5)*4|0]).multiplyScalar(.9+.2*K(t*9,n*9,r*9))}}),n=new Bg;n.geo(t);let r=new H(2304052),i=new H(15134199),a=(e,t)=>[Math.sin(e)*Math.cos(t),Math.sin(t),Math.cos(e)*Math.cos(t)],o=1.012;for(let e=0;e<8;e++){let t=e/8*lg,i=[];for(let e=0;e<=12;e++)i.push(a(t,-.93+e/12*1.86));Jg(n,i,.045,o,r)}for(let e of[-.8,-.35,.35,.8]){let t=Math.asin(e),i=[];for(let e=0;e<40;e++)i.push(a(e/40*lg,t));Jg(n,i,.045,o,r,!0)}for(let e=0;e<8;e++)for(let t of[-.8,-.35,.35,.8])qg(n,Rg(a(e/8*lg,Math.asin(t))),0,0,.05,.05,6,1.024,i);let s=(e,t,r,i,o)=>{for(let s=0;s<16;s++){let c=-e+s/16*2*e,l=-e+(s+1)/16*2*e,u=a(c,t),d=a(l,t),f=a(l,r),p=a(c,r),m=e=>[e[0]*i,e[1]*i,e[2]*i],h=o(c),g=o(l);n.tri3(m(u),m(p),m(f),h,h,g,!0),n.tri3(m(u),m(f),m(d),h,g,g,!0)}};s(1.08,.38,-.1,1.014,()=>new H(659480)),s(1.02,.33,-.05,1.02,()=>new H(400680));let c=n.count,l=new H(.12,1,1.3);s(.95,.2,.07,1.026,()=>l.clone());let u=n.count,d=Pg([.22,1,.1]);n.geo(Hg(new Wi(.03,.045,.3,5,1,!0).translate(0,.15,0),d,[d[0]*.93,d[1]*.93,d[2]*.93]),6976388);let f=[d[0]*1.26,d[1]*1.26,d[2]*1.26],p=n.count;n.geo(Wg(.075,1).translate(f[0],f[1],f[2]),new H(16724e3));let m=n.count,h=n.build(),g=h.attributes.color,_=g.array,v=h.attributes.position.array;g.setUsage(et);let y=new Float32Array(u-c);for(let e=c;e<u;e++)y[e-c]=Math.atan2(v[e*3],v[e*3+2]);let b=0,x=0,S=e=>{if(b+=e,x+=e,x<.045)return;x=0;let t=Math.sin(b*1.7)*.85;for(let e=c;e<u;e++){let n=(y[e-c]-t)/.3,r=.3+1.5*Math.exp(-n*n),i=e*3;_[i]=l.r*r,_[i+1]=l.g*r,_[i+2]=l.b*r}let n=.25+1.6*Math.max(0,Math.sin(b*4.2));for(let e=p;e<m;e++){let t=e*3;_[t]=1.6*n,_[t+1]=.12*n,_[t+2]=.08*n}g.needsUpdate=!0};return S(.1),{geometry:h,material:Eg({shininess:90,specular:14674175,emissive:329484}),puff:11911894,update:S}}function w_(){let e=bg(1359),t=Rg([0,.1,1]),n=[new H(7031342),new H(4862752),new H(9069120)],r=new H(15716516),i=Sg({detail:5,shape:(e,t,n)=>-.14+(K(e*3,t*3,n*3)-.5)*.04,paint:(e,i,a,o)=>{let s=K(e*4+1,i*4,a*4+6);o.copy(n[0]).lerp(s>.5?n[2]:n[1],Math.abs(s-.5)*2);let c=Math.acos(gg(e*t.F[0]+i*t.F[1]+a*t.F[2]));o.lerp(r,_g(.78,.6,c))}}),a=Ig(100,e,.3),o=[];for(let n of a)Mg(n,t.F)<Math.cos(.8)&&o.push(Pg([n[0]+(e()-.5)*.25,n[1]+(e()-.5)*.25,n[2]+(e()-.5)*.25]));let s=new t_({dirs:o,len:o.map(()=>.24+e()*.1),thick:o.map(()=>.075+e()*.015),prof:[[0,1.25],[.55,.78]],seg:4,rootR:.78,apex:.5,rnd:e}),c=new H(13804652),l=new H(2891026),u=new H(5913122),d=o.map(()=>e()<.55),f=s.bake((e,t,n,r,i,a)=>{a?i.copy(l):t===0?i.copy(l).lerp(u,.4):i.copy(d[e]?c:u)}),p=new Bg;p.geo(i);for(let e=0;e<f.pos.length;e++)p.p.push(f.pos[e]),p.c.push(f.col[e]);let m=(e,n,r)=>zg(t,e,n,r);p.geo(Hg(Wg(.17,1),t.F,m(0,-.08,.9),1,1.3,1),16178358),p.geo(Hg(Wg(.06,0),t.F,m(0,-.05,1.1)),1314830);for(let e of[-1,1])p.geo(Hg(Wg(.062,0),t.F,m(e*.26,.2,.9)),1314830),p.geo(Hg(Wg(.19,1),t.F,m(e*.52,.6,.94),1,.45,1),7031342),p.geo(Hg(Wg(.12,1),t.F,m(e*.52,.6,1),1,.3,1),15312288);return{geometry:p.build(),material:Tg(),puff:9068088}}function T_(){let e=bg(8888),t=Rg([0,.2,1]),n=new H(10110680),r=new H(13667064),i=new H(6957736),a=Sg({detail:5,perFace:!1,shape:(e,t,n)=>-.15+(yg(e*2+4,t*2+2,n*2+8,2)-.5)*.08,paint:(e,t,a,o)=>{o.copy(n).lerp(i,gg((K(e*2.4+1,t*2.4,a*2.4+5)-.5)*2)),o.lerp(r,gg((K(e*6+3,t*6+9,a*6)-.68)*4)*.8)}}),o=new Bg;o.geo(a);let s=(e,n,r)=>zg(t,e,n,r);for(let e of[-1,1])o.geo(Hg(Wg(.19,1),t.F,s(e*.34,.2,.92)),16777215),o.geo(Hg(Wg(.1,0),t.F,s(e*.33,.17,1.06)),1313316);let c=Ig(10,e,.2).filter(e=>Mg(e,t.F)<.55),l=new t_({dirs:c,len:c.map(()=>.64+e()*.08),thick:c.map(()=>.15),prof:[[0,1.3],[.1,1.1],[.22,.95],[.36,.82],[.5,.7],[.62,.6],[.74,.5],[.86,.4],[.95,.3]],seg:5,rootR:.7,apex:.1,rnd:e}),u=new H(10110680),d=new H(13660400),f=new H(16762602),p=l.bake((e,t,n,r,i)=>{i.copy(u).lerp(d,r*.8),n===0&&t%2==1&&t>1&&i.copy(f)}),{geometry:m,offset:h}=Qg(o.build(),p.pos,p.col),g=m.attributes.position,_=l.ph,v=(e,t,n,r,i)=>{let a=_[e];n.psi+=.7*Math.sin(t*.9+a*2),n.len=.95+.05*Math.sin(t*2.1+a);let o=3.4+1.6*Math.sin(t*1.7+a);for(let e=1;e<r.length;e++)r[e]=o*(.12+3.4*i[e]*i[e]*i[e])},y=0,b=0,x=e=>{y+=e,b+=e,!(b<Dg)&&(b=0,l.animate(g.array,h,y,v),g.needsUpdate=!0)};return x(Dg),{geometry:m,material:Tg(),puff:10636512,update:x}}function E_(){let e=new H(16751152),t=new H(16022036),n=new H(12867082),r=(e,t,n)=>{let r=.5+.5*Math.cos(Math.atan2(n,e)*8),i=Math.abs(t);return(r*.11-.05)*(1-i**5)-.12*_g(.8,1,i)},i=Sg({detail:7,shape:r,paint:(r,i,a,o)=>{let s=.5+.5*Math.cos(Math.atan2(a,r)*8);o.copy(n).lerp(t,_g(.1,.5,s)).lerp(e,_g(.7,1,s)*.6),o.multiplyScalar(.94+.12*K(r*5,i*5,a*5))}}),a=new Bg;a.geo(i);let o=new H(6126114),s=new H(9071146);a.geo(Hg(new Wi(.075,.13,.3,6,1).translate(0,.15,0),[.08,1,0],[0,.82,0]),(e,t,n,r)=>r.copy(o).lerp(s,gg((t-.9)/.25))),a.geo(Hg(new Wi(.05,.075,.16,6,1).translate(0,.08,0),[.7,1,0],[.04,1.08,0]),8022568);let c=Rg([0,-.02,1]),l=e=>(t,n,i)=>1+r(t,n,i)+e,u=new H(3806724),d=[[[-.46,.05],[-.15,.09],[-.33,.34]],[[.15,.09],[.46,.05],[.33,.34]],[[-.06,-.05],[.06,-.05],[0,.08]]],f=[],p=[];for(let e=0;e<=8;e++){let t=-.5+e*.125,n=t/.5*(t/.5);f.push([t,-.15+.18*n-(e%2?.075:0)]),p.push([t,-.4+.2*n])}for(let e=0;e<8;e++)d.push([f[e],f[e+1],p[e+1],p[e]]);let m=new H(2.7,1.75,.3),h=[];for(let e of d){let t=0,n=0;for(let r of e)t+=r[0],n+=r[1];t/=e.length,n/=e.length;let r=e.map(e=>[t+(e[0]-t)*1.22,n+(e[1]-n)*1.22]);e.length===4?(Gg(a,c,r[0],r[1],r[2],l(.012),u,1),Gg(a,c,r[0],r[2],r[3],l(.012),u,1)):Kg(a,c,r,l(.012),u,1);let i=a.count;e.length===4?(Gg(a,c,e[0],e[1],e[2],l(.018),m,1),Gg(a,c,e[0],e[2],e[3],l(.018),m,1)):Kg(a,c,e,l(.018),m,1),h.push([i,a.count,vg(h.length,31,7)])}let g=a.build(),_=g.attributes.color,v=_.array;_.setUsage(et);let y=0,b=0,x=e=>{if(y+=e,b+=e,!(b<.06)){b=0;for(let e=0;e<h.length;e++){let t=h[e][0],n=h[e][1],r=h[e][2],i=.8+.2*Math.sin(y*(9+r*5)+r*20)+.1*Math.sin(y*23+r*7);for(let e=t;e<n;e++){let t=e*3;v[t]=m.r*i,v[t+1]=m.g*i,v[t+2]=m.b*i}}_.needsUpdate=!0}};return x(.1),{geometry:g,material:Tg({emissive:1705984}),puff:16747034,update:x}}function D_(){let e=Rg([0,.1,1]),t=new H(8829032),n=new H(6261336),r=new H(8219296),i=Sg({detail:6,shape:(e,t,n)=>(K(e*3,t*3,n*3)-.5)*.04,paint:(e,i,a,o)=>{let s=yg(e*2.4+1,i*2.4+4,a*2.4+2,3);o.copy(t).lerp(n,gg((s-.4)*2.4)),o.lerp(r,gg((K(e*2.8+6,i*2.8,a*2.8+1)-.62)*4)*.7)}}),a=new Bg;a.geo(i);let o=(t,n,r=1)=>zg(e,t,n,r),s=1.012,c=new H(2759214),l=new H(2363932),u=new H(15261856),d=[];for(let e=0;e<=10;e++){let t=-.58+e*.1;d.push(o(t,.56+.06*Math.sin(e*.5)+t*.12,1))}Jg(a,d,.04,s,new H(4861002));for(let e=1;e<10;e++){let t=-.58+e*.1,n=.56+.06*Math.sin(e*.5)+t*.12;Jg(a,[o(t-.01,n-.085,1),o(t+.01,n+.085,1)],.03,1.016,c)}let f=[];for(let e=0;e<=10;e++){let t=-.44+e*.088;f.push(o(t,-.3+.05*Math.sin(e*.9),1))}Jg(a,f,.07,s,l);for(let t=0;t<4;t++){let n=-.3+t*.2,r=-.265+.04*Math.sin(n*5);Gg(a,e,[n,r],[n+.07,r],[n+.035,-.33],1.018,u,0)}for(let e=0;e<7;e++){let t=-.4+e*.133,n=-.3+.05*Math.sin((t+.44)/.088*.9);Jg(a,[o(t,n+.1,1),o(t,n-.1,1)],.028,1.024,c)}return a.geo(Hg(Wg(.2,1),e.F,o(-.3,.22,.93)),15921368),a.geo(Hg(Wg(.1,1),e.F,o(-.3,.2,1.06)),12728874),a.geo(Hg(Wg(.05,0),e.F,o(-.3,.2,1.15)),1380366),qg(a,e,.3,.22,.17,.15,10,s,new H(1714716)),a.geo(Hg(Wg(.055,0),e.F,o(.3,.22,.99)),15786080),qg(a,e,-.045,-.02,.025,.04,6,s,new H(2767400)),qg(a,e,.045,-.02,.025,.04,6,s,new H(2767400)),{geometry:a.build(),material:Tg(),puff:8368233}}function O_(){let e=(1+Math.sqrt(5))/2,t=new Set,n=[],r=(e,r,i)=>{let a=[e,r,i].map(e=>Math.round(e*1e3)).join(`,`);t.has(a)||(t.add(a),n.push(Pg([e,r,i])))};for(let t of[[0,1,3*e],[1,2+e,2*e],[e,2,2*e+1]])for(let e of[-1,1])for(let n of[-1,1])for(let i of[-1,1]){let a=t[0]*e,o=t[1]*n,s=t[2]*i;r(a,o,s),r(o,s,a),r(s,a,o)}let i=[],a=new Set,o=(e,t,n,r)=>{let o=[e,t,n].map(e=>Math.round(e*1e3)).join(`,`)+r;a.has(o)||(a.add(o),i.push([Pg([e,t,n]),r]))};for(let t of[-1,1])for(let n of[-1,1])o(0,t,n*e,!0),o(t,n*e,0,!0),o(n*e,0,t,!0),o(0,t*e,n/e,!1),o(t*e,n/e,0,!1),o(n/e,0,t*e,!1);for(let e of[-1,1])for(let t of[-1,1])for(let n of[-1,1])o(e,t,n,!1);let s=[new H(1382172),new H(2040361)],c=new H(16514039),l=new H(15000798),u=new Bg,d=.985;for(let[e,t]of i){let r=-2;for(let t of n)r=Math.max(r,Mg(t,e));let i=n.filter(t=>Mg(t,e)>r-.001),a=Pg(Ng(e,Math.abs(e[1])<.9?[0,1,0]:[1,0,0])),o=Ng(e,a);i.sort((e,t)=>Math.atan2(Mg(e,o),Mg(e,a))-Math.atan2(Mg(t,o),Mg(t,a)));let f=t?1.055:1.035,p=(f+d)/2+.004,m=(e,t)=>{let n=Pg(e);return[n[0]*t,n[1]*t,n[2]*t]};for(let n=0;n<i.length;n++){let r=i[n],a=i[(n+1)%i.length],o=m(e,f),h=m(r,d),g=m(a,d),_=m(Fg(r,a),.993),v=m(Fg(e,r),p),y=m(Fg(e,a),p),b=t?s[0]:c,x=t?s[1]:l;u.tri(o,v,y,b),u.tri(v,h,_,x),u.tri(y,_,g,x),u.tri(v,_,y,b)}}return{geometry:u.build(),material:Eg({shininess:60,specular:6710886}),puff:16777215}}function k_(){let e=[15761182,14970906,16225590].map(e=>new H(e)),t=Sg({detail:6,shape:(e,t,n)=>(K(e*13,t*13,n*13)-.5)*.014,paint:(t,n,r,i)=>{let a=vg(Math.floor(t*9+20),Math.floor(n*9+20),Math.floor(r*9+20));i.copy(e[a*3|0])}}),n=new Bg;n.geo(t);let r=new tn(.42,.3,.15),i=[[1,0,0],[0,1,0],[0,0,1]].map(e=>{let t=new B(...e).applyEuler(r);return[t.x,t.y,t.z]}),a=new H(1380622);for(let e of i)Jg(n,Yg(e,72),.05,1.012,a,!0);return{geometry:n.build(),material:Tg(),puff:16747050}}function A_(){let e=new H(1317482),t=new H(5906088),n=new H(2795232),r=new H(460058),i=Sg({detail:7,perFace:!1,paint:(i,a,o,s)=>{let c=.5+.5*Math.sin(i*3.2+a*2.1+yg(i*2+1,a*2+3,o*2,3)*7);c<.5?s.copy(r).lerp(e,_g(0,.5,c)*1.4):s.copy(e).lerp(t,_g(.5,.85,c)),s.lerp(n,_g(.9,1,c)*.8)}}),a=new Bg;a.geo(i);let o=Rg([.2,.25,1]),s=new H(2763336),c=new H(197128);for(let[e,t,n]of[[-.115,.17,.09],[.115,.17,.09],[0,-.18,.108]])qg(a,o,e,t,n*1.3,n*1.3,12,1.012,s),qg(a,o,e,t,n,n,12,1.018,c);return{geometry:a.build(),material:Eg({shininess:170,specular:16777215}),puff:3878320}}function j_(){let e=new H(14086714),t=new H(11981862),n=Sg({detail:6,shape:(e,t,n)=>(K(e*16,t*16,n*16)-.5)*.016,paint:(n,r,i,a)=>{a.copy(e).lerp(t,K(n*12+3,r*12,i*12+5)),a.multiplyScalar(.94+.12*vg(Math.floor(n*14+30),Math.floor(r*14+30),Math.floor(i*14+30)))}}),r=new Bg;r.geo(n);let i=[];for(let e=0;e<96;e++){let t=e/96*lg;i.push([.8*Math.cos(t)+.2*Math.cos(3*t),.8*Math.sin(t)-.2*Math.sin(3*t),.8*Math.sin(2*t)])}return Jg(r,i,.075,1.012,new H(16185070),!0),{geometry:r.build(),material:Tg(),puff:14218298}}function M_(){let e=bg(2024),t=new H(13601338),n=new H(15314005),r=new H(9852444),i=(e,t,n)=>.05*Math.sin(Math.atan2(n,e)*3+t*6.5)+(K(e*4,t*4,n*4)-.5)*.012,a=Sg({detail:7,shape:i,paint:(e,i,a,o)=>{let s=Math.sin(Math.atan2(a,e)*3+i*6.5);o.copy(t).lerp(n,_g(.2,1,s)*.8).lerp(r,_g(-.2,-1,s)*.5),o.lerp(r,gg((K(e*3+8,i*3,a*3+2)-.58)*3)*.7)}}),o=new Bg;o.geo(a);let s=[new H(16773832),new H(16048292),new H(16777184)],c=(e,t,n)=>1+i(e,t,n)+.012;for(let t=0;t<130;t++)qg(o,Rg(Lg(e)),0,0,.075,.032,4,c,s[e()*3|0],e()*Math.PI);return{geometry:o.build(),material:Eg({shininess:28,specular:6965792}),puff:14257210}}function N_(){let e=bg(1071),t=new H(15312186),n=new H(16502882),r=new H(8012044),i=(e,t,n)=>{let r=Math.atan2(n,e)/lg*12,i=Math.asin(Math.max(-1,Math.min(1,t)))/Math.PI*6,a=r+i,o=r-i,s=a-Math.floor(a),c=o-Math.floor(o);return{s:1-2*Math.max(Math.abs(s-.5),Math.abs(c-.5)),id:vg(Math.floor(a)&255,Math.floor(o)&255,3)}},a=Sg({detail:6,shape:(e,t,n)=>.012*Math.min(1,i(e,t,n).s*2.2),paint:(e,r,a,o)=>{let s=i(e,r,a);o.copy(t).lerp(n,_g(.2,.9,s.s)*.7).multiplyScalar(.9+.2*s.id)}}),o=new Bg;o.geo(a);for(let e of[-1,1])for(let t=0;t<12;t++){let n=[];for(let r=0;r<=14;r++){let i=-2.5+r/14*5,a=(t-e*i)/12*lg,o=i/6*Math.PI;n.push([Math.cos(o)*Math.cos(a),Math.sin(o),Math.cos(o)*Math.sin(a)])}Jg(o,n,.032,1.026,r)}let s=[new H(9225790),new H(6988330),new H(10868826)];for(let t=0;t<46;t++)qg(o,Rg(Lg(e)),0,0,.05+e()*.025,.03,4,1.03,s[e()*3|0],e()*Math.PI);return{geometry:o.build(),material:Eg({shininess:60,specular:16767120}),puff:15905597}}function P_(){let e=bg(3003),t=[new H(14393948),new H(13208644)],n=[new H(16748484),new H(16743096)],r=e=>-.05+.3*Math.sin(e*5+.7)+.1*Math.sin(e*11),i=(e,t)=>Math.sin(t)>r(e),a=(e,t)=>.4*(i(e,t)?1.07:1),o=(e,t,n=0)=>{let r=a(e,t)+n,i=.6+r*Math.cos(t);return[i*Math.cos(e),r*Math.sin(t),i*Math.sin(e)]},s=new Bg;for(let e=0;e<40;e++)for(let r=0;r<16;r++){let a=e/40*lg,c=(e+1)/40*lg,l=r/16*lg,u=(r+1)/16*lg,d=(a+c)/2,f=(l+u)/2,p=[i(a,l),i(c,l),i(c,u),i(a,u)].filter(Boolean).length>=2?n[e+r&1]:t[(e>>1)+r&1],m=[Math.cos(f)*Math.cos(d),Math.sin(f),Math.cos(f)*Math.sin(d)],h=o(a,l),g=o(c,l),_=o(c,u),v=o(a,u);s.triN(h,g,_,p,m),s.triN(h,_,v,p,m)}let c=[16777215,5035775,16769354,8118395,16735324,11562239].map(e=>new H(e)),l=0,u=0;for(;l<54&&u++<2e3;){let t=e()*lg,n=e()*lg;if(!(Math.sin(n)>r(t)+.25)||Math.sin(n)<.2)continue;let i=[Math.cos(n)*Math.cos(t),Math.sin(n),Math.cos(n)*Math.sin(t)],a=o(t,n,.014),u=[-Math.sin(t),0,Math.cos(t)],d=[-Math.sin(n)*Math.cos(t),Math.cos(n),-Math.sin(n)*Math.sin(t)],f=e()*Math.PI,p=[u[0]*Math.cos(f)+d[0]*Math.sin(f),u[1]*Math.cos(f)+d[1]*Math.sin(f),u[2]*Math.cos(f)+d[2]*Math.sin(f)],m=Ng(i,p),h=.065,g=.02,_=(e,t)=>[a[0]+p[0]*h*e+m[0]*g*t,a[1]+p[1]*h*e+m[1]*g*t,a[2]+p[2]*h*e+m[2]*g*t],v=c[e()*c.length|0];s.triN(_(-1,-1),_(1,-1),_(1,1),v,i),s.triN(_(-1,-1),_(1,1),_(-1,1),v,i),l++}return{geometry:s.build(),material:Tg(),puff:16748484}}function F_(){let e=bg(4747),t=new H(14922602),n=new H(12880448),r=new H(15912842),i=(e,t,n)=>(yg(e*2.6+2,t*2.6+8,n*2.6+4,2)-.5)*.12,a=Sg({detail:6,shape:i,paint:(e,i,a,o)=>{let s=K(e*3+1,i*3+5,a*3+7);o.copy(t).lerp(s>.5?r:n,Math.abs(s-.5)*1.6),o.multiplyScalar(.95+.1*vg(Math.floor(e*11+30),Math.floor(i*11+30),Math.floor(a*11+30)))}}),o=new Bg;o.geo(a);let s=[new H(4858896),new H(6107158),new H(3807754)],c=Ig(24,e,.6);for(let t of c){let n=Wg(.1+e()*.06,0);n.deleteAttribute(`uv`),n.scale(1,.55+e()*.4,.8+e()*.4),n.rotateX(e()*6),n.rotateY(e()*6);let r=.98+i(t[0],t[1],t[2]);n.translate(t[0]*r,t[1]*r,t[2]*r),o.geo(n,s[e()*3|0])}return{geometry:o.build(),material:Tg(),puff:14263130}}function I_(){let e=bg(5150),t=Rg([0,.05,1]),n=new H(16765154),r=new H(16773879),i=Ig(54,e,.7),a=(e,n,r)=>{let a=0;for(let t=0;t<i.length;t++){let o=_g(.9,1,e*i[t][0]+n*i[t][1]+r*i[t][2]);o>a&&(a=o)}return a*(1-.75*_g(.55,.85,e*t.F[0]+n*t.F[1]+r*t.F[2]))},o=(e,t,n)=>.84+.12*a(e,t,n),s=Sg({detail:6,perFace:!1,shape:(e,t,n)=>o(e,t,n)-1,paint:(e,t,i,o)=>o.copy(n).lerp(r,gg(a(e,t,i)*1.2+K(e*4+7,t*4,i*4+3)*.25))}),c=new Bg;c.geo(s);let l=(e,n,r)=>zg(t,e,n,r);for(let e of[-1,1])c.geo(Hg(Wg(.2,1),t.F,l(e*.5,.74,.88),1,.5,1.25),16760022),c.geo(Hg(Wg(.13,1),t.F,l(e*.5,.74,.92),1,.4,1.15),16748472);let u=e=>(t,n,r)=>o(t,n,r)+e;for(let e of[-1,1])qg(c,t,e*.43,-.1,.1,.065,8,u(.012),new H(16748472));Gg(c,t,[-.035,-.02],[.035,-.02],[0,-.065],u(.014),new H(14241919),0);for(let e of[-1,1])Jg(c,[l(0,-.07,1),l(e*.03,-.11,1),l(e*.07,-.115,1),l(e*.1,-.09,1)],.018,u(.014),new H(5909050));for(let e of[-1,1])c.geo(Hg(Wg(.03,0),t.F,l(e*.27+.025,.2,.93)),16777215);let d=c.count,f=[];for(let e of[-1,1]){let t=l(e*.27,.15,.88);f.push(t),c.geo(Wg(.075,1).translate(t[0],t[1],t[2]),1707802)}let p=c.count,m=c.build(),h=m.attributes.position,g=h.array;h.setUsage(et);let _=(p-d)/2,v=g.slice(d*3,p*3),y=t.U,b=0,x=0,S=1.2,C=1,w=e=>{for(let t=0;t<2;t++){let n=f[t];for(let r=0;r<_;r++){let i=(t*_+r)*3,a=v[i]-n[0],o=v[i+1]-n[1],s=v[i+2]-n[2],c=(a*y[0]+o*y[1]+s*y[2])*(1-e),l=d*3+i;g[l]=v[i]-y[0]*c,g[l+1]=v[i+1]-y[1]*c,g[l+2]=v[i+2]-y[2]*c}}h.needsUpdate=!0};return{geometry:m,material:Tg(),puff:16762076,update:t=>{if(b+=t,x+=t,x<.03)return;x=0;let n=1,r=(b-S)/.2;r>=0&&r<=1?n=1-.9*Math.sin(r*Math.PI):r>1&&(S=b+1.8+e()*2.8),n!==C&&(C=n,w(n))}}}function L_(){let e=Rg([0,.08,1]),t=new H(1846346),n=new H(3032176),r=new H(16054268),i=new H(14147822),a=Sg({detail:6,shape:(e,t,n)=>-.1+(K(e*3,t*3,n*3)-.5)*.02,paint:(a,o,s,c)=>{c.copy(t).lerp(n,K(a*3+2,o*3,s*3+5));let l=a*e.F[0]+o*e.F[1]+s*e.F[2];if(l>.05){let t=(a*e.R[0]+o*e.R[1]+s*e.R[2])/l,n=(a*e.U[0]+o*e.U[1]+s*e.U[2])/l,u=t/.62*(t/.62)+(n+.12)/.82*((n+.12)/.82);u<1&&c.copy(r).lerp(i,_g(.7,1,u))}}}),o=new Bg;o.geo(a);let s=(t,n,r)=>zg(e,t,n,r);o.geo(Hg(Ug(.1,.26,6,!0),e.F,s(0,.3,.92),1.3,1,.75),16753178);for(let t of[-1,1]){o.geo(Hg(Wg(.062,0),e.F,s(t*.21,.46,.93)),789522),o.geo(Hg(Wg(.022,0),e.F,s(t*.21+.02,.5,.99)),16777215),qg(o,e,t*.36,.33,.07,.045,8,.915,new H(16754356));let n=[t,-.1,.1],r=Pg([t*.55,-.85,.25]),i=Pg(n),a=Pg(Fg(i,r,-Mg(i,r))),c=Ng(a,r),l=Wg(.2,1);l.deleteAttribute(`uv`),l.scale(.3,1.45,.85),l.applyMatrix4(new Gt().makeBasis(new B(...a),new B(...r),new B(...c))),l.translate(t*.86,-.12,.08),o.geo(l,1450813);let u=Wg(.15,1);u.deleteAttribute(`uv`),u.scale(1.2,.45,1),u.translate(t*.28,-.88,.42),o.geo(u,16751130)}return{geometry:o.build(),material:Tg(),puff:2768227}}function R_(e){let t=new uo(1,e),n=t.attributes.position,r=n.count,i=new Float32Array(r*2);for(let e=0;e<r;e+=3){let t=0,r=0,a=0;for(let i=0;i<3;i++)t+=n.getX(e+i),r+=n.getY(e+i),a+=n.getZ(e+i);let o=Math.abs(t),s=Math.abs(r),c=Math.abs(a),l=o>=s&&o>=c?0:s>=c?1:2,u=(l===0?t:l===1?r:a)>=0?1:-1;for(let t=0;t<3;t++){let r=n.getX(e+t),a=n.getY(e+t),o=n.getZ(e+t),s,c,d;l===0?(d=r*u,s=-o*u,c=a):l===1?(d=a*u,s=r,c=-o*u):(d=o*u,s=r*u,c=a),i[(e+t)*2]=s/d*.5+.5,i[(e+t)*2+1]=c/d*.5+.5}}return t.setAttribute(`uv`,new cr(i,2)),t}function z_(e,t,n){let r=new hi(e,t,t,M);return r.colorSpace=Je,r.wrapS=r.wrapT=u,n?(r.magFilter=f,r.minFilter=f,r.generateMipmaps=!1):(r.magFilter=h,r.minFilter=_,r.generateMipmaps=!0),r.needsUpdate=!0,r}var B_=null;function V_(e){let t=new Uint8Array(e*e*4),n=[248,245,236],r=[22,54,150],i=[22,182,178],a=[216,62,42],o=[0,0,0],s=(e,t,n,r)=>{let i=(r*r+n*n)/(2*r),a=i-r;return Math.max(Math.hypot(e,t-a)-i,Math.hypot(e,t+a)-i)},c=(e,t,n)=>[e*Math.cos(n)-t*Math.sin(n),e*Math.sin(n)+t*Math.cos(n)],l=2/e*1.2,u=(e,t)=>{o[0]+=(e[0]-o[0])*t,o[1]+=(e[1]-o[1])*t,o[2]+=(e[2]-o[2])*t},d=(e,t)=>u(t,gg(.5-e/l)),f=(e,t,n)=>u(n,gg((t*.5+l*.5-Math.abs(e))/l)),p=(e,t,n=.013)=>{d(e,t),f(e,n,r)},m=e/2;for(let l=0;l<m;l++)for(let u=l;u<m;u++){let h=(m+u+.5)/e*2-1,g=(m+l+.5)/e*2-1,_=h,v=g;o[0]=n[0],o[1]=n[1],o[2]=n[2];for(let e of[-1,1]){let t=c(_-.3,v-e*0,e*.62);p(s(t[0]-.12,t[1],.14,.036),i,.011)}_>.1&&_<.46&&f(v,.016,r);let y=[_-.44,v];for(let e of[-1,1]){let t=c(y[0],y[1],-e*.5);p(s(t[0]-.13,t[1],.14,.05),i)}p(s(_-.58,v,.16,.07),a),f(s(_-.58,v,.16,.07)+.03,.01,n);let b=_-.5,x=v-.5,S=Math.atan2(x,b),C=Math.hypot(b,x);p(C-(.13+.022*Math.cos(S*10)),i),p(C-.075,n,.011),d(C-.035,a),p(s(_-.205,v,.155,.065),i);let w=(_+v)*Math.SQRT1_2,T=(v-_)*Math.SQRT1_2;p(s(w-.2,T,.13,.05),r,.01),p(Math.hypot(_,v)-.1,n,.012),d(Math.hypot(_,v)-.06,a),d(Math.hypot(_,v)-.022,n);for(let[e,t]of[[.66,.27],[.3,.2]])d(Math.hypot(_-e,v-t)-.032,r);d(.9-_,r),f(_-.835,.045,i),f(_-.78,.016,r);let E=Math.round(o[0]),D=Math.round(o[1]),O=Math.round(o[2]),k=m+u,A=m+l,j=m-1-u,ee=m-1-l;for(let[n,r]of[[k,A],[A,k],[j,A],[A,j],[k,ee],[ee,k],[j,ee],[ee,j]]){let i=(r*e+n)*4;t[i]=E,t[i+1]=D,t[i+2]=O,t[i+3]=255}}return t}function H_(){B_||(B_=V_(256));let e=z_(B_,256,!1);return{geometry:R_(5),material:new Eo({map:e,flatShading:!0,shininess:90,specular:5592405}),puff:2776023,textures:[e]}}var U_=null;function W_(e){let t=new Uint8Array(e*e*4),n=[178,34,40],r=[28,40,98],i=[228,170,52],a=[240,226,190],o=[38,112,108],s=(n,r,i)=>{let a=(r*e+n)*4;t[a]=i[0],t[a+1]=i[1],t[a+2]=i[2],t[a+3]=255},c=(e-1)/2;for(let t=0;t<e;t++)for(let l=0;l<e;l++){let e=Math.abs(l-c),u=Math.abs(t-c),d=Math.max(e,u),f=e+u,p;if(d>c-.6)p=r;else if(d>c-1.6)p=a;else if(d>c-4.6){let r=u>e?l:t,a=r%6<3?r%3:2-r%3;p=Math.floor(c-1.6-d)<=a?i:n}else p=d>c-5.6||f<2.5?a:f<4.5?n:f<6.5?i:f<8?r:f<9.5?n:f<10.5?a:Math.abs(e-7)+Math.abs(u-7)<2.5?Math.abs(e-7)+Math.abs(u-7)<1.2?n:i:r;p===r&&(l+t)%5==0&&f>8&&(p=o),s(l,t,p)}return t}function G_(){U_||(U_=W_(32));let e=z_(U_,32,!0);return{geometry:R_(5),material:new Eo({map:e,flatShading:!0,shininess:12,specular:2236962}),puff:12658477,textures:[e]}}var K_={classic:i_,ice:a_,kofte:o_,pamuk:s_,karpuz:c_,disko:l_,altin:u_,lav:f_,dunya:p_,yuz:m_,nazar:h_,karasivi:g_,kizilkaos:__,zehir:v_,plazma:y_,galaksi:b_,ates:x_,buzejder:S_,robot:C_,kirpi:w_,ahtapot:T_,balkabagi:E_,zombi:D_,futbol:O_,basket:k_,bowling:A_,tenis:j_,simit:M_,baklava:N_,donut:P_,kurabiye:F_,poncik:I_,penguen:L_,cini:H_,hali:G_};function q_(e){let t=K_[e]?e:`classic`,n=K_[t]();return n.id=t,n}function J_(e){if(!e)return;e.geometry&&e.geometry.dispose();let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)if(e){for(let t of[`map`,`emissiveMap`,`alphaMap`,`envMap`])e[t]&&e[t].dispose&&e[t].dispose();e.dispose()}if(e.textures)for(let t of e.textures)t.dispose()}var Y_=Math.PI*2,X_=(e,t,n)=>e<t?t:e>n?n:e,Z_=(e,t,n)=>e+(t-e)*n,Q_=(e,t,n)=>{let r=X_((n-e)/(t-e),0,1);return r*r*(3-2*r)},$_=[{id:`day`,name:`Güneşli`,skyTop:6269183,skyMid:11130111,horizon:14479359,fog:14479359,hemiSky:16777215,hemiGround:11453411,hemiIntensity:1.55,sunColor:16773596,sunIntensity:1.9,sunDir:[.25,1,.6],disc:`sun`,discDir:[-.3,.36,-1],discSize:150,discColor:16774344,discGlow:16773296,glow:.22,snowfall:.14,windX:1.5,snowSpeed:2,stars:!1,aurora:!1,clouds:.55,cloudColor:16777215,rock:9413567,snow:16777215,birds:!0,fogScale:1},{id:`sunset`,name:`Gün Batımı`,skyTop:3091834,skyMid:12866959,horizon:16756838,fog:16099442,hemiSky:1677e4,hemiGround:9407176,hemiIntensity:1.6,sunColor:16756848,sunIntensity:2.1,sunDir:[.75,.42,.5],disc:`sun`,discDir:[-.1,.1,-1],discSize:330,discColor:16761466,discGlow:16752720,glow:.95,snowfall:.1,windX:1,snowSpeed:1.8,stars:!1,aurora:!1,clouds:.6,cloudColor:16757664,rock:8220579,snow:16771554,birds:!0,fogScale:1},{id:`night`,name:`Gece`,skyTop:330794,skyMid:1321578,horizon:3495579,fog:3495579,hemiSky:11124991,hemiGround:4479119,hemiIntensity:1.75,sunColor:12570879,sunIntensity:1.15,sunDir:[-.3,.85,.5],disc:`moon`,discDir:[.24,.22,-1],discSize:190,discColor:15922943,discGlow:10336511,glow:.2,snowfall:.22,windX:1.2,snowSpeed:1.8,stars:!0,aurora:!0,clouds:.28,cloudColor:11058406,rock:5926554,snow:14411519,birds:!1,ufo:!0,fogScale:1},{id:`blizzard`,name:`Tipi`,skyTop:9345968,skyMid:12174289,horizon:14673388,fog:14673388,hemiSky:15922939,hemiGround:12042962,hemiIntensity:1.7,sunColor:16777215,sunIntensity:.75,sunDir:[.2,1,.4],disc:null,discDir:[0,.3,-1],discSize:0,discColor:16777215,discGlow:16777215,glow:0,snowfall:1,windX:17,snowSpeed:7.5,stars:!1,aurora:!1,clouds:.9,cloudColor:14015718,rock:9213864,snow:15922939,birds:!1,fogScale:.55},{id:`pink`,name:`Pembe Şafak`,skyTop:5992400,skyMid:15901391,horizon:16770006,fog:16372703,hemiSky:16771572,hemiGround:12035298,hemiIntensity:1.6,sunColor:16767160,sunIntensity:1.8,sunDir:[.45,.75,.5],disc:`sun`,discDir:[.14,.1,-1],discSize:250,discColor:16769712,discGlow:16758984,glow:.7,snowfall:.16,windX:1,snowSpeed:1.8,stars:!1,aurora:!1,clouds:.7,cloudColor:16765158,rock:9076144,snow:16773366,birds:!0,fogScale:1},{id:`crystal`,name:`Kristal Gün`,skyTop:2983679,skyMid:7324159,horizon:13628415,fog:13628415,hemiSky:15400959,hemiGround:10473712,hemiIntensity:1.6,sunColor:16777215,sunIntensity:2,sunDir:[-.2,1,.55],disc:`sun`,discDir:[.32,.4,-1],discSize:140,discColor:16777215,discGlow:13626111,glow:.18,snowfall:.3,windX:.6,snowSpeed:1.4,stars:!1,aurora:!1,clouds:.35,cloudColor:15924223,rock:7313609,snow:16777215,birds:!0,fogScale:1}],ev={};for(let e of $_)ev[e.id]=e;var tv=[`day`,`crystal`,`sunset`,`day`,`night`,`blizzard`,`pink`,`sunset`,`night`,`crystal`,`pink`,`blizzard`,`sunset`,`day`,`night`];function nv(e){let t=new Date(e.getFullYear(),0,0);return Math.floor((e-t)/864e5)}function rv(e,t,n=new Date){return t?$_[nv(n)%$_.length]:ev[tv[(Math.max(1,e|0)-1)%tv.length]]}function iv(e,t,n){let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,1442695041);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}function av(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=iv(r,i,n),u=iv(r+1,i,n),d=iv(r,i+1,n),f=iv(r+1,i+1,n);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c}var ov=(e,t)=>av(e,.5,t)*.55+av(e*2.07,1.5,t+7)*.3+av(e*4.3,2.5,t+13)*.15,sv=e=>1-Math.abs(2*e-1),cv=new Gt,lv=new St,uv=new B,dv=new B,fv=new tn;new H,new H,new H;var pv=new B(0,1,0),mv=class{constructor(e=4096){this.cap=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.n=0}grow(e){if(this.n+e<=this.cap)return;let t=this.cap;for(;t<this.n+e;)t*=2;let n=new Float32Array(t*3),r=new Float32Array(t*3);n.set(this.pos.subarray(0,this.n*3)),r.set(this.col.subarray(0,this.n*3)),this.pos=n,this.col=r,this.cap=t}vert(e,t,n,r){let i=this.n*3;this.pos[i]=e,this.pos[i+1]=t,this.pos[i+2]=n,this.col[i]=r.r,this.col[i+1]=r.g,this.col[i+2]=r.b,this.n++}tri(e,t,n,r,i,a,o,s,c,l,u=l,d=l){this.grow(3),this.vert(e,t,n,l),this.vert(r,i,a,u),this.vert(o,s,c,d)}triOut(e,t,n,r,i,a,o,s,c,l,u,d,f,p=f,m=f){let h=(i-t)*(c-n)-(a-n)*(s-t),g=(a-n)*(o-e)-(r-e)*(c-n),_=(r-e)*(s-t)-(i-t)*(o-e),v=(e+r+o)/3-l,y=(t+i+s)/3-u,b=(n+a+c)/3-d;h*v+g*y+_*b>=0?this.tri(e,t,n,r,i,a,o,s,c,f,p,m):this.tri(e,t,n,o,s,c,r,i,a,f,m,p)}quad(e,t,n,r,i){this.tri(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2],i),this.tri(e[0],e[1],e[2],n[0],n[1],n[2],r[0],r[1],r[2],i)}boxFrame(e,t,n,r,i,a,o,s,c,l,u,d,f){this.grow(36);let p=(f,p,m)=>[e+f*r+p*o+m*l,t+f*i+p*s+m*u,n+f*a+p*c+m*d];this.quad(p(-1,-1,1),p(1,-1,1),p(1,1,1),p(-1,1,1),f),this.quad(p(-1,-1,-1),p(-1,1,-1),p(1,1,-1),p(1,-1,-1),f),this.quad(p(1,-1,-1),p(1,1,-1),p(1,1,1),p(1,-1,1),f),this.quad(p(-1,-1,-1),p(-1,-1,1),p(-1,1,1),p(-1,1,-1),f),this.quad(p(-1,1,-1),p(-1,1,1),p(1,1,1),p(1,1,-1),f),this.quad(p(-1,-1,-1),p(1,-1,-1),p(1,-1,1),p(-1,-1,1),f)}box(e,t,n,r,i,a,o,s){let c=Math.cos(o),l=Math.sin(o);this.boxFrame(e,t,n,c*r,0,-l*r,0,i,0,l*a,0,c*a,s)}beam(e,t,n,r,i,a,o,s){let c=r-e,l=i-t,u=a-n,d=Math.hypot(c,l,u)||1e-6;c/=d,l/=d,u/=d;let f=0,p=1;Math.abs(l)>.95&&(f=1,p=0);let m=p*u-0*l,h=0*c-f*u,g=f*l-p*c,_=Math.hypot(m,h,g)||1e-6;m/=_,h/=_,g/=_;let v=l*g-u*h,y=u*m-c*g,b=c*h-l*m,x=o/2;this.boxFrame((e+r)/2,(t+i)/2,(n+a)/2,m*x,h*x,g*x,v*x,y*x,b*x,c*d/2,l*d/2,u*d/2,s)}cone(e,t,n,r,i,a,o,s,c){this.grow(a*3);let l=e,u=t+i*.3,d=n;for(let f=0;f<a;f++){let p=o+f/a*Y_,m=o+(f+1)/a*Y_;this.triOut(e,t+i,n,e+r*Math.cos(p),t,n+r*Math.sin(p),e+r*Math.cos(m),t,n+r*Math.sin(m),l,u,d,c,s,s)}}coneDown(e,t,n,r,i,a,o,s,c){this.grow(a*3);let l=e,u=t-i*.3,d=n;for(let f=0;f<a;f++){let p=o+f/a*Y_,m=o+(f+1)/a*Y_;this.triOut(e,t-i,n,e+r*Math.cos(p),t,n+r*Math.sin(p),e+r*Math.cos(m),t,n+r*Math.sin(m),l,u,d,c,s,s)}}blob(e,t,n,r,i,a,o,s=1){let c=gv(s);this.grow(c.length/3);for(let s=0;s<c.length;s+=9)this.triOut(e+c[s]*r,t+c[s+1]*i,n+c[s+2]*a,e+c[s+3]*r,t+c[s+4]*i,n+c[s+5]*a,e+c[s+6]*r,t+c[s+7]*i,n+c[s+8]*a,e,t,n,o)}geo(e,t,n){let r=e.attributes.position.array,i=e.attributes.color?e.attributes.color.array:null,a=e.attributes.position.count;this.grow(a);let o=t.elements,s=this.n*3,c=n?n[0]:1,l=n?n[1]:1,u=n?n[2]:1;for(let e=0;e<a;e++){let t=r[e*3],n=r[e*3+1],a=r[e*3+2];this.pos[s+e*3]=o[0]*t+o[4]*n+o[8]*a+o[12],this.pos[s+e*3+1]=o[1]*t+o[5]*n+o[9]*a+o[13],this.pos[s+e*3+2]=o[2]*t+o[6]*n+o[10]*a+o[14],this.col[s+e*3]=(i?i[e*3]:.8)*c,this.col[s+e*3+1]=(i?i[e*3+1]:.8)*l,this.col[s+e*3+2]=(i?i[e*3+2]:.8)*u}this.n+=a}build(e=!0){let t=new Cr;return t.setAttribute(`position`,new cr(this.pos.slice(0,this.n*3),3)),t.setAttribute(`color`,new cr(this.col.slice(0,this.n*3),3)),e&&t.computeVertexNormals(),t}},hv=[];function gv(e){if(!hv[e]){let t=new uo(1,e);hv[e]=t.attributes.position.array.slice(),t.dispose()}return hv[e]}var _v=new Gt,vv=new Gt,yv=new Gt,bv=new Gt;function xv(e,t){let n=e.n;t();let r=e.n-n;return{v0:n,n:r,base:e.pos.slice(n*3,(n+r)*3)}}function Sv(e,t,n){let r=n.elements,i=t.base,a=t.v0*3,o=t.n*3;for(let t=0;t<o;t+=3){let n=i[t],o=i[t+1],s=i[t+2];e[a+t]=r[0]*n+r[4]*o+r[8]*s+r[12],e[a+t+1]=r[1]*n+r[5]*o+r[9]*s+r[13],e[a+t+2]=r[2]*n+r[6]*o+r[10]*s+r[14]}}function Cv(e,t,n,r,i,a,o,s){let c=Math.hypot(i,a,o)||1;i/=c,a/=c,o/=c;let l=o,u=-i,d=Math.hypot(l,u)||1;l/=d,u/=d;let f=a*u,p=o*l-i*u,m=-a*l;e.set(l*s,f*s,i*s,t,0,p*s,a*s,n,u*s,m*s,o*s,r,0,0,0,1)}function wv(e,t,n,r){e.makeRotationX(t);let i=e.elements,a=Math.cos(t),o=Math.sin(t);i[13]=n-(n*a-r*o),i[14]=r-(n*o+r*a)}function Tv(e,t,n,r){e.makeRotationZ(t);let i=e.elements,a=Math.cos(t),o=Math.sin(t);i[12]=n-(n*a-r*o),i[13]=r-(n*o+r*a)}var q=e=>new H(e);function Ev(e,t){return{bx:(n,r,i,a,o,s,c)=>e.box(n*t,r*t,i*t,a*t,o*t,s*t,0,c),bm:(n,r,i,a)=>e.beam(n[0]*t,n[1]*t,n[2]*t,r[0]*t,r[1]*t,r[2]*t,i*t,a),bl:(n,r,i,a,o,s,c,l=1)=>e.blob(n*t,r*t,i*t,a*t,o*t,s*t,c,l)}}function Dv(e,t){let{bx:n,bm:r,bl:i}=Ev(e,t),a=q(9409950),o=q(6975609),s=q(14473680),c=q(3092534),l=q(13120815),u=q(4165483),d=q(3108690),f=q(14239034),p=q(4861725),m=q(15316363),h=q(16777215),g=q(15856113),_=q(2106154);return{body:xv(e,()=>{n(0,.92,0,.27,.27,.62,a),n(0,.8,0,.25,.1,.55,s),r([0,1.05,.5],[0,1.5,.82],.24,a),n(0,1.56,.98,.15,.17,.27,a),n(0,1.48,1.27,.12,.11,.1,s),n(0,1.48,1.38,.07,.06,.03,c),n(.15,1.62,1.06,.02,.04,.04,_),n(-.15,1.62,1.06,.02,.04,.04,_),r([.08,1.72,.92],[.13,2.05,.9],.075,a),r([-.08,1.72,.92],[-.13,2.05,.9],.075,a),n(0,1.5,.66,.035,.14,.16,o),r([0,1.1,-.62],[0,.72,-.8],.07,a),n(0,.64,-.8,.05,.1,.05,o),n(0,1.2,-.05,.3,.04,.34,l),n(0,1.62,-.1,.26,.4,.2,u),n(0,1.4,-.1,.275,.05,.215,f),n(.36,1.12,-.05,.1,.27,.13,d),n(-.36,1.12,-.05,.1,.27,.13,d),n(.36,.78,-.05,.1,.14,.14,p),n(-.36,.78,-.05,.1,.14,.14,p),r([.28,1.85,-.1],[.3,1.58,-.5],.14,u),r([-.28,1.85,-.1],[-.3,1.58,-.5],.14,u),n(.3,1.52,-.56,.065,.065,.065,m),n(-.3,1.52,-.56,.065,.065,.065,m),i(0,2.2,-.1,.2,.22,.2,m,1),i(0,2.45,-.1,.34,.2,.34,h,1),i(0,2.63,-.1,.2,.14,.2,h,1),i(0,1.98,-.27,.16,.3,.1,g,1),n(0,2.17,-.31,.04,.05,.03,m),n(.075,2.26,-.3,.03,.03,.02,_),n(-.075,2.26,-.3,.03,.03,.02,_)}),legs:[[.2,.48,0],[-.2,.48,Math.PI],[.2,-.48,Math.PI],[-.2,-.48,0]].map(([r,i,o])=>({ph:o,py:.72*t,pz:i*t,part:xv(e,()=>{n(r,.36,i,.065,.36,.065,a),n(r,.04,i,.075,.04,.085,c)})}))}}function Ov(e,t,n){let{bx:r,bm:i,bl:a}=Ev(e,t),o=q(16186111),s=q(2303534),c=q(14694970),l=q(16747039),u=q(2106154),d=q(7029795);return{body:xv(e,()=>{a(0,.52,0,.6,.52,.6,o,1),a(0,1.4,0,.46,.42,.46,o,1),a(0,2.08,0,.33,.32,.33,o,1),r(0,2.4,0,.36,.04,.36,s),r(0,2.68,0,.22,.26,.22,s),r(0,2.5,0,.225,.05,.225,c),r(0,1.8,0,.36,.06,.36,c),r(.18,1.58,.34,.07,.2,.03,c),i([0,2.08,.28],[0,2.03,.7],.1,l),r(.12,2.18,.29,.04,.04,.025,u),r(-.12,2.18,.29,.04,.04,.025,u);for(let e of[1.65,1.42,1.19])r(0,e,.44,.045,.045,.03,u);i([-n*.42,1.45,0],[-n*1.15,1.18,.05],.07,d),i([-n*1.15,1.18,.05],[-n*1.4,1.02,.05],.05,d)}),arm:xv(e,()=>{let e=n;i([e*.42,1.45,0],[e*1.2,1.55,0],.08,d),i([e*1.2,1.55,0],[e*1.46,1.88,0],.05,d),i([e*1.2,1.55,0],[e*1.55,1.58,0],.05,d),i([e*1.2,1.55,0],[e*1.5,1.35,0],.05,d)}),px:n*.42*t,py:1.45*t}}function kv(e,t){let{bx:n,bl:r}=Ev(e,t),i=q(16765471),a=q(15906565),o=q(16747039),s=q(15036442),c=q(1447965),l=q(16777215);return xv(e,()=>{r(0,.75,0,1,.78,1.25,i,1),r(0,1.12,-1.15,.3,.3,.46,i,1),r(.9,.86,-.1,.2,.45,.7,a,1),r(-.9,.86,-.1,.2,.45,.7,a,1),r(0,1.75,.7,.62,.6,.62,i,1),n(0,1.62,1.4,.3,.09,.3,o),n(0,1.5,1.36,.26,.05,.24,s),r(.32,1.9,1.08,.1,.11,.08,c,0),r(-.32,1.9,1.08,.1,.11,.08,c,0),r(.34,1.94,1.14,.035,.035,.03,l,0),r(-.3,1.94,1.14,.035,.035,.03,l,0)})}function Av(e,t){let{bx:n,bm:r,bl:i}=Ev(e,t),a=q(13161182),o=q(9345448),s=q(5068387),c=q(7108228),l=q(8120575),u=q(8257456),d=q(16770140),f=[q(16770140),q(8257456),q(16743129)];return xv(e,()=>{e.cone(0,0,0,1*t,.32*t,14,0,o,a),e.coneDown(0,0,0,1*t,.3*t,14,0,c,s),i(0,.3,0,.46,.34,.46,l,1);for(let e=0;e<14;e++){let t=e/14*Y_;n(Math.cos(t)*.97,0,Math.sin(t)*.97,.07,.06,.07,f[e%3])}n(0,-.32,0,.26,.04,.26,u),r([0,.6,0],[0,.95,0],.04,o),i(0,.98,0,.07,.07,.07,d,0)})}function jv(e,t){let{bx:n,bm:r}=Ev(e,t),i=q(16250094),a=q(2369068),o=q(16033460),s=q(15260864),c=q(2763826);return xv(e,()=>{n(0,.78,0,.3,.28,.55,i),n(0,.9,.15,.31,.14,.2,a),n(0,.7,-.3,.31,.12,.15,a),n(0,1,.72,.17,.17,.2,i),n(0,.93,.95,.13,.1,.06,o),n(.12,1.2,.7,.025,.06,.025,s),n(-.12,1.2,.7,.025,.06,.025,s),n(.21,1.08,.68,.07,.03,.05,i),n(-.21,1.08,.68,.07,.03,.05,i);for(let[e,t]of[[.2,.4],[-.2,.4],[.2,-.4],[-.2,-.4]])n(e,.25,t,.065,.25,.065,i),n(e,.03,t,.07,.03,.07,c);n(0,.45,-.3,.09,.07,.1,o),r([0,1,-.55],[0,.6,-.65],.04,i)})}function Mv(e,t){let{bx:n,bl:r}=Ev(e,t),i=q(16186111),a=q(2303534),o=q(14694970),s=q(2106154),c=q(16747039);return xv(e,()=>{r(0,.4,0,.42,.4,.42,i,1),r(0,1,0,.3,.3,.3,i,1),n(0,1.32,0,.26,.03,.26,a),n(0,1.5,0,.16,.17,.16,a),n(0,1.18,0,.26,.04,.26,o),n(0,1.02,.3,.04,.04,.12,c),n(.08,1.07,.27,.025,.025,.02,s),n(-.08,1.07,.27,.025,.025,.02,s)})}function Nv(e){let t=e===`flake`?32:128,n=new Uint8Array(t*t*4),r=[[-.09,.07,.07],[.1,-.08,.09],[-.06,-.13,.05],[.12,.1,.04],[0,.02,.05]];for(let i=0;i<t;i++)for(let a=0;a<t;a++){let o=(a+.5)/t*2-1,s=(i+.5)/t*2-1,c=Math.hypot(o,s),l=255,u=255,d=255,f=0;if(e===`flake`)f=1-Q_(.25,1,c);else if(e===`sun`){let e=1-Q_(.16,.21,c);f=X_(e+(Math.exp(-c*c*7)*.55+Math.exp(-c*c*38)*.4),0,1)*(1-Q_(.8,1,c)),u=252,d=235+20*(1-e)}else{let e=1-Q_(.26,.285,c);f=X_(e+Math.exp(-(c-.27)*9)*.35*(1-e)*(c>.27)*(1-Q_(.7,1,c)),0,1);let t=1;for(let e of r){let n=Math.hypot(o-e[0],s-e[1]);t-=.16*(1-Q_(e[2]*.7,e[2],n))}l=238*t,u=242*t,d=255*t,e<.5&&(l=200,u=215,d=255)}let p=(i*t+a)*4;n[p]=l,n[p+1]=u,n[p+2]=d,n[p+3]=Math.round(X_(f,0,1)*255)}let i=new hi(n,t,t,M);return i.colorSpace=Je,i.magFilter=h,i.minFilter=h,i.generateMipmaps=!1,i.needsUpdate=!0,i}var Pv=1e3;function Fv(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=1024,e.height=512;let t=e.getContext(`2d`);if(!t)return null;let n=`#17345c`,r=(e,r,i,a,o)=>{let s=Pv,c=t.createLinearGradient(0,e,0,e+256);c.addColorStop(0,i),c.addColorStop(1,a),t.fillStyle=o,t.fillRect(0,e,s,256),t.fillStyle=c,t.fillRect(10,e+10,980,236),t.save(),t.beginPath(),t.rect(10,e+10,980,22),t.rect(10,e+256-10-22,980,22),t.clip(),t.fillStyle=`rgba(255,255,255,0.85)`;for(let n=-40;n<1040;n+=64)t.beginPath(),t.moveTo(n,e),t.lineTo(n+32,e),t.lineTo(n+8,e+256),t.lineTo(n-24,e+256),t.fill();t.restore(),t.textAlign=`center`,t.textBaseline=`middle`,t.lineJoin=`round`,t.miterLimit=2;let l=`"Arial Black", Impact, "Segoe UI Black", system-ui, sans-serif`;t.font=`900 100px ${l}`;let u=t.measureText(r).width||1,d=Math.min(167.4,91e3/u);t.font=`900 ${d}px ${l}`;let f=e+128+d*.04;t.lineWidth=d*.2,t.strokeStyle=n,t.strokeText(r,s/2,f+d*.06),t.fillStyle=n,t.fillText(r,s/2,f+d*.06),t.strokeText(r,s/2,f),t.fillStyle=`#ffffff`,t.fillText(r,s/2,f)};r(0,`ÇIĞ!`,`#ff9a3d`,`#ff6a1a`,`#2f7dff`),r(256,`HOŞ GELDİNİZ`,`#3d8bff`,`#1d55b8`,`#ff7a2f`),t.fillStyle=`#ffffff`,t.fillRect(Pv,0,24,512);let i=new Li(e);return i.colorSpace=Je,i.anisotropy=4,i}var Iv=class{constructor(e,{world:t,lib:n,theme:r,seed:i,onEgg:a,eggs:o,hour:s}={}){this.scene=e,this.world=t,this.lib=n||{},this.theme=r||$_[0],this.group=new bn,this.group.name=`scenery`,e.add(this.group),this.t=0,this.disposed=!1,this.ballState={x:0,d:0,y:0,r:1},this.onEgg=typeof a==`function`?a:null,this.eggFound=new Set,this.eggOpts={force:o===!0||o===`all`?[`nasreddin`,`ufo`,`yeti3am`]:Array.isArray(o)?o:[],hour:Number.isFinite(s)?s:new Date().getHours()},this.eggs={};let c=t,l=c.statics.length?c.statics[c.statics.length>>1]:null;this.seed=(i??c.L*131+c.townStart*17+c.statics.length*7919+Math.round((l?l.x:0)*1e3)|0)>>>0,this.sd=this.seed%9973,this.rng=ff(this.seed),this.pal={orange:new H(16742959),blue:new H(3112447),white:new H(16777215),ink:new H(1520732),stone:new H(8357780),snow:new H(16054527),dark:new H(3818063),red:new H(15223354),wood:new H(11037242)},this.applyAtmosphere(),this.buildLights(),this.buildSky(),this.buildSnow(),this.buildClouds(),this.buildRidges(),this.planGates(),this.planLake(),this.buildDecor(),this.buildBanners(),this.buildFlags(),this.buildChairs(),this.buildBirds(),this.buildEggs(),this.computeInfo()}applyAtmosphere(){let e=this.theme,t=this.scene;t.fog&&t.fog.color.set(e.fog),t.background&&t.background.isColor?t.background.set(e.fog):t.background=new H(e.fog)}buildLights(){let e=this.theme;this.hemi=new Xo(e.hemiSky,e.hemiGround,e.hemiIntensity),this.sun=new ds(e.sunColor,e.sunIntensity),this.sun.position.set(e.sunDir[0],e.sunDir[1],e.sunDir[2]).normalize().multiplyScalar(100),this.group.add(this.hemi,this.sun)}buildSky(){let e=this.theme,t=1e3;this.sky=new bn,this.sky.name=`sky`,this.group.add(this.sky);let n=new H(e.skyTop),r=new H(e.skyMid),i=new H(e.horizon),a=new H(e.discGlow),o=new B(e.discDir[0],e.discDir[1],e.discDir[2]).normalize(),s=new mv(4096),c=[],l=[];for(let s=0;s<=18;s++){let u=s/18*Math.PI;for(let s=0;s<=36;s++){let d=s/36*Y_,f=Math.sin(u)*Math.cos(d),p=Math.cos(u),m=Math.sin(u)*Math.sin(d),h=new H;p>.3?h.copy(r).lerp(n,X_((p-.3)/.65,0,1)):h.copy(i).lerp(r,Q_(0,.3,p));let g=Math.max(0,f*o.x+p*o.y+m*o.z),_=e.glow*(g**5*.35+g**36*.5);h.r=Math.min(1,h.r+a.r*_),h.g=Math.min(1,h.g+a.g*_),h.b=Math.min(1,h.b+a.b*_),c.push(h),l.push(f*t,p*t,m*t)}}for(let e=0;e<18;e++)for(let t=0;t<36;t++){let n=e*37+t,r=n+1,i=n+36+1,a=i+1,o=e=>[l[e*3],l[e*3+1],l[e*3+2]],u=o(n),d=o(r),f=o(i),p=o(a);e>0&&s.triOut(u[0],u[1],u[2],d[0],d[1],d[2],f[0],f[1],f[2],0,0,0,c[n],c[r],c[i]),e<17&&s.triOut(d[0],d[1],d[2],p[0],p[1],p[2],f[0],f[1],f[2],0,0,0,c[r],c[a],c[i])}let u=new H(e.rock).lerp(i,.38),d=new H(e.snow),f=ff(this.seed^49734321),p=(e,t,n,r,a,o)=>{let c=new H().copy(i).lerp(u,a),l=new H().copy(c).lerp(d,o),p=(e,n)=>[t*Math.sin(e),n,-t*Math.cos(e)];for(let t=0;t<e;t++){let i=(t+f.range(-.25,.25))/e*Y_,a=Y_/e*f.range(.9,1.6),o=f.range(n,r)*(.55+.9*av(i*2.2,3.3,this.sd)),u=p(i-a/2,-170),d=p(i+a/2,-170),m=p(i+f.range(-.2,.2)*a,o);s.triOut(u[0],u[1],u[2],m[0],m[1],m[2],d[0],d[1],d[2],0,0,0,c,l,c)}};p(44,975,70,140,.35,.7),p(34,935,40,100,.65,.55);let m=new fi(s.build(!1),new ei({vertexColors:!0,side:1,fog:!1,depthWrite:!1,depthTest:!1}));if(m.frustumCulled=!1,m.renderOrder=-1e3,this.sky.add(m),e.disc){let t=new qr(new Nr({map:Nv(e.disc),color:e.discColor,transparent:!0,depthWrite:!1,fog:!1,blending:e.disc===`sun`?2:1}));t.position.copy(o).multiplyScalar(900),t.scale.setScalar(e.discSize*1.8),t.renderOrder=-900,t.frustumCulled=!1,this.sky.add(t)}if(e.stars){let e=new Float32Array(1560),t=new Float32Array(1560);this.starBase=new Float32Array(1560),this.starPh=new Float32Array(520);let n=ff(this.seed^333175);for(let r=0;r<520;r++){let i,a,o,s;if(r%5<3){let e=n.range(.05,.42),t=n.next()*Y_;i=Math.cos(e)*Math.sin(t),a=Math.sin(e),o=-Math.cos(e)*Math.cos(t),s=1}else do i=n.next()*2-1,a=n.next()*2-1,o=n.next()*2-1,s=Math.hypot(i,a,o);while(s>1||s<.2||a/s<.06);e[r*3]=i/s*960,e[r*3+1]=a/s*960,e[r*3+2]=o/s*960;let c=.5+.5*n.next()**2,l=n.next();this.starBase[r*3]=c*(.82+.18*l),this.starBase[r*3+1]=c*(.88+.08*l),this.starBase[r*3+2]=c,t[r*3]=this.starBase[r*3],t[r*3+1]=this.starBase[r*3+1],t[r*3+2]=this.starBase[r*3+2],this.starPh[r]=n.next()*Y_}let r=new Cr;r.setAttribute(`position`,new cr(e,3)),this.starColor=new cr(t,3),r.setAttribute(`color`,this.starColor);let i=new ki({size:2.8,sizeAttenuation:!1,vertexColors:!0,map:Nv(`flake`),transparent:!0,depthWrite:!1,fog:!1,blending:2});this.stars=new Pi(r,i),this.stars.frustumCulled=!1,this.stars.renderOrder=-800,this.sky.add(this.stars),this.starCursor=0}if(e.aurora){this.auroraDefs=[{R:720,az:-.4,span:1.2,y0:60,h:200,ph:0},{R:830,az:.42,span:1,y0:85,h:170,ph:2.3}];let e=this.auroraDefs.length*44*3,t=new Float32Array(e*3),n=new Float32Array(e*4),r=[];for(let e=0;e<this.auroraDefs.length;e++)for(let t=0;t<43;t++)for(let n=0;n<2;n++){let i=(e*44+t)*3+n,a=(e*44+t+1)*3+n;r.push(i,a,a+1,i,a+1,i+1)}let i=new Cr;this.auroraPos=new cr(t,3),this.auroraCol=new cr(n,4),i.setAttribute(`position`,this.auroraPos),i.setAttribute(`color`,this.auroraCol),i.setIndex(r);let a=new ei({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,fog:!1,blending:2});this.aurora=new fi(i,a),this.aurora.frustumCulled=!1,this.aurora.renderOrder=-850,this.aurora.userData.cols=44,this.aurora.userData.rows=3,this.sky.add(this.aurora),this.updateAurora(0)}}updateAurora(e){let t=this.aurora.userData,n=t.cols,r=t.rows,i=this.auroraPos.array,a=this.auroraCol.array,o=0;for(let t=0;t<this.auroraDefs.length;t++){let s=this.auroraDefs[t];for(let t=0;t<n;t++){let c=t/(n-1),l=Math.sin(e*.45+c*6+s.ph)*.5+Math.sin(e*.8+c*13+s.ph*2)*.25,u=s.R+l*70,d=s.az+(c-.5)*s.span+Math.sin(e*.2+s.ph)*.05,f=u*Math.sin(d),p=-u*Math.cos(d),m=s.y0+18*Math.sin(e*.55+c*4+s.ph),h=s.h*(.72+.28*Math.sin(e*.38+c*7+s.ph)),g=.55+.45*Math.sin(e*.7+c*9+s.ph*1.7),_=Math.min(1,c*6,(1-c)*6);for(let e=0;e<r;e++){let t=e/(r-1),n=o*3,s=o*4;i[n]=f+l*30*t,i[n+1]=m+h*t,i[n+2]=p,a[s]=Z_(.15,.55,t),a[s+1]=Z_(1,.45,t*t),a[s+2]=Z_(.45,1,t),a[s+3]=(e===0?.5:e===1?.3:0)*g*_,o++}}}this.auroraPos.needsUpdate=!0,this.auroraCol.needsUpdate=!0}buildSnow(){let e=this.theme;if(e.snowfall<=.01)return;this.snowN=Math.floor(Z_(240,800,X_(e.snowfall,0,1)));let t=ff(this.seed^368881),n=new Float32Array(2400);this.snowPh=new Float32Array(800),this.snowSp=new Float32Array(800);for(let e=0;e<800;e++)n[e*3]=t.range(-36,36),n[e*3+1]=t.range(-24,24),n[e*3+2]=t.range(-105,15),this.snowPh[e]=t.next()*Y_,this.snowSp[e]=.7+.6*t.next();let r=new Cr;this.snowPos=new cr(n,3),this.snowPos.setUsage(et),r.setAttribute(`position`,this.snowPos),r.setDrawRange(0,this.snowN);let i=new ki({size:.6,sizeAttenuation:!0,color:e.id===`night`?14477567:16777215,map:Nv(`flake`),transparent:!0,opacity:.55+.4*e.snowfall,depthWrite:!1,fog:!1});this.snow=new Pi(r,i),this.snow.frustumCulled=!1,this.snow.renderOrder=10,this.group.add(this.snow),this.snowK=1,this.snowInit=!1,this.lcx=0,this.lcy=0,this.lcz=0}updateSnow(e,t,n){let r=this.theme,i=t.position;this.snowInit||(this.lcx=i.x,this.lcy=i.y,this.lcz=i.z,this.snowInit=!0);let a=i.x-this.lcx,o=i.y-this.lcy,s=i.z-this.lcz;this.lcx=i.x,this.lcy=i.y,this.lcz=i.z,this.snow.position.copy(i),this.snowK+=(X_(1+n.r*.17,1,3.4)-this.snowK)*Math.min(1,e*2);let c=this.snowK;this.snow.material.size=.6*c;let l=36*c,u=24*c,d=60*c,f=45*c,p=this.snowPos.array,m=this.snowPh,h=this.snowSp,g=r.snowSpeed*c,_=r.windX*c,v=this.t,y=this.snowN,b=2*l,x=2*u,S=2*d;for(let t=0;t<y;t++){let n=t*3,r=m[t],i=p[n]-a+(_+Math.sin(v*.9+r)*.9*c)*e,y=p[n+1]-o-g*h[t]*e,C=p[n+2]-s+Math.cos(v*.7+r)*.6*c*e+f;(i<-l||i>l)&&(i=((i+l)%b+b)%b-l),(y<-u||y>u)&&(y=((y+u)%x+x)%x-u),(C<-d||C>d)&&(C=((C+d)%S+S)%S-d),p[n]=i,p[n+1]=y,p[n+2]=C-f}this.snowPos.needsUpdate=!0}buildClouds(){let e=this.theme;if(e.clouds<.05)return;let t=new mv(512),n=new uo(1,0),r=n.attributes.position.array,i=[[0,0,0,1],[.95,-.12,.1,.75],[-.95,-.1,-.1,.72],[1.7,-.28,0,.5],[-1.65,-.3,.1,.48],[.35,.5,0,.7],[-.45,.32,.25,.55]],a=new H(1,1,1),o=new H(.9,.93,1),s=new H(.74,.8,.93);for(let[e,n,c,l]of i)for(let i=0;i<r.length;i+=9){let u=[r[i]*l+e,r[i+1]*l*.62+n,r[i+2]*l*.85+c],d=[r[i+3]*l+e,r[i+4]*l*.62+n,r[i+5]*l*.85+c],f=[r[i+6]*l+e,r[i+7]*l*.62+n,r[i+8]*l*.85+c],p=(u[1]+d[1]+f[1])/3-n,m=p>.22*l?a:p>-.2*l?o:s;t.triOut(u[0],u[1],u[2],d[0],d[1],d[2],f[0],f[1],f[2],e,n,c,m)}n.dispose();let c=t.build(!1),l=new ei({vertexColors:!0,fog:!1}),u=Math.round(6+18*e.clouds);this.cloudN=u,this.clouds=new wi(c,l,u),this.clouds.instanceMatrix.setUsage(et),this.clouds.frustumCulled=!1;let d=new H(e.cloudColor);this.cloudD=new Float32Array(u),this.cloudX=new Float32Array(u),this.cloudH=new Float32Array(u),this.cloudS=new Float32Array(u),this.cloudYaw=new Float32Array(u),this.cloudV=new Float32Array(u);let f=ff(this.seed^49421);for(let e=0;e<u;e++)this.respawnCloud(e,f,0,!0),this.clouds.setColorAt(e,d);this.cloudRng=f,this.group.add(this.clouds)}respawnCloud(e,t,n,r){let i=t.range(-520,520);this.cloudX[e]=i,this.cloudD[e]=n+(r?t.range(160,1100):t.range(800,1250)),this.cloudH[e]=Math.abs(i)<190?t.range(200,310):t.range(90,270),this.cloudS[e]=t.range(15,36),this.cloudYaw[e]=t.range(0,Y_),this.cloudV[e]=t.range(1.5,4.5)}updateClouds(e,t){let n=this.world,r=this.cloudN;for(let i=0;i<r;i++){this.cloudX[i]+=this.cloudV[i]*e,this.cloudX[i]>560&&(this.cloudX[i]=-560),this.cloudD[i]<t.d-90&&this.respawnCloud(i,this.cloudRng,t.d,!1);let r=this.cloudD[i],a=this.cloudS[i];uv.set(this.cloudX[i],n.baseY(r)+this.cloudH[i],-r),lv.setFromAxisAngle(pv,this.cloudYaw[i]),dv.set(a*1.3,a,a*1),cv.compose(uv,lv,dv),this.clouds.setMatrixAt(i,cv)}this.clouds.instanceMatrix.needsUpdate=!0}ridgeH(e,t,n=!1){let r=this.world,i=this.sd,a=r.dEnd,o=t<-70?-70:t>a?a:t,s=t<-70?-70-t:t>a?t-a:0,c=Math.abs(e),l;if(c<=100)l=r.groundY(e,o);else{let t=e<0?0:1,n=r.baseY(o),a=r.groundY(t?100:-100,o)-n,s=a+55+120*ov(o*.0052+t*31.7,i+t*5),u=200+70*ov(o*.0041+9.3+t*17.1,i+3),d;if(c<=u){let e=(c-100)/(u-100);d=a+(s-a)*e*(1.7-.7*e)}else{let e=X_((c-u)/(440-u),0,1);d=s*(1-.74*e*e*(3-2*e))}let f=Q_(100,175,c);d+=f*(62*sv(av(c*.045+t*50,o*.036,i+9))+26*sv(av(c*.1+3,o*.085,i+21))-44);let p=a*.85+(c-100)*.15;d<p&&(d=p),l=n+d}if(s>0){let n=t<0?0:1,r=Q_(110,330,s)*(1-.65*Q_(330,480,s)),a=av(e*.011+n*7.1,s*.011,i+31),o=1-.35*Q_(250,430,c),u=(sv(av(e*.04+5,s*.04+n*11,i+41))-.5)*90;l+=Math.max(0,r*((105+160*a)*o+u))}return c<=80.01&&(n&&t>-69.99&&t<a-.01?l-=3:l-=.5*(1-Q_(0,32,s))),l}surfaceY(e,t){let n=this.world;return Math.abs(e)<=100&&t>=-70&&t<=n.dEnd?n.groundY(e,t):this.ridgeH(e,t,!1)}buildRidges(){let e=this.world,t=this.theme,n=e.dEnd,r=new mv(32768);new H(t.rock);let i=new H(t.rock).multiplyScalar(.7),a=new H(t.rock).lerp(new H(16777215),.22),o=new H(t.snow),s=new H(t.snow).lerp(new H(t.horizon),.28),c=new H(t.horizon),l=this.sd,u=new H,d=(t,r,l,d,f)=>{let p=Math.abs(r),m=l-e.baseY(X_(d,-70,n)),h=1.3*(1-Q_(80,160,p));return(t-.45)*2.4+(m-150)/130+h+(f-.5)*.6>0?u.copy(o).lerp(s,f*.5):u.copy(i).lerp(a,X_(.2+t*.7+f*.4,0,1)),u.lerp(c,Q_(180,440,p)*.4),u},f=(e,t,n)=>{let i=e.length,a=t.length,o=new Float32Array(i*a);for(let r=0;r<a;r++)for(let a=0;a<i;a++)o[r*i+a]=this.ridgeH(e[a],t[r],n);let s=new H,c=(e,t,n,i,a,o,c,u,f)=>{let p=-n,m=-o,h=-f,g=(a-t)*(h-p)-(m-p)*(u-t),_=(m-p)*(c-e)-(i-e)*(h-p),v=(i-e)*(u-t)-(a-t)*(c-e),y=Math.hypot(g,_,v)||1,b=iv(Math.round((e+i+c)*3),Math.round((n+o+f)*3),l),x=d(_/y,(e+i+c)/3,(t+a+u)/3,(n+o+f)/3,b);s.copy(x),r.tri(e,t,p,i,a,m,c,u,h,s)};for(let n=0;n<a-1;n++)for(let r=0;r<i-1;r++){let a=e[r],s=e[r+1],l=t[n],u=t[n+1],d=o[n*i+r],f=o[n*i+r+1],p=o[(n+1)*i+r],m=o[(n+1)*i+r+1];n+r&1?(c(a,d,l,s,f,l,s,m,u),c(a,d,l,s,m,u,a,p,u)):(c(a,d,l,s,f,l,a,p,u),c(s,f,l,s,m,u,a,p,u))}},p=[80,90,100,118,140,168,200,236,276,322,374,430],m=p.map(e=>-e).reverse(),h=[-80,-60,-40,-20,0,20,40,60,80],g=[];for(let e=-70;e<n;e+=14)g.push(e);g.push(n),f(m,g,!1),f(p,g,!1);let _=[];for(let e=16;e<=480;e+=16)_.push(e);let v=[n,..._.map(e=>n+e)];f(h,[n-6,...v],!0),f(m,v,!1),f(p,v,!1);let y=[..._.map(e=>-70-e).reverse(),-70];f(h,[...y,-64],!0),f(m,y,!1),f(p,y,!1);let b=r.build(!0),x=new Do({vertexColors:!0,flatShading:!0});this.ridges=new fi(b,x),this.ridges.frustumCulled=!1,this.group.add(this.ridges)}planGates(){let e=this.world,t=(t,n,r,i,a)=>{let o=e.halfWidth(n),s=o+r,c=e.baseY(n),l=c+33.5;return{kind:t,d:n,inner:s,postW:3.4,depth:3.2,hw:o,base:c,bannerW:s*2,bannerH:i,bannerBottom:l,bannerTop:l+i,beamBottomY:c+32.6,topBeamTop:l+i+2.4,postTop:l+i+4.2,band:a}},n=t(`start`,-4,2.2,8,0),r=t(`arch`,e.townStart-10,8,16,1);this.gates=[n,r]}gateGeo(e,t){let n=this.world,r=this.pal;for(let i of[-1,1]){let a=i*(t.inner+t.postW/2),o=n.groundY(a,t.d)-1.3,s=i<0?r.orange:r.blue;e.box(a,o+1.7,-t.d,t.postW/2+.9,1.7,t.depth/2+.9,0,r.stone),e.box(a,o+3.5,-t.d,t.postW/2+1,.2,t.depth/2+1,0,r.snow);let c=o+3.4,l=t.postTop-1.6,u=Math.max(2,Math.round((l-c)/4)),d=(l-c)/u;for(let n=0;n<u;n++)e.box(a,c+d*(n+.5),-t.d,t.postW/2,d/2,t.depth/2,0,n&1?r.white:s);e.box(a,t.postTop-.8,-t.d,t.postW/2+.6,.8,t.depth/2+.6,0,r.ink),e.box(a,t.postTop+.15,-t.d,t.postW/2+.7,.2,t.depth/2+.7,0,r.snow)}}beamGeo(e,t){let n=this.pal,r=t.inner+t.postW;e.box(0,t.beamBottomY+.45,-t.d,r,.45,1.1,0,n.ink),e.box(0,t.topBeamTop-1.2,-t.d,r,1.2,1.3,0,n.ink),e.box(0,t.topBeamTop+.1,-t.d,r,.2,1.4,0,n.snow),e.box(0,t.beamBottomY+1,-t.d,r-.3,.12,1.2,0,t.kind===`start`?n.orange:n.blue);for(let r of[-1,1])e.box(r*t.inner,(t.bannerBottom+t.bannerTop)/2,-t.d,.4,t.bannerH/2+.2,.9,0,n.ink)}buildBanners(){let e=Fv();this.bannerTex=e;let t=new mv(1024),n=[],r=Pv/1024,i=this.pal;for(let a of this.gates){let o=t.n;this.beamGeo(t,a);for(let e=t.n-o;e>0;e--)n.push(.98828125,.5);let s=-a.inner,c=a.inner,l=a.bannerBottom,u=a.bannerTop,d=a.band===0?.5:0,f=d+.5,p=-a.d+.75,m=-a.d-.75,h=e?i.white:a.kind===`start`?i.orange:i.blue,g=[[s,l,p,0,d],[c,l,p,r,d],[c,u,p,r,f],[s,u,p,0,f]],_=[[c,l,m,0,d],[s,l,m,r,d],[s,u,m,r,f],[c,u,m,0,f]];for(let e of[g,_])for(let r of[0,1,2,0,2,3])t.grow(1),t.vert(e[r][0],e[r][1],e[r][2],h),n.push(e[r][3],e[r][4])}let a=t.build(!0);a.setAttribute(`uv`,new dr(n,2));let o=new Do({vertexColors:!0,map:e||null,emissive:2500134,transparent:!0,opacity:1});this.banners=new fi(a,o),this.banners.frustumCulled=!1,this.group.add(this.banners)}updateGates(e){let t=1,n=e.position;for(let e of this.gates){let r=Math.abs(n.z+e.d);n.y>e.beamBottomY-22&&n.y<e.postTop+22&&(t=Math.min(t,Q_(16,52,r)))}let r=this.banners.material;Math.abs(r.opacity-t)>.004&&(r.opacity=t),this.banners.visible=t>.02}footprint(e,t,n,r,i){let a=Math.cos(n),o=Math.sin(n),s=1/0,c=-1/0;for(let n=-1;n<=1;n++)for(let l=-1;l<=1;l++){let u=n*r,d=l*i,f=e+u*a+d*o,p=-t+(-u*o+d*a),m=this.surfaceY(f,-p);m<s&&(s=m),m>c&&(c=m)}return{min:s,max:c}}clearOfStatics(e,t,n){let r=this.world,i=n+9,a=r.statics,o=r.lowerBound(t-i);for(;o<a.length;o++){let r=a[o];if(r.d>t+i)break;if(r.alive&&Math.hypot(r.x-e,r.d-t)<r.r*.7+n)return!1}return!0}findSpot(e,t,n,r,i){let a=this.world,o=this.rng,s=6.5+t,c=s+24,l=null,u=1e9;for(let d=0;d<i;d++){let i=o.sign(),d=e+o.range(-24,24),f=i*(a.halfWidth(d)+o.range(s,c));if(Math.abs(f)>96-t*.3)continue;let p=-i*Math.PI/2+o.range(-.22,.22),m=this.footprint(f,d,p,n,r);if(!this.clearOfStatics(f,d,t))continue;let h=m.max-m.min;h<u&&(u=h,l={x:f,d,ang:p,side:i,min:m.min,max:m.max})}return l}buildDecor(){let e=this.world,t=this.lib,n=this.rng,r=this.pal,i=e.L,a=e.dEnd,o=[],s=(e,t)=>o.push({d:e,fn:t});for(let e of this.gates)s(e.d,t=>this.gateGeo(t,e));s(this.lake.d,e=>this.lakeGeo(e));let c=r.stone,l=new H(9080728),u=(e,t,r,a,o,c,l,u,d,f,p,m)=>{if(e)for(let h=r+t*.5;h<a;h+=t*n.range(.8,1.2)){let t=Z_(o,c,X_(h/i,0,1)),r=this.findSpot(h,m*t,l*t,u*t,14);if(!r)continue;let a=[n.range(.88,1.12),n.range(.9,1.08),n.range(.85,1.12)],g=r.min+(r.max-r.min)*.25-.05,_=r.min-.8;s(r.d,n=>{uv.set(r.x,g,-r.d),lv.setFromAxisAngle(pv,r.ang),dv.setScalar(t),cv.compose(uv,lv,dv),n.geo(e.geometry,cv,a);let i=g+.25*t;n.box(r.x,(_+i)/2,-r.d,d*t,(i-_)/2,f*t,r.ang,p)})}};u(t.cabin,78,50,e.townEnd+50,.95,1.9,5.3,4.8,4.2,3.7,c,6.2),u(t.kiosk,130,85,e.townEnd+40,1.2,2.2,2.2,2.1,1.8,1.6,l,3.8);let d=6+Math.round(i/220);for(let t=0;t<d;t++){let t=n.range(70,e.townEnd),a=n.sign(),o=n.range(7.5,11),c=Z_(1.3,2.8,X_(t/i,0,1)),l=n.int(4,7),u=2*c,d=[],f=!0;for(let n=0;n<=l;n++){let r=t+n*u,i=a*(e.halfWidth(r)+o);if(!this.clearOfStatics(i,r,1.4)){f=!1;break}d.push([i,this.surfaceY(i,r)-.15,-r])}f&&s(t+l*u*.5,e=>{let t=new H(11893055),n=new H(9067054);for(let i=0;i<=l;i++){let a=d[i];if(e.box(a[0],a[1]+.5*c,a[2],.07*c,.5*c,.07*c,0,n),e.box(a[0],a[1]+1.04*c,a[2],.1*c,.04*c,.1*c,0,r.white),i<l){let n=d[i+1];for(let r of[.35,.72])e.beam(a[0],a[1]+r*c,a[2],n[0],n[1]+r*c,n[2],.1*c,t);e.beam(a[0],a[1]+.8*c,a[2],n[0],n[1]+.8*c,n[2],.05*c,r.white)}}})}let f=[new H(1802312),new H(2200917),new H(2730594),new H(1536063)],p=new H(15135227);for(let t of[-1,1])for(let r=-45;r<a+40;r+=n.range(8,15)){let a=n.int(1,2);for(let o=0;o<a;o++){let a=r+n.range(-5,5),o=e.halfWidth(a),c=t*Math.min(o+n.range(40,78),99),l=n.range(1,2.3)*(1+.5*X_(a/i,0,1)),u=f[n.int(0,f.length-1)],d=Math.min(this.surfaceY(c-1.5*l,a),this.surfaceY(c+1.5*l,a),this.surfaceY(c,a-1.5*l),this.surfaceY(c,a+1.5*l))-.1,m=n.next()*3;s(a,e=>{let t=-a;e.cone(c,d+.2*l,t,1.7*l,2.5*l,5,m,u,p),e.cone(c,d+1.5*l,t,1.25*l,2.2*l,5,m+.4,u,p),e.cone(c,d+2.6*l,t,.85*l,1.9*l,5,m+.8,u,p)})}}this.planLift(s),o.sort((e,t)=>e.d-t.d);let m=new mv(65536),h=o.length;this.decorD=new Float32Array(h),this.decorV=new Uint32Array(h+1);for(let e=0;e<h;e++)this.decorD[e]=o[e].d,this.decorV[e]=m.n,o[e].fn(m);this.decorV[h]=m.n;let g=m.build(!0),_=new Do({vertexColors:!0,flatShading:!0});this.decor=new fi(g,_),this.decor.frustumCulled=!1,this.group.add(this.decor),this.decorWin0=-1,this.decorWin1=-1,this.updateDecorWindow({d:0,r:1})}lowerBoundD(e){let t=this.decorD,n=0,r=t.length;for(;n<r;){let i=n+r>>1;t[i]<e?n=i+1:r=i}return n}updateDecorWindow(e){let t=1+e.r*.4,n=this.lowerBoundD(e.d-110-7*e.r),r=this.lowerBoundD(e.d+340+14*e.r+t);if(n===this.decorWin0&&r===this.decorWin1)return;this.decorWin0=n,this.decorWin1=r;let i=this.decorV[n],a=this.decorV[r];this.decor.geometry.setDrawRange(i,a-i)}planLift(e){let t=this.world,n=this.rng,r=this.lib,i=this.pal,a=t.L;if(this.lift=null,!r.lift_pylon)return;let o=n.range(70,140),s=Math.min(a-30,o+560);if(s-o<160)return;let c=n.sign(),l=1.6,u=Math.round((s-o)/40),d=(s-o)/u,f=[],p=[],m=[],h=[];for(let e=0;e<=u;e++){let n=o+e*d,r=12,i=1e9;for(let e of[12,11,13,10.5,14]){let a=c*(t.halfWidth(n)+e),o=+!this.clearOfStatics(a,n,3.2);if(o<i&&(i=o,r=e,o===0))break}let a=c*(t.halfWidth(n)+r);f.push(a),p.push(n),m.push(Math.min(this.surfaceY(a-1.1*l,n),this.surfaceY(a+1.1*l,n),this.surfaceY(a,n-1*l),this.surfaceY(a,n+1*l))-.35)}for(let e=0;e<=u;e++){let t=Math.max(0,e-1),n=Math.min(u,e+1);h.push(Math.atan2(-(f[n]-f[t]),p[n]-p[t]))}let g=u*4+1,_=[new Float32Array(g),new Float32Array(g)],v=[new Float32Array(g),new Float32Array(g)],y=[new Float32Array(g),new Float32Array(g)];for(let e=0;e<2;e++){let t=(e===0?-c:c)*4.32,n=[];for(let e=0;e<=u;e++){let r=Math.cos(h[e]),i=Math.sin(h[e]);n.push([f[e]+t*r,m[e]+18.32,p[e]+t*i])}for(let t=0;t<u;t++)for(let r=0;r<4;r++){let i=r/4,a=t*4+r;_[e][a]=Z_(n[t][0],n[t+1][0],i),v[e][a]=Z_(n[t][1],n[t+1][1],i)-2.2*i*(1-i)*(d/40),y[e][a]=Z_(n[t][2],n[t+1][2],i)}let r=g-1;_[e][r]=n[u][0],v[e][r]=n[u][1],y[e][r]=n[u][2]}this.lift={side:c,d0:o,d1:s,spacing:d,nodes:g,SUB:4,cx:_,cy:v,cd:y,len:0,S:l},this.lift.len=y[0][g-1]-y[0][0];let b=new H(2896445);for(let t=0;t<=u;t++){let n=t===0||t===u;e(p[t],e=>{if(uv.set(f[t],m[t],-p[t]),lv.setFromAxisAngle(pv,h[t]),dv.setScalar(n?l*1.15:l),cv.compose(uv,lv,dv),e.geo(r.lift_pylon.geometry,cv,null),n){let n=5.6,r=4.8,a=6.2,o=p[t]+(t===0?-9:9),s=this.footprint(f[t],o,h[t],n,r),c=s.min+(s.max-s.min)*.3;e.box(f[t],(s.min-.9+c+.3)/2,-o,5.3999999999999995,(c+.3-s.min+.9)/2,4.6,h[t],i.stone),e.box(f[t],c+a/2,-o,n,a/2,r,h[t],i.wood),e.box(f[t],c+a+.5,-o,6.5,.5,5.7,h[t],i.red),e.box(f[t],c+a+1.15,-o,6.199999999999999,.2,5.3999999999999995,h[t],i.snow)}})}for(let t=0;t<u;t++)e(p[t]+d/2,e=>{for(let n=0;n<2;n++)for(let r=0;r<4;r++){let i=t*4+r;e.beam(_[n][i],v[n][i],-y[n][i],_[n][i+1],v[n][i+1],-y[n][i+1],.32,b)}})}buildChairs(){let e=this.lift;if(!e)return;let t=new mv(512),n=new H(2896445),r=new H(16777215);t.box(0,-1.05,0,.06,1.05,.06,0,n),t.box(0,-2.2,0,.85,.09,.5,0,r),t.box(0,-1.75,-.45,.85,.5,.07,0,r),t.box(0,-2.6,.5,.8,.04,.04,0,n),t.box(-.8,-2.4,.35,.04,.2,.04,0,n),t.box(.8,-2.4,.35,.04,.2,.04,0,n);let i=t.build(!0),a=new Do({vertexColors:!0,flatShading:!0}),o=Math.max(4,Math.floor(Math.abs(e.len)/34));this.chairPer=o,this.chairs=new wi(i,a,o*2),this.chairs.instanceMatrix.setUsage(et),this.chairs.frustumCulled=!1;let s=[new H(15223354),new H(3112447),new H(16751151),new H(16765503)];for(let e=0;e<o*2;e++)this.chairs.setColorAt(e,s[e%s.length]);this.group.add(this.chairs),this.updateChairs(0,{d:0})}updateChairs(e,t){let n=this.lift;if(!n)return;let r=t.d>n.d0-420&&t.d<n.d1+200;if(this.chairs.visible=r,!r)return;let i=Math.abs(n.len),a=this.chairPer,o=i/a,s=n.spacing/n.SUB,c=-n.side*Math.PI/2;for(let t=0;t<2;t++)for(let r=0;r<a;r++){let l=(r*o+5.5*e)%i,u=t===0?i-l:l,d=u/s,f=Math.floor(d);f>=n.nodes-1&&(f=n.nodes-2),f<0&&(f=0);let p=d-f,m=Z_(n.cx[t][f],n.cx[t][f+1],p),h=Z_(n.cy[t][f],n.cy[t][f+1],p)+.1*Math.sin(e*1.7+r*1.3+t),g=Z_(n.cd[t][f],n.cd[t][f+1],p),_=Math.min(u,i-u),v=n.S*Q_(0,9,_);uv.set(m,h,-g),fv.set(Math.sin(e*1.3+r)*.05,c,Math.sin(e*1.1+r*2+t)*.05,`YXZ`),lv.setFromEuler(fv),dv.setScalar(Math.max(.001,v)),cv.compose(uv,lv,dv),this.chairs.setMatrixAt(t*a+r,cv)}this.chairs.instanceMatrix.needsUpdate=!0}buildFlags(){let e=this.world,t=new mv(64),n=new H(1,1,1),r=new H(.9,.92,.95);t.box(0,2,0,.07,2,.07,0,r);let i=[2.1,3.5,0],a=[.07,3.95,0],o=[.07,3,0];t.tri(a[0],a[1],a[2],o[0],o[1],o[2],i[0],i[1],i[2],n),t.tri(a[0],a[1],a[2],i[0],i[1],i[2],o[0],o[1],o[2],n);let s=t.build(!0),c=new Do({vertexColors:!0,flatShading:!0}),l=[],u=0;for(let t=28;t<e.L+6;t+=21,u++){let n=u&1?1:-1,r=n*(e.halfWidth(t)+2.4),i=Z_(1.3,3.2,X_(t/e.L,0,1));l.push({x:r,y:this.surfaceY(r,t)-.1,d:t,s:i,side:n,col:u%3==0?16777215:u%3==1?16738858:3112447})}for(let e of this.gates)for(let t of[-1,1]){let n=t*(e.inner+e.postW/2);l.push({x:n,y:e.postTop+.3,d:e.d,s:e.kind===`arch`?6:4.5,side:t,col:t<0?16738858:3112447})}this.flagList=l,this.flags=new wi(s,c,l.length),this.flags.instanceMatrix.setUsage(et),this.flags.frustumCulled=!1;let d=new H;l.forEach((e,t)=>{this.flags.setColorAt(t,d.set(e.col))}),this.group.add(this.flags),this.updateFlags(0)}updateFlags(e){let t=this.flagList;for(let n=0;n<t.length;n++){let r=t[n],i=(r.side>0?0:Math.PI)+.42*Math.sin(e*3.1+n*1.7)*(r.side>0?1:-1)+.12*Math.sin(e*7.3+n);uv.set(r.x,r.y,-r.d),fv.set(0,i,.1*Math.sin(e*5.2+n*.9),`YXZ`),lv.setFromEuler(fv),dv.setScalar(r.s),cv.compose(uv,lv,dv),this.flags.setMatrixAt(n,cv)}this.flags.instanceMatrix.needsUpdate=!0}buildBirds(){if(!this.theme.birds)return;let e=new mv(16),t=new H(2898514),n=[0,0,.8],r=[0,0,-.55],i=[-2.4,.5,-.2],a=[2.4,.5,-.2];e.tri(n[0],n[1],n[2],i[0],i[1],i[2],r[0],r[1],r[2],t),e.tri(n[0],n[1],n[2],r[0],r[1],r[2],a[0],a[1],a[2],t);let o=e.build(!0),s=new ei({vertexColors:!0,side:2,fog:!1});this.birdN=9,this.birds=new wi(o,s,this.birdN),this.birds.instanceMatrix.setUsage(et),this.birds.frustumCulled=!1,this.birdC={x:0,d:0,y:0,ok:!1},this.birdRng=ff(this.seed^45357),this.group.add(this.birds)}updateBirds(e,t){if(!this.birds)return;let n=this.world,r=this.birdC,i=this.birdRng,a=1+t.r*.17;(!r.ok||r.d<t.d-90*a)&&(r.ok=!0,r.d=t.d+(250+i.next()*170)*a,r.x=(i.next()-.5)*120*a,r.y=n.baseY(X_(r.d,-70,n.dEnd+300))+(45+i.next()*40)*a);let o=48*a;for(let t=0;t<this.birdN;t++){let n=.24*e+t*.33,i=r.x+o*Math.cos(n)*(1+.06*t),s=r.d+o*Math.sin(n)*(1+.06*t),c=r.y+Math.sin(e*.7+t)*3*a,l=-Math.sin(n),u=-Math.cos(n);uv.set(i,c,-s),fv.set(0,Math.atan2(l,u),0,`YXZ`),lv.setFromEuler(fv);let d=.25+.75*Math.abs(Math.sin(e*5.5+t*1.9));dv.set(1.1*a,1.1*a*d,1.1*a),cv.compose(uv,lv,dv),this.birds.setMatrixAt(t,cv)}this.birds.instanceMatrix.needsUpdate=!0}planLake(){let e=this.world,t=ff(this.seed^6734),n=e.townEnd+70;this.lake={x:t.range(-5,5),d:n,rx:24,rd:20,y:e.baseY(n)+.2}}lakeGeo(e){let t=this.lake,n=new H(11856632),r=new H(9425898),i=new H(16054527),a=(n,r,i,a)=>{for(let o=0;o<30;o++){let s=o/30*Y_,c=(o+1)/30*Y_;e.triOut(t.x,r,-t.d,t.x+t.rx*n*Math.cos(s),r,-t.d+t.rd*n*Math.sin(s),t.x+t.rx*n*Math.cos(c),r,-t.d+t.rd*n*Math.sin(c),t.x,r-1,-t.d,i,a,a)}};a(1.16,t.y-.09,i,i),a(1,t.y,n,r)}fire(e){if(!this.eggFound.has(e)&&(this.eggFound.add(e),this.onEgg))try{this.onEgg(e)}catch{}}eggSpot(e,t,n,r,i,a,o){let s=this.world,c=null,l=1e9;for(let u=0;u<o;u++){let o=e.range(t,n),u=e.sign(),d=e.range(r,i),f=u*(s.halfWidth(o)+d),p=this.footprint(f,o,-u*Math.PI/2,a*.55,a*.55),m=p.max-p.min+(this.clearOfStatics(f,o,a)?0:50);m<l&&(l=m,c={x:f,d:o,side:u,off:d,min:p.min})}return c}buildEggs(){let e=this.world,t=this.lib,n=this.theme,r=this.eggOpts.force,i=new mv(8192),a=this.eggs,o=e.L;{let e=ff(this.seed^1397641047),t=this.eggSpot(e,o*.16,o*.3,7,8.6,2.6,24),n=t.side>0?1:-1,r=Ov(i,2.4,n),s=new Gt().compose(new B(t.x,t.min-.1,-t.d),new St().setFromAxisAngle(pv,-t.side*Math.PI/2),new B(1,1,1));a.snowman={id:`snowman`,x:t.x,d:t.d,root:s,body:r.body,arm:r.arm,px:r.px,py:r.py,armSign:n,wave:0,last:-9}}{let e=this.lake;a.duck={id:`duck`,x:e.x,d:e.d,y:e.y,part:kv(i,7),yaw0:.18}}if(r.includes(`nasreddin`)||ff(this.seed^20065).next()<.25){let t=ff(this.seed^1315009394),n=2.5,r=t.range(7.8,9.4),s=null,c=1e9;for(let n=0;n<40;n++){let n=t.range(o/3+4,o*2/3-48-4),i=t.sign(),a=0;for(let t=0;t<=4;t++){let o=n+48*t/4;this.clearOfStatics(i*(e.halfWidth(o)+r),o,3.2)||(a+=10)}a<c&&(c=a,s={d0:n,side:i})}let l=Dv(i,n);a.nasreddin={id:`nasreddin`,s:n,side:s.side,off:r,d0:s.d0,len:48,speed:1,gait:3.2,u0:t.range(0,96),psi:Math.PI,x:0,d:s.d0,body:l.body,legs:l.legs}}if(n.ufo||r.includes(`ufo`)){let e=ff(this.seed^5588559),t=this.eggSpot(e,o*.4,o*.62,12.5,14,3,12),n=Av(i,7),r=jv(i,2.2),s=Mv(i,1.9);a.ufo={id:`ufo`,x0:t.x,d0:t.d,x:t.x,d:t.d,gy0:this.surfaceY(t.x,t.d),S:7,saucer:n,cow:r,mini:s,off:e.range(0,28),ph:e.range(0,6)},this.makeBeam()}if(t.yeti&&(this.eggOpts.hour===3||r.includes(`yeti3am`))){vv.makeScale(3,3,3);let n=xv(i,()=>i.geo(t.yeti.geometry,vv,null));a.yeti3am={id:`yeti3am`,x:6,d:24,gy:e.groundY(6,24),part:n}}let s=i.build(!1);s.setAttribute(`normal`,new cr(new Float32Array(i.n*3),3)),this.actorPos=s.attributes.position,this.actorPos.setUsage(et),this.actorOut=this.actorPos.array,this.actors=new fi(s,new Do({vertexColors:!0,flatShading:!0})),this.actors.frustumCulled=!1,this.group.add(this.actors),Sv(this.actorOut,a.snowman.body,a.snowman.root),this.stepSnowman(a.snowman,0,0),this.stepDuck(a.duck,0),a.nasreddin&&this.stepNasreddin(a.nasreddin,0,0),a.ufo&&this.stepUfo(a.ufo,0),a.yeti3am&&this.stepYeti(a.yeti3am,0)}makeBeam(){let e=[],t=[],n=(n,r,i,a,o,s,c)=>{for(let l=0;l<16;l++){let u=l/16*Y_,d=(l+1)/16*Y_,f=Math.cos(u),p=Math.sin(u),m=Math.cos(d),h=Math.sin(d),g=[n*f,0,n*p],_=[n*m,0,n*h],v=[r*f,-1,r*p],y=[r*m,-1,r*h];for(let[n,r]of[[g,i],[v,a],[y,a],[g,i],[y,a],[_,i]])e.push(n[0],n[1],n[2]),t.push(o,s,c,r)}};n(2.2,7.5,.5,.12,.45,1,.6),n(.9,3.2,.45,.2,.75,1,.85);let r=new Cr;r.setAttribute(`position`,new dr(e,3)),r.setAttribute(`color`,new dr(t,4));let i=new ei({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2,fog:!1});this.beam=new fi(r,i),this.beam.frustumCulled=!1,this.beam.renderOrder=5,this.group.add(this.beam)}stepNasreddin(e,t,n){let r=this.world,i=2*e.len,a=(t*e.speed+e.u0)%i,o,s;a<e.len?(o=e.d0+a,s=Math.PI):(o=e.d0+i-a,s=0);let c=s-e.psi;c-=Math.round(c/Y_)*Y_,e.psi+=n>0?c*Math.min(1,n*2.5):c;let l=e.side*(r.halfWidth(o)+e.off),u=Math.sin(e.psi),d=Math.cos(e.psi),f=1.1*e.s,p=this.surfaceY(l+u*f,o-d*f),m=this.surfaceY(l-u*f,o+d*f);e.x=l,e.d=o;let h=t*e.gait,g=Math.abs(Math.sin(h))*.05*e.s;Cv(_v,l,(p+m)/2+g-.06*e.s,-o,u*2*f,p-m,d*2*f,1),vv.makeRotationZ(Math.sin(h*.5)*.04),yv.multiplyMatrices(_v,vv),Sv(this.actorOut,e.body,yv);for(let t=0;t<4;t++){let n=e.legs[t];wv(vv,Math.sin(h+n.ph)*.5,n.py,n.pz),bv.multiplyMatrices(_v,vv),Sv(this.actorOut,n.part,bv)}}stepSnowman(e,t,n){e.wave>0&&(e.wave=Math.max(0,e.wave-n));let r=e.wave>0?(.75+.5*Math.sin(t*9))*Q_(0,.5,e.wave):0;return r!==e.last&&(e.last=r,Tv(vv,r*e.armSign,e.px,e.py),yv.multiplyMatrices(e.root,vv),Sv(this.actorOut,e.arm,yv),!0)}stepDuck(e,t){let n=t%4.5/4.5,r=n<.16?Math.sin(n/.16*Math.PI):0,i=.25+.25*Math.sin(t*1.3);fv.set(Math.sin(t*.9)*.02,e.yaw0+Math.sin(t*.55)*.14,Math.sin(t*1.1)*.04,`YXZ`),lv.setFromEuler(fv),dv.set(1+.07*r,1-.12*r,1+.07*r),_v.compose(uv.set(e.x,e.y+i,-e.d),lv,dv),Sv(this.actorOut,e.part,_v)}placeAbductee(e,t,n,r,i,a,o,s){fv.set(0,a,s,`YXZ`),lv.setFromEuler(fv);let c=t?o:1e-4;_v.compose(uv.set(n,r,-i),lv,dv.set(c,c,c)),Sv(this.actorOut,e,_v)}stepUfo(e,t){let n=e.x0+Math.sin(t*.13+e.ph)*2,r=e.d0+Math.sin(t*.09+e.ph*1.7)*12;e.x=n,e.d=r;let i=e.gy0+31+Math.sin(t*.7)*1.2;fv.set(Math.sin(t*.9)*.07,t*.7,Math.sin(t*.8+1)*.07,`YXZ`),lv.setFromEuler(fv),_v.compose(uv.set(n,i,-r),lv,dv.set(1,1,1)),Sv(this.actorOut,e.saucer,_v);let a=this.surfaceY(n,r),o=i-.28*e.S;this.beam.position.set(n,o,-r),this.beam.scale.set(1,Math.max(6,o-a),1),this.beam.material.opacity=.8+.2*Math.sin(t*2.6);let s=t+e.off,c=s%28,l=Math.floor(s/28),u=c>7&&c<19,d=u?(c-7)/12:0,f=d*d*(3-2*d),p=a+f*(o-a-3.5),m=t*2.2+f*4,h=Math.sin(t*5)*.35*f;this.placeAbductee(e.cow,u&&!(l&1),n,p,r,m,Z_(1,.45,f),h),this.placeAbductee(e.mini,u&&(l&1)==1,n,p,r,m,Z_(1,.45,f),h)}stepYeti(e,t){let n=Math.abs(Math.sin(t*4.6)),r=Math.sin(t*9.2);fv.set(0,t*2.4,r*.16,`YXZ`),lv.setFromEuler(fv),_v.compose(uv.set(e.x,e.gy+n*2.4,-e.d),lv,dv.set(1-.03*r,1+.05*r,1-.03*r)),Sv(this.actorOut,e.part,_v)}updateEggs(e,t,n){let r=this.eggs;if(!this.actors)return;let i=this.t,a=n.d,o=!1,s=r.nasreddin;s&&a>s.d0-(320+14*n.r)&&a<s.d0+s.len+160&&(this.stepNasreddin(s,i,e),o=!0,Math.hypot(n.x-s.x,a-s.d)-n.r<10&&this.fire(`nasreddin`));let c=r.snowman;a>c.d-(320+14*n.r)&&a<c.d+160&&(Math.hypot(n.x-c.x,a-c.d)-n.r<8&&(this.fire(`snowman`),c.wave=3.2),this.stepSnowman(c,i,e)&&(o=!0));let l=r.ufo;if(l){let e=a>l.d0-(520+14*n.r)&&a<l.d0+260;this.beam.visible=e,e&&(this.stepUfo(l,i),o=!0,Math.hypot(n.x-l.x,a-l.d)-n.r<18&&this.fire(`ufo`))}let u=r.duck;if(a>u.d-(360+14*n.r)){this.stepDuck(u,i),o=!0;let e=t.position;(Math.hypot(n.x-u.x,a-u.d)<60||Math.hypot(e.x-u.x,e.y-(u.y+7),e.z+u.d)<60)&&this.fire(`duck`)}let d=r.yeti3am;d&&(a<320&&(this.stepYeti(d,i),o=!0),i>1.5&&this.fire(`yeti3am`)),o&&(this.actorPos.needsUpdate=!0)}setDetail(e){if(!this.snow)return;let t=this.theme;this.snowN=Math.floor(Z_(120,800,X_(t.snowfall,0,1))*Z_(.4,1,X_(e,0,1))),this.snow.geometry.setDrawRange(0,this.snowN)}update(e,t,n){if(this.disposed)return;e>0||(e=0),e>.1&&(e=.1);let r=this.ballState;r.x=n.x||0,r.d=n.d||0,r.y=n.y||0,r.r=n.r>0?n.r:1,n=r,this.t+=e;let i=this.t;if(this.sky.position.copy(t.position),this.stars){let e=this.starColor.array,t=this.starBase,n=this.starPh,r=n.length;for(let a=0;a<48;a++){let o=(this.starCursor+a)%r,s=.65+.35*Math.sin(i*2.2+n[o]*3);e[o*3]=t[o*3]*s,e[o*3+1]=t[o*3+1]*s,e[o*3+2]=t[o*3+2]*s}this.starCursor=(this.starCursor+48)%r,this.starColor.needsUpdate=!0}this.aurora&&this.updateAurora(i),this.snow&&this.updateSnow(e,t,n),this.clouds&&this.updateClouds(e,n),this.updateGates(t),this.updateDecorWindow(n),this.updateFlags(i),this.updateChairs(i,n),this.updateBirds(i,n),this.updateEggs(e,t,n)}computeInfo(){let e=0,t=0;this.group.traverse(n=>{if((n.isMesh||n.isPoints||n.isSprite||n.isLine)&&(e++,n.isMesh)){let e=n.geometry,r=(e.index?e.index.count:e.attributes.position.count)/3;t+=r*(n.isInstancedMesh?n.count:1)}}),this.info={drawCalls:e,triangles:Math.round(t)}}dispose(){this.disposed||(this.disposed=!0,this.scene.remove(this.group),this.group.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.map&&e.map.dispose(),e.emissiveMap&&e.emissiveMap.dispose(),e.dispose()}e.isInstancedMesh&&e.dispose()}),this.hemi.dispose?.(),this.sun.dispose?.(),this.group.clear())}},Lv=new Float32Array(256);for(let e=0;e<256;e++){let t=e/255;Lv[e]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function Rv(e,t){let n={};if(!e||e.version!==1||!e.models)throw Error(`unsupported kenney.json`);for(let r of Object.keys(e.models)){let i=e.models[r];try{let e=i.verts;if(i.posOffset+e*6>t.byteLength||i.colOffset+e*3>t.byteLength)throw Error(`data out of range`);let a=new Int16Array(t,i.posOffset,e*3),o=new Uint8Array(t,i.colOffset,e*3),s=new Float32Array(e*3),c=new Float32Array(e*3),l=i.scale;for(let t=0;t<e*3;t++)s[t]=a[t]*l,c[t]=Lv[o[t]];let u=new Cr;u.setAttribute(`position`,new cr(s,3)),u.computeVertexNormals(),u.setAttribute(`color`,new cr(c,3)),u.computeBoundingBox(),u.computeBoundingSphere(),n[r]={name:r,geometry:u,radius:u.boundingSphere.radius,height:u.boundingBox.max.y,tier:i.tier,kind:i.kind}}catch(e){console.warn(`[assets] skipped model "${r}":`,e&&e.message?e.message:e)}}return n}async function zv(e=`./models/`){try{let[t,n]=await Promise.all([fetch(e+`kenney.json`),fetch(e+`kenney.bin`)]);if(!t.ok||!n.ok)throw Error(`HTTP ${t.status}/${n.status}`);return Rv(await t.json(),await n.arrayBuffer())}catch(e){return console.warn(`[assets] baked models unavailable, falling back to procedural props:`,e&&e.message?e.message:e),{}}}var Bv=`freemon.meta.v1`,Vv=30,Hv=`FREEMON`,Uv=5,Wv=260,Gv=1.8,Kv=(e,t=0)=>typeof e==`number`&&Number.isFinite(e)?e:t,qv=e=>Math.max(0,Kv(e)),Jv=e=>!!e&&typeof e==`object`&&!Array.isArray(e),Yv=e=>(e<10?`0`:``)+e,Xv=()=>Date.now(),Zv=Object.freeze({}),Qv=Object.freeze([]);function $v(e=Xv()){let t=new Date(e);return`${t.getFullYear()}-${Yv(t.getMonth()+1)}-${Yv(t.getDate())}`}function ey(e){let t=String(e).split(`-`);return Math.floor(Date.UTC(+t[0],t[1]-1,+t[2])/864e5)}var ty=(e,t)=>ey(t)-ey(e);function ny(e=Xv()){let t=new Date(e);return new Date(t.getFullYear(),t.getMonth(),t.getDate()+1).getTime()-e}var ry=Math.random,iy=[`day`,`crystal`,`sunset`,`day`,`night`,`blizzard`,`pink`,`sunset`,`night`,`crystal`,`pink`,`blizzard`,`sunset`,`day`,`night`],ay=[{day:1,coins:50},{day:2,coins:75},{day:3,coins:100,crystals:1},{day:4,coins:150},{day:5,coins:200,crystals:1},{day:6,coins:300},{day:7,coins:500,crystals:2,special:!0}],oy=[{id:`magnet`,name:`Mıknatıs`,icon:`🧲`,desc:`Kar tanelerini çeker`,durations:[8,10,12,14,17,20],costs:[150,400,900,1800,3500]},{id:`x2`,name:`2x Skor`,icon:`✖️`,desc:`Skor iki katı`,durations:[10,12,14,17,20,24],costs:[200,500,1100,2200,4200]},{id:`jump`,name:`Süper Zıplama`,icon:`🦘`,desc:`Dev zıplamalar`,durations:[8,10,12,14,17,20],costs:[150,350,800,1600,3200]},{id:`rocket`,name:`Roket`,icon:`🚀`,desc:`Hız + her şeyi kır`,durations:[3.5,4.5,5.5,6.5,7.5,9],costs:[250,600,1300,2600,5e3]}],sy=Object.fromEntries(oy.map(e=>[e.id,e])),cy={superjump:`jump`,super_jump:`jump`,double:`x2`,"2x":`x2`,mult:`x2`,jetpack:`rocket`},ly=e=>sy[e]?e:cy[e]||null,uy={count:3,price:270},dy=[{id:`yilbasi`,m:1,d:1,name:`YENİ YIL`,emoji:`🎆`,msg:`Mutlu yıllar! Kar dolu bir yıl olsun.`,coins:50},{id:`nisan23`,m:4,d:23,name:`23 NİSAN`,emoji:`🎈`,msg:`Ulusal Egemenlik ve Çocuk Bayramı kutlu olsun!`,coins:50},{id:`ekim29`,m:10,d:29,name:`29 EKİM`,emoji:`🎉`,msg:`Cumhuriyet Bayramı kutlu olsun!`,coins:50}],fy=[{id:`logo`,where:`ui`,name:`Gökkuşağı Avcısı`,hint:`FREEMON yazısı sevilmeye bayılır. Yedi kez.`,how:`Logoya 7 kez dokun`},{id:`konami`,where:`ui`,name:`Hile Yok!`,hint:`Eski kafa oyuncular bilir: yukarı yukarı aşağı aşağı...`,how:`↑ ↑ ↓ ↓ ← → ← → B A`},{id:`sneeze`,where:`ui`,name:`Hapşuu!`,hint:`Menüdeki kartopu burnunu çok seviyor. Gıdıkla.`,how:`Menüdeki kartopuna 3 sn basılı tut`},{id:`typed`,where:`ui`,name:`Sihirli Kelime`,hint:`Klavyen varsa oyunun adını yaz.`,how:`Menüde "freemon" yaz`},{id:`holiday`,where:`ui`,name:`Bayram Ruhu`,hint:`Takvimde kırmızı bir gün.`,how:`1 Ocak / 23 Nisan / 29 Ekim günü oyunu aç`},{id:`nasreddin`,where:`world`,name:`Hoca'ya Selam`,hint:`Bir hoca eşeğine yanlış binmiş olabilir.`,how:`Nasreddin Hoca, eşeğine ters binmiş halde nadir bir yamaçta`},{id:`ufo`,where:`world`,name:`Yakın Karşılaşma`,hint:`Gece gökyüzüne dikkat.`,how:`Gece temasında gökyüzünde UFO`},{id:`duck`,where:`world`,name:`Vak Vak!`,hint:`Donmuş göldeki bir şey fazla sarı.`,how:`Donmuş gölde dev lastik ördek`},{id:`yeti3am`,where:`world`,name:`Yeti Disko`,hint:`Gece yarısından sonra menü bile uyanık.`,how:`Saat 03:00-03:59 arası menüde Yeti dans eder`},{id:`snowman`,where:`world`,name:`Kardan Adam Kankası`,hint:`Yol kenarındaki sessiz izleyiciler.`,how:`Yol kenarındaki kardan adama yaklaşınca el sallar`}],py=Object.fromEntries(fy.map(e=>[e.id,e])),my=[],hy={};function gy(e,t,n,r,i,a,o,s,c={}){let l={id:e,name:t,desc:n,icon:r,goal:i,reward:a};c.secret&&(l.secret=!0,l.hint=c.hint||``),my.push(l),hy[e]={on:o,val:s,auto:!!c.auto}}var _y=[`endless_end`,`cig_end`],vy=null;gy(`first_run`,`İlk Adım`,`Herhangi bir koşuyu bitir.`,`👣`,1,{coins:25},_y,e=>e.st.runs),gy(`km1`,`Isınma Turu`,`Tek koşuda 1 km git.`,`🏃`,1e3,{coins:50},[`endless_end`],e=>e.st.bestDist),gy(`km5`,`Dağ Keçisi`,`Tek koşuda 5 km git.`,`🐐`,5e3,{coins:150},[`endless_end`],e=>e.st.bestDist),gy(`km10`,`Yeti Bile Yoruldu`,`Tek koşuda 10 km git.`,`🏔️`,1e4,{skin:`pamuk`},[`endless_end`],e=>e.st.bestDist),gy(`close5`,`Nefes Nefese`,`Yeti'den 5 kez kıl payı kurtul.`,`😅`,5,{coins:40},[`close_call`],e=>e.st.closeCalls),gy(`close50`,`Yeti Kaçkını`,`Yeti'den 50 kez kıl payı kurtul.`,`👹`,50,{coins:200,crystals:1},[`close_call`],e=>e.st.closeCalls),gy(`maxsize`,`Dev Gibi`,`Maksimum boyuta ulaş.`,`🌕`,1,{coins:100},[`tier_up`,`endless_end`],e=>+(e.st.maxTier>=4)),gy(`smash100`,`Kırıp Geçiren`,`100 engel parçala.`,`🔨`,100,{coins:120},[`smash`],e=>e.st.smashed),gy(`explode10`,`Patlamaya Doymayan`,`10 kez patla.`,`💥`,10,{trail:`pink`},[`endless_end`],e=>e.st.explosions),gy(`perfect25`,`Ritim Kralı`,`25 kez PERFECT yap.`,`🥁`,25,{coins:100},[`perfect`],e=>e.st.perfects),gy(`biomes5`,`Dünya Turu`,`5 farklı dünyayı gez.`,`🗺️`,5,{coins:150},[`portal`],e=>e.sets.biomes.length),gy(`powers3`,`Çeşit Çeşit`,`3 farklı güçlendirme topla.`,`⚡`,3,{coins:80},[`powerup`],e=>e.sets.powers.length),gy(`swallow1000`,`Obur`,`Toplam 1.000 şey yut.`,`🍽️`,1e3,{coins:150},[`swallow`],e=>e.st.swallowed),gy(`police`,`Polisi Yuttun!`,`Bir polis arabasını yut.`,`🚓`,1,{coins:100},[`swallow`],e=>e.st.police),gy(`stars3x10`,`Yıldız Avcısı`,`10 dağı 3 yıldızla bitir.`,`⭐`,10,{trail:`neon`},[`@derive`],e=>wy()),gy(`flatten`,`Kasaba Yok Oldu`,`Bir kasabayı tamamen yerle bir et.`,`🏘️`,1,{coins:150,crystals:1},[`cig_end`],e=>e.st.flattened),gy(`destroy200`,`Kentsel Dönüşüm`,`Toplam 200 bina yık.`,`🏢`,200,{coins:120},[`destroy`],e=>e.st.destroyed),gy(`level10`,`Dağcı`,`10. dağa ulaş.`,`⛰️`,10,{coins:100},[`@derive`],()=>vy?Kv(vy.level):0),gy(`milestone5`,`KIYAMET!`,`En büyük çığ eşiğine ulaş.`,`🌋`,1,{coins:100},[`milestone`],e=>+(e.st.maxMilestone>=5)),gy(`tons`,`Ton Ton`,`Toplam 250.000 ton kar topla.`,`⚖️`,25e4,{coins:150},[`cig_end`],e=>Math.floor(e.st.totalTons)),gy(`daily_first`,`Günün Adamı`,`Günün Dağı'nı bitir.`,`📅`,1,{coins:50},[`cig_end`],e=>e.st.dailyRuns),gy(`night`,`Gece Kuşu`,`Gece temalı bir dağı bitir.`,`🌙`,1,{coins:50},[`cig_end`],e=>e.st.nightRuns),gy(`streak7`,`Sadık Dost`,`7 gün üst üste günlük ödülü al.`,`🔥`,7,{trail:`fire`},[`@derive`,`daily_claim`],(e,t,n)=>Math.max(n,e.d.streak)),gy(`buy5`,`Dolap Meraklısı`,`5 farklı topa sahip ol.`,`👕`,5,{coins:200},[`@derive`],()=>Ty()),gy(`kofte`,`Köfteci`,`Köfte topuna sahip ol.`,`🍖`,1,{coins:50},[`@derive`],()=>vy&&vy.isOwned(`skin`,`kofte`)?1:0),gy(`visual4`,`Gözlük Takan`,`Tüm görünüm modlarını dene.`,`🎨`,4,{coins:80},[`visual_mode`],e=>e.sets.visual.length),gy(`fashion3`,`Moda Tutkunu`,`3 farklı top seç.`,`💃`,3,{coins:40},[`skin_select`],e=>e.sets.skins.length),gy(`trailx`,`İz Bırakan`,`Klasik dışı bir kar izi seç.`,`✨`,1,{coins:40},[`trail_select`],e=>e.sets.trails.length),gy(`hoard`,`Kış Hazırlığı`,`Aynı anda 5.000 ❄️ biriktir.`,`🐿️`,5e3,{coins:200,crystals:1},[`@derive`],(e,t,n)=>Math.max(n,vy?Kv(vy.coins):0)),gy(`share`,`Sesini Duyur`,`Sonucunu paylaş.`,`📣`,1,{coins:50},[`share`],e=>e.st.shares),gy(`missions3`,`Görev Adamı`,`3 görev seti tamamla.`,`🎯`,3,{coins:150,crystals:1},[`@derive`],e=>e.m.n),gy(`mult10`,`Çarpan Ustası`,`Kalıcı skor çarpanını x10 yap.`,`✖️`,10,{coins:300,crystals:2},[`@derive`],e=>e.m.mult),gy(`hunt1`,`Kelime Avcısı`,`FREEMON harflerini bir günde topla.`,`🔤`,1,{coins:150},[`@derive`],e=>e.st.huntsDone);function yy(e,t,n,r,i){let a=py[e];gy(`egg_${e}`,t,n,r,1,i,[`@egg`],t=>+!!t.eggs[e],{secret:!0,hint:a.hint,auto:!0})}yy(`logo`,`Gökkuşağı Avcısı`,`FREEMON logosuna 7 kez dokundun!`,`🌈`,{trail:`rainbow`}),yy(`konami`,`Hile Yok!`,`Efsanevi kodu girdin. Ama hile yok!`,`🎮`,{coins:100}),yy(`sneeze`,`Hapşuu!`,`Kartopunu 3 saniye gıdıkladın.`,`🤧`,{coins:60}),yy(`typed`,`Sihirli Kelime`,`Klavyede 'freemon' yazdın.`,`⌨️`,{coins:60}),yy(`holiday`,`Bayram Ruhu`,`Milli bir bayramda oyunu açtın.`,`🎊`,{coins:100}),yy(`nasreddin`,`Hoca'ya Selam`,`Nasreddin Hoca'yı eşeğine ters binerken gördün.`,`🐴`,{coins:150}),yy(`ufo`,`Yakın Karşılaşma`,`Gece gökyüzünde bir UFO gördün.`,`🛸`,{coins:150,crystals:1}),yy(`duck`,`Vak Vak!`,`Donmuş gölde dev lastik ördek buldun.`,`🦆`,{coins:150}),yy(`yeti3am`,`Yeti Disko`,`Gece 3'te Yeti'nin dans ettiğini yakaladın.`,`🕺`,{coins:150,crystals:1}),yy(`snowman`,`Kardan Adam Kankası`,`Yol kenarındaki kardan adam sana el salladı.`,`⛄`,{coins:100}),gy(`egg_all`,`Tavşan Deliği`,`Tüm sırları buldun!`,`🐇`,fy.length,{skin:`altin`},[`@egg`],e=>Object.keys(e.eggs).length,{secret:!0,hint:`Bütün sırları bul.`,auto:!0});var by=my,xy=Object.fromEntries(my.map(e=>[e.id,e])),Sy=my.map(e=>e.id),Cy={};for(let e of Sy)for(let t of hy[e].on)(Cy[t]||(Cy[t]=[])).push(e);function wy(){if(!vy||typeof vy.starsFor!=`function`)return 0;let e=0,t=Math.min(500,Math.max(1,Kv(vy.level,1)));for(let n=1;n<=t;n++)vy.starsFor(n)>=3&&e++;return e}function Ty(){if(!vy)return 0;let e=0;for(let t of dg)t.id!==`classic`&&vy.isOwned(`skin`,t.id)&&e++;return e}var Ey=e=>String(Math.floor(e)).replace(/\B(?=(\d{3})+(?!\d))/g,`.`),Dy=(e,t)=>t+1,Oy=e=>(t,n)=>Math.max(n,Kv(e(t))),ky=[{id:`coins`,group:`coin`,modes:`endless`,scope:`run`,icon:`❄️`,goals:[100,200,350,500,800,1200],text:e=>`Bir koşuda ${Ey(e)} kar tanesi topla`,on:{run_progress:Oy(e=>e.coins),endless_end:Oy(e=>e.coins)}},{id:`dist`,group:`dist`,modes:`endless`,scope:`run`,icon:`📏`,goals:[500,800,1200,1800,2500,4e3],text:e=>`Bir koşuda ${Ey(e)} m git`,on:{run_progress:Oy(e=>e.distance),endless_end:Oy(e=>e.distance)}},{id:`jump`,group:`jump`,modes:`endless`,scope:`sum`,icon:`🦘`,goals:[5,15,30,50,80,120],text:e=>`${e} kez zıpla`,on:{jump:Dy}},{id:`close`,group:`close`,modes:`endless`,scope:`sum`,icon:`😅`,goals:[1,2,3,5,8,12],text:e=>`Yeti'den ${e} kez kıl payı kaç`,on:{close_call:Dy}},{id:`power`,group:`power`,modes:`endless`,scope:`sum`,icon:`⚡`,goals:[1,3,4,6,8,10],text:e=>`${e} güçlendirme topla`,on:{powerup:Dy}},{id:`maxsize`,group:`size`,modes:`endless`,scope:`sum`,icon:`🌕`,goals:[1,1,2,3,4,5],text:e=>e===1?`Maksimum boyuta ulaş`:`Maksimum boyuta ${e} kez ulaş`,on:{tier_up:(e,t)=>Kv(e.tier)>=4?t+1:t}},{id:`smash`,group:`smash`,modes:`endless`,scope:`sum`,icon:`🔨`,goals:[10,20,35,60,100,150],text:e=>`${e} engel kır`,on:{smash:Dy}},{id:`perfect`,group:`perfect`,modes:`endless`,scope:`sum`,icon:`🥁`,goals:[3,6,10,15,25,40],text:e=>`${e} kez PERFECT yap`,on:{perfect:Dy}},{id:`portal`,group:`portal`,modes:`endless`,scope:`sum`,icon:`🌀`,goals:[1,1,2,2,3,4],text:e=>e===1?`Bir portaldan geç`:`${e} portaldan geç`,on:{portal:Dy}},{id:`runs`,group:`runs`,modes:`any`,scope:`sum`,icon:`🔁`,goals:[1,2,3,3,4,5],text:e=>e===1?`Bir koşu tamamla`:`${e} koşu tamamla`,on:{endless_end:Dy,cig_end:Dy}},{id:`stars`,group:`stars`,modes:`cig`,scope:`sum`,icon:`⭐`,goals:[1,2,2,3,3,3],text:e=>`Çığ modunda bir dağı ${e} yıldızla bitir`,on:{cig_end:Oy(e=>e.stars)}},{id:`swallow`,group:`swallow`,modes:`cig`,scope:`sum`,icon:`🍽️`,goals:[100,200,400,700,1e3,1500],text:e=>`Çığ modunda ${Ey(e)} şey yut`,on:{swallow:Dy}},{id:`destroy`,group:`destroy`,modes:`cig`,scope:`sum`,icon:`🏢`,goals:[5,10,20,40,70,100],text:e=>`Kasabada ${e} bina yık`,on:{destroy:Dy}}],Ay=Object.fromEntries(ky.map(e=>[e.id,e])),jy=new Set;for(let e of ky)for(let t of Object.keys(e.on))jy.add(t);var My=`runs.endlessRuns.cigRuns.bestDist.totalDist.bestScore.swallowed.police.destroyed.smashed.crashes.explosions.closeCalls.perfects.portals.powerups.tierUps.maxTier.maxMilestone.totalTons.shares.sessions.jumps.nightRuns.dailyRuns.flattened.boxesOpened.lettersFound.huntsDone.sledsUsed.upgrades.crystalsEarned`.split(`.`),Ny=[`biomes`,`visual`,`skins`,`powers`,`trails`];function Py(){let e={};for(let t of My)e[t]=0;let t={};for(let e of Ny)t[e]=[];return{v:1,born:0,xp:0,cr:0,boxes:0,sleds:0,st:e,sets:t,a:{},eggs:{},hol:{},d:{last:``,streak:0,pos:0,total:0},u:{magnet:0,x2:0,jump:0,rocket:0},m:{n:0,mult:1,cur:[],awarded:!1,skipDay:``},h:{day:``,found:[0,0,0,0,0,0,0],done:!1,last:``,streak:0},recent:[]}}function Fy(e){let t=Py();if(!Jv(e))return t;if(t.born=qv(e.born),t.xp=Math.floor(qv(e.xp)),t.cr=Math.floor(qv(e.cr)),t.boxes=Math.floor(qv(e.boxes)),t.sleds=Math.min(99,Math.floor(qv(e.sleds))),Jv(e.st))for(let n of My)t.st[n]=qv(e.st[n]);if(Jv(e.sets))for(let n of Ny)Array.isArray(e.sets[n])&&(t.sets[n]=e.sets[n].filter(e=>typeof e==`string`&&e.length<40).slice(0,64));if(Jv(e.a))for(let n of Sy){let r=e.a[n];Jv(r)&&(t.a[n]={v:Math.min(qv(r.v),xy[n].goal),d:qv(r.d),c:+!!r.c})}if(Jv(e.eggs))for(let n of fy)e.eggs[n.id]&&(t.eggs[n.id]=Kv(e.eggs[n.id],1)||1);if(Jv(e.hol))for(let n of Object.keys(e.hol))e.hol[n]&&/^\d{4}-[a-z0-9]+$/.test(n)&&(t.hol[n]=1);if(Jv(e.d)&&(t.d.last=typeof e.d.last==`string`&&/^\d{4}-\d{2}-\d{2}$/.test(e.d.last)?e.d.last:``,t.d.streak=Math.floor(qv(e.d.streak)),t.d.pos=Math.min(7,Math.floor(qv(e.d.pos))),t.d.total=Math.floor(qv(e.d.total))),Jv(e.u))for(let n of Object.keys(t.u))t.u[n]=Math.min(Uv,Math.floor(qv(e.u[n])));if(Jv(e.m)&&(t.m.n=Math.floor(qv(e.m.n)),t.m.mult=Math.min(Vv,Math.max(1,Math.floor(Kv(e.m.mult,1)))),t.m.awarded=!!e.m.awarded,t.m.skipDay=typeof e.m.skipDay==`string`?e.m.skipDay:``,Array.isArray(e.m.cur))){for(let n of e.m.cur.slice(0,3))Jv(n)&&Ay[n.id]&&Kv(n.g)>0&&t.m.cur.push({id:n.id,g:Math.floor(Kv(n.g)),v:qv(n.v),d:+!!n.d});t.m.cur.length!==3&&(t.m.cur=[])}if(Jv(e.h)&&(t.h.day=typeof e.h.day==`string`&&/^\d{4}-\d{2}-\d{2}$/.test(e.h.day)?e.h.day:``,t.h.last=typeof e.h.last==`string`&&/^\d{4}-\d{2}-\d{2}$/.test(e.h.last)?e.h.last:``,t.h.streak=Math.floor(qv(e.h.streak)),t.h.done=!!e.h.done,Array.isArray(e.h.found)))for(let n=0;n<7;n++)t.h.found[n]=+!!e.h.found[n];return Array.isArray(e.recent)&&(t.recent=e.recent.filter(e=>e===`e`||e===`c`).slice(-6)),t}var J=Py(),Iy=!1,Ly=null,Ry=!1,zy=!1,By={unlock:[],levelup:[],mission:[],missionset:[],letter:[],hunt:[]};function Vy(){try{return globalThis.localStorage?globalThis.localStorage.getItem(Bv):null}catch{return null}}function Hy(e){try{globalThis.localStorage&&globalThis.localStorage.setItem(Bv,e)}catch{}}function Uy(){Iy=!1,Ly&&(clearTimeout(Ly),Ly=null);try{Hy(JSON.stringify(J))}catch{}}function Wy(){Iy=!0,!Ly&&(Ly=setTimeout(()=>{Ly=null,Iy&&Uy()},900),Ly&&typeof Ly.unref==`function`&&Ly.unref())}function Gy(e,t,n){let r=By[e];for(let e=0;e<r.length;e++)try{r[e](t,n)}catch{}}var Ky={level:1,coins:0,totalStars:()=>0,starsFor:()=>0,addCoins(){},spend:()=>!1,isOwned:()=>!1,own(){},selected:()=>null,select(){}},qy=()=>vy||Ky;function Jy(e,t,n){let r=(e===`skin`?dg:fg).find(e=>e.id===t);if(r){if(qy().isOwned(e,t)){let i=Math.max(50,Math.round((r.price||300)*.5/10)*10);qy().addCoins(i),n.coins=(n.coins||0)+i,n.converted={kind:e,id:t}}else qy().own(e,t),n[e]=t}}function Yy(e){let t={};return e?(e.coins&&(t.coins=Math.floor(e.coins),qy().addCoins(t.coins)),e.crystals&&(J.cr+=e.crystals,J.st.crystalsEarned+=e.crystals,t.crystals=e.crystals),e.boxes&&(J.boxes+=e.boxes,t.boxes=e.boxes),e.sleds&&(J.sleds=Math.min(99,J.sleds+e.sleds),t.sleds=e.sleds),e.skin&&Jy(`skin`,e.skin,t),e.trail&&Jy(`trail`,e.trail,t),t):t}var Xy=e=>Math.round(Wv*Math.max(0,e-1)**+Gv);function Zy(e){let t=Math.floor((Math.max(0,e)/Wv)**(1/Gv))+1;for(;Xy(t+1)<=e;)t++;for(;t>1&&Xy(t)>e;)t--;return t}function Qy(e){if(e=Math.round(e),!(e>0))return;let t=Zy(J.xp);J.xp+=e;let n=Zy(J.xp);n>t&&!Ry&&Gy(`levelup`,n,t)}function $y(e){return J.a[e]||(J.a[e]={v:0,d:0,c:0})}function eb(e,t){let n=xy[e],r=$y(e);r.d=Xv(),r.v=n.goal;let i={auto:!1};hy[e].auto&&(i={auto:!0,reward:tb(e)}),t&&t.push(n),Ry||Gy(`unlock`,n,i)}function tb(e){let t=xy[e],n=J.a[e];if(!t||!n||!n.d||n.c)return null;n.c=1;let r=Yy(t.reward);return r.id=e,Qy(t.secret?40:15+(t.reward.skin||t.reward.trail?20:0)+(t.reward.crystals?10:0)),Uy(),r}function nb(e,t,n){let r=Cy[e];if(r)for(let e=0;e<r.length;e++){let i=r[e],a=J.a[i];if(a&&a.d)continue;let o=xy[i],s=a?a.v:0,c=hy[i].val(J,t,s);c>s&&(c>o.goal&&(c=o.goal),$y(i).v=c,c>=o.goal&&eb(i,n))}}var rb=e=>nb(`@derive`,void 0,e),ib=new Set([`session`,`cig_end`,`endless_end`,`skin_select`,`trail_select`,`daily_claim`,`visual_mode`,`share`]),ab=new Set([`endless_end`,`cig_end`]);function ob(e,t){if(typeof t!=`string`||!t||t.length>39)return;let n=J.sets[e];n.length<64&&!n.includes(t)&&n.push(t)}function sb(e){J.recent.push(e),J.recent.length>6&&J.recent.shift()}function cb(e){if(e.modes===`any`)return!0;let t=J.recent.includes(`e`),n=J.recent.includes(`c`);return e.modes===`endless`?t||!n:n}function lb(e){let t=Math.min(5,Math.floor(J.m.n/3)),n=ky.filter(t=>cb(t)&&!e.groups.has(t.group)),r=n.filter(t=>!e.ids.has(t.id));r.length&&(n=r),n.length||(n=ky.filter(t=>!e.groups.has(t.group)));let i=n[Math.floor(ry()*n.length)],a=t+ +(ry()<.3)-+(ry()<.15);return a=Math.max(0,Math.min(5,a)),{id:i.id,g:i.goals[a],v:0,d:0}}function ub(){let e=new Set(J.m.cur.map(e=>e.id)),t=new Set,n=[];for(let r=0;r<3;r++){let r=lb({ids:e,groups:t});t.add(Ay[r.id].group),n.push(r)}return n}function db(e,t){if(!jy.has(e))return;let n=J.m.cur,r=!1;for(let i=0;i<n.length;i++){let a=n[i];if(a.d)continue;let o=Ay[a.id].on[e];if(!o)continue;let s=o(t,a.v);s!==a.v&&(a.v=s,r=!0,a.v>=a.g&&(a.d=1,Ry||Gy(`mission`,{id:a.id,text:Ay[a.id].text(a.g),icon:Ay[a.id].icon,goal:a.g})))}r&&pb()}function fb(e){let t={coins:Math.min(600,100+40*e)};return e%3==0&&(t.crystals=1),e%4==0&&(t.boxes=1),t}function pb(){let e=J.m;if(e.awarded||e.cur.length!==3||!e.cur.every(e=>e.d))return;e.awarded=!0,e.n+=1,e.mult=Math.min(Vv,e.mult+1);let t=Yy(fb(e.n));Qy(60),rb(null),Uy(),Ry||Gy(`missionset`,{multiplier:e.mult,reward:t,n:e.n})}function mb(){let e=J.m;if(e.cur.length!==3||e.awarded&&e.cur.every(e=>e.d)){e.cur=ub(),e.awarded=!1;return}for(let t=0;t<3;t++){let n=e.cur[t];if(!n.d&&n.v===0&&!cb(Ay[n.id])){let n=new Set(e.cur.filter((e,n)=>n!==t).map(e=>Ay[e.id].group));e.cur[t]=lb({ids:new Set(e.cur.map(e=>e.id)),groups:n})}}}function hb(){for(let e of J.m.cur)!e.d&&Ay[e.id].scope===`run`&&(e.v=0)}function gb(e){let t={coins:100+50*e};return e===7&&(t.crystals=1,t.boxes=1),t}function _b(e=Xv()){let t=J.h,n=$v(e);t.day!==n&&(t.day&&ty(t.day,n)<0||((!t.last||ty(t.last,n)>1)&&(t.streak=0),t.day=n,t.found=[0,0,0,0,0,0,0],t.done=!1))}function vb(){let e=qy(),t=(t,n)=>t.filter(t=>t.price>0&&!t.unlock&&!e.isOwned(n,t.id)).sort((e,t)=>e.price-t.price),n=t(dg,`skin`);if(n.length)return{skin:n[0].id};let r=t(fg,`trail`);return r.length?{trail:r[0].id}:null}function yb(e){let t=ay[Math.max(1,Math.min(7,e|0))-1];if(!t.special)return{...t};let n=vb(),r={day:t.day,special:!0,crystals:t.crystals};return n?Object.assign(r,n):r.coins=t.coins,r}var bb=[{w:30,r:{coins:50}},{w:25,r:{coins:100}},{w:14,r:{coins:150}},{w:8,r:{coins:250}},{w:3,r:{coins:500},rare:!0},{w:10,r:{crystals:1}},{w:2,r:{crystals:2},rare:!0},{w:6,r:{sleds:1}},{w:2,r:`item`,rare:!0}];function xb(){let e=0;for(let t of bb)e+=t.w;let t=ry()*e,n=bb[0];for(let e of bb)if(t-=e.w,t<0){n=e;break}if(n.r!==`item`)return{spec:n.r,rare:!!n.rare};let r=qy(),i=[...dg.filter(e=>e.price>=500&&!e.unlock&&!r.isOwned(`skin`,e.id)).map(e=>({skin:e.id})),...fg.filter(e=>e.price>=500&&!e.unlock&&!r.isOwned(`trail`,e.id)).map(e=>({trail:e.id}))];return i.length?{spec:i[Math.floor(ry()*i.length)],rare:!0}:{spec:{coins:500},rare:!0}}function Sb(e){hb(),mb()}function Cb(e){let t=J.st;t.runs++,t.endlessRuns++;let n=qv(e.distance);t.bestDist=Math.max(t.bestDist,n),t.totalDist+=n,t.bestScore=Math.max(t.bestScore,qv(e.score)),t.maxTier=Math.max(t.maxTier,qv(e.maxTier)),e.cause===`explode`&&t.explosions++,sb(`e`),Qy(10+n/10+qv(e.coins)*.5+qv(e.maxTier)*8)}function wb(e){let t=J.st;t.runs++,t.cigRuns++;let n=qv(e.tons);t.totalTons+=n,e.daily&&t.dailyRuns++,Kv(e.pct)>=.99&&t.flattened++,(typeof e.theme==`string`?e.theme:e.daily?``:iy[(Math.max(1,Kv(e.level,1)|0)-1)%iy.length])===`night`&&t.nightRuns++,sb(`c`),Qy(20+qv(e.stars)*30+qv(e.pct)*40+Math.sqrt(n)*.8)}function Tb(e,t,n){let r=J.st;switch(e){case`session`:r.sessions++,_b(),mb();break;case`run_start`:Sb(t);break;case`run_progress`:break;case`cig_end`:wb(t);break;case`endless_end`:Cb(t);break;case`swallow`:r.swallowed++,t.type===`k_police`&&r.police++;break;case`destroy`:r.destroyed++;break;case`milestone`:r.maxMilestone=Math.max(r.maxMilestone,Kv(t.level));break;case`tier_up`:r.tierUps++,r.maxTier=Math.max(r.maxTier,Kv(t.tier));break;case`crash`:r.crashes++;break;case`smash`:r.smashed++;break;case`powerup`:r.powerups++,ob(`powers`,t.kind);break;case`close_call`:r.closeCalls++;break;case`perfect`:r.perfects++;break;case`portal`:r.portals++,ob(`biomes`,t.biome);break;case`jump`:r.jumps++;break;case`skin_select`:ob(`skins`,t.id);break;case`trail_select`:t.id&&t.id!==`classic`&&ob(`trails`,t.id);break;case`visual_mode`:ob(`visual`,t.id);break;case`share`:r.shares++;break;case`daily_claim`:break;default:return}nb(e,t,n),db(e,t),ib.has(e)&&rb(n),ab.has(e)?(mb(),Uy()):Wy()}var Eb={init(e){vy=e||null;let t=null;try{let e=Vy();t=e?JSON.parse(e):null}catch{t=null}J=Fy(t),J.born||(J.born=Xv()),Ry=!0;try{_b(),mb(),rb(null)}finally{Ry=!1}if(Uy(),!zy&&typeof document<`u`&&document.addEventListener){zy=!0;try{document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&Eb.flush()}),typeof window<`u`&&window.addEventListener(`pagehide`,()=>Eb.flush())}catch{}}},flush(){Iy&&Uy()},refresh(){try{_b(),mb(),rb([]),Wy()}catch{}},track(e,t){let n=t&&typeof t==`object`?t:Zv,r=[];try{Tb(e,n,r)}catch{}return r.length?r:Qv},on(e,t){let n=By[e];return!n||typeof t!=`function`?()=>{}:(n.push(t),()=>{let e=n.indexOf(t);e>=0&&n.splice(e,1)})},onUnlock(e){return Eb.on(`unlock`,e)},onLevelUp(e){return Eb.on(`levelup`,e)},progress(e){let t=xy[e];if(!t)return{value:0,goal:1,done:!1,claimed:!1};let n=J.a[e];return{value:n?Math.min(n.v,t.goal):0,goal:t.goal,done:!!(n&&n.d),claimed:!!(n&&n.c)}},claimAchievement(e){try{return tb(e)}catch{return null}},unclaimedCount(){let e=0;for(let t of Sy){let n=J.a[t];n&&n.d&&!n.c&&e++}return e},doneCount(){let e=0;for(let t of Sy)J.a[t]&&J.a[t].d&&e++;return e},daily(){let e=Xv(),t=$v(e),n=J.d,r=n.last?ty(n.last,t):null,i=r===0,a=r===null||r>0,o=n.streak,s=n.pos;(r===null||r>2)&&(o=0,s=0);let c=a?s%7+1:Math.max(1,s);return{day:c,streak:o,available:a,claimedToday:i,grace:r===2,reward:yb(c),nextInMs:a?0:ny(e)}},dailyReward(e){return yb(e)},claimDaily(){let e=Eb.daily();if(!e.available)return null;let t=J.d,n=Yy(e.reward);n.day=e.day,n.streak=e.streak+1,t.streak=e.streak+1,t.pos=e.day,t.last=$v(),t.total++,Qy(20);let r=[];return nb(`daily_claim`,{day:e.day},r),rb(r),Uy(),n},holiday(e=Xv()){let t=new Date(e),n=dy.find(e=>e.m===t.getMonth()+1&&e.d===t.getDate());if(!n)return null;let r=`${t.getFullYear()}-${n.id}`;return{...n,key:r,claimed:!!J.hol[r]}},claimHoliday(e=Xv()){let t=Eb.holiday(e);if(!t||t.claimed)return null;J.hol[t.key]=1;let n=Yy({coins:t.coins});return Eb.egg(`holiday`),Uy(),n},stats(){let e=J.st;return{level:Zy(J.xp),xp:J.xp,runs:e.runs,endlessRuns:e.endlessRuns,cigRuns:e.cigRuns,bestDistance:Math.round(e.bestDist),totalDistance:Math.round(e.totalDist),bestScore:Math.round(e.bestScore),swallowed:e.swallowed,destroyed:e.destroyed,smashed:e.smashed,crashes:e.crashes,explosions:e.explosions,closeCalls:e.closeCalls,perfects:e.perfects,portals:e.portals,powerups:e.powerups,jumps:e.jumps,totalTons:Math.round(e.totalTons),sessions:e.sessions,stars:vy&&typeof vy.totalStars==`function`?vy.totalStars():0,daysClaimed:J.d.total,dailyStreak:Eb.daily().streak,achievements:Eb.doneCount(),achievementsTotal:Sy.length,eggs:Object.keys(J.eggs).length,eggsTotal:fy.length,multiplier:J.m.mult,missionSets:J.m.n,boxesOpened:e.boxesOpened,lettersFound:e.lettersFound,huntsDone:e.huntsDone,crystals:J.cr,sleds:J.sleds,since:J.born}},get xp(){return J.xp},get level(){return Zy(J.xp)},get xpForNext(){return Xy(Zy(J.xp)+1)-J.xp},levelInfo(){let e=Zy(J.xp),t=Xy(e),n=Xy(e+1);return{level:e,xp:J.xp,cur:J.xp-t,need:n-t,frac:Math.max(0,Math.min(1,(J.xp-t)/(n-t)))}},xpAt:Xy,egg(e){return!py[e]||J.eggs[e]?!1:(J.eggs[e]=Xv(),nb(`@egg`,void 0,[]),Uy(),!0)},eggFound(e){return!!J.eggs[e]},missions(){return J.m.cur.map(e=>{let t=Ay[e.id];return{id:e.id,icon:t.icon,text:t.text(e.g),value:Math.min(e.v,e.g),goal:e.g,done:!!e.d}})},multiplier(){return J.m.mult},maxMultiplier(){return Vv},missionSetReward(){return fb(J.m.n+1)},missionSetsDone(){return J.m.n},skipCost(){return+(J.m.skipDay===$v())},skipMission(e){let t=J.m.cur[e];if(!t||t.d)return!1;let n=Eb.skipCost();if(n&&J.cr<n)return!1;J.cr-=n,J.m.skipDay=$v();let r=new Set(J.m.cur.filter((t,n)=>n!==e).map(e=>Ay[e.id].group));return J.m.cur[e]=lb({ids:new Set(J.m.cur.map(e=>e.id)),groups:r}),Uy(),!0},upgrades:oy,upgradeLevel(e){let t=ly(e);return t?J.u[t]:0},duration(e){let t=ly(e);return t?sy[t].durations[J.u[t]]:0},upgradeCost(e){let t=ly(e);return t&&J.u[t]<Uv?sy[t].costs[J.u[t]]:null},buyUpgrade(e){let t=ly(e),n=Eb.upgradeCost(e);return!t||n===null||!qy().spend(n)?!1:(J.u[t]++,J.st.upgrades++,Uy(),!0)},sleds(){return J.sleds},useSled(){return J.sleds<=0?!1:(J.sleds--,J.st.sledsUsed++,Wy(),!0)},buySled(e=1){return e=Math.max(1,Math.floor(Kv(e,1))),J.sleds+e*uy.count>99||!qy().spend(e*uy.price)?!1:(J.sleds+=e*uy.count,Uy(),!0)},get crystals(){return J.cr},addCrystals(e){return e=Math.floor(Kv(e)),e<=0?J.cr:(J.cr+=e,J.st.crystalsEarned+=e,Wy(),J.cr)},spendCrystals(e){return e=Math.floor(Kv(e)),e<0||J.cr<e?!1:(J.cr-=e,Uy(),!0)},reviveCost(e){return Math.min(64,2**Math.max(0,Math.floor(Kv(e))))},get boxes(){return J.boxes},addBoxes(e){return e=Math.floor(Kv(e)),e>0&&(J.boxes+=e,Wy()),J.boxes},openBox(){if(J.boxes<=0)return null;J.boxes--,J.st.boxesOpened++;let{spec:e,rare:t}=xb(),n=Yy(e);return n.rare=t,n.kind=e.skin?`skin`:e.trail?`trail`:e.crystals?`crystals`:e.sleds?`sleds`:`coins`,Qy(5),rb(null),Uy(),n},letterHunt(){_b();let e=J.h,t=$v(),n=e.found.map(Boolean),r=n.filter(Boolean).length,i=e.last&&ty(e.last,t)<=1?e.streak:0,a=e.done?(e.streak-1)%7+1:i%7+1,o=e.done?-1:n.indexOf(!1);return{word:Hv,found:n,count:r,nextLetter:o,letter:o>=0?Hv[o]:``,complete:!!e.done,streak:i,streakDay:a,reward:gb(a)}},collectLetter(){_b();let e=J.h;if(e.done)return null;let t=e.found.indexOf(0);if(t<0)return null;e.found[t]=1,J.st.lettersFound++;let n={index:t,letter:Hv[t],count:t+1,complete:!1,reward:null};if(Gy(`letter`,n),t===6){let t=$v();e.streak=e.last&&ty(e.last,t)===1?e.streak+1:1,e.last=t,e.done=!0,J.st.huntsDone++,n.complete=!0,n.streak=e.streak,n.reward=Yy(gb((e.streak-1)%7+1)),Qy(40),rb(null),Uy(),Gy(`hunt`,n)}else Wy();return n},_setRandom(e){ry=typeof e==`function`?e:Math.random}},Db=`freemon-menus-style`,Ob=`0.2.0`,kb=`FREEMON`,Ab=[`up`,`up`,`down`,`down`,`left`,`right`,`left`,`right`,`b`,`a`],jb=`
.fm-main, .fm-ov, .fm-modal, .fm-toasts, .fm-fx, .fm-boxov {
  --ink: #17345c; --orange: #ff7a2f; --orange-dark: #d2541a; --blue: #2f7dff; --blue-dark: #1d55b8; --gold: #ffcf3a;
  --purple: #7a3cf0; --green: #35c46a; --red: #ff4d4d;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-weight: 900; color: #fff;
  user-select: none; -webkit-user-select: none; -webkit-tap-highlight-color: transparent;
}
.fm-main *, .fm-ov *, .fm-modal *, .fm-toasts *, .fm-fx *, .fm-boxov * { box-sizing: border-box; }
.fm-main button, .fm-ov button, .fm-modal button, .fm-boxov button { font-family: inherit; margin: 0; -webkit-appearance: none; appearance: none; }
.fm-main button:focus, .fm-ov button:focus, .fm-modal button:focus, .fm-boxov button:focus { outline: none; }
.fm-main button:focus-visible, .fm-ov button:focus-visible, .fm-modal button:focus-visible, .fm-boxov button:focus-visible { outline: 3px solid var(--gold); outline-offset: 2px; }
.fm-ol { text-shadow: 0 3px 0 var(--ink), 2px 2px 0 var(--ink), -2px 2px 0 var(--ink), 2px -2px 0 var(--ink), -2px -2px 0 var(--ink), 0 6px 12px rgba(10, 30, 60, 0.35); }

/* =============================================================== MAIN SCREEN */
.fm-main {
  position: absolute; inset: 0; z-index: 40; display: flex; flex-direction: column;
  padding-top: calc(var(--sat, env(safe-area-inset-top, 0px)) + 10px);
  background: linear-gradient(180deg, rgba(110, 182, 255, 0.62) 0%, rgba(255, 255, 255, 0) 36%, rgba(255, 255, 255, 0) 52%, rgba(23, 52, 92, 0.46) 100%);
}
.fm-main.fm-hide { display: none; }
.fm-top { flex: none; display: flex; align-items: center; gap: 8px; width: 100%; max-width: 460px; margin: 0 auto; padding: 0 16px; }
.fm-lvl {
  --p: 0; position: relative; flex: none; width: 52px; height: 52px; padding: 0; border-radius: 50%; cursor: pointer; border: 3px solid var(--ink);
  background: conic-gradient(var(--gold) calc(var(--p) * 1%), rgba(255, 255, 255, 0.55) 0); box-shadow: 0 4px 0 var(--ink);
}
.fm-lvl-in {
  position: absolute; inset: 4px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: linear-gradient(180deg, #2c5799, var(--ink)); color: #fff; line-height: 1;
}
.fm-lvl-in small { font-size: 8px; letter-spacing: 0.08em; color: var(--gold); }
.fm-lvl-in b { font-size: 19px; font-weight: 900; }
.fm-lvl:active { transform: translateY(2px); box-shadow: 0 2px 0 var(--ink); }
.fm-spacer-x { flex: 1; }
.fm-pill {
  display: flex; align-items: center; gap: 6px; padding: 6px 12px 6px 9px; border-radius: 16px; min-height: 36px;
  border: 3px solid var(--ink); background: linear-gradient(180deg, #2c5799, var(--ink));
  box-shadow: 0 3px 0 var(--ink), inset 0 2px 0 rgba(255, 255, 255, 0.18); font-size: 17px; line-height: 1; color: var(--gold); white-space: nowrap;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.35);
}
.fm-pill .ico { font-size: 16px; text-shadow: none; }
.fm-pill.cr { color: #9be7ff; }
.fm-pill.bump { animation: fmBump 0.4s cubic-bezier(.2, 1.8, .4, 1); }
@keyframes fmBump { 0% { transform: scale(1); } 35% { transform: scale(1.18); } 100% { transform: scale(1); } }

.fm-scroll {
  flex: 1; min-height: 0; overflow-y: auto; overflow-x: hidden; touch-action: pan-y; overscroll-behavior: contain; -webkit-overflow-scrolling: touch;
  padding: 0 16px calc(var(--sab, env(safe-area-inset-bottom, 0px)) + 14px);
}
.fm-col { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 460px; min-height: 100%; margin: 0 auto; }
.fm-hero { flex: none; display: flex; flex-direction: column; align-items: center; gap: 2px; padding-top: 4px; touch-action: none; }
.fm-flex { flex: 1 1 0; min-height: 4px; }

/* ---- logo ---- */
.fm-logo {
  position: relative; display: flex; justify-content: center; align-items: baseline; gap: 1px; padding: 6px 8px 8px; cursor: pointer;
  font-size: clamp(40px, 15.5vw, 72px); line-height: 1; transform: rotate(-3deg); touch-action: none;
}
.fm-ch {
  position: relative; display: inline-block; font-weight: 900; color: var(--ink);
  text-shadow: 0 .09em 0 var(--ink), .055em .055em 0 var(--ink), -.055em .055em 0 var(--ink), .055em -.055em 0 var(--ink), -.055em -.055em 0 var(--ink),
    0 -.055em 0 var(--ink), .075em 0 0 var(--ink), -.075em 0 0 var(--ink), 0 .16em .12em rgba(10, 30, 60, 0.35);
  animation: fmBob 2.4s ease-in-out infinite; animation-delay: calc(var(--i) * -0.19s);
}
.fm-ch::after {
  content: attr(data-t); position: absolute; left: 0; top: 0; width: 100%; height: 100%; text-shadow: none;
  background: linear-gradient(180deg, var(--c1) 0%, var(--c2) 100%); -webkit-background-clip: text; background-clip: text;
  color: transparent; -webkit-text-fill-color: transparent;
}
.fm-ball {
  position: relative; display: inline-block; width: 0.74em; height: 0.74em; margin: 0 0.04em; border-radius: 50%; border: 0.07em solid var(--ink);
  background: radial-gradient(circle at 34% 28%, #fff 0 30%, #e6f2ff 55%, #b9d6f5 100%);
  box-shadow: 0 0.07em 0 var(--ink), inset -0.05em -0.06em 0 rgba(120, 170, 225, 0.55), 0 0.16em 0.12em rgba(10, 30, 60, 0.3);
  animation: fmBob 2.4s ease-in-out infinite; animation-delay: calc(var(--i) * -0.19s);
}
.fm-ball .e { position: absolute; top: 0.2em; width: 0.1em; height: 0.15em; border-radius: 50%; background: var(--ink); animation: fmBlink 4.2s infinite; }
.fm-ball .e.l { left: 0.17em; } .fm-ball .e.r { right: 0.17em; }
.fm-ball .n { position: absolute; left: 50%; top: 0.35em; width: 0.17em; height: 0.09em; margin-left: -0.04em; border-radius: 0 60% 60% 0; background: #ff8a2a; }
.fm-logo.spin { animation: fmSpin 1.15s cubic-bezier(.3, 1.3, .5, 1); }
.fm-logo.squish { animation: fmSquish 0.18s ease-out; }
@keyframes fmBob { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-0.07em) rotate(1.6deg); } }
@keyframes fmBlink { 0%, 93%, 100% { transform: scaleY(1); } 96% { transform: scaleY(0.08); } }
@keyframes fmSpin { 0% { transform: rotate(-3deg) scale(1); } 40% { transform: rotate(357deg) scale(1.25); } 100% { transform: rotate(717deg) scale(1); } }
@keyframes fmSquish { 0% { transform: rotate(-3deg) scale(1); } 50% { transform: rotate(-3deg) scale(0.94, 1.04); } 100% { transform: rotate(-3deg) scale(1); } }
.fm-tag { margin-top: -2px; font-size: 13px; letter-spacing: 0.1em; color: var(--ink); font-weight: 800; text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6); }

/* ---- mascot ---- */
.fm-mascot-wrap { position: relative; margin-top: 6px; height: 92px; display: flex; align-items: center; justify-content: center; }
.fm-mascot {
  --lx: 0px; --ly: 0px; position: relative; width: 84px; height: 84px; padding: 0; border-radius: 50%; cursor: pointer; touch-action: none;
  border: 3.5px solid var(--ink); background: radial-gradient(circle at 34% 28%, #fff 0 28%, #e9f4ff 52%, #b8d5f4 100%);
  box-shadow: 0 5px 0 var(--ink), inset -6px -8px 0 rgba(110, 160, 220, 0.4); animation: fmBounce 2.8s ease-in-out infinite;
}
.fm-mascot .eye {
  position: absolute; top: 30%; width: 20px; height: 24px; border-radius: 50%; background: #fff; border: 3px solid var(--ink); overflow: hidden;
  animation: fmBlink 4.6s infinite;
}
.fm-mascot .eye.l { left: 16%; } .fm-mascot .eye.r { right: 16%; animation-delay: 0.05s; }
.fm-mascot .pup {
  position: absolute; left: 50%; top: 50%; width: 9px; height: 11px; margin: -5.5px 0 0 -4.5px; border-radius: 50%; background: var(--ink);
  transform: translate(var(--lx), var(--ly)); transition: transform 0.25s ease;
}
.fm-mascot .nose { position: absolute; left: 50%; top: 52%; width: 18px; height: 9px; margin-left: -3px; border-radius: 0 70% 70% 0; background: linear-gradient(180deg, #ffa04a, #ff7a1a); border: 2px solid var(--ink); }
.fm-mascot .cheek { position: absolute; top: 60%; width: 13px; height: 8px; border-radius: 50%; background: rgba(255, 110, 150, 0.5); }
.fm-mascot .cheek.l { left: 9%; } .fm-mascot .cheek.r { right: 9%; }
.fm-mascot .mouth { position: absolute; left: 50%; top: 72%; width: 20px; height: 9px; margin-left: -10px; border-bottom: 3.5px solid var(--ink); border-radius: 0 0 20px 20px; }
.fm-mascot.press { animation: fmTremble 0.12s linear infinite; }
.fm-mascot.sneeze { animation: fmSneeze 1.8s ease-out; }
@keyframes fmBounce { 0%, 100% { transform: translateY(0) scale(1, 1); } 45% { transform: translateY(-9px) scale(0.98, 1.03); } 80% { transform: translateY(0) scale(1.04, 0.95); } }
@keyframes fmTremble { 0% { transform: translateX(-1.5px) rotate(-1deg); } 50% { transform: translateX(1.5px) rotate(1deg); } 100% { transform: translateX(-1.5px) rotate(-1deg); } }
@keyframes fmSneeze {
  0% { transform: scale(1); opacity: 1; } 22% { transform: scale(1.18, 1.1) translateY(-6px); } 34% { transform: scale(0.9, 1.2) translateY(-10px) rotate(-6deg); }
  44% { transform: scale(1.4, 0.7) translateY(4px); opacity: 1; } 52% { transform: scale(0.1); opacity: 0; } 76% { transform: scale(0.1); opacity: 0; }
  90% { transform: scale(1.12); opacity: 1; } 100% { transform: scale(1); opacity: 1; }
}
.fm-achoo {
  position: absolute; left: 50%; top: -4px; transform: translateX(-50%) scale(0.3) rotate(-6deg); opacity: 0; pointer-events: none; white-space: nowrap;
  font-size: 22px; color: #fff; text-shadow: 0 3px 0 var(--ink), 2px 2px 0 var(--ink), -2px 2px 0 var(--ink), 2px -2px 0 var(--ink), -2px -2px 0 var(--ink);
}
.fm-achoo.on { animation: fmAchoo 1.5s ease-out forwards; }
@keyframes fmAchoo { 0% { opacity: 0; transform: translateX(-50%) scale(0.3) rotate(-6deg); } 28% { opacity: 0; } 38% { opacity: 1; transform: translateX(-50%) scale(1.25) rotate(4deg); } 80% { opacity: 1; transform: translateX(-50%) scale(1) rotate(0); } 100% { opacity: 0; transform: translateX(-50%) translateY(-20px) scale(1); } }
.fm-burst { position: absolute; left: 50%; top: 50%; font-size: 18px; pointer-events: none; animation: fmBurst 1.1s ease-out forwards; }
@keyframes fmBurst { 0% { opacity: 1; transform: translate(-50%, -50%) scale(0.4); } 100% { opacity: 0; transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(1.2) rotate(240deg); } }

/* ---- mode cards ---- */
.fm-modes { display: flex; flex-direction: column; gap: 12px; flex: none; }
.fm-mode {
  --c1: #ff9a52; --c2: #ff7a2f; --sh: #d2541a;
  position: relative; display: flex; align-items: center; gap: 12px; width: 100%; min-height: 72px; padding: 9px 14px 9px 10px; text-align: left; cursor: pointer; color: #fff;
  border: 3px solid var(--ink); border-radius: 22px; background: linear-gradient(180deg, var(--c1), var(--c2));
  box-shadow: 0 6px 0 var(--ink), inset 0 2px 0 rgba(255, 255, 255, 0.35); transition: transform 0.06s, box-shadow 0.06s;
}
.fm-mode:active { transform: translateY(4px); box-shadow: 0 2px 0 var(--ink), inset 0 2px 0 rgba(255, 255, 255, 0.35); }
.fm-mode.endless { --c1: #b07bff; --c2: #7a3cf0; --sh: #4b1fa8; min-height: 86px; animation: fmGlow 2.4s ease-in-out infinite; }
.fm-mode.cig { --c1: #ff9a52; --c2: #ff7a2f; --sh: #d2541a; }
.fm-mode.daily { --c1: #5aa0ff; --c2: #2f7dff; --sh: #1d55b8; }
@keyframes fmGlow { 0%, 100% { box-shadow: 0 6px 0 var(--ink), inset 0 2px 0 rgba(255, 255, 255, 0.35), 0 0 0 rgba(176, 123, 255, 0); } 50% { box-shadow: 0 6px 0 var(--ink), inset 0 2px 0 rgba(255, 255, 255, 0.35), 0 0 22px 4px rgba(176, 123, 255, 0.7); } }
.fm-mode .ico {
  flex: none; width: 54px; height: 54px; display: grid; place-items: center; font-size: 34px; line-height: 1; border-radius: 17px;
  background: rgba(255, 255, 255, 0.22); border: 2.5px solid rgba(23, 52, 92, 0.5);
}
.fm-mode.endless .ico { font-size: 40px; }
.fm-mode .txt { flex: 1; min-width: 0; }
.fm-mode .ttl { font-size: 22px; line-height: 1.05; letter-spacing: 0.03em; text-shadow: 0 2px 0 var(--sh); }
.fm-mode.endless .ttl { font-size: 25px; }
.fm-mode .sub { margin-top: 3px; font-size: 12.5px; font-weight: 800; text-shadow: 0 1px 0 var(--sh); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.fm-mult {
  flex: none; min-width: 46px; height: 46px; padding: 0 6px; display: grid; place-items: center; border-radius: 50%; transform: rotate(8deg);
  background: radial-gradient(circle at 35% 30%, #fff3a8, var(--gold) 60%, #f0a500); border: 3px solid var(--ink); box-shadow: 0 3px 0 var(--ink);
  color: var(--ink); font-size: 17px; line-height: 1;
}
.fm-go { flex: none; font-size: 24px; text-shadow: 0 2px 0 var(--sh); }

/* ---- strips ---- */
.fm-strip {
  flex: none; display: flex; align-items: center; gap: 10px; width: 100%; min-height: 48px; padding: 6px 12px; cursor: pointer; text-align: left;
  border: 3px solid var(--ink); border-radius: 18px; background: rgba(255, 255, 255, 0.9); color: var(--ink); box-shadow: 0 4px 0 var(--ink);
  transition: transform 0.06s, box-shadow 0.06s;
}
.fm-strip:active { transform: translateY(3px); box-shadow: 0 1px 0 var(--ink); }
.fm-strip .lbl { flex: none; font-size: 11px; letter-spacing: 0.08em; line-height: 1.1; }
.fm-strip .lbl small { display: block; font-size: 9.5px; font-weight: 800; letter-spacing: 0.04em; opacity: 0.7; }
.fm-mbars { flex: 1; min-width: 0; display: flex; gap: 6px; }
.fm-mbar { position: relative; flex: 1; height: 16px; border-radius: 9px; border: 2.5px solid var(--ink); background: rgba(23, 52, 92, 0.16); overflow: hidden; }
.fm-mbar i { position: absolute; left: 0; top: 0; bottom: 0; width: var(--p, 0%); background: linear-gradient(90deg, #7be89d, var(--green)); transition: width 0.3s; }
.fm-mbar.done i { background: linear-gradient(90deg, #ffe27a, var(--gold)); }
.fm-mbar b { position: absolute; inset: 0; display: grid; place-items: center; font-size: 9px; color: var(--ink); }
.fm-strip .fm-mult { min-width: 38px; height: 38px; font-size: 14px; }
.fm-chips { flex: 1; min-width: 0; display: flex; justify-content: flex-end; gap: 4px; }
.fm-chips .fm-chip { flex: 1 1 0; width: auto; min-width: 0; max-width: 27px; font-size: 14px; }
.fm-chip {
  width: 27px; height: 31px; flex: none; display: grid; place-items: center; font-size: 15px; line-height: 1; border-radius: 9px;
  border: 2.5px solid var(--ink); background: rgba(23, 52, 92, 0.12); color: rgba(23, 52, 92, 0.4);
}
.fm-chip.got { background: linear-gradient(180deg, #ffe27a, var(--gold)); color: var(--ink); }
.fm-chip.next { color: var(--ink); animation: fmChip 1s ease-in-out infinite alternate; }
@keyframes fmChip { from { box-shadow: 0 0 0 0 rgba(255, 207, 58, 0.9); } to { box-shadow: 0 0 0 4px rgba(255, 207, 58, 0); } }

/* ---- bottom nav ---- */
.fm-nav { flex: none; display: flex; gap: 6px; width: 100%; margin-top: 2px; }
.fm-nb {
  position: relative; flex: 1; min-width: 0; min-height: 58px; padding: 6px 1px 5px; cursor: pointer; color: var(--ink);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  border: 3px solid var(--ink); border-radius: 16px; background: linear-gradient(180deg, #ffffff, #d9eaff); box-shadow: 0 4px 0 var(--ink);
  transition: transform 0.06s, box-shadow 0.06s;
}
.fm-nb:active { transform: translateY(3px); box-shadow: 0 1px 0 var(--ink); }
.fm-nb .e { font-size: 22px; line-height: 1; }
.fm-nb .t { font-size: 9.5px; letter-spacing: 0.03em; white-space: nowrap; }
.fm-bdg {
  position: absolute; top: -9px; right: -5px; min-width: 21px; height: 21px; padding: 0 5px; display: grid; place-items: center; border-radius: 11px;
  border: 2.5px solid var(--ink); background: var(--red); color: #fff; font-size: 11px; line-height: 1; pointer-events: none;
}
.fm-bdg.gold { background: var(--gold); color: var(--ink); }
.fm-bdg.pulse { animation: fmPulse 0.9s ease-in-out infinite alternate; }
.fm-bdg.off { display: none; }
@keyframes fmPulse { from { transform: scale(1); } to { transform: scale(1.22); } }

.fm-main.enter .fm-modes > *, .fm-main.enter .fm-strip, .fm-main.enter .fm-nav { animation: fmRise 0.45s cubic-bezier(.2, 1.3, .4, 1) backwards; }
.fm-main.enter .fm-modes > *:nth-child(2) { animation-delay: 0.06s; }
.fm-main.enter .fm-modes > *:nth-child(3) { animation-delay: 0.12s; }
@keyframes fmRise { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }

@media (max-height: 760px) {
  .fm-mascot-wrap { display: none; }
  .fm-logo { font-size: clamp(38px, 14vw, 62px); }
}
@media (max-height: 680px) {
  .fm-col { gap: 7px; }
  .fm-modes { gap: 9px; }
  .fm-mode { min-height: 62px; padding-top: 6px; padding-bottom: 6px; }
  .fm-mode.endless { min-height: 70px; }
  .fm-mode .ico { width: 46px; height: 46px; font-size: 28px; }
  .fm-nb { min-height: 52px; }
  .fm-tag { display: none; }
}
@media (max-width: 350px) {
  .fm-nb .t { font-size: 8.5px; letter-spacing: 0; }
  .fm-pill { font-size: 15px; padding: 5px 9px 5px 7px; }
  .fm-mode { gap: 9px; padding-right: 10px; }
  .fm-mode .ico, .fm-mode.endless .ico { width: 44px; height: 44px; font-size: 27px; }
  .fm-mode .ttl { font-size: 17px; }
  .fm-mode.endless .ttl { font-size: 18px; }
  .fm-mode .sub { font-size: 11px; }
  .fm-mult { min-width: 40px; height: 40px; font-size: 15px; }
  .fm-strip .lbl { font-size: 10px; }
}

/* =============================================================== PANELS */
.fm-ov {
  position: absolute; inset: 0; z-index: 60; display: flex; flex-direction: column;
  padding-top: calc(var(--sat, env(safe-area-inset-top, 0px)) + 10px);
  background: linear-gradient(180deg, rgba(118, 183, 250, 0.98) 0%, rgba(188, 224, 255, 0.99) 55%, rgba(233, 245, 255, 0.99) 100%);
  animation: fmIn 0.22s ease-out;
}
@keyframes fmIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
.fm-head { flex: none; display: flex; flex-wrap: wrap; align-items: center; gap: 8px 10px; width: 100%; max-width: 520px; margin: 0 auto; padding: 0 16px; }
.fm-titles { flex: 1 1 140px; min-width: 0; }
.fm-title { font-size: clamp(24px, 8.5vw, 34px); line-height: 1; transform: rotate(-2deg); transform-origin: left center; white-space: nowrap; overflow: visible;
  text-shadow: 0 3px 0 var(--ink), 2px 2px 0 var(--ink), -2px 2px 0 var(--ink), 2px -2px 0 var(--ink), -2px -2px 0 var(--ink), 0 6px 12px rgba(10, 30, 60, 0.35); }
.fm-title.long { font-size: clamp(20px, 6.6vw, 28px); }
.fm-sub { margin-top: 6px; min-height: 14px; font-size: 12px; font-weight: 800; letter-spacing: 0.12em; color: var(--ink); }
.fm-x {
  order: 2; flex: none; width: 44px; height: 44px; padding: 0; border-radius: 14px; border: 3px solid var(--ink); cursor: pointer;
  background: rgba(255, 255, 255, 0.9); color: var(--ink); font-size: 18px; line-height: 1; box-shadow: 0 3px 0 var(--ink); transition: transform 0.06s, box-shadow 0.06s;
}
.fm-x:active { transform: translateY(2px); box-shadow: 0 1px 0 var(--ink); }
.fm-pills { order: 3; flex: 1 0 100%; display: flex; gap: 8px; }
.fm-tabs { flex: none; display: flex; gap: 8px; width: 100%; max-width: 520px; margin: 12px auto 4px; padding: 0 16px; }
.fm-tab {
  flex: 1; min-height: 44px; padding: 8px 2px 7px; cursor: pointer; border-radius: 16px; border: 3px solid var(--ink); background: rgba(255, 255, 255, 0.65);
  color: var(--ink); font-size: 14px; font-weight: 900; letter-spacing: 0.05em; box-shadow: 0 4px 0 var(--ink); transition: transform 0.06s, box-shadow 0.06s;
}
.fm-tab.on { background: linear-gradient(180deg, #ff9a52, var(--orange)); color: #fff; text-shadow: 0 2px 0 var(--orange-dark); transform: translateY(2px); box-shadow: 0 2px 0 var(--ink); }
.fm-body { flex: 1; min-height: 0; margin-top: 8px; overflow-y: auto; overflow-x: hidden; touch-action: pan-y; overscroll-behavior: contain; -webkit-overflow-scrolling: touch;
  padding: 6px 0 calc(var(--sab, env(safe-area-inset-bottom, 0px)) + 28px); }
.fm-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 520px; margin: 0 auto; padding: 4px 16px 0; }

/* buttons */
.fm-btn {
  flex: none; min-height: 44px; padding: 9px 14px 8px; cursor: pointer; border: 3px solid var(--ink); border-radius: 16px; font-size: 15px; font-weight: 900; letter-spacing: 0.03em;
  color: #fff; white-space: nowrap; background: linear-gradient(180deg, #ff9a52, var(--orange)); box-shadow: 0 4px 0 var(--ink); text-shadow: 0 2px 0 var(--orange-dark);
  transition: transform 0.06s, box-shadow 0.06s;
}
.fm-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 var(--ink); }
.fm-btn.big { width: 100%; font-size: 21px; padding: 13px 14px 12px; }
.fm-btn.blue { background: linear-gradient(180deg, #5aa0ff, var(--blue)); text-shadow: 0 2px 0 var(--blue-dark); }
.fm-btn.green { background: linear-gradient(180deg, #6fe39a, var(--green)); text-shadow: 0 2px 0 #1e8a49; }
.fm-btn.poor, .fm-btn.lock { background: linear-gradient(180deg, #bcc7d6, #98a7bb); text-shadow: 0 2px 0 #6d7c92; }
.fm-btn.on { background: linear-gradient(180deg, #ffe27a, var(--gold)); color: var(--ink); text-shadow: none; cursor: default; transform: translateY(3px); box-shadow: 0 1px 0 var(--ink); }
.fm-btn.sm { min-height: 44px; min-width: 56px; padding: 6px 10px; font-size: 14px; }
.fm-btn.glow { animation: fmBtnGlow 0.9s ease-in-out infinite alternate; }
@keyframes fmBtnGlow { from { box-shadow: 0 4px 0 var(--ink), 0 0 0 0 rgba(255, 207, 58, 0.9); } to { box-shadow: 0 4px 0 var(--ink), 0 0 16px 5px rgba(255, 207, 58, 0.8); } }
.fm-shake { animation: fmShake 0.32s; }
@keyframes fmShake { 0%, 100% { transform: none; } 20% { transform: translateX(-6px); } 40% { transform: translateX(6px); } 60% { transform: translateX(-4px); } 80% { transform: translateX(3px); } }
.fm-popc { animation: fmPop 0.6s cubic-bezier(.2, 1.8, .4, 1); }
@keyframes fmPop { 0% { transform: scale(0.85) rotate(-3deg); } 40% { transform: scale(1.1) rotate(2deg); } 100% { transform: none; } }

/* generic row card */
.fm-row {
  position: relative; display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 20px; border: 3px solid var(--ink);
  background: linear-gradient(180deg, #ffffff, #e2f0ff); box-shadow: 0 4px 0 var(--ink); color: var(--ink);
}
.fm-row.done { background: linear-gradient(180deg, #fff9dc, #ffe9a2); box-shadow: 0 4px 0 var(--ink), 0 0 0 3px var(--gold), 0 0 16px 3px rgba(255, 207, 58, 0.5); }
.fm-row.claimed { opacity: 0.72; }
.fm-row.secret { background: linear-gradient(180deg, #eef1f7, #d5dbe8); }
.fm-aico { flex: none; width: 46px; height: 46px; display: grid; place-items: center; font-size: 26px; line-height: 1; border-radius: 15px; background: rgba(23, 52, 92, 0.1); border: 2.5px solid var(--ink); }
.fm-amid { flex: 1; min-width: 0; }
.fm-an { font-size: 15px; line-height: 1.15; }
.fm-ad { margin-top: 2px; font-size: 12px; font-weight: 800; color: #5a7196; line-height: 1.25; }
.fm-abar { display: flex; align-items: center; gap: 6px; margin-top: 5px; }
.fm-bar { position: relative; flex: 1; height: 11px; border-radius: 7px; background: rgba(23, 52, 92, 0.18); border: 2px solid var(--ink); overflow: hidden; }
.fm-bar i { position: absolute; left: 0; top: 0; bottom: 0; width: var(--p, 0%); background: linear-gradient(90deg, #7be89d, var(--green)); }
.fm-row.done .fm-bar i { background: linear-gradient(90deg, #ffe27a, var(--gold)); }
.fm-bn { flex: none; font-size: 11px; color: #5a7196; }
.fm-ar { margin-top: 5px; font-size: 11.5px; font-weight: 900; color: var(--orange-dark); }
.fm-ok { flex: none; font-size: 22px; color: var(--green); }

/* ---- daily ---- */
.fm-streak { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 20px; border: 3px solid var(--ink); background: linear-gradient(180deg, #fff, #ffe9c9); box-shadow: 0 4px 0 var(--ink); color: var(--ink); }
.fm-streak .fl { font-size: 34px; line-height: 1; }
.fm-streak .st { font-size: 20px; line-height: 1.1; }
.fm-streak .sd { margin-top: 2px; font-size: 12px; font-weight: 800; color: #5a7196; }
.fm-dgrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px 10px; }
.fm-dcard {
  position: relative; display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 10px 4px 10px; min-height: 124px; border-radius: 20px;
  border: 3px solid var(--ink); background: linear-gradient(180deg, #ffffff, #e2f0ff); box-shadow: 0 4px 0 var(--ink); color: var(--ink); text-align: center;
}
.fm-dcard.big { grid-column: 1 / -1; flex-direction: row; justify-content: center; gap: 14px; min-height: 96px; background: linear-gradient(180deg, #fff0ff, #e7d6ff); }
.fm-dcard .dl { font-size: 12px; letter-spacing: 0.08em; color: #5a7196; }
.fm-dcard .di { font-size: 34px; line-height: 1.1; min-height: 38px; display: grid; place-items: center; }
.fm-dcard .dv { font-size: 18px; line-height: 1; }
.fm-dcard .dx { font-size: 12px; color: #1b7fa8; }
.fm-dcard .dn { font-size: 12px; line-height: 1.1; max-width: 100%; padding: 0 2px; }
.fm-dcard .dst { margin-top: auto; font-size: 13px; min-height: 18px; }
.fm-dcard.claimed { background: linear-gradient(180deg, #e6ffee, #c3f1d2); }
.fm-dcard.claimed .dst { color: var(--green); font-size: 20px; }
.fm-dcard.locked { filter: grayscale(0.55); opacity: 0.8; }
.fm-dcard.today {
  background: linear-gradient(180deg, #fff9dc, #ffe9a2); animation: fmToday 0.9s ease-in-out infinite alternate;
}
.fm-dcard.today .dst { color: #fff; background: var(--orange); border: 2.5px solid var(--ink); border-radius: 12px; padding: 3px 12px; font-size: 14px; text-shadow: 0 1px 0 var(--orange-dark); }
@keyframes fmToday { from { box-shadow: 0 4px 0 var(--ink), 0 0 0 3px var(--gold), 0 0 8px 2px rgba(255, 207, 58, 0.4); } to { box-shadow: 0 4px 0 var(--ink), 0 0 0 3px var(--gold), 0 0 22px 7px rgba(255, 207, 58, 0.9); } }
.fm-prev { flex: none; width: 46px; height: 46px; border-radius: 50%; border: 3px solid var(--ink); box-shadow: 0 3px 0 var(--ink); }
.fm-prev.trail { width: 62px; height: 24px; border-radius: 14px 8px 8px 14px; }
.fm-cd { text-align: center; color: var(--ink); font-size: 14px; letter-spacing: 0.06em; line-height: 1.5; }
.fm-cd b { display: block; font-size: 30px; letter-spacing: 0.04em; font-variant-numeric: tabular-nums; }

/* ---- stats / settings ---- */
.fm-sw { position: relative; flex: none; width: 58px; height: 34px; padding: 0; cursor: pointer; border-radius: 17px; border: 3px solid var(--ink); background: #aab6c8; transition: background 0.15s; }
.fm-sw::after { content: ""; position: absolute; top: 2px; left: 2px; width: 24px; height: 24px; border-radius: 50%; background: #fff; border: 2.5px solid var(--ink); transition: transform 0.15s; }
.fm-sw.on { background: var(--green); }
.fm-sw.on::after { transform: translateX(24px); }
.fm-tgl { font-size: 17px; flex: 1; }
.fm-sec { margin: 6px 4px 0; font-size: 13px; letter-spacing: 0.12em; color: var(--ink); }
.fm-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.fm-stat { padding: 9px 10px; border-radius: 16px; border: 3px solid var(--ink); background: rgba(255, 255, 255, 0.85); box-shadow: 0 3px 0 var(--ink); color: var(--ink); }
.fm-stat b { display: block; font-size: 20px; line-height: 1.1; }
.fm-stat span { font-size: 11px; font-weight: 800; color: #5a7196; letter-spacing: 0.03em; }
.fm-credits { padding: 12px 14px; border-radius: 18px; border: 3px solid var(--ink); background: rgba(255, 255, 255, 0.7); color: var(--ink); font-size: 12.5px; font-weight: 800; line-height: 1.5; }
.fm-credits em { display: block; margin-top: 6px; font-style: normal; font-weight: 900; opacity: 0.6; }

/* ---- missions ---- */
.fm-multbig { display: flex; align-items: center; gap: 14px; padding: 12px 14px; border-radius: 22px; border: 3px solid var(--ink); background: linear-gradient(180deg, #fff9dc, #ffe39a); box-shadow: 0 4px 0 var(--ink); color: var(--ink); }
.fm-multbig .fm-mult { min-width: 84px; height: 84px; font-size: 38px; border-width: 4px; box-shadow: 0 4px 0 var(--ink), 0 0 0 5px rgba(255, 207, 58, 0.45); }
.fm-multbig .mt { font-size: 18px; line-height: 1.15; }
.fm-multbig .ms { margin-top: 4px; font-size: 12px; font-weight: 800; color: #6b5a1e; line-height: 1.35; }
.fm-mrow .fm-an { font-size: 14.5px; }
.fm-skip { flex: none; min-height: 44px; min-width: 52px; padding: 4px 8px; cursor: pointer; border-radius: 14px; border: 3px solid var(--ink); background: rgba(255, 255, 255, 0.9); color: var(--ink); font-size: 11px; line-height: 1.15; box-shadow: 0 3px 0 var(--ink); }
.fm-skip b { display: block; font-size: 18px; }
.fm-skip:active { transform: translateY(2px); box-shadow: 0 1px 0 var(--ink); }
.fm-note { text-align: center; color: var(--ink); font-size: 12.5px; font-weight: 800; line-height: 1.45; padding: 0 6px; }

/* ---- upgrades ---- */
.fm-pips { display: flex; gap: 4px; margin-top: 6px; }
.fm-pips i { width: 20px; height: 9px; border-radius: 5px; border: 2px solid var(--ink); background: rgba(23, 52, 92, 0.15); }
.fm-pips i.on { background: linear-gradient(180deg, #ffe27a, var(--gold)); }
.fm-up .fm-btn { min-width: 84px; }

/* ---- hunt ---- */
.fm-word { display: flex; justify-content: center; gap: 6px; padding: 6px 0; }
.fm-word .fm-chip { flex: 1 1 0; width: auto; min-width: 0; max-width: 42px; height: 52px; font-size: 26px; border-radius: 13px; }

/* =============================================================== MODAL / BOX OVERLAY / TOAST / FX */
.fm-modal { position: absolute; inset: 0; z-index: 70; display: flex; align-items: center; justify-content: center; padding: 20px; background: rgba(10, 25, 50, 0.62); animation: fmIn 0.2s ease-out; }
.fm-mcard {
  display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; max-width: 340px; padding: 22px 18px 18px; text-align: center; color: var(--ink);
  border: 3px solid var(--ink); border-radius: 26px; background: linear-gradient(180deg, #fff, #dcecff); box-shadow: 0 6px 0 var(--ink), 0 14px 30px rgba(10, 30, 60, 0.4);
  animation: fmPop 0.55s cubic-bezier(.2, 1.8, .4, 1);
}
.fm-mcard .big { font-size: 64px; line-height: 1; }
.fm-mcard .mt { font-size: 24px; line-height: 1.1; color: var(--orange-dark); }
.fm-mcard .mm { font-size: 14px; font-weight: 800; line-height: 1.4; }

.fm-boxov { position: absolute; inset: 0; z-index: 80; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; padding: 20px;
  background: radial-gradient(ellipse at 50% 40%, rgba(60, 40, 120, 0.85), rgba(10, 18, 40, 0.94)); animation: fmIn 0.2s ease-out; }
.fm-boxt { font-size: 22px; letter-spacing: 0.06em; text-shadow: 0 3px 0 var(--ink); }
.fm-boxs { min-height: 18px; font-size: 13px; font-weight: 800; color: #cbd8f5; }
.fm-gift { font-size: 128px; line-height: 1; padding: 6px 14px; border: 0; background: transparent; cursor: pointer; filter: drop-shadow(0 8px 0 rgba(0, 0, 0, 0.35)); animation: fmWiggle 1.1s ease-in-out infinite; }
.fm-gift.open { animation: fmBoxShake 0.65s ease-in-out forwards; }
@keyframes fmWiggle { 0%, 100% { transform: rotate(-4deg) scale(1); } 50% { transform: rotate(4deg) scale(1.06); } }
@keyframes fmBoxShake { 0% { transform: rotate(0) scale(1); } 15% { transform: rotate(-12deg) scale(1.1); } 30% { transform: rotate(12deg) scale(1.15); } 45% { transform: rotate(-14deg) scale(1.2); } 60% { transform: rotate(14deg) scale(1.25); } 100% { transform: scale(1.6); opacity: 0; } }
.fm-rcard { display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; max-width: 300px; padding: 20px 16px; border-radius: 24px; border: 3px solid var(--ink); color: var(--ink);
  background: linear-gradient(180deg, #fff, #dcecff); box-shadow: 0 6px 0 var(--ink); animation: fmPop 0.6s cubic-bezier(.2, 1.8, .4, 1); text-align: center; }
.fm-rcard.rare { background: linear-gradient(180deg, #fff6c7, #ffd966); box-shadow: 0 6px 0 var(--ink), 0 0 30px 8px rgba(255, 207, 58, 0.8); }
.fm-rcard .ri { font-size: 64px; line-height: 1; }
.fm-rcard .rt { font-size: 24px; line-height: 1.1; }
.fm-rcard .rs { font-size: 13px; font-weight: 800; color: #5a7196; }
.fm-sumlist { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; max-width: 340px; }
.fm-sumlist span { padding: 6px 10px; border-radius: 14px; border: 3px solid var(--ink); background: #fff; color: var(--ink); font-size: 14px; }
.fm-sumlist span.rare { background: var(--gold); }
.fm-boxbtns { display: flex; gap: 10px; width: 100%; max-width: 300px; }
.fm-boxbtns .fm-btn { flex: 1; }

.fm-toasts { position: absolute; left: 0; right: 0; top: 0; z-index: 90; display: flex; flex-direction: column; align-items: center; pointer-events: none;
  padding-top: calc(var(--sat, env(safe-area-inset-top, 0px)) + 8px); }
.fm-toast {
  display: flex; align-items: center; gap: 10px; max-width: min(92vw, 380px); padding: 8px 16px 8px 10px; border-radius: 18px; border: 3px solid var(--ink);
  background: linear-gradient(180deg, #2c5799, var(--ink)); box-shadow: 0 5px 0 rgba(10, 25, 50, 0.8), 0 10px 24px rgba(10, 30, 60, 0.35);
  transform: translateY(-150%); opacity: 0; transition: transform 0.35s cubic-bezier(.2, 1.5, .4, 1), opacity 0.25s; pointer-events: none;
}
.fm-toast.on { transform: none; opacity: 1; }
.fm-toast.gold { background: linear-gradient(180deg, #ffb347, #e8830f); }
.fm-toast.egg { background: linear-gradient(180deg, #b07bff, #7a3cf0); }
.fm-toast .ti { flex: none; font-size: 30px; line-height: 1; }
.fm-toast .tt { font-size: 15px; letter-spacing: 0.02em; color: var(--gold); text-shadow: 0 2px 0 rgba(0, 0, 0, 0.35); line-height: 1.15; }
.fm-toast.gold .tt { color: #fff; }
.fm-toast .ts { margin-top: 2px; font-size: 12.5px; font-weight: 800; color: #dbe9ff; line-height: 1.25; }

.fm-fx { position: absolute; inset: 0; z-index: 95; pointer-events: none; overflow: hidden; }
.fm-fly { position: absolute; font-size: 22px; line-height: 1; opacity: 0; transform: translate(-50%, -50%); animation: fmFly 0.85s cubic-bezier(.5, 0, .75, .35) both; }
@keyframes fmFly { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); } 15% { opacity: 1; transform: translate(-50%, -50%) scale(1.25); } 100% { opacity: 0.9; transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0.5); } }
.fm-cf { position: absolute; top: -16px; left: var(--x); width: 9px; height: 14px; border-radius: 2px; background: var(--c); animation: fmCf var(--d) linear forwards; }
@keyframes fmCf { to { transform: translate(var(--dx), 112vh) rotate(var(--r)); } }

@media (prefers-reduced-motion: reduce) {
  .fm-main *, .fm-ov *, .fm-modal *, .fm-boxov *, .fm-toast { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}
`,Mb=e=>String(Math.max(0,Math.floor(Number.isFinite(e)?e:0))).replace(/\B(?=(\d{3})+(?!\d))/g,`.`);function Nb(e){return e=Math.max(0,Math.round(e||0)),e>=1e3?`${(e/1e3).toFixed(1).replace(`.`,`,`)} km`:`${e} m`}function Pb(e){let t=Math.round((e||0)*1e3);if(t<1e3)return`${t} kg`;let n=Math.round(e*10)/10;return n<10?`${n.toFixed(1).replace(`.`,`,`)} ton`:`${Mb(Math.round(e))} ton`}function Fb(e){let t=Math.max(0,Math.ceil(e/1e3)),n=e=>(e<10?`0`:``)+e;return`${n(Math.floor(t/3600))}:${n(Math.floor(t%3600/60))}:${n(t%60)}`}function Y(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.textContent=n),r}function X(e,...t){for(let n of t)n&&e.appendChild(n);return e}function Ib(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function Lb(e,t,n,r){let i=Y(`button`,e,t);return i.setAttribute(`type`,`button`),r&&i.setAttribute(`aria-label`,r),n&&i.addEventListener(`click`,e=>{e&&e.stopPropagation&&e.stopPropagation(),n(e)}),i}function Rb(e,t,n){e.style.setProperty(t,n)}var zb=(e,t)=>(e.find(e=>e.id===t)||{name:t}).name;function Bb(e){let t=[];return e?(e.coins&&t.push(`❄️ ${Mb(e.coins)}`),e.crystals&&t.push(`💎 ${e.crystals}`),e.boxes&&t.push(`🎁 ${e.boxes}`),e.sleds&&t.push(`🛷 ${e.sleds}`),e.skin&&t.push(`👕 ${zb(dg,e.skin)}`),e.trail&&t.push(`✨ ${zb(fg,e.trail)}`),t):t}var Vb=e=>Bb(e).join(`  `);function Hb(e,t){let n=(e===`skin`?dg:fg).find(e=>e.id===t),r=n&&n.preview||{a:`#fff`,b:`#cfe2f7`},i=Y(`div`,`fm-prev ${e===`trail`?`trail`:`ball`}`);return i.style.background=e===`trail`?`linear-gradient(270deg, ${r.a}, ${r.b})`:`radial-gradient(circle at 34% 30%, ${r.a}, ${r.b} 92%)`,i}function Ub(){if(document.getElementById(Db))return;let e=document.createElement(`style`);e.id=Db,e.textContent=jb,(document.head||document.body).appendChild(e)}function Wb({save:e,meta:t,root:n,callbacks:r={}}={}){Ub();let i=n||document.getElementById(`app`)||document.body,a=r||{},o=e=>{try{a.sfx&&a.sfx(e)}catch{}},s=()=>{try{return{sound:!0,music:!0,haptics:!0,visualName:`NORMAL`,...a.getToggles?a.getToggles():{}}}catch{return{sound:!0,music:!0,haptics:!0,visualName:`NORMAL`}}},c=typeof requestAnimationFrame==`function`,l=null,u=!1,d={level:1,levelStars:0,theme:``,endlessBest:0,endlessBestDist:0,dailyNum:1,dailyBest:0,coins:0},f=null,p=null,m=null,h=0,g=0,_=``,v=[],y=Y(`div`,`fm-toasts`);y.setAttribute(`aria-live`,`polite`);let b=Y(`div`,`fm-fx`);i.appendChild(y),i.appendChild(b);let x=()=>e&&Number.isFinite(e.coins)?e.coins:d.coins||0;function S(e=60){let t=[`#ff5d73`,`#ffb02e`,`#ffe14a`,`#5fe08a`,`#3fc1ff`,`#b07bff`,`#ffffff`];for(let n=0;n<e;n++){let e=Y(`i`,`fm-cf`);Rb(e,`--x`,`${Math.random()*100}%`),Rb(e,`--dx`,`${Math.round((Math.random()-.5)*160)}px`),Rb(e,`--r`,`${Math.round(360+Math.random()*900)}deg`),Rb(e,`--d`,`${(1.8+Math.random()*1.6).toFixed(2)}s`),Rb(e,`--c`,t[n%t.length]),e.style.animationDelay=`${(Math.random()*.4).toFixed(2)}s`,b.appendChild(e),setTimeout(()=>e.remove(),3800)}}function C(e,t,n=14,r=90){for(let i=0;i<n;i++){let a=Y(`span`,`fm-burst`,t),o=i/n*Math.PI*2+Math.random()*.5,s=r*(.55+Math.random()*.6);Rb(a,`--dx`,`${Math.round(Math.cos(o)*s)}px`),Rb(a,`--dy`,`${Math.round(Math.sin(o)*s*.85-10)}px`),e.appendChild(a),setTimeout(()=>a.remove(),1200)}}let w=e=>{let t=e&&e.getBoundingClientRect?e.getBoundingClientRect():{left:0,top:0,width:0,height:0},n=b.getBoundingClientRect?b.getBoundingClientRect():{left:0,top:0};return{x:t.left-n.left+t.width/2,y:t.top-n.top+t.height/2}};function T(e,t,n,r,i){if(!e||!t){i&&i();return}let a=w(e),o=w(t);for(let e=0;e<r;e++){let t=Y(`span`,`fm-fly`,n);t.style.left=`${Math.round(a.x+(Math.random()-.5)*30)}px`,t.style.top=`${Math.round(a.y+(Math.random()-.5)*20)}px`,Rb(t,`--dx`,`${Math.round(o.x-a.x)}px`),Rb(t,`--dy`,`${Math.round(o.y-a.y)}px`),t.style.animationDelay=`${e*55}ms`,b.appendChild(t),setTimeout(()=>t.remove(),900+e*55+80)}setTimeout(()=>{i&&i()},780+r*55)}function E(e,t){let n=Y(`div`,`fm-pill ${t||``}`.trim()),r=Y(`span`,`ico`,e),i=Y(`span`,`num`,`0`);X(n,r,i);let a=0,o=0;return{el:n,num:i,set(e,t){let r=a;if(a=e,c&&o&&typeof cancelAnimationFrame==`function`&&cancelAnimationFrame(o),!t||r===e||!c){i.textContent=Mb(e);return}n.classList.remove(`bump`),n.offsetWidth,n.classList.add(`bump`);let s=performance.now(),l=t=>{let n=Math.min(1,(t-s)/450);i.textContent=Mb(Math.round(r+(e-r)*(1-(1-n)**3))),n<1&&(o=requestAnimationFrame(l))};o=requestAnimationFrame(l)}}}let D=[],O=!1,k=new Map;function A(){if(O||!D.length)return;O=!0;let e=D.shift(),t=Y(`div`,`fm-toast ${e.kind||``}`.trim()),n=Y(`div`,`tb`);X(n,Y(`div`,`tt`,e.title),e.sub?Y(`div`,`ts`,e.sub):null),X(t,Y(`div`,`ti`,e.icon||`🏆`),n),y.appendChild(t),t.offsetWidth,t.classList.add(`on`),setTimeout(()=>{t.classList.remove(`on`),setTimeout(()=>{t.remove(),O=!1,A()},380)},e.ms||2700)}function j(e){e&&e.title&&(D.length>=4&&D.splice(1,1),D.push(e),A())}function ee(e,t){if(!e)return;let n=Date.now();if(k.has(e.id)&&n-k.get(e.id)<4e3)return;k.set(e.id,n);let r=Vb(t&&t.reward?t.reward:e.reward);j({icon:e.icon||`🏆`,title:`🏆 ${e.name}`,sub:t&&t.auto?`${r?`${r} · `:``}SIR BULUNDU!`:r?`${r} · ÖDÜL BAŞARIMLAR'DA`:``,kind:e.secret?`egg`:``}),u&&pe()}function M(e){let t=f;if(t){f=null;for(let e of t.timers)clearInterval(e),clearTimeout(e);t.el.remove(),t.onClose&&t.onClose(),!e&&u&&pe()}}function te({id:e,title:n,sub:r=``,pills:a=[`coins`],tabs:s=null,onTab:c=null}){M(!0);let l=Y(`div`,`fm-ov fm-p-${e}`);l.setAttribute(`role`,`dialog`),l.setAttribute(`aria-modal`,`true`),l.setAttribute(`aria-label`,n);let u={id:e,el:l,timers:[],pills:{},onClose:null,list:null,body:null,setSub:null,refreshPills:null,tab:0},d=Y(`div`,`fm-head`),p=Y(`div`,`fm-titles`),m=Y(`div`,`fm-sub`,r);X(p,Y(`div`,n.length>11?`fm-title long`:`fm-title`,n),m),u.setSub=e=>{m.textContent=e};let h=Y(`div`,`fm-pills`);if(a.includes(`coins`)&&(u.pills.coins=E(`❄️`),X(h,u.pills.coins.el)),a.includes(`crystals`)&&(u.pills.crystals=E(`💎`,`cr`),X(h,u.pills.crystals.el)),u.refreshPills=e=>{u.pills.coins&&u.pills.coins.set(x(),e),u.pills.crystals&&u.pills.crystals.set(t.crystals,e)},u.refreshPills(!1),X(d,p,Lb(`fm-x`,`✕`,()=>{o(`back`),M()},`Kapat`)),h.firstChild&&d.appendChild(h),X(l,d),s){let e=Y(`div`,`fm-tabs`),t=s.map((e,n)=>Lb(`fm-tab${n===0?` on`:``}`,e,()=>{u.tab!==n&&(u.tab=n,t.forEach((e,t)=>e.classList.toggle(`on`,t===n)),o(`click`),u.body&&(u.body.scrollTop=0),c&&c(n))}));X(e,...t),X(l,e)}let g=Y(`div`,`fm-body`),_=Y(`div`,`fm-list`);return g.appendChild(_),g.addEventListener(`touchmove`,e=>e.stopPropagation(),{passive:!0}),X(l,g),u.body=g,u.list=_,i.appendChild(l),f=u,u}function N(){o(`click`);let e=te({id:`daily`,title:`GÜNLÜK ÖDÜL`,pills:[`coins`,`crystals`]}),n=!1,r=null,i=null;function s(e,n){let i=t.dailyReward(e),a=e<=(n.available?n.day-1:n.day)?`claimed`:n.available&&e===n.day?`today`:`locked`,o=Y(`div`,`fm-dcard ${a}${e===7?` big`:``}`),s=Y(`div`,e===7?`fm-dinfo`:``),c=Y(`div`,`dl`,e===7?`GÜN 7 · BÜYÜK ÖDÜL`:`GÜN ${e}`),l,u;i.skin||i.trail?(l=Y(`div`,`di`),l.appendChild(Hb(i.skin?`skin`:`trail`,i.skin||i.trail)),u=Y(`div`,`dn`,i.skin?zb(dg,i.skin):zb(fg,i.trail))):(l=Y(`div`,`di`,e>=6?`❄️❄️`:`❄️`),u=Y(`div`,`dv`,`+${Mb(i.coins)}`));let d=i.crystals?Y(`div`,`dx`,`+💎 ${i.crystals}`):null,f=Y(`div`,`dst`,a===`claimed`?`✓`:a===`today`?`AL!`:`🔒`);return e===7?(X(s,c,u,d),X(o,l,s,f)):X(o,c,l,u,d,f),a===`today`&&(r=o),o}function c(){let a=t.daily();Ib(e.list),r=null,i=null,e.setSub(a.streak>0?`🔥 SERİ ${a.streak} GÜN`:`HER GÜN GEL, KAZAN`);let o=Y(`div`,`fm-streak`),u=Y(`div`,`fl`,a.streak>0?`🔥`:`🌱`),d=Y(`div`,``);X(d,Y(`div`,`st`,a.streak>0?`${a.streak} günlük seri!`:`Serini başlat!`)),X(d,Y(`div`,`sd`,a.grace?`Bir günü kaçırdın ama seri bozulmadı. Bu hoşgörü günü!`:`Bir gün atlarsan seri bozulmaz. İki gün atlarsan sıfırlanır.`)),X(o,u,d),e.list.appendChild(o);let p=Y(`div`,`fm-dgrid`);for(let e=1;e<=7;e++)p.appendChild(s(e,a));if(e.list.appendChild(p),a.available)i=Lb(`fm-btn big glow`,`ÖDÜLÜ AL!`,l),e.list.appendChild(i);else{let r=Y(`div`,`fm-cd`),i=Y(`span`,``,`SONRAKİ ÖDÜL`),o=Y(`b`,``,Fb(a.nextInMs));X(r,i,o),e.list.appendChild(r);let s=setInterval(()=>{let r=t.daily();if(r.available){clearInterval(s),f===e&&!n&&c();return}o.textContent=Fb(r.nextInMs)},1e3);e.timers.push(s)}}function l(){if(n)return;let s=t.claimDaily();if(!s){c();return}if(n=!0,o(`confirm`),a.onReward)try{a.onReward(`daily`,s)}catch{}let l=r||i;s.coins&&T(l,e.pills.coins&&e.pills.coins.el,`❄️`,9,()=>e.refreshPills(!0)),s.crystals&&T(l,e.pills.crystals&&e.pills.crystals.el,`💎`,Math.min(6,2+s.crystals),()=>e.refreshPills(!0)),(s.skin||s.trail)&&j({icon:`👕`,title:`YENİ EŞYA!`,sub:s.skin?zb(dg,s.skin):zb(fg,s.trail),kind:`gold`}),S(s.skin||s.trail?70:36),r&&r.classList.add(`fm-popc`);let d=setTimeout(()=>{n=!1,f===e&&(c(),e.refreshPills(!0)),u&&pe()},1150);e.timers.push(d)}return c(),e}function ne(){o(`click`);let e=te({id:`ach`,title:`BAŞARIMLAR`,tabs:[`TÜMÜ`,`AÇIK`,`GİZLİ`],onTab:()=>s(),pills:[`coins`,`crystals`]}),n=e=>e.hint||`Gizli bir şey var...`;function r(e){let r=t.progress(e.id),a=e.secret&&!r.done,o=Y(`div`,`fm-row${r.done?` done`:``}${r.claimed?` claimed`:``}${a?` secret`:``}`),s=Y(`div`,`fm-aico`,a?`❓`:e.icon),c=Y(`div`,`fm-amid`);if(X(c,Y(`div`,`fm-an`,a?`???`:e.name),Y(`div`,`fm-ad`,a?`İpucu: ${n(e)}`:e.desc)),!a&&e.goal>1){let e=Y(`div`,`fm-abar`),t=Y(`div`,`fm-bar`),n=Y(`i`);Rb(n,`--p`,`${Math.round(r.value/r.goal*100)}%`),t.appendChild(n),X(e,t,Y(`div`,`fm-bn`,`${Mb(r.value)}/${Mb(r.goal)}`)),c.appendChild(e)}if(c.appendChild(Y(`div`,`fm-ar`,a?`🎁 ???`:Vb(e.reward))),X(o,s,c),r.done&&!r.claimed){let t=Lb(`fm-btn sm glow`,`AL`,()=>i(e,o,t));o.appendChild(t)}else r.claimed&&o.appendChild(Y(`div`,`fm-ok`,`✓`));return o}function i(n,r,i){let c=t.claimAchievement(n.id);if(!c){s();return}if(o(`confirm`),a.onReward)try{a.onReward(`achievement`,c)}catch{}c.coins&&T(i,e.pills.coins.el,`❄️`,6,()=>e.refreshPills(!0)),c.crystals&&T(i,e.pills.crystals.el,`💎`,3,()=>e.refreshPills(!0)),(c.skin||c.trail)&&j({icon:`🎁`,title:`YENİ EŞYA!`,sub:c.skin?zb(dg,c.skin):zb(fg,c.trail),kind:`gold`}),r.classList.add(`fm-popc`);let l=e.body.scrollTop,u=setTimeout(()=>{f===e&&(s(),e.body.scrollTop=l)},700);e.timers.push(u)}function s(){Ib(e.list);let n=t.unclaimedCount();e.setSub(`${t.doneCount()}/${by.length} AÇIK${n?` · ${n} ÖDÜL BEKLİYOR`:``}`);let i=by.slice(),c=e=>t.progress(e.id);e.tab===1?i=i.filter(e=>c(e).done):e.tab===2&&(i=i.filter(e=>e.secret));let l=e=>{let t=c(e);return t.done&&!t.claimed?0:e.secret&&!t.done?3:t.claimed?2:1};i.sort((e,t)=>{let n=l(e),r=l(t);return n===r?n===1?c(t).value/c(t).goal-c(e).value/c(e).goal:0:n-r}),e.tab===0&&n>1&&e.list.appendChild(Lb(`fm-btn big green`,`HEPSİNİ AL (${n})`,()=>{o(`confirm`);let n=0,r=0;for(let e of by){let i=t.progress(e.id);if(i.done&&!i.claimed){let i=t.claimAchievement(e.id);if(i&&(n+=i.coins||0,r+=i.crystals||0,a.onReward))try{a.onReward(`achievement`,i)}catch{}}}S(40),n&&T(e.body,e.pills.coins.el,`❄️`,10,()=>e.refreshPills(!0)),r&&T(e.body,e.pills.crystals.el,`💎`,4,()=>e.refreshPills(!0));let i=setTimeout(()=>{f===e&&s()},700);e.timers.push(i)})),i.length||e.list.appendChild(Y(`div`,`fm-note`,e.tab===1?`Henüz açık başarım yok. Oyna, kazan!`:`Burada bir şey yok.`));for(let t of i)e.list.appendChild(r(t));e.tab===2&&e.list.appendChild(Y(`div`,`fm-note`,`🐇 ${t.stats().eggs}/${fy.length} sır bulundu. Menüde, oyunda, her yerde bir şeyler saklı...`))}return s(),e}function re(){o(`click`);let e=te({id:`settings`,title:`AYARLAR`,sub:`FREEMON v${Ob}`,pills:[]});function n(e,t,n,r){let i=Y(`div`,`fm-row`),a=Lb(`fm-sw${s()[n]?` on`:``}`,``,()=>{let e=!s()[n];try{r&&r(e)}catch{}o(`toggle`),a.classList.toggle(`on`,!!s()[n])},t);return a.setAttribute(`role`,`switch`),a.setAttribute(`aria-checked`,String(!!s()[n])),X(i,Y(`div`,`fm-aico`,e),Y(`div`,`fm-tgl`,t),a),i}X(e.list,n(`🔊`,`SES`,`sound`,a.onSound),n(`🎵`,`MÜZİK`,`music`,a.onMusic),n(`📳`,`TİTREŞİM`,`haptics`,a.onHaptics));let r=Y(`div`,`fm-row`),i=Y(`div`,`fm-tgl`,`GÖRÜNÜM`),c=Lb(`fm-btn blue`,`🎨 ${s().visualName}`,()=>{let e;try{e=a.onVisualCycle?a.onVisualCycle():null}catch{e=null}o(`toggle`),c.textContent=`🎨 ${e||s().visualName}`});X(r,Y(`div`,`fm-aico`,`🖼️`),i,c),e.list.appendChild(r),e.list.appendChild(Y(`div`,`fm-sec`,`İSTATİSTİKLER`));let l=t.stats(),u=[[`SEVİYE`,l.level],[`TOPLAM KOŞU`,Mb(l.runs)],[`EN UZUN KOŞU`,Nb(l.bestDistance)],[`TOPLAM MESAFE`,Nb(l.totalDistance)],[`YUTULAN`,Mb(l.swallowed)],[`YIKILAN BİNA`,Mb(l.destroyed)],[`KIRILAN ENGEL`,Mb(l.smashed)],[`KIL PAYI`,Mb(l.closeCalls)],[`TOPLANAN TON`,Pb(l.totalTons)],[`YILDIZ`,`⭐ ${l.stars}`],[`BAŞARIM`,`${l.achievements}/${l.achievementsTotal}`],[`SIRLAR`,`${l.eggs}/${l.eggsTotal}`],[`ÇARPAN`,`x${l.multiplier}`],[`GÖREV SETİ`,Mb(l.missionSets)]],d=Y(`div`,`fm-stats`);for(let[e,t]of u)X(d,X(Y(`div`,`fm-stat`),Y(`b`,``,String(t)),Y(`span`,``,e)));e.list.appendChild(d);let f=Y(`div`,`fm-credits`);return f.appendChild(Y(`div`,``,`3D modeller: Kenney (kenney.nl) — CC0 · Ses efektleri: Kenney, rubberduck (OpenGameArt) — CC0 · Müzik ve kod: FREEMON ekibi`)),f.appendChild(Y(`em`,``,`FREEMON v${Ob}`)),e.list.appendChild(f),e}function ie(){o(`click`);let e=te({id:`missions`,title:`GÖREVLER`,pills:[`coins`,`crystals`]});function n(){Ib(e.list);let r=t.multiplier(),i=t.maxMultiplier();e.setSub(`SET #${t.missionSetsDone()+1}`);let a=Y(`div`,`fm-multbig`),s=Y(`div`,`fm-mult`,`x${r}`),c=Y(`div`,``);X(c,Y(`div`,`mt`,`KALICI SKOR ÇARPANI`)),X(c,Y(`div`,`ms`,r>=i?`Maksimum çarpana ulaştın!`:`3 görevi bitir, çarpan x${r+1} olsun. En fazla x${i}. Skorun her zaman bu çarpanla çarpılır.`)),X(a,s,c),e.list.appendChild(a),t.missions().forEach((r,i)=>{let a=Y(`div`,`fm-row fm-mrow${r.done?` done`:``}`),s=Y(`div`,`fm-amid`);X(s,Y(`div`,`fm-an`,r.text));let c=Y(`div`,`fm-abar`),l=Y(`div`,`fm-bar`),u=Y(`i`);if(Rb(u,`--p`,`${Math.round(r.value/r.goal*100)}%`),l.appendChild(u),X(c,l,Y(`div`,`fm-bn`,`${Mb(r.value)}/${Mb(r.goal)}`)),s.appendChild(c),X(a,Y(`div`,`fm-aico`,r.icon),s),r.done)a.appendChild(Y(`div`,`fm-ok`,`✓`));else{let r=t.skipCost(),s=Lb(`fm-skip`,``,()=>{if(!t.skipMission(i)){s.classList.add(`fm-shake`),o(`back`),setTimeout(()=>s.classList.remove(`fm-shake`),340);return}o(`confirm`),e.refreshPills(!0),n()},`Görevi değiştir`);X(s,Y(`b`,``,`↻`),document.createTextNode(r?`💎 1`:`BEDAVA`)),a.appendChild(s)}e.list.appendChild(a)});let l=t.missionSetReward();e.list.appendChild(Y(`div`,`fm-note`,`SET ÖDÜLÜ: ${Vb(l)}`)),e.list.appendChild(Y(`div`,`fm-note`,`Her gün 1 görevi ücretsiz değiştirebilirsin, sonrası 💎 1.`))}return n(),e}function ae(){o(`click`);let e=te({id:`up`,title:`GELİŞTİR`,sub:`GÜÇLENDİRME SÜRELERİ`,pills:[`coins`,`crystals`]});function n(){Ib(e.list);for(let r of oy){let i=t.upgradeLevel(r.id),s=t.upgradeCost(r.id),c=Y(`div`,`fm-row fm-up`),l=Y(`div`,`fm-amid`),u=t.duration(r.id),d=i<5?r.durations[i+1]:null;X(l,Y(`div`,`fm-an`,r.name),Y(`div`,`fm-ad`,d?`${u} sn → ${d} sn`:`${u} sn (en yüksek)`));let f=Y(`div`,`fm-pips`);for(let e=0;e<5;e++)f.appendChild(Y(`i`,e<i?`on`:``));if(l.appendChild(f),X(c,Y(`div`,`fm-aico`,r.icon),l),s===null)c.appendChild(Lb(`fm-btn sm on`,`MAKS ✓`));else{let i=x()>=s,l=Lb(`fm-btn${i?``:` poor`}`,`❄️ ${Mb(s)}`,()=>{if(!i||!t.buyUpgrade(r.id)){l.classList.add(`fm-shake`),o(`back`),setTimeout(()=>l.classList.remove(`fm-shake`),340);return}if(o(`confirm`),a.onReward)try{a.onReward(`upgrade`,{upgrade:r.id})}catch{}e.refreshPills(!0),n(),S(14)});c.appendChild(l)}e.list.appendChild(c)}let r=Y(`div`,`fm-row fm-up`),i=Y(`div`,`fm-amid`);X(i,Y(`div`,`fm-an`,`KIZAK`),Y(`div`,`fm-ad`,`Bir çarpışmayı affeder. Koşuda çift dokunarak kullan.`),Y(`div`,`fm-ar`,`Stok: 🛷 ${t.sleds()}`)),X(r,Y(`div`,`fm-aico`,`🛷`),i);let s=x()>=uy.price,c=Lb(`fm-btn blue${s?``:` poor`}`,`${uy.count}'LÜ ❄️ ${uy.price}`,()=>{if(!s||!t.buySled(1)){c.classList.add(`fm-shake`),o(`back`),setTimeout(()=>c.classList.remove(`fm-shake`),340);return}o(`confirm`),e.refreshPills(!0),n()});r.appendChild(c),e.list.appendChild(r),e.list.appendChild(Y(`div`,`fm-note`,`💎 Kristal: Yeti seni yakalayınca devam etmek için kullanılır (her seferinde iki katı). Şu an: ${t.crystals}`))}return n(),e}function oe(){o(`click`);let e=te({id:`hunt`,title:`GÜNÜN KELİMESİ`,pills:[`coins`]}),n=t.letterHunt();e.setSub(n.complete?`BUGÜN TAMAM!`:`${n.count}/7 HARF`);let r=Y(`div`,`fm-word`);n.found.forEach((e,t)=>r.appendChild(Y(`div`,`fm-chip${e?` got`:t===n.nextLetter?` next`:``}`,e||t===n.nextLetter?kb[t]:`?`))),e.list.appendChild(r),e.list.appendChild(Y(`div`,`fm-note`,n.complete?`Bugünkü kelimeyi tamamladın! Yarın yeni bir av seni bekliyor.`:`Koşu sırasında F-R-E-E-M-O-N harfleri sırayla belirir. Bir günde yedisini de topla! Sıradaki harf: ${n.letter}`));let i=Y(`div`,`fm-row`);X(i,Y(`div`,`fm-aico`,`🔤`),X(Y(`div`,`fm-amid`),Y(`div`,`fm-an`,n.complete?`KAZANDIN`:`ÖDÜL`),Y(`div`,`fm-ar`,Vb(n.reward)))),e.list.appendChild(i);let a=Y(`div`,`fm-streak`);return X(a,Y(`div`,`fl`,n.streak>0?`🔥`:`🌱`),X(Y(`div`,``),Y(`div`,`st`,n.streak>0?`${n.streak} günlük seri`:`Seri yok`),Y(`div`,`sd`,`Her gün tamamla, ödül büyüsün. Seri günü: ${n.streakDay}/7`))),e.list.appendChild(a),e}function se(){p&&(p.remove(),p=null)}function ce(e){se();let n=Y(`div`,`fm-modal`),r=Y(`div`,`fm-mcard`),s=Lb(`fm-btn big`,`AL ${Vb({coins:e.coins})}`,()=>{let e=t.claimHoliday();if(o(`confirm`),e&&a.onReward)try{a.onReward(`holiday`,e)}catch{}S(60),e&&l&&T(s,l.coinsPill.el,`❄️`,8,()=>{l.coinsPill.set(x(),!0)}),setTimeout(se,500)});X(r,Y(`div`,`big`,e.emoji),Y(`div`,`mt`,e.name),Y(`div`,`mm`,e.msg),s),n.appendChild(r),i.appendChild(n),p=n,S(50)}function le(){let e=null;try{e=t.holiday()}catch{e=null}e&&!e.claimed&&_!==e.key&&(_=e.key,ce(e))}function P(){m&&(m.remove(),m=null)}function ue(e){let t=!!e.rare,n=Y(`div`,`fm-rcard${t?` rare`:``}`),r=`❄️`,i=e.coins?`+${Mb(e.coins)} ❄️`:``,a=t?`NADİR!`:`Kar tanesi`;if(e.skin?(r=`👕`,i=zb(dg,e.skin),a=`YENİ TOP!`):e.trail?(r=`✨`,i=zb(fg,e.trail),a=`YENİ İZ!`):e.crystals?(r=`💎`,i=`+${e.crystals} KRİSTAL`,a=`Devam etmek için`):e.sleds?(r=`🛷`,i=`+${e.sleds} KIZAK`,a=`Bir çarpışmayı affeder`):e.converted&&(a=`Zaten sahiptin: kar tanesine döndü`),e.skin||e.trail){let t=Y(`div`,`ri`);t.appendChild(Hb(e.skin?`skin`:`trail`,e.skin||e.trail)),n.appendChild(t)}else n.appendChild(Y(`div`,`ri`,r));return X(n,Y(`div`,`rt`,i),Y(`div`,`rs`,a)),n}function de(e,n){P();let r=Math.max(0,Math.floor(t.boxes)),s=Math.min(r,Math.max(1,Math.floor(e||r)));if(s<=0)return n&&n(),null;o(`click`);let c=Y(`div`,`fm-boxov`);c.setAttribute(`role`,`dialog`),c.setAttribute(`aria-modal`,`true`),c.setAttribute(`aria-label`,`Sürpriz Kutu`),i.appendChild(c),m=c;let l=0,d=!1,f=!1;function p(){if(!f&&(f=!0,P(),u&&pe(),n))try{n()}catch{}}function h(){Ib(c),d=!1,X(c,Y(`div`,`fm-boxt fm-ol`,`SÜRPRİZ KUTU`),Y(`div`,`fm-boxs`,s>1?`${l+1} / ${s}`:``));let e=Lb(`fm-gift`,`🎁`,()=>_(e),`Kutuyu aç`);c.appendChild(e),c.appendChild(Y(`div`,`fm-boxs`,`DOKUN VE AÇ!`)),s-l>1&&c.appendChild(Lb(`fm-btn blue`,`HEPSİNİ AÇ (${s-l})`,v))}function g(e){if(a.onReward)try{a.onReward(`box`,e)}catch{}}function _(e){d||(d=!0,e.classList.add(`open`),o(`click`),setTimeout(()=>{if(f)return;let e=t.openBox();if(!e){p();return}g(e),o(`confirm`),Ib(c),X(c,Y(`div`,`fm-boxt fm-ol`,e.rare?`NADİR ÖDÜL!`:`ÖDÜLÜN`),ue(e)),S(e.rare?90:36),l++;let n=l>=s;c.appendChild(Lb(`fm-btn big green`,n?`TAMAM`:`SIRADAKİ`,()=>{o(`confirm`),n?p():h()})),d=!1},650))}function v(){if(d)return;d=!0,o(`confirm`);let e=[];for(;l<s;){let n=t.openBox();if(!n)break;g(n),e.push(n),l++}Ib(c),X(c,Y(`div`,`fm-boxt fm-ol`,`ÖDÜLLERİN`));let n=Y(`div`,`fm-sumlist`);for(let t of e)n.appendChild(Y(`span`,t.rare?`rare`:``,Vb(t)||`❄️`));c.appendChild(n),S(70),c.appendChild(Lb(`fm-btn big green`,`TAMAM`,()=>{o(`confirm`),p()})),d=!1}return h(),{close:p}}function fe(){let e=Y(`div`,`fm-main fm-hide`),n={};n.root=e;let r=Y(`div`,`fm-top`);n.lvl=Lb(`fm-lvl`,``,()=>{o(`click`);let e=t.levelInfo();j({icon:`⭐`,title:`SEVİYE ${e.level}`,sub:`${Mb(e.cur)} / ${Mb(e.need)} XP · koştukça yükselir`,ms:2200})},`Seviye`);let s=Y(`div`,`fm-lvl-in`);n.lvlNum=Y(`b`,``,`1`),X(s,Y(`small`,``,`SVY`),n.lvlNum),n.lvl.appendChild(s),n.crPill=E(`💎`,`cr`),n.coinsPill=E(`❄️`),n.crPill.el.setAttribute(`role`,`img`),n.crPill.el.setAttribute(`aria-label`,`Kristal`),X(r,n.lvl,Y(`div`,`fm-spacer-x`),n.crPill.el,n.coinsPill.el),e.appendChild(r);let c=Y(`div`,`fm-scroll`);c.addEventListener(`touchmove`,e=>e.stopPropagation(),{passive:!0});let u=Y(`div`,`fm-col`),d=Y(`div`,`fm-hero`);n.hero=d;let f=Y(`div`,`fm-logo`);f.setAttribute(`role`,`img`),f.setAttribute(`aria-label`,`FREEMON`);let p=[[`#ff7a8a`,`#ff2d55`],[`#ffc457`,`#ff8a00`],[`#ffec6a`,`#ffc400`],[`#7cf0a2`,`#22b86c`],[`#6fd0ff`,`#2f7dff`],null,[`#c79bff`,`#7a3cf0`]];kb.split(``).forEach((e,t)=>{if(t===5){let e=Y(`span`,`fm-ball`);Rb(e,`--i`,String(t)),X(e,Y(`i`,`e l`),Y(`i`,`e r`),Y(`i`,`n`)),f.appendChild(e);return}let n=Y(`span`,`fm-ch`,e);n.setAttribute(`data-t`,e),Rb(n,`--i`,String(t)),Rb(n,`--c1`,p[t][0]),Rb(n,`--c2`,p[t][1]),f.appendChild(n)}),n.logo=f,X(d,f,Y(`div`,`fm-tag`,`YUVARLAN · KAÇ · BÜYÜ`));let m=Y(`div`,`fm-mascot-wrap`),h=Y(`button`,`fm-mascot`);h.setAttribute(`type`,`button`),h.setAttribute(`aria-label`,`Kartopu`),h.style.animationDelay=`-1s`,X(h,X(Y(`i`,`eye l`),Y(`i`,`pup`)),X(Y(`i`,`eye r`),Y(`i`,`pup`)),Y(`i`,`nose`),Y(`i`,`cheek l`),Y(`i`,`cheek r`),Y(`i`,`mouth`));let g=Y(`div`,`fm-achoo`,`HAPŞUU!`);X(m,h,g),n.mascot=h,n.achoo=g,n.mascotWrap=m,d.appendChild(m),u.appendChild(d),u.appendChild(Y(`div`,`fm-flex`));let _=Y(`div`,`fm-modes`);function v(e,t,n,r){let i=Lb(`fm-mode ${e}`,``,()=>{o(`confirm`),r&&r()}),a=Y(`div`,`txt`),s=Y(`div`,`sub`,``);return X(a,Y(`div`,`ttl`,n),s),X(i,Y(`div`,`ico`,t),a),{b:i,sub:s}}let y=v(`endless`,`∞`,`YETİ KAÇIŞI`,()=>a.onEndless&&a.onEndless());n.multBadge=Y(`div`,`fm-mult`,`x1`),y.b.appendChild(n.multBadge);let b=v(`cig`,`⛰️`,`ÇIĞ`,()=>a.onLevels&&a.onLevels());b.b.appendChild(Y(`div`,`fm-go`,`▶`));let x=v(`daily`,`🏔️`,`GÜNÜN DAĞI`,()=>a.onDaily&&a.onDaily());x.b.appendChild(Y(`div`,`fm-go`,`▶`)),n.subE=y.sub,n.subC=b.sub,n.subD=x.sub,X(_,y.b,b.b,x.b),u.appendChild(_);let S=Lb(`fm-strip fm-ms`,``,()=>ie(),`Görevler`),C=Y(`div`,`lbl`,`GÖREVLER`);n.mbars=[0,1,2].map(()=>{let e=Y(`div`,`fm-mbar`),t=Y(`i`),n=Y(`b`,``,``);return X(e,t,n),{bar:e,fill:t,tx:n}});let w=Y(`div`,`fm-mbars`);for(let e of n.mbars)w.appendChild(e.bar);n.stripMult=Y(`div`,`fm-mult`,`x1`),X(S,C,w,n.stripMult),u.appendChild(S);let T=Lb(`fm-strip fm-hs`,``,()=>oe(),`Günün kelimesi`),D=Y(`div`,`lbl`,`GÜNÜN KELİMESİ`);X(D,Y(`small`,``,``)),n.huntSmall=D.lastChild,n.chips=kb.split(``).map(()=>Y(`div`,`fm-chip`,`?`));let O=Y(`div`,`fm-chips`);for(let e of n.chips)O.appendChild(e);X(T,D,O),u.appendChild(T);let k=Y(`div`,`fm-nav`);function A(e,t,n){let r=Lb(`fm-nb`,``,()=>{o(`click`),n()},t),i=Y(`span`,`fm-bdg off`,``);return X(r,Y(`span`,`e`,e),Y(`span`,`t`,t),i),{b:r,bdg:i}}let ee=A(`👕`,`DOLAP`,()=>a.onShop&&a.onShop()),M=A(`⚡`,`GELİŞTİR`,()=>ae()),te=A(`🏆`,`BAŞARIM`,()=>ne()),se=A(`🎁`,`ÖDÜL`,()=>N()),ce=A(`⚙️`,`AYAR`,()=>re());return n.nUp=M,n.nAch=te,n.nDaily=se,X(k,ee.b,M.b,te.b,se.b,ce.b),u.appendChild(k),c.appendChild(u),e.appendChild(c),i.appendChild(e),we(n),l=n,n}function pe(){let e=l;if(!e)return;let n=t.levelInfo();e.lvlNum.textContent=String(n.level),Rb(e.lvl,`--p`,String(Math.round(n.frac*100))),e.coinsPill.set(x(),!1),e.crPill.set(t.crystals,!1);let r=t.multiplier();e.multBadge.textContent=`x${r}`,e.stripMult.textContent=`x${r}`,e.subE.textContent=d.endlessBest>0?`REKOR ${Mb(d.endlessBest)} · ${Nb(d.endlessBestDist)}`:`Yeti seni kovalıyor!`;let i=Math.max(0,Math.min(3,d.levelStars|0));e.subC.textContent=`DAĞ ${d.level} · ${`⭐`.repeat(i)}${`☆`.repeat(3-i)}${d.theme?` · ${d.theme}`:``}`,e.subD.textContent=d.dailyBest>0?`#${d.dailyNum} · ${Pb(d.dailyBest)}`:`#${d.dailyNum} · bugünün dağı`;let a=t.missions();e.mbars.forEach((e,t)=>{let n=a[t];n&&(Rb(e.fill,`--p`,`${Math.round(n.value/n.goal*100)}%`),e.bar.classList.toggle(`done`,n.done),e.tx.textContent=n.done?`✓`:``)});let o=t.letterHunt();o.found.forEach((t,n)=>{let r=e.chips[n];r.className=`fm-chip${t?` got`:n===o.nextLetter?` next`:``}`,r.textContent=t||n===o.nextLetter?kb[n]:`?`}),e.huntSmall.textContent=o.complete?`TAMAM!`:`${o.count}/7 HARF`;let s=t.unclaimedCount();e.nAch.bdg.textContent=String(s),e.nAch.bdg.classList.toggle(`off`,s<=0);let c=t.daily();e.nDaily.bdg.textContent=`!`,e.nDaily.bdg.classList.toggle(`off`,!c.available),e.nDaily.bdg.classList.toggle(`pulse`,c.available);let u=!1;for(let e of oy){let n=t.upgradeCost(e.id);if(n!==null&&x()>=n){u=!0;break}}e.nUp.bdg.textContent=`!`,e.nUp.bdg.className=`fm-bdg gold${u?``:` off`}`}let me=0,he=0,ge=!1,_e=[],ve=``;function ye(e,t,n){j({icon:e,title:t,sub:n,kind:`egg`,ms:2600})}function be(){l&&(l.logo.classList.remove(`spin`,`squish`),l.logo.offsetWidth,l.logo.classList.add(`spin`),setTimeout(()=>l&&l.logo.classList.remove(`spin`),1250),S(70),o(`confirm`))}function xe(){if(!l)return;let e=Date.now();if(e-he>1500&&(me=0),he=e,me++,me>=7){me=0,be(),t.egg(`logo`);return}l.logo.classList.remove(`squish`,`spin`),l.logo.offsetWidth,l.logo.classList.add(`squish`),o(`click`)}function Se(e){if(_e.push(e),_e.length>Ab.length&&_e.shift(),!(_e.length<Ab.length)){for(let e=0;e<Ab.length;e++){let t=Ab[e],n=_e[e];if(n!==t&&(n!==`tap`||t!==`a`&&t!==`b`))return}_e.length=0,t.egg(`konami`),ye(`🎮`,`HİLE YOK!`,`Konami kodunu buldun... ama hile yok :)`),S(50),o(`confirm`)}}function Ce(){if(!l)return;let e=l.mascot;e.classList.remove(`press`),e.classList.remove(`sneeze`),e.offsetWidth,e.classList.add(`sneeze`),l.achoo.classList.remove(`on`),l.achoo.offsetWidth,l.achoo.classList.add(`on`),setTimeout(()=>{C(l.mascotWrap,`❄️`,16,110),o(`confirm`)},780),setTimeout(()=>{e.classList.remove(`sneeze`),l.achoo.classList.remove(`on`)},1900),t.egg(`sneeze`)}function we(e){e.logo.addEventListener(`click`,e=>{if(e.stopPropagation(),ge){ge=!1;return}xe()});let t=0,n=0,r=!1;ge=!1;let i=e=>{if(window.removeEventListener(`pointerup`,i),window.removeEventListener(`pointercancel`,a),!r)return;r=!1;let o=e.clientX-t,s=e.clientY-n,c=Math.abs(o),l=Math.abs(s);if(Math.max(c,l)<36){Se(`tap`);return}ge=!0,Se(c>l?o>0?`right`:`left`:s>0?`down`:`up`)},a=()=>{r=!1,window.removeEventListener(`pointerup`,i),window.removeEventListener(`pointercancel`,a)};e.hero.addEventListener(`pointerdown`,e=>{r=!0,ge=!1,t=e.clientX,n=e.clientY,window.addEventListener(`pointerup`,i),window.addEventListener(`pointercancel`,a)});let o=0,s=()=>{o&&(clearTimeout(o),o=0),e.mascot.classList.remove(`press`)};e.mascot.addEventListener(`pointerdown`,t=>{t.stopPropagation(),s(),e.mascot.classList.add(`press`),o=setTimeout(()=>{o=0,Ce()},3e3)}),e.mascot.addEventListener(`pointerup`,e=>{e.stopPropagation(),s()}),e.mascot.addEventListener(`pointerleave`,s),e.mascot.addEventListener(`pointercancel`,s),e.mascot.addEventListener(`contextmenu`,e=>e.preventDefault()),e.mascot.addEventListener(`click`,e=>e.stopPropagation())}let Te=e=>{if(!e||e.repeat)return;if(e.key===`Escape`){if(m)return;if(p){se();return}f&&(o(`back`),M());return}if(!u||f||p||m||e.ctrlKey||e.metaKey||e.altKey)return;let n=String(e.key||``),r={ArrowUp:`up`,ArrowDown:`down`,ArrowLeft:`left`,ArrowRight:`right`};if(r[n])Se(r[n]);else if(n.length===1){let e=n.toLowerCase();(e===`b`||e===`a`)&&Se(e),ve=(ve+e).slice(-7),ve===kb.toLowerCase()&&(ve=``,S(110),o(`confirm`),ye(`⌨️`,`SİHİRLİ KELİME!`,`FREEMON! Konfeti yağsın.`),t.egg(`typed`))}};typeof window<`u`&&window.addEventListener&&window.addEventListener(`keydown`,Te);function Ee(){De(),h=setInterval(()=>{g++,l&&(g%2==0&&(Rb(l.mascot,`--lx`,`${Math.round((Math.random()-.5)*8)}px`),Rb(l.mascot,`--ly`,`${Math.round((Math.random()-.5)*6)}px`)),g%20==0&&!f&&pe())},1500)}function De(){h&&(clearInterval(h),h=0)}v.push(t.onUnlock((e,t)=>ee(e,t))),v.push(t.on(`levelup`,e=>{j({icon:`⭐`,title:`SEVİYE ${e}!`,sub:`Yeni seviyeye ulaştın`,kind:`gold`}),u&&pe()})),v.push(t.on(`mission`,e=>j({icon:e.icon||`🎯`,title:`GÖREV TAMAM!`,sub:e.text}))),v.push(t.on(`missionset`,e=>{if(j({icon:`✖️`,title:`ÇARPAN x${e.multiplier}!`,sub:`GÖREV SETİ TAMAM · ${Vb(e.reward)}`,kind:`gold`,ms:3200}),a.onReward)try{a.onReward(`missions`,e.reward)}catch{}u&&(S(50),pe())})),v.push(t.on(`letter`,e=>j({icon:`🔤`,title:`HARF: ${e.letter}`,sub:`FREEMON ${e.count}/7`,ms:1800}))),v.push(t.on(`hunt`,e=>{if(j({icon:`🔤`,title:`KELİME TAMAM!`,sub:`GÜNÜN KELİMESİ · ${Vb(e.reward)}`,kind:`gold`,ms:3200}),a.onReward)try{a.onReward(`hunt`,e.reward)}catch{}}));function Oe(e){d={...d,...e||{}};try{t.refresh&&t.refresh()}catch{}l||fe(),M(!0),se(),l.root.classList.remove(`fm-hide`),u=!0,pe(),l.root.classList.remove(`enter`),l.root.offsetWidth,l.root.classList.add(`enter`),setTimeout(()=>{l&&l.root.classList.remove(`enter`)},900),Ee(),le()}function ke(){u=!1,De(),M(!0),se(),l&&l.root.classList.add(`fm-hide`)}function Ae(){if(!u||f||p||m)return!1;let e=null;try{e=t.daily()}catch{e=null}return!e||!e.available?!1:(N(),!0)}function je(){l&&u&&pe(),f&&f.refreshPills&&f.refreshPills(!1)}function Me(){return!!(u||f||p||m)}function Ne(){ke(),P();for(let e of v)try{e()}catch{}v.length=0,typeof window<`u`&&window.removeEventListener&&window.removeEventListener(`keydown`,Te),y.remove(),b.remove(),l&&(l.root.remove(),l=null)}return{showMain:Oe,hideMain:ke,toastAchievement:ee,showDailyIfAvailable:Ae,refresh:je,isOpen:Me,toast:j,confetti:S,openBoxes:de,openDaily:N,openAchievements:ne,openMissions:ie,openUpgrades:ae,openHunt:oe,openSettings:re,closePanel:M,destroy:Ne}}var Gb=`cig-shop-style`,Kb=`
.cs-root {
  --ink: #17345c; --orange: #ff7a2f; --orange-dark: #d2541a; --blue: #2f7dff; --blue-dark: #1d55b8; --gold: #ffcf3a;
  position: absolute; inset: 0; z-index: 50;
  display: flex; flex-direction: column;
  padding-top: calc(var(--sat, env(safe-area-inset-top, 0px)) + 10px);
  background: linear-gradient(180deg, rgba(118, 183, 250, 0.97) 0%, rgba(188, 224, 255, 0.98) 55%, rgba(233, 245, 255, 0.99) 100%);
  color: #fff; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-weight: 900;
  user-select: none; -webkit-user-select: none; -webkit-tap-highlight-color: transparent;
  animation: csIn 0.22s ease-out;
}
.cs-root button { font-family: inherit; -webkit-tap-highlight-color: transparent; }
.cs-root button:focus { outline: none; }
.cs-root button:focus-visible { outline: 3px solid var(--gold); outline-offset: 2px; }
@keyframes csIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }

/* ---- header ---- */
.cs-head {
  display: flex; align-items: center; gap: 10px; width: 100%; max-width: 520px; margin: 0 auto; padding: 0 16px; flex: none;
}
.cs-titles { flex: 1; min-width: 0; }
.cs-title {
  font-size: 34px; line-height: 1; letter-spacing: 0.01em; transform: rotate(-2deg); transform-origin: left center;
  text-shadow: 0 3px 0 var(--ink), 2px 2px 0 var(--ink), -2px 2px 0 var(--ink), 2px -2px 0 var(--ink), -2px -2px 0 var(--ink), 0 6px 12px rgba(10, 30, 60, 0.35);
}
.cs-sub { margin-top: 5px; font-size: 12px; font-weight: 800; letter-spacing: 0.14em; color: var(--ink); }
.cs-coins {
  display: flex; align-items: center; gap: 6px; padding: 6px 12px 6px 10px; border-radius: 16px;
  border: 3px solid var(--ink); background: linear-gradient(180deg, #2c5799, var(--ink));
  box-shadow: 0 3px 0 var(--ink), inset 0 2px 0 rgba(255, 255, 255, 0.18);
  font-size: 19px; line-height: 1; color: var(--gold); white-space: nowrap;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.35);
}
.cs-coins .ico { font-size: 17px; text-shadow: none; }
.cs-coins.bump { animation: csBump 0.4s cubic-bezier(.2, 1.8, .4, 1); }
@keyframes csBump { 0% { transform: scale(1); } 35% { transform: scale(1.18); } 100% { transform: scale(1); } }
.cs-close {
  flex: none; width: 44px; height: 44px; border-radius: 14px; border: 3px solid var(--ink);
  background: rgba(255, 255, 255, 0.88); color: var(--ink); font-size: 18px; font-weight: 900; line-height: 1;
  box-shadow: 0 3px 0 var(--ink); cursor: pointer; padding: 0;
  transition: transform 0.06s, box-shadow 0.06s;
}
.cs-close:active { transform: translateY(2px); box-shadow: 0 1px 0 var(--ink); }

/* ---- tabs ---- */
.cs-tabs { display: flex; gap: 10px; width: 100%; max-width: 520px; margin: 14px auto 12px; padding: 0 16px; flex: none; }
.cs-tab {
  flex: 1; cursor: pointer; padding: 10px 0 9px; border-radius: 16px; border: 3px solid var(--ink);
  background: rgba(255, 255, 255, 0.62); color: var(--ink); font-size: 16px; font-weight: 900; letter-spacing: 0.06em;
  box-shadow: 0 4px 0 var(--ink); transition: transform 0.06s, box-shadow 0.06s;
}
.cs-tab.on {
  background: linear-gradient(180deg, #ff9a52, var(--orange)); color: #fff; text-shadow: 0 2px 0 var(--orange-dark);
  transform: translateY(2px); box-shadow: 0 2px 0 var(--ink);
}

/* ---- scroll area + grid ---- */
.cs-scroll {
  flex: 1; min-height: 0; overflow-y: auto; overflow-x: hidden; touch-action: pan-y; overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch; padding: 6px 0 calc(var(--sab, env(safe-area-inset-bottom, 0px)) + 28px);
}
.cs-grid {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px 14px;
  width: 100%; max-width: 520px; margin: 0 auto; padding: 4px 16px 0;
}
.cs-card {
  position: relative; display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 14px 8px 12px; border-radius: 22px; border: 3px solid var(--ink);
  background: linear-gradient(180deg, #ffffff, #e2f0ff); box-shadow: 0 5px 0 var(--ink); color: var(--ink);
}
.cs-card.sel {
  background: linear-gradient(180deg, #fff9dc, #ffe9a2);
  box-shadow: 0 5px 0 var(--ink), 0 0 0 4px var(--gold), 0 0 20px 4px rgba(255, 207, 58, 0.55);
}
.cs-card.shake { animation: csShake 0.32s; }
.cs-card.pop { animation: csPop 0.6s cubic-bezier(.2, 1.8, .4, 1); z-index: 2; }
.cs-card.ping { animation: csPing 0.25s ease-out; }
@keyframes csShake { 0%, 100% { transform: none; } 20% { transform: translateX(-6px); } 40% { transform: translateX(6px); } 60% { transform: translateX(-4px); } 80% { transform: translateX(3px); } }
@keyframes csPop { 0% { transform: scale(0.82) rotate(-4deg); } 40% { transform: scale(1.14) rotate(2.5deg); } 70% { transform: scale(0.97) rotate(-1deg); } 100% { transform: none; } }
@keyframes csPing { 0% { transform: scale(1); } 40% { transform: scale(1.05); } 100% { transform: scale(1); } }
.cs-name { font-size: 16px; line-height: 1.15; text-align: center; letter-spacing: 0.01em; min-height: 18px; }
.cs-note { margin-top: -4px; font-size: 12px; font-weight: 800; color: #5a7196; }
.cs-lockbadge { position: absolute; top: 8px; right: 10px; font-size: 18px; filter: drop-shadow(0 2px 0 rgba(23, 52, 92, 0.4)); }
.cs-flake {
  position: absolute; left: 50%; top: 38%; font-size: 17px; pointer-events: none; z-index: 3;
  animation: csFlake 0.85s ease-out forwards;
}
@keyframes csFlake {
  0% { opacity: 1; transform: translate(-50%, -50%) scale(0.4); }
  100% { opacity: 0; transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(1.15) rotate(200deg); }
}

/* ---- rarity: border + glow colour (--rc / --rg), corner label, legendary shimmer ---- */
.cs-card { --rc: #8e9db3; --rg: rgba(142, 157, 179, 0); border-color: var(--rc); box-shadow: 0 5px 0 var(--ink), 0 0 12px 1px var(--rg); }
.cs-card.r-rare { --rc: #2f7dff; --rg: rgba(47, 125, 255, 0.42); }
.cs-card.r-epic { --rc: #a855f7; --rg: rgba(168, 85, 247, 0.5); }
.cs-card.r-legendary { --rc: #ffb400; --rg: rgba(255, 180, 0, 0.62); }
.cs-card.sel { box-shadow: 0 5px 0 var(--ink), 0 0 0 4px var(--gold), 0 0 20px 4px rgba(255, 207, 58, 0.55); }
.cs-rar {
  position: absolute; top: 6px; left: 7px; z-index: 2; padding: 3px 6px 2px; border-radius: 8px; pointer-events: none;
  font-size: 9px; line-height: 1; letter-spacing: 0.06em; color: #fff; background: var(--rc);
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.28); box-shadow: 0 2px 0 rgba(23, 52, 92, 0.5);
}
.cs-card.r-legendary .cs-rar {
  color: #4a2f00; text-shadow: none;
  background: linear-gradient(100deg, #ffb400 0%, #ffe27a 24%, #fff8d2 38%, #ffd04a 52%, #ffb400 70%, #ffb400 100%) 0 0 / 260% 100%;
  animation: csShimmer 2.6s linear infinite;
}
@keyframes csShimmer { from { background-position: 100% 0; } to { background-position: -60% 0; } }
.cs-card.r-legendary::after {
  content: ""; position: absolute; inset: 0; z-index: 1; border-radius: 19px; pointer-events: none;
  background: linear-gradient(110deg, rgba(255, 255, 255, 0) 35%, rgba(255, 246, 200, 0.55) 48%, rgba(255, 255, 255, 0) 60%) 0 0 / 280% 100%;
  animation: csSheen 3.4s ease-in-out infinite;
}
@keyframes csSheen { 0% { background-position: 140% 0; } 45%, 100% { background-position: -40% 0; } }

/* ---- buttons ---- */
.cs-btn {
  width: 100%; margin-top: auto; cursor: pointer; padding: 9px 4px 8px; border: 3px solid var(--ink); border-radius: 16px;
  font-size: 15px; font-weight: 900; letter-spacing: 0.03em; color: #fff; white-space: nowrap;
  background: linear-gradient(180deg, #ff9a52, var(--orange)); box-shadow: 0 4px 0 var(--ink); text-shadow: 0 2px 0 var(--orange-dark);
  transition: transform 0.06s, box-shadow 0.06s;
}
.cs-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 var(--ink); }
.cs-btn.pick { background: linear-gradient(180deg, #5aa0ff, var(--blue)); text-shadow: 0 2px 0 var(--blue-dark); }
.cs-btn.poor, .cs-btn.lock { background: linear-gradient(180deg, #bcc7d6, #98a7bb); text-shadow: 0 2px 0 #6d7c92; }
.cs-btn.on {
  background: linear-gradient(180deg, #ffe27a, var(--gold)); color: var(--ink); text-shadow: none; cursor: default;
  transform: translateY(3px); box-shadow: 0 1px 0 var(--ink);
}

/* ---- ball previews (pure CSS, driven by --a --b --c) ---- */
.cs-prev { position: relative; flex: none; }
.cs-prev.ball {
  width: 84px; height: 84px; border-radius: 50%; border: 3px solid var(--ink); overflow: hidden;
  box-shadow: 0 4px 0 var(--ink);
}
.cs-prev.ball.over { overflow: visible; }
.cs-prev.ball.glow { box-shadow: 0 4px 0 var(--ink), 0 0 16px 3px var(--b); }
.cs-prev.ball::after {
  content: ""; position: absolute; inset: 0; border-radius: 50%; pointer-events: none;
  background:
    radial-gradient(circle at 30% 26%, rgba(255, 255, 255, 0.8) 0 6%, rgba(255, 255, 255, 0) 26%),
    radial-gradient(circle at 74% 82%, rgba(10, 30, 70, 0.34), rgba(10, 30, 70, 0) 62%);
}
.cs-fill { position: absolute; inset: 0; display: block; border-radius: 50%; overflow: hidden; }
.cs-prev .pt { position: absolute; display: block; }
.p-solid { background: radial-gradient(circle at 34% 30%, var(--a), var(--b) 92%); }
.p-stripes {
  background:
    radial-gradient(circle at 26% 62%, var(--c, transparent) 0 3px, transparent 4px),
    radial-gradient(circle at 64% 26%, var(--c, transparent) 0 3px, transparent 4px),
    radial-gradient(circle at 74% 70%, var(--c, transparent) 0 3px, transparent 4px),
    radial-gradient(circle at 40% 82%, var(--c, transparent) 0 2.5px, transparent 3.5px),
    repeating-linear-gradient(72deg, var(--a) 0 9px, var(--b) 9px 15px);
}
.p-dots { background: radial-gradient(var(--b) 3.5px, transparent 4.5px) 0 0 / 16px 16px, var(--a); }
.p-swirl {
  background:
    radial-gradient(circle, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0) 62%),
    conic-gradient(from 30deg at 50% 50%, var(--a), var(--b), var(--a), var(--b), var(--a));
}
.p-facets {
  background:
    linear-gradient(115deg, rgba(255, 255, 255, 0) 0 38%, rgba(255, 255, 255, 0.5) 38% 52%, rgba(255, 255, 255, 0) 52%),
    linear-gradient(200deg, rgba(255, 255, 255, 0) 0 60%, rgba(255, 255, 255, 0.32) 60% 70%, rgba(255, 255, 255, 0) 70%),
    linear-gradient(35deg, rgba(0, 50, 110, 0) 0 52%, rgba(0, 50, 110, 0.24) 52% 100%),
    linear-gradient(150deg, var(--a), var(--b));
}
.p-tiles {
  background:
    linear-gradient(rgba(23, 52, 92, 0.6) 2px, transparent 2px) 0 0 / 14px 14px,
    linear-gradient(90deg, rgba(23, 52, 92, 0.6) 2px, transparent 2px) 0 0 / 14px 14px,
    conic-gradient(from 0deg at 50% 50%, var(--c, #ff6ad5), var(--a), var(--b), var(--a), var(--c, #ff6ad5), var(--a), var(--b), var(--a), var(--c, #ff6ad5));
  animation: csHue 2.6s linear infinite;
}
@keyframes csHue { from { filter: hue-rotate(0deg); } to { filter: hue-rotate(360deg); } }
.p-cracks {
  background:
    linear-gradient(112deg, transparent 0 36%, var(--b) 36% 40%, transparent 40% 100%),
    linear-gradient(28deg, transparent 0 55%, var(--b) 55% 58.5%, transparent 58.5% 100%),
    linear-gradient(160deg, transparent 0 18%, var(--b) 18% 21%, transparent 21% 100%),
    radial-gradient(circle at 34% 30%, #54495c, var(--a) 85%);
  animation: csPulse 1.8s ease-in-out infinite;
}
@keyframes csPulse { 0%, 100% { filter: brightness(0.95); } 50% { filter: brightness(1.3); } }
.p-eye {
  background:
    radial-gradient(circle at 48% 46%, #0a0a16 0 11%, var(--b) 12% 29%, var(--c, #fff) 30% 47%, var(--a) 48%);
}
.p-globe {
  background:
    linear-gradient(180deg, var(--c, #fff) 0 13%, transparent 13% 87%, var(--c, #fff) 87%),
    radial-gradient(ellipse 22px 15px at 30% 40%, var(--b) 0 70%, transparent 72%),
    radial-gradient(ellipse 14px 20px at 64% 60%, var(--b) 0 70%, transparent 72%),
    radial-gradient(ellipse 10px 8px at 70% 26%, var(--b) 0 70%, transparent 72%),
    radial-gradient(circle at 34% 30%, var(--a), var(--a));
}
.p-face { background: radial-gradient(circle at 34% 30%, var(--a), var(--b) 92%); }
.p-face i { position: absolute; display: block; }
.p-face .eye { width: 9px; height: 9px; border-radius: 50%; background: #16161d; top: 33%; }
.p-face .e1 { left: 29%; }
.p-face .e2 { left: 59%; }
.p-face .nose { left: 45%; top: 46%; width: 11px; height: 11px; border-radius: 50% 50% 50% 50% / 35% 35% 65% 65%; background: radial-gradient(circle at 40% 30%, #ffa04a, var(--c, #ff7a1a)); }
.p-face .mouth { left: 28%; top: 60%; width: 31px; height: 12px; border-bottom: 3.5px dotted #16161d; border-radius: 0 0 50% 50%; }

/* ---- wave 2 ball previews ---- */
/* goo tendrils (Kara Sıvı / Kızıl Kaos) */
.p-tendrils {
  background:
    radial-gradient(circle at 30% 26%, rgba(255, 255, 255, 0.4) 0 5%, rgba(255, 255, 255, 0) 20%),
    radial-gradient(circle at 36% 32%, var(--a), var(--b) 95%);
}
.cs-prev .td {
  left: 50%; top: 50%; width: 9px; height: var(--h); margin: calc(var(--h) / -2) 0 0 -4.5px; box-sizing: border-box;
  border-radius: 6px 6px 7px 7px; background: var(--b); border: 2px solid var(--ink);
  transform: rotate(var(--r)) translateY(calc(-30px - var(--h) / 2));
  animation: csWob 1.7s ease-in-out infinite; animation-delay: var(--d);
}
@keyframes csWob {
  0%, 100% { transform: rotate(var(--r)) translateY(calc(-30px - var(--h) / 2)) scaleX(1); }
  50% { transform: rotate(calc(var(--r) + 12deg)) translateY(calc(-33px - var(--h) / 2)) scaleX(1.25); }
}
/* flames (Ateş Topu) */
.p-flame { background: radial-gradient(circle at 42% 38%, #fff3a0 0 12%, var(--a) 40%, var(--c, #ffb000) 70%, #ff5a10 100%); }
.cs-prev .fl {
  left: 50%; top: 50%; width: 17px; height: var(--h); margin: calc(var(--h) / -2) 0 0 -8.5px;
  background: linear-gradient(0deg, var(--a), var(--b)); clip-path: polygon(50% 0, 100% 60%, 82% 100%, 18% 100%, 0 60%);
  transform: rotate(var(--r)) translateY(calc(-30px - var(--h) / 2));
  animation: csFlick 0.55s ease-in-out infinite alternate; animation-delay: var(--d);
}
@keyframes csFlick {
  from { transform: rotate(var(--r)) translateY(calc(-30px - var(--h) / 2)) scale(0.9, 0.82); }
  to { transform: rotate(calc(var(--r) + 7deg)) translateY(calc(-32px - var(--h) / 2)) scale(1.08, 1.18); }
}
/* toxic goo with bubbles (Zehir) */
.p-goo {
  background:
    radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.75) 0 4%, rgba(255, 255, 255, 0) 20%),
    radial-gradient(circle at 28% 68%, var(--c) 0 4px, rgba(255, 255, 255, 0.7) 4.5px 5.5px, transparent 6px),
    radial-gradient(circle at 72% 62%, var(--c) 0 3px, rgba(255, 255, 255, 0.7) 3.5px 4.5px, transparent 5px),
    radial-gradient(circle at 62% 22%, var(--c) 0 2.5px, rgba(255, 255, 255, 0.7) 3px 4px, transparent 4.5px),
    radial-gradient(circle at 36% 30%, var(--a), var(--b) 92%);
  animation: csGoo 1.8s ease-in-out infinite;
}
@keyframes csGoo { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.18) saturate(1.2); } }
.cs-prev .gb {
  left: var(--x); top: var(--y); width: var(--w); height: var(--w); box-sizing: border-box; border-radius: 50%;
  border: 2px solid var(--ink); background: radial-gradient(circle at 35% 30%, #fff, var(--c) 45%, var(--a));
  animation: csBub 1.9s ease-in-out infinite; animation-delay: var(--d);
}
@keyframes csBub { 0%, 100% { transform: scale(0.75); opacity: 1; } 70% { transform: scale(1.1); opacity: 1; } 88% { transform: scale(1.3); opacity: 0.55; } }
/* plasma arcs (Plazma) */
.p-plasma {
  background:
    radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.5) 0 5%, rgba(255, 255, 255, 0) 22%),
    radial-gradient(circle at 50% 50%, var(--b), var(--a) 88%);
}
.cs-prev .bolt {
  left: 30%; top: 4%; width: 30%; height: 92%; background: var(--c);
  clip-path: polygon(47% 0, 55% 25%, 41% 50%, 57% 75%, 43% 100%, 49% 100%, 63% 75%, 47% 50%, 61% 25%, 53% 0);
  transform: rotate(var(--r)); filter: drop-shadow(0 0 3px var(--c)); animation: csZap 1.1s steps(1) infinite; animation-delay: var(--d);
}
@keyframes csZap { 0%, 100% { opacity: 1; } 18% { opacity: 0.15; } 30% { opacity: 1; } 62% { opacity: 0; } 70% { opacity: 1; } }
/* night sky (Galaksi) */
.p-stars {
  background:
    radial-gradient(circle at 20% 30%, #fff 0 1.2px, transparent 1.8px),
    radial-gradient(circle at 72% 20%, #fff 0 1.5px, transparent 2.2px),
    radial-gradient(circle at 30% 78%, #ffe9a8 0 1.3px, transparent 2px),
    radial-gradient(circle at 86% 56%, #fff 0 1.2px, transparent 1.8px),
    radial-gradient(circle at 56% 40%, #cfe3ff 0 1.1px, transparent 1.7px),
    radial-gradient(ellipse at 28% 72%, rgba(210, 60, 170, 0.75), transparent 55%),
    radial-gradient(ellipse at 76% 34%, rgba(40, 150, 230, 0.65), transparent 55%),
    radial-gradient(circle at 50% 50%, var(--b), var(--a) 90%);
}
.p-stars::after {
  content: ""; position: absolute; inset: 0; border-radius: 50%;
  background:
    radial-gradient(circle at 45% 58%, #fff 0 1.7px, transparent 2.4px),
    radial-gradient(circle at 80% 72%, #fff 0 1.5px, transparent 2.1px),
    radial-gradient(circle at 14% 60%, #ffe9a8 0 1.5px, transparent 2.1px),
    radial-gradient(circle at 58% 12%, #cfe3ff 0 1.5px, transparent 2.1px);
  animation: csTwinkle 1.3s ease-in-out infinite alternate;
}
@keyframes csTwinkle { from { opacity: 0.15; } to { opacity: 1; } }
/* ice dragon scales (Buz Ejderi) */
.p-scales {
  background:
    radial-gradient(circle at 30% 26%, rgba(255, 255, 255, 0.7) 0 5%, rgba(255, 255, 255, 0) 22%),
    radial-gradient(circle at 50% 100%, var(--a) 0 36%, var(--b) 38% 44%, transparent 46%) 11px 8px / 22px 16px,
    radial-gradient(circle at 50% 100%, var(--a) 0 36%, var(--b) 38% 44%, transparent 46%) 0 0 / 22px 16px,
    var(--b);
}
.cs-prev .dgs {
  top: -9px; width: 9px; height: 14px; margin-left: -4px; left: var(--x); background: var(--c);
  clip-path: polygon(50% 0, 100% 100%, 0 100%); transform: rotate(var(--r));
}
.cs-prev .dge {
  left: 52%; top: 30%; width: 22px; height: 12px; border-radius: 50%; box-shadow: 0 0 0 2px #06203f, 0 0 8px 1px var(--c);
  background: linear-gradient(90deg, transparent 46%, #04101c 46% 54%, transparent 54%), radial-gradient(ellipse, #fff, #7fe4ff);
}
/* robot panels (Robo-Top) */
.p-panels {
  background:
    linear-gradient(90deg, rgba(36, 42, 56, 0.9) 0 2px, transparent 2px) 13px 0 / 26px 100%,
    linear-gradient(rgba(36, 42, 56, 0.9) 0 2px, transparent 2px) 0 11px / 100% 28px,
    radial-gradient(circle at 34% 30%, var(--a), var(--b) 95%);
}
.cs-prev .rv {
  left: -2px; right: -2px; top: 30%; height: 19px; box-sizing: border-box; overflow: hidden; background: #07161d;
  border-top: 2px solid #0a1018; border-bottom: 2px solid #0a1018;
}
.cs-prev .rv::after {
  content: ""; position: absolute; top: 3px; bottom: 3px; left: 0; width: 32%; border-radius: 3px;
  background: linear-gradient(90deg, rgba(53, 230, 255, 0.15), var(--c), rgba(53, 230, 255, 0.15)); animation: csScan 1.6s ease-in-out infinite alternate;
}
@keyframes csScan { from { transform: translateX(8%); } to { transform: translateX(200%); } }
.cs-prev .ran { left: 50%; top: -14px; width: 3px; height: 16px; margin-left: -1.5px; background: #6a7384; }
.cs-prev .ran::after {
  content: ""; position: absolute; left: -2.5px; top: -5px; width: 8px; height: 8px; border-radius: 50%;
  background: #ff3a2a; box-shadow: 0 0 6px #ff3a2a; animation: csBlink 1s steps(2) infinite;
}
@keyframes csBlink { 50% { opacity: 0.25; } }
/* hedgehog (Kirpi) */
.p-quills {
  background:
    radial-gradient(circle at 34% 30%, rgba(255, 255, 255, 0.2), transparent 40%),
    radial-gradient(circle at 50% 50%, var(--a), var(--b) 100%);
}
.cs-prev .qu {
  left: 50%; top: 50%; width: 9px; height: var(--h); margin: calc(var(--h) / -2) 0 0 -4.5px;
  background: linear-gradient(0deg, var(--b), var(--a) 55%, var(--b)); clip-path: polygon(50% 0, 100% 100%, 0 100%);
  transform: rotate(var(--r)) translateY(calc(-32px - var(--h) / 2));
}
.cs-prev .kear { top: -4px; width: 18px; height: 18px; box-sizing: border-box; border-radius: 50%; background: var(--a); border: 2px solid var(--ink); }
.cs-prev .kf {
  left: 26%; top: 34%; width: 48%; height: 54%; border-radius: 50% 50% 46% 46%;
  background: radial-gradient(circle at 50% 35%, #fff3dc, var(--c) 75%);
}
.cs-prev .ke { top: 48%; width: 7px; height: 7px; border-radius: 50%; background: #16161d; }
.cs-prev .kn { left: 45%; top: 64%; width: 9px; height: 8px; border-radius: 50%; background: #16161d; }
/* octopus (Ahtapot) */
.p-octo { background: radial-gradient(circle at 34% 30%, #d58af7, var(--a) 45%, var(--b) 100%); }
.cs-prev .oc {
  left: 50%; top: 50%; width: 11px; height: var(--h); margin: calc(var(--h) / -2) 0 0 -5.5px; box-sizing: border-box;
  border-radius: 6px; background: var(--a); border: 2px solid var(--ink);
  transform: rotate(var(--r)) translateY(calc(-30px - var(--h) / 2));
  animation: csWob 2.1s ease-in-out infinite; animation-delay: var(--d);
}
.cs-prev .oe { top: 24%; width: 24px; height: 24px; border-radius: 50%; background: radial-gradient(circle at 40% 58%, #140a24 0 4px, #fff 4.5px); box-shadow: 0 0 0 1.5px rgba(23, 52, 92, 0.5); }
/* pumpkin (Balkabağı) */
.p-pumpkin { background: repeating-linear-gradient(90deg, var(--b) 0, var(--a) 5px, var(--b) 11px); }
.cs-prev .pst {
  left: 50%; top: -9px; width: 10px; height: 14px; margin-left: -4px; box-sizing: border-box; border: 2px solid var(--ink);
  border-radius: 3px 3px 1px 1px; background: linear-gradient(#8a6a2a, #5d7a22); transform: rotate(8deg);
}
.cs-prev .pe { width: 15px; height: 13px; background: var(--c); clip-path: polygon(50% 0, 100% 100%, 0 100%); animation: csGlowF 1.3s ease-in-out infinite alternate; }
.cs-prev .pn { left: 46%; top: 50%; width: 8px; height: 7px; background: var(--c); clip-path: polygon(50% 0, 100% 100%, 0 100%); animation: csGlowF 1.1s ease-in-out infinite alternate; }
.cs-prev .pm {
  left: 22%; top: 60%; width: 56%; height: 22%; background: var(--c); animation: csGlowF 1.5s ease-in-out infinite alternate;
  clip-path: polygon(0 20%, 12% 0, 25% 25%, 38% 0, 50% 25%, 62% 0, 75% 25%, 88% 0, 100% 20%, 100% 55%, 85% 85%, 50% 100%, 15% 85%, 0 55%);
}
@keyframes csGlowF { from { filter: brightness(0.82); } to { filter: brightness(1.28); } }
/* zombie head (Zombi Kafa) */
.p-zombie { background: radial-gradient(circle at 34% 30%, var(--a), var(--b) 95%); }
.cs-prev .ze1 { left: 17%; top: 32%; width: 22px; height: 22px; border-radius: 50%; background: radial-gradient(circle at 50% 50%, #15100e 0 2.5px, #c23a2a 3px 6px, #f2f0d8 6.5px); box-shadow: 0 0 0 1.5px rgba(23, 52, 92, 0.45); }
.cs-prev .ze2 { left: 56%; top: 36%; width: 16px; height: 15px; border-radius: 50%; background: radial-gradient(circle at 50% 50%, #f0e060 0 2px, #1a2a1c 2.5px); }
.cs-prev .zs { left: 14%; top: 20%; width: 72%; height: 4px; background: #4a2c4a; border-radius: 2px; transform: rotate(-7deg); }
.cs-prev .zs::after { content: ""; position: absolute; left: 0; right: 0; top: -4px; height: 12px; background: repeating-linear-gradient(90deg, #2a1a2e 0 2px, transparent 2px 8px); }
.cs-prev .zm { left: 26%; top: 68%; width: 48%; height: 6px; background: #24121c; border-radius: 3px; }
.cs-prev .zm::after { content: ""; position: absolute; left: 0; right: 0; top: -4px; height: 14px; background: repeating-linear-gradient(90deg, #d8cfa0 0 2px, transparent 2px 8px); }
/* football */
.p-pentagon { background: radial-gradient(circle at 34% 30%, #ffffff, #dde2ea 95%); }
.cs-prev .pg { width: 27px; height: 26px; left: calc(50% - 13.5px); top: calc(48% - 13px); background: var(--b); clip-path: polygon(50% 0, 100% 38%, 81% 100%, 19% 100%, 0 38%); }
.cs-prev .pg.o { transform: rotate(var(--r)) translateY(-37px) rotate(180deg); }
/* basketball */
.p-seams {
  background:
    linear-gradient(90deg, transparent calc(50% - 1.5px), var(--c) calc(50% - 1.5px) calc(50% + 1.5px), transparent calc(50% + 1.5px)),
    linear-gradient(transparent calc(50% - 1.5px), var(--c) calc(50% - 1.5px) calc(50% + 1.5px), transparent calc(50% + 1.5px)),
    radial-gradient(circle 108px at 150% 50%, transparent 0 103px, var(--c) 103px 106px, transparent 106px),
    radial-gradient(circle 108px at -50% 50%, transparent 0 103px, var(--c) 103px 106px, transparent 106px),
    radial-gradient(circle at 34% 30%, var(--a), var(--b) 95%);
}
/* bowling */
.p-bowl { background: conic-gradient(from 20deg at 45% 55%, var(--b), var(--a), var(--c), var(--a), var(--b), #000, var(--b)); }
.cs-prev .bh { left: var(--x); top: var(--y); width: 10px; height: 10px; border-radius: 50%; background: #05030c; box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3); }
/* tennis */
.p-tennis {
  background:
    radial-gradient(circle 60px at -40% 50%, transparent 0 51px, var(--c) 51px 55px, transparent 55px),
    radial-gradient(circle 60px at 140% 50%, transparent 0 51px, var(--c) 51px 55px, transparent 55px),
    radial-gradient(circle at 34% 30%, var(--a), var(--b) 95%);
}
/* simit */
.p-sesame {
  background:
    radial-gradient(ellipse 3px 1.6px at 30% 40%, var(--c) 90%, transparent) 0 0 / 19px 15px,
    radial-gradient(ellipse 3px 1.6px at 70% 70%, var(--c) 90%, transparent) 3px 5px / 23px 17px,
    radial-gradient(ellipse 3px 1.6px at 50% 20%, var(--c) 90%, transparent) 7px 2px / 14px 21px,
    repeating-linear-gradient(60deg, var(--a) 0 11px, var(--b) 11px 15px);
}
/* baklava */
.p-baklava {
  background:
    radial-gradient(circle at 20% 30%, var(--c) 0 2.5px, transparent 3px) 0 0 / 17px 17px,
    radial-gradient(circle at 70% 70%, var(--c) 0 2px, transparent 2.5px) 5px 7px / 23px 23px,
    linear-gradient(45deg, transparent calc(50% - 1.5px), #7a410c calc(50% - 1.5px) calc(50% + 1.5px), transparent calc(50% + 1.5px)) 0 0 / 16px 16px,
    linear-gradient(-45deg, transparent calc(50% - 1.5px), #7a410c calc(50% - 1.5px) calc(50% + 1.5px), transparent calc(50% + 1.5px)) 0 0 / 16px 16px,
    radial-gradient(circle at 34% 30%, #ffd870, var(--a) 60%, #c4781a);
}
/* Iznik tile (İznik Çinisi) */
.p-tile {
  background:
    radial-gradient(circle at 50% 50%, var(--c) 0 4px, #fff 4.5px 6px, transparent 6.5px),
    radial-gradient(circle at 50% 15%, var(--c) 0 3.5px, var(--a) 4px 6px, transparent 6.5px),
    radial-gradient(circle at 50% 85%, var(--c) 0 3.5px, var(--a) 4px 6px, transparent 6.5px),
    radial-gradient(circle at 15% 50%, var(--c) 0 3.5px, var(--a) 4px 6px, transparent 6.5px),
    radial-gradient(circle at 85% 50%, var(--c) 0 3.5px, var(--a) 4px 6px, transparent 6.5px),
    radial-gradient(circle at 50% 50%, transparent 0 27px, var(--b) 28px 30px, transparent 31px 33px, var(--a) 34px 36px, transparent 37px),
    radial-gradient(circle at 50% 50%, transparent 0 25px, #f7f4ec 26px),
    repeating-conic-gradient(from 34deg at 50% 50%, var(--a) 0 22deg, transparent 22deg 90deg),
    repeating-conic-gradient(from -11deg at 50% 50%, var(--b) 0 22deg, transparent 22deg 90deg),
    #f7f4ec;
}
/* kilim (Kilim) */
.p-kilim {
  background:
    linear-gradient(180deg, var(--a) 0 11%, transparent 11% 89%, var(--a) 89%),
    linear-gradient(135deg, var(--c) 25%, transparent 25%) -9px 0 / 18px 18px,
    linear-gradient(225deg, var(--c) 25%, transparent 25%) -9px 0 / 18px 18px,
    linear-gradient(315deg, var(--c) 25%, transparent 25%) 0 0 / 18px 18px,
    linear-gradient(45deg, var(--c) 25%, transparent 25%) 0 0 / 18px 18px,
    var(--b);
}
/* donut */
.p-donut { background: radial-gradient(circle at 34% 30%, #efb878, var(--b) 90%); }
.cs-prev .dfr { inset: 7px; border-radius: 48% 52% 50% 50% / 52% 48% 52% 48%; background: radial-gradient(circle at 36% 30%, #ffc0de, var(--a) 70%); }
.cs-prev .dho { left: 50%; top: 50%; width: 24px; height: 24px; margin: -12px 0 0 -12px; box-sizing: border-box; border-radius: 50%; border: 2px solid var(--ink); background: #bcdcff; box-shadow: inset 0 3px 0 rgba(23, 52, 92, 0.3); }
.cs-prev .dsp { left: var(--x); top: var(--y); width: 8px; height: 3px; border-radius: 2px; background: var(--k); transform: rotate(var(--r)); }
/* cookie */
.p-cookie { background: radial-gradient(circle at 34% 30%, #f6d28f, var(--a) 60%, #b97f36 100%); }
.cs-prev .ck { left: var(--x); top: var(--y); width: var(--w); height: calc(var(--w) * 0.78); border-radius: 45% 55% 50% 50%; background: var(--b); transform: rotate(var(--r)); }
/* fluffy pet (Ponçik) */
.p-fluff { background: radial-gradient(circle at 34% 30%, #fff, var(--a) 42%, var(--b) 100%); }
.cs-prev .pear { top: -7px; width: 20px; height: 22px; box-sizing: border-box; border-radius: 50%; border: 2px solid var(--ink); background: radial-gradient(circle at 50% 62%, #ff9fc2 0 35%, var(--b) 36%); }
.cs-prev .fe { top: 42%; width: 7px; height: 9px; border-radius: 50%; background: var(--c); }
.cs-prev .fc { top: 56%; width: 12px; height: 8px; border-radius: 50%; background: #ff8fb8; opacity: 0.75; }
.cs-prev .fn { left: 46%; top: 56%; width: 6px; height: 5px; border-radius: 50%; background: #d9507f; }
/* penguin (Penguen Top) */
.p-penguin { background: radial-gradient(circle at 34% 30%, #3b5488, var(--a) 90%); }
.cs-prev .pbe { left: 22%; top: 36%; width: 56%; height: 62%; border-radius: 50%; background: radial-gradient(circle at 40% 30%, #fff, var(--b)); }
.cs-prev .pey { top: 32%; width: 8px; height: 8px; border-radius: 50%; background: radial-gradient(circle at 65% 30%, #fff 0 1.4px, #0c0c12 2px); }
.cs-prev .pbk { left: 43%; top: 44%; width: 14px; height: 9px; background: var(--c); clip-path: polygon(0 0, 100% 0, 50% 100%); }
.cs-prev .pfl { top: 40%; width: 12px; height: 28px; border-radius: 50%; background: #16233d; border: 2px solid var(--ink); box-sizing: border-box; }
.cs-prev .pft { bottom: -6px; width: 17px; height: 9px; border-radius: 50%; background: var(--c); border: 2px solid var(--ink); box-sizing: border-box; }
/* hidden (secret) items: dark silhouette + question mark */
.cs-q {
  position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; pointer-events: none;
  font-size: 40px; color: rgba(255, 255, 255, 0.92); text-shadow: 0 3px 0 rgba(0, 0, 0, 0.35);
}
.cs-prev.trail .cs-q { font-size: 30px; }

/* ---- trail previews: ribbon + little snowball ---- */
.cs-prev.trail { width: 100%; height: 84px; }
.cs-prev.trail .rib {
  position: absolute; left: 4px; right: 38px; top: 50%; height: 30px; margin-top: -15px;
  border-radius: 18px 8px 8px 18px; border: 2.5px solid var(--ink);
  background: linear-gradient(270deg, var(--a), var(--b));
  -webkit-mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0.12), #000 45%); mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0.12), #000 45%);
}
.cs-prev.trail.glow { filter: drop-shadow(0 0 7px var(--a)); }
.cs-prev.trail.swirl .rib {
  background: linear-gradient(180deg, #ff4d4d 0 16.6%, #ffb347 16.6% 33.3%, #ffe14a 33.3% 50%, #5fe08a 50% 66.6%, #3fb7ff 66.6% 83.3%, #8a6bff 83.3%);
}
.cs-prev.trail.bands .rib { background: repeating-linear-gradient(90deg, var(--a) 0 14px, var(--b) 14px 28px); }
.cs-prev.trail .head {
  position: absolute; right: 3px; top: 50%; width: 42px; height: 42px; margin-top: -21px; border-radius: 50%;
  border: 3px solid var(--ink); background: radial-gradient(circle at 34% 30%, #fff, #cfe2f7 92%); box-shadow: 0 3px 0 var(--ink);
}
.cs-card.locked .cs-prev { filter: grayscale(0.85) brightness(0.92); }

@media (prefers-reduced-motion: reduce) {
  .cs-root *, .cs-root *::before, .cs-root *::after, .cs-root { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
}
`,qb=e=>String(Math.max(0,Math.floor(e))).replace(/\B(?=(\d{3})+(?!\d))/g,`.`);function Jb(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}function Yb(){try{typeof window<`u`&&window.__cigSfx?.ui?.()}catch{}}function Xb(){if(document.getElementById(Gb))return;let e=document.createElement(`style`);e.id=Gb,e.textContent=Kb,(document.head||document.body).appendChild(e)}function Zb(e,t){e.style.setProperty(`--a`,t.a),e.style.setProperty(`--b`,t.b),t.c&&e.style.setProperty(`--c`,t.c)}var Z=(e,t)=>({cls:e,vars:t}),Qb=(e,t,n)=>Array.from({length:e},(e,r)=>Z(t,n(r))),$b={tendrils:{behind:((e,t,n,r=0,i=360)=>Qb(e,`td`,a=>({"--r":`${Math.round(r+i/e*a+a%2*7)}deg`,"--h":`${t+a*7%n}px`,"--d":`-${(a*.43%1.7).toFixed(2)}s`})))(11,14,9)},flame:{behind:Qb(9,`fl`,e=>({"--r":`${Math.round(40*e+e%2*9)}deg`,"--h":`${20+e*5%9}px`,"--d":`-${(e*.29%.55).toFixed(2)}s`}))},goo:{behind:[Z(`gb`,{"--x":`66%`,"--y":`-7px`,"--w":`15px`,"--d":`0s`}),Z(`gb`,{"--x":`-7px`,"--y":`52%`,"--w":`12px`,"--d":`-0.7s`}),Z(`gb`,{"--x":`78%`,"--y":`66%`,"--w":`10px`,"--d":`-1.3s`})]},plasma:{inside:[Z(`bolt`,{"--r":`-12deg`,"--d":`0s`}),Z(`bolt`,{"--r":`34deg`,"--d":`-0.4s`}),Z(`bolt`,{"--r":`-58deg`,"--d":`-0.8s`})]},scales:{behind:[-30,-15,0,15,30].map((e,t)=>Z(`dgs`,{"--x":`${24+t*13}%`,"--r":`${e}deg`})),inside:[Z(`dge`)]},panels:{behind:[Z(`ran`)],inside:[Z(`rv`)]},quills:{behind:[...Qb(16,`qu`,e=>({"--r":`${Math.round(360/16*e+e%2*6)}deg`,"--h":`${13+e*5%7}px`})),Z(`kear`,{left:`8px`}),Z(`kear`,{right:`8px`})],inside:[Z(`kf`),Z(`ke`,{left:`34%`}),Z(`ke`,{left:`58%`}),Z(`kn`)]},octo:{behind:Qb(7,`oc`,e=>({"--r":`${100+e*26}deg`,"--h":`${15+e*5%7}px`,"--d":`-${(e*.37%2.1).toFixed(2)}s`})),inside:[Z(`oe`,{left:`16%`}),Z(`oe`,{left:`55%`})]},pumpkin:{behind:[Z(`pst`)],inside:[Z(`pe`,{left:`22%`,top:`28%`}),Z(`pe`,{left:`58%`,top:`28%`}),Z(`pn`),Z(`pm`)]},zombie:{inside:[Z(`ze1`),Z(`ze2`),Z(`zs`),Z(`zm`)]},pentagon:{inside:[Z(`pg`),...Qb(5,`pg o`,e=>({"--r":`${e*72}deg`}))]},bowl:{inside:[Z(`bh`,{"--x":`36%`,"--y":`24%`}),Z(`bh`,{"--x":`56%`,"--y":`24%`}),Z(`bh`,{"--x":`46%`,"--y":`44%`})]},donut:{inside:[Z(`dfr`),Z(`dho`),...[[`16%`,`30%`,`30deg`,`#4cd6ff`],[`38%`,`14%`,`-20deg`,`#ffe14a`],[`66%`,`20%`,`60deg`,`#7be07b`],[`76%`,`46%`,`-35deg`,`#fff`],[`66%`,`74%`,`20deg`,`#b06cff`],[`40%`,`80%`,`-50deg`,`#ff5c5c`],[`16%`,`60%`,`75deg`,`#ffe14a`],[`28%`,`70%`,`-10deg`,`#fff`]].map(([e,t,n,r])=>Z(`dsp`,{"--x":e,"--y":t,"--r":n,"--k":r}))]},cookie:{inside:[[`22%`,`26%`,`10px`,`20deg`],[`58%`,`18%`,`9px`,`-30deg`],[`68%`,`52%`,`10px`,`55deg`],[`30%`,`56%`,`9px`,`-10deg`],[`52%`,`74%`,`10px`,`35deg`],[`14%`,`46%`,`7px`,`70deg`],[`44%`,`40%`,`8px`,`-60deg`]].map(([e,t,n,r])=>Z(`ck`,{"--x":e,"--y":t,"--w":n,"--r":r}))},fluff:{behind:[Z(`pear`,{left:`9px`}),Z(`pear`,{right:`9px`})],inside:[Z(`fe`,{left:`28%`}),Z(`fe`,{left:`62%`}),Z(`fc`,{left:`14%`}),Z(`fc`,{left:`68%`}),Z(`fn`)]},penguin:{behind:[Z(`pfl`,{left:`-6px`,transform:`rotate(16deg)`}),Z(`pfl`,{right:`-6px`,transform:`rotate(-16deg)`}),Z(`pft`,{left:`16px`}),Z(`pft`,{right:`16px`})],inside:[Z(`pbe`),Z(`pey`,{left:`34%`}),Z(`pey`,{left:`56%`}),Z(`pbk`)]}};function ex(e){let t=Jb(`i`,`pt ${e.cls}`);if(e.vars)for(let n of Object.keys(e.vars))n.startsWith(`--`)?t.style.setProperty(n,e.vars[n]):t.style[n]=e.vars[n];return t}var tx={a:`#3f4f72`,b:`#141c30`,pattern:`solid`};function nx(e,t,n){if(e===`trail`){let e=Jb(`div`,`cs-prev trail${t.glow?` glow`:``}${t.pattern===`swirl`?` swirl`:``}${t.pattern===`bands`?` bands`:``}`);return Zb(e,t),e.appendChild(Jb(`i`,`rib`)),e.appendChild(Jb(`i`,`head`)),n&&e.appendChild(Jb(`i`,`cs-q`,`?`)),e}let r=$b[t.pattern]||{},i=Jb(`div`,`cs-prev ball${t.glow?` glow`:``}${r.behind?` over`:``}`);if(Zb(i,t),r.behind)for(let e of r.behind)i.appendChild(ex(e));let a=Jb(`i`,`cs-fill p-${t.pattern||`solid`}`);if(Zb(a,t),t.pattern===`face`&&(a.appendChild(Jb(`i`,`eye e1`)),a.appendChild(Jb(`i`,`eye e2`)),a.appendChild(Jb(`i`,`nose`)),a.appendChild(Jb(`i`,`mouth`))),r.inside)for(let e of r.inside)a.appendChild(ex(e));return i.appendChild(a),n&&i.appendChild(Jb(`i`,`cs-q`,`?`)),i}var rx=null;function ix({save:e,onClose:t,onSelect:n}={}){rx&&rx(),Xb();let r=document.getElementById(`app`)||document.body,i=`skin`,a=!1,o=e.coins,s=0,c=Jb(`div`,`cs-root`);c.setAttribute(`role`,`dialog`),c.setAttribute(`aria-modal`,`true`),c.setAttribute(`aria-label`,`Dolap`);let l=Jb(`div`,`cs-head`),u=Jb(`div`,`cs-titles`);u.appendChild(Jb(`div`,`cs-title`,`DOLAP`)),u.appendChild(Jb(`div`,`cs-sub`,`ÖZELLEŞTİR`));let d=Jb(`div`,`cs-coins`);d.appendChild(Jb(`span`,`ico`,`❄️`));let f=Jb(`span`,`num`,qb(o));d.appendChild(f);let p=Jb(`button`,`cs-close`,`✕`);p.setAttribute(`type`,`button`),p.setAttribute(`aria-label`,`Kapat`),l.appendChild(u),l.appendChild(d),l.appendChild(p);let m=Jb(`div`,`cs-tabs`),h=Jb(`button`,`cs-tab on`,`TOPLAR`),g=Jb(`button`,`cs-tab`,`İZLER`);h.setAttribute(`type`,`button`),g.setAttribute(`type`,`button`),m.appendChild(h),m.appendChild(g);let _=Jb(`div`,`cs-scroll`),v=Jb(`div`,`cs-grid`);_.appendChild(v),c.appendChild(l),c.appendChild(m),c.appendChild(_),_.addEventListener(`touchmove`,e=>e.stopPropagation(),{passive:!0});function y(e,t){let n=o;if(o=e,typeof cancelAnimationFrame==`function`&&cancelAnimationFrame(s),!t||n===e||typeof requestAnimationFrame!=`function`){f.textContent=qb(e);return}d.classList.remove(`bump`),d.offsetWidth,d.classList.add(`bump`);let r=performance.now(),i=t=>{if(a)return;let o=Math.min(1,(t-r)/450),c=1-(1-o)**3;f.textContent=qb(Math.round(n+(e-n)*c)),o<1&&(s=requestAnimationFrame(i))};s=requestAnimationFrame(i)}function b(t){let n=e.totalStars(),r=t.unlock&&t.unlock.stars||0,a=!!(t.unlock&&t.unlock.secret),o=e.selected(i)===t.id,s=o||e.isOwned(i,t.id),c=!s&&a,l=!s&&(c||r>n);return{stars:n,need:r,selected:o,owned:s,locked:l,secret:c,needsBuy:!s&&!l&&t.price>0,canAfford:e.coins>=t.price}}function x(e){for(let t=0;t<9;t++){let n=Jb(`span`,`cs-flake`,`❄️`),r=t/9*Math.PI*2+Math.random()*.5,i=56+Math.random()*38;n.style.setProperty(`--dx`,`${Math.round(Math.cos(r)*i)}px`),n.style.setProperty(`--dy`,`${Math.round(Math.sin(r)*i*.9)}px`),e.appendChild(n),setTimeout(()=>n.remove(),950)}}function S(e,t,n){e.classList.remove(`shake`,`pop`,`ping`),e.offsetWidth,e.classList.add(t),setTimeout(()=>e.classList.remove(t),n)}function C(t,r){let a=b(t);if(a.selected)return;if(a.locked||a.needsBuy&&!a.canAfford){Yb(),S(r,`shake`,340);return}let o=!1;if(a.needsBuy){if(!e.spend(t.price)){S(r,`shake`,340);return}e.own(i,t.id),o=!0}else a.owned||e.own(i,t.id);e.select(i,t.id),Yb(),T(t.id,o),y(e.coins,o),n&&n(i,t.id)}function w(e,t,n){let r=b(e),a=ug[e.rarity]?e.rarity:`common`,o=Jb(`div`,`cs-card r-${a}${r.selected?` sel`:``}${r.locked?` locked`:``}${r.secret?` secret`:``}`);o.appendChild(nx(i,r.secret?tx:e.preview,r.secret)),o.appendChild(Jb(`span`,`cs-rar`,ug[a].label)),o.appendChild(Jb(`div`,`cs-name`,r.secret?`???`:e.name)),r.locked&&(o.appendChild(Jb(`div`,`cs-note`,r.secret?`Gizli ödül`:`⭐ ${Math.min(r.stars,r.need)}/${r.need}`)),o.appendChild(Jb(`span`,`cs-lockbadge`,`🔒`)));let s,c;r.selected?(s=`SEÇİLİ ✓`,c=`on`):r.owned?(s=`SEÇ`,c=`pick`):r.secret?(s=`GİZLİ`,c=`lock`):r.locked?(s=`⭐ ${r.need} gerekli`,c=`lock`):r.needsBuy?(s=`❄️ ${qb(e.price)}`,c=r.canAfford?``:`poor`):(s=`SEÇ`,c=`pick`);let l=Jb(`button`,`cs-btn ${c}`.trim(),s);return l.setAttribute(`type`,`button`),(r.selected||r.locked||c===`poor`)&&l.setAttribute(`aria-disabled`,`true`),l.addEventListener(`click`,()=>C(e,o)),o.appendChild(l),t&&(o.classList.add(n?`pop`:`ping`),n&&x(o)),o}function T(e,t){let n=hg(i===`skin`?dg:fg);v.innerHTML=``;for(let r of n)v.appendChild(w(r,r.id===e,t))}function E(e){e!==i&&(i=e,h.classList.toggle(`on`,e===`skin`),g.classList.toggle(`on`,e===`trail`),_.scrollTop=0,Yb(),T())}h.addEventListener(`click`,()=>E(`skin`)),g.addEventListener(`click`,()=>E(`trail`));let D=e=>{e.key===`Escape`&&O()};function O(){a||(a=!0,rx===O&&(rx=null),document.removeEventListener(`keydown`,D),typeof cancelAnimationFrame==`function`&&cancelAnimationFrame(s),c.remove(),t&&t())}return p.addEventListener(`click`,()=>{Yb(),O()}),document.addEventListener(`keydown`,D),T(),r.appendChild(c),rx=O,O}var ax=null,ox={duck(){},setMuted(){}};async function sx(){if(ax)return;let[e,t]=await Promise.all([Fh(()=>import(`./runner-bdoq9YiG.js`),__vite__mapDeps([0,1]),import.meta.url),Fh(()=>import(`./music-Cm24JTA3.js`),[],import.meta.url)]);ax=e.Runner,ox=t.music,ox.setMuted(!Vx)}var cx=new URLSearchParams(location.search),lx=cx.has(`debug`),ux=cx.has(`auto`),dx=99,fx=document.getElementById(`c`),px=Math.min(window.devicePixelRatio||1,2),mx=new qu({canvas:fx,antialias:px<2,powerPreference:`high-performance`}),hx=px;mx.setPixelRatio(hx);var gx=14479359,_x=new kn;_x.fog=new On(gx,90,340),_x.background=new H(gx);var vx=MS();vx.visible=!1,_x.add(vx);var yx=new Xo(16777215,11453411,1.55);yx.visible=!1,_x.add(yx);var bx=new ds(16773596,1.9);bx.position.set(.25,1,.6),bx.visible=!1,_x.add(bx);var xx=new cs(60,1,.5,1400),Sx=new Tf(mx),Cx=`normal`;try{Cx=localStorage.getItem(`cig.visual`)||`normal`}catch{}Sx.setMode(Cx);var wx=new B,Tx=60;function Ex(){let e=window.innerWidth,t=window.innerHeight;mx.setSize(e,t,!1),xx.aspect=e/t,Tx=Hf(2*Math.atan(Math.tan(46*Math.PI/180/2)/xx.aspect)*180/Math.PI,52,76),xx.fov=Tx+(xx.userData.fovBoost||0),xx.updateProjectionMatrix(),Sx?.resize()}window.addEventListener(`resize`,Ex),Ex(),fx.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),Qx(!0)});var Dx=df(),Q=new Zf(_x,Dx,Sf(new Do({vertexColors:!0,flatShading:!0}))),Ox=new dp,kx=new sp(fx),Ax=null,jx=null,Mx=null,Nx=null,Px={groundY:()=>-1e9,rampAt:()=>0},$={mode:`cig`,state:`menu`,paused:!1,level:cg.level,daily:!1,targetX:0,combo:0,comboT:0,avl:0,swallowed:0,townTons:0,destroyed:0,bumpCd:0,shake:0,endT:0,slowT:0,timeScale:1,onRamp:!1,lastRamp:0,meltT:0,meltWarned:!1,hinted:!1,result:null},Fx=[],Ix=new B,Lx=null;function Rx(e){let t=q_(e);e!==`lav`&&Sf(t.material,{snow:e===`classic`||e===`pamuk`}),Q.snow.geometry=t.geometry,Q.snow.material=t.material,Lx&&J_(Lx),Lx=t}function zx(e){jx?.setTrailStyle(mg(e))}var Bx=null;window.__cigSfx=dh,Eb.init(cg);var Vx=!0;try{Vx=localStorage.getItem(`cig.music.muted`)!==`1`}catch{}function Hx(){dh.init(),Wx.hideMain(),Bx=ix({save:cg,onSelect:(e,t)=>{e===`skin`?(Rx(t),Eb.track(`skin_select`,{id:t})):(zx(t),Eb.track(`trail_select`,{id:t}))},onClose:()=>{Bx=null,Xx()}})}function Ux(){Cx=hf[(hf.findIndex(e=>e.id===Cx)+1)%hf.length].id,Sx.setMode(Cx);try{localStorage.setItem(`cig.visual`,Cx)}catch{}return $x(),Eb.track(`visual_mode`,{id:Cx}),hf.find(e=>e.id===Cx).name}var Wx=Wb({save:cg,meta:Eb,root:document.getElementById(`app`),callbacks:{onEndless:()=>Jx(),onLevels:()=>Zx(!1),onDaily:()=>Zx(!0),onShop:()=>Hx(),onVisualCycle:()=>Ux(),onSound:e=>{dh.init(),dh.setMuted(!e),Ox.setToggle(`sound`,e)},onMusic:e=>{Vx=e,ox.setMuted(!e);try{localStorage.setItem(`cig.music.muted`,e?`0`:`1`)}catch{}},onHaptics:e=>{ig.setHapticsEnabled(e),Ox.setToggle(`haptic`,e),e&&ig.haptic(`medium`)},getToggles:()=>({sound:!dh.isMuted(),music:Vx,haptics:ig.hapticsEnabled(),visualName:(hf.find(e=>e.id===Cx)||hf[0]).name}),sfx:e=>{dh.init(),dh.ui(e)},onReward:()=>Wx.refresh()}});Eb.track(`session`,{});var Gx=!1;ig.init(),ig.onPause(()=>{$.state===`play`&&Qx(!0),dh.suspend()}),ig.onResume(()=>dh.resume()),ig.onBack(()=>{if(Bx){Bx();return}$.state===`play`||$.state===`runner`?Qx(!$.paused):$.state===`result`||$.state===`end`?Xx():$.state===`menu`&&ig.isNative&&Fh(async()=>{let{App:e}=await import(`./esm-BA4BT-YI.js`);return{App:e}},[],import.meta.url).then(({App:e})=>e.exitApp()).catch(()=>{})}),kx.onRelease(()=>dh.init());function Kx(e,t,n){Ax&&Ax.dispose(),Ax=new zf(_x,Dx,{seed:e,level:t,daily:n}),Nx?.dispose(),Nx=new Iv(_x,{world:Ax,lib:Dx,theme:rv(t,n),onEgg:e=>Eb.egg(e)}),jx||(jx=new op(_x,Ax),zx(cg.selected(`trail`))),jx.world=Ax,jx.reset()}function qx(e){Ax&&(Ax.group.visible=e),Nx&&(Nx.group.visible=e),jx&&(jx.trail.visible=e,jx.shadow.visible=e)}async function Jx(){dh.init(),dh.ui();try{await sx()}catch(e){console.error(e),Ox.toast(`Sonsuz mod yüklenemedi`);return}$.mode=`runner`,$.state=`runner`,$.paused=!1,$.result=null,Ox.showPause(!1),Wx.hideMain(),qx(!1),jx.world=Px,_x.fog.near=60,_x.fog.far=330,Mx||(Mx=new ax({scene:_x,camera:xx,lib:Dx,ball:Q,fx:jx,ui:Ox,audio:dh,platform:ig,save:cg,input:kx,meta:Eb,menus:Wx})),kx.consumeLane(),kx.consumeDive(),kx.consumeDoubleTap(),Mx.start()}function Yx(){$.mode===`runner`&&(Mx?.dispose(),$.mode=`cig`,_x.fog.color.set(gx),_x.background=new H(gx),qx(!0))}function Xx(){Yx(),$.state=`menu`,$.paused=!1,$.level=Math.min(cg.level,dx),Kx($.level*7919+13,$.level,!1),Q.reset(W.startR),Q.y=Ax.groundY(0,0)+Q.r,Q.sync();let e=pf(),t=cg.dailyFor(e);Ox.showMenu({level:$.level,stars:cg.starsFor($.level),dailyNum:mf(),dailyBest:t?t.tons:0,theme:Nx.theme.name}),Ox.el.menu.classList.add(`hidden`),Wx.showMain({level:$.level,levelStars:cg.starsFor($.level),theme:Nx.theme.name,endlessBest:cg.runnerBest(),endlessBestDist:cg.runnerBestDist(),dailyNum:mf(),dailyBest:t?t.tons:0,coins:cg.coins}),Gx||(Gx=!0,Wx.showDailyIfAvailable()),dh.setRoll(0,0),Q.sync(),SS(0,!0)}function Zx(e){Yx(),Wx.hideMain(),Eb.track(`run_start`,{mode:`cig`}),dh.init(),dh.ui(),$.daily=e;let t=e?$.dailySeed=pf():$.level*7919+13;$.dailyNo=mf(),Kx(t,$.level,e),Q.reset(W.startR),Q.y=Ax.groundY(0,0)+Q.r,Q.speed=4,Object.assign($,{state:`play`,paused:!1,targetX:0,combo:0,comboT:0,avl:0,swallowed:0,townTons:0,destroyed:0,bumpCd:0,momentumT:0,shake:0,endT:0,slowT:0,timeScale:1,onRamp:!1,lastRamp:0,meltT:0,meltWarned:!1,result:null,sprayT:0,progT:0,progD:0,dailySeed:pf(),dailyNo:mf()}),kx.consumeDx(),Ox.startRun(e?`GÜNÜN DAĞI #${$.dailyNo}`:`DAĞ ${$.level} · ${Nx.theme.name.toLocaleUpperCase(`tr-TR`)}`),Ox.hint(!$.hinted),Q.sync(),SS(0,!0)}function Qx(e){($.state===`play`||$.state===`runner`&&Mx?.state===`play`)&&($.paused=e,Ox.showPause(e),e&&dh.setRoll(0,0),$.mode===`runner`&&ox.duck(e),kx.consumeDx())}Ox.on(`btn-play`,()=>Zx(!1)),Ox.on(`btn-daily`,()=>Zx(!0)),Ox.on(`btn-pause`,()=>{dh.ui(),Qx(!0)}),Ox.on(`btn-resume`,()=>{dh.ui(),Qx(!1)}),Ox.on(`btn-quit`,()=>{dh.ui(),Xx()}),Ox.on(`btn-endless`,()=>Jx()),Ox.on(`btn-shop`,()=>Hx()),Ox.on(`btn-retry`,()=>$.mode===`runner`?Jx():Zx($.daily)),Ox.on(`btn-next`,()=>{if(dh.ui(),$.mode===`runner`){Mx.state===`over`&&!Mx.revived?(Mx.revive(),Ox.hideResult()):Xx();return}if($.daily||!$.result||$.result.stars===0){Xx();return}$.level=Math.min(cg.level,dx),Zx(!1)}),Ox.on(`btn-share`,async()=>{dh.ui();let e;if($.mode===`runner`&&Mx)e=`❄️ FREEMON · Yeti Kaçışı
📏 ${Math.round(Mx.b.s).toLocaleString(`tr-TR`)} m
🏆 Skor ${Math.round(Mx.score).toLocaleString(`tr-TR`)}
❄️ ${Mx.coins}
Beni geçebilir misin?`;else{if(!$.result)return;e=yS($.result)}let t=await ig.share({text:e});Eb.track(`share`,{}),t===`copied`&&Ox.toast(`Panoya kopyalandı!`)}),Ox.on(`btn-sound`,()=>{dh.init(),dh.setMuted(!dh.isMuted()),ox.setMuted(dh.isMuted()),Ox.setToggle(`sound`,!dh.isMuted()),dh.ui()}),Ox.on(`btn-haptic`,()=>{ig.setHapticsEnabled(!ig.hapticsEnabled()),Ox.setToggle(`haptic`,ig.hapticsEnabled()),ig.haptic(`medium`)});function $x(){let e=hf.find(e=>e.id===Cx)||hf[0];document.getElementById(`btn-visual`).textContent=`🎨 ${e.name}`}Ox.on(`btn-visual`,()=>{dh.ui(),Cx=hf[(hf.findIndex(e=>e.id===Cx)+1)%hf.length].id,Sx.setMode(Cx);try{localStorage.setItem(`cig.visual`,Cx)}catch{}$x()}),$x(),Ox.setToggle(`sound`,!dh.isMuted()),Ox.setToggle(`haptic`,ig.hapticsEnabled());function eS(){return 4/3*Math.PI*Q.r**3*W.snowDensity}function tS(){return eS()+$.swallowed+$.townTons}function nS(e){let t=Q,n=Ax,r=kx.consumeDx();(r!==0||kx.keyAxis()!==0)&&!$.hinted&&($.hinted=!0,Ox.hint(!1));let i=n.halfWidth(t.d),a=W.steerSens*2*i/Math.max(320,window.innerWidth);$.targetX+=r*a+kx.keyAxis()*24*e,ux&&($.targetX=_S());let o=Math.max(.5,i-t.r*.55);$.targetX=Hf($.targetX,-o,o);let s=1+t.r*W.steerMass,c=W.steerStiff/s,l=2*Math.sqrt(c)*.9;t.vx+=(($.targetX-t.x)*c-t.vx*l)*e;let u=t.d>n.L,d=Math.min(W.maxSpeed,W.baseSpeed+W.sizeSpeed*Math.sqrt(t.r));u&&(d*=.8),t.speed+=Hf(d-t.speed,-W.accel*3*e,W.accel*e);let f=Math.max(1,Math.ceil(t.speed*e/Math.max(.3,t.r*.45)));for(let t=0;t<f;t++)rS(e/f,o);if($.comboT-=e,$.comboT<=0&&$.combo&&($.combo=0,Ox.setCombo(0)),$.bumpCd-=e,$.momentumT-=e,!t.airborne&&t.speed>3&&($.sprayT-=e,$.sprayT<=0)){$.sprayT=.05;let e=Math.random()<.5?-1:1;jx.burst(t.x+e*t.r*.7,t.y-t.r*.75,t.d-t.r*.4,1,16777215,1.5+t.speed*.08,.05+t.r*.02,2.5+t.r*.3)}if($.avl>=2&&!t.airborne&&+(Math.random()<($.avl-1)*.5*e*60)){let e=Math.random()<.5?-1:1;jx.burst(t.x+e*t.r*.9,t.y-t.r*.6,t.d-t.r*.6,1,16777215,3,.1+t.r*.03,4)}if($.progT+=e,$.progT>2){if(t.d-$.progD<2.5&&!t.airborne){if(t.d>n.townStart)$.slowT=99;else{n.query(t.x,t.d,t.r*2+8,Fx);for(let e of Fx)e.alive&&e.kind!==`chunk`&&Math.hypot(e.x-t.x,e.d-t.d)<t.r+e.r*W.contactK+1&&cS(e,!0);t.speed=Math.max(t.speed,W.baseSpeed*.6)}}$.progT=0,$.progD=t.d}t.d>n.townStart&&t.speed<1.2?$.slowT+=e:$.slowT=0,(t.d>=n.townEnd+12||$.slowT>.7)&&hS(),Ox.setTons(tS()),Ox.setProgress(t.d/n.townEnd),dh.setRoll(t.airborne?0:Hf(t.speed/W.maxSpeed,0,1),Hf(t.r/10,0,1))}function rS(e,t){let n=Q,r=Ax,i=n.x,a=n.d;n.x+=n.vx*e,n.d+=n.speed*e,(n.x<-t||n.x>t)&&(n.x=Hf(n.x,-t,t),n.vx*=-.2);let o=r.rampAt(n.x,n.d),s=r.groundY(n.x,n.d)+o+n.r*.92;n.airborne?(n.vy-=W.gravity*e,n.y+=n.vy*e,n.airTime+=e,n.y<=s&&n.vy<0&&aS(s)):$.onRamp&&o===0&&$.lastRamp>.8?iS():n.y=s,$.lastRamp=o,$.onRamp=o>0,n.roll(n.x-i,n.d-a),n.airborne||(r.inPatch(n.x,n.d)?oS(e):n.d<r.L&&(n.setRadius(n.r+W.passiveGrow*n.speed*e*Math.min(2,uS())/Math.max(1,n.r)),mS())),sS()}function iS(){let e=Q;e.airborne=!0,e.airTime=0,e.vy=5+e.speed*.42,$.timeScale=.55,dh.whoosh(),ig.haptic(`medium`),vS(`UÇUŞ!`,e,`big`)}function aS(e){let t=Q;t.airborne=!1,t.y=e,t.vy=0,$.timeScale=1;let n=Hf(t.airTime/1.2,.2,1);dh.land(n),ig.haptic(`heavy`),$.shake+=.5*n+.15*t.r*n,jx.burst(t.x,t.y-t.r*.8,t.d,16,16777215,6+t.r,.25+t.r*.08,5),Ax.query(t.x,t.d,t.r*1.9,Fx);for(let e of Fx)e.alive&&e.kind!==`building`&&Math.hypot(e.x-t.x,e.d-t.d)<t.r*1.9&&e.r<=t.r*W.eatRatio&&dS(e)}function oS(e){let t=Q;t.setRadius(Math.max(W.minR,t.r-t.r*W.patchMelt*e)),$.meltT-=e,$.meltT<=0&&($.meltT=.12,jx.burst(t.x,t.y-t.r*.8,t.d,3,8018494,4,.15+t.r*.05,3),ig.haptic(`light`)),$.meltWarned||($.meltWarned=!0,vS(`ERİYOR!`,t,`bad`),setTimeout(()=>{$.meltWarned=!1},1500))}function sS(){let e=Q,t=Ax,n=1+W.townReach*$.avl;t.query(e.x,e.d,e.r*n+2,Fx);for(let t=0;t<Fx.length;t++){let r=Fx[t];if(!r.alive||e.airborne&&e.y-e.r>r.y+r.h)continue;let i=r.x-e.x,a=r.d-e.d,o=Math.hypot(i,a);if(r.kind===`building`){if(o>e.r*n+r.r*.5)continue;r.r<=e.r*(1.2+.12*$.avl)?fS(r):o<e.r+r.r*.55&&pS(r,i,a,o,!0);continue}let s=e.r+r.r*W.contactK;o>s||(r.kind===`chunk`||r.r<=e.r*W.eatRatio?dS(r):r.r<=e.r*W.smashRatio?cS(r,$.momentumT>0):pS(r,i,a,o,!1,s))}}function cS(e,t=!1){let n=Q;Ax.kill(e);let r=Ax.avgColor[e.type];if(jx.burst(e.x,e.y+e.h*.5,e.d,10,r,7,.25+e.r*.08,6),dh.crash(.35),t){ig.haptic(`medium`),$.shake+=.2;return}jx.burst(n.x,n.y,n.d,8,16777215,6,.2+n.r*.08,5),lS(W.smashLoss),n.speed*=.72,$.momentumT=W.momentumTime,$.combo=0,Ox.setCombo(0),dh.bump(.6),ig.haptic(`heavy`),$.shake+=.45,vS(`ÇARP!`,n,`bad`)}function lS(e){let t=Q,n=t.r;if(t.setRadius(Math.max(W.minR,Math.cbrt(t.r**3*(1-e)))),n-t.r>.02){let e=3+Math.min(3,Math.floor(t.r)),r=Math.max(.25,Math.min(t.r*.35,n*.22));for(let n=0;n<e;n++)Ax.spawnChunk(t.x+(Math.random()-.5)*t.r*4,t.d+5+Math.random()*12,r)}}function uS(){let e=Ax.expectedR(Q.d)/Q.r;return Hf(e**(e<1?W.bandUp:W.bandDown),W.bandMin,W.bandMax)}function dS(e){let t=Q;Ax.kill(e),e.kind!==`chunk`&&Eb.track(`swallow`,{type:e.type});let n=W.growK*e.r**3*(e.kind===`chunk`?1.3:1)*uS();t.setRadius(Math.cbrt(t.r**3+n)),e.kind!==`chunk`&&(Ix.set(e.x,e.y+e.h*.5,-e.d),t.stick(e.def,Ix,e.s)),$.swallowed+=e.mass,$.combo=$.comboT>0?$.combo+1:1,$.comboT=W.comboWindow,Ox.setCombo($.combo),Ox.pulse(),dh.pop(Hf(e.r/8,0,1),$.combo),ig.haptic(e.tier>=2?`medium`:`light`),jx.burst(e.x,e.y+e.h*.4,e.d,3+e.tier*3,Lx?.puff??16777215,2+e.r,.1+e.r*.08,3);let r=Xu[e.type];r&&(e.tier>=2||$.combo%6==0)?vS(`${r}!`,e,e.tier>=3?`big`:``):$.combo>0&&$.combo%10==0&&vS(`x${$.combo}!`,t,`big`),mS()}function fS(e){let t=Q;Ax.kill(e),Eb.track(`destroy`,{type:e.type}),$.destroyed++,$.townTons+=e.mass;let n=Ax.avgColor[e.type];jx.burst(e.x,e.y+e.h*.5,e.d,14,n,9+e.r*.4,.5+e.r*.07,8),jx.burst(e.x,e.y+e.h*.8,e.d,6,16777215,6,.4+e.r*.05,7),jx.burst(e.x,e.y+e.h*.3,e.d,5,9082536,7,.3+e.r*.05,6),dh.crash(Hf(e.r/12,.2,1)),ig.haptic(`heavy`),$.shake+=.25+e.r*.02,t.speed*=.985,$.combo=$.comboT>0?$.combo+1:1,$.comboT=W.comboWindow*1.5,Ox.setCombo($.combo),Ox.pulse(),e.type===`clocktower`&&vS(`SAAT KULESİ!`,e,`big`)}function pS(e,t,n,r,i,a=Q.r+e.r*.55){let o=Q,s=r>1e-4?t/r:0,c=r>1e-4?n/r:1,l=a-r;o.x-=s*l,o.d-=Math.max(0,c*l);let u=Math.max(.5,Ax.halfWidth(o.d)-o.r*.55),d=u-(e.x+a)>=e.x-a+u?1:-1;o.vx+=d*(4+o.speed*.25),!($.bumpCd>0)&&($.bumpCd=.5,$.targetX=Hf(e.x+d*(a+.8),-u,u),o.speed*=i?.35:.5,lS(W.bumpLoss),$.combo=0,Ox.setCombo(0),dh.bump(Hf(e.r/6,.3,1)),ig.haptic(`heavy`),$.shake+=.5,jx.burst(o.x+s*o.r,o.y,o.d+c*o.r,10,16777215,6,.2+o.r*.08,5),vS(`ÇARP!`,o,`bad`))}function mS(){let e=Q;for(;$.avl<W.milestones.length&&e.r>=W.milestones[$.avl];)$.avl++,Eb.track(`milestone`,{level:$.avl}),Ox.banner(W.milestoneNames[$.avl-1],$.avl),dh.milestone($.avl),ig.haptic(`success`),$.shake+=.4+$.avl*.15,jx.burst(e.x,e.y,e.d,24,16777215,10+e.r,.3+e.r*.06,6)}function hS(){$.state=`end`,Ox.hint(!1),$.endT=0,$.timeScale=1;let e=Ax.townProgress(),t=W.starThresholds.filter(t=>e>=t).length,n=tS(),r=``;if($.daily){let i=$.dailySeed,a=cg.dailyFor(i);(!a||n>a.tons)&&(r=`GÜNÜN REKORU!`),cg.recordDaily(i,{tons:n,pct:e,stars:t})}else{let e=cg.bestFor($.level);e&&n>e&&(r=`YENİ REKOR!`),cg.recordLevel($.level,t,n)}let i=Math.round(t*25+Math.sqrt(n)*1.5);cg.addCoins(i),cg.recordRun(n);let a=e>=.85?`KASABA YERLE BİR!`:e>=.6?`FELAKET!`:e>=.3?`FENA DEĞİL!`:`BİRAZ DAHA BÜYÜ...`;$.result={level:$.level,daily:$.daily,pct:e,stars:t,tons:n,avl:$.avl,title:a,sub:r,coins:i},Eb.track(`cig_end`,{level:$.level,stars:t,pct:e,tons:n,daily:$.daily,theme:Nx.theme.id}),dh.setRoll(0,0),t>0?(dh.win(),ig.haptic(`success`)):(dh.lose(),ig.haptic(`warning`))}function gS(e){let t=Q;$.endT+=e,t.speed=Math.max(0,t.speed-14*e);let n=t.d;if(t.d+=t.speed*e,t.y=Ax.groundY(t.x,t.d)+t.r*.92,t.roll(0,t.d-n),$.endT>1.5&&$.result&&!$.result.shown){$.result.shown=!0;let e=$.result;Ox.showResult({title:e.title,pct:e.pct,stars:e.stars,tons:e.tons,sub:e.sub,coins:e.coins,hasNext:!e.daily&&e.stars>0},dh),$.state=`result`}}function _S(){let e=Q,t=Ax;t.query(e.x,e.d+20,30,Fx);let n=null,r=-1/0;for(let t of Fx){let i=t.d-e.d;if(!(i<2||i>40)&&(t.r<=e.r*W.eatRatio||t.kind===`building`)){let a=(t.r*t.r+.2)/(i+6)-Math.abs(t.x-e.x)*.012;a>r&&(r=a,n=t)}}let i=n?n.x:e.x*.9;for(let t of Fx){let n=t.d-e.d;if(n<0||n>16||t.r<=e.r*W.eatRatio||t.kind===`building`&&t.r<=e.r*(1.2+.12*$.avl))continue;let r=e.r+t.r*W.contactK+1;Math.abs(t.x-i)<r&&(i=t.x+(i>=t.x?r:-r))}for(let n of t.patches)n.d-e.d>-n.rd&&n.d-e.d<30&&Math.abs(i-n.x)<n.rx+e.r&&(i=n.x+(i>=n.x?1:-1)*(n.rx+e.r+1));return i}function vS(e,t,n){Ix.set(t.x,(t.y??0)+(t.h??t.r??1)*.8,-t.d).project(xx),!(Ix.z>1)&&Ox.float(e,(Ix.x*.5+.5)*window.innerWidth,(-Ix.y*.5+.5)*window.innerHeight,n)}function yS(e){let t=Math.floor(e.pct*10),n=`🟥`.repeat(t)+`⬜`.repeat(10-t),r=`❄️`.repeat(e.avl)+`▫️`.repeat(W.milestones.length-e.avl);return`${e.daily?`❄️ FREEMON · Günün Dağı #${$.dailyNo}`:`❄️ FREEMON · Çığ Dağ ${e.level}`}\n${r}\n🏘️ ${n} %${Math.round(e.pct*100)}\n⚖️ ${up(e.tons)}\n${`⭐`.repeat(e.stars)||`💧`}`}var bS=new B,xS=10;function SS(e,t=!1){let n=Q,r=n.r,i=Hf((n.d-Ax.L)/40,0,1),a=7.5+r*3.5+i*r*1.6,o=6+r*2.5+i*r*1.8,s=n.x*.7;if($.state===`menu`){let e=performance.now()*15e-5;a=9+Math.sin(e)*2,o=5.5,s=Math.sin(e*1.3)*3}if($.state===`end`||$.state===`result`){let e=Math.min($.endT,6),t=e*.25;a=(7.5+r*3.4)*Math.cos(t),s=n.x+(7.5+r*3.4)*Math.sin(t),o=6+r*2.8+e*.6}xS=Math.abs(a),bS.set(s,n.y+o,-(n.d-a)),bS.y=Math.max(bS.y,Ax.groundY(bS.x,-bS.z)+3+r);let c=t?1:1-Math.exp(-e*6);if(xx.position.lerp(bS,c),Ix.set(n.x*.85,n.y+r*.2,-(n.d+9+r*2.2)),($.state===`end`||$.state===`result`)&&Ix.set(n.x,n.y,-n.d),wx.lerp(Ix,t?1:1-Math.exp(-e*8)),$.shake>0){let t=Math.min($.shake,2)*.35;xx.position.x+=(Math.random()-.5)*t,xx.position.y+=(Math.random()-.5)*t,$.shake=Math.max(0,$.shake-e*3.5)}xx.lookAt(wx),vx.position.copy(xx.position);let l=Nx?.theme?.fogScale??1;_x.fog.near=(70+r*8)*l,_x.fog.far=(300+r*14)*l}var CS=performance.now(),wS=16,TS=0,ES=0,DS=0,OS=0,kS=0;function AS(e){requestAnimationFrame(AS);let t=Math.min(.05,(e-CS)/1e3);if(CS=e,wS+=(t*1e3-wS)*.05,$.mode===`runner`)$.paused||Mx.update(t);else if(!$.paused){let e=t*$.timeScale;$.timeScale<1&&($.timeScale=Math.min(1,$.timeScale+t*.5)),$.state===`play`?nS(e):($.state===`end`||$.state===`result`)&&gS(e),Q.sync(),Ax.update(e,Q.d,Math.max(W.viewAhead,_x.fog.far+20),Math.max(W.viewBehind,xS+15)),jx.update(e,Q),SS(t),Nx.update(e,xx,Q)}let n=Tx+(xx.userData.fovBoost||0);if(Math.abs(xx.fov-n)>.05&&(xx.fov+=(n-xx.fov)*Math.min(1,t*4),xx.updateProjectionMatrix()),gf.uTime.value=e/1e3,Lx?.update?.(t,e/1e3,Q.snow),Sx.render(_x,xx),jS(t),lx){DS++,ES+=t,ES>.5&&(OS=Math.round(DS/ES),DS=0,ES=0);let e=mx.info.render;$.mode===`runner`?Ox.debug(`fps ${OS}  dpr ${hx.toFixed(2)}
calls ${e.calls}  tris ${(e.triangles/1e3).toFixed(0)}k
s ${Mx.b.s.toFixed(0)} u ${Mx.b.u.toFixed(2)} h ${Mx.b.h.toFixed(2)}
v ${Mx.b.vs.toFixed(1)} gap ${Mx.gap.toFixed(0)} r ${Mx.b.r.toFixed(2)} ${Mx.state}`):Ox.debug(`fps ${OS}  dpr ${hx.toFixed(2)}\ncalls ${e.calls}  tris ${(e.triangles/1e3).toFixed(0)}k\nr ${Q.r.toFixed(2)}  v ${Q.speed.toFixed(1)}  d ${Q.d.toFixed(0)}/${Ax.townEnd.toFixed(0)}\navl ${$.avl}  stuck ${Q.stuckCount()}  town ${(Ax.townProgress()*100).toFixed(0)}%`)}}function jS(e){if(TS+=e,TS<2)return;TS=0;let t=hx;wS>24&&hx>1?t=Math.max(1,hx-.25):wS<18.5&&hx<px&&++kS>=3&&(t=Math.min(px,hx+.25),kS=0),t!==hx&&(hx=t,mx.setPixelRatio(hx),Ex())}function MS(){let e=new mo(1e3,20,12),t=e.attributes.position,n=new Float32Array(t.count*3),r=new H(6269183),i=new H(11130111),a=new H(gx),o=new H;for(let e=0;e<t.count;e++){let s=t.getY(e)/1e3;s>.25?o.copy(i).lerp(r,Math.min(1,(s-.25)/.6)):o.copy(a).lerp(i,Math.max(0,s/.25)),n[e*3]=o.r,n[e*3+1]=o.g,n[e*3+2]=o.b}return e.setAttribute(`color`,new cr(n,3)),new fi(e,new ei({vertexColors:!0,side:1,fog:!1,depthWrite:!1}))}lx&&(window.cig={G:$,ball:Q,CFG:W,set auto(e){ux=e},get world(){return Ax},sim(e,t=1/60){let n=Math.round(e/t);for(let e=0;e<n;e++){let e=t*$.timeScale;$.timeScale<1&&($.timeScale=Math.min(1,$.timeScale+t*.5)),$.state===`play`?nS(e):($.state===`end`||$.state===`result`)&&gS(e),Q.sync(),Ax.update(e,Q.d,Math.max(W.viewAhead,_x.fog.far+20),Math.max(W.viewBehind,xS+15)),jx.update(e,Q),SS(t),Nx.update(e,xx,Q)}return Sx.render(_x,xx),{state:$.state,r:+Q.r.toFixed(2),d:+Q.d.toFixed(1),v:+Q.speed.toFixed(1),avl:$.avl,tons:Math.round(tS()),town:+Ax.townProgress().toFixed(2),stuck:Q.stuckCount()}},start:(e=!1)=>Zx(e),endless:()=>Jx(),simEndless(e,t=1/60){let n=Math.round(e/t);for(let e=0;e<n&&Mx;e++)Mx.update(t);Sx.render(_x,xx);let r=Mx.b;return{state:Mx.state,s:+r.s.toFixed(1),u:+r.u.toFixed(2),h:+r.h.toFixed(2),v:+r.vs.toFixed(1),r:+r.r.toFixed(2),gap:+Mx.gap.toFixed(1),score:Math.round(Mx.score),coins:Mx.coins,cause:Mx.cause}},get runner(){return Mx}});async function NS(){try{Object.assign(Dx,await zv())}catch(e){console.warn(e)}Rx(cg.selected(`skin`)),Xx(),SS(0,!0),cx.has(`play`)&&Zx(cx.has(`daily`)),cx.has(`endless`)&&Jx(),requestAnimationFrame(AS)}NS();export{fo as A,B,uo as C,fi as D,Gt as E,l as F,Je as I,Ca as L,Pi as M,ki as N,ei as O,St as P,mo as R,Xo as S,wi as T,et as _,df as a,On as b,cr as c,Hi as d,Ui as f,ds as g,Wi as h,ff as i,po as j,Do as k,Cr as l,Gi as m,vh as n,Zu as o,H as p,_h as r,Vi as s,Fh as t,Li as u,tn as v,gi as w,bn as x,so as y,ho as z};