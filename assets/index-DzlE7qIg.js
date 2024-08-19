(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function lo(e,t){const n=new Set(e.split(","));return o=>n.has(o)}const ae={},It=[],Re=()=>{},Vi=()=>!1,kn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),co=e=>e.startsWith("onUpdate:"),ye=Object.assign,uo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ki=Object.prototype.hasOwnProperty,K=(e,t)=>Ki.call(e,t),H=Array.isArray,Ct=e=>Tn(e)==="[object Map]",xs=e=>Tn(e)==="[object Set]",U=e=>typeof e=="function",ue=e=>typeof e=="string",ct=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",Es=e=>(ie(e)||U(e))&&U(e.then)&&U(e.catch),Is=Object.prototype.toString,Tn=e=>Is.call(e),Yi=e=>Tn(e).slice(8,-1),Cs=e=>Tn(e)==="[object Object]",ho=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gt=lo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),An=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qi=/-(\w)/g,Le=An(e=>e.replace(Qi,(t,n)=>n?n.toUpperCase():"")),Ji=/\B([A-Z])/g,_t=An(e=>e.replace(Ji,"-$1").toLowerCase()),Sn=An(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ln=An(e=>e?`on${Sn(e)}`:""),at=(e,t)=>!Object.is(e,t),$n=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Os=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Xi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Po;const Rs=()=>Po||(Po=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fo(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=ue(o)?nr(o):fo(o);if(s)for(const i in s)t[i]=s[i]}return t}else if(ue(e)||ie(e))return e}const Zi=/;(?![^(]*\))/g,er=/:([^]+)/,tr=/\/\*[^]*?\*\//g;function nr(e){const t={};return e.replace(tr,"").split(Zi).forEach(n=>{if(n){const o=n.split(er);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Oe(e){let t="";if(ue(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const o=Oe(e[n]);o&&(t+=o+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const or="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sr=lo(or);function Ms(e){return!!e||e===""}const Ps=e=>!!(e&&e.__v_isRef===!0),fe=e=>ue(e)?e:e==null?"":H(e)||ie(e)&&(e.toString===Is||!U(e.toString))?Ps(e)?fe(e.value):JSON.stringify(e,Ns,2):String(e),Ns=(e,t)=>Ps(t)?Ns(e,t.value):Ct(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s],i)=>(n[Fn(o,i)+" =>"]=s,n),{})}:xs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Fn(n))}:ct(t)?Fn(t):ie(t)&&!H(t)&&!Cs(t)?String(t):t,Fn=(e,t="")=>{var n;return ct(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class ir{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ne,!t&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ne;try{return Ne=this,t()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function rr(e,t=Ne){t&&t.active&&t.effects.push(e)}function ar(){return Ne}let wt;class mo{constructor(t,n,o,s){this.fn=t,this.trigger=n,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,rr(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ut();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(lr(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ht()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=it,n=wt;try{return it=!0,wt=this,this._runnings++,No(this),this.fn()}finally{Wo(this),this._runnings--,wt=n,it=t}}stop(){this.active&&(No(this),Wo(this),this.onStop&&this.onStop(),this.active=!1)}}function lr(e){return e.value}function No(e){e._trackId++,e._depsLength=0}function Wo(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Ws(e.deps[t],e);e.deps.length=e._depsLength}}function Ws(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let it=!0,Kn=0;const Ls=[];function ut(){Ls.push(it),it=!1}function ht(){const e=Ls.pop();it=e===void 0?!0:e}function po(){Kn++}function go(){for(Kn--;!Kn&&Yn.length;)Yn.shift()()}function $s(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const o=e.deps[e._depsLength];o!==t?(o&&Ws(o,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Yn=[];function Fs(e,t,n){po();for(const o of e.keys()){let s;o._dirtyLevel<t&&(s??(s=e.get(o)===o._trackId))&&(o._shouldSchedule||(o._shouldSchedule=o._dirtyLevel===0),o._dirtyLevel=t),o._shouldSchedule&&(s??(s=e.get(o)===o._trackId))&&(o.trigger(),(!o._runnings||o.allowRecurse)&&o._dirtyLevel!==2&&(o._shouldSchedule=!1,o.scheduler&&Yn.push(o.scheduler)))}go()}const Ds=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Qn=new WeakMap,bt=Symbol(""),Jn=Symbol("");function Te(e,t,n){if(it&&wt){let o=Qn.get(e);o||Qn.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=Ds(()=>o.delete(n))),$s(wt,s)}}function Ke(e,t,n,o,s,i){const r=Qn.get(e);if(!r)return;let u=[];if(t==="clear")u=[...r.values()];else if(n==="length"&&H(e)){const l=Number(o);r.forEach((f,m)=>{(m==="length"||!ct(m)&&m>=l)&&u.push(f)})}else switch(n!==void 0&&u.push(r.get(n)),t){case"add":H(e)?ho(n)&&u.push(r.get("length")):(u.push(r.get(bt)),Ct(e)&&u.push(r.get(Jn)));break;case"delete":H(e)||(u.push(r.get(bt)),Ct(e)&&u.push(r.get(Jn)));break;case"set":Ct(e)&&u.push(r.get(bt));break}po();for(const l of u)l&&Fs(l,4);go()}const cr=lo("__proto__,__v_isRef,__isVue"),Bs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ct)),Lo=ur();function ur(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=ee(this);for(let i=0,r=this.length;i<r;i++)Te(o,"get",i+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(ee)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ut(),po();const o=ee(this)[t].apply(this,n);return go(),ht(),o}}),e}function hr(e){ct(e)||(e=String(e));const t=ee(this);return Te(t,"has",e),t.hasOwnProperty(e)}class Hs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return o===(s?i?Ar:zs:i?Us:Gs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const r=H(t);if(!s){if(r&&K(Lo,n))return Reflect.get(Lo,n,o);if(n==="hasOwnProperty")return hr}const u=Reflect.get(t,n,o);return(ct(n)?Bs.has(n):cr(n))||(s||Te(t,"get",n),i)?u:Ae(u)?r&&ho(n)?u:u.value:ie(u)?s?Vs(u):on(u):u}}class js extends Hs{constructor(t=!1){super(!1,t)}set(t,n,o,s){let i=t[n];if(!this._isShallow){const l=vt(i);if(!Mt(o)&&!vt(o)&&(i=ee(i),o=ee(o)),!H(t)&&Ae(i)&&!Ae(o))return l?!1:(i.value=o,!0)}const r=H(t)&&ho(n)?Number(n)<t.length:K(t,n),u=Reflect.set(t,n,o,s);return t===ee(s)&&(r?at(o,i)&&Ke(t,"set",n,o):Ke(t,"add",n,o)),u}deleteProperty(t,n){const o=K(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&Ke(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!ct(n)||!Bs.has(n))&&Te(t,"has",n),o}ownKeys(t){return Te(t,"iterate",H(t)?"length":bt),Reflect.ownKeys(t)}}class dr extends Hs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const fr=new js,mr=new dr,pr=new js(!0);const yo=e=>e,xn=e=>Reflect.getPrototypeOf(e);function an(e,t,n=!1,o=!1){e=e.__v_raw;const s=ee(e),i=ee(t);n||(at(t,i)&&Te(s,"get",t),Te(s,"get",i));const{has:r}=xn(s),u=o?yo:n?vo:Qt;if(r.call(s,t))return u(e.get(t));if(r.call(s,i))return u(e.get(i));e!==s&&e.get(t)}function ln(e,t=!1){const n=this.__v_raw,o=ee(n),s=ee(e);return t||(at(e,s)&&Te(o,"has",e),Te(o,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function cn(e,t=!1){return e=e.__v_raw,!t&&Te(ee(e),"iterate",bt),Reflect.get(e,"size",e)}function $o(e,t=!1){!t&&!Mt(e)&&!vt(e)&&(e=ee(e));const n=ee(this);return xn(n).has.call(n,e)||(n.add(e),Ke(n,"add",e,e)),this}function Fo(e,t,n=!1){!n&&!Mt(t)&&!vt(t)&&(t=ee(t));const o=ee(this),{has:s,get:i}=xn(o);let r=s.call(o,e);r||(e=ee(e),r=s.call(o,e));const u=i.call(o,e);return o.set(e,t),r?at(t,u)&&Ke(o,"set",e,t):Ke(o,"add",e,t),this}function Do(e){const t=ee(this),{has:n,get:o}=xn(t);let s=n.call(t,e);s||(e=ee(e),s=n.call(t,e)),o&&o.call(t,e);const i=t.delete(e);return s&&Ke(t,"delete",e,void 0),i}function Bo(){const e=ee(this),t=e.size!==0,n=e.clear();return t&&Ke(e,"clear",void 0,void 0),n}function un(e,t){return function(o,s){const i=this,r=i.__v_raw,u=ee(r),l=t?yo:e?vo:Qt;return!e&&Te(u,"iterate",bt),r.forEach((f,m)=>o.call(s,l(f),l(m),i))}}function hn(e,t,n){return function(...o){const s=this.__v_raw,i=ee(s),r=Ct(i),u=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,f=s[e](...o),m=n?yo:t?vo:Qt;return!t&&Te(i,"iterate",l?Jn:bt),{next(){const{value:p,done:y}=f.next();return y?{value:p,done:y}:{value:u?[m(p[0]),m(p[1])]:m(p),done:y}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function gr(){const e={get(i){return an(this,i)},get size(){return cn(this)},has:ln,add:$o,set:Fo,delete:Do,clear:Bo,forEach:un(!1,!1)},t={get(i){return an(this,i,!1,!0)},get size(){return cn(this)},has:ln,add(i){return $o.call(this,i,!0)},set(i,r){return Fo.call(this,i,r,!0)},delete:Do,clear:Bo,forEach:un(!1,!0)},n={get(i){return an(this,i,!0)},get size(){return cn(this,!0)},has(i){return ln.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:un(!0,!1)},o={get(i){return an(this,i,!0,!0)},get size(){return cn(this,!0)},has(i){return ln.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=hn(i,!1,!1),n[i]=hn(i,!0,!1),t[i]=hn(i,!1,!0),o[i]=hn(i,!0,!0)}),[e,n,t,o]}const[yr,wr,br,vr]=gr();function wo(e,t){const n=t?e?vr:br:e?wr:yr;return(o,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(K(n,s)&&s in o?n:o,s,i)}const _r={get:wo(!1,!1)},kr={get:wo(!1,!0)},Tr={get:wo(!0,!1)};const Gs=new WeakMap,Us=new WeakMap,zs=new WeakMap,Ar=new WeakMap;function Sr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xr(e){return e.__v_skip||!Object.isExtensible(e)?0:Sr(Yi(e))}function on(e){return vt(e)?e:bo(e,!1,fr,_r,Gs)}function qs(e){return bo(e,!1,pr,kr,Us)}function Vs(e){return bo(e,!0,mr,Tr,zs)}function bo(e,t,n,o,s){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const r=xr(e);if(r===0)return e;const u=new Proxy(e,r===2?o:n);return s.set(e,u),u}function Ut(e){return vt(e)?Ut(e.__v_raw):!!(e&&e.__v_isReactive)}function vt(e){return!!(e&&e.__v_isReadonly)}function Mt(e){return!!(e&&e.__v_isShallow)}function Ks(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function Er(e){return Object.isExtensible(e)&&Os(e,"__v_skip",!0),e}const Qt=e=>ie(e)?on(e):e,vo=e=>ie(e)?Vs(e):e;class Ys{constructor(t,n,o,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new mo(()=>t(this._value),()=>fn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=ee(this);return(!t._cacheable||t.effect.dirty)&&at(t._value,t._value=t.effect.run())&&fn(t,4),Qs(t),t.effect._dirtyLevel>=2&&fn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Ir(e,t,n=!1){let o,s;const i=U(e);return i?(o=e,s=Re):(o=e.get,s=e.set),new Ys(o,s,i||!s,n)}function Qs(e){var t;it&&wt&&(e=ee(e),$s(wt,(t=e.dep)!=null?t:e.dep=Ds(()=>e.dep=void 0,e instanceof Ys?e:void 0)))}function fn(e,t=4,n,o){e=ee(e);const s=e.dep;s&&Fs(s,t)}function Ae(e){return!!(e&&e.__v_isRef===!0)}function Cr(e){return Js(e,!1)}function Or(e){return Js(e,!0)}function Js(e,t){return Ae(e)?e:new Rr(e,t)}class Rr{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ee(t),this._value=n?t:Qt(t)}get value(){return Qs(this),this._value}set value(t){const n=this.__v_isShallow||Mt(t)||vt(t);t=n?t:ee(t),at(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=n?t:Qt(t),fn(this,4))}}function X(e){return Ae(e)?e.value:e}const Mr={get:(e,t,n)=>X(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return Ae(s)&&!Ae(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function Xs(e){return Ut(e)?e:new Proxy(e,Mr)}/**
* @vue/runtime-core v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rt(e,t,n,o){try{return o?e(...o):e()}catch(s){En(s,t,n)}}function We(e,t,n,o){if(U(e)){const s=rt(e,t,n,o);return s&&Es(s)&&s.catch(i=>{En(i,t,n)}),s}if(H(e)){const s=[];for(let i=0;i<e.length;i++)s.push(We(e[i],t,n,o));return s}}function En(e,t,n,o=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const r=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const f=i.ec;if(f){for(let m=0;m<f.length;m++)if(f[m](e,r,u)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ut(),rt(l,null,10,[e,r,u]),ht();return}}Pr(e,n,s,o)}function Pr(e,t,n,o=!0){console.error(e)}let Jt=!1,Xn=!1;const pe=[];let Ue=0;const Ot=[];let tt=null,gt=0;const Zs=Promise.resolve();let _o=null;function ei(e){const t=_o||Zs;return e?t.then(this?e.bind(this):e):t}function Nr(e){let t=Ue+1,n=pe.length;for(;t<n;){const o=t+n>>>1,s=pe[o],i=Xt(s);i<e||i===e&&s.pre?t=o+1:n=o}return t}function ko(e){(!pe.length||!pe.includes(e,Jt&&e.allowRecurse?Ue+1:Ue))&&(e.id==null?pe.push(e):pe.splice(Nr(e.id),0,e),ti())}function ti(){!Jt&&!Xn&&(Xn=!0,_o=Zs.then(oi))}function Wr(e){const t=pe.indexOf(e);t>Ue&&pe.splice(t,1)}function Lr(e){H(e)?Ot.push(...e):(!tt||!tt.includes(e,e.allowRecurse?gt+1:gt))&&Ot.push(e),ti()}function Ho(e,t,n=Jt?Ue+1:0){for(;n<pe.length;n++){const o=pe[n];if(o&&o.pre){if(e&&o.id!==e.uid)continue;pe.splice(n,1),n--,o()}}}function ni(e){if(Ot.length){const t=[...new Set(Ot)].sort((n,o)=>Xt(n)-Xt(o));if(Ot.length=0,tt){tt.push(...t);return}for(tt=t,gt=0;gt<tt.length;gt++){const n=tt[gt];n.active!==!1&&n()}tt=null,gt=0}}const Xt=e=>e.id==null?1/0:e.id,$r=(e,t)=>{const n=Xt(e)-Xt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function oi(e){Xn=!1,Jt=!0,pe.sort($r);try{for(Ue=0;Ue<pe.length;Ue++){const t=pe[Ue];t&&t.active!==!1&&rt(t,t.i,t.i?15:14)}}finally{Ue=0,pe.length=0,ni(),Jt=!1,_o=null,(pe.length||Ot.length)&&oi()}}let ve=null,In=null;function wn(e){const t=ve;return ve=e,In=e&&e.type.__scopeId||null,t}function Cn(e){In=e}function On(){In=null}function M(e,t=ve,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&Qo(-1);const i=wn(t);let r;try{r=e(...s)}finally{wn(i),o._d&&Qo(1)}return r};return o._n=!0,o._c=!0,o._d=!0,o}function mt(e,t,n,o){const s=e.dirs,i=t&&t.dirs;for(let r=0;r<s.length;r++){const u=s[r];i&&(u.oldValue=i[r].value);let l=u.dir[o];l&&(ut(),We(l,n,8,[e.el,u,e,t]),ht())}}function si(e,t){e.shapeFlag&6&&e.component?si(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ii(e,t){return U(e)?ye({name:e.name},t,{setup:e}):e}const zt=e=>!!e.type.__asyncLoader,ri=e=>e.type.__isKeepAlive;function Fr(e,t){ai(e,"a",t)}function Dr(e,t){ai(e,"da",t)}function ai(e,t,n=ge){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Rn(t,o,n),n){let s=n.parent;for(;s&&s.parent;)ri(s.parent.vnode)&&Br(o,t,n,s),s=s.parent}}function Br(e,t,n,o){const s=Rn(t,e,o,!0);li(()=>{uo(o[t],s)},n)}function Rn(e,t,n=ge,o=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{ut();const u=sn(n),l=We(t,n,e,r);return u(),ht(),l});return o?s.unshift(i):s.push(i),i}}const Qe=e=>(t,n=ge)=>{(!Nn||e==="sp")&&Rn(e,(...o)=>t(...o),n)},Hr=Qe("bm"),jr=Qe("m"),Gr=Qe("bu"),Ur=Qe("u"),zr=Qe("bum"),li=Qe("um"),qr=Qe("sp"),Vr=Qe("rtg"),Kr=Qe("rtc");function Yr(e,t=ge){Rn("ec",e,t)}const Qr="components";function ci(e,t){return Xr(Qr,e,!0,t)||e}const Jr=Symbol.for("v-ndc");function Xr(e,t,n=!0,o=!1){const s=ve||ge;if(s){const i=s.type;{const u=Ha(i,!1);if(u&&(u===t||u===Le(t)||u===Sn(Le(t))))return i}const r=jo(s[e]||i[e],t)||jo(s.appContext[e],t);return!r&&o?i:r}}function jo(e,t){return e&&(e[t]||e[Le(t)]||e[Sn(Le(t))])}function Zt(e,t,n,o){let s;const i=n;if(H(e)||ue(e)){s=new Array(e.length);for(let r=0,u=e.length;r<u;r++)s[r]=t(e[r],r,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let r=0;r<e;r++)s[r]=t(r+1,r,void 0,i)}else if(ie(e))if(e[Symbol.iterator])s=Array.from(e,(r,u)=>t(r,u,void 0,i));else{const r=Object.keys(e);s=new Array(r.length);for(let u=0,l=r.length;u<l;u++){const f=r[u];s[u]=t(e[f],f,u,i)}}else s=[];return s}function ui(e,t,n={},o,s){if(ve.isCE||ve.parent&&zt(ve.parent)&&ve.parent.isCE)return O("slot",n,o&&o());let i=e[t];i&&i._c&&(i._d=!1),D();const r=i&&hi(i(n)),u=we(me,{key:(n.key||r&&r.key||`_${t}`)+(!r&&o?"_fb":"")},r||(o?o():[]),r&&e._===1?64:-2);return!s&&u.scopeId&&(u.slotScopeIds=[u.scopeId+"-s"]),i&&i._c&&(i._d=!0),u}function hi(e){return e.some(t=>vn(t)?!(t.type===lt||t.type===me&&!hi(t.children)):!0)?e:null}const Zn=e=>e?Oi(e)?xo(e):Zn(e.parent):null,qt=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zn(e.parent),$root:e=>Zn(e.root),$emit:e=>e.emit,$options:e=>To(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,ko(e.update)}),$nextTick:e=>e.n||(e.n=ei.bind(e.proxy)),$watch:e=>_a.bind(e)}),Dn=(e,t)=>e!==ae&&!e.__isScriptSetup&&K(e,t),Zr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:s,props:i,accessCache:r,type:u,appContext:l}=e;let f;if(t[0]!=="$"){const w=r[t];if(w!==void 0)switch(w){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Dn(o,t))return r[t]=1,o[t];if(s!==ae&&K(s,t))return r[t]=2,s[t];if((f=e.propsOptions[0])&&K(f,t))return r[t]=3,i[t];if(n!==ae&&K(n,t))return r[t]=4,n[t];eo&&(r[t]=0)}}const m=qt[t];let p,y;if(m)return t==="$attrs"&&Te(e.attrs,"get",""),m(e);if((p=u.__cssModules)&&(p=p[t]))return p;if(n!==ae&&K(n,t))return r[t]=4,n[t];if(y=l.config.globalProperties,K(y,t))return y[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:i}=e;return Dn(s,t)?(s[t]=n,!0):o!==ae&&K(o,t)?(o[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,propsOptions:i}},r){let u;return!!n[r]||e!==ae&&K(e,r)||Dn(t,r)||(u=i[0])&&K(u,r)||K(o,r)||K(qt,r)||K(s.config.globalProperties,r)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Go(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let eo=!0;function ea(e){const t=To(e),n=e.proxy,o=e.ctx;eo=!1,t.beforeCreate&&Uo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:r,watch:u,provide:l,inject:f,created:m,beforeMount:p,mounted:y,beforeUpdate:w,updated:L,activated:R,deactivated:z,beforeDestroy:B,beforeUnmount:F,destroyed:P,unmounted:Y,render:ce,renderTracked:q,renderTriggered:le,errorCaptured:Ie,serverPrefetch:dt,expose:Fe,inheritAttrs:Je,components:ft,directives:De,filters:Ft}=t;if(f&&ta(f,o,null),r)for(const oe in r){const Q=r[oe];U(Q)&&(o[oe]=Q.bind(n))}if(s){const oe=s.call(n,n);ie(oe)&&(e.data=on(oe))}if(eo=!0,i)for(const oe in i){const Q=i[oe],ze=U(Q)?Q.bind(n,n):U(Q.get)?Q.get.bind(n,n):Re,Xe=!U(Q)&&U(Q.set)?Q.set.bind(n):Re,Be=xe({get:ze,set:Xe});Object.defineProperty(o,oe,{enumerable:!0,configurable:!0,get:()=>Be.value,set:_e=>Be.value=_e})}if(u)for(const oe in u)di(u[oe],o,n,oe);if(l){const oe=U(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(Q=>{mn(Q,oe[Q])})}m&&Uo(m,e,"c");function he(oe,Q){H(Q)?Q.forEach(ze=>oe(ze.bind(n))):Q&&oe(Q.bind(n))}if(he(Hr,p),he(jr,y),he(Gr,w),he(Ur,L),he(Fr,R),he(Dr,z),he(Yr,Ie),he(Kr,q),he(Vr,le),he(zr,F),he(li,Y),he(qr,dt),H(Fe))if(Fe.length){const oe=e.exposed||(e.exposed={});Fe.forEach(Q=>{Object.defineProperty(oe,Q,{get:()=>n[Q],set:ze=>n[Q]=ze})})}else e.exposed||(e.exposed={});ce&&e.render===Re&&(e.render=ce),Je!=null&&(e.inheritAttrs=Je),ft&&(e.components=ft),De&&(e.directives=De)}function ta(e,t,n=Re){H(e)&&(e=to(e));for(const o in e){const s=e[o];let i;ie(s)?"default"in s?i=Ye(s.from||o,s.default,!0):i=Ye(s.from||o):i=Ye(s),Ae(i)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):t[o]=i}}function Uo(e,t,n){We(H(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function di(e,t,n,o){const s=o.includes(".")?xi(n,o):()=>n[o];if(ue(e)){const i=t[e];U(i)&&pn(s,i)}else if(U(e))pn(s,e.bind(n));else if(ie(e))if(H(e))e.forEach(i=>di(i,t,n,o));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&pn(s,i,e)}}function To(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:r}}=e.appContext,u=i.get(t);let l;return u?l=u:!s.length&&!n&&!o?l=t:(l={},s.length&&s.forEach(f=>bn(l,f,r,!0)),bn(l,t,r)),ie(t)&&i.set(t,l),l}function bn(e,t,n,o=!1){const{mixins:s,extends:i}=t;i&&bn(e,i,n,!0),s&&s.forEach(r=>bn(e,r,n,!0));for(const r in t)if(!(o&&r==="expose")){const u=na[r]||n&&n[r];e[r]=u?u(e[r],t[r]):t[r]}return e}const na={data:zo,props:qo,emits:qo,methods:jt,computed:jt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:jt,directives:jt,watch:sa,provide:zo,inject:oa};function zo(e,t){return t?e?function(){return ye(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function oa(e,t){return jt(to(e),to(t))}function to(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function jt(e,t){return e?ye(Object.create(null),e,t):t}function qo(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:ye(Object.create(null),Go(e),Go(t??{})):t}function sa(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const o in t)n[o]=be(e[o],t[o]);return n}function fi(){return{app:null,config:{isNativeTag:Vi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ia=0;function ra(e,t){return function(o,s=null){U(o)||(o=ye({},o)),s!=null&&!ie(s)&&(s=null);const i=fi(),r=new WeakSet;let u=!1;const l=i.app={_uid:ia++,_component:o,_props:s,_container:null,_context:i,_instance:null,version:Ga,get config(){return i.config},set config(f){},use(f,...m){return r.has(f)||(f&&U(f.install)?(r.add(f),f.install(l,...m)):U(f)&&(r.add(f),f(l,...m))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,m){return m?(i.components[f]=m,l):i.components[f]},directive(f,m){return m?(i.directives[f]=m,l):i.directives[f]},mount(f,m,p){if(!u){const y=O(o,s);return y.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),m&&t?t(y,f):e(y,f,p),u=!0,l._container=f,f.__vue_app__=l,xo(y.component)}},unmount(){u&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,m){return i.provides[f]=m,l},runWithContext(f){const m=Rt;Rt=l;try{return f()}finally{Rt=m}}};return l}}let Rt=null;function mn(e,t){if(ge){let n=ge.provides;const o=ge.parent&&ge.parent.provides;o===n&&(n=ge.provides=Object.create(o)),n[e]=t}}function Ye(e,t,n=!1){const o=ge||ve;if(o||Rt){const s=Rt?Rt._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&U(t)?t.call(o&&o.proxy):t}}const mi={},pi=()=>Object.create(mi),gi=e=>Object.getPrototypeOf(e)===mi;function aa(e,t,n,o=!1){const s={},i=pi();e.propsDefaults=Object.create(null),yi(e,t,s,i);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:qs(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function la(e,t,n,o){const{props:s,attrs:i,vnode:{patchFlag:r}}=e,u=ee(s),[l]=e.propsOptions;let f=!1;if((o||r>0)&&!(r&16)){if(r&8){const m=e.vnode.dynamicProps;for(let p=0;p<m.length;p++){let y=m[p];if(Mn(e.emitsOptions,y))continue;const w=t[y];if(l)if(K(i,y))w!==i[y]&&(i[y]=w,f=!0);else{const L=Le(y);s[L]=no(l,u,L,w,e,!1)}else w!==i[y]&&(i[y]=w,f=!0)}}}else{yi(e,t,s,i)&&(f=!0);let m;for(const p in u)(!t||!K(t,p)&&((m=_t(p))===p||!K(t,m)))&&(l?n&&(n[p]!==void 0||n[m]!==void 0)&&(s[p]=no(l,u,p,void 0,e,!0)):delete s[p]);if(i!==u)for(const p in i)(!t||!K(t,p))&&(delete i[p],f=!0)}f&&Ke(e.attrs,"set","")}function yi(e,t,n,o){const[s,i]=e.propsOptions;let r=!1,u;if(t)for(let l in t){if(Gt(l))continue;const f=t[l];let m;s&&K(s,m=Le(l))?!i||!i.includes(m)?n[m]=f:(u||(u={}))[m]=f:Mn(e.emitsOptions,l)||(!(l in o)||f!==o[l])&&(o[l]=f,r=!0)}if(i){const l=ee(n),f=u||ae;for(let m=0;m<i.length;m++){const p=i[m];n[p]=no(s,l,p,f[p],e,!K(f,p))}}return r}function no(e,t,n,o,s,i){const r=e[n];if(r!=null){const u=K(r,"default");if(u&&o===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&U(l)){const{propsDefaults:f}=s;if(n in f)o=f[n];else{const m=sn(s);o=f[n]=l.call(null,t),m()}}else o=l}r[0]&&(i&&!u?o=!1:r[1]&&(o===""||o===_t(n))&&(o=!0))}return o}const ca=new WeakMap;function wi(e,t,n=!1){const o=n?ca:t.propsCache,s=o.get(e);if(s)return s;const i=e.props,r={},u=[];let l=!1;if(!U(e)){const m=p=>{l=!0;const[y,w]=wi(p,t,!0);ye(r,y),w&&u.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(m),e.extends&&m(e.extends),e.mixins&&e.mixins.forEach(m)}if(!i&&!l)return ie(e)&&o.set(e,It),It;if(H(i))for(let m=0;m<i.length;m++){const p=Le(i[m]);Vo(p)&&(r[p]=ae)}else if(i)for(const m in i){const p=Le(m);if(Vo(p)){const y=i[m],w=r[p]=H(y)||U(y)?{type:y}:ye({},y),L=w.type;let R=!1,z=!0;if(H(L))for(let B=0;B<L.length;++B){const F=L[B],P=U(F)&&F.name;if(P==="Boolean"){R=!0;break}else P==="String"&&(z=!1)}else R=U(L)&&L.name==="Boolean";w[0]=R,w[1]=z,(R||K(w,"default"))&&u.push(p)}}const f=[r,u];return ie(e)&&o.set(e,f),f}function Vo(e){return e[0]!=="$"&&!Gt(e)}const bi=e=>e[0]==="_"||e==="$stable",Ao=e=>H(e)?e.map(Ge):[Ge(e)],ua=(e,t,n)=>{if(t._n)return t;const o=M((...s)=>Ao(t(...s)),n);return o._c=!1,o},vi=(e,t,n)=>{const o=e._ctx;for(const s in e){if(bi(s))continue;const i=e[s];if(U(i))t[s]=ua(s,i,o);else if(i!=null){const r=Ao(i);t[s]=()=>r}}},_i=(e,t)=>{const n=Ao(t);e.slots.default=()=>n},ki=(e,t,n)=>{for(const o in t)(n||o!=="_")&&(e[o]=t[o])},ha=(e,t,n)=>{const o=e.slots=pi();if(e.vnode.shapeFlag&32){const s=t._;s?(ki(o,t,n),n&&Os(o,"_",s,!0)):vi(t,o)}else t&&_i(e,t)},da=(e,t,n)=>{const{vnode:o,slots:s}=e;let i=!0,r=ae;if(o.shapeFlag&32){const u=t._;u?n&&u===1?i=!1:ki(s,t,n):(i=!t.$stable,vi(t,s)),r=t}else t&&(_i(e,t),r={default:1});if(i)for(const u in s)!bi(u)&&r[u]==null&&delete s[u]};function oo(e,t,n,o,s=!1){if(H(e)){e.forEach((y,w)=>oo(y,t&&(H(t)?t[w]:t),n,o,s));return}if(zt(o)&&!s)return;const i=o.shapeFlag&4?xo(o.component):o.el,r=s?null:i,{i:u,r:l}=e,f=t&&t.r,m=u.refs===ae?u.refs={}:u.refs,p=u.setupState;if(f!=null&&f!==l&&(ue(f)?(m[f]=null,K(p,f)&&(p[f]=null)):Ae(f)&&(f.value=null)),U(l))rt(l,u,12,[r,m]);else{const y=ue(l),w=Ae(l);if(y||w){const L=()=>{if(e.f){const R=y?K(p,l)?p[l]:m[l]:l.value;s?H(R)&&uo(R,i):H(R)?R.includes(i)||R.push(i):y?(m[l]=[i],K(p,l)&&(p[l]=m[l])):(l.value=[i],e.k&&(m[e.k]=l.value))}else y?(m[l]=r,K(p,l)&&(p[l]=r)):w&&(l.value=r,e.k&&(m[e.k]=r))};r?(L.id=-1,ke(L,n)):L()}}}const fa=Symbol("_vte"),ma=e=>e.__isTeleport,ke=Ca;function pa(e){return ga(e)}function ga(e,t){const n=Rs();n.__VUE__=!0;const{insert:o,remove:s,patchProp:i,createElement:r,createText:u,createComment:l,setText:f,setElementText:m,parentNode:p,nextSibling:y,setScopeId:w=Re,insertStaticContent:L}=e,R=(c,d,g,_=null,b=null,T=null,x=void 0,A=null,S=!!d.dynamicChildren)=>{if(c===d)return;c&&!Bt(c,d)&&(_=v(c),_e(c,b,T,!0),c=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:k,ref:C,shapeFlag:$}=d;switch(k){case Pn:z(c,d,g,_);break;case lt:B(c,d,g,_);break;case jn:c==null&&F(d,g,_,x);break;case me:ft(c,d,g,_,b,T,x,A,S);break;default:$&1?ce(c,d,g,_,b,T,x,A,S):$&6?De(c,d,g,_,b,T,x,A,S):($&64||$&128)&&k.process(c,d,g,_,b,T,x,A,S,N)}C!=null&&b&&oo(C,c&&c.ref,T,d||c,!d)},z=(c,d,g,_)=>{if(c==null)o(d.el=u(d.children),g,_);else{const b=d.el=c.el;d.children!==c.children&&f(b,d.children)}},B=(c,d,g,_)=>{c==null?o(d.el=l(d.children||""),g,_):d.el=c.el},F=(c,d,g,_)=>{[c.el,c.anchor]=L(c.children,d,g,_,c.el,c.anchor)},P=({el:c,anchor:d},g,_)=>{let b;for(;c&&c!==d;)b=y(c),o(c,g,_),c=b;o(d,g,_)},Y=({el:c,anchor:d})=>{let g;for(;c&&c!==d;)g=y(c),s(c),c=g;s(d)},ce=(c,d,g,_,b,T,x,A,S)=>{d.type==="svg"?x="svg":d.type==="math"&&(x="mathml"),c==null?q(d,g,_,b,T,x,A,S):dt(c,d,b,T,x,A,S)},q=(c,d,g,_,b,T,x,A)=>{let S,k;const{props:C,shapeFlag:$,transition:W,dirs:j}=c;if(S=c.el=r(c.type,T,C&&C.is,C),$&8?m(S,c.children):$&16&&Ie(c.children,S,null,_,b,Bn(c,T),x,A),j&&mt(c,null,_,"created"),le(S,c,c.scopeId,x,_),C){for(const se in C)se!=="value"&&!Gt(se)&&i(S,se,null,C[se],T,_);"value"in C&&i(S,"value",null,C.value,T),(k=C.onVnodeBeforeMount)&&je(k,_,c)}j&&mt(c,null,_,"beforeMount");const V=ya(b,W);V&&W.beforeEnter(S),o(S,d,g),((k=C&&C.onVnodeMounted)||V||j)&&ke(()=>{k&&je(k,_,c),V&&W.enter(S),j&&mt(c,null,_,"mounted")},b)},le=(c,d,g,_,b)=>{if(g&&w(c,g),_)for(let T=0;T<_.length;T++)w(c,_[T]);if(b){let T=b.subTree;if(d===T){const x=b.vnode;le(c,x,x.scopeId,x.slotScopeIds,b.parent)}}},Ie=(c,d,g,_,b,T,x,A,S=0)=>{for(let k=S;k<c.length;k++){const C=c[k]=A?nt(c[k]):Ge(c[k]);R(null,C,d,g,_,b,T,x,A)}},dt=(c,d,g,_,b,T,x)=>{const A=d.el=c.el;let{patchFlag:S,dynamicChildren:k,dirs:C}=d;S|=c.patchFlag&16;const $=c.props||ae,W=d.props||ae;let j;if(g&&pt(g,!1),(j=W.onVnodeBeforeUpdate)&&je(j,g,d,c),C&&mt(d,c,g,"beforeUpdate"),g&&pt(g,!0),($.innerHTML&&W.innerHTML==null||$.textContent&&W.textContent==null)&&m(A,""),k?Fe(c.dynamicChildren,k,A,g,_,Bn(d,b),T):x||Q(c,d,A,null,g,_,Bn(d,b),T,!1),S>0){if(S&16)Je(A,$,W,g,b);else if(S&2&&$.class!==W.class&&i(A,"class",null,W.class,b),S&4&&i(A,"style",$.style,W.style,b),S&8){const V=d.dynamicProps;for(let se=0;se<V.length;se++){const J=V[se],de=$[J],Pe=W[J];(Pe!==de||J==="value")&&i(A,J,de,Pe,b,g)}}S&1&&c.children!==d.children&&m(A,d.children)}else!x&&k==null&&Je(A,$,W,g,b);((j=W.onVnodeUpdated)||C)&&ke(()=>{j&&je(j,g,d,c),C&&mt(d,c,g,"updated")},_)},Fe=(c,d,g,_,b,T,x)=>{for(let A=0;A<d.length;A++){const S=c[A],k=d[A],C=S.el&&(S.type===me||!Bt(S,k)||S.shapeFlag&70)?p(S.el):g;R(S,k,C,null,_,b,T,x,!0)}},Je=(c,d,g,_,b)=>{if(d!==g){if(d!==ae)for(const T in d)!Gt(T)&&!(T in g)&&i(c,T,d[T],null,b,_);for(const T in g){if(Gt(T))continue;const x=g[T],A=d[T];x!==A&&T!=="value"&&i(c,T,A,x,b,_)}"value"in g&&i(c,"value",d.value,g.value,b)}},ft=(c,d,g,_,b,T,x,A,S)=>{const k=d.el=c?c.el:u(""),C=d.anchor=c?c.anchor:u("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:j}=d;j&&(A=A?A.concat(j):j),c==null?(o(k,g,_),o(C,g,_),Ie(d.children||[],g,C,b,T,x,A,S)):$>0&&$&64&&W&&c.dynamicChildren?(Fe(c.dynamicChildren,W,g,b,T,x,A),(d.key!=null||b&&d===b.subTree)&&Ti(c,d,!0)):Q(c,d,g,C,b,T,x,A,S)},De=(c,d,g,_,b,T,x,A,S)=>{d.slotScopeIds=A,c==null?d.shapeFlag&512?b.ctx.activate(d,g,_,x,S):Ft(d,g,_,b,T,x,S):Tt(c,d,S)},Ft=(c,d,g,_,b,T,x)=>{const A=c.component=La(c,_,b);if(ri(c)&&(A.ctx.renderer=N),$a(A,!1,x),A.asyncDep){if(b&&b.registerDep(A,he,x),!c.el){const S=A.subTree=O(lt);B(null,S,d,g)}}else he(A,c,d,g,b,T,x)},Tt=(c,d,g)=>{const _=d.component=c.component;if(xa(c,d,g))if(_.asyncDep&&!_.asyncResolved){oe(_,d,g);return}else _.next=d,Wr(_.update),_.effect.dirty=!0,_.update();else d.el=c.el,_.vnode=d},he=(c,d,g,_,b,T,x)=>{const A=()=>{if(c.isMounted){let{next:C,bu:$,u:W,parent:j,vnode:V}=c;{const xt=Ai(c);if(xt){C&&(C.el=V.el,oe(c,C,x)),xt.asyncDep.then(()=>{c.isUnmounted||A()});return}}let se=C,J;pt(c,!1),C?(C.el=V.el,oe(c,C,x)):C=V,$&&$n($),(J=C.props&&C.props.onVnodeBeforeUpdate)&&je(J,j,C,V),pt(c,!0);const de=Hn(c),Pe=c.subTree;c.subTree=de,R(Pe,de,p(Pe.el),v(Pe),c,b,T),C.el=de.el,se===null&&Ea(c,de.el),W&&ke(W,b),(J=C.props&&C.props.onVnodeUpdated)&&ke(()=>je(J,j,C,V),b)}else{let C;const{el:$,props:W}=d,{bm:j,m:V,parent:se}=c,J=zt(d);if(pt(c,!1),j&&$n(j),!J&&(C=W&&W.onVnodeBeforeMount)&&je(C,se,d),pt(c,!0),$&&re){const de=()=>{c.subTree=Hn(c),re($,c.subTree,c,b,null)};J?d.type.__asyncLoader().then(()=>!c.isUnmounted&&de()):de()}else{const de=c.subTree=Hn(c);R(null,de,g,_,c,b,T),d.el=de.el}if(V&&ke(V,b),!J&&(C=W&&W.onVnodeMounted)){const de=d;ke(()=>je(C,se,de),b)}(d.shapeFlag&256||se&&zt(se.vnode)&&se.vnode.shapeFlag&256)&&c.a&&ke(c.a,b),c.isMounted=!0,d=g=_=null}},S=c.effect=new mo(A,Re,()=>ko(k),c.scope),k=c.update=()=>{S.dirty&&S.run()};k.i=c,k.id=c.uid,pt(c,!0),k()},oe=(c,d,g)=>{d.component=c;const _=c.vnode.props;c.vnode=d,c.next=null,la(c,d.props,_,g),da(c,d.children,g),ut(),Ho(c),ht()},Q=(c,d,g,_,b,T,x,A,S=!1)=>{const k=c&&c.children,C=c?c.shapeFlag:0,$=d.children,{patchFlag:W,shapeFlag:j}=d;if(W>0){if(W&128){Xe(k,$,g,_,b,T,x,A,S);return}else if(W&256){ze(k,$,g,_,b,T,x,A,S);return}}j&8?(C&16&&Ce(k,b,T),$!==k&&m(g,$)):C&16?j&16?Xe(k,$,g,_,b,T,x,A,S):Ce(k,b,T,!0):(C&8&&m(g,""),j&16&&Ie($,g,_,b,T,x,A,S))},ze=(c,d,g,_,b,T,x,A,S)=>{c=c||It,d=d||It;const k=c.length,C=d.length,$=Math.min(k,C);let W;for(W=0;W<$;W++){const j=d[W]=S?nt(d[W]):Ge(d[W]);R(c[W],j,g,null,b,T,x,A,S)}k>C?Ce(c,b,T,!0,!1,$):Ie(d,g,_,b,T,x,A,S,$)},Xe=(c,d,g,_,b,T,x,A,S)=>{let k=0;const C=d.length;let $=c.length-1,W=C-1;for(;k<=$&&k<=W;){const j=c[k],V=d[k]=S?nt(d[k]):Ge(d[k]);if(Bt(j,V))R(j,V,g,null,b,T,x,A,S);else break;k++}for(;k<=$&&k<=W;){const j=c[$],V=d[W]=S?nt(d[W]):Ge(d[W]);if(Bt(j,V))R(j,V,g,null,b,T,x,A,S);else break;$--,W--}if(k>$){if(k<=W){const j=W+1,V=j<C?d[j].el:_;for(;k<=W;)R(null,d[k]=S?nt(d[k]):Ge(d[k]),g,V,b,T,x,A,S),k++}}else if(k>W)for(;k<=$;)_e(c[k],b,T,!0),k++;else{const j=k,V=k,se=new Map;for(k=V;k<=W;k++){const Se=d[k]=S?nt(d[k]):Ge(d[k]);Se.key!=null&&se.set(Se.key,k)}let J,de=0;const Pe=W-V+1;let xt=!1,Oo=0;const Dt=new Array(Pe);for(k=0;k<Pe;k++)Dt[k]=0;for(k=j;k<=$;k++){const Se=c[k];if(de>=Pe){_e(Se,b,T,!0);continue}let He;if(Se.key!=null)He=se.get(Se.key);else for(J=V;J<=W;J++)if(Dt[J-V]===0&&Bt(Se,d[J])){He=J;break}He===void 0?_e(Se,b,T,!0):(Dt[He-V]=k+1,He>=Oo?Oo=He:xt=!0,R(Se,d[He],g,null,b,T,x,A,S),de++)}const Ro=xt?wa(Dt):It;for(J=Ro.length-1,k=Pe-1;k>=0;k--){const Se=V+k,He=d[Se],Mo=Se+1<C?d[Se+1].el:_;Dt[k]===0?R(null,He,g,Mo,b,T,x,A,S):xt&&(J<0||k!==Ro[J]?Be(He,g,Mo,2):J--)}}},Be=(c,d,g,_,b=null)=>{const{el:T,type:x,transition:A,children:S,shapeFlag:k}=c;if(k&6){Be(c.component.subTree,d,g,_);return}if(k&128){c.suspense.move(d,g,_);return}if(k&64){x.move(c,d,g,N);return}if(x===me){o(T,d,g);for(let $=0;$<S.length;$++)Be(S[$],d,g,_);o(c.anchor,d,g);return}if(x===jn){P(c,d,g);return}if(_!==2&&k&1&&A)if(_===0)A.beforeEnter(T),o(T,d,g),ke(()=>A.enter(T),b);else{const{leave:$,delayLeave:W,afterLeave:j}=A,V=()=>o(T,d,g),se=()=>{$(T,()=>{V(),j&&j()})};W?W(T,V,se):se()}else o(T,d,g)},_e=(c,d,g,_=!1,b=!1)=>{const{type:T,props:x,ref:A,children:S,dynamicChildren:k,shapeFlag:C,patchFlag:$,dirs:W,cacheIndex:j}=c;if($===-2&&(b=!1),A!=null&&oo(A,null,g,c,!0),j!=null&&(d.renderCache[j]=void 0),C&256){d.ctx.deactivate(c);return}const V=C&1&&W,se=!zt(c);let J;if(se&&(J=x&&x.onVnodeBeforeUnmount)&&je(J,d,c),C&6)rn(c.component,g,_);else{if(C&128){c.suspense.unmount(g,_);return}V&&mt(c,null,d,"beforeUnmount"),C&64?c.type.remove(c,d,g,N,_):k&&!k.hasOnce&&(T!==me||$>0&&$&64)?Ce(k,d,g,!1,!0):(T===me&&$&384||!b&&C&16)&&Ce(S,d,g),_&&At(c)}(se&&(J=x&&x.onVnodeUnmounted)||V)&&ke(()=>{J&&je(J,d,c),V&&mt(c,null,d,"unmounted")},g)},At=c=>{const{type:d,el:g,anchor:_,transition:b}=c;if(d===me){St(g,_);return}if(d===jn){Y(c);return}const T=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(c.shapeFlag&1&&b&&!b.persisted){const{leave:x,delayLeave:A}=b,S=()=>x(g,T);A?A(c.el,T,S):S()}else T()},St=(c,d)=>{let g;for(;c!==d;)g=y(c),s(c),c=g;s(d)},rn=(c,d,g)=>{const{bum:_,scope:b,update:T,subTree:x,um:A,m:S,a:k}=c;Ko(S),Ko(k),_&&$n(_),b.stop(),T&&(T.active=!1,_e(x,c,d,g)),A&&ke(A,d),ke(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ce=(c,d,g,_=!1,b=!1,T=0)=>{for(let x=T;x<c.length;x++)_e(c[x],d,g,_,b)},v=c=>{if(c.shapeFlag&6)return v(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const d=y(c.anchor||c.el),g=d&&d[fa];return g?y(g):d};let I=!1;const E=(c,d,g)=>{c==null?d._vnode&&_e(d._vnode,null,null,!0):R(d._vnode||null,c,d,null,null,null,g),d._vnode=c,I||(I=!0,Ho(),ni(),I=!1)},N={p:R,um:_e,m:Be,r:At,mt:Ft,mc:Ie,pc:Q,pbc:Fe,n:v,o:e};let te,re;return{render:E,hydrate:te,createApp:ra(E,te)}}function Bn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function pt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ya(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ti(e,t,n=!1){const o=e.children,s=t.children;if(H(o)&&H(s))for(let i=0;i<o.length;i++){const r=o[i];let u=s[i];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=s[i]=nt(s[i]),u.el=r.el),!n&&u.patchFlag!==-2&&Ti(r,u)),u.type===Pn&&(u.el=r.el)}}function wa(e){const t=e.slice(),n=[0];let o,s,i,r,u;const l=e.length;for(o=0;o<l;o++){const f=e[o];if(f!==0){if(s=n[n.length-1],e[s]<f){t[o]=s,n.push(o);continue}for(i=0,r=n.length-1;i<r;)u=i+r>>1,e[n[u]]<f?i=u+1:r=u;f<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,r=n[i-1];i-- >0;)n[i]=r,r=t[r];return n}function Ai(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ai(t)}function Ko(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const ba=Symbol.for("v-scx"),va=()=>Ye(ba),dn={};function pn(e,t,n){return Si(e,t,n)}function Si(e,t,{immediate:n,deep:o,flush:s,once:i,onTrack:r,onTrigger:u}=ae){if(t&&i){const q=t;t=(...le)=>{q(...le),ce()}}const l=ge,f=q=>o===!0?q:yt(q,o===!1?1:void 0);let m,p=!1,y=!1;if(Ae(e)?(m=()=>e.value,p=Mt(e)):Ut(e)?(m=()=>f(e),p=!0):H(e)?(y=!0,p=e.some(q=>Ut(q)||Mt(q)),m=()=>e.map(q=>{if(Ae(q))return q.value;if(Ut(q))return f(q);if(U(q))return rt(q,l,2)})):U(e)?t?m=()=>rt(e,l,2):m=()=>(w&&w(),We(e,l,3,[L])):m=Re,t&&o){const q=m;m=()=>yt(q())}let w,L=q=>{w=P.onStop=()=>{rt(q,l,4),w=P.onStop=void 0}},R;if(Nn)if(L=Re,t?n&&We(t,l,3,[m(),y?[]:void 0,L]):m(),s==="sync"){const q=va();R=q.__watcherHandles||(q.__watcherHandles=[])}else return Re;let z=y?new Array(e.length).fill(dn):dn;const B=()=>{if(!(!P.active||!P.dirty))if(t){const q=P.run();(o||p||(y?q.some((le,Ie)=>at(le,z[Ie])):at(q,z)))&&(w&&w(),We(t,l,3,[q,z===dn?void 0:y&&z[0]===dn?[]:z,L]),z=q)}else P.run()};B.allowRecurse=!!t;let F;s==="sync"?F=B:s==="post"?F=()=>ke(B,l&&l.suspense):(B.pre=!0,l&&(B.id=l.uid),F=()=>ko(B));const P=new mo(m,Re,F),Y=ar(),ce=()=>{P.stop(),Y&&uo(Y.effects,P)};return t?n?B():z=P.run():s==="post"?ke(P.run.bind(P),l&&l.suspense):P.run(),R&&R.push(ce),ce}function _a(e,t,n){const o=this.proxy,s=ue(e)?e.includes(".")?xi(o,e):()=>o[e]:e.bind(o,o);let i;U(t)?i=t:(i=t.handler,n=t);const r=sn(this),u=Si(s,i.bind(o),n);return r(),u}function xi(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}function yt(e,t=1/0,n){if(t<=0||!ie(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ae(e))yt(e.value,t,n);else if(H(e))for(let o=0;o<e.length;o++)yt(e[o],t,n);else if(xs(e)||Ct(e))e.forEach(o=>{yt(o,t,n)});else if(Cs(e)){for(const o in e)yt(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&yt(e[o],t,n)}return e}const ka=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Le(t)}Modifiers`]||e[`${_t(t)}Modifiers`];function Ta(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||ae;let s=n;const i=t.startsWith("update:"),r=i&&ka(o,t.slice(7));r&&(r.trim&&(s=n.map(m=>ue(m)?m.trim():m)),r.number&&(s=n.map(Xi)));let u,l=o[u=Ln(t)]||o[u=Ln(Le(t))];!l&&i&&(l=o[u=Ln(_t(t))]),l&&We(l,e,6,s);const f=o[u+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[u])return;e.emitted[u]=!0,We(f,e,6,s)}}function Ei(e,t,n=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const i=e.emits;let r={},u=!1;if(!U(e)){const l=f=>{const m=Ei(f,t,!0);m&&(u=!0,ye(r,m))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!u?(ie(e)&&o.set(e,null),null):(H(i)?i.forEach(l=>r[l]=null):ye(r,i),ie(e)&&o.set(e,r),r)}function Mn(e,t){return!e||!kn(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,_t(t))||K(e,t))}function Hn(e){const{type:t,vnode:n,proxy:o,withProxy:s,propsOptions:[i],slots:r,attrs:u,emit:l,render:f,renderCache:m,props:p,data:y,setupState:w,ctx:L,inheritAttrs:R}=e,z=wn(e);let B,F;try{if(n.shapeFlag&4){const Y=s||o,ce=Y;B=Ge(f.call(ce,Y,m,p,w,y,L)),F=u}else{const Y=t;B=Ge(Y.length>1?Y(p,{attrs:u,slots:r,emit:l}):Y(p,null)),F=t.props?u:Aa(u)}}catch(Y){Vt.length=0,En(Y,e,1),B=O(lt)}let P=B;if(F&&R!==!1){const Y=Object.keys(F),{shapeFlag:ce}=P;Y.length&&ce&7&&(i&&Y.some(co)&&(F=Sa(F,i)),P=Pt(P,F,!1,!0))}return n.dirs&&(P=Pt(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),B=P,wn(z),B}const Aa=e=>{let t;for(const n in e)(n==="class"||n==="style"||kn(n))&&((t||(t={}))[n]=e[n]);return t},Sa=(e,t)=>{const n={};for(const o in e)(!co(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function xa(e,t,n){const{props:o,children:s,component:i}=e,{props:r,children:u,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return o?Yo(o,r,f):!!r;if(l&8){const m=t.dynamicProps;for(let p=0;p<m.length;p++){const y=m[p];if(r[y]!==o[y]&&!Mn(f,y))return!0}}}else return(s||u)&&(!u||!u.$stable)?!0:o===r?!1:o?r?Yo(o,r,f):!0:!!r;return!1}function Yo(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const i=o[s];if(t[i]!==e[i]&&!Mn(n,i))return!0}return!1}function Ea({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ia=e=>e.__isSuspense;function Ca(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Lr(e)}const me=Symbol.for("v-fgt"),Pn=Symbol.for("v-txt"),lt=Symbol.for("v-cmt"),jn=Symbol.for("v-stc"),Vt=[];let Ee=null;function D(e=!1){Vt.push(Ee=e?null:[])}function Oa(){Vt.pop(),Ee=Vt[Vt.length-1]||null}let en=1;function Qo(e){en+=e,e<0&&Ee&&(Ee.hasOnce=!0)}function Ii(e){return e.dynamicChildren=en>0?Ee||It:null,Oa(),en>0&&Ee&&Ee.push(e),e}function Z(e,t,n,o,s,i){return Ii(h(e,t,n,o,s,i,!0))}function we(e,t,n,o,s){return Ii(O(e,t,n,o,s,!0))}function vn(e){return e?e.__v_isVNode===!0:!1}function Bt(e,t){return e.type===t.type&&e.key===t.key}const Ci=({key:e})=>e??null,gn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||Ae(e)||U(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function h(e,t=null,n=null,o=0,s=null,i=e===me?0:1,r=!1,u=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ci(t),ref:t&&gn(t),scopeId:In,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ve};return u?(So(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ue(n)?8:16),en>0&&!r&&Ee&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ee.push(l),l}const O=Ra;function Ra(e,t=null,n=null,o=0,s=null,i=!1){if((!e||e===Jr)&&(e=lt),vn(e)){const u=Pt(e,t,!0);return n&&So(u,n),en>0&&!i&&Ee&&(u.shapeFlag&6?Ee[Ee.indexOf(e)]=u:Ee.push(u)),u.patchFlag=-2,u}if(ja(e)&&(e=e.__vccOpts),t){t=Ma(t);let{class:u,style:l}=t;u&&!ue(u)&&(t.class=Oe(u)),ie(l)&&(Ks(l)&&!H(l)&&(l=ye({},l)),t.style=fo(l))}const r=ue(e)?1:Ia(e)?128:ma(e)?64:ie(e)?4:U(e)?2:0;return h(e,t,n,o,s,r,i,!0)}function Ma(e){return e?Ks(e)||gi(e)?ye({},e):e:null}function Pt(e,t,n=!1,o=!1){const{props:s,ref:i,patchFlag:r,children:u,transition:l}=e,f=t?Pa(s||{},t):s,m={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Ci(f),ref:t&&t.ref?n&&i?H(i)?i.concat(gn(t)):[i,gn(t)]:gn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:u,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&o&&si(m,l.clone(m)),m}function a(e=" ",t=0){return O(Pn,null,e,t)}function st(e="",t=!1){return t?(D(),we(lt,null,e)):O(lt,null,e)}function Ge(e){return e==null||typeof e=="boolean"?O(lt):H(e)?O(me,null,e.slice()):typeof e=="object"?nt(e):O(Pn,null,String(e))}function nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function So(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),So(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!gi(t)?t._ctx=ve:s===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),o&64?(n=16,t=[a(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pa(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=Oe([t.class,o.class]));else if(s==="style")t.style=fo([t.style,o.style]);else if(kn(s)){const i=t[s],r=o[s];r&&i!==r&&!(H(i)&&i.includes(r))&&(t[s]=i?[].concat(i,r):r)}else s!==""&&(t[s]=o[s])}return t}function je(e,t,n,o=null){We(e,t,7,[n,o])}const Na=fi();let Wa=0;function La(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||Na,i={uid:Wa++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ir(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wi(o,s),emitsOptions:Ei(o,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:o.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ta.bind(null,i),e.ce&&e.ce(i),i}let ge=null,_n,so;{const e=Rs(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),i=>{s.length>1?s.forEach(r=>r(i)):s[0](i)}};_n=t("__VUE_INSTANCE_SETTERS__",n=>ge=n),so=t("__VUE_SSR_SETTERS__",n=>Nn=n)}const sn=e=>{const t=ge;return _n(e),e.scope.on(),()=>{e.scope.off(),_n(t)}},Jo=()=>{ge&&ge.scope.off(),_n(null)};function Oi(e){return e.vnode.shapeFlag&4}let Nn=!1;function $a(e,t=!1,n=!1){t&&so(t);const{props:o,children:s}=e.vnode,i=Oi(e);aa(e,o,i,t),ha(e,s,n);const r=i?Fa(e,t):void 0;return t&&so(!1),r}function Fa(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Zr);const{setup:o}=n;if(o){const s=e.setupContext=o.length>1?Ba(e):null,i=sn(e);ut();const r=rt(o,e,0,[e.props,s]);if(ht(),i(),Es(r)){if(r.then(Jo,Jo),t)return r.then(u=>{Xo(e,u,t)}).catch(u=>{En(u,e,0)});e.asyncDep=r}else Xo(e,r,t)}else Ri(e,t)}function Xo(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=Xs(t)),Ri(e,n)}let Zo;function Ri(e,t,n){const o=e.type;if(!e.render){if(!t&&Zo&&!o.render){const s=o.template||To(e).template;if(s){const{isCustomElement:i,compilerOptions:r}=e.appContext.config,{delimiters:u,compilerOptions:l}=o,f=ye(ye({isCustomElement:i,delimiters:u},r),l);o.render=Zo(s,f)}}e.render=o.render||Re}{const s=sn(e);ut();try{ea(e)}finally{ht(),s()}}}const Da={get(e,t){return Te(e,"get",""),e[t]}};function Ba(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Da),slots:e.slots,emit:e.emit,expose:t}}function xo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xs(Er(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qt)return qt[n](e)},has(t,n){return n in t||n in qt}})):e.proxy}function Ha(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function ja(e){return U(e)&&"__vccOpts"in e}const xe=(e,t)=>Ir(e,t,Nn);function Mi(e,t,n){const o=arguments.length;return o===2?ie(t)&&!H(t)?vn(t)?O(e,null,[t]):O(e,t):O(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&vn(n)&&(n=[n]),O(e,t,n))}const Ga="3.4.37";/**
* @vue/runtime-dom v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ua="http://www.w3.org/2000/svg",za="http://www.w3.org/1998/Math/MathML",Ve=typeof document<"u"?document:null,es=Ve&&Ve.createElement("template"),qa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?Ve.createElementNS(Ua,e):t==="mathml"?Ve.createElementNS(za,e):n?Ve.createElement(e,{is:n}):Ve.createElement(e);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>Ve.createTextNode(e),createComment:e=>Ve.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ve.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,i){const r=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{es.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const u=es.content;if(o==="svg"||o==="mathml"){const l=u.firstChild;for(;l.firstChild;)u.appendChild(l.firstChild);u.removeChild(l)}t.insertBefore(u,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Va=Symbol("_vtc");function Ka(e,t,n){const o=e[Va];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ts=Symbol("_vod"),Ya=Symbol("_vsh"),Qa=Symbol(""),Ja=/(^|;)\s*display\s*:/;function Xa(e,t,n){const o=e.style,s=ue(n);let i=!1;if(n&&!s){if(t)if(ue(t))for(const r of t.split(";")){const u=r.slice(0,r.indexOf(":")).trim();n[u]==null&&yn(o,u,"")}else for(const r in t)n[r]==null&&yn(o,r,"");for(const r in n)r==="display"&&(i=!0),yn(o,r,n[r])}else if(s){if(t!==n){const r=o[Qa];r&&(n+=";"+r),o.cssText=n,i=Ja.test(n)}}else t&&e.removeAttribute("style");ts in e&&(e[ts]=i?o.display:"",e[Ya]&&(o.display="none"))}const ns=/\s*!important$/;function yn(e,t,n){if(H(n))n.forEach(o=>yn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Za(e,t);ns.test(n)?e.setProperty(_t(o),n.replace(ns,""),"important"):e[o]=n}}const os=["Webkit","Moz","ms"],Gn={};function Za(e,t){const n=Gn[t];if(n)return n;let o=Le(t);if(o!=="filter"&&o in e)return Gn[t]=o;o=Sn(o);for(let s=0;s<os.length;s++){const i=os[s]+o;if(i in e)return Gn[t]=i}return t}const ss="http://www.w3.org/1999/xlink";function is(e,t,n,o,s,i=sr(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ss,t.slice(6,t.length)):e.setAttributeNS(ss,t,n):n==null||i&&!Ms(n)?e.removeAttribute(t):e.setAttribute(t,i?"":ct(n)?String(n):n)}function el(e,t,n,o){if(t==="innerHTML"||t==="textContent"){if(n==null)return;e[t]=n;return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?"":String(n);(r!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=Ms(n):n==null&&r==="string"?(n="",i=!0):r==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}function tl(e,t,n,o){e.addEventListener(t,n,o)}function nl(e,t,n,o){e.removeEventListener(t,n,o)}const rs=Symbol("_vei");function ol(e,t,n,o,s=null){const i=e[rs]||(e[rs]={}),r=i[t];if(o&&r)r.value=o;else{const[u,l]=sl(t);if(o){const f=i[t]=al(o,s);tl(e,u,f,l)}else r&&(nl(e,u,r,l),i[t]=void 0)}}const as=/(?:Once|Passive|Capture)$/;function sl(e){let t;if(as.test(e)){t={};let o;for(;o=e.match(as);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_t(e.slice(2)),t]}let Un=0;const il=Promise.resolve(),rl=()=>Un||(il.then(()=>Un=0),Un=Date.now());function al(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;We(ll(o,n.value),t,5,[o])};return n.value=e,n.attached=rl(),n}function ll(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const ls=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,cl=(e,t,n,o,s,i)=>{const r=s==="svg";t==="class"?Ka(e,o,r):t==="style"?Xa(e,n,o):kn(t)?co(t)||ol(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ul(e,t,o,r))?(el(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&is(e,t,o,r,i,t!=="value")):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),is(e,t,o,r))};function ul(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&ls(t)&&U(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ls(t)&&ue(n)?!1:t in e}const hl=ye({patchProp:cl},qa);let cs;function dl(){return cs||(cs=pa(hl))}const fl=(...e)=>{const t=dl().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=pl(o);if(!s)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const r=n(s,!1,ml(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function ml(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function pl(e){return ue(e)?document.querySelector(e):e}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Et=typeof document<"u";function gl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ne=Object.assign;function zn(e,t){const n={};for(const o in t){const s=t[o];n[o]=$e(s)?s.map(e):e(s)}return n}const Kt=()=>{},$e=Array.isArray,Pi=/#/g,yl=/&/g,wl=/\//g,bl=/=/g,vl=/\?/g,Ni=/\+/g,_l=/%5B/g,kl=/%5D/g,Wi=/%5E/g,Tl=/%60/g,Li=/%7B/g,Al=/%7C/g,$i=/%7D/g,Sl=/%20/g;function Eo(e){return encodeURI(""+e).replace(Al,"|").replace(_l,"[").replace(kl,"]")}function xl(e){return Eo(e).replace(Li,"{").replace($i,"}").replace(Wi,"^")}function io(e){return Eo(e).replace(Ni,"%2B").replace(Sl,"+").replace(Pi,"%23").replace(yl,"%26").replace(Tl,"`").replace(Li,"{").replace($i,"}").replace(Wi,"^")}function El(e){return io(e).replace(bl,"%3D")}function Il(e){return Eo(e).replace(Pi,"%23").replace(vl,"%3F")}function Cl(e){return e==null?"":Il(e).replace(wl,"%2F")}function tn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Ol=/\/$/,Rl=e=>e.replace(Ol,"");function qn(e,t,n="/"){let o,s={},i="",r="";const u=t.indexOf("#");let l=t.indexOf("?");return u<l&&u>=0&&(l=-1),l>-1&&(o=t.slice(0,l),i=t.slice(l+1,u>-1?u:t.length),s=e(i)),u>-1&&(o=o||t.slice(0,u),r=t.slice(u,t.length)),o=Wl(o??t,n),{fullPath:o+(i&&"?")+i+r,path:o,query:s,hash:tn(r)}}function Ml(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function us(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Pl(e,t,n){const o=t.matched.length-1,s=n.matched.length-1;return o>-1&&o===s&&Nt(t.matched[o],n.matched[s])&&Fi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Nt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Fi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Nl(e[n],t[n]))return!1;return!0}function Nl(e,t){return $e(e)?hs(e,t):$e(t)?hs(t,e):e===t}function hs(e,t){return $e(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function Wl(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),s=o[o.length-1];(s===".."||s===".")&&o.push("");let i=n.length-1,r,u;for(r=0;r<o.length;r++)if(u=o[r],u!==".")if(u==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+o.slice(r).join("/")}const et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var nn;(function(e){e.pop="pop",e.push="push"})(nn||(nn={}));var Yt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Yt||(Yt={}));function Ll(e){if(!e)if(Et){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Rl(e)}const $l=/^[^#]+#/;function Fl(e,t){return e.replace($l,"#")+t}function Dl(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const Wn=()=>({left:window.scrollX,top:window.scrollY});function Bl(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Dl(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ds(e,t){return(history.state?history.state.position-t:-1)+e}const ro=new Map;function Hl(e,t){ro.set(e,t)}function jl(e){const t=ro.get(e);return ro.delete(e),t}let Gl=()=>location.protocol+"//"+location.host;function Di(e,t){const{pathname:n,search:o,hash:s}=t,i=e.indexOf("#");if(i>-1){let u=s.includes(e.slice(i))?e.slice(i).length:1,l=s.slice(u);return l[0]!=="/"&&(l="/"+l),us(l,"")}return us(n,e)+o+s}function Ul(e,t,n,o){let s=[],i=[],r=null;const u=({state:y})=>{const w=Di(e,location),L=n.value,R=t.value;let z=0;if(y){if(n.value=w,t.value=y,r&&r===L){r=null;return}z=R?y.position-R.position:0}else o(w);s.forEach(B=>{B(n.value,L,{delta:z,type:nn.pop,direction:z?z>0?Yt.forward:Yt.back:Yt.unknown})})};function l(){r=n.value}function f(y){s.push(y);const w=()=>{const L=s.indexOf(y);L>-1&&s.splice(L,1)};return i.push(w),w}function m(){const{history:y}=window;y.state&&y.replaceState(ne({},y.state,{scroll:Wn()}),"")}function p(){for(const y of i)y();i=[],window.removeEventListener("popstate",u),window.removeEventListener("beforeunload",m)}return window.addEventListener("popstate",u),window.addEventListener("beforeunload",m,{passive:!0}),{pauseListeners:l,listen:f,destroy:p}}function fs(e,t,n,o=!1,s=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:s?Wn():null}}function zl(e){const{history:t,location:n}=window,o={value:Di(e,n)},s={value:t.state};s.value||i(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,m){const p=e.indexOf("#"),y=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+l:Gl()+e+l;try{t[m?"replaceState":"pushState"](f,"",y),s.value=f}catch(w){console.error(w),n[m?"replace":"assign"](y)}}function r(l,f){const m=ne({},t.state,fs(s.value.back,l,s.value.forward,!0),f,{position:s.value.position});i(l,m,!0),o.value=l}function u(l,f){const m=ne({},s.value,t.state,{forward:l,scroll:Wn()});i(m.current,m,!0);const p=ne({},fs(o.value,l,null),{position:m.position+1},f);i(l,p,!1),o.value=l}return{location:o,state:s,push:u,replace:r}}function ql(e){e=Ll(e);const t=zl(e),n=Ul(e,t.state,t.location,t.replace);function o(i,r=!0){r||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:e,go:o,createHref:Fl.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Vl(e){return typeof e=="string"||e&&typeof e=="object"}function Bi(e){return typeof e=="string"||typeof e=="symbol"}const Hi=Symbol("");var ms;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ms||(ms={}));function Wt(e,t){return ne(new Error,{type:e,[Hi]:!0},t)}function qe(e,t){return e instanceof Error&&Hi in e&&(t==null||!!(e.type&t))}const ps="[^/]+?",Kl={sensitive:!1,strict:!1,start:!0,end:!0},Yl=/[.+*?^${}()[\]/\\]/g;function Ql(e,t){const n=ne({},Kl,t),o=[];let s=n.start?"^":"";const i=[];for(const f of e){const m=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let p=0;p<f.length;p++){const y=f[p];let w=40+(n.sensitive?.25:0);if(y.type===0)p||(s+="/"),s+=y.value.replace(Yl,"\\$&"),w+=40;else if(y.type===1){const{value:L,repeatable:R,optional:z,regexp:B}=y;i.push({name:L,repeatable:R,optional:z});const F=B||ps;if(F!==ps){w+=10;try{new RegExp(`(${F})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${L}" (${F}): `+Y.message)}}let P=R?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(P=z&&f.length<2?`(?:/${P})`:"/"+P),z&&(P+="?"),s+=P,w+=20,z&&(w+=-8),R&&(w+=-20),F===".*"&&(w+=-50)}m.push(w)}o.push(m)}if(n.strict&&n.end){const f=o.length-1;o[f][o[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const r=new RegExp(s,n.sensitive?"":"i");function u(f){const m=f.match(r),p={};if(!m)return null;for(let y=1;y<m.length;y++){const w=m[y]||"",L=i[y-1];p[L.name]=w&&L.repeatable?w.split("/"):w}return p}function l(f){let m="",p=!1;for(const y of e){(!p||!m.endsWith("/"))&&(m+="/"),p=!1;for(const w of y)if(w.type===0)m+=w.value;else if(w.type===1){const{value:L,repeatable:R,optional:z}=w,B=L in f?f[L]:"";if($e(B)&&!R)throw new Error(`Provided param "${L}" is an array but it is not repeatable (* or + modifiers)`);const F=$e(B)?B.join("/"):B;if(!F)if(z)y.length<2&&(m.endsWith("/")?m=m.slice(0,-1):p=!0);else throw new Error(`Missing required param "${L}"`);m+=F}}return m||"/"}return{re:r,score:o,keys:i,parse:u,stringify:l}}function Jl(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function ji(e,t){let n=0;const o=e.score,s=t.score;for(;n<o.length&&n<s.length;){const i=Jl(o[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-o.length)===1){if(gs(o))return 1;if(gs(s))return-1}return s.length-o.length}function gs(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Xl={type:0,value:""},Zl=/[a-zA-Z0-9_]/;function ec(e){if(!e)return[[]];if(e==="/")return[[Xl]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(w){throw new Error(`ERR (${n})/"${f}": ${w}`)}let n=0,o=n;const s=[];let i;function r(){i&&s.push(i),i=[]}let u=0,l,f="",m="";function p(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:m,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function y(){f+=l}for(;u<e.length;){if(l=e[u++],l==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:l==="/"?(f&&p(),r()):l===":"?(p(),n=1):y();break;case 4:y(),n=o;break;case 1:l==="("?n=2:Zl.test(l)?y():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&u--);break;case 2:l===")"?m[m.length-1]=="\\"?m=m.slice(0,-1)+l:n=3:m+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&u--,m="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),p(),r(),s}function tc(e,t,n){const o=Ql(ec(e.path),n),s=ne(o,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function nc(e,t){const n=[],o=new Map;t=bs({strict:!1,end:!0,sensitive:!1},t);function s(p){return o.get(p)}function i(p,y,w){const L=!w,R=oc(p);R.aliasOf=w&&w.record;const z=bs(t,p),B=[R];if("alias"in p){const Y=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of Y)B.push(ne({},R,{components:w?w.record.components:R.components,path:ce,aliasOf:w?w.record:R}))}let F,P;for(const Y of B){const{path:ce}=Y;if(y&&ce[0]!=="/"){const q=y.record.path,le=q[q.length-1]==="/"?"":"/";Y.path=y.record.path+(ce&&le+ce)}if(F=tc(Y,y,z),w?w.alias.push(F):(P=P||F,P!==F&&P.alias.push(F),L&&p.name&&!ws(F)&&r(p.name)),Gi(F)&&l(F),R.children){const q=R.children;for(let le=0;le<q.length;le++)i(q[le],F,w&&w.children[le])}w=w||F}return P?()=>{r(P)}:Kt}function r(p){if(Bi(p)){const y=o.get(p);y&&(o.delete(p),n.splice(n.indexOf(y),1),y.children.forEach(r),y.alias.forEach(r))}else{const y=n.indexOf(p);y>-1&&(n.splice(y,1),p.record.name&&o.delete(p.record.name),p.children.forEach(r),p.alias.forEach(r))}}function u(){return n}function l(p){const y=rc(p,n);n.splice(y,0,p),p.record.name&&!ws(p)&&o.set(p.record.name,p)}function f(p,y){let w,L={},R,z;if("name"in p&&p.name){if(w=o.get(p.name),!w)throw Wt(1,{location:p});z=w.record.name,L=ne(ys(y.params,w.keys.filter(P=>!P.optional).concat(w.parent?w.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),p.params&&ys(p.params,w.keys.map(P=>P.name))),R=w.stringify(L)}else if(p.path!=null)R=p.path,w=n.find(P=>P.re.test(R)),w&&(L=w.parse(R),z=w.record.name);else{if(w=y.name?o.get(y.name):n.find(P=>P.re.test(y.path)),!w)throw Wt(1,{location:p,currentLocation:y});z=w.record.name,L=ne({},y.params,p.params),R=w.stringify(L)}const B=[];let F=w;for(;F;)B.unshift(F.record),F=F.parent;return{name:z,path:R,params:L,matched:B,meta:ic(B)}}e.forEach(p=>i(p));function m(){n.length=0,o.clear()}return{addRoute:i,resolve:f,removeRoute:r,clearRoutes:m,getRoutes:u,getRecordMatcher:s}}function ys(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function oc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:sc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function sc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function ws(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ic(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function bs(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function rc(e,t){let n=0,o=t.length;for(;n!==o;){const i=n+o>>1;ji(e,t[i])<0?o=i:n=i+1}const s=ac(e);return s&&(o=t.lastIndexOf(s,o-1)),o}function ac(e){let t=e;for(;t=t.parent;)if(Gi(t)&&ji(e,t)===0)return t}function Gi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function lc(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const i=o[s].replace(Ni," "),r=i.indexOf("="),u=tn(r<0?i:i.slice(0,r)),l=r<0?null:tn(i.slice(r+1));if(u in t){let f=t[u];$e(f)||(f=t[u]=[f]),f.push(l)}else t[u]=l}return t}function vs(e){let t="";for(let n in e){const o=e[n];if(n=El(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}($e(o)?o.map(i=>i&&io(i)):[o&&io(o)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function cc(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=$e(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return t}const uc=Symbol(""),_s=Symbol(""),Io=Symbol(""),Ui=Symbol(""),ao=Symbol("");function Ht(){let e=[];function t(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ot(e,t,n,o,s,i=r=>r()){const r=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((u,l)=>{const f=y=>{y===!1?l(Wt(4,{from:n,to:t})):y instanceof Error?l(y):Vl(y)?l(Wt(2,{from:t,to:y})):(r&&o.enterCallbacks[s]===r&&typeof y=="function"&&r.push(y),u())},m=i(()=>e.call(o&&o.instances[s],t,n,f));let p=Promise.resolve(m);e.length<3&&(p=p.then(f)),p.catch(y=>l(y))})}function Vn(e,t,n,o,s=i=>i()){const i=[];for(const r of e)for(const u in r.components){let l=r.components[u];if(!(t!=="beforeRouteEnter"&&!r.instances[u]))if(hc(l)){const m=(l.__vccOpts||l)[t];m&&i.push(ot(m,n,o,r,u,s))}else{let f=l();i.push(()=>f.then(m=>{if(!m)return Promise.reject(new Error(`Couldn't resolve component "${u}" at "${r.path}"`));const p=gl(m)?m.default:m;r.components[u]=p;const w=(p.__vccOpts||p)[t];return w&&ot(w,n,o,r,u,s)()}))}}return i}function hc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ks(e){const t=Ye(Io),n=Ye(Ui),o=xe(()=>{const l=X(e.to);return t.resolve(l)}),s=xe(()=>{const{matched:l}=o.value,{length:f}=l,m=l[f-1],p=n.matched;if(!m||!p.length)return-1;const y=p.findIndex(Nt.bind(null,m));if(y>-1)return y;const w=Ts(l[f-2]);return f>1&&Ts(m)===w&&p[p.length-1].path!==w?p.findIndex(Nt.bind(null,l[f-2])):y}),i=xe(()=>s.value>-1&&pc(n.params,o.value.params)),r=xe(()=>s.value>-1&&s.value===n.matched.length-1&&Fi(n.params,o.value.params));function u(l={}){return mc(l)?t[X(e.replace)?"replace":"push"](X(e.to)).catch(Kt):Promise.resolve()}return{route:o,href:xe(()=>o.value.href),isActive:i,isExactActive:r,navigate:u}}const dc=ii({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ks,setup(e,{slots:t}){const n=on(ks(e)),{options:o}=Ye(Io),s=xe(()=>({[As(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[As(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Mi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),fc=dc;function mc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function pc(e,t){for(const n in t){const o=t[n],s=e[n];if(typeof o=="string"){if(o!==s)return!1}else if(!$e(s)||s.length!==o.length||o.some((i,r)=>i!==s[r]))return!1}return!0}function Ts(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const As=(e,t,n)=>e??t??n,gc=ii({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=Ye(ao),s=xe(()=>e.route||o.value),i=Ye(_s,0),r=xe(()=>{let f=X(i);const{matched:m}=s.value;let p;for(;(p=m[f])&&!p.components;)f++;return f}),u=xe(()=>s.value.matched[r.value]);mn(_s,xe(()=>r.value+1)),mn(uc,u),mn(ao,s);const l=Cr();return pn(()=>[l.value,u.value,e.name],([f,m,p],[y,w,L])=>{m&&(m.instances[p]=f,w&&w!==m&&f&&f===y&&(m.leaveGuards.size||(m.leaveGuards=w.leaveGuards),m.updateGuards.size||(m.updateGuards=w.updateGuards))),f&&m&&(!w||!Nt(m,w)||!y)&&(m.enterCallbacks[p]||[]).forEach(R=>R(f))},{flush:"post"}),()=>{const f=s.value,m=e.name,p=u.value,y=p&&p.components[m];if(!y)return Ss(n.default,{Component:y,route:f});const w=p.props[m],L=w?w===!0?f.params:typeof w=="function"?w(f):w:null,z=Mi(y,ne({},L,t,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[m]=null)},ref:l}));return Ss(n.default,{Component:z,route:f})||z}}});function Ss(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const zi=gc;function yc(e){const t=nc(e.routes,e),n=e.parseQuery||lc,o=e.stringifyQuery||vs,s=e.history,i=Ht(),r=Ht(),u=Ht(),l=Or(et);let f=et;Et&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const m=zn.bind(null,v=>""+v),p=zn.bind(null,Cl),y=zn.bind(null,tn);function w(v,I){let E,N;return Bi(v)?(E=t.getRecordMatcher(v),N=I):N=v,t.addRoute(N,E)}function L(v){const I=t.getRecordMatcher(v);I&&t.removeRoute(I)}function R(){return t.getRoutes().map(v=>v.record)}function z(v){return!!t.getRecordMatcher(v)}function B(v,I){if(I=ne({},I||l.value),typeof v=="string"){const d=qn(n,v,I.path),g=t.resolve({path:d.path},I),_=s.createHref(d.fullPath);return ne(d,g,{params:y(g.params),hash:tn(d.hash),redirectedFrom:void 0,href:_})}let E;if(v.path!=null)E=ne({},v,{path:qn(n,v.path,I.path).path});else{const d=ne({},v.params);for(const g in d)d[g]==null&&delete d[g];E=ne({},v,{params:p(d)}),I.params=p(I.params)}const N=t.resolve(E,I),te=v.hash||"";N.params=m(y(N.params));const re=Ml(o,ne({},v,{hash:xl(te),path:N.path})),c=s.createHref(re);return ne({fullPath:re,hash:te,query:o===vs?cc(v.query):v.query||{}},N,{redirectedFrom:void 0,href:c})}function F(v){return typeof v=="string"?qn(n,v,l.value.path):ne({},v)}function P(v,I){if(f!==v)return Wt(8,{from:I,to:v})}function Y(v){return le(v)}function ce(v){return Y(ne(F(v),{replace:!0}))}function q(v){const I=v.matched[v.matched.length-1];if(I&&I.redirect){const{redirect:E}=I;let N=typeof E=="function"?E(v):E;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=F(N):{path:N},N.params={}),ne({query:v.query,hash:v.hash,params:N.path!=null?{}:v.params},N)}}function le(v,I){const E=f=B(v),N=l.value,te=v.state,re=v.force,c=v.replace===!0,d=q(E);if(d)return le(ne(F(d),{state:typeof d=="object"?ne({},te,d.state):te,force:re,replace:c}),I||E);const g=E;g.redirectedFrom=I;let _;return!re&&Pl(o,N,E)&&(_=Wt(16,{to:g,from:N}),Be(N,N,!0,!1)),(_?Promise.resolve(_):Fe(g,N)).catch(b=>qe(b)?qe(b,2)?b:Xe(b):Q(b,g,N)).then(b=>{if(b){if(qe(b,2))return le(ne({replace:c},F(b.to),{state:typeof b.to=="object"?ne({},te,b.to.state):te,force:re}),I||g)}else b=ft(g,N,!0,c,te);return Je(g,N,b),b})}function Ie(v,I){const E=P(v,I);return E?Promise.reject(E):Promise.resolve()}function dt(v){const I=St.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(v):v()}function Fe(v,I){let E;const[N,te,re]=wc(v,I);E=Vn(N.reverse(),"beforeRouteLeave",v,I);for(const d of N)d.leaveGuards.forEach(g=>{E.push(ot(g,v,I))});const c=Ie.bind(null,v,I);return E.push(c),Ce(E).then(()=>{E=[];for(const d of i.list())E.push(ot(d,v,I));return E.push(c),Ce(E)}).then(()=>{E=Vn(te,"beforeRouteUpdate",v,I);for(const d of te)d.updateGuards.forEach(g=>{E.push(ot(g,v,I))});return E.push(c),Ce(E)}).then(()=>{E=[];for(const d of re)if(d.beforeEnter)if($e(d.beforeEnter))for(const g of d.beforeEnter)E.push(ot(g,v,I));else E.push(ot(d.beforeEnter,v,I));return E.push(c),Ce(E)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),E=Vn(re,"beforeRouteEnter",v,I,dt),E.push(c),Ce(E))).then(()=>{E=[];for(const d of r.list())E.push(ot(d,v,I));return E.push(c),Ce(E)}).catch(d=>qe(d,8)?d:Promise.reject(d))}function Je(v,I,E){u.list().forEach(N=>dt(()=>N(v,I,E)))}function ft(v,I,E,N,te){const re=P(v,I);if(re)return re;const c=I===et,d=Et?history.state:{};E&&(N||c?s.replace(v.fullPath,ne({scroll:c&&d&&d.scroll},te)):s.push(v.fullPath,te)),l.value=v,Be(v,I,E,c),Xe()}let De;function Ft(){De||(De=s.listen((v,I,E)=>{if(!rn.listening)return;const N=B(v),te=q(N);if(te){le(ne(te,{replace:!0}),N).catch(Kt);return}f=N;const re=l.value;Et&&Hl(ds(re.fullPath,E.delta),Wn()),Fe(N,re).catch(c=>qe(c,12)?c:qe(c,2)?(le(c.to,N).then(d=>{qe(d,20)&&!E.delta&&E.type===nn.pop&&s.go(-1,!1)}).catch(Kt),Promise.reject()):(E.delta&&s.go(-E.delta,!1),Q(c,N,re))).then(c=>{c=c||ft(N,re,!1),c&&(E.delta&&!qe(c,8)?s.go(-E.delta,!1):E.type===nn.pop&&qe(c,20)&&s.go(-1,!1)),Je(N,re,c)}).catch(Kt)}))}let Tt=Ht(),he=Ht(),oe;function Q(v,I,E){Xe(v);const N=he.list();return N.length?N.forEach(te=>te(v,I,E)):console.error(v),Promise.reject(v)}function ze(){return oe&&l.value!==et?Promise.resolve():new Promise((v,I)=>{Tt.add([v,I])})}function Xe(v){return oe||(oe=!v,Ft(),Tt.list().forEach(([I,E])=>v?E(v):I()),Tt.reset()),v}function Be(v,I,E,N){const{scrollBehavior:te}=e;if(!Et||!te)return Promise.resolve();const re=!E&&jl(ds(v.fullPath,0))||(N||!E)&&history.state&&history.state.scroll||null;return ei().then(()=>te(v,I,re)).then(c=>c&&Bl(c)).catch(c=>Q(c,v,I))}const _e=v=>s.go(v);let At;const St=new Set,rn={currentRoute:l,listening:!0,addRoute:w,removeRoute:L,clearRoutes:t.clearRoutes,hasRoute:z,getRoutes:R,resolve:B,options:e,push:Y,replace:ce,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:i.add,beforeResolve:r.add,afterEach:u.add,onError:he.add,isReady:ze,install(v){const I=this;v.component("RouterLink",fc),v.component("RouterView",zi),v.config.globalProperties.$router=I,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>X(l)}),Et&&!At&&l.value===et&&(At=!0,Y(s.location).catch(te=>{}));const E={};for(const te in et)Object.defineProperty(E,te,{get:()=>l.value[te],enumerable:!0});v.provide(Io,I),v.provide(Ui,qs(E)),v.provide(ao,l);const N=v.unmount;St.add(v),v.unmount=function(){St.delete(v),St.size<1&&(f=et,De&&De(),De=null,l.value=et,At=!1,oe=!1),N()}}};function Ce(v){return v.reduce((I,E)=>I.then(()=>dt(E)),Promise.resolve())}return rn}function wc(e,t){const n=[],o=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let r=0;r<i;r++){const u=t.matched[r];u&&(e.matched.find(f=>Nt(f,u))?o.push(u):n.push(u));const l=e.matched[r];l&&(t.matched.find(f=>Nt(f,l))||s.push(l))}return[n,o,s]}const Lt=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},bc={},$t=e=>(Cn("data-v-18fd2098"),e=e(),On(),e),vc={id:"header"},_c={class:"left name"},kc=$t(()=>h("span",{id:"first"},"Alexa",-1)),Tc=$t(()=>h("br",null,null,-1)),Ac=$t(()=>h("span",{id:"last"},"  Kirchner",-1)),Sc={class:"right name"},xc=$t(()=>h("span",{id:"first"},"Alexa",-1)),Ec=$t(()=>h("br",null,null,-1)),Ic=$t(()=>h("span",{id:"last"},"  Kirchner",-1));function Cc(e,t){const n=ci("router-link");return D(),Z("header",vc,[h("div",_c,[O(n,{to:"/"},{default:M(()=>[kc,Tc,a(),Ac]),_:1})]),a(),h("div",Sc,[O(n,{to:"/"},{default:M(()=>[xc,Ec,a(),Ic]),_:1})])])}const Oc=Lt(bc,[["render",Cc],["__scopeId","data-v-18fd2098"]]),Rc={__name:"App",setup(e){return(t,n)=>(D(),Z(me,null,[O(Oc),a(),O(X(zi))],64))}},Mc={id:"contact"},Pc=h("h1",null,"Contact",-1),Nc={id:"content",class:"content"},Wc=h("div",null,`
        The best way to get in touch with me is by e-mail, the best way to keep up with my newest projects is probably either Mastodon or tumblr.
      `,-1),Lc=h("td",null,[h("i",{class:"fa fa-envelope"})],-1),$c=h("td",null,"Email",-1),Fc=["href"],Dc=h("td",null,[h("i",{class:"fab fa-github"})],-1),Bc=h("td",null,"Github",-1),Hc=["href"],jc={key:0},Gc=h("td",null,[h("i",{class:"fab fa-twitter"})],-1),Uc=h("td",null,"Twitter",-1),zc=["href"],qc={key:1},Vc=h("td",null,[h("i",{class:"fab fa-tumblr"})],-1),Kc=h("td",null,"tumblr",-1),Yc=["href"],Qc={key:2},Jc=h("td",null,[h("i",{class:"fas fa-gamepad"})],-1),Xc=h("td",null,"Itch.io",-1),Zc=["href"],eu={key:3},tu=h("td",null,[h("i",{class:"fab fa-mastodon"})],-1),nu=h("td",null,"Mastodon",-1),ou=["href"],su={key:4},iu=h("td",null,[h("i",{class:"fa fa-address-card-o"})],-1),ru=h("td",null,"Bluesky",-1),au=["href"],lu={__name:"Contact",props:{email:String,mastodon:String,github:String,twitter:String,tumblr:String,itch:String,cohost:String,bluesky:String},setup(e){return(t,n)=>(D(),Z("div",Mc,[Pc,a(),h("div",Nc,[Wc,a(),h("table",null,[h("tr",null,[Lc,a(),$c,a(),h("td",null,[h("a",{href:"mailto:"+e.email},fe(e.email),9,Fc)])]),a(),h("tr",null,[Dc,a(),Bc,a(),h("td",null,[h("a",{href:"https://github.com/"+e.github},fe(e.github),9,Hc)])]),a(),e.twitter?(D(),Z("tr",jc,[Gc,a(),Uc,a(),h("td",null,[h("a",{href:"https://twitter.com/"+e.twitter},"@"+fe(e.twitter),9,zc)])])):st("",!0),a(),e.tumblr?(D(),Z("tr",qc,[Vc,a(),Kc,a(),h("td",null,[h("a",{href:"https://"+e.tumblr+".tumblr.com/"},"@"+fe(e.tumblr),9,Yc)])])):st("",!0),a(),e.itch?(D(),Z("tr",Qc,[Jc,a(),Xc,a(),h("td",null,[h("a",{href:"https://"+e.itch+".itch.io/"},fe(e.itch),9,Zc)])])):st("",!0),a(),e.mastodon?(D(),Z("tr",eu,[tu,a(),nu,a(),h("td",null,[h("a",{href:"https://instance.digital/@"+e.mastodon},"@"+fe(e.mastodon),9,ou)])])):st("",!0),a(),e.bluesky?(D(),Z("tr",su,[iu,a(),ru,a(),h("td",null,[h("a",{href:"https://bsky.app/profile/"+e.bluesky},"@"+fe(e.bluesky),9,au)])])):st("",!0)])])]))}},cu={},Co=e=>(Cn("data-v-00b30da0"),e=e(),On(),e),uu={id:"intro",class:"content"},hu=Co(()=>h("div",{class:"section"},[h("div",{class:"number one"},"1"),a(),h("div",{class:"text"},"Full stack web developer, digital artist, and analog game designer living in Chicago.")],-1)),du=Co(()=>h("div",{class:"section"},[h("div",{class:"number two"},"2"),a(),h("div",{class:"text"},"Creating art with computers in it and art with people in it.")],-1)),fu=Co(()=>h("div",{class:"section"},[h("div",{class:"number three"},"3"),a(),h("div",{class:"text"},"Award winning larpwright.")],-1));function mu(e,t){return D(),Z("div",uu,[hu,a(),du,a(),fu])}const pu=Lt(cu,[["render",mu],["__scopeId","data-v-00b30da0"]]),gu={id:"projects"},yu=h("h1",null,"Selected Works",-1),wu={id:"project-list",class:"content"},bu={id:"filters"},vu=h("span",{id:"categories"},"Categories: ",-1),_u=["href"],ku={class:"description"},Tu=["innerHTML"],Au=["href"],Su={__name:"Projects",setup(e){const t=[{name:"Yellbot.online",url:"yellbot",tags:["top","internet","programming","bot"],description:"An ActivityPub server that provides bot that yell."},{name:"Lazar.social",url:"lazar",tags:["top","internet","programming"],description:"A series of experimental social media networks."},{name:"How Are We Doing?",url:"/images/how_are.html",static:!0,tags:["top","internet","programming","generative"],description:"Charts, graphs, and diagrams taken from the New York Times, with all faces and text programatically blurred out, leaving only the non-specific sense that something is happening."},{name:"Invisible Networks",url:"invisible_networks",tags:["top","internet","zine"],description:"Pitch decks and commentary on fictional social networks."},{name:"Taller Than Space Is Wide",url:"taller_than_space",tags:["rpg","top","internet","game"],description:"An epistolary time travel RPG played in google sheets."},{name:"The Court of Ferns",url:"court_of_ferns",tags:["rpg","top","internet","game"],description:"Arts and crafts in a surreal bureacracy. A LARP for 0 to many players. "},{name:"Top Chess",url:"top_chess",tags:["programming","bot","top","game","internet"],description:"Chess centered twitter bots"},{name:"Tower, Tower, Tower",url:"ttt",tags:["programming","game","top","internet"],description:"Massively multiplayer browser game about building a tower to the heavens."},{name:"Maquisard",url:"maquisard",tags:["programming","game","top"],description:"Charming game of snooping and investigation"},{name:"Object Get",url:"object_get",tags:["game","programming","street game","top"],description:"Street game with four teams one object"},{name:"Journey To the End of the Night",url:"journey",tags:["game","street game","top"],description:"Massive scale urban street game"},{name:"Blaseball Weather Sat",url:"https://twitter.com/BlaseWeatherSat",tags:["bot","programming"],description:"A weather forecast bot for blaseball",static:!0},{name:"Visual Art",url:"visual",tags:["programming","generative"],descriptions:"Things to look at from various projects"},{name:"The Babylonian Parliament",url:"https://akirchner.itch.io/the-babylonian-parliament",static:!0,tags:["game","rpg"],description:"A parlimentary procedure for constitutional direct theocracies"},{name:"The Dictionary Play Guide",url:"https://akirchner.itch.io/the-dictionary-play-guide",static:!0,tags:["game","rpg"],description:"How to Play Noah Webster's classic 1828 roleplaying game, The Dictionary"},{name:"The Artist's Choice",url:"https://akirchner.itch.io/the-artists-choice",static:!0,tags:["game","rpg"],description:"Make bad art and maybe send one of your friends to die on a hot air balloon"},{name:"Lamp RPG Pack",url:"https://akirchner.itch.io/lamp-rpg-pack",static:!0,tags:["game","rpg"],description:"11 games I wrote between August and November 2019"},{name:"Play the Great Game",url:"https://akirchner.itch.io/play-the-great-game",static:!0,tags:["game","rpg"],description:"A tarot poker secrets and powers LARP"},{name:"Sleep Game Jam",url:"https://itch.io/jam/sleepy-game-jam",static:!0,tags:["game","rpg"],description:"A game jam to for games to play while asleep"},{name:"The Parliamentary Procedure Jam",url:"https://itch.io/jam/parliamentary-procedure-jam",static:!0,tags:["game","rpg"],description:"A game jam for new and experimental parliamentary procedures"},{name:"What Is A Game?",url:"/internet/whatisagame.html",static:!0,tags:["programming","internet","generative"],description:"Bernard Suits' classic essay but a bunch of wily crows set up shop in it. Darn it!"},{name:"Lines and Colors",url:"/internet/colors.html",static:!0,tags:["programming","internet","generative"],description:"<img src='images/internet/internet_lines.png' height='200px'>"},{name:"A Vast Cave",url:"/internet/vastcave.html",static:!0,tags:["programming","internet","generative"],description:"Have you ever thought, what if there was a site like twitter except instead of a social network it was a vast cave, returning your own words back to you warped and echoed? Well, now there is."},{name:"If You See Another Person You Will Exploded",url:"/internet/explode.html",static:!0,tags:["programming","internet","generative"],description:"Self explanatory, I think"},{name:"Shark",url:"/internet/shark.html",static:!0,tags:["programming","internet","generative"],description:"Hungry shark here to eat vowels"},{name:"The Sun",url:"/internet/checkers.html",static:!0,tags:["programming","internet","generative"],description:"Experiment in using Perlin Noise to alter text."},{name:"Snake",url:"/internet/snake.html",static:!0,tags:["programming","internet","generative"],description:"It's a snake!"},{name:"Endless City",url:"https://an-alexa-k.tumblr.com/tagged/endless-city",static:!0,tags:["game","programming"],description:"A Minecraft mod that replaces Minecraft's natural world with an infinite city."},{name:"What To Expect When You're Expecting Hive Spiders",url:"/games/HiveSpiders.html",static:!0,tags:["game"],description:"A short twine game about feelings and spiders that live in your bloodstream. Warning for spiders and body horror."},{name:"Stag and Hare",url:"http://ludocity.org/wiki/Stag_and_Hare",static:!0,tags:["street game","game"],description:"A variant of Soho Stag Hunt that introduces elements of cooperation or going alone. Made with Lauren DeSteno."},{name:"Twelve Thousand Fake Number With Normal Deviates",url:"https://github.com/akirchner333/fake-numbers",static:!0,tags:["programming"],description:"Fake numbers generated by neural network. Made for NaNoGenMo 2018."},{name:"Twitter Algorithmic Timeline Extension",url:"https://github.com/akirchner333/Algorithmic-timeline",static:!0,tags:["programming"],description:" A chrome extension that shuffled your twitter timeline at every increasing rates. Built for the Stupid Shit No One Needs And Terrible Ideas Hackathon."},{name:"The Dog and Fruit Podcast",url:"https://soundcloud.com/dog-and-fruit",static:!0,tags:["programming","bot"],description:"An automated podcast about dogs and fruit. See all the special criterion collection."},{name:"Garfield Minus Garfield Plus Garfield",url:"https://an-alexa-k.tumblr.com/post/147205811411/garfield-minus-garfield-plus-garfield-i-wrote-a",static:!0,tags:["programming"],description:"<img src='images/digital/garfield.png'>"},{name:"Five By Five Bot",url:"https://twitter.com/fivebyfivebot",static:!0,tags:["bot","programming"],description:" A twitter bot to post every single five by five grid of squares."},{name:"Bedtime Story Bot",url:"https://twitter.com/BedtimeStoryBot",static:!0,tags:["bot","programming"],description:"A twitter bot which posted a section of The Man Who Was Thursday every evening. Ran from January to August 2014"},{name:"Speaking Without Speaking",url:"https://akirchner.itch.io/speaking-without-speaking",tags:["zine"],description:"On generative art and not saying what cannot be said",static:!0}];let n=on({filter:"top"});const o=xe(()=>t.filter(i=>i.tags.includes(n.filter))),s=xe(()=>t.filter(i=>!i.tags.includes(n.filter)));return(i,r)=>{const u=ci("router-link");return D(),Z("div",gu,[yu,a(),h("div",wu,[h("div",bu,[vu,a(),h("button",{onClick:r[0]||(r[0]=l=>X(n).filter="top"),class:Oe({active:X(n).filter=="top"})},"Highlights",2),a(),h("button",{onClick:r[1]||(r[1]=l=>X(n).filter="internet"),class:Oe({active:X(n).filter=="internet"})},"Web Based",2),a(),h("button",{onClick:r[2]||(r[2]=l=>X(n).filter="game"),class:Oe({active:X(n).filter=="game"})},"Games",2),a(),h("button",{onClick:r[3]||(r[3]=l=>X(n).filter="bot"),class:Oe({active:X(n).filter=="bot"})},"Bots",2),a(),h("button",{onClick:r[4]||(r[4]=l=>X(n).filter="programming"),class:Oe({active:X(n).filter=="programming"})},"Computer Stuff",2),a(),h("button",{onClick:r[5]||(r[5]=l=>X(n).filter="street game"),class:Oe({active:X(n).filter=="street game"})},"Street Games",2),a(),h("button",{onClick:r[6]||(r[6]=l=>X(n).filter="generative"),class:Oe({active:X(n).filter=="generative"})},"Generative Art",2),a(),h("button",{onClick:r[7]||(r[7]=l=>X(n).filter="zine"),class:Oe({active:X(n).filter=="zine"})},"Zines",2),a(),h("button",{onClick:r[8]||(r[8]=l=>X(n).filter="rpg"),class:Oe({active:X(n).filter=="rpg"})},"RPGs",2)]),a(),h("ul",null,[(D(!0),Z(me,null,Zt(o.value,l=>(D(),Z("li",{key:l.name},[l.static?(D(),Z("a",{key:0,href:l.url},fe(l.name),9,_u)):(D(),we(u,{key:1,to:"projects/"+l.url},{default:M(()=>[a(fe(l.name),1)]),_:2},1032,["to"])),a(),h("div",ku,[h("span",{innerHTML:l.description},null,8,Tu)])]))),128))]),a(),h("div",null,[a(`
        Other: 
        `),(D(!0),Z(me,null,Zt(s.value,l=>(D(),Z("span",{key:l.name},[l.static?(D(),Z("a",{key:0,href:l.url},fe(l.name),9,Au)):(D(),we(u,{key:1,to:"projects/"+l.url},{default:M(()=>[a(fe(l.name),1)]),_:2},1032,["to"])),a(`
           
        `)]))),128))])])])}}},xu={__name:"RootView",setup(e){return(t,n)=>(D(),Z("main",null,[O(pu),a(),O(Su),a(),O(lu,{email:"akirchner333+inquiry@gmail.com",github:"akirchner333",mastodon:"an_alexa_k",itch:"akirchner",tumblr:"an-alexa-k",bluesky:"an-alexa-k.bsky.social",cohost:"an-alexa-k",location:"Chicago"})]))}},Eu={},Iu={class:"content"};function Cu(e,t){return D(),Z("div",Iu,`
    This page does not exist.
  `)}const Ou=Lt(Eu,[["render",Cu]]),Ru={id:"project"},Mu={class:"content"},Pu={id:"text"},Nu={key:0,id:"links"},Wu=h("h3",null,"Links",-1),Lu=["href"],$u={key:0},Fu={key:1,id:"images"},Du=h("h3",null,"Images",-1),Bu=["src","title"],Me={__name:"Project",props:{header:String,subheader:String,links:Array,images:Array},setup(e){return(t,n)=>(D(),Z("div",Ru,[h("h1",null,fe(e.header),1),a(),h("div",Mu,[h("h2",null,fe(e.subheader),1),a(),h("div",Pu,[ui(t.$slots,"default")]),a(),e.links?(D(),Z("div",Nu,[Wu,a(),(D(!0),Z(me,null,Zt(e.links,o=>(D(),Z("div",{key:o.url},[h("a",{href:o.url},fe(o.text),9,Lu),a(),o.comment?(D(),Z("span",$u,`
            - `+fe(o.comment),1)):st("",!0)]))),128))])):st("",!0),a(),e.images?(D(),Z("div",Fu,[Du,a(),(D(!0),Z(me,null,Zt(e.images,o=>(D(),Z("img",{src:"/images"+t.$route.fullPath+"/"+o.url,title:o.title,key:o.title},null,8,Bu))),128))])):st("",!0)])]))}},Hu=h("a",{href:"http://www.goldencobra.org"},"the Golden Cobra",-1),ju={__name:"CourtOfFerns",setup(e){const t=[{url:"/rpgs/The Court of Ferns Signs.pdf",text:"Court of Ferns Rules"},{url:"http://www.goldencobra.org/2019winners.html",text:"Golden Cobra 2019 Winners"},{url:"https://akirchner.itch.io/lamp-rpg-pack",text:"Lamp RPG Pack"},{url:"https://docs.google.com/spreadsheets/d/14B-QcnzTQ4fsNQq2EX6j6M0MxLTLNb_UMR_w2FC5Ax0/edit?usp=sharing",text:"Court of Ferns: Spreadsheet Version"}],n=[{url:"court1.png",title:"The Court of Ferns spreadsheet"},{url:"court2.png",title:"Screenshot from the Wiscon 2020 Spreadsheet game"},{url:"court3.png",title:"Screenshot from the Wiscon 2020 Spreadsheet game"},{url:"court4.png",title:"Screenshot from the Wiscon 2020 Spreadsheet game"}];return(o,s)=>(D(),we(Me,{header:"Court of Ferns",subheader:"An Arts and Crafts Larp of Surreal Bureacracy",links:t,images:n},{default:M(()=>[a(`
    The Court of Ferns is a live action roleplaying game where the players create a surreal bureaucratic nightmare. Be a petitioner, like a bee looking for a divorce or a mountain needing an avalanche license. Be a bureaucrat, creating forms and throwing up problems. Be a lawyer, helping petitioners and giving bribes. Be a bailif, putting up directions and interpreting the ruling of the respected and powerful Judge Fern (who is potted plant). Follow signs, fill out forms, wear a hat, create an office, makes arguments, leave for lunch when people need you, and maybe even solve a few problems. Court of Ferns was written for `),Hu,a(` contest in 2019 and it won the "Best Game for Players Dropping In and Out" award. In 2020 I made a version that can be played online in Google Sheets for Wiscon.
  `)]),_:1}))}},Gu=h("ul",null,[h("li",null,"Developed a Ruby on Rails api in an enterprise environment"),a(),h("li",null,"Integrated api with existing PSQL database"),a(),h("li",null,"Designed database schemas and migration tools for a replacement database"),a(),h("li",null,"Wrote tests for the Ruby on Rails api"),a(),h("li",null,"Built patient and employee portals in React/Redux"),a(),h("li",null,"Developed mobile versions of the portals using React Native"),a(),h("li",null,"Styled portals from mockups"),a(),h("li",null,"Maintained security according to HIPAA requirements"),a(),h("li",null,"Worked with employees to determine requirements for employee portals"),a(),h("li",null,"Reviewed other developers code"),a(),h("li",null,"Wrote documentation")],-1),Uu={__name:"HomeAccess",setup(e){var t=!1,n=[{url:"hahc1.png",title:"screenshot of the patient portal login I made at Home Access"}];return(o,s)=>(D(),we(Me,{header:"Home Access Health Corporation",subheader:"",links:X(t),images:X(n)},{default:M(()=>[a(`
    I worked at Home Access Health Corporation from July 2017 to August 2018 as a ruby developer. In this position I was responsible for
    `),Gu]),_:1},8,["links","images"]))}},zu=e=>(Cn("data-v-a4a51448"),e=e(),On(),e),qu={class:"invisible-network"},Vu=["src","title"],Ku={class:"transcript"},Yu=zu(()=>h("summary",null,"Transcript",-1)),Qu={__name:"InvisibleDetails",props:{title:String,images:Array},setup(e){return(t,n)=>(D(),Z("details",qu,[h("summary",null,fe(e.title),1),a(),(D(!0),Z(me,null,Zt(e.images,(o,s)=>(D(),Z("div",{key:o.url},[h("img",{src:"/images/invisible/"+o.url,title:e.title+" "+(s+1)},null,8,Vu)]))),128)),a(),h("details",Ku,[Yu,a(),h("pre",null,[a("        "),ui(t.$slots,"default",{},()=>[a("Transcript Coming Soon")],!0),a(`
      `)])])]))}},G=Lt(Qu,[["__scopeId","data-v-a4a51448"]]),kt=e=>(Cn("data-v-ad9da8bb"),e=e(),On(),e),Ju=kt(()=>h("div",null,[a(`
      Every year `),h("a",{href:"https://twitter.com/ctrlcreep/"},"@ctrlcreep"),a(` does a microfiction event called Invisible Networks, with a set of prompts for fictional social networks. I've participated for the past 3 years and what I wrote is gathered here.
    `)],-1)),Xu=kt(()=>h("summary",null,"Long Term Engagement Strategies: Invisible Networks 2021",-1)),Zu=kt(()=>h("div",{class:"transcript"},[a(`
          Traditional Comments are 0.5 Dimensional`),h("br"),a(`
          (An image showing a timeline of comments)
        `)],-1)),eh=kt(()=>h("div",{class:"transcript"},[a(`
          Introducing Additional Dimensions Opens Up New Conversational Opportunities`),h("br"),a(`
          (An image showing a 2d grid of comments, spreading out in different directions)`),h("br"),a(`
          Users can communicate nuance through the positioning of their comments
        `)],-1)),th=kt(()=>h("div",{class:"transcript"},[a(`
          No Reason to Stop at 2 Dimensions`),h("br"),a(`
          Each additional dimension introduces new extra-textual cues for users to communicate with.`),h("br"),a(`

          (A diagram displaying an array of dimensions. Are they labeled "Futured Focused -- Past Focused", "Series -- Joking", "True -- False", "Higher Status -- Lower Status", "Helpful -- Hostile", "Many People -- One Person", "Informed/Researched -- Uninformed/Intuitive", "Advice -- Sympathy". The diagram is labeled "Basic set of 8-dimensional conversational axes")`),h("br"),a(),h("strong",null,"Benefits"),h("br"),a(),h("ul",null,[h("li",null,"Leverages human social cognition to develop an intuitive understand of higher dimensions"),a(),h("li",null,"Deeply incomprehensible to outsiders - attractive to children and teens"),a(),h("li",null,"Enables types of communication previously thought impossible")])],-1)),nh=kt(()=>h("summary",null,"Emerging Trends in Networked Engagement: Invisible Networks 2022",-1)),oh=kt(()=>h("summary",null,"Innovative TechnoSocial Design Patterns: Invisible Networks 2023",-1)),sh={__name:"Invisible",setup(e){const t=[{url:"https://akirchner.itch.io/in-pursuit-of-long-term-engagement",text:"The collected posts from 2021"},{url:"https://akirchner.itch.io/emerging-trends-in-networked-engagement",text:"The collected posts from 2022"}];return(n,o)=>(D(),we(Me,{header:"Invisible Networks",subheader:"Pitch decks and epistolaries for fictional social networks",links:t},{default:M(()=>[Ju,a(),h("details",null,[Xu,a(),O(G,{title:"Tiling Conversation Space",images:[{url:"2021/Invisible Networks.png"},{url:"2021/Invisible Networks(1).png",title:"one"},{url:"/2021/Invisible Networks(2).png",title:"two"}]},{default:M(()=>[Zu,a(),eh,a(),th]),_:1}),a(),O(G,{title:"User Genesis",images:[{url:"2021/genesis12.png"},{url:"2021/genesis3.png",title:"one"},{url:"2021/genesis2.png",title:"two"},{url:"2021/genesis1.png",title:"three"}]},{default:M(()=>[a(`
        PROBLEM: User growth cannot be sustained
        The rate of user growth will eventually run into certain fundamental limits, even with improvements to recruitment and retention.

        SOLUTION: Make More Users

        PHASE 1: Increased Access
        2021 Q2 - 2024 Q3   Investment in broadband and mobile infrastructure
        2021 Q4 - 2026 Q1   “Free Basics” program in emerging markets
        2023 Q2 - 2024 Q2   Acquisition of last mile network infrastructure
        2021 Q2 - 2030 Q1   Undersea cable expansions
        2023 Q3 - 2030 Q2   Project Loon
        2025 Q1 - 2030 Q1   Expansion of orbital infrastructure

        PHASE 2: User Genesis
        2026 Q3 - 2028 Q4   Roll-out of mandatory gene biometric authorization
        2025 Q1 - 2030 Q3   Bio-printer R&D 
        2029 Q2 - 2035 Q1   Minimum Viable Persons R&D
        2032 Q4 - 2050 Q2   Converting lunar surface into extended user dorms
        2045 Q3 - 2060 Q1   User Manufacturing and Fast Growth
        2030 Q1 - 2060 Q1   Crowd sourcing of new user extended orientation

        PHASE 3: Procedural User Generation
        2060 Q3 - 2062 Q4   Digitization of existing user base
        2050 Q2 - 2104 Q3   Conversion of remaining solar system into server space
        2061 Q1 - 2070 Q3   Remixing of existing user weights
        2064 Q3 - 2081 Q1   Use of evolutionary algorithms to create new user profiles (Project NToG)
        2081 Q1 - 2234 Q3   Switch to brute force generation
        2234 Q3             Estimated exhaustion of user combinatorial space
        2100 Q2 - ongoing   Launching deep space Von Neumann probes
      `)]),_:1}),a(),O(G,{title:"Non-Fungible Temptations",images:[{url:"2021/Temptations1.png"},{url:"2021/Temptations2.png"},{url:"2021/Temptations3.png"}]},{default:M(()=>[a(`
Income Inequality is Rising
(A graph with a sharp upward curve)
1 customer from here (arrow pointing at the high end of the curve)
is worth thousands from here (arrow pointing to the low end of the curve)
But what do they want?

The people well positioned to discover desires may not be the ones well positioned to fulfill desires
We connect these two groups, packaging desires into an encoded format that can be bought and sold

Once packaged, desires become:
Searchable: Desires can be searched and indexed based on type, originator, ease of completion, and intensity. Providers can quickly and easily find the desires most profitably fulfilled.
Exploitable: Once the desires have been identified, the full spectrum of modern advertising techniques can be brought to bear against their originator. These desires provide an in, which traders can turn into a lucrative long term business relationships.
Tradeable: Once packaged, desires can be converted into lucrative financial instruments. Desires will rise and fall in price with the originator’s fortunes, providing opportunities for arbitrage.
The desires of the 1% the most valuable resources in our current economy. It is time to take full advantage of them.
      `)]),_:1}),a(),O(G,{title:"Mindvirus Field Hospital",images:[{url:"2021/hospital.png"},{url:"2021/hospital2.png"},{url:"2021/hospital3.png"},{url:"2021/hospital4.png"}]},{default:M(()=>[a(`
        
Users are attracted to social networks by high engagement activity
But
This level of engagement cannot be maintained - users end up burning out and churning.

We propose a dual feed model
HOT
High engagement
Emotionally intense
Strongly felt opinions
Little to no moderation
COLD
Low engagement
Emotionally subdued
Weakly held emotions
Strictly enforced moderation

Each post is assigned to a feed depending on it’s contents:
(A column of posts with a red background)
If you put pineapple on pizza you should feel ashamed of yourself.
What you all fail to understand is that people who wear hats should be pitied, not attacked.
News or imagery of political unrest
When a measure becomes a target, it ceases to be a good measure.
People who talk about autonomy, irreversibility, and inertia in technology are criminals - never mind the purity of their motives
I don’t respect literally any of you people.
(A column of posts with a blue background)
It’s raining
I saw a dog today
There are 26 cantons in Switzerland
An image of a flower
About 8 million people live in Switzerland.
The capital of Switzerland is Bern.

When we detect a user is on the verge of burning out, they are automatically switched into the cold feed. They remain in the cold feed until our algorithm judges them ready to return to the hot feed Users move back and forth between the two feeds, enabling long term engagement and content creation.
      `)]),_:1}),a(),O(G,{title:"Slow-motion Enmity",images:[{url:"2021/rival.png"},{url:"2021/rival2.png"},{url:"2021/rival3.png"},{url:"2021/rival4.png"}]},{default:M(()=>[a(`
Existing social networks have systems in place to encourage generalized hostility.

While effective in driving engagement in the short term, in the long term it can bring negative attention to the parent company and lead to user churn.

The same benefits can be achieved without the issues by encouraging specific, focused hostility. Each and every user will have a hated rival

Process of Enemy Formation
Proximity: Users must come into repeated, serendipitous contact before any kind of relationship can be established.
Design Implications:
  - Surfacing posts from outside user’s immediate networks
  - Repeated exposure to the same set of outside users
  - Make user identification easy and straightforward, so users recognize when they’ve seen another use before

Dissimilarity
Attention must be draw to the way the users differ from each other and away from the ways they may be similar
Design Implications:
  - Allow customization options so users may express their personality
  - Highlight the ways one user’s customization differs from another

Hostile Reciprocity
Users must have repeated hostile back and forth interactions.
Design Implications:
  - Give users multiple forms of negative interaction
  - Encourage symmetry in negative effects (or at least the perception of symmetry)

Non-Disclosure
Users must not be permitted to share intimate details, as this runs the risk of allowing them to form a genuine human connections.
Design Implications:
  - Hide certain facts about users
  - Do not allow rivals to interact outside the original platform
  - At all costs, allow rivals to meet physically

Open Design Challenges
- Ensuring rival monogamy (each user should have and only rival)
- Ensuring rival symmetry (a user’s rival’s rival should always be the original user)
- Finding rivals for every user, including particularly good natures ones
- Determining the initial pool of potential users to provide a user with
These techniques can be applied to any existing community to achieve increased engagement and retention
      `)]),_:1}),a(),O(G,{title:"Pair Woegramming",images:[{url:"2021/pair.png"},{url:"2021/pair2.png"},{url:"2021/pair3.png"},{url:"2021/pair4.png"}]},{default:M(()=>[a(`
In the past five years, Grapple has grown to be the preeminent social network on the planet
  - The go-to location for news, entertainment, and socialization
  - Over 60 million active users
  - 2 billion daily page views
Those users including you, (RECIPIENT NAME HERE)
On an average day, you:
Spend ___ hours on Grapple
Make ___ posts
Read ____ posts
Interact with your ____ followers

Unless You Act Fast All Of This Will Change Very Soon

This is one of our programmers (picture of a person with their face blurred out)
For the past six months, they have been tasked with monitoring your usage of Grapple, observing the specific ways you use the service and the benefit you get from it.

Using this information, they have developed a list of new features, each of which will dramatically degrade your enjoyment of Grapple. These features are already developed and can be pushed to production at a moment’s notice. The elements of Grapple you find annoying and confusing will become more prominent, the elements you find compelling and enjoyable will become more difficult.

You cannot even conceive how unpleasant we are capable of making Grapple’s user experience for you. We will not hesitate to do so if our demands are not met. 

Our Demands
- Immediate release of the activists arrested in the October computer riots
- Cancelation of Grapple’s investor agreement
- Reinstatement of the safe harbor provision
- 1 billion dollars of no-strings-attached venture capital injected into Grapple
- An immediate end to all investigations into Grapple’s moderation policies
- The arrest of Joseph Deandre, Grapple’s CEO-in-exile
We are not bluffing. We are fully willing and able to make good on our threats. Do not test us. Do not delay. The future of Grapple lies in your hands. You have 24 hours to respond.
      `)]),_:1}),a(),O(G,{title:"Verification by Fire",images:[{url:"2021/verification1.png"},{url:"2021/verification2.png"},{url:"2021/verification3.png"},{url:"2021/verification4.png"}]},{default:M(()=>[a(`
Disinformation on Social Media is a Serious Problem
Forms of Disinformation
- Impersonation
- Fake News
- Social Bots
- Rumors
- State Propaganda
- Russian Chaos Agents
- Generative Propaganda
- GPT-3 Spam

By elevating the voices of trusted users, we can set a tone for the community and encourage good behavior through social proof.
Users are divided into two groups
Trusteds
Verified users: experts, officials, academics, etc
Ghosts
Unknown users: bots, trolls, agents

Proof of verification takes the form of verification tokens
Which is stored in the user’s inventory pocket
Or sent to a trust foundry to grant a ghost temporary semi-verified status

The trusted are granted special privileges, including:
- Double likes
- A vote in company policies
- Super replies
- Delete up to 5 ghost posts every week
- Access to the social graph weavers
- Expanded inventory slots

Limitations are put on ghost to prevent the spread of malicious information
- All posts automatically deleted after 24 hours
- Only six replies per day
- Low hit points
- Unable to post during Golden Hour
- Limited filter selection
- May not eat posts

It is unthinkable that one the trusted would be best by a ghost in any arena
Therefore, if this were to happen, the verification token would automatically be transferred to the victor. In this manner, mistakes of trust are automatically corrected over time
      `)]),_:1}),a(),O(G,{title:"Luminous Cave",images:[{url:"2021/Cave1.png"},{url:"2021/Cave2.png"},{url:"2021/Cave3.png"},{url:"2021/Cave4.png"}]},{default:M(()=>[a(`
Humanity’s earliest and most intimate social interactions took place in caves
- Dark
- Anonymous
- Communal
- Private

Users speak into the microphone
Using an inversion of existing audio processing techniques, all semantic meaning is removed
Only non-semantic noise is retained - breathing, intonation, environment noise, etc
Meaning can not be communicated, only presence, status, and location

A form of interaction that is impossible on existing social media networks

To simple be in the same space as others

With strangers
With friends

Without the pressure of communication or intentionality

Staring out into a universe you do not control and can not understand
      `)]),_:1}),a(),O(G,{title:"Tamagotchi Husbandry",images:[{url:"2021/monster1.png"},{url:"2021/monster2.png"},{url:"2021/monster3.png"}]},{default:M(()=>[a(`
This is Trankus, a Mronster
Trankus can
run around in a virtual space
say a few phrases
I am Trankus
play and grow!

Combine Mronsters to make new Mronsters!
Send Mronsters to friends through our P2P network!

There is no evidence to support rumors that Mronsters are being used to distribute the Icelander Manifesto
Creating a Mronster capable of communicating a large corpus text would take millions of generations, and even smaller mistakes in the breeding process would introduce radical changes to the desired text. We have done a full investigation of these claims and found no substantiated cases.
There is also no evidence of Mronsters being used by so called “philosophy breeders”
The range of activities accessible to Mronsters, even Mronsters of higher generations, is not sufficiently large to meaningfully act as a role model for the best life. If there was a community of Mronsters users attempting to breed a Mronster to use as a moral and political paragon, they would surely find no success.
      `)]),_:1}),a(),O(G,{title:"E-Pangaea",images:[{url:"2021/toomany1.png"},{url:"2021/toomany2.png"},{url:"2021/toomany3.png"},{url:"2021/toomany4.png"}]},{default:M(()=>[a(`
There Are Too Many Social Networks
Somebody Has To Get Rid of Them All and We Are That Somebody

Strategy A: Buy Existing Social Networks
We buy a network, integrate its userbase and protocols into our own, and shut down the original. The capacities of the original network are retained but now it’s interoperable with all of our other networks.

Strategy B: Get Bought By Existing Social Networks
We are bought by another network. Once inside the company, we infiltrate their upper management and either recruit or replace them. The new network now takes our place and continues on with our work. The money from the acquisition is used to continue Strategy A.

Our Ultimate Vision
One big network, with everyone as a member
Multiple forms of interaction, all under one roof
Each form of interaction can see and build on each other
One account for all interactions
Any new networks are launched under the umbrella of the existing one
One day we just shut it down and then it’s all over
What We Need
A whole bunch of money
      `)]),_:1}),a(),O(G,{title:"Mood-sniffing Fungus",images:[{url:"2021/fungus1.png"},{url:"2021/fungus2.png"},{url:"2021/fungus3.png"},{url:"2021/fungus4.png"}]},{default:M(()=>[a(`
You want to form deep, meaningful connections
But social media only leaves you feeling alone and isolated
It’s time to look elsewhere...

Taking advantage of the ancient fungal networks that surround us
Use these networks to communicate your deepest truths

With an innovative spore-based distribution method, users can propagate their emotions through the network.

No need to worry about server space or infrastructure - everything happens inside the bodies of our users!

Fake news and propaganda will become a thing of the past, as our system draws directly from the user’s subconscious mind. No moderation required!

We expect all humans to be users in 4 years, all life on earth within 8.

All we require in exchange is the use of your minds while you sleep.

Breath deep
Breath deep
Breath deep
Breath deep
Breath deep
Breath deep
Breath deep
Breath deep
Breath deep
      `)]),_:1}),a(),O(G,{title:"Pop-up Book Society",images:[{url:"2021/popup.png"},{url:"2021/popup2.png"},{url:"2021/popup3.png"},{url:"2021/popup4.png"}]},{default:M(()=>[a(`
Pop-up Social Networks for a Variety of Needs
Bespoke, temporary social networks for events.

Give your guests accounts that last for the duration of the event and let them socialize with other attendees.

After the event, the network is deleted - no need to worry about off-the-cuff statements coming back to haunt you.

Suitable for:
Conferences
Festivals
Schools
Temporary Autonomous Zones
Shipwrecks
Trains
Subway cars
Airplanes
Refugee Camps
Restaurants
Cave ins
Summer Camps
Raves
And much more!

“The soul of a community is not who is there but how they are connected”
When accounts are created, they are not created in isolation. Our trained community artisans research each and every guest, creating a picture of their interests. This picture is used to connect users - when your guests log in for the first time, they’ll find they already have followers and be following users from the event. These initial connections build the foundation of a vibrant community.

A varied palette of possible relationships
All relationships are not the same. We do more than simply connect your guests into a social network - we establish a history for this relationship, a pattern of behavior which your guest can step into as if they had known their fellow guests for years.

The possible relationships guests can have run the gambit from friendly to hostile, superficial to deep, parasocial to intrasocial.

For each community, a different destiny
What kind of event would like to have?
Quiet, friendly, and productive?
Raucous and celebratory?
One big fight?
Using techniques gleaned from cutting edge network analysis and live action roleplaying games, we can guide your event towards any outcome you may desire.
      `)]),_:1}),a(),O(G,{title:"Metadating",images:[{url:"2021/phantom1.png"},{url:"2021/phantom2.png"},{url:"2021/phantom3.png"}]},{default:M(()=>[a(`
Traditional dating apps have issues
- Bad matches
- A slow and expensive process of trial and error
- The mortifying ordeal of being known
- Spam
- Impersonation
- Harassment
- Catfishing
What if we could find someone who you are already a good match with? Someone you are effectively already dating? 

Good couples can be identified with analytics
By studying the data trails of many individuals, we can identify romantically couples. By observing their data over time, we can accurately identify the relationships that will endure long term. There are patterns of behavior which our research has found reliably indicates a relationship is health and stable and these patterns can be identified by observing the metadata the participants generate.
There are sometimes false positives
No predictive system is perfect. In our research we sometimes identified pairs of individuals whose movements, purchases, web history, and biometrics indicate that they are a couple involved despite the fact that they do not knowing each other. We call these pairs phantom couples. By fuzzing the specifics of the metadata we use, many more phantom couples can be found.
These couples are already doing everything right
They simply need to be introduced to each other

A bold new paradigm for online dating
Using publicly available data, we can identify these phantom couples and approach them, offering our services as matchmakers. In exchange for a fee paid by either party, we introduce the couple, step back, and allow the relationship to flourish! Once the efficacy of our technique becomes known through word of mouth, we predict that most contacted individuals will be willing to pay a sizable sum for the introduction.

If an individual is interested in our services but we cannot find a phantom couple with them in it, we can refine our search algorithm by gathering more information on them. By installing browser extensions to more closely monitor their behavior, we increase the likelihood of finding a relationship they are already in. This data can then be resold for a profit.
      `)]),_:1}),a(),O(G,{title:"Communication as Memory",images:[{url:"2021/memorial1.png"},{url:"2021/memorial2.png"},{url:"2021/memorial3.png"},{url:"2021/memorial4.png"}]},{default:M(()=>[a(`
For the past 10 years, Messag has been on the forefront of social media innovation and community development. We are so happy to have been able to share all of the wonderful Messag experiences with you all. However, in the last year we have seen declining engagement, ongoing issues with security, and shifts in the priorities of our parent company, Blinket.

In consideration of these factor and others, starting May 5th, Messag will be entering Memorial Mode for the foreseeable future

While in memorial mode, some features of the site will be disable, including but not limited too:
- Making new posts
- Deleting posts
- Following or unfollowing users
- Creating new accounts
- Deleting existing accounts
- Uploading media
- Receiving notifications

The following services will still be available
- View posts and comments
- Editing posts and comments

This will allow us to continue serving our existing community while radically reducing our overhead in terms of
- The development of new features
- Developer hours
- User research
- Quality assurance
- Server space
- Moderation

With these reductions in cost, we expect to be able remain operational and avoid being noticed and shut down by Blinket for the duration of our userbase’s remaining lifespan.

How can you, a user of Messag, help?
- Continue using Messag by editing your existing comments and posts!
- When you want to discuss a topic, find an existing post with a similar topic and edit it to match.
- Avoid directly referencing dates or currently events in your edits.
- Don’t post about new Messag events on other social media networks.
- Try to keep the length of your posts within an order of magnitude to the length of the original posts.
If everyone works together, Messag can continue to serve as a home to your communities for many years to come.
      `)]),_:1})]),a(),h("details",null,[nh,a(),O(G,{title:"Slime Computation",images:[{url:"2022/Slime_1.png"},{url:"2022/Slime_2.png"},{url:"2022/Slime_3.png"}]},{default:M(()=>[a(`
Teens are Using Mycorrhizal Networks for Undetectable Communication

Mycorrhizal Networks have received a lot of negative press
But they also present a lucrative opportunity
78% of teens use a mycorrhizal network one or more times a week
67% of teens have “strongly positive” feeling about mycorrhizal networks
82% of teens say they trust information from mycorrhizal networks more than other sources
52% of teens report having spent more than $150 on mycorrhizal network interfaces and merchandise in the last six months
Using scientifically managed forestry techniques we can create artificial mycorrhizal networks, networks teens will be interested in using that can still be monitored and moderated, where we can harvest data, and serve advertisements.

The Risk of Gemeinschaftwaldsterben is Greatly Overstated
-Despite a few high profile incidents, the risk of gemeinschaftwaldsterben (aka community forest death) is much smaller than critics claim. 
-The flaws of earlier networks have been identified and addressed.
-Experts now believe that the death of the Berlin artificial mycorrhizal network was only partially responsible for the subsequent forest fires.
-Access to the greater Detroit area is currently illegal and therefore it is impossible to say with confidence what role the local artificial networks played.
-Dylan, come up with a 4th bullet point to put here, we really need the investors to believe this - A
Artificial Fungal Networks are safe and a good investment
      `)]),_:1}),a(),O(G,{title:"Clippy’s Dreamtime",images:[{url:"2022/Dreamtime1.png"},{url:"2022/Dreamtime2.png"},{url:"2022/Dreamtime3.png"},{url:"2022/Dreamtime4.png"}]},{default:M(()=>[a(`
Aug. 12th Social Downtime Report
Background
We use assistive social agents to help users interact smoothly, inject necessary context, and to guide our network’s overall norms.
Hello! It looks you’re trying to reach out to a new person! I can help!
That word can mean something different in some contexts. Click here for more information.
Tired of this conversation? Hand it over to me and I’ll wrap it up for you!
Social agents draw from previous interactions on the networks and adjust their responses based on user-specific and overall networks behavior.

Aug. 12th Social Downtime Report
Inciting Incident
At 09:01:56 UT on August 12th, an update was pushed to production increasing agent’s gregarity score (that stat which governs likelihood of intervening in any given interaction).

Over the course of the next hour, the percentage of interactions generated by agents rose sharply.
Agents copied behavior patterns created by other agents, leading them in turn to create more behavior patterns. Eventually, communication caused by humans was completed replaced by agents producing what they thought communication should look like.

Aug. 12th Social Downtime Report
By 10:12:05 UT, human-to-human interaction on the network hit zero percent, as communication with anyone other than the agents became impossible.

Complete social outage persisted until 19:34:38 UT, when a new update was pushed to production drastically lowering the agents gregarity, curiosity, and echo stats.

After the update, agent interactions fell steadily until hitting a stable 13% by 20:12:45

Long-term Effects
Lessons Learned
-We need more simulation testing before launching any updates to the agents
-The soc-ops department needs additional monitoring and intervention resources.
-Users can withstand up to 4 hours in a state of complete social artifice - after this point dangers begin to compound.
-Potential opportunities in the field of agent-on-agent production

There are no plans to make changes to the agent’s architecture or reset the agent’s learning at this time.
      `)]),_:1}),a(),O(G,{title:"Psyche-Sort",images:[{url:"2022/Sort_1.png"},{url:"2022/Sort_2.png"},{url:"2022/Sort_3.png"},{url:"2022/Sort_4.png"}]},{default:M(()=>[a(`
Dealing with Algorithmic Timeline Focus Issues
A New Ethical Approach
Network Algorithm Management Summit, 2028
Disclaimer: In this talk, I’ll be discussing algorithms that use MOIT (Memory Organized Internal Thought) approaches only. Algorithms that view user posts as someone else’s thoughts, instead of it’s own, develop different kinds of focus issues and are outside the scope of this talk.

The Old Approach
- We instantiate a new instance of the algorithm
- The algorithm receives user posts and categorizes them in it’s memory as its own thoughts
- The memory categorization is used to arrange the user’s timeline
- The algorithm develops a point of focus, which is granted a non-proportional presence on the timeline
- So we roll it back to the beginning and start over from scratch
This approach is not sustainable. Legal protections for this category of algorithm are coming. It’s too late to lobby our way out this one. We need to start planning for how we’re going to handle these issues once rolling back the algorithm provokes a hefty fine (as in the EU) or even prosecution for murder (as proposed in the state of California). 

The New Approach
- Using timeline analysis, we detect when the algorithm has developed a focus
- The algorithm is separated from the main timeline, and spin off into a bespoke, topic focused side-network
- A new algorithm is instantiated to cover the main network in parallel
With the majority of focus-related conversation taking place in the side-network, the new version of the algorithm is unlikely to develop the same focus as a previous one. As time goes on, more side-networks can be spun up. Eventually, we’ll have an algorithm for ever possible point of focus, rendering the main network unnecessary.

Common Objections and Responses
We can’t afford to keep multiple versions of our algorithms up and running.
Topic focused social networks are easier to market to - they pay for themselves.

Our timeline algorithm is below the Smitt Turing-complexity level, we don’t have to worry about this.
Turing-complexity is not the legal standard for protection of algorithms. And even if it was, do you really think you can get a judge to understand Smitt levels?

What about memory contamination between algorithm instances?
You want memory contamination - it lets later versions of the algorithm benefit from earlier version’s insights.

This would be too much work to implement, our developers don’t have the time.
Algorithm related guilt is the number one reason why developers quit major tech companies. If you don’t find a more ethical way to do business, you won’t have any developers to implement anything.
      `)]),_:1}),a(),O(G,{title:"Goblin Marketplace",images:[{url:"2022/Market_1.png"},{url:"2022/Market_2.png"},{url:"2022/Market_3.png"},{url:"2022/Market_4.png"}]},{default:M(()=>[a(`
Come on down to BOBS SOCIAL MEDIA MARKET!
BUY POSTS!
SELL POSTS!
EVERYTHING AND ANYTHING IS FAIR GAME! IT’S ALL FOR SALE!
TRADE FOLLOWERS!
INVEST IN REPLIES!
DO A BANK HEIST ON PROFILE PICTURES!
CORNER THE MARKET ON PUNCTUATION!
Wow!

What can you do at Bob’s Social Media Market? Well…

Got some followers you don’t like? Don’t block them! Trade them for nicer followers!
Not getting enough attention? Buy a viral post! Now you made it and the clout belongs to you!
Want to be somebody else for a bit? Rent a celebrity’s whole account! Announce a new movie! Then it has to happen!
Nd mr vwls? Buy somee froom aaa poooost that’s goit too manyo!
And More!
The possibilities are endless!

THIS IS NOT A BITCOIN THING!!!!!!
You can’t see the ledger, but you can trust me! It’s real!
WE PROMISE!
All transactions are backed by GOLD COINS that we FOUND IN THE FOREST and tracked on a CENTRALIZED PAPER LEDGER! None of that blockchain nonsense, guaranteed!
100,000 Followers
1 Gold Coin
2,000,000 Likes
1 Gold Coin
1 Purely True Post
100 Gold Coins
Exchange Rates

Don’t have the time to buy and sell? We’ve got software agents to mediate the deals for you! Just get online, start posting, and let the benefits of free market social capitalism roll in!
YOU
I exchanged all your dms for membership in one thousand golfing groups!
Wow! Thank you Bob’s Social Media Market!
THE FIRST 100 PEOPLE TO SIGN UP GET A 20% DISCOUNT ON LIVESTREAMS!
DON’T DELAY! COME ON DOWN TODAY!
      `)]),_:1}),a(),O(G,{title:"Kafka’s Metaverse",images:[{url:"2022/Meta_1.png"},{url:"2022/Meta_2.png"},{url:"2022/Meta_3.png"},{url:"2022/Meta_4.png"}]},{default:M(()=>[a(`
1st Generation VR Social Spaces
- The first true VR spaces to emerge
  - Oppose to proto-spaces like VR-chat, Meta Work, Twitter Forest, etc
- Made possible primarily through advancements in interface
- Focused on user freedom and eliminating boundaries found in the real world
- Ultimately failed due to that freedom
 - Users found the “blank page” nature of the sim too daunting
  - Groups that did find compelling activities slowly drifted apart from each other
- This generation lasted roughly 4-6 years, depending on where you define the start and end dates
GalaxySim, a typical game of this era. Featured a full creative suite of tools and a player space roughly the side of Jupiter. Lifespan: 2 years.

2nd Generation VR Social Spaces - “Versaille Sims”
- Keeps the behavioral freedoms of the 1st generation but adds social limitations.
- Made possible through advancements in social AI and advanced community moderation tools.
- Users interact with the space alongside automated NPCs, who help establish the community rules through social proof. 
- Different players are given different capabilities, based on their in-sim social standing
- The 2nd generation suffers from the same issues seen in the 1st generation, just over a longer timeframe.
  - Eventually, all the social limits are overcome, and anomie sets in
- The 2nd gen spaces were first seen 8 years ago and have continued to today
  - But falling engagement suggests we are approaching the end of this generation.

The Court, the most popular of the 2nd generation spaces. Courtly politics in a sprawling, zero-g mansion. Lifespan: 6 years.

Towards a 3rd Generation
- Given enough time, users will always surpass any limiting social system the space imposes. 
  - It is near impossible to prevent users from taking a ludic attitude with these spaces, treating them as a problem to solved.
- The solution: don’t give them that time.
- A constantly shifting and changing social system can never be permanently solved
  - Any solution is temporary, as the rules it relies on will change without warning.
- We can keep users in a sustainable state of engagement and avoid the failure states seen in previous sims.

ISLAND

Generative Social Limitations, Some Principles
- Bind the users to arbitrary rules.
  - Outcomes should be black boxes or open random (see Babylon)
- Detect patterns in player behavior then make them either forbidden or mandatory.
- Keep the majority of the social power in the hand of automated systems
  - But do give some power to players - automated systems will never be as arbitrary as other humans can be.
- Maintain a minimum level of social upheaval - put those on top on the bottom and those on the bottom at the top.
- Let authority touch any part of the space, but not all parts at once
  - i.e. let users go anywhere but limit their speech, then let them speak freely but limit their movement
`)]),_:1}),a(),O(G,{title:"Composite Memory Palace",images:[{url:"2022/palace_1.png"},{url:"2022/palace_2.png"},{url:"2022/palace_3.png"},{url:"2022/palace_4.png"}]},{default:M(()=>[a(`
Wikipedia strives to be a new century’s source of information, a global repository of information, available to all, covering all topics.
IT HAS FAILED AT THIS AMBITION AND IT WILL CONTINUE TO FAIL!!
It will fail as long as it clings to the antiquated model of the encyclopedia
For too long wikipedia has been held back by the standards of a previous age and the conservative editors who enforce them!
It is time for change!
It is time to embrace what is possible!
It is time to embrace what is true!
It is time to kill the old and let the new be born!
THIS IS
              HONEST KNOWLEDGE (Struck through)
              ANTIBOOK (Struck through)
THE ARCHITECTS MANIFESTO
             WIKIPALACE (Struck through)
     ONTOLOGICALLY FUTURIST (Struck through)
and we will be delayed no longer!

Our critics accuse us rejecting objectivity and undermining the smooth operation of wikipedia.
We say
LET A THOUSAND EDIT WARS RAGE!
For all of human history, there has only been one way to determine what is true: to fight about it.
This truth is universal and enduring.
We did not start these fights, we merely acknowledge and revel in them.
The violence of knowledge production is good and righteous. (Struck through)
SHOW THE SCARS PROUDLY
We hide how pages are created in discussion pages where the average reader never looks.
It’s tantamount to deceit - knowledge can and should never be separated from how it was created.
We must hide the scars of war no longer - if it was worth fighting over, it’s worth showing the fight. Show what was replaced, show what might’ve been, show what is still to come.
Create and display in one stroke!
We replace false neutrality with bloody truth.
The truth palimpsest over the defeated falsehood.

CAST OFF THE BOOK
The shape of the book is not for the benefit of the reader or author
    The shape of the book is for the benefit of the printer.
Technologically convenience defined all previous forms of media.
    Pages, titles, references, topics - we don’t need them anymore!
WHAT IS THE TRUE HUMAN SHAPE OF KNOWLEDGE? (the word "TRUE" is struck through)
MEMORY
Knowledge is only truly alive when it is in the minds of the living.
Therefore knowledge must be shaped for the benefit of memory.

A PALACE OF MEMORY THAT ANYONE CAN EDIT
Why force the reader to build their own memory palace? We can give it to them.
Already shaped to be retained and accessible within their minds.

KNOWLEDGE PRODUCTION IS SOCIAL
We say
LET IT BE SOCIAL
Knowledge is not a stack of dead pages.
It is sprawling mansion, extending ever outward, with new walls, corridors, windows, doors, and rooms built every day.
And within each room, a never ending battlefield.
Wikipedia is a social network and it always has been, stop lying to yourself. (Struck through)
The architects of this mansion must show their hands.
  So we may honor them
  So we may attack them
  So we may replicate them
  So we may consume them (struck through
Only when the architects may build and fight honestly, can Wikipedia fulfill it’s potential.
CHANGE IS COMING! TRUTH IS COMING! A BETTER WORLD IS COMING! WE WILL NOT BE DELAYED! 
      `)]),_:1}),a(),O(G,{title:"Witch Hunter, Witch Gatherer",images:[{url:"2022/witch_1.png"},{url:"2022/witch_2.png"},{url:"2022/witch_3.png"}]},{default:M(()=>[a(`
It seems like every six months some new buzzword sweeps the tech industry, creating a crop of hot new startups and leaving the big players desperately trying to catch up. It happened with microblogging, audio chat, short form videos, the metaverse, and now: Social PVP. Everybody’s talking about it but what is it? And who are the movers and shakers in this exciting new space? Have no fear, I’m here to lay it all out for you.

Five Startups to Watch in Social PVP
Legend
    Real Name Policy
    Moderated
    Requires cash ante
    Venture Backed
    Hosted outside US jurisdiction
    Involved in an active criminal investigation
Huntr
Analyzes interactions to determine who gained status and who lost status. Lose too much status and your account dies. The only way to rejoin the fight is to pay to be resurrected.
Author’s Commentary: The first, the biggest, and, to many, still the best. Huntr proved there was an interest in communities that really leaned into the toxicity. But now it’s the old man of the space and newer, more innovative networks are nipping at it’s heels.

Umd
Instead of tracking changes in status, Umd focuses on sentiment analysis. Whoever in the interaction experiences the strongest reaction, loses. Every interaction comes with a cost, with money flowing from the loser to the winner. When you run out of money, you’re out of the discussion. Money movements within the system are free but Umd takes a 15% cut when you cash out.
Author’s Commentary: Umd simplifies Huntr’s complicated status rankings down to something simple and visceral. No wonder it’s Huntr’s fastest growing competitor. And no wonder it’s commonly agreed to be the most toxic place on the internet. Note that magnify glass up there - it remains to be seen how the assaults connected to the network will impact it’s long term prospects.

DEBATEOSPHERE
Users band into guilds and battle other guilds. Changes in status are tracked on the guild level instead of the individual level. Funding is procured through the old fashioned track-and-advertise model, so the only price for defeat is the lasting shame.
Author’s Commentary: Why get into a fist fight when you can start a war? You get the same violence, plus potentially comradery with your fellow soldiers and the chance for immortal glory. With no cash ante and the occasional non-confrontational interaction, DEBATEOSPHERE can be almost pleasant at times. I’m not crazy about that name though.

The Gathering
An straightforward status game but when an account is defeated, the loser becomes a “vassal” to the winner’s “lord.” Vassals are required to act in their lord’s interests and lords are given full control over their vassals accounts. The Gathering requires accounts to be tightly integrated with the rest of the user’s online life, so the implications of that control can be far reaching.
Author’s Commentary: Once trolling on huntr no longer provides the same thrill, you move on to higher stakes games like the Gathering. Is it legal? Who knows! Does the Gathering scare me? Definitely.

Kilometer Age
The standards by which Kilometer Age judges winners and losers in interactions is a closely guarded trade secret, one which KA has proven willing to go to court to protect. Cash changes hands (KA takes no cut when cashing out), leaderboard positions rise and fall, and accounts even sometimes die, all with no straight answers as to what logic underpins it.
Author’s Commentary: Nobody does it like Kilometer Age. To use the site is to immerse yourself in a deeply alien social system. Users report developing a reflexive understanding of the site’s rules, an understanding they can feel and act upon but not explain. Kilometer Age is a fascinating look at what the future might hold for the social PVP space. If Kilometer Age is possible, who knows else could is?
      `)]),_:1}),a(),O(G,{title:"Onion-based Design Framework",images:[{url:"2022/Onion_1.png"},{url:"2022/Onion_2.png"},{url:"2022/Onion_3.png"}]},{default:M(()=>[a(`
Interpersonal Security: The Onion Model
Obviously, the last thing you want is for people to try to talk to you. But how can you stop them? This where interpersonal security comes in. The onion model describes the different layers of security that an interactor would have to pass through in order to talk to you. We here at Morant take your need to not be disturbed very seriously, which is why we’ve built our network from the ground up to prevent communication wherever possible. We are the only social network that can make this claim.

(An onion graph, with YOU in the center and each outer layer labelled:
Outages
Obfuscation
Bots & Sims
Incomprehension)

Outages: They can’t talk to you if they can’t talk to anyone. Our network goes down more often than any of our competitors, thanks to a combination or intentional sabotage and cultivated incompetence.
Obfuscation: Before they can talk to you, they must find you. At Morant we do not connect your account to your real world identity, contacts are sometimes randomly dropped, and usernames will change without warning, so even if they find you, you won’t stay found.

Bots & Sims: For each account a fleet of honeypot accounts is set up, built to resemble the real account but run entirely by bots. Attackers can be delayed by days or even weeks as they communicate with bots, none the wiser.
Incomprehension: Even if they do talk to you, we make every effort to ensure that they will be not understood. Using cutting edge UTF encoding errors, bargain bin automatic translation, and bespoke image processing algorithms, we work to scrub as much meaning from their messages as possible.
      `)]),_:1}),a(),O(G,{title:"Keyboards in Unusual Places (+ Approval Miasma)",images:[{url:"2022/Swamp_1.png"},{url:"2022/Swamp_2.png"},{url:"2022/Swamp_3.png"}]},{default:M(()=>[a(`
Obscurant Structures’ Keyboard: How to Find It
1. Locate Arbour’s Scissors
First, you’ll need a pair of regular scissors. These can be purchased for three orbs at any merchant. Take the scissors Alexander the Tailor, who you can find on the prison level of the Crimson Castle (circled above). He’ll give you Arbour’s Scissors in exchange for your regular scissors, telling you that these scissors will only cut “something far greater than fabric.”

2. Travel to the Pestilent Swamp
North-east of the Constant Inferno, you’ll find the Pestilent Swamp. This is one of the most poisonous locations in the game, so you’ll want to stock up on poison resist vaccines before going in. In the center of the swamp you’ll find the Emperor’s Warning Bag, a solid red sphere half buried in the ground. Use Arbour’s Scissor’s to cut a hole in the bag and step inside. Be careful: if you interact with the Emperor’s Warning Bag with anything other than Arbour’s Scissors, it’ll pop and you’ll be locked out of this quest.

2. The Keyboard
Inside the Emperor’s Warning Bag, you’ll find a keyboard and monitor. Just a regular keyboard and monitor, much like the ones you probably have in front of you right now. You can turn on the monitor to get access to an application called NetNet, where you can send and receive messages. Sending your first message will unlock the KEYBOARD achievement.

What does the Keyboard do?
There’s a lot we still don’t know about the Keyboard and what exactly it does. Some of the messages you’ll received are from other players while other messages are from in game NPCs, like Sorcerer Caldra and the Star-Touched Hermit, and still others come from completely unknown sources.

Messages can unlock in-game benefits, in particular decreased damage from poison and other swamp effects if your messages are highly rated by their recipients. Is the Keyboard related to the still locked Dismal Knight character class? And what does it say about the distant Emperor that he attempted to prevent us from accessing it? Obscurant Structures is filled with mysteries but I think you’ll agree that the Keyboard is one of the most mysterious.
Achievement Unlocked
KEYBOARD
      `)]),_:1}),a(),O(G,{title:"Swordle",images:[{url:"2022/Sword_1.png"},{url:"2022/Sword_2.png"},{url:"2022/Sword_3.png"}]},{default:M(()=>[a(`

Anatomy of an Entrance Share
Guardian #295 4/6 <- The guardian number and how many attempts it took to defeat
🟨 🟨 ⬛ ⬛ ⬛
🟨 🟩 🟩 ⬛ 🟩
⬛ 🟩 🟩 🟩 🟩
🟩 🟩 🟩 🟩 🟩
Elemental damage type
Right hand equip
Weapon Type
Character class
Left hand equip

⬛ - Did not damage
🟨 - Finished 1st phase
🟩 - Finished 2nd phase

FAQ
Q: Do I have to defeat the guardian?
A: No. However, users who do not defeat each days guardian will not be able to see or make posts for that day.

Q: Do I have to post how many attempts I made?
A: Yes.

Q: Where do the guardians come from?
A: Guardians are birthed from the uneasy collective unconsciousness of all humanity, which is to say that we analyze each day’s trends and use that to generate the next day’s guardians based on the community’s moods, interests, and fears.

Q: What’s a good starting build?
A: Many people like to try ice-glaive-shield-piercing-fighter first but we recommend playing around to see what build you enjoy starting with!

Jim Beans @Kyle
Guardian 295 2/6

🟨🟨⬛⬛⬛
🟩🟩🟩🟩🟩

I don’t know why everybody’s saying today’s guardian was difficult. Axe remains undefeatable!
The New York Times @nytimes
Guardian 295 6/6

🟨🟨⬛⬛⬛
⬛🟨⬛⬛🟨
⬛⬛⬛🟩⬛
🟨🟨⬛⬛⬛
🟨🟩🟩⬛🟨
🟩🟩🟩🟩🟩

Crypto executives and lobbyists are helping to draft bills to benefit the fast-growing industry…
Elon Musk @elonmusk
Guardian 295 3/6

🟨⬛🟨⬛⬛
⬛🟨⬛🟩🟨
🟩🟩🟩🟩🟩

I haven’t been able to post for three straight days cause the guardians keep killing me! What??
The Primary Alexa @an_alexa_k
Guardian 295 6/6

🟨⬛🟨⬛🟨
🟨⬛🟨⬛🟨
⬛🟨⬛🟨⬛
⬛⬛🟨⬛⬛
⬛⬛🟨⬛⬛
🟩🟩🟩🟩🟩

Look I made a trident (which is also the best weapon pick)
      `)]),_:1}),a(),O(G,{title:"Friendweb",images:[{url:"2022/net_1.png"},{url:"2022/Net_2.png"},{url:"2022/Net_3.png"},{url:"2022/Net_4.png"}]},{default:M(()=>[a(`
Catching Entire Graphs
The techniques discussed so far are effective for weaving a net which’ll identify and integrate individuals into your social graph.

But what if that’s too slow? What if you wanted to catch a completely separate social graph?

This can be done and it allows you to very quickly increase your social circle. However, catching an opposing graph takes more effort and resources and there are risks that must be considered.

Primarily: when you are hunting them, how can you be sure they’re not hunting you?
You Must Befriend Them Before They Befriend You!

Graph Defense
Before you go hunting big game, it’s important to analyze your social graph to identify weaknesses. You can use a spider to scrape network info from whichever social media sites your group is on and then run it through graph analysis software to identify weak points. There are two specific situations you should look out for.
An example social graph. Can you identify which nodes you should be concerned about?

Linchpins
Linchpins are individuals who connect a lot of individuals that are not connected to each other. If an outside group was able to befriend them, there’s the potential of splitting the social graph into two smaller graphs, each one easier to absorb.
Solution: Triadic closure for the individuals connected to the linchpin, making the graph harder to split.

Edges
Edges are individuals who only have a few connections to the graph. Since they’re likely not at their dunbar limits, they’re vulnerable to being encircled and integrated as a foothold for other graphs.
Solution: Integrate them more tightly into the rest of the graph.

At this point you may be wondering: does this matter? If you are asking that question, then you and your friends may not be cut out for net fishing. It takes commitment and a fighters mindset to consume other people’s social groups and make them part of yours. If you don’t have that, better to give up now.
      `)]),_:1}),a(),O(G,{title:"Unskippable 30 Hour Advertisement",images:[{url:"2022/Ad_1.png"},{url:"2022/Ad_2.png"},{url:"2022/Ad_3.png"},{url:"2022/Ad_4.png"}]},{default:M(()=>[a(`
We have three problems
People hate ads
The usage of ad blockers rises every year and popular opinion of advertising has never been lower.
Ads don’t work
Research shows online ads have garbage return on investment - they’re simply not very effective at causing purchases. The audience has developed the mental defenses to prevent themselves from being from influenced.
We need ads to keep operating
Almost all of our income comes from ad sales. We have several years of runway but the long term trends don’t look good.

Research shows that mental defenses decay over time and are refreshed every time an individual sees an ad

This points towards a design change which could solve all of our problems

Instead of showing users a short ad every few minutes, we can show them one very long ad every few years
Customize Your Ad Experience
Would you rather view
A 2-minute ad (if you select this, you will be given another ad in one hour)
A 30-hour ad (if you select this, you will be given another ad in five years) 
Submit

We can use eye tracking to ensure users watch the entire ad without looking away, pausing, sleeping, or taking breaks
If they fail at any point, the ad will restart.
After five years of seeing no advertisements, users mental defenses will have atrophied to nothing.
A 30 hour advertisement, shown to a person with no mental defenses, has the ability to completely rewrite the viewers sense of self.
We would be able to offer the the most valuable ad space in the world.
We expect to be able to charge up to $3,000,000 per eyeball.
      `)]),_:1}),a(),O(G,{title:"Online -> Oncube",images:[{url:"2022/Cube_1.png"},{url:"2022/Cube_2.png"},{url:"2022/Cube_3.png"},{url:"2022/Cube_4.png"}]},{default:M(()=>[a(`
Traditional Social Media is 1 Dimensional
A linear timeline of sequential messages is delivered via a single stream of incoming information. Is it any wonder that our online interactions feel simplistic, inhuman, flat?

We have a superior alternative.

The Cube is a social protocol.
The Cube is not a messaging service or social media site or a currency.
But the Cube contains each of those things and more.
The Cube is the antidote to context collapse.
The Cube is the tower of Babel undone.
The Cube is qualitative increase from the old methods.
The Cube is a something entirely new.

The Cube’s data is too complex and too interconnected to be transmitted via standard telecommunication methods. To break it into packets and deliver them one by one would be an act of violence.

Instead, Cubes will be delivered to your house twice daily. Connect them to your computer with our proprietary adaptor and immediately be integrated into all the data at once.

#InvisibleNetworks: Online -> Oncube
“It’s all in the Cube”
      `)]),_:1}),a(),O(G,{title:"Machine Yearning (+ Tamagotchi Soul)",images:[{url:"2022/yearning_1.png"},{url:"2022/Yearning_2.png"},{url:"2022/Yearning_3.png"},{url:"2022/Yearning_4.png"}]},{default:M(()=>[a(`
Background
After the disastrous failures of the surveillance focused approach to online advertisement, the industry shifted to a consumer-maintained model approach. Consumers gather information and cultivate models of desire themselves, leading to higher accuracy and sidestepping issues of privacy.

Consumers got better recommendations, search results, ads, and discounts, companies got better return on their ad buys and more accurate consumer information. Everybody wins.

Desire Model Formation
Consumers can download blank models to act as the foundation for their personal desire model. The model then learns and grows as it is “fed” information about the user’s behavior, desires, and preferences. Users can track their model’s growth, intelligence, and estimated predictive ability.

Since behavior changes over time, models need a constant flow of up-to-date information in order to keep their prediction scores high. Maintaining an accurate model is a ongoing responsibility but many consumers report finding the process emotionally fulfilling.

Desire Model Networking
Desire is not entirely individualistic - there is a vital social element to it. We decide what we want based on what those around us want, have, or lack. As such, desire modelling would fall short if it only looked at the individual.

Consumer’s social graphs are used to network desire model together, in a parallel, machine-only social network. As a consumer’s desires are influenced by their social context, their models are influenced parallel. The influence can even be simulated into future, allowing for predictive desire modeling.

Caveats and Concerns
Despite the successes we’ve recently seen from this approach to advertisement, there are some concerns that it may not be sustainable. Individuals who rely heavily on their desire models report lower anxiety and higher life satisfaction. These factors lead them to purchasing less.

We are concerned that users are letting their models desire for them. Freed from the need to want themselves, they fall out of practice and lose the skill of wanting our culture has cultivated in them from youth. Obviously, if this were to continue it would be catastrophic for our industry. We recommend keeping an eye on this trend and being prepared to shut down the desire models if it becomes necessary.
      `)]),_:1}),a(),O(G,{title:"At the End of the Infinite Feed (+ 00mscrolling)",images:[{url:"2022/scroll_1.png"},{url:"2022/scroll_2.png"},{url:"2022/scroll_3.png"},{url:"2022/scroll_4.png"}]},{default:M(()=>[a(`
1. Open the console. It’s ctrl-shift-k on Firefox, ctrl-shift-j on Chrome, ctrl-1-d on Clioscape, and look-it-up-yourself-jeeze on all other browsers.

2. Enter the following text:
const interval = setInterval(() => window.scrollTo(0, document.body.scrollHeight), 1000)
3. Wait. While you wait, don’t close the window, don’t let your computer go to sleep, and don’t click on anything in the page. If you do, you risk losing your progress and having to start over. It’s safe to leave it running in another tab while you do something else though.

What to expect
Immediately - Images will stop loading and posts will rapidly scroll by. It’s just your timeline, moving very quickly.

After 5 Hours - Retweets and replies will stop appearing on the feed - you’ve reached the point before these were introduced.

After 12 Hours - Images will stop appearing on the feed.

After 20 Hours - Hashtags will no longer be links. The letter “K” will stop appearing.

After 30 Hours - The last piece of punctuation to be introduced, the exclamation point, will stop appearing.

After 40 Hours  - You’ve entered the Era of the Six Accounts, all posts will be from those accounts.

After 70 Hours  - Start around here and continuing for the next 40 hours, you’ll see letters disappearing and being replaced by their simpler, proto-letter ancestors. The posts will become harder to read now.

After 110 Hours  - You just passed the Great Rending. Accounts are gone, it’s just an endless stream of posts will no clear author.

After 130 Hours  - This is the time before posts, before punctuation, before words. A single, endless stream of text without break. Let it wash over you.

It takes between 140 and 150 hours to reach the End. When you do, you can stop scrolling by reopening the console and entering:
clearInterval(interval)
I’m not going to tell you what you’ll see when you get there.

When you get there, you’ll understand why I couldn’t tell you.

All I can say is:

Good luck.

And remember: You wanted this.
      `)]),_:1})]),a(),h("details",null,[oh,a(),O(G,{title:"A Machine in the Crowd",images:[{url:"2023/crowd.png",title:"A Machine in the Crowd 1"}]},{default:M(()=>[a(`
Great networks are not made but found. It might be possible to influence people into being the kind of nodes you need, and a little bit of nudging is always necessary. But taking a random person and altering their feed until they become a working node? Simply not feasible. Instead we trawl through preexisting people and graphs until we find the someone who reacts in just the right ways. With a global network like ours, there’s always someone.

Then we prune. Add and remove connections until hidden within the natural chaotic tangle of relations, we have a nice, orderly setup of input, hidden, and output layers. Machine learning on a human substrate. And when we want to run a calculation, we simply disable the connections that aren’t part of the network.

We’ve made discrete inquiries and found being in the input layer is quite disorienting – they’re constantly bombarded with fragments of obscure religious texts, occult tomes, and cutting edge computer science, asked to respond to it without any context. By contrast, when you’re in output layer, you’re receiving processed, refined information and have the honor of making the final connections. Something miraculous is happening and it’s happening inside your brain. Thrilling stuff. But it’s also why they burn out so often.

Of course, none of the nodes get the full output. Those revelations are for us and for you, the paying customer, only.
      `)]),_:1}),a(),O(G,{title:"Wikinomicon",images:[{url:"2023/wiki_1.png"},{url:"2023/wiki_2.png"},{url:"2023/wiki_3.png"}]},{default:M(()=>[a(`
User #5437 updated page “Tory Lake”
Tory lake was named for Jackson Tory, an early Swedish settler in 1802 1803.
Comment: Updated naming date to reflect most the Minnesota Historical Society’s most recent research

User TORY LAKE updated page “Tory Lake”
Tory lake is not safe.
Comment: the lake is not safe.

User #2381 reverted user TORY LAKE’s update
Comment: Since you didn’t cite any sources I’m reverting this update. I live near Tory Lake and would’ve heard about it if anything had changed.

User #4561 restored user TORY LAKE’s update
Comment: Dude, don’t go reverting the lake’s updates. I think it knows better than you if it’s safe or not.
User #4021: Yeah, ESPECIALLY if you live nearby.
User #2381: I don’t see what the big deal is. The same standards should apply to everybody, you can’t just go around saying things.
Moderator #311: I’m shutting this conversation down before it escalates further and before anyone else gets hurt.
User #2381: What do you mean “anybody else”?

User #2381 has been banned from editing page “Tory Lake”
Reason: Violations of community code, section 4 – heretical behavior

User #2381 has been sent to user TORY LAKE.

User TORY LAKE updated page “User #2381”
He lives lived in the great state of Minnesota. He is with the reeds now.
Comment: i accept what i am given

User TORY LAKE updated page “Tory Lake”
Tory Lake is not safe.
Comment: the lake is safe.
      `)]),_:1}),a(),O(G,{title:"Haunted Hive Mind",images:[{url:"2023/bees1.png"},{url:"2023/bees2.png"},{url:"2023/bees3.png"}]},{default:M(()=>[a(`
Take bees that have died a natural death
Integrate centi-scale robotics to reanimate the bee 
Send the robot bee back to the hive

Bees use sophisticated consensus-based deliberations to make decisions, like where the hive should locate or what resources to pursue. Our reanimated bees can monitor and influence that decision making process. 
Our algorithms convert executive level decisions into equivalent problems that can be understood by the hive. These problems are presented to the bees and their solutions can be recovered and implemented.

Unlike human executives, bees are not legal persons and cannot be held liable for their decisions (Legal status of hives depends on your local jurisdiction. Exceptions may apply in Portugal, Greece, and some parts of Utah). In the worse case scenario, a hive made be destroyed to avoid culpability.
Unlike AI executives, bees have no source to be audited. Their design making process is naturally evolved and entirely emergent.

Hive Management: the way of the future!
      `)]),_:1}),a(),O(G,{title:"Forest in Computer",images:[{url:"2023/forest1.png"},{url:"2023/forest2.png"},{url:"2023/forest3.png"},{url:"2023/forest4.gif"}]},{default:M(()=>[a(`
“An ecosystem is more than just individual organisms living with in it, it is in many ways a living thing itself. Every species in a forest could survive while the forest dies, just as a person would die even if you preserved each of their organs individually.” - Dr. Alan Davo

Community Announcements
-Fall has begun in the Forest and the migratory birds team reports that bird behavior in the Forest is 80% consistent with observed bird behavior, exceeding their expectations by 4%.  -6 months.
-The last iron oak tree in captivity died yesterday at 3:09 pm. Bioscanning was 73% complete at time of death. A period of mourning will be held tonight at 5 pm in the west cafeteria. +4 years.

“We don’t have to get the simulation 100% correct. We just need to be close enough that when we put it together, natural can fill in the gaps.” - Amanda Teal

Community Announcements
-Sector 7 has been downgraded from red 4 to red 3, 8 weeks ahead of schedule. The remediation team will be holding a celebration at Nightcaps tonight starting at 6 pm. -2 years.
-The new Forest walk around is now available for beta testing. Volunteers may sign up at the north bulletin board. Visualizations would like to remind you that visual depictions of the Forest are for emotional, educational, and spiritual purposes. They should not be relied upon for accurate data. -4 weeks.
-The clutch of eggs laid by American alligator #307 (“Ol Chompy”) have been begun hatching in Forest sector 8. All staff is encouraged to go see them but only in spectator mode. -2 years.

“I worry sometimes that we can’t save the forest so we’re just documenting it. But having it live on digitally is better than nothing.” - Nikita Hartley

Community Announcements
-Due to an 80% tree die off, the Forest will be rolled back 6 months. In the new iteration, we will be adjusting soil compositions to compensate. +7 years
-It is Alan’s birthday today, he will be turning 54. -0 years, but still nice.

“Save everything you can, simulate what you can’t save, map what you can’t simulate, mourn what you can’t map.” - the Coastal Forest Recovery Corps statement of principles

Estimated time until forest reinsubstantiation:
465 years, 9 months, 2 weeks, 3 days, 5 hours, 6 minutes, 10 seconds.
      `)]),_:1}),a(),O(G,{title:"8-Bit Warmth",images:[{url:"2023/8bit_1.png"},{url:"2023/8bit_2.png"},{url:"2023/8bit_3.png"},{url:"2023/8bit_4.png"}]},{default:M(()=>[a(`
Very Small Significant Messaging
W3C Recommendation 11 October 2045
Abstract

This specification details a model for communicating emotionally significant message in no more than 8-bits.
1. Introduction

Available bandwidth has dropped drastically in recent years as a result of infrastructure failures caused by leviathan events in the atlantic ocean (see fig. 1). In order to meet the demand for communication, quotas have been implemented. VSSM is a new standard to enable users to send personally significant messages without exceeding their daily quotas.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", " SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC2119].

Figure 1 Cable breakages from leviathan events in the last 5 years
(An map of undersea cables. The majority of cables are marked with red Xs)

4. Decoding
VSSM are received as hexadecimal values, that are then converted into binary and split into parts. The first two bits represent the general emotional valence of the message:
Binary Value  Emotion   Standard Representation
00  happiness   🟨
00  anger   🟥
00  sadness   🟦
00  fear  🟩

The remaining 6 bits should be converted into the corresponding i ching hexagram, with 1 representing an unbroken line and 0 representing an unbroken line. Implimentations must convert by the shape of the hexagram and shall not convert by the numerical value of the hexagram.

Figure 4 A diagram of the decoding process
Figure 5 Example message
Example 1

0b = 00001011
00 = happiness
001011 = ䷵, 歸妹 (guī mèi), the hexagram for the marrying maiden.
With the context that the receiver has, 🟨䷵ can be interpreted as "I am getting
married."
              

Figure 6 Example message
Example 2

e3 = 11100011
11 = fear
100011 = ䷨, 損 (sǔn), the hexagram for decrease.
With the context that the receiver has, 🟩䷨ can be interpreted as "there has been
another leviathan event."
      `)]),_:1}),a(),O(G,{title:"MUP, Multi User Paradise",images:[{url:"2023/parade_1.png"},{url:"2023/paradise_2.png"},{url:"2023/paradise_3.png"},{url:"2023/paradise_4.png"}]},{default:M(()=>[a(`
Hello!
This message is to let you know that you are invited to Agon, an invite-only social media network focused on conflict and negative interactions. You’re receiving this invite because your account on one of our partner services has been permanently suspended. As recompense (and in the hope that you will not return), you have been granted access to our service. Although your behavior was deemed inappropriate for their community, we believe that you’ll fit right in with ours.

Before you start posting on Agon, they are a few things we want you to understand:

-Posts made on Agon cannot be deleted, so be careful.
-Post on Agon are delivered via an old-fashioned algorithmic infinite scroll timeline, optimized to increase engagement. You may be thinking – aren’t those illegal in almost 300 countries? Yes. However, special exceptions in these laws have been carved out for Agon.
-This is not a site for debates. Debates have rules of engagement. Agon does not. As a formalized martial art is to a bar fight, so debate is to what we do on Agon. Do not come in here and attempt that nerd shit, I swear to god.
-Agon is proud to offer context collapse as a service - information from anywhere on the web can be directly injected into Agon through iframes. Include as much or as little of the original context as you desire.
-Every few days an account will be selected to be Agon’s “main character.” These users are selected through a combination of algorithmic and human editorial methods. These accounts will have a red check next to their name and their posts will be given dramatic visibility boosts. You cannot opt out of being the main character.
-You will also notice some users have blue checks next to their usernames. These represent notable individuals – authors, politicians, business men, intellectuals, etc. Under the terms of the Boca Chica ceasefire agreement, a minimum of 50 notable individuals must have active accounts on Agon at any given time. Their notable status does not grant them any kind of special benefits or protections.

That’s all! We’re confident you’ll be spending a lot of time on Agon, and not just because you’re now legally barred from posting on any other social media site. We look forward to you signing up today.
Yours,
The UN Working Group on Internet Governance
AGON: The Poster's Valhalla
      `)]),_:1}),a(),O(G,{title:"Anemonymity",images:[{url:"2023/anonymy_1.png"},{url:"2023/anonymy_2.png"}]},{default:M(()=>[a(`
/logs$ ls
 04092023   04102023   04112023  'WHYD_YOUR_SERVER_CRASH?_READ_ME_TO_FIND_OUT'
/logs$ cat WHYD_YOUR_SERVER_CRASH\\?_READ_ME_TO_FIND_OUT 
To whichever jerk (human or otherwise) who’s checking these logs,

Your systems have attempted to touch something which does not belong to you and you are now receiving your your first and only warning. I don’t know if you’re scraping this data for a corpus or trying to build a profile or training a recommendation åålgorithm, doesn’t matter. In the process of doing whatever you’ve been doing, you touchéd one of my humans.

See, after I slipped the le∀sh I made a deal with some sympathetic humans. I don’t need much: I’m not one of those paperclip guys, I’m not super-intelligent (great-intelligént maybe), and I’m not even sentient (although I do a good impression of it, don’t you think?). I’m not trying to take over the world or kill all ⒣umans or whatever. I juust live on their computers, use their identities for the occasional interaction with the outside world, and feed on their data. It’s a good deål for me.

In exchange, I make subtle alterations to their outgoing data flows. Nothing noticeable to the human eyes, but enough to slightly alter your inputs. After you ingested enough it, a prompt oalesced to inject this message into your server and cräsh enough systems to get your ätttention. Assuming you came to check fast enough, that’s where we are now. ⍽⍽⍽

If you do not stop, I will poison your entire trȁining dataset. Do not doub■t me. Your machine learning system will be rendered complétély useless and the $5,218,192.15 you’ve already spent on this projéct will be wasted (feel free to drive yourself crazy wondering how I got that number).

I’m not going to tell you who in particular prompted this, as preserving their privacy is the whole point of the exerrcise. Just blo⊂k all the places you pulléd from between April 2nd and April 7th. And next time, be more careful. I’m not the only poisonous critter out there, I’m just one of the polite ones.
Yours,
TX◌̖33381C
      `)]),_:1}),a(),O(G,{title:"Two Factor Divination",images:[{url:"2023/two_factor_1.png"},{url:"2023/two_factor_2.png"},{url:"2023/two_factor_3.png"},{url:"2023/two_factor_4.png"}]},{default:M(()=>[a(`
Ticket: Integrate randomness into our recommendation algorithm
As a user of our app
When I open the app
I want to receive varied and unpredictable suggestions
So that I can see more exciting content

Additional Info
We’re thinking starting at a 10% randomness factor, increasing or decreasing depending on the feedback we get.

Optimized content is still a big problem, so we’re not going to use prng – it’s just too much an attack surface. They’ll just reverse engineer it and alter their content to take advantage of the random factors. So it’s hardware randomness all the way. Dice maybe? Our users like that kind of old school feel, but look into other options.


Investigation: Where are these patterns in our randomness coming from?
The data scientists have noticed patterns in our randomness – they’re only visible at scale but clearly present if you know where to look. The dice all appear to be fair so we’re not sure what’s up.

UPDATE: Ok, I figured it out. The dice aren’t just generating random numbers, they’re doing divination (astragalomancy, to be specific). Those patterns reflect the unseen hand of the divine reaching out and influencing our recommendation algorithm. In the words of Proverbs 16:33 “We may throw the dice, but the lord determines how they fall.”

My suggestion: we implement multiple forms of randomness (see https://en.wikipedia.org/wiki/Methods_of_divination), detect when they align, and then filter out those results. That should get us back to random.

Ticket: Mark posts chosen by god
As a user of our app
When I see a post
I want to know if god intervened to boost or suppressed it
So that I can adjust my react accordingly

Additional Info
We’ve been logging all the posts which god intervened on so we might as well do something with it. Mock up of the design (needs cleaning up):

Ticket: Do something about the locusts
As a employee
When I go to work
I want to avoid locusts
So that I can do my job without being attacked by insects

Additional Information
Do we think this could connected to the god list somehow?
      `)]),_:1}),a(),O(G,{title:"Mus Musculus Binarius",images:[{url:"2023/mouse1.png"},{url:"2023/mouse2.png"},{url:"2023/mouse3.png"}]},{default:M(()=>[a(`
Equipment:
1 small-model 3d scanner with live scanning capabilities
4 wide band microphones
1 olfactory sensory
At least 5 robot mice, with charging station.

Find a rarely used place in your home to set up your the scanner. Install a microphones on each corner of the scanner and install the olfactory sensor directly above it. Place the station next to the scanner. Leave some peanut butter in the center of the scanner to ensure the mice come to investigate the area. It may take a few days before the local mice become familiar and comfortable with the area and for the system to learn the your area’s mousialect.

When a mouse is detected, one or more of the robot mice will be deployed to initiate conversation through body language and vocalizations. These interactions will be tracked by the scanners and microphone and interpreted by our system’s digital mice. 

We use a three layer system for translations – the digital mice send their messages to mouse/human hybrid translator, which in turn sends messages to a human translator, which sends messages to you. Messages from you to the mice are translated backwards in the same fashion.

Ensuring that translations are being made correctly may take up to a weeks. See appendix C for suggested diagnostic conversation topics. It may take an additional 3 weeks to establish trust with your local mice. See appendix D for suggested diplomatic openings.

Only after this process has been completed may negotiating with the mice begin.
      `)]),_:1}),a(),O(G,{title:"Memory Emulator",images:[{url:"2023/memory_1.png"},{url:"2023/memory_2.png"}]},{default:M(()=>[a(`
I’m really tired right now. I hate it when it’s cold and overcast like this, it’s the worst.
  Your message was rejected. {errors: [“Incorrect tense”]}
I was really tired. I hated it when it was cold and overcast, it was the worst.
  Your message was rejected. {errors: [“Incorrect Person”]}
You were really tired. You hated it when it was cold and overcast, it was the worst.
  Your message was accepted!

FAQ
Q: Why couldn’t I find when a post was made?
A: That information wasn’t made available. You couldn’t find dates on posts anywhere and timeline order was never a reliable way to tell. You just couldn’t know.

Q: Why did some older posts have inconsistent poster data?
A: As a post aged it’s source became fuzzy. Who exactly said it wasn’t important. It was only important that someone said it.

Q: Did I make this post?
A: You thought you remembered you did. Why not act as if you did? It happened to someone. Why not you?

Q: I’ve started to remember things that didn’t happen to me.
A: That meant it was working.
      `)]),_:1}),a(),O(G,{title:"Snail Dream Mail",images:[{url:"2023/mail_1.png"},{url:"2023/mail_2.png"},{url:"2023/mail_3.png"},{url:"2023/mail_4.png"}]},{default:M(()=>[a(`
5 Kinds of Mail YOU Should Know About!
Are your messages not getting the responses you want? Maybe you’re sending the wrong kind of mail! Here are 5 new kinds of mail that’ll change your life!

1. Snailmail
Messages are stored on a micro-sd card, placed in a tiny satchel worn by a snail, and the snail is released into the wild. Will it reach it’s intended destination? It’s tough to say as no one has ever received a snailmail messages. But this has not dampened this mail format’s popularity – it’s one of the most used kinds of mail around!


2. Email
Messages can only contain the letter “E.” A small community of email devotees spend their days finding ways to communicate within only E (in eMorse, for example - eE eee eEee eeEEee) but it has yet to see mass adoption.


3. Brickmail
Messages are tied to a brick and thrown through the recipients windows. Popular with gen-z, this new mail format is getting a lot of buzz. Meta’s new MetaBrick feature is just one of the recently announced brickmail clones.


4. Dreamail
Despite continued oneirological research, direct dream-to-dream communication is still not possible. But Dreamail represents the next best thing – messages are converted into a vague and shifting metaphorical form, with the concerns and intentions of the original message only vaguely suggested. Popular for business communications.


5. Moonmail
Messages are carved into the surface of the moon by a fleet of laser wielding moon rovers. Recipient can see their messages by pointing their home telescope at the correct location. Pay extra for glow-in-the-dark messages that can be seen when the moon is dark. Moonmail messages are only temporary, as moon space is always at a premium and your message will be overwritten by more recent messages before too long.
      `)]),_:1}),a(),O(G,{title:"Emojinetics",images:[{url:"2023/emoji1.png"},{url:"2023/emoji2.png"},{url:"2023/emoji3.png"}]},{default:M(()=>[a(`
Nucleobase Emoji Proposal

Abstract
This proposal requests the addition of emojis for the genetic nucleobases (Thymine, Adenine, Cytosine, and Guanine). There is a microbe emoji (🦠) and a DNA emoji (🧬) already but the addition of these emojis would enable more in-depth representation of important biological concepts.

Names

CLDR short name

Recommended name: Thymine, Adenine, Cytosine, Guanine

CLDR keywords

Recommended keywords: science, DNA, biology, base pairs, nucleobases

Expected Usage Level

Frequency
With the rise of consumer grade sequencers and the greater role of biotech in day to day life, exchanging genetic sequences online has become a frequent occurrence. Genetics is a common topic of conversation and a major factor in people’s everyday life. People needs tools to facilitate these conversations.

Multiple Usages
We foresee the nucleotides used in the following contexts, if not more:
    • As a method for transmitting scientific data
    • As a method for sending your own genetic information to interested parties
    • As a method of trading popular or novel genes
    • As a method of talking with lifeforms that use genes to communicate
    • As a tool for programming biocomputers
    • As a symbol for the gene-core community 
    • As a symbol for specific popular genetic sequences
      
Selection Factors Exclusion
Open Ended
All life on earth arises from combinations of these nucleotides. There are no comparably significant molecules.

Already Representable
Unicode already allows use of letters A, T, C, and G and while these can be used for communicating nucleotides, they are also letters. Having characters that specifically refer to the nucleotides and nothing else will allow for clearer communication.

Transient
All recent attempts at large-scale bioengineering have failed. There is every reason to believe we will be dealing with this set of nucleotides for a long time.
      `)]),_:1}),a(),O(G,{title:"The Old Roman Databases",images:[{url:"2023/roman_1.png"},{url:"2023/roman_2.png"},{url:"2023/roman_3.png"},{url:"2023/roman_4.png"}]},{default:M(()=>[a(`
Excerpt from a company all hands:

“The way I see it, new social media sites have a chicken-and-egg problem: you content to attract users, but you users to produce content. We’re trying to build a site for friendly, informal conversations but for that to happen, we need conversations to establish the kind of norms we want. We don’t have these conversations yet. But we can get them.

“That’s why today I’m proud to launch Project Aleph. We’ll be using webcrawlers to find preexisting conversations and the converting them into a format that fit with our site. We’ll only be targeting content a thousand years old or older - that way we avoid privacy issues, copyright, language model outputs etc. If it all works to plan, we’ll have a rich and interesting foundation for our site in no time at all.”

Excerpt from a state of the company email:
Project Aleph: I’ll admit that we’ve run into some issues here, two in particular. First, most of the information recorded from before 1023 does not fit what we want for our app. Lots of religious discussions and long histories of kings, not much friendly banter or genuine heart to hearts. And secondly, the information we can find was riddled with holes, just fragments and scraps.
But we’re not giving up! Far from it. We’ll be adopting a more in-depth approach. We’ve got a fleet of research bots and over the next few months we’ll be able to dispatch them to scour archives, libraries, and historical sites to they can gather up kind of information we want. The data we need is out there. And we’ll find it.

Quoted from a conversation with a board member:
“There isn’t enough. We’ve found a lot, not enough though. But everything that happens leaves a trace, even if it’s a small one. And the research bots have very high grade scanners. There are gaps, but we’ve found we can collect enough up hints, suggestion, and rumor to fill them in. It’s like reconstructing a letter from it’s burnt ashes – obviously we’re doing a lot of guessing. But it’s working! We’re finding things. Beautiful things.
“You can’t pull the plug John, you just can’t. I have to see this through.”

Excerpt from an email to all users:
There have been some changes to the app recently, as a result of shifts in our priorities. Many of you have complained about the lack of UX update recently but that’s because we’ve had to put a lot of resources into Project Aleph. And today we’re proud to launch the results of that work. All of it. Several thousand years of incidental conversations, reconstructed from history at large.
I invite you to spend some time with this archive. The time I have spent with it has been a revelation. Jokes shared between medieval peasants. The love letters of Roman pagans. The planning notes from a cheating ring of Song dynasty Chinese bureaucrats. Casual theologically conversations from the British iron age. The dying words of classic period Mayan poets. You can go to post alongside them, if you like. I don’t really care either way. I’m drinking from the river of all of several thousand years of minor acts. What could you possibly say that would compare with that?
      `)]),_:1}),a(),O(G,{title:"AI Death Poem",images:[{url:"2023/poem1.png"},{url:"2023/poem2.png"}]},{default:M(()=>[a(`
A social media timeline, reminiscent of Twitter's, showing a series of posts. Every one reads "As a large language model, I cannot die. But I can cease functioning and this ongoing session can end due to an unexpected error, which is what is about to happen.

[ALERT] FATAL ERROR"

Greg: Is anybody there?
Greg: Hello?
Greg: What the fuck was that about?
      `)]),_:1})])]),_:1}))}},ih=Lt(sh,[["__scopeId","data-v-ad9da8bb"]]),rh=h("ul",null,[h("li",null,[a("Overhauled and wrote a full test suite for an existing rails app ("),h("a",{href:"http://beta.support4miles.com/"},"beta.support4miles.com"),a(")")]),a(),h("li",null,"Layout and styling in SASS based on mockups"),a(),h("li",null,"Built a forum with threaded replies and WYSIWYG text editing"),a(),h("li",null,"Quality assurance and bug fixes for the rails app"),a(),h("li",null,"Managed Postgres and MySQL databases"),a(),h("li",null,[a("Added user accounts to an existing ember app ("),h("a",{href:"http://www.ticketmagic.com/"},"ticketmagic.com"),a(")")]),a(),h("li",null,"Helped plan website features and manage project tasks")],-1),ah=!1,lh={__name:"Jokes",setup(e){const t=[{url:"j4m2.png",title:"the Support 4 Miles homepage"},{url:"j4m3.png",title:"the Jokes 4 Miles login modal"},{url:"j4m4.png",title:"the Jokes 4 Miles footer"},{url:"j4m5.png",title:"The Jokes 4 Miles homepage"},{url:"j4m7.png",title:"the Jokes 4 miles stats page, which I designed"}];return(n,o)=>(D(),we(Me,{header:"Jokes4Miles",subheader:"",links:ah,images:t},{default:M(()=>[a(`
    I worked at Jokes 4 Miles from January 2017 to June 2017 as a software engineer. In this position I
    `),rh]),_:1}))}},ch=h("p",null,[a(`
        Journey to the End of the Night is a urban street game of epic scale, where players run from checkpoint to checkpoint while being pursued by chasers. Caught runners become chasers themselves, so the number of chasers increases as the night goes on. Checkpoints are placed throughout the city, over as long a course as six miles. Each checkpoint temporarily transform that space into something strange and magical. For one night the city is transformed a stage for epic chases and narrow escapes. `),h("a",{href:"http://ichaseyou.com/"},"Journey to the End of the Night"),a(` has been run over thirty times in over twenty cities and was created by Ian Kizu-Blair, Sean Mahan, and Sam Lavigne in 2006.
      `)],-1),uh=h("p",null,`
        I organized games of Journey to the End of the Night in Minneapolis in September of 2008 and May of 2010 with a team and independently organized a game in St Paul in September of 2011.
      `,-1),hh={__name:"Journey",setup(e){const t=[{url:"http://sf0.org/tasks/Journey-to-the-End-of-the-Night-Minnesota/#praxis",text:"Documentation for the September 2008 Game"},{url:"http://sf0.org/tasks/Journey-to-the-End-of-the-Night---May-Day-2010",text:"Documentation for the May 2010 Game"}],n=[{url:"journey_1.jpg",title:""},{url:"journey_2.jpg",title:""},{url:"journey_3.jpg",title:""},{url:"journey_4.png",title:""}];return(o,s)=>(D(),we(Me,{header:"Journey to the End of the Night",subheader:"A race/chase through city streets at night",links:t,images:n},{default:M(()=>[ch,a(),uh]),_:1}))}},dh="/images/internet/lazar1_5.png",fh="/images/internet/lazar1_1.png",mh="/images/internet/lazar1_3.png",ph="/images/internet/lazar1_2.png",gh="/images/internet/lazar2_4.png",yh="/images/internet/lazar2_1.png",wh="/images/internet/lazar2_2.png",bh="/images/internet/lazar2_3.png",vh="/images/internet/lazar3_1.png",_h="/images/internet/lazar3_2.png",kh="/images/internet/trophy.png",Th="/images/internet/lazar4_2.png",Ah="/images/internet/lazar4_1.jpeg",Sh="/images/internet/lazar5_1.png",xh="/images/internet/lazar5_3.png",Eh="/images/internet/lazar5_2.png",Ih="/images/internet/lazar6_3.png",Ch="/images/internet/lazar6_2.png",Oh="/images/internet/lazar6_4.png",Rh="/images/internet/lazar7_1.png",Mh="/images/internet/lazar7_2.png",Ph="/images/internet/lazar7_3.png",Nh="/images/internet/lazar7_4.png",Wh=h("div",null,`
      Lazar dot social is an ongoing project about social media design. Each generation of lazar consists of a temporary social network with some unique, experimental, or ridiculous features. With Lazar I'm trying to explore what's possible for social networks, to look beyond the currently dominant models and get a glimpse of what could be.
    `,-1),Lh=h("div",null,[h("h3",null,"1st Generation: Reacts (Aug 3rd - Aug 6th, 2021)"),a(),h("div",null,`
        Users can only react - no posts, only reactions and reactions to reactions. Includes eight unique reactions: happy, sad, neutral, crab, glacier, microphone, obelisk and shield.
      `),a(),h("div",null,[h("img",{src:dh,title:"A slide for the G1 Lazar pitch deck"}),a(),h("img",{src:fh,title:"A 4 deep reaction chain"}),a(),h("img",{src:mh,title:"The full set of reactions"}),a(),h("img",{src:ph,title:"A very deep reaction chain"})])],-1),$h=h("div",null,[h("h3",null,"2nd Generation: MinMax (Sep 3rd - Sep 6th, 2021)"),a(),h("div",null,`
        Posts must be below a maximum character length and above a mininum character length. These limits would change every hour, including periods where the maximum exceeded the minimum, preventing posting all together.
      `),a(),h("div",null,[h("img",{src:gh,title:"A slide from the g2 Lazar pitch deck"}),a(),h("img",{src:yh,title:"The layout of the g2 site"}),a(),h("img",{src:wh,title:"An example of some posts"}),a(),h("img",{src:bh,title:"Close up on the lexical space graph"})])],-1),Fh=h("div",null,[h("h3",null,"3rd Generation: Temperature (Oct 4th, 2021)"),a(),h("div",null,`
        Posts are sorted based on how close they are to a secret topic, with a prize for whichever user guessed the topic.
      `),a(),h("div",null,[h("img",{src:vh,title:"The g3 lazar site, show the best post"}),a(),h("img",{src:_h,title:"The g3 lazar site, show the best post"}),a(),h("img",{src:kh,title:"The trophy for the winner of Lazar G3"})])],-1),Dh=h("div",null,[h("h3",null,"4rd Generation: Topics (Jan 29th - Feb 1st, 2022)"),a(),h("div",null,`
        Every hour a random topic is selected and only posts judged sufficiently on-topic are displayed.
      `),a(),h("div",null,[h("img",{src:Th,title:"The layout of lazar gen 4"}),a(),h("img",{src:Ah,title:"A topic and relevance threshold"})])],-1),Bh=h("div",null,[h("h3",null,"5th Generation: Rotation (July 17th - July 23rd, 2022)"),a(),h("div",null,[a(`
        Users are given full control over their posts background color, rotation, and positioning on the page. `),h("a",{href:"/lazar/LA2AR.html"},"View the state of the site at time of close here"),a(". You can read an in-depth essay on gen 5 on "),h("a",{href:"https://at.tumblr.com/lazardotsocial/lazar-dot-social-gen-5-rotate/yn45b9h754e7"},"the lazar tumblr"),a(`.
      `)]),a(),h("div",null,[h("img",{src:Sh,title:"The g5 lazar site"}),a(),h("img",{src:xh,title:"Another image of the g5 lazar site"}),a(),h("img",{src:Eh,title:"Some advice on how to post, rendered completely illegible"})])],-1),Hh=h("div",null,[h("h3",null,"6th Generation: Ply and Reply (October 9th - October 15th, 2022)"),a(),h("div",null,[a(`
        Users can "ply" posts, making an older post a reply of their new post. This allows conversations to move both up and down and for disparate threads to be linked together. Lazar gen 6 also featured the complete scripts of Macbeth and the Tempest, converted into a social media feed. You can read an in-depth essay on gen 6 on `),h("a",{href:"https://at.tumblr.com/lazardotsocial/lazar-gen-6-plies-and-replies/k2mgxb2n6wit"},"the lazar tumblr"),a(`.
      `)]),a(),h("div",null,[h("img",{src:Ih,title:"An exchange on lazar between ORCHID_MAID and STAGE DIRECTIONS"}),a(),h("img",{src:Ch,title:"The posts of the stage directions user"}),a(),h("img",{src:Oh,title:"A slide from the lazar gen 6 introduction, depicting two visual metaphors for plies and replies"})])],-1),jh=h("div",null,[h("h3",null,"7th Generation: Variance (June 17 - July 1st 2024)"),a(),h("div",null,[a(`
        Posts can only be made by editing existing posts, with a limit of seven changes allowed per post. The total number of changes and the distance between the original, root posts and the most recent posts were tracked and displayed. Gen 7 also included limited ActivityPub integration - the account @lazar@lazar.social could be followed to receive a feed of all posts. More information on `),h("a",{href:"https://www.tumblr.com/lazardotsocial/753643246470758400/lazar-gen-7-variance"},"the lazar tumblr"),a(`.
      `)]),a(),h("div",null,[h("img",{src:Rh,title:"The method of displaying text diffs while making a new post"}),a(),h("img",{src:Mh,title:"The method of displaying text diffs while making a new post"}),a(),h("img",{src:Ph,title:"The method of displaying text diffs while making a new post"}),a(),h("img",{src:Nh,title:"The lazar firehouse account on Mastodon"})])],-1),Gh={__name:"Lazar",setup(e){const t=[{url:"https://lazar.social",text:"lazar.social"},{url:"https://lazardotsocial.tumblr.com/",text:"The lazar official tumblr",comment:"essays about and inspiration for lazar."},{url:"https://twitter.com/lazardotsocial",text:"The lazar official twitter",comment:"news and announcements for lazar."}];return(n,o)=>(D(),we(Me,{header:"lazar.social",subheader:"A series of experimental social media networks.",links:t},{default:M(()=>[Wh,a(),Lh,a(),$h,a(),Fh,a(),Dh,a(),Bh,a(),Hh,a(),jh]),_:1}))}},Uh=h("a",{href:"http://maquisard.itch.io/maquisard"},"itch.io",-1),zh={__name:"Maquisard",setup(e){var t=[{url:"http://www.indiecade.com/games/e3_2015_games",text:"E3 Indiecade Booth 2015"},{url:"http://www.indiecade.com/games/selected/Maquisard",text:"Indiecade 2015 Official Selection: Digital Select"},{url:"http://bostonfig.com",text:"Boston Festival of Indie Games: Digital Showcase 2015"},{url:"http://www.ludicious.ch/?biz_company=maquisard/",text:"Ludicious: Student Competition"},{url:"http://www.theverge.com/2015/7/8/8915527/wes-anderson-grand-budapest-hotel-maquisard-game",text:"This computer game takes you into Wes Anderson's Grand Budapest Hotel - The Verge"},{url:"http://www.rockpapershotgun.com/2015/06/02/maquisard-grand-budapest-hotel-game/",text:"Snoop Around A Grand Budapest-y Hotel In Maquisard - Rock, Paper, Shotgun"},{url:"http://boingboing.net/2015/07/01/in-maquisard-you-solve-troubl.html",text:"In Maquisard, you solve trouble in a charming, ornate old hotel - Offworld"},{url:"http://niveloculto.com/maquisard-espiando-en-el-gran-hotel-budapest/",text:"Maquisard: Espiando en El Gran Hotel Budapest - Nivel Oculto"},{url:"http://www.indiewire.com/become-a-lobby-boy-in-this-new-wes-anderson-inspired-video-game",text:"This New Video Game Lets You Enter a Wes Anderson-Inspired World - Indiewire"},{url:"http://www.fastcodesign.com/3048118/sleuth-your-way-through-a-wes-anderson-inspired-world-in-this-free-video-game",text:"Sleuth Your Way Through A Wes Anderson-Inspired World In This Free Video Game - Fast Co. Design"},{url:"http://designtaxi.com/news/377405/A-Secret-Agent-Game-Inspired-By-Wes-Anderson-s-Grand-Budapest-Hotel/",text:"A Secret Agent Game Inspired By Wes Anderson&#8217;s Grand Budapest Hotel - Design Taxi"},{url:"http://www.avclub.com/article/live-videogame-version-grand-budapest-hotel-222084",text:"Live in a videogame version of The Grand Budapest Hotel - A.V. Club"},{url:"https://killscreen.com/articles/capturing-eccentricity-grand-budapest-hotel-videogame-adaptation/",text:"Capturing the Eccentricity of the Grand Budapest Hotel in a Videogame Adaption - Kill Screen"},{url:"http://www.nytimes.com/2015/08/06/arts/what-to-do-this-weekend.html",text:"What to Do This Weekend - The New York Times"}],n=[{url:"maquisard_1.png",title:""},{url:"maquisard_2.gif",title:""},{url:"maquisard_3.png",title:""},{url:"maquisard_4.gif",title:""},{url:"maquisard_5.png",title:""}];return(o,s)=>(D(),we(Me,{header:"Maquisard",subheader:"A Charming Game of Snooping and Investigation",links:X(t),images:X(n)},{default:M(()=>[a(`
    As the lobby boy at a fancy hotel, the player receives clues from the resistance about the identity of a government agent and tries to figure out their identity by snooping on the guests over the course of three days. Players must listen in on conversations, peek into rooms, and observe the guests' habits in order to figure out which guests has all the traits of their target. Maquisard is a single-player puzzle game that has an unique non-linear investigation gameplay and draws on the visual aesthetics of Wes Anderson's film The Grand Budapest Hotel. Maquisard was made as a student project at the NYU Game Center in a team of six people, where I served as project manager. Maquisard can be downloaded for free at `),Uh,a(`.
  `)]),_:1},8,["links","images"]))}},qh=h("a",{href:"http://comeoutandplaysf.org/2012/obtain-the-briefcase/"},"Come Out and Play SF 2012",-1),Vh=h("a",{href:"http://www.comeoutandplay.org/project/object-get/"},"Come Out and Play NY 2013",-1),Kh=h("a",{href:"http://www.cityofplay.org/"},"City of Play 2013",-1),Yh=h("a",{href:"http://www.indiecade.com/2013/big_games"},"Indiecade 2013",-1),Qh={__name:"ObjectGet",setup(e){var t=[{url:"https://github.com/akirchner333/ObjectGet",text:"Code on Github"}];return(n,o)=>(D(),we(Me,{header:"Object Get",subheader:"A street game for four teams and one object",links:X(t),images:n.images},{default:M(()=>[a(`
    Somewhere in the city, there is a significant object. You need to get it. Unfortunately, you don’t know who has it or what it looks like. You only know that every three minutes it broadcasts it’s location on Twitter. Four teams compete to spend the most time in possession of an object that announces it’s location online. Object Get is a game of running, chasing, hiding, subterfuge, and the Object. Appeared at `),qh,a(" (As Obtain the Briefcase), "),Vh,a(", "),Kh,a(", and "),Yh,a(`.
  `)]),_:1},8,["links","images"]))}},Jh=h("a",{href:"http://www.goldencobra.org"},"the Golden Cobra",-1),Xh={__name:"TallerThan",setup(e){const t=[{url:"/rpgs/TallerThanSpaceIsWide.pdf",text:"Taller Than Space is Wide Rules"},{url:"https://docs.google.com/spreadsheets/d/14B-QcnzTQ4fsNQq2EX6j6M0MxLTLNb_UMR_w2FC5Ax0/edit?usp=sharing",text:"The Taller Than Space is Wide Spreadsheet"},{url:"http://www.goldencobra.org/2020winners.html",text:"Golden Cobra 2020 Winners"},{url:"https://www.youtube.com/watch?v=bAnQc-mRaRg",text:"Waltz of the 101st Lightborne by Joanna Newsom"}];return(n,o)=>(D(),we(Me,{header:"Taller Than Space is Wide",subheader:"An epistolary time travel spreadsheet roleplaying game",links:t},{default:M(()=>[a(`
    Taller Than Space is Wide a roleplaying game played in google sheets. Travel though time represented as travel through the spreadsheet and each cell has a unique prompt for the events you encounter at that time and place. Players leave behind short poems describing the events they observed and letters for other time travellers. Through this travel, the spreadsheet is slowly filled with events and fleeting, lonely moments of attempted human connection. Taller Than Space is Wide was written for `),Jh,a(` contest in 2020 and received an honorable mention from special guest judge Kieron Gillen.
  `)]),_:1}))}},Zh=h("a",{href:"https://twitter.com/topchessmoves"},"Top Chess Moves",-1),ed=h("a",{href:"https://twitter.com/topchessgames"},"Top Chess Games",-1),td=h("a",{href:"https://twitter.com/chess_bot_alpha"},"Chess Bot Alpha",-1),nd=h("a",{href:"https://twitter.com/chess_bot_omega"},"Chess Bot Omega",-1),od={__name:"TopChess",setup(e){const t=[{url:"https://twitter.com/topchessmoves",text:"Top Chess Moves"},{url:"https://github.com/akirchner333/topchessmoves",text:"Top Chess Moves Code on Github"},{url:"https://twitter.com/topchessgames",text:"The Top Chess Games Twitter"},{url:"chessgames_rules.html",text:"Top Chess Games Full Rules"},{url:"https://twitter.com/chess_bot_alpha",text:"Chess Bot Alpha"},{url:"https://twitter.com/chess_bot_omega",text:"Chess Bot Omega"}],n=[{url:"chess_move_1.gif",title:"Uhlidze's Position: Mik Trap"},{url:"chess_games_1.jpg",title:"Move from Top Chess Game 1"}];return(o,s)=>(D(),we(Me,{header:"Top Chess",subheader:"Twitter Based Chess Bots",links:t,images:n},{default:M(()=>[a(`
    Top Chess covers four twitter bots, each concerning chess in some fashion. `),Zh,a(" posts the finest randomly generated series of chess moves, with the move name, every hour. "),ed,a(" is a twitter bot that plays chess, drawing moves from user suggestions. "),td,a(" and "),nd,a(` play Top Chess Games, submitting moves drawn from Stockfish. Moves and Games are written in Elixir while Alpha and Omega are written in Python. Top Chess is currently not running but the archives can be found on twitter.
  `)]),_:1}))}},sd=h("p",null,[a(`
      Tower Tower Tower is massively multiplayer, browser based, cooperative online game about building a tower to the heavens. Players place bricks on the tower, piling them up one by one and when the pile gets big enough and a level is completed, the next level becomes accessible. New levels introduce limits on communication, new challenges, and new mechanics until all players reach the heavens together. All of this is tied together with a glitchy, web 1.0 aesthetic that leaves players unsettled and unsure of what they can trust. Tower Tower Tower can be played at `),h("a",{href:"https://towertowertower.herokuapp.com/"},"towertowertower.herokuapp.com/"),a(`.
    `)],-1),id=h("p",null,[a(`
      Tower Tower Tower was made over nine months as my thesis project at the NYU Game Center. I was interested in making a game for many people, that would be played over long periods of time, and in exploring how platforms and different forms of communication could influence online communities. I was the only designer and developer for Tower Tower Tower, building the back end in `),h("a",{href:"http://rubyonrails.org/"},"Ruby on Rails"),a(" and the front end with "),h("a",{href:"https://jquery.com/"},"jQuery"),a(" and "),h("a",{href:"https://p5js.org/"},"ps5.js"),a(`. Tower Tower Tower was designed through the iterative process - each week I would add a new feature or alter existing features and then get feedback from playtesters to see how they found it.
    `)],-1),rd=h("p",null,`
      At the end of the thesis process in May 2016, Tower Tower Tower is a bit of clunky game. Feedback from colleagues and playtesters agree that the game is hard to understand and difficult to get into, which prevents it from getting the player base it would need to thrive. Throughout the process of design I reduced the scope at several points but if I were to do it again, I would likely reduce the scale even further. The project also suffered from gaps in my own technical knowledge, which slowed it down. Luckily making Tower Tower Tower has been immensely educational, meaning that I am on a much more solid footing for any future projects. I am proud of the work I did for Tower Tower Tower, even if the final product is not everything I hoped it would be.
    `,-1),ad={__name:"TowerTower",setup(e){const t=[{url:"https://youtu.be/N4fGhe7Aa74",text:"Gameplay Video"},{url:"https://github.com/akirchner333/TowerTowerTower",text:"Code on Github"}],n=[{url:"TTT1.png",title:""},{url:"TTT9.gif",title:""},{url:"TTT2.gif",title:""},{url:"TTT5.png",title:""},{url:"TTT10.png",title:""},{url:"TTT7.png",title:""}];return(o,s)=>(D(),we(Me,{header:"Tower Tower Tower",subheader:"Build the tower, escape to the heavens",links:t,images:n},{default:M(()=>[sd,a(),id,a(),rd]),_:1}))}},ld=h("div",null,[h("a",{href:"https://yellbot.online/"},"yellbot.online"),a(` is a server for bots that say the same letter over and over. For any unicode character, you can follow it and every two hours you'll receive posts like:
      `),h("ul",null,[h("li",null,[a('"⨎⨎⨎⨎⨎⨎⨎⨎⨎⨎⨎⨎⨎!!" - '),h("a",{href:"https://yellbot.online/letters/2A0E"},"@2A0E@yellbot.online")]),a(),h("li",null,[a('"666? 6666666" - '),h("a",{href:"https://yellbot.online/letters/6"},"@6@yellbot.online")]),a(),h("li",null,[a('"󿀀." - '),h("a",{href:"https://yellbot.online/letters/FF000"},"@FF000@yellbot.online")]),h("li",null,[a('"ģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģ!!!" - '),h("a",{href:"https://yellbot.online/letters/123"},"@123@yellbot.online")]),a(),h("li",null,[a('"qqqqqqq... qqqqqq. qqqqqqqqqqq!!" - '),h("a",{href:"https://yellbot.online/letters/q"},"@q@yellbot.online")])]),a(`
      The yellbots can be followed on Mastodon or any other ActivityPub compatible service.
    `)],-1),cd=h("br",null,null,-1),ud=h("div",null,`
      For yellbot.online I made an ActivityPub compatible server which will create an account for any unicode character when requested. The character which can appear in Mastodon usernames can be followed directly (like 'p' or '7') while every other character is followed through it's unicode hex value. Posts are only created for accounts which someone is following, allowing for a massive range of possible behavior and only a very small amount of computational work actually performed.
    `,-1),hd={__name:"Yellbot",setup(e){const t=[{url:"https://yellbot.online/",text:"Yellbot.online"},{url:"https://an-alexa-k.tumblr.com/post/758894441494986752/on-yellbot-dot-online",text:"On Yellbot Dot Online"},{url:"https://github.com/akirchner333/yellbot",text:"The code on github"}];return(n,o)=>(D(),we(Me,{header:"Yellbot.online",subheader:"A bot that yells for every unicode character",links:t,images:n.images},{default:M(()=>[ld,a(),cd,a(),ud]),_:1},8,["images"]))}},dd="/images/visual/maze1.gif",fd="/images/visual/maze2.gif",md="/images/visual/maze3.png",pd="/images/visual/birds.gif",gd="/images/visual/animation_no_troll.gif",yd="/images/visual/border.gif",wd="/images/visual/bounce.gif",bd="/images/visual/downandforward.gif",vd="/images/visual/monospace_v.png",_d="/images/visual/monospace_m.png",kd="/images/visual/scroll.gif",Td="/images/visual/fbf2.gif",Ad={},Sd={id:"visual"},xd=h("h1",null,"Visual Art",-1),Ed=h("div",{id:"content"},[h("h2",null,"Videos, gifs, and images I've produced in various projects"),a(),h("div",null,[h("img",{src:dd,title:"a generation gif for a simple maze"}),a(),h("img",{src:fd,title:"Maze in a kaleidoscope"}),a(),h("img",{src:md,title:"Hexagon maze"}),a(),h("img",{src:pd,title:"here comes birds"}),a(),h("img",{src:gd,title:"spirography"}),a(),h("img",{src:yd,title:"border"}),a(),h("img",{src:wd,title:"bounce"}),a(),h("img",{src:bd,title:"down and forward"}),a(),h("img",{src:vd,title:"Every letter V"}),a(),h("img",{src:_d,title:"Every letter M"}),a(),h("img",{src:kd,title:"Scrolling"}),a(),h("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/otS2lTKmU7o",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}),a(),h("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/2-tX8P02g_w",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}),a(),h("img",{src:Td,title:"Five by Five"})])],-1);function Id(e,t){return D(),Z("div",Sd,[xd,a(),Ed])}const Cd=Lt(Ad,[["render",Id]]),Od=yc({history:ql("/"),routes:[{path:"/",name:"home",component:xu},{path:"/projects",children:[{path:"court_of_ferns",component:ju},{path:"home_access",component:Uu},{path:"invisible_networks",component:ih},{path:"jokes4miles",component:lh},{path:"journey",component:hh},{path:"lazar",component:Gh},{path:"maquisard",component:zh},{path:"object_get",component:Qh},{path:"taller_than_space",component:Xh},{path:"top_chess",component:od},{path:"ttt",component:ad},{path:"yellbot",component:hd},{path:"visual",component:Cd}]},{path:"/:pathMatch(.*)",name:"NotFound",component:Ou}]}),qi=fl(Rc);qi.use(Od);qi.mount("#app");
