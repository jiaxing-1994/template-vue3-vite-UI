function t(t,e){const n=Object.create(null),r=t.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const e=t("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt");function n(t){if(_(t)){const e={};for(let r=0;r<t.length;r++){const o=t[r],c=n(y(o)?s(o):o);if(c)for(const t in c)e[t]=c[t]}return e}if(b(t))return t}const r=/;(?![^(]*\))/g,o=/:(.+)/;function s(t){const e={};return t.split(r).forEach((t=>{if(t){const n=t.split(o);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function c(t){let e="";if(y(t))e=t;else if(_(t))for(let n=0;n<t.length;n++){const r=c(t[n]);r&&(e+=r+" ")}else if(b(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const l={},i=[],a=()=>{},u=/^on[^a-z]/,f=t=>u.test(t),p=Object.assign,d=Object.prototype.hasOwnProperty,h=(t,e)=>d.call(t,e),_=Array.isArray,g=t=>"[object Map]"===S(t),v=t=>"function"==typeof t,y=t=>"string"==typeof t,m=t=>"symbol"==typeof t,b=t=>null!==t&&"object"==typeof t,w=Object.prototype.toString,S=t=>w.call(t),x=t=>y(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,R=(t,e)=>t!==e&&(t==t||e==e),C=new WeakMap,k=[];let O;const E=Symbol(""),I=Symbol("");function j(t,e=l){(function(t){return t&&!0===t._isEffect})(t)&&(t=t.raw);const n=function(t,e){const n=function(){if(!n.active)return t();if(!k.includes(n)){F(n);try{return P.push(M),M=!0,k.push(n),O=n,t()}finally{k.pop(),z(),O=k[k.length-1]}}};return n.id=$++,n.allowRecurse=!!e.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=t,n.deps=[],n.options=e,n}(t,e);return e.lazy||n(),n}let $=0;function F(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let M=!0;const P=[];function N(){P.push(M),M=!1}function z(){const t=P.pop();M=void 0===t||t}function A(t,e,n){if(!M||void 0===O)return;let r=C.get(t);r||C.set(t,r=new Map);let o=r.get(n);o||r.set(n,o=new Set),o.has(O)||(o.add(O),O.deps.push(o))}function U(t,e,n,r,o,s){const c=C.get(t);if(!c)return;const l=new Set,i=t=>{t&&t.forEach((t=>{(t!==O||t.allowRecurse)&&l.add(t)}))};if("clear"===e)c.forEach(i);else if("length"===n&&_(t))c.forEach(((t,e)=>{("length"===e||e>=r)&&i(t)}));else switch(void 0!==n&&i(c.get(n)),e){case"add":_(t)?x(n)&&i(c.get("length")):(i(c.get(E)),g(t)&&i(c.get(I)));break;case"delete":_(t)||(i(c.get(E)),g(t)&&i(c.get(I)));break;case"set":g(t)&&i(c.get(E))}l.forEach((t=>{t.options.scheduler?t.options.scheduler(t):t()}))}const W=t("__proto__,__v_isRef,__isVue"),T=new Set(Object.getOwnPropertyNames(Symbol).map((t=>Symbol[t])).filter(m)),B=J(),V=J(!1,!0),D=J(!0),K=J(!0,!0),H={};function J(t=!1,e=!1){return function(n,r,o){if("__v_isReactive"===r)return!t;if("__v_isReadonly"===r)return t;if("__v_raw"===r&&o===(t?e?bt:mt:e?yt:vt).get(n))return n;const s=_(n);if(!t&&s&&h(H,r))return Reflect.get(H,r,o);const c=Reflect.get(n,r,o);if(m(r)?T.has(r):W(r))return c;if(t||A(n,0,r),e)return c;if(It(c)){return!s||!x(r)?c.value:c}return b(c)?t?xt(c):St(c):c}}["includes","indexOf","lastIndexOf"].forEach((t=>{const e=Array.prototype[t];H[t]=function(...t){const n=Et(this);for(let e=0,o=this.length;e<o;e++)A(n,0,e+"");const r=e.apply(n,t);return-1===r||!1===r?e.apply(n,t.map(Et)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{const e=Array.prototype[t];H[t]=function(...t){N();const n=e.apply(this,t);return z(),n}}));function L(t=!1){return function(e,n,r,o){let s=e[n];if(!t&&(r=Et(r),s=Et(s),!_(e)&&It(s)&&!It(r)))return s.value=r,!0;const c=_(e)&&x(n)?Number(n)<e.length:h(e,n),l=Reflect.set(e,n,r,o);return e===Et(o)&&(c?R(r,s)&&U(e,"set",n,r):U(e,"add",n,r)),l}}const q={get:B,set:L(),deleteProperty:function(t,e){const n=h(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&U(t,"delete",e,void 0),r},has:function(t,e){const n=Reflect.has(t,e);return m(e)&&T.has(e)||A(t,0,e),n},ownKeys:function(t){return A(t,0,_(t)?"length":E),Reflect.ownKeys(t)}},G={get:D,set:(t,e)=>!0,deleteProperty:(t,e)=>!0};p({},q,{get:V,set:L(!0)}),p({},G,{get:K});const Q=t=>b(t)?St(t):t,X=t=>b(t)?xt(t):t,Y=t=>t,Z=t=>Reflect.getPrototypeOf(t);function tt(t,e,n=!1,r=!1){const o=Et(t=t.__v_raw),s=Et(e);e!==s&&!n&&A(o,0,e),!n&&A(o,0,s);const{has:c}=Z(o),l=r?Y:n?X:Q;return c.call(o,e)?l(t.get(e)):c.call(o,s)?l(t.get(s)):void(t!==o&&t.get(e))}function et(t,e=!1){const n=this.__v_raw,r=Et(n),o=Et(t);return t!==o&&!e&&A(r,0,t),!e&&A(r,0,o),t===o?n.has(t):n.has(t)||n.has(o)}function nt(t,e=!1){return t=t.__v_raw,!e&&A(Et(t),0,E),Reflect.get(t,"size",t)}function rt(t){t=Et(t);const e=Et(this);return Z(e).has.call(e,t)||(e.add(t),U(e,"add",t,t)),this}function ot(t,e){e=Et(e);const n=Et(this),{has:r,get:o}=Z(n);let s=r.call(n,t);s||(t=Et(t),s=r.call(n,t));const c=o.call(n,t);return n.set(t,e),s?R(e,c)&&U(n,"set",t,e):U(n,"add",t,e),this}function st(t){const e=Et(this),{has:n,get:r}=Z(e);let o=n.call(e,t);o||(t=Et(t),o=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return o&&U(e,"delete",t,void 0),s}function ct(){const t=Et(this),e=0!==t.size,n=t.clear();return e&&U(t,"clear",void 0,void 0),n}function lt(t,e){return function(n,r){const o=this,s=o.__v_raw,c=Et(s),l=e?Y:t?X:Q;return!t&&A(c,0,E),s.forEach(((t,e)=>n.call(r,l(t),l(e),o)))}}function it(t,e,n){return function(...r){const o=this.__v_raw,s=Et(o),c=g(s),l="entries"===t||t===Symbol.iterator&&c,i="keys"===t&&c,a=o[t](...r),u=n?Y:e?X:Q;return!e&&A(s,0,i?I:E),{next(){const{value:t,done:e}=a.next();return e?{value:t,done:e}:{value:l?[u(t[0]),u(t[1])]:u(t),done:e}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return"delete"!==t&&this}}const ut={get(t){return tt(this,t)},get size(){return nt(this)},has:et,add:rt,set:ot,delete:st,clear:ct,forEach:lt(!1,!1)},ft={get(t){return tt(this,t,!1,!0)},get size(){return nt(this)},has:et,add:rt,set:ot,delete:st,clear:ct,forEach:lt(!1,!0)},pt={get(t){return tt(this,t,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:lt(!0,!1)},dt={get(t){return tt(this,t,!0,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:lt(!0,!0)};function ht(t,e){const n=e?t?dt:ft:t?pt:ut;return(e,r,o)=>"__v_isReactive"===r?!t:"__v_isReadonly"===r?t:"__v_raw"===r?e:Reflect.get(h(n,r)&&r in e?n:e,r,o)}["keys","values","entries",Symbol.iterator].forEach((t=>{ut[t]=it(t,!1,!1),pt[t]=it(t,!0,!1),ft[t]=it(t,!1,!0),dt[t]=it(t,!0,!0)}));const _t={get:ht(!1,!1)},gt={get:ht(!0,!1)},vt=new WeakMap,yt=new WeakMap,mt=new WeakMap,bt=new WeakMap;function wt(t){return t.__v_skip||!Object.isExtensible(t)?0:function(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((t=>S(t).slice(8,-1))(t))}function St(t){return t&&t.__v_isReadonly?t:Rt(t,!1,q,_t,vt)}function xt(t){return Rt(t,!0,G,gt,mt)}function Rt(t,e,n,r,o){if(!b(t))return t;if(t.__v_raw&&(!e||!t.__v_isReactive))return t;const s=o.get(t);if(s)return s;const c=wt(t);if(0===c)return t;const l=new Proxy(t,2===c?r:n);return o.set(t,l),l}function Ct(t){return kt(t)?Ct(t.__v_raw):!(!t||!t.__v_isReactive)}function kt(t){return!(!t||!t.__v_isReadonly)}function Ot(t){return Ct(t)||kt(t)}function Et(t){return t&&Et(t.__v_raw)||t}function It(t){return Boolean(t&&!0===t.__v_isRef)}function jt(t,e,n,r){let o;try{o=r?t(...r):t()}catch(s){Ft(s,e,n)}return o}function $t(t,e,n,r){if(v(t)){const s=jt(t,e,n,r);return s&&(b(o=s)&&v(o.then)&&v(o.catch))&&s.catch((t=>{Ft(t,e,n)})),s}var o;const s=[];for(let c=0;c<t.length;c++)s.push($t(t[c],e,n,r));return s}function Ft(t,e,n,r=!0){e&&e.vnode;if(e){let r=e.parent;const o=e.proxy,s=n;for(;r;){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,s))return;r=r.parent}const c=e.appContext.config.errorHandler;if(c)return void jt(c,null,10,[t,o,s])}!function(t,e,n,r=!0){console.error(t)}(t,0,0,r)}let Mt=!1,Pt=!1;const Nt=[];let zt=0;const At=[];let Ut=null,Wt=0;const Tt=[];let Bt=null,Vt=0;const Dt=Promise.resolve();let Kt=null,Ht=null;function Jt(t){const e=Kt||Dt;return t?e.then(this?t.bind(this):t):e}function Lt(t){if(!(Nt.length&&Nt.includes(t,Mt&&t.allowRecurse?zt+1:zt)||t===Ht)){const e=function(t){let e=zt+1,n=Nt.length;const r=Xt(t);for(;e<n;){const t=e+n>>>1;Xt(Nt[t])<r?e=t+1:n=t}return e}(t);e>-1?Nt.splice(e,0,t):Nt.push(t),qt()}}function qt(){Mt||Pt||(Pt=!0,Kt=Dt.then(Yt))}function Gt(t,e,n,r){_(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),qt()}function Qt(t,e=null){if(At.length){for(Ht=e,Ut=[...new Set(At)],At.length=0,Wt=0;Wt<Ut.length;Wt++)Ut[Wt]();Ut=null,Wt=0,Ht=null,Qt(t,e)}}const Xt=t=>null==t.id?1/0:t.id;function Yt(t){Pt=!1,Mt=!0,Qt(t),Nt.sort(((t,e)=>Xt(t)-Xt(e)));try{for(zt=0;zt<Nt.length;zt++){const t=Nt[zt];t&&!1!==t.active&&jt(t,null,14)}}finally{zt=0,Nt.length=0,function(t){if(Tt.length){const t=[...new Set(Tt)];if(Tt.length=0,Bt)return void Bt.push(...t);for(Bt=t,Bt.sort(((t,e)=>Xt(t)-Xt(e))),Vt=0;Vt<Bt.length;Vt++)Bt[Vt]();Bt=null,Vt=0}}(),Mt=!1,Kt=null,(Nt.length||At.length||Tt.length)&&Yt(t)}}let Zt=null,te=null;function ee(t){const e=Zt;return Zt=t,te=t&&t.type.__scopeId||null,e}const ne=t=>re;function re(t,e=Zt,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Se(-1);const o=ee(e),s=t(...n);return ee(o),r._d&&Se(1),s};return r._n=!0,r._c=!0,r._d=!0,r}const oe={};function se(t,e,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:c}=l,i=Me){let u,f,p=!1,d=!1;if(It(t)?(u=()=>t.value,p=!!t._shallow):Ct(t)?(u=()=>t,r=!0):_(t)?(d=!0,p=t.some(Ct),u=()=>t.map((t=>It(t)?t.value:Ct(t)?le(t):v(t)?jt(t,i,2):void 0))):u=v(t)?e?()=>jt(t,i,2):()=>{if(!i||!i.isUnmounted)return f&&f(),$t(t,i,3,[h])}:a,e&&r){const t=u;u=()=>le(t())}let h=t=>{f=b.options.onStop=()=>{jt(t,i,4)}},g=d?[]:oe;const y=()=>{if(b.active)if(e){const t=b();(r||p||(d?t.some(((t,e)=>R(t,g[e]))):R(t,g)))&&(f&&f(),$t(e,i,3,[t,g===oe?void 0:g,h]),g=t)}else b()};let m;y.allowRecurse=!!e,m="sync"===o?y:"post"===o?()=>he(y,i&&i.suspense):()=>{!i||i.isMounted?function(t){Gt(t,Ut,At,Wt)}(y):y()};const b=j(u,{lazy:!0,onTrack:s,onTrigger:c,scheduler:m});return function(t,e=Me){e&&(e.effects||(e.effects=[])).push(t)}(b,i),e?n?y():g=b():"post"===o?he(b,i&&i.suspense):b(),()=>{var t;(t=b).active&&(F(t),t.options.onStop&&t.options.onStop(),t.active=!1),i&&((t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)})(i.effects,b)}}function ce(t,e,n){const r=this.proxy,o=y(t)?t.includes(".")?function(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}(r,t):()=>r[t]:t.bind(r,r);let s;return v(e)?s=e:(s=e.handler,n=e),se(o,s.bind(r),n,this)}function le(t,e=new Set){if(!b(t)||e.has(t)||t.__v_skip)return t;if(e.add(t),It(t))le(t.value,e);else if(_(t))for(let n=0;n<t.length;n++)le(t[n],e);else if("[object Set]"===S(t)||g(t))t.forEach((t=>{le(t,e)}));else if((t=>"[object Object]"===S(t))(t))for(const n in t)le(t[n],e);return t}function ie(t,e,n,r=!1){const{mixins:o,extends:s}=e;s&&ie(t,s,n,!0),o&&o.forEach((e=>ie(t,e,n,!0)));for(const c in e)if(r&&"expose"===c);else{const r=ae[c]||n&&n[c];t[c]=r?r(t[c],e[c]):e[c]}return t}const ae={data:ue,props:de,emits:de,methods:de,computed:de,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,destroyed:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:de,directives:de,watch:function(t,e){if(!t)return e;if(!e)return t;const n=p(Object.create(null),t);for(const r in e)n[r]=pe(t[r],e[r]);return n},provide:ue,inject:function(t,e){return de(fe(t),fe(e))}};function ue(t,e){return e?t?function(){return p(v(t)?t.call(this,this):t,v(e)?e.call(this,this):e)}:e:t}function fe(t){if(_(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pe(t,e){return t?[...new Set([].concat(t,e))]:e}function de(t,e){return t?p(p(Object.create(null),t),e):e}const he=function(t,e){e&&e.pendingBranch?_(t)?e.effects.push(...t):e.effects.push(t):Gt(t,Bt,Tt,Vt)},_e=Symbol(),ge=Symbol(void 0),ve=Symbol(void 0),ye=Symbol(void 0),me=[];let be=null;let we=1;function Se(t){we+=t}function xe(t,e,n,r,o){const s=ke(t,e,n,r,o,!0);return s.dynamicChildren=we>0?be||i:null,me.pop(),be=me[me.length-1]||null,we>0&&be&&be.push(s),s}const Re=({key:t})=>null!=t?t:null,Ce=({ref:t})=>null!=t?y(t)||It(t)||v(t)?{i:Zt,r:t}:t:null,ke=function(t,e=null,r=null,o=0,s=null,l=!1){t&&t!==_e||(t=ye);if(i=t,i&&!0===i.__v_isVNode){const n=Oe(t,e,!0);return r&&Ie(n,r),n}var i;(function(t){return v(t)&&"__vccOpts"in t})(t)&&(t=t.__vccOpts);if(e){(Ot(e)||"__vInternal"in e)&&(e=p({},e));let{class:t,style:r}=e;t&&!y(t)&&(e.class=c(t)),b(r)&&(Ot(r)&&!_(r)&&(r=p({},r)),e.style=n(r))}const a=y(t)?1:(t=>t.__isSuspense)(t)?128:(t=>t.__isTeleport)(t)?64:b(t)?4:v(t)?2:0,u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Re(e),ref:e&&Ce(e),scopeId:te,slotScopeIds:null,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null};Ie(u,r),128&a&&t.normalize(u);we>0&&!l&&be&&(o>0||6&a)&&32!==o&&be.push(u);return u};function Oe(t,e,r=!1){const{props:o,ref:s,patchFlag:l,children:i}=t,a=e?function(...t){const e=p({},t[0]);for(let r=1;r<t.length;r++){const o=t[r];for(const t in o)if("class"===t)e.class!==o.class&&(e.class=c([e.class,o.class]));else if("style"===t)e.style=n([e.style,o.style]);else if(f(t)){const n=e[t],r=o[t];n!==r&&(e[t]=n?[].concat(n,r):r)}else""!==t&&(e[t]=o[t])}return e}(o||{},e):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Re(a),ref:e&&e.ref?r&&s?_(s)?s.concat(Ce(e)):[s,Ce(e)]:Ce(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ge?-1===l?16:16|l:l,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Oe(t.ssContent),ssFallback:t.ssFallback&&Oe(t.ssFallback),el:t.el,anchor:t.anchor}}function Ee(t=" ",e=0){return ke(ve,null,t,e)}function Ie(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if(_(e))n=16;else if("object"==typeof e){if(1&r||64&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),Ie(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||"__vInternal"in e?3===r&&Zt&&(1===Zt.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=Zt}}else v(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),64&r?(n=16,e=[Ee(e)]):n=8);t.children=e,t.shapeFlag|=n}const je=t=>t?4&t.vnode.shapeFlag?t.exposed?t.exposed:t.proxy:je(t.parent):null,$e=p(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>je(t.parent),$root:t=>je(t.root),$emit:t=>t.emit,$options:t=>function(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:o,optionsCache:s,config:{optionMergeStrategies:c}}=t.appContext,l=s.get(e);let i;return l?i=l:o.length||n||r?(i={},o.length&&o.forEach((t=>ie(i,t,c,!0))),ie(i,e,c)):i=e,s.set(e,i),i}(t),$forceUpdate:t=>()=>Lt(t.update),$nextTick:t=>Jt.bind(t.proxy),$watch:t=>ce.bind(t)}),Fe={get({_:t},e){const{ctx:n,setupState:r,data:o,props:s,accessCache:c,type:i,appContext:a}=t;let u;if("$"!==e[0]){const i=c[e];if(void 0!==i)switch(i){case 0:return r[e];case 1:return o[e];case 3:return n[e];case 2:return s[e]}else{if(r!==l&&h(r,e))return c[e]=0,r[e];if(o!==l&&h(o,e))return c[e]=1,o[e];if((u=t.propsOptions[0])&&h(u,e))return c[e]=2,s[e];if(n!==l&&h(n,e))return c[e]=3,n[e];c[e]=4}}const f=$e[e];let p,d;return f?("$attrs"===e&&A(t,0,e),f(t)):(p=i.__cssModules)&&(p=p[e])?p:n!==l&&h(n,e)?(c[e]=3,n[e]):(d=a.config.globalProperties,h(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:r,setupState:o,ctx:s}=t;if(o!==l&&h(o,e))o[e]=n;else if(r!==l&&h(r,e))r[e]=n;else if(h(t.props,e))return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:o,propsOptions:s}},c){let i;return void 0!==n[c]||t!==l&&h(t,c)||e!==l&&h(e,c)||(i=s[0])&&h(i,c)||h(r,c)||h($e,c)||h(o.config.globalProperties,c)}};p({},Fe,{get(t,e){if(e!==Symbol.unscopables)return Fe.get(t,e,t)},has:(t,n)=>"_"!==n[0]&&!e(n)});let Me=null;const Pe={name:"demo-component"};te="data-v-9a5a341e";const Ne={class:"demo"};te=null;const ze=ne()(((t,e,n,r,o,s)=>(function(t=!1){me.push(be=t?null:[])}(),xe("div",Ne,"示例组件"))));Pe.render=ze,Pe.__scopeId="data-v-9a5a341e";var Ae={install(t){t.component(Pe.name,Pe)},EgComponent:Pe};export default Ae;