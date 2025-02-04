let e,t,n,r;var i,s,o,a,l,u,h,c,f,d,p,g,m,y,v,w,E,b,_,T,C,I,S,A,x,N,D,R,k,O,L,M,P,U,B,F,V,j,$,q,z,G,K,H,Q,W,Y,X=globalThis,J={},Z={},ee=X.parcelRequire94c2;null==ee&&((ee=function(e){if(e in J)return J[e].exports;if(e in Z){var t=Z[e];delete Z[e];var n={id:e,exports:{}};return J[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){Z[e]=t},X.parcelRequire94c2=ee),(0,ee.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,r=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)r.set(t[n],{baseUrl:e,path:t[n+1]})}}),ee("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["7Gx3W","index.a07e2819.js","LVq70","service-worker.833c79d9.js"]'));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et={},en=et={};function er(){throw Error("setTimeout has not been defined")}function ei(){throw Error("clearTimeout has not been defined")}function es(e){if(y===setTimeout)return setTimeout(e,0);if((y===er||!y)&&setTimeout)return y=setTimeout,setTimeout(e,0);try{return y(e,0)}catch(t){try{return y.call(null,e,0)}catch(t){return y.call(this,e,0)}}}!function(){try{y="function"==typeof setTimeout?setTimeout:er}catch(e){y=er}try{v="function"==typeof clearTimeout?clearTimeout:ei}catch(e){v=ei}}();var eo=[],ea=!1,el=-1;function eu(){ea&&w&&(ea=!1,w.length?eo=w.concat(eo):el=-1,eo.length&&eh())}function eh(){if(!ea){var e=es(eu);ea=!0;for(var t=eo.length;t;){for(w=eo,eo=[];++el<t;)w&&w[el].run();el=-1,t=eo.length}w=null,ea=!1,function(e){if(v===clearTimeout)return clearTimeout(e);if((v===ei||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(e);try{v(e)}catch(t){try{return v.call(null,e)}catch(t){return v.call(this,e)}}}(e)}}function ec(e,t){this.fun=e,this.array=t}function ef(){}en.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];eo.push(new ec(e,t)),1!==eo.length||ea||es(eh)},ec.prototype.run=function(){this.fun.apply(null,this.array)},en.title="browser",en.browser=!0,en.env={},en.argv=[],en.version="",en.versions={},en.on=ef,en.addListener=ef,en.once=ef,en.off=ef,en.removeListener=ef,en.removeAllListeners=ef,en.emit=ef,en.prependListener=ef,en.prependOnceListener=ef,en.listeners=function(e){return[]},en.binding=function(e){throw Error("process.binding is not supported")},en.cwd=function(){return"/"},en.chdir=function(e){throw Error("process.chdir is not supported")},en.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},ep=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,h=(3&i)<<4|o>>4,c=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(c=64)),r.push(n[u],n[h],n[c],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ed(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ep(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,a=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new em;let l=i<<2|s>>4;if(r.push(l),64!==o){let e=s<<4&240|o>>2;if(r.push(e),64!==a){let e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class em extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ey=function(e){let t=ed(e);return eg.encodeByteArray(t,!0)},ev=function(e){return ey(e).replace(/\./g,"")},ew=function(e){try{return eg.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},eE=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==X)return X;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,eb=()=>{if(void 0===et||void 0===et.env)return;let e=void 0;if(e)return JSON.parse(e)},e_=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&ew(e[1]);return t&&JSON.parse(t)},eT=()=>{try{return eE()||eb()||e_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},eC=e=>{var t,n;return null===(n=null===(t=eT())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},eI=e=>{let t=eC(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},eS=()=>{var e;return null===(e=eT())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}class ex extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ex.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eN.prototype.create)}}class eN{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(eD,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new ex(r,o,n)}}const eD=/\{\$([^}]+)}/g;function eR(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],s=t[i];if(ek(n)&&ek(s)){if(!eR(n,s))return!1}else if(n!==s)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function ek(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(e){return e&&e._delegate?e._delegate:e}class eL{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new eA;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eM})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=eM){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eM){return this.instances.has(e)}getOptions(e=eM){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===eM?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=eM){return this.component?this.component.multipleInstances?e:eM:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new eP(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eB=[];(i=E||(E={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";const eF={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},eV=E.INFO,ej={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},e$=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=ej[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eq{constructor(e){this.name=e,this._logLevel=eV,this._logHandler=e$,this._userLogHandler=null,eB.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in E))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eF[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...e),this._logHandler(this,E.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...e),this._logHandler(this,E.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,E.INFO,...e),this._logHandler(this,E.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,E.WARN,...e),this._logHandler(this,E.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...e),this._logHandler(this,E.ERROR,...e)}}const ez=(e,t)=>t.some(t=>e instanceof t),eG=new WeakMap,eK=new WeakMap,eH=new WeakMap,eQ=new WeakMap,eW=new WeakMap;let eY={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eK.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eH.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eX(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eX(n){var r;if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(eX(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eG.set(t,e)}).catch(()=>{}),eW.set(t,e),t}(n);if(eQ.has(n))return eQ.get(n);let i="function"==typeof(r=n)?r!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...e){return r.apply(eJ(this),e),eX(eG.get(this))}:function(...e){return eX(r.apply(eJ(this),e))}:function(e,...t){let n=r.call(eJ(this),e,...t);return eH.set(n,e.sort?e.sort():[e]),eX(n)}:(r instanceof IDBTransaction&&function(e){if(eK.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});eK.set(e,t)}(r),ez(r,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(r,eY):r;return i!==n&&(eQ.set(n,i),eW.set(i,n)),i}const eJ=e=>eW.get(e),eZ=["get","getKey","getAll","getAllKeys","count"],e0=["put","add","delete","clear"],e1=new Map;function e2(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(e1.get(t))return e1.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=e0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eZ.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return e1.set(t,s),s}eY={...r=eY,get:(e,t,n)=>e2(e,t)||r.get(e,t,n),has:(e,t)=>!!e2(e,t)||r.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const e5="@firebase/app",e3="0.10.18",e8=new eq("@firebase/app"),e4="[DEFAULT]",e7={[e5]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},e9=new Map,te=new Map,tt=new Map;function tn(e,t){try{e.container.addComponent(t)}catch(n){e8.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function tr(e){let t=e.name;if(tt.has(t))return e8.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(tt.set(t,e),e9.values()))tn(n,e);for(let t of te.values())tn(t,e);return!0}const ti=new eN("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new eL("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}}function to(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:e4,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw ti.create("bad-app-name",{appName:String(i)});if(n||(n=eS()),!n)throw ti.create("no-options");let s=e9.get(i);if(s){if(eR(n,s.options)&&eR(r,s.config))return s;throw ti.create("duplicate-app",{appName:i})}let o=new eU(i);for(let e of tt.values())o.addComponent(e);let a=new ts(n,r,o);return e9.set(i,a),a}function ta(e,t,n){var r;let i=null!==(r=e7[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),e8.warn(e.join(" "));return}tr(new eL(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const tl="firebase-heartbeat-store";let tu=null;function th(){return tu||(tu=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=eX(o);return r&&o.addEventListener("upgradeneeded",e=>{r(eX(o.result),e.oldVersion,e.newVersion,eX(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(tl)}catch(e){console.warn(e)}}}).catch(e=>{throw ti.create("idb-open",{originalErrorMessage:e.message})})),tu}async function tc(e){try{let t=(await th()).transaction(tl),n=await t.objectStore(tl).get(td(e));return await t.done,n}catch(e){if(e instanceof ex)e8.warn(e.message);else{let t=ti.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});e8.warn(t.message)}}}async function tf(e,t){try{let n=(await th()).transaction(tl,"readwrite"),r=n.objectStore(tl);await r.put(t,td(e)),await n.done}catch(e){if(e instanceof ex)e8.warn(e.message);else{let t=ti.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});e8.warn(t.message)}}}function td(e){return`${e.name}!${e.options.appId}`}class tp{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tm(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tg();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){e8.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=tg(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),ty(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ty(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=ev(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return e8.warn(e),""}}}function tg(){return new Date().toISOString().substring(0,10)}class tm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await tc(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return tf(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return tf(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ty(e){return ev(JSON.stringify({version:2,heartbeats:e})).length}tr(new eL("platform-logger",e=>new e6(e),"PRIVATE")),tr(new eL("heartbeat",e=>new tp(e),"PRIVATE")),ta(e5,e3,""),ta(e5,e3,"esm2017"),ta("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ta("firebase","11.2.0","app");var tv="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==X?X:"undefined"!=typeof self?self:{},tw={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+0xd76aa478&0xffffffff;o=s+(i^(t=n+(o<<7&0xffffffff|o>>>25))&(n^i))+r[1]+0xe8c7b756&0xffffffff,o=i+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+r[2]+0x242070db&0xffffffff,o=n+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+r[3]+0xc1bdceee&0xffffffff,o=t+(s^(n=i+(o<<22&0xffffffff|o>>>10))&(i^s))+r[4]+0xf57c0faf&0xffffffff,o=s+(i^(t=n+(o<<7&0xffffffff|o>>>25))&(n^i))+r[5]+0x4787c62a&0xffffffff,o=i+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+r[6]+0xa8304613&0xffffffff,o=n+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+r[7]+0xfd469501&0xffffffff,o=t+(s^(n=i+(o<<22&0xffffffff|o>>>10))&(i^s))+r[8]+0x698098d8&0xffffffff,o=s+(i^(t=n+(o<<7&0xffffffff|o>>>25))&(n^i))+r[9]+0x8b44f7af&0xffffffff,o=i+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+r[10]+0xffff5bb1&0xffffffff,o=n+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+r[11]+0x895cd7be&0xffffffff,o=t+(s^(n=i+(o<<22&0xffffffff|o>>>10))&(i^s))+r[12]+0x6b901122&0xffffffff,o=s+(i^(t=n+(o<<7&0xffffffff|o>>>25))&(n^i))+r[13]+0xfd987193&0xffffffff,o=i+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+r[14]+0xa679438e&0xffffffff,o=n+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+r[15]+0x49b40821&0xffffffff,n=i+(o<<22&0xffffffff|o>>>10),o=t+(i^s&(n^i))+r[1]+0xf61e2562&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^i&(t^n))+r[6]+0xc040b340&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^n&(s^t))+r[11]+0x265e5a51&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(i^s))+r[0]+0xe9b6c7aa&0xffffffff,n=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(n^i))+r[5]+0xd62f105d&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^i&(t^n))+r[10]+0x2441453&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^n&(s^t))+r[15]+0xd8a1e681&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(i^s))+r[4]+0xe7d3fbc8&0xffffffff,n=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(n^i))+r[9]+0x21e1cde6&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^i&(t^n))+r[14]+0xc33707d6&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^n&(s^t))+r[3]+0xf4d50d87&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(i^s))+r[8]+0x455a14ed&0xffffffff,n=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(n^i))+r[13]+0xa9e3e905&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^i&(t^n))+r[2]+0xfcefa3f8&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^n&(s^t))+r[7]+0x676f02d9&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(i^s))+r[12]+0x8d2a4c8a&0xffffffff,o=t+((n=i+(o<<20&0xffffffff|o>>>12))^i^s)+r[5]+0xfffa3942&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^i)+r[8]+0x8771f681&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+r[11]+0x6d9d6122&0xffffffff,o=n+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+r[14]+0xfde5380c&0xffffffff,o=t+((n=i+(o<<23&0xffffffff|o>>>9))^i^s)+r[1]+0xa4beea44&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^i)+r[4]+0x4bdecfa9&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+r[7]+0xf6bb4b60&0xffffffff,o=n+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+r[10]+0xbebfbc70&0xffffffff,o=t+((n=i+(o<<23&0xffffffff|o>>>9))^i^s)+r[13]+0x289b7ec6&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^i)+r[0]+0xeaa127fa&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+r[3]+0xd4ef3085&0xffffffff,o=n+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+r[6]+0x4881d05&0xffffffff,o=t+((n=i+(o<<23&0xffffffff|o>>>9))^i^s)+r[9]+0xd9d4d039&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^i)+r[12]+0xe6db99e5&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+r[15]+0x1fa27cf8&0xffffffff,o=n+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+r[2]+0xc4ac5665&0xffffffff,n=i+(o<<23&0xffffffff|o>>>9),o=t+(i^(n|~s))+r[0]+0xf4292244&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~i))+r[7]+0x432aff97&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~n))+r[14]+0xab9423a7&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(i|~t))+r[5]+0xfc93a039&0xffffffff,n=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(n|~s))+r[12]+0x655b59c3&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~i))+r[3]+0x8f0ccc92&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~n))+r[10]+0xffeff47d&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(i|~t))+r[1]+0x85845dd1&0xffffffff,n=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(n|~s))+r[8]+0x6fa87e4f&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~i))+r[15]+0xfe2ce6e0&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~n))+r[6]+0xa3014314&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(i|~t))+r[13]+0x4e0811a1&0xffffffff,n=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(n|~s))+r[4]+0xf7537e82&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~i))+r[11]+0xbd3af235&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~n))+r[2]+0x2ad7d2bb&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(i|~t))+r[9]+0xeb86d391&0xffffffff,e.g[0]=e.g[0]+t&0xffffffff,e.g[1]=e.g[1]+(i+(o<<21&0xffffffff|o>>>11))&0xffffffff,e.g[2]=e.g[2]+i&0xffffffff,e.g[3]=e.g[3]+s&0xffffffff}function n(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.u=function(e,n){void 0===n&&(n=e.length);for(var r=n-this.blockSize,i=this.B,s=this.h,o=0;o<n;){if(0==s)for(;o<=r;)t(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<n;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){t(this,i),s=0;break}}else for(;o<n;)if(i[s++]=e[o++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=n},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var r,i={};function s(e){var t;return -128<=e&&128>e?(t=function(e){return new n([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)):new n([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return f(o(-e));for(var t=[],r=1,i=0;e>=r;i++)t[i]=e/r|0,r*=0x100000000;return new n(t,0)}var a=s(0),l=s(1),u=s(0x1000000);function h(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function c(e){return -1==e.h}function f(e){for(var t=e.g.length,r=[],i=0;i<t;i++)r[i]=~e.g[i];return new n(r,~e.h).add(l)}function d(e,t){return e.add(f(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function g(e,t){this.g=e,this.h=t}function m(e,t){if(h(t))throw Error("division by zero");if(h(e))return new g(a,a);if(c(e))return t=m(f(e),t),new g(f(t.g),f(t.h));if(c(t))return t=m(e,f(t)),new g(f(t.g),t.h);if(30<e.g.length){if(c(e)||c(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!h(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return t=d(e,i.j(t)),new g(i,t)}for(i=a;0<=e.l(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,r-48),u=(s=o(n)).j(t);c(u)||0<u.l(e);)n-=r,u=(s=o(n)).j(t);h(s)&&(s=l),i=i.add(s),e=d(e,u)}return new g(i,e)}function y(e){for(var t=e.g.length+1,r=[],i=0;i<t;i++)r[i]=e.i(i)<<1|e.i(i-1)>>>31;return new n(r,e.h)}function v(e,t){var r=t>>5;t%=32;for(var i=e.g.length-r,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+r)>>>t|e.i(o+r+1)<<32-t:e.i(o+r);return new n(s,e.h)}(r=n.prototype).m=function(){if(c(this))return-f(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:0x100000000+r)*t,t*=0x100000000}return e},r.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(h(this))return"0";if(c(this))return"-"+f(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,r="";;){var i=m(n,t).g,s=((0<(n=d(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(h(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.l=function(e){return c(e=d(this,e))?-1:+!h(e)},r.abs=function(){return c(this)?f(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,r[s]=a<<16|o}return new n(r,-0x80000000&r[r.length-1]?-1:0)},r.j=function(e){if(h(this)||h(e))return a;if(c(this))return c(e)?f(this).j(f(e)):f(f(this).j(e));if(c(e))return f(this.j(f(e)));if(0>this.l(u)&&0>e.l(u))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,r=[],i=0;i<2*t;i++)r[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,d=65535&this.i(i),g=e.i(s)>>>16,m=65535&e.i(s);r[2*i+2*s]+=d*m,p(r,2*i+2*s),r[2*i+2*s+1]+=l*m,p(r,2*i+2*s+1),r[2*i+2*s+1]+=d*g,p(r,2*i+2*s+1),r[2*i+2*s+2]+=l*g,p(r,2*i+2*s+2)}for(i=0;i<t;i++)r[i]=r[2*i+1]<<16|r[2*i];for(i=t;i<2*t;i++)r[i]=0;return new n(r,0)},r.A=function(e){return m(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)&e.i(i);return new n(r,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)|e.i(i);return new n(r,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)^e.i(i);return new n(r,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,_=tw.Md5=e,n.prototype.add=n.prototype.add,n.prototype.multiply=n.prototype.j,n.prototype.modulo=n.prototype.A,n.prototype.compare=n.prototype.l,n.prototype.toNumber=n.prototype.m,n.prototype.toString=n.prototype.toString,n.prototype.getBits=n.prototype.i,n.fromNumber=o,n.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return f(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+l),n);8>l?(l=o(Math.pow(n,l)),i=i.j(l).add(o(u))):i=(i=i.j(r)).add(o(u))}return i},b=tw.Integer=n}).apply(void 0!==tv?tv:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var tE="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==X?X:"undefined"!=typeof self?self:{},tb={};(function(){var e,t,n,r="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e},i=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof tE&&tE];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var n=i;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in n))break e;n=n[o]}(t=t(s=n[e=e[e.length-1]]))!=s&&null!=t&&r(n,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,n,r,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),n=0,r=!1,(i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var s=s||{},o=this||self;function a(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function u(e,t,n){return e.call.apply(e.bind,arguments)}function h(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function c(e,t,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u:h).apply(null,arguments)}function f(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function d(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function p(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function g(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(a(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function m(e){return/^[\s\xa0]*$/.test(e)}function y(){var e=o.navigator;return e&&(e=e.userAgent)?e:""}function v(e){return v[" "](e),e}v[" "]=function(){};var w=-1!=y().indexOf("Gecko")&&!(-1!=y().toLowerCase().indexOf("webkit")&&-1==y().indexOf("Edge"))&&!(-1!=y().indexOf("Trident")||-1!=y().indexOf("MSIE"))&&-1==y().indexOf("Edge");function E(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function b(e){let t={};for(let n in e)t[n]=e[n];return t}let _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<_.length;t++)n=_[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}var k=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new O,e=>e.reset());class O{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let L,M=!1,P=new class{constructor(){this.h=this.g=null}add(e,t){let n=k.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},U=()=>{let e=o.Promise.resolve(void 0);L=()=>{e.then(B)}};var B=()=>{let e;for(var t;e=null,P.g&&(e=P.g,P.g=P.g.next,P.g||(P.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){o.setTimeout(()=>{throw e},0)}(e)}k.j(t),100>k.h&&(k.h++,t.next=k.g,k.g=t)}M=!1};function F(){this.s=this.s,this.C=this.C}function V(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}F.prototype.s=!1,F.prototype.ma=function(){this.s||(this.s=!0,this.N())},F.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},V.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};o.addEventListener("test",e,t),o.removeEventListener("test",e,t)}catch(e){}return e}();function $(e,t){if(V.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(w){e:{try{v(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$.aa.h.call(this)}}d($,V);var q={2:"touch",3:"pen",4:"mouse"};$.prototype.h=function(){$.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),G=0;function K(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++G,this.da=this.fa=!1}function H(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Q(e){this.src=e,this.g={},this.h=0}function W(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(H(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Y(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}Q.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Y(e,t,r,i);return -1<o?(t=e[o],n||(t.fa=!1)):((t=new K(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var X="closure_lm_"+(1e6*Math.random()|0),J={};function Z(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=er(e);if(a||(e[X]=a=new Q(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function e(t){return en.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)j||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(et(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ee(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[z])W(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(et(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=er(t))?(W(n,e),0==n.h&&(n.src=null,t[X]=null)):H(e)}}}function et(e){return e in J?J[e]:J[e]="on"+e}function en(e,t){if(e.da)e=!0;else{t=new $(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&ee(e),e=n.call(r,t)}return e}function er(e){return(e=e[X])instanceof Q?e:null}var ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function es(e){return"function"==typeof e?e:(e[ei]||(e[ei]=function(t){return e.handleEvent(t)}),e[ei])}function eo(){F.call(this),this.i=new Q(this),this.M=this,this.F=null}function ea(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new V(t,e);else if(t instanceof V)t.target=t.target||e;else{var i=t;R(t=new V(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=el(o,r,!0,t)&&i}if(i=el(o=t.g=e,r,!0,t)&&i,i=el(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=el(o=t.g=n[s],r,!1,t)&&i}function el(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&W(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}function eu(e,t,n){if("function"==typeof e)n&&(e=c(e,n));else if(e&&"function"==typeof e.handleEvent)e=c(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:o.setTimeout(e,t||0)}d(eo,F),eo.prototype[z]=!0,eo.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);else(i=l(i)?!!i.capture:!!i,r=es(r),t&&t[z])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=Y(o=t.g[n],r,i,s))&&(H(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete t.g[n],t.h--))):t&&(t=er(t))&&(n=t.g[n.toString()],t=-1,n&&(t=Y(n,r,i,s)),(r=-1<t?n[t]:null)&&ee(r))}(this,e,t,n,r)},eo.prototype.N=function(){if(eo.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)H(n[r]);delete t.g[e],t.h--}}this.F=null},eo.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},eo.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class eh extends F{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eu(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ec(e){F.call(this),this.h=e,this.g={}}d(ec,F);var ef=[];function ed(e){E(e.g,function(e,t){this.g.hasOwnProperty(t)&&ee(e)},e),e.g={}}ec.prototype.N=function(){ec.aa.N.call(this),ed(this)},ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ep=o.JSON.stringify,eg=o.JSON.parse,em=class{stringify(e){return o.JSON.stringify(e,void 0)}parse(e){return o.JSON.parse(e,void 0)}};function ey(){}function ev(e){return e.h||(e.h=e.i())}function ew(){}ey.prototype.h=null;var eE={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eb(){V.call(this,"d")}function e_(){V.call(this,"c")}d(eb,V),d(e_,V);var eT={},eC=null;function eI(){return eC=eC||new eo}function eS(e){V.call(this,eT.La,e)}function eA(e){let t=eI();ea(t,new eS(t))}function ex(e,t){V.call(this,eT.STAT_EVENT,e),this.stat=t}function eN(e){let t=eI();ea(t,new ex(t,e))}function eD(e,t){V.call(this,eT.Ma,e),this.size=t}function eR(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){e()},t)}function ek(){this.g=!0}function eO(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return ep(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}eT.La="serverreachability",d(eS,V),eT.STAT_EVENT="statevent",d(ex,V),eT.Ma="timingevent",d(eD,V),ek.prototype.xa=function(){this.g=!1},ek.prototype.info=function(){};var eL={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eM={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eP(){}function eU(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ec(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eB}function eB(){this.i=null,this.g="",this.h=!1}d(eP,ey),eP.prototype.g=function(){return new XMLHttpRequest},eP.prototype.i=function(){return{}},t=new eP;var eF={},eV={};function ej(e,t,n){e.L=1,e.v=tn(e4(t)),e.m=n,e.P=!0,e$(e,null)}function e$(e,t){e.F=Date.now(),ez(e),e.A=e4(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),tg(n.i,"t",r),e.C=0,n=e.j.J,e.h=new eB,e.g=t6(e.j,n?t:null,!e.m),0<e.O&&(e.M=new eh(c(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ef[0]=i.toString()),i=ef);for(var s=0;s<i.length;s++){var o=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=es(r),t&&t[z]?t.L(n,r,l(i)?!!i.capture:!!i,s):Z(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=es(r),t&&t[z]?t.K(n,r,l(i)?!!i.capture:!!i,s):Z(t,n,r,!1,i,s)}(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?b(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),eA(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&"type"==c[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function eq(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function ez(e){e.S=Date.now()+e.I,eG(e,e.I)}function eG(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eR(c(e.ba,e),t)}function eK(e){e.B&&(o.clearTimeout(e.B),e.B=null)}function eH(e){0==e.j.G||e.J||tJ(e.j,e)}function eQ(e){eK(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ed(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eW(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||e0(n.h,e))){if(!e.K&&e0(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)tX(n),tj(n);else break e}tQ(n),eN(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=eR(c(n.Za,n),6e3));if(1>=eZ(n.h)&&n.ca){try{n.ca()}catch(e){}n.ca=void 0}}else t0(n,11)}else if((e.K||n.g==e)&&tX(n),!m(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(n.T=a[0],a=a[1],2==n.G){if("c"==a[0]){n.K=a[1],n.ia=a[2];let t=a[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));let i=a[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e1(s,s.h),s.h=null))}if(r.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,tt(r.I,r.D,e))}}if(n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),(r=n).qa=t2(r,r.J?r.ia:null,r.W),e.K){e2(r.h,e);var o=r.L;o&&(e.I=o),e.B&&(eK(e),ez(e)),r.g=e}else tH(r);0<n.i.length&&tq(n)}else"stop"!=a[0]&&"close"!=a[0]||t0(n,7)}else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?t0(n,7):tV(n):"noop"!=a[0]&&n.l&&n.l.ta(a),n.v=0)}}eA(4)}catch(e){}}eU.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tP(e)?t.j():this.Y(e)},eU.prototype.Y=function(e){try{if(e==this.g)e:{let f=tP(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||tU(this.g)))){this.J||4!=f||7==t||(8==t||0>=d?eA(3):eA(2)),eK(this);var n=this.g.Z();this.X=n;t:if(eq(this)){var r=tU(this.g);e="";var i=r.length,s=4==tP(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eQ(this),eH(this);var a="";break t}this.h.i=new o.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(s&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(l)){var h=l;break t}}h=null}if(n=h)eO(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eW(this,n);else{this.o=!1,this.s=3,eN(12),eQ(this),eH(this);break e}}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;)if((e=function(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?eV:isNaN(n=Number(t.substring(n,r)))?eF:(r+=1)+n>t.length?eV:(t=t.slice(r,r+n),e.C=r+n,t)}(this,a))==eV){4==f&&(this.s=4,eN(14),n=!1),eO(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eF){this.s=4,eN(15),eO(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}else eO(this.i,this.l,e,null),eW(this,e);if(eq(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=a.length||this.h.h||(this.s=1,eN(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tW(c),c.M=!0,eN(11))}}else eO(this.i,this.l,a,"[Invalid Chunked Response]"),eQ(this),eH(this)}else eO(this.i,this.l,a,null),eW(this,a);4==f&&eQ(this),this.o&&!this.J&&(4==f?tJ(this.j,this):(this.o=!1,ez(this)))}else(function(e){let t={};e=(e.g&&2<=tP(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(m(e[r]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,eN(12)):(this.s=0,eN(13)),eQ(this),eH(this)}}}catch(e){}finally{}},eU.prototype.cancel=function(){this.J=!0,eQ(this)},eU.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(eA(),eN(17)),eQ(this),this.s=2,eH(this)):eG(this,this.S-e)};var eY=class{constructor(e,t){this.g=e,this.map=t}};function eX(e){this.l=e||10,e=o.PerformanceNavigationTiming?0<(e=o.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eJ(e){return!!e.h||!!e.g&&e.g.size>=e.j}function eZ(e){return e.h?1:e.g?e.g.size:0}function e0(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e1(e,t){e.g?e.g.add(t):e.h=t}function e2(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e6(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return p(e.i)}function e5(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(a(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(a(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(a(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}eX.prototype.cancel=function(){if(this.i=e6(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e3=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e8(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e8){this.h=e.h,e7(this,e.j),this.o=e.o,this.g=e.g,e9(this,e.s),this.l=e.l;var t=e.i,n=new tc;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),te(this,n),this.m=e.m}else e&&(t=String(e).match(e3))?(this.h=!1,e7(this,t[1]||"",!0),this.o=tr(t[2]||""),this.g=tr(t[3]||"",!0),e9(this,t[4]),this.l=tr(t[5]||"",!0),te(this,t[6]||"",!0),this.m=tr(t[7]||"")):(this.h=!1,this.i=new tc(null,this.h))}function e4(e){return new e8(e)}function e7(e,t,n){e.j=n?tr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function e9(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function te(e,t,n){var r,i;t instanceof tc?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tf(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(td(this,t),tg(this,n,e))},r)),r.j=i):(n||(t=ti(t,tu)),e.i=new tc(t,e.h))}function tt(e,t,n){e.i.set(t,n)}function tn(e){return tt(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function tr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ti(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ts),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ts(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e8.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ti(t,to,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ti(t,to,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ti(n,"/"==n.charAt(0)?tl:ta,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",ti(n,th)),e.join("")};var to=/[#\/\?@]/g,ta=/[#\?:]/g,tl=/[#\?]/g,tu=/[#\?@]/g,th=/#/g;function tc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tf(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function td(e,t){tf(e),t=tm(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tp(e,t){return tf(e),t=tm(e,t),e.g.has(t)}function tg(e,t,n){td(e,t),0<n.length&&(e.i=null,e.g.set(tm(e,t),p(n)),e.h+=n.length)}function tm(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ty(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(e){}}function tv(){this.g=new em}function tw(e){this.l=e.Ub||null,this.j=e.eb||!1}function t_(e,t){eo.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tT(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tC(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tI(e)}function tI(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tS(e){let t="";return E(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function tA(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tS(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tt(e,t,n))}function tx(e){eo.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(n=tc.prototype).add=function(e,t){tf(this),this.i=null,e=tm(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},n.forEach=function(e,t){tf(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},n.na=function(){tf(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},n.V=function(e){tf(this);let t=[];if("string"==typeof e)tp(this,e)&&(t=t.concat(this.g.get(tm(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},n.set=function(e,t){return tf(this),this.i=null,tp(this,e=tm(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},d(tw,ey),tw.prototype.g=function(){return new t_(this.l,this.j)},tw.prototype.i=(e={},function(){return e}),d(t_,eo),(n=t_.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tI(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||o).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tC(this)),this.readyState=0},n.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tI(this)),this.g&&(this.readyState=3,tI(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==o.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tT(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},n.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tC(this):tI(this),3==this.readyState&&tT(this)}},n.Ra=function(e){this.g&&(this.response=this.responseText=e,tC(this))},n.Qa=function(e){this.g&&(this.response=e,tC(this))},n.ga=function(){this.g&&tC(this)},n.setRequestHeader=function(e,t){this.u.append(e,t)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(t_.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),d(tx,eo);var tN=/^https?$/i,tD=["POST","PUT"];function tR(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tk(e),tL(e)}function tk(e){e.A||(e.A=!0,ea(e,"complete"),ea(e,"error"))}function tO(e){if(e.h&&void 0!==s&&(!e.v[1]||4!=tP(e)||2!=e.Z())){if(e.u&&4==tP(e))eu(e.Ea,0,e);else if(ea(e,"readystatechange"),4==tP(e)){e.h=!1;try{let s=e.Z();switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break;default:r=!1}if(!(t=r)){if(n=0===s){var i=String(e.D).match(e3)[1]||null;!i&&o.self&&o.self.location&&(i=o.self.location.protocol.slice(0,-1)),n=!tN.test(i?i.toLowerCase():"")}t=n}if(t)ea(e,"complete"),ea(e,"success");else{e.m=6;try{var a=2<tP(e)?e.g.statusText:""}catch(e){a=""}e.l=a+" ["+e.Z()+"]",tk(e)}}finally{tL(e)}}}}function tL(e,t){if(e.g){tM(e);let n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||ea(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function tM(e){e.I&&(o.clearTimeout(e.I),e.I=null)}function tP(e){return e.g?e.g.readyState:0}function tU(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tB(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function tF(e){this.Aa=0,this.i=[],this.j=new ek,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tB("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tB("baseRetryDelayMs",5e3,e),this.cb=tB("retryDelaySeedMs",1e4,e),this.Wa=tB("forwardChannelMaxRetries",2,e),this.wa=tB("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new eX(e&&e.concurrentRequestLimit),this.Da=new tv,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tV(e){if(t$(e),3==e.G){var t=e.U++,n=e4(e.I);if(tt(n,"SID",e.K),tt(n,"RID",t),tt(n,"TYPE","terminate"),tG(e,n),(t=new eU(e,e.j,t)).L=2,t.v=tn(e4(n)),n=!1,o.navigator&&o.navigator.sendBeacon)try{n=o.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&o.Image&&((new Image).src=t.v,n=!0),n||(t.g=t6(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ez(t)}t1(e)}function tj(e){e.g&&(tW(e),e.g.cancel(),e.g=null)}function t$(e){tj(e),e.u&&(o.clearTimeout(e.u),e.u=null),tX(e),e.h.cancel(),e.s&&("number"==typeof e.s&&o.clearTimeout(e.s),e.s=null)}function tq(e){if(!eJ(e.h)&&!e.s){e.s=!0;var t=e.Ga;L||U(),M||(L(),M=!0),P.add(t,e),e.B=0}}function tz(e,t){var n;n=t?t.l:e.U++;let r=e4(e.I);tt(r,"SID",e.K),tt(r,"RID",n),tt(r,"AID",e.T),tG(e,r),e.m&&e.o&&tA(r,e.m,e.o),n=new eU(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tK(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e1(e.h,n),ej(n,r,t)}function tG(e,t){e.H&&E(e.H,function(e,n){tt(t,n,e)}),e.l&&e5({},function(e,n){tt(t,n,e)})}function tK(e,t,n){n=Math.min(e.i.length,n);var r=e.l?c(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g,a=i[o].map;if(0>(n-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,n){let r=n||"";try{e5(e,function(e,n){let i=e;l(e)&&(i=ep(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tH(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;L||U(),M||(L(),M=!0),P.add(t,e),e.v=0}}function tQ(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eR(c(e.Fa,e),tZ(e,e.v)),e.v++,!0)}function tW(e){null!=e.A&&(o.clearTimeout(e.A),e.A=null)}function tY(e){e.g=new eU(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=e4(e.qa);tt(t,"RID","rpc"),tt(t,"SID",e.K),tt(t,"AID",e.T),tt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&tt(t,"TO",e.ja),tt(t,"TYPE","xmlhttp"),tG(e,t),e.m&&e.o&&tA(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=tn(e4(t)),n.m=null,n.P=!0,e$(n,e)}function tX(e){null!=e.C&&(o.clearTimeout(e.C),e.C=null)}function tJ(e,t){var n=null;if(e.g==t){tX(e),tW(e),e.g=null;var r=2}else{if(!e0(e.h,t))return;n=t.D,e2(e.h,t),r=1}if(0!=e.G){if(t.o){if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;ea(r=eI(),new eD(r,n)),tq(e)}else tH(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==r&&(i=t,!(eZ(e.h)>=e.h.j-+!!e.s)&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eR(c(e.Ga,e,i),tZ(e,e.B)),e.B++,!0)))||2==r&&tQ(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),s){case 1:t0(e,5);break;case 4:t0(e,10);break;case 3:t0(e,6);break;default:t0(e,2)}}}function tZ(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function t0(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.fb,e),r=e.Xa;let t=!r;r=new e8(r||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||e7(r,"https"),tn(r),t?function(e,t){let n=new ek;if(o.Image){let r=new Image;r.onload=f(ty,n,"TestLoadImage: loaded",!0,t,r),r.onerror=f(ty,n,"TestLoadImage: error",!1,t,r),r.onabort=f(ty,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=f(ty,n,"TestLoadImage: timeout",!1,t,r),o.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){let n=new ek,r=new AbortController,i=setTimeout(()=>{r.abort(),ty(n,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(i),e.ok?ty(n,"TestPingServer: ok",!0,t):ty(n,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),ty(n,"TestPingServer: error",!1,t)})}(r.toString(),n)}else eN(2);e.G=0,e.l&&e.l.sa(t),t1(e),t$(e)}function t1(e){if(e.G=0,e.ka=[],e.l){let t=e6(e.h);(0!=t.length||0!=e.i.length)&&(g(e.ka,t),g(e.ka,e.i),e.h.i.length=0,p(e.i),e.i.length=0),e.l.ra()}}function t2(e,t,n){var r=n instanceof e8?e4(n):new e8(n);if(""!=r.g)t&&(r.g=t+"."+r.g),e9(r,r.s);else{var i=o.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new e8(null);r&&e7(s,r),t&&(s.g=t),i&&e9(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.ya,n&&t&&tt(r,n,t),tt(r,"VER",e.la),tG(e,r),r}function t6(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tx(e.Ca&&!e.pa?new tw({eb:n}):e.pa)).Ha(e.J),t}function t5(){}function t3(){}function t8(e,t){eo.call(this),this.g=new tF(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!m(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!m(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t9(this)}function t4(e){eb.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t7(){e_.call(this),this.status=1}function t9(e){this.g=e}(n=tx.prototype).Ha=function(e){this.J=e},n.ea=function(e,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);n=n?n.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?ev(this.o):ev(t),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(n,String(e),!0),this.B=!1}catch(e){tR(this,e);return}if(e=r||"",r=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)r.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())r.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,a]of(i=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),s=o.FormData&&e instanceof o.FormData,!(0<=Array.prototype.indexOf.call(tD,n,void 0))||i||s||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(t,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tM(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tR(this,e)}},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,ea(this,"complete"),ea(this,"abort"),tL(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tL(this,!0)),tx.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tO(this):this.bb())},n.bb=function(){tO(this)},n.isActive=function(){return!!this.g},n.Z=function(){try{return 2<tP(this)?this.g.status:-1}catch(e){return -1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),eg(t)}},n.Ba=function(){return this.m},n.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(n=tF.prototype).la=8,n.G=1,n.connect=function(e,t,n,r){eN(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=t2(this,null,this.W),tq(this)},n.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new eU(this,this.j,e),s=this.o;if(this.S&&(s?R(s=b(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tK(this,i,t),tt(n=e4(this.I),"RID",e),tt(n,"CVER",22),this.D&&tt(n,"X-HTTP-Session-Id",this.D),tG(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(tS(s)))+"&"+t:this.m&&tA(n,this.m,s)),e1(this.h,i),this.Ua&&tt(n,"TYPE","init"),this.P?(tt(n,"$req",t),tt(n,"SID","null"),i.T=!0,ej(i,n,null)):ej(i,n,t),this.G=2}}else 3==this.G&&(e?tz(this,e):0==this.i.length||eJ(this.h)||tz(this))}},n.Fa=function(){if(this.u=null,tY(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eR(c(this.ab,this),e)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eN(10),tj(this),tY(this))},n.Za=function(){null!=this.C&&(this.C=null,tj(this),tQ(this),eN(19))},n.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eN(2)):(this.j.info("Failed to ping google.com"),eN(1))},n.isActive=function(){return!!this.l&&this.l.isActive(this)},(n=t5.prototype).ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){},t3.prototype.g=function(e,t){return new t8(e,t)},d(t8,eo),t8.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t8.prototype.close=function(){tV(this.g)},t8.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ep(e),e=n);t.i.push(new eY(t.Ya++,e)),3==t.G&&tq(t)},t8.prototype.N=function(){this.g.l=null,delete this.j,tV(this.g),delete this.g,t8.aa.N.call(this)},d(t4,eb),d(t7,e_),d(t9,t5),t9.prototype.ua=function(){ea(this.g,"a")},t9.prototype.ta=function(e){ea(this.g,new t4(e))},t9.prototype.sa=function(e){ea(this.g,new t7)},t9.prototype.ra=function(){ea(this.g,"b")},t3.prototype.createWebChannel=t3.prototype.g,t8.prototype.send=t8.prototype.o,t8.prototype.open=t8.prototype.m,t8.prototype.close=t8.prototype.close,D=tb.createWebChannelTransport=function(){return new t3},N=tb.getStatEventTarget=function(){return eI()},x=tb.Event=eT,A=tb.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eL.NO_ERROR=0,eL.TIMEOUT=8,eL.HTTP_ERROR=6,S=tb.ErrorCode=eL,eM.COMPLETE="complete",I=tb.EventType=eM,ew.EventType=eE,eE.OPEN="a",eE.CLOSE="b",eE.ERROR="c",eE.MESSAGE="d",eo.prototype.listen=eo.prototype.K,C=tb.WebChannel=ew,tb.FetchXmlHttpFactory=tw,tx.prototype.listenOnce=tx.prototype.L,tx.prototype.getLastError=tx.prototype.Ka,tx.prototype.getLastErrorCode=tx.prototype.Ba,tx.prototype.getStatus=tx.prototype.Z,tx.prototype.getResponseJson=tx.prototype.Oa,tx.prototype.getResponseText=tx.prototype.oa,tx.prototype.send=tx.prototype.ea,tx.prototype.setWithCredentials=tx.prototype.Ha,T=tb.XhrIo=tx}).apply(void 0!==tE?tE:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),R=function(e){var t,n,r=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");-1===n&&(n=t);var r=n===t?0:4-n%4;return[n,r]}(e),i=r[0],s=r[1],o=new tC((i+s)*3/4-s),a=0,l=s>0?i-4:i;for(n=0;n<l;n+=4)t=tT[e.charCodeAt(n)]<<18|tT[e.charCodeAt(n+1)]<<12|tT[e.charCodeAt(n+2)]<<6|tT[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;return 2===s&&(t=tT[e.charCodeAt(n)]<<2|tT[e.charCodeAt(n+1)]>>4,o[a++]=255&t),1===s&&(t=tT[e.charCodeAt(n)]<<10|tT[e.charCodeAt(n+1)]<<4|tT[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t),o},k=function(e){for(var t,n=e.length,r=n%3,i=[],s=0,o=n-r;s<o;s+=16383)i.push(function(e,t,n){for(var r,i=[],s=t;s<n;s+=3)i.push(t_[(r=(e[s]<<16&0xff0000)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+t_[r>>12&63]+t_[r>>6&63]+t_[63&r]);return i.join("")}(e,s,s+16383>o?o:s+16383));return 1===r?i.push(t_[(t=e[n-1])>>2]+t_[t<<4&63]+"=="):2===r&&i.push(t_[(t=(e[n-2]<<8)+e[n-1])>>10]+t_[t>>4&63]+t_[t<<2&63]+"="),i.join("")};for(var t_=[],tT=[],tC="undefined"!=typeof Uint8Array?Uint8Array:Array,tI="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",tS=0,tA=tI.length;tS<tA;++tS)t_[tS]=tI[tS],tT[tI.charCodeAt(tS)]=tS;tT["-".charCodeAt(0)]=62,tT["_".charCodeAt(0)]=63,O=function(e,t,n,r,i){var s,o,a=8*i-r-1,l=(1<<a)-1,u=l>>1,h=-7,c=n?i-1:0,f=n?-1:1,d=e[t+c];for(c+=f,s=d&(1<<-h)-1,d>>=-h,h+=a;h>0;s=256*s+e[t+c],c+=f,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=r;h>0;o=256*o+e[t+c],c+=f,h-=8);if(0===s)s=1-u;else{if(s===l)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,r),s-=u}return(d?-1:1)*o*Math.pow(2,s-r)},L=function(e,t,n,r,i,s){var o,a,l,u=8*s-i-1,h=(1<<u)-1,c=h>>1,f=5960464477539062e-23*(23===i),d=r?0:s-1,p=r?1:-1,g=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(a=+!!isNaN(t),o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+c>=1?t+=f/l:t+=f*Math.pow(2,1-c),t*l>=2&&(o++,l/=2),o+c>=h?(a=0,o=h):o+c>=1?(a=(t*l-1)*Math.pow(2,i),o+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;e[n+d]=255&a,d+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[n+d]=255&o,d+=p,o/=256,u-=8);e[n+d-p]|=128*g};const tx="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function tN(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,tD.prototype),t}function tD(e,t,n){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return tO(e)}return tR(e,t,n)}function tR(e,t,n){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!tD.isEncoding(t))throw TypeError("Unknown encoding: "+t);let n=0|tU(e,t),r=tN(n),i=r.write(e,t);return i!==n&&(r=r.slice(0,i)),r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(t8(e,Uint8Array)){let t=new Uint8Array(e);return tM(t.buffer,t.byteOffset,t.byteLength)}return tL(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(t8(e,ArrayBuffer)||e&&t8(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(t8(e,SharedArrayBuffer)||e&&t8(e.buffer,SharedArrayBuffer)))return tM(e,t,n);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return tD.from(r,t,n);let i=function(e){var t;if(tD.isBuffer(e)){let t=0|tP(e.length),n=tN(t);return 0===n.length||e.copy(n,0,0,t),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?tN(0):tL(e):"Buffer"===e.type&&Array.isArray(e.data)?tL(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return tD.from(e[Symbol.toPrimitive]("string"),t,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function tk(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function tO(e){return tk(e),tN(e<0?0:0|tP(e))}function tL(e){let t=e.length<0?0:0|tP(e.length),n=tN(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function tM(e,t,n){let r;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),tD.prototype),r}function tP(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function tU(e,t){if(tD.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||t8(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return t6(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return t5(e).length;default:if(i)return r?-1:t6(e).length;t=(""+t).toLowerCase(),i=!0}}function tB(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||(n>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,n){let r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=t4[e[r]];return i}(this,t,n);case"utf8":case"utf-8":return t$(this,t,n);case"ascii":return function(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}(this,t,n);case"latin1":case"binary":return function(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}(this,t,n);case"base64":var i,s;return i=t,s=n,0===i&&s===this.length?k(this):k(this.slice(i,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,n){let r=e.slice(t,n),i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}(this,t,n);default:if(r)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function tF(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function tV(e,t,n,r,i){var s;if(0===e.length)return -1;if("string"==typeof n?(r=n,n=0):n>0x7fffffff?n=0x7fffffff:n<-0x80000000&&(n=-0x80000000),(s=n=+n)!=s&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return -1;n=e.length-1}else if(n<0){if(!i)return -1;n=0}if("string"==typeof t&&(t=tD.from(t,r)),tD.isBuffer(t))return 0===t.length?-1:tj(e,t,n,r,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):tj(e,[t],n,r,i);throw TypeError("val must be string, number or Buffer")}function tj(e,t,n,r,i){let s,o=1,a=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,n/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let r=-1;for(s=n;s<a;s++)if(u(e,s)===u(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===l)return r*o}else -1!==r&&(s-=s-r),r=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let r=0;r<l;r++)if(u(e,s+r)!==u(t,r)){n=!1;break}if(n)return s}return -1}function t$(e,t,n){n=Math.min(e.length,n);let r=[],i=t;for(;i<n;){let t=e[i],s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:(192&(n=e[i+1]))==128&&(l=(31&t)<<6|63&n)>127&&(s=l);break;case 3:n=e[i+1],r=e[i+2],(192&n)==128&&(192&r)==128&&(l=(15&t)<<12|(63&n)<<6|63&r)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],(192&n)==128&&(192&r)==128&&(192&a)==128&&(l=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}function tq(e,t,n){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>n)throw RangeError("Trying to access beyond buffer length")}function tz(e,t,n,r,i,s){if(!tD.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(n+r>e.length)throw RangeError("Index out of range")}function tG(e,t,n,r,i){tZ(t,r,i,e,n,7);let s=Number(t&BigInt(0xffffffff));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function tK(e,t,n,r,i){tZ(t,r,i,e,n,7);let s=Number(t&BigInt(0xffffffff));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function tH(e,t,n,r,i,s){if(n+r>e.length||n<0)throw RangeError("Index out of range")}function tQ(e,t,n,r,i){return t=+t,n>>>=0,i||tH(e,t,n,4,34028234663852886e22,-34028234663852886e22),L(e,t,n,r,23,4),n+4}function tW(e,t,n,r,i){return t=+t,n>>>=0,i||tH(e,t,n,8,17976931348623157e292,-17976931348623157e292),L(e,t,n,r,52,8),n+8}tD.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),tD.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(tD.prototype,"parent",{enumerable:!0,get:function(){if(tD.isBuffer(this))return this.buffer}}),Object.defineProperty(tD.prototype,"offset",{enumerable:!0,get:function(){if(tD.isBuffer(this))return this.byteOffset}}),tD.poolSize=8192,tD.from=function(e,t,n){return tR(e,t,n)},Object.setPrototypeOf(tD.prototype,Uint8Array.prototype),Object.setPrototypeOf(tD,Uint8Array),tD.alloc=function(e,t,n){return(tk(e),e<=0)?tN(e):void 0!==t?"string"==typeof n?tN(e).fill(t,n):tN(e).fill(t):tN(e)},tD.allocUnsafe=function(e){return tO(e)},tD.allocUnsafeSlow=function(e){return tO(e)},tD.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==tD.prototype},tD.compare=function(e,t){if(t8(e,Uint8Array)&&(e=tD.from(e,e.offset,e.byteLength)),t8(t,Uint8Array)&&(t=tD.from(t,t.offset,t.byteLength)),!tD.isBuffer(e)||!tD.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:+(r<n)},tD.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},tD.concat=function(e,t){let n;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return tD.alloc(0);if(void 0===t)for(n=0,t=0;n<e.length;++n)t+=e[n].length;let r=tD.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){let t=e[n];if(t8(t,Uint8Array))i+t.length>r.length?(tD.isBuffer(t)||(t=tD.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else if(tD.isBuffer(t))t.copy(r,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return r},tD.byteLength=tU,tD.prototype._isBuffer=!0,tD.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)tF(this,t,t+1);return this},tD.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)tF(this,t,t+3),tF(this,t+1,t+2);return this},tD.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)tF(this,t,t+7),tF(this,t+1,t+6),tF(this,t+2,t+5),tF(this,t+3,t+4);return this},tD.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?t$(this,0,e):tB.apply(this,arguments)},tD.prototype.toLocaleString=tD.prototype.toString,tD.prototype.equals=function(e){if(!tD.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===tD.compare(this,e)},tD.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},tx&&(tD.prototype[tx]=tD.prototype.inspect),tD.prototype.compare=function(e,t,n,r,i){if(t8(e,Uint8Array)&&(e=tD.from(e,e.offset,e.byteLength)),!tD.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return -1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,i>>>=0,this===e)return 0;let s=i-r,o=n-t,a=Math.min(s,o),l=this.slice(r,i),u=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==u[e]){s=l[e],o=u[e];break}return s<o?-1:+(o<s)},tD.prototype.includes=function(e,t,n){return -1!==this.indexOf(e,t,n)},tD.prototype.indexOf=function(e,t,n){return tV(this,e,t,n,!0)},tD.prototype.lastIndexOf=function(e,t,n){return tV(this,e,t,n,!1)},tD.prototype.write=function(e,t,n,r){var i,s,o,a,l,u,h,c;if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===n||n>f)&&(n=f),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let d=!1;for(;;)switch(r){case"hex":return function(e,t,n,r){let i;n=Number(n)||0;let s=e.length-n;r?(r=Number(r))>s&&(r=s):r=s;let o=t.length;for(r>o/2&&(r=o/2),i=0;i<r;++i){let r=parseInt(t.substr(2*i,2),16);if(r!=r)break;e[n+i]=r}return i}(this,e,t,n);case"utf8":case"utf-8":return i=t,s=n,t3(t6(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return o=t,a=n,t3(function(e){let t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(e),this,o,a);case"base64":return l=t,u=n,t3(t5(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=t,c=n,t3(function(e,t){let n,r;let i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)r=(n=e.charCodeAt(s))>>8,i.push(n%256),i.push(r);return i}(e,this.length-h),this,h,c);default:if(d)throw TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),d=!0}},tD.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},tD.prototype.slice=function(e,t){let n=this.length;e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);let r=this.subarray(e,t);return Object.setPrototypeOf(r,tD.prototype),r},tD.prototype.readUintLE=tD.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||tq(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},tD.prototype.readUintBE=tD.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||tq(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},tD.prototype.readUint8=tD.prototype.readUInt8=function(e,t){return e>>>=0,t||tq(e,1,this.length),this[e]},tD.prototype.readUint16LE=tD.prototype.readUInt16LE=function(e,t){return e>>>=0,t||tq(e,2,this.length),this[e]|this[e+1]<<8},tD.prototype.readUint16BE=tD.prototype.readUInt16BE=function(e,t){return e>>>=0,t||tq(e,2,this.length),this[e]<<8|this[e+1]},tD.prototype.readUint32LE=tD.prototype.readUInt32LE=function(e,t){return e>>>=0,t||tq(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},tD.prototype.readUint32BE=tD.prototype.readUInt32BE=function(e,t){return e>>>=0,t||tq(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},tD.prototype.readBigUInt64LE=t7(function(e){t0(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&t1(e,this.length-8);let r=t+256*this[++e]+65536*this[++e]+0x1000000*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+0x1000000*n;return BigInt(r)+(BigInt(i)<<BigInt(32))}),tD.prototype.readBigUInt64BE=t7(function(e){t0(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&t1(e,this.length-8);let r=0x1000000*t+65536*this[++e]+256*this[++e]+this[++e],i=0x1000000*this[++e]+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)}),tD.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||tq(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},tD.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||tq(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},tD.prototype.readInt8=function(e,t){return(e>>>=0,t||tq(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},tD.prototype.readInt16LE=function(e,t){e>>>=0,t||tq(e,2,this.length);let n=this[e]|this[e+1]<<8;return 32768&n?0xffff0000|n:n},tD.prototype.readInt16BE=function(e,t){e>>>=0,t||tq(e,2,this.length);let n=this[e+1]|this[e]<<8;return 32768&n?0xffff0000|n:n},tD.prototype.readInt32LE=function(e,t){return e>>>=0,t||tq(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},tD.prototype.readInt32BE=function(e,t){return e>>>=0,t||tq(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},tD.prototype.readBigInt64LE=t7(function(e){t0(e>>>=0,"offset");let t=this[e],n=this[e+7];return(void 0===t||void 0===n)&&t1(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+0x1000000*this[++e])}),tD.prototype.readBigInt64BE=t7(function(e){t0(e>>>=0,"offset");let t=this[e],n=this[e+7];return(void 0===t||void 0===n)&&t1(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(0x1000000*this[++e]+65536*this[++e]+256*this[++e]+n)}),tD.prototype.readFloatLE=function(e,t){return e>>>=0,t||tq(e,4,this.length),O(this,e,!0,23,4)},tD.prototype.readFloatBE=function(e,t){return e>>>=0,t||tq(e,4,this.length),O(this,e,!1,23,4)},tD.prototype.readDoubleLE=function(e,t){return e>>>=0,t||tq(e,8,this.length),O(this,e,!0,52,8)},tD.prototype.readDoubleBE=function(e,t){return e>>>=0,t||tq(e,8,this.length),O(this,e,!1,52,8)},tD.prototype.writeUintLE=tD.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;tz(this,e,t,n,r,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},tD.prototype.writeUintBE=tD.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;tz(this,e,t,n,r,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},tD.prototype.writeUint8=tD.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||tz(this,e,t,1,255,0),this[t]=255&e,t+1},tD.prototype.writeUint16LE=tD.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||tz(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},tD.prototype.writeUint16BE=tD.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||tz(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},tD.prototype.writeUint32LE=tD.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||tz(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},tD.prototype.writeUint32BE=tD.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||tz(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},tD.prototype.writeBigUInt64LE=t7(function(e,t=0){return tG(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),tD.prototype.writeBigUInt64BE=t7(function(e,t=0){return tK(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),tD.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=Math.pow(2,8*n-1);tz(this,e,t,n,r-1,-r)}let i=0,s=1,o=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},tD.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=Math.pow(2,8*n-1);tz(this,e,t,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},tD.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||tz(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},tD.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||tz(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},tD.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||tz(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},tD.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||tz(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},tD.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||tz(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},tD.prototype.writeBigInt64LE=t7(function(e,t=0){return tG(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tD.prototype.writeBigInt64BE=t7(function(e,t=0){return tK(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tD.prototype.writeFloatLE=function(e,t,n){return tQ(this,e,t,!0,n)},tD.prototype.writeFloatBE=function(e,t,n){return tQ(this,e,t,!1,n)},tD.prototype.writeDoubleLE=function(e,t,n){return tW(this,e,t,!0,n)},tD.prototype.writeDoubleBE=function(e,t,n){return tW(this,e,t,!1,n)},tD.prototype.copy=function(e,t,n,r){if(!tD.isBuffer(e))throw TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(r<0)throw RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);let i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},tD.prototype.fill=function(e,t,n,r){let i;if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw TypeError("encoding must be a string");if("string"==typeof r&&!tD.isEncoding(r))throw TypeError("Unknown encoding: "+r);if(1===e.length){let t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw RangeError("Out of range index");if(n<=t)return this;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{let s=tD.isBuffer(e)?e:tD.from(e,r),o=s.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%o]}return this};const tY={};function tX(e,t,n){tY[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function tJ(e){let t="",n=e.length,r=+("-"===e[0]);for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function tZ(e,t,n,r,i,s){if(e>n||e<t){let r;let i="bigint"==typeof t?"n":"";throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(s+1)*8}${i}`:`>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new tY.ERR_OUT_OF_RANGE("value",r,e)}t0(i,"offset"),(void 0===r[i]||void 0===r[i+s])&&t1(i,r.length-(s+1))}function t0(e,t){if("number"!=typeof e)throw new tY.ERR_INVALID_ARG_TYPE(t,"number",e)}function t1(e,t,n){if(Math.floor(e)!==e)throw t0(e,n),new tY.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new tY.ERR_BUFFER_OUT_OF_BOUNDS;throw new tY.ERR_OUT_OF_RANGE(n||"offset",`>= ${+!!n} and <= ${t}`,e)}tX("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tX("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),tX("ERR_OUT_OF_RANGE",function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>0x100000000?i=tJ(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=tJ(i)),i+="n"),r+=` It must be ${t}. Received ${i}`},RangeError);const t2=/[^+/0-9A-Za-z-_]/g;function t6(e,t){let n;t=t||1/0;let r=e.length,i=null,s=[];for(let o=0;o<r;++o){if((n=e.charCodeAt(o))>55295&&n<57344){if(!i){if(n>56319||o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return s}function t5(e){return R(function(e){if((e=(e=e.split("=")[0]).trim().replace(t2,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function t3(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length)&&!(i>=e.length);++i)t[i+n]=e[i];return i}function t8(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}const t4=function(){let e="0123456789abcdef",t=Array(256);for(let n=0;n<16;++n){let r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function t7(e){return"undefined"==typeof BigInt?t9:e}function t9(){throw Error("BigInt not supported")}const ne="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nn="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new eq("@firebase/firestore");function ni(){return nr.logLevel}function ns(e,...t){if(nr.logLevel<=E.DEBUG){let n=t.map(nl);nr.debug(`Firestore (${nn}): ${e}`,...n)}}function no(e,...t){if(nr.logLevel<=E.ERROR){let n=t.map(nl);nr.error(`Firestore (${nn}): ${e}`,...n)}}function na(e,...t){if(nr.logLevel<=E.WARN){let n=t.map(nl);nr.warn(`Firestore (${nn}): ${e}`,...n)}}function nl(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(e="Unexpected state"){let t=`FIRESTORE (${nn}) INTERNAL ASSERTION FAILED: `+e;throw no(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nc extends ex{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class np{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nt.UNAUTHENTICATED))}shutdown(){}}class ng{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nm{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||nu();let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new nf;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nf,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{ns("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(ns("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nf)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(ns("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||nu(),new nd(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||nu(),new nt(e)}}class ny{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class nv{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new ny(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){void 0===this.o||nu();let n=e=>{null!=e.error&&ns("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,ns("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{ns("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):ns("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||nu(),this.R=e.token,new nw(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function n_(e,t){return e<t?-1:+(e>t)}function nT(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{static now(){return nC.fromMillis(Date.now())}static fromDate(e){return nC.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new nC(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new nc(nh.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new nc(nh.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?n_(this.nanoseconds,e.nanoseconds):n_(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{static fromTimestamp(e){return new nI(e)}static min(){return new nI(new nC(0,0))}static max(){return new nI(new nC(0x3afff4417f,0x3b9ac9ff))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,t,n){void 0===t?t=0:t>e.length&&nu(),void 0===n?n=e.length-t:n>e.length-t&&nu(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===nS.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof nS?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=nS.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Math.sign(e.length-t.length)}static compareSegments(e,t){let n=nS.isNumericId(e),r=nS.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?nS.extractNumericId(e).compare(nS.extractNumericId(t)):e<t?-1:+(e>t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return b.fromString(e.substring(4,e.length-2))}}class nA extends nS{construct(e,t,n){return new nA(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new nc(nh.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new nA(t)}static emptyPath(){return new nA([])}}const nx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nN extends nS{construct(e,t,n){return new nN(e,t,n)}static isValidIdentifier(e){return nx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nN.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new nN(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new nc(nh.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new nc(nh.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new nc(nh.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new nc(nh.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nN(t)}static emptyPath(){return new nN([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.path=e}static fromPath(e){return new nD(nA.fromString(e))}static fromName(e){return new nD(nA.fromString(e).popFirst(5))}static empty(){return new nD(nA.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===nA.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return nA.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new nD(new nA(e.slice()))}}class nR{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new nR(nI.min(),nD.empty(),-1)}static max(){return new nR(nI.max(),nD.empty(),-1)}}class nk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nO(e){if(e.code!==nh.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;ns("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&nu(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new nL((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof nL?t:nL.resolve(t)}catch(e){return nL.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):nL.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):nL.reject(t)}static resolve(e){return new nL((t,n)=>{t(e)})}static reject(e){return new nL((t,n)=>{n(e)})}static waitFor(e){return new nL((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=nL.resolve(!1);for(let n of e)t=t.next(e=>e?nL.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new nL((n,r)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new nL((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function nM(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function nU(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nB(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function nF(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function nV(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}nP.oe=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,t){this.comparator=e,this.root=t||nq.EMPTY}insert(e,t){return new nj(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nq.BLACK,null,null))}remove(e){return new nj(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nq.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new n$(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new n$(this.root,e,this.comparator,!1)}getReverseIterator(){return new n$(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new n$(this.root,e,this.comparator,!0)}}class n${constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nq{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:nq.RED,this.left=null!=r?r:nq.EMPTY,this.right=null!=i?i:nq.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new nq(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return nq.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return nq.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,nq.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,nq.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw nu();let e=this.left.check();if(e!==this.right.check())throw nu();return e+ +!this.isRed()}}nq.EMPTY=null,nq.RED=!0,nq.BLACK=!1,nq.EMPTY=new class{constructor(){this.size=0}get key(){throw nu()}get value(){throw nu()}get color(){throw nu()}get left(){throw nu()}get right(){throw nu()}copy(e,t,n,r,i){return this}insert(e,t,n){return new nq(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nz{constructor(e){this.comparator=e,this.data=new nj(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nG(this.data.getIterator())}getIteratorFrom(e){return new nG(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof nz)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new nz(this.comparator);return t.data=e,t}}class nG{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(e){this.fields=e,e.sort(nN.comparator)}static empty(){return new nK([])}unionWith(e){let t=new nz(nN.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new nK(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nT(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nQ{constructor(e){this.binaryString=e}static fromBase64String(e){return new nQ(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new nH("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new nQ(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return n_(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nQ.EMPTY_BYTE_STRING=new nQ("");const nW=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nY(e){if(e||nu(),"string"==typeof e){let t=0,n=nW.exec(e);if(n||nu(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:nX(e.seconds),nanos:nX(e.nanos)}}function nX(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function nJ(e){return"string"==typeof e?nQ.fromBase64String(e):nQ.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nZ(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function n0(e){let t=e.mapValue.fields.__previous_value__;return nZ(t)?n0(t):t}function n1(e){let t=nY(e.mapValue.fields.__local_write_time__.timestampValue);return new nC(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,t,n,r,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class n6{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n6("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof n6&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n5={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function n3(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?nZ(e)?4:ru(e)?0x1fffffffffffff:ra(e)?10:11:nu()}function n8(e,t){if(e===t)return!0;let n=n3(e);if(n!==n3(t))return!1;switch(n){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return n1(e).isEqual(n1(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=nY(e.timestampValue),r=nY(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return nJ(e.bytesValue).isEqual(nJ(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return nX(e.geoPointValue.latitude)===nX(t.geoPointValue.latitude)&&nX(e.geoPointValue.longitude)===nX(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return nX(e.integerValue)===nX(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=nX(e.doubleValue),r=nX(t.doubleValue);return n===r?nU(n)===nU(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return nT(e.arrayValue.values||[],t.arrayValue.values||[],n8);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(nB(n)!==nB(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!n8(n[e],r[e])))return!1;return!0}(e,t);default:return nu()}}function n4(e,t){return void 0!==(e.values||[]).find(e=>n8(e,t))}function n7(e,t){if(e===t)return 0;let n=n3(e),r=n3(t);if(n!==r)return n_(n,r);switch(n){case 0:case 0x1fffffffffffff:return 0;case 1:return n_(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=nX(e.integerValue||e.doubleValue),r=nX(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return n9(e.timestampValue,t.timestampValue);case 4:return n9(n1(e),n1(t));case 5:return n_(e.stringValue,t.stringValue);case 6:return function(e,t){let n=nJ(e),r=nJ(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=n_(n[e],r[e]);if(0!==t)return t}return n_(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=n_(nX(e.latitude),nX(t.latitude));return 0!==n?n:n_(nX(e.longitude),nX(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return re(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;let o=e.fields||{},a=t.fields||{},l=null===(n=o.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,h=n_((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:re(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===n5.mapValue&&t===n5.mapValue)return 0;if(e===n5.mapValue)return 1;if(t===n5.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=n_(r[e],s[e]);if(0!==t)return t;let o=n7(n[r[e]],i[s[e]]);if(0!==o)return o}return n_(r.length,s.length)}(e.mapValue,t.mapValue);default:throw nu()}}function n9(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return n_(e,t);let n=nY(e),r=nY(t),i=n_(n.seconds,r.seconds);return 0!==i?i:n_(n.nanos,r.nanos)}function re(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=n7(n[e],r[e]);if(t)return t}return n_(n.length,r.length)}function rt(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=nY(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?nJ(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,nD.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=rt(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${rt(e.fields[i])}`;return n+"}"}(e.mapValue):nu()}function rn(e){return!!e&&"integerValue"in e}function rr(e){return!!e&&"arrayValue"in e}function ri(e){return!!e&&"nullValue"in e}function rs(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ro(e){return!!e&&"mapValue"in e}function ra(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function rl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return nF(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=rl(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ru(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.value=e}static empty(){return new rh({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!ro(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rl(t)}setAll(e){let t=nN.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=rl(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());ro(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return n8(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ro(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(nF(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new rh(rl(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new rc(e,0,nI.min(),nI.min(),nI.min(),rh.empty(),0)}static newFoundDocument(e,t,n,r){return new rc(e,1,t,nI.min(),n,r,0)}static newNoDocument(e,t){return new rc(e,2,t,nI.min(),nI.min(),rh.empty(),0)}static newUnknownDocument(e,t){return new rc(e,3,t,nI.min(),nI.min(),rh.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(nI.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rh.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rh.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nI.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){this.position=e,this.inclusive=t}}function rd(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(r=s.field.isKeyField()?nD.comparator(nD.fromName(o.referenceValue),n.key):n7(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function rp(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!n8(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{}class ry extends rm{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new rb(e,t,n):"array-contains"===t?new rI(e,n):"in"===t?new rS(e,n):"not-in"===t?new rA(e,n):"array-contains-any"===t?new rx(e,n):new ry(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new r_(e,n):new rT(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(n7(t,this.value)):null!==t&&n3(this.value)===n3(t)&&this.matchesComparison(n7(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return nu()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rv extends rm{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new rv(e,t)}matches(e){return rw(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function rw(e){return"and"===e.op}function rE(e){for(let t of e.filters)if(t instanceof rv)return!1;return!0}class rb extends ry{constructor(e,t,n){super(e,t,n),this.key=nD.fromName(n.referenceValue)}matches(e){let t=nD.comparator(e.key,this.key);return this.matchesComparison(t)}}class r_ extends ry{constructor(e,t){super(e,"in",t),this.keys=rC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rT extends ry{constructor(e,t){super(e,"not-in",t),this.keys=rC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rC(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>nD.fromName(e.referenceValue))}class rI extends ry{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rr(t)&&n4(t.arrayValue,this.value)}}class rS extends ry{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&n4(this.value.arrayValue,t)}}class rA extends ry{constructor(e,t){super(e,"not-in",t)}matches(e){if(n4(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!n4(this.value.arrayValue,t)}}class rx extends ry{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>n4(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function rD(e,t=null,n=[],r=[],i=null,s=null,o=null){return new rN(e,t,n,r,i,s,o)}function rR(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof ry)return t.field.canonicalString()+t.op.toString()+rt(t.value);if(rE(t)&&rw(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>rt(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>rt(e)).join(",")),e.ue=t}return e.ue}function rk(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof ry?n instanceof ry&&t.op===n.op&&t.field.isEqual(n.field)&&n8(t.value,n.value):t instanceof rv?n instanceof rv&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void nu()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rp(e.startAt,t.startAt)&&rp(e.endAt,t.endAt)}function rO(e){return nD.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rM(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function rP(e){if(null===e.ce){let t;e.ce=[];let n=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new nz(nN.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.ce.push(new rg(t,r))}),n.has(nN.keyField().canonicalString())||e.ce.push(new rg(nN.keyField(),r))}return e.ce}function rU(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return rD(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new rg(e.field,t)});let n=e.endAt?new rf(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new rf(e.startAt.position,e.startAt.inclusive):null;return rD(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,rP(e))),e.le}function rB(e,t,n){return new rL(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function rF(e,t){return rk(rU(e),rU(t))&&e.limitType===t.limitType}function rV(e){return`${rR(rU(e))}|lt:${e.limitType}`}function rj(e){var t;let n;return`Query(target=${n=(t=rU(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof ry?`${t.field.canonicalString()} ${t.op} ${rt(t.value)}`:t instanceof rv?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(e=>rt(e)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(e=>rt(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function r$(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):nD.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of rP(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=rd(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,rP(e),t))&&(!e.endAt||!!function(e,t,n){let r=rd(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,rP(e),t))}function rq(e){return(t,n)=>{let r=!1;for(let i of rP(e)){let e=function(e,t,n){let r=e.field.isKeyField()?nD.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?n7(r,i):nu()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return nu()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){nF(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return nV(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rG=new nj(nD.comparator),rK=new nj(nD.comparator);function rH(...e){let t=rK;for(let n of e)t=t.insert(n.key,n);return t}function rQ(e){let t=rK;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function rW(){return new rz(e=>e.toString(),(e,t)=>e.isEqual(t))}const rY=new nj(nD.comparator),rX=new nz(nD.comparator);function rJ(...e){let t=rX;for(let n of e)t=t.add(n);return t}const rZ=new nz(n_);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nU(t)?"-0":t}}function r1(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(){this._=void 0}}function r6(e,t){return e instanceof r9?rn(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class r5 extends r2{}class r3 extends r2{constructor(e){super(),this.elements=e}}function r8(e,t){let n=it(t);for(let t of e.elements)n.some(e=>n8(e,t))||n.push(t);return{arrayValue:{values:n}}}class r4 extends r2{constructor(e){super(),this.elements=e}}function r7(e,t){let n=it(t);for(let t of e.elements)n=n.filter(e=>!n8(e,t));return{arrayValue:{values:n}}}class r9 extends r2{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ie(e){return nX(e.integerValue||e.doubleValue)}function it(e){return rr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class ir{constructor(e,t){this.version=e,this.transformResults=t}}class ii{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ii}static exists(e){return new ii(void 0,e)}static updateTime(e){return new ii(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function is(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class io{}function ia(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new im(e.key,ii.none()):new ih(e.key,e.data,ii.none());{let n=e.data,r=rh.empty(),i=new nz(nN.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new ic(e.key,r,new nK(i.toArray()),ii.none())}}function il(e,t,n,r){return e instanceof ih?function(e,t,n,r){if(!is(e.precondition,t))return n;let i=e.value.clone(),s=ig(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof ic?function(e,t,n,r){if(!is(e.precondition,t))return n;let i=ig(e.fieldTransforms,r,t),s=t.data;return(s.setAll(id(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):is(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function iu(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&nT(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof r3&&r instanceof r3||n instanceof r4&&r instanceof r4?nT(n.elements,r.elements,n8):n instanceof r9&&r instanceof r9?n8(n.Pe,r.Pe):n instanceof r5&&r instanceof r5)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ih extends io{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ic extends io{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function id(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function ip(e,t,n){var r;let i=new Map;e.length===n.length||nu();for(let s=0;s<n.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(r=n[s],a instanceof r3?r8(a,l):a instanceof r4?r7(a,l):r))}return i}function ig(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof r5?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&nZ(t)&&(t=n0(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof r3?r8(e,s):e instanceof r4?r7(e,s):function(e,t){let n=r6(e,t),r=ie(n)+ie(e.Pe);return rn(n)&&rn(e.Pe)?r1(r):r0(e.serializer,r)}(e,s))}return r}class im extends io{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iy extends io{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof ih?function(e,t,n){let r=e.value.clone(),i=ip(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof ic?function(e,t,n){if(!is(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=ip(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(id(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=il(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=il(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=rW();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields),a=ia(s,o=t.has(r.key)?null:o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(nI.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),rJ())}isEqual(e){return this.batchId===e.batchId&&nT(this.mutations,e.mutations,(e,t)=>iu(e,t))&&nT(this.baseMutations,e.baseMutations,(e,t)=>iu(e,t))}}class iw{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||nu();let r=rY,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new iw(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t){this.count=e,this.unchangedNames=t}}function i_(e){if(void 0===e)return no("GRPC error has no .code"),nh.UNKNOWN;switch(e){case M.OK:return nh.OK;case M.CANCELLED:return nh.CANCELLED;case M.UNKNOWN:return nh.UNKNOWN;case M.DEADLINE_EXCEEDED:return nh.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return nh.RESOURCE_EXHAUSTED;case M.INTERNAL:return nh.INTERNAL;case M.UNAVAILABLE:return nh.UNAVAILABLE;case M.UNAUTHENTICATED:return nh.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return nh.INVALID_ARGUMENT;case M.NOT_FOUND:return nh.NOT_FOUND;case M.ALREADY_EXISTS:return nh.ALREADY_EXISTS;case M.PERMISSION_DENIED:return nh.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return nh.FAILED_PRECONDITION;case M.ABORTED:return nh.ABORTED;case M.OUT_OF_RANGE:return nh.OUT_OF_RANGE;case M.UNIMPLEMENTED:return nh.UNIMPLEMENTED;case M.DATA_LOSS:return nh.DATA_LOSS;default:return nu()}}(P=M||(M={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=new b([0xffffffff,0xffffffff],0);function iC(e){let t=(new TextEncoder).encode(e),n=new _;return n.update(t),new Uint8Array(n.digest())}function iI(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new b([n,r],0),new b([i,s],0)]}class iS{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new iA(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new iA(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new iA(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=b.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(b.fromNumber(n)));return 1===r.compare(iT)&&(r=new b([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}Ee(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,n]=iI(iC(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);if(!this.Ee(r))return!1}return!0}static create(e,t,n){let r=new iS(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Te)return;let[t,n]=iI(iC(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);this.Ae(r)}}Ae(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}}class iA extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,iN.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ix(nI.min(),r,new nj(n_),rG,rJ())}}class iN{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new iN(n,t,rJ(),rJ(),rJ())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class iR{constructor(e,t){this.targetId=e,this.me=t}}class ik{constructor(e,t,n=nQ.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class iO{constructor(){this.fe=0,this.ge=iP(),this.pe=nQ.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=rJ(),t=rJ(),n=rJ();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:nu()}}),new iN(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=iP()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||nu()}Ne(){this.we=!0,this.ye=!0}}class iL{constructor(e){this.Be=e,this.Le=new Map,this.ke=rG,this.qe=iM(),this.Qe=iM(),this.Ke=new nj(n_)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.je(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.De(e.resumeToken));break;default:nu()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((e,n)=>{this.je(n)&&t(n)})}Je(e){let t=e.targetId,n=e.me.count,r=this.Ye(t);if(r){let i=r.target;if(rO(i)){if(0===n){let e=new nD(i.path);this.We(t,e,rc.newNoDocument(e,nI.min()))}else 1===n||nu()}else{let r=this.Ze(t);if(r!==n){let n=this.Xe(e),i=n?this.et(n,e,r):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,n;let r=e.me.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=r;try{t=nJ(i).toUint8Array()}catch(e){if(e instanceof nH)return na("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new iS(t,s,o)}catch(e){return na(e instanceof iA?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Te?null:n}et(e,t,n){return 2*(t.me.count!==n-this.rt(e,t.targetId))}rt(e,t){let n=this.Be.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Be.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)}),r}it(e){let t=new Map;this.Le.forEach((n,r)=>{let i=this.Ye(r);if(i){if(n.current&&rO(i.target)){let t=new nD(i.target.path);this.st(t).has(r)||this.ot(r,t)||this.We(r,t,rc.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}});let n=rJ();this.Qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ke.forEach((t,n)=>n.setReadTime(e));let r=new ix(e,t,this.Ke,this.ke,n);return this.ke=rG,this.qe=iM(),this.Qe=iM(),this.Ke=new nj(n_),r}Ue(e,t){if(!this.je(e))return;let n=2*!!this.ot(e,t.key);this.ze(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,n){if(!this.je(e))return;let r=this.ze(e);this.ot(e,t)?r.Fe(t,1):r.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Le.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new iO,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new nz(n_),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new nz(n_),this.qe=this.qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||ns("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new iO),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function iM(){return new nj(nD.comparator)}function iP(){return new nj(nD.comparator)}const iU={asc:"ASCENDING",desc:"DESCENDING"},iB={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iF={and:"AND",or:"OR"};class iV{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ij(e,t){return e.useProto3Json||null==t?t:{value:t}}function i$(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function iq(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function iz(e){return e||nu(),nI.fromTimestamp(function(e){let t=nY(e);return new nC(t.seconds,t.nanos)}(e))}function iG(e,t){return iK(e,t).canonicalString()}function iK(e,t){let n=new nA(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function iH(e){let t=nA.fromString(e);return i2(t)||nu(),t}function iQ(e,t){return iG(e.databaseId,t.path)}function iW(e,t){let n=iH(t);if(n.get(1)!==e.databaseId.projectId)throw new nc(nh.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new nc(nh.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new nD(iJ(n))}function iY(e,t){return iG(e.databaseId,t)}function iX(e){return new nA(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iJ(e){return e.length>4&&"documents"===e.get(4)||nu(),e.popFirst(5)}function iZ(e,t,n){return{name:iQ(e,t),fields:n.value.mapValue.fields}}function i0(e){return{fieldPath:e.canonicalString()}}function i1(e){return nN.fromServerFormat(e.fieldPath)}function i2(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6{constructor(e,t,n,r,i=nI.min(),s=nI.min(),o=nQ.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new i6(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new i6(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new i6(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new i6(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e){this.ht=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(){}dt(e,t){this.Et(e,t),t.At()}Et(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(+!!e.booleanValue);else if("integerValue"in e)this.Rt(t,15),t.Vt(nX(e.integerValue));else if("doubleValue"in e){let n=nX(e.doubleValue);isNaN(n)?this.Rt(t,13):(this.Rt(t,15),nU(n)?t.Vt(0):t.Vt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Rt(t,20),"string"==typeof n&&(n=nY(n)),t.ft(`${n.seconds||""}`),t.Vt(n.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(nJ(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Rt(t,45),t.Vt(n.latitude||0),t.Vt(n.longitude||0)}else"mapValue"in e?ru(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):ra(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):nu()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let n=e.fields||{};for(let e of(this.Rt(t,55),Object.keys(n)))this.gt(e,t),this.Et(n[e],t)}bt(e,t){var n,r;let i=e.fields||{};this.Rt(t,53);let s="value",o=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Rt(t,15),t.Vt(nX(o)),this.gt(s,t),this.Et(i[s],t)}vt(e,t){let n=e.values||[];for(let e of(this.Rt(t,50),n))this.Et(e,t)}St(e,t){this.Rt(t,37),nD.fromName(e).path.forEach(e=>{this.Rt(t,60),this.Ct(e,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}i3.Ft=new i3;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{constructor(){this.ln=new i4}addToCollectionParentIndex(e,t){return this.ln.add(t),nL.resolve()}getCollectionParents(e,t){return nL.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return nL.resolve()}deleteFieldIndex(e,t){return nL.resolve()}deleteAllFieldIndexes(e){return nL.resolve()}createTargetIndexes(e,t){return nL.resolve()}getDocumentsMatchingTarget(e,t){return nL.resolve(null)}getIndexType(e,t){return nL.resolve(0)}getFieldIndexes(e,t){return nL.resolve([])}getNextCollectionGroupToUpdate(e){return nL.resolve(null)}getMinOffset(e,t){return nL.resolve(nR.min())}getMinOffsetFromCollectionGroup(e,t){return nL.resolve(nR.min())}updateCollectionGroup(e,t,n){return nL.resolve()}updateIndexEntries(e,t){return nL.resolve()}}class i4{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new nz(nA.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new nz(nA.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i7={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class i9{static withCacheSize(e){return new i9(e,i9.DEFAULT_COLLECTION_PERCENTILE,i9.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */i9.DEFAULT_COLLECTION_PERCENTILE=10,i9.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,i9.DEFAULT=new i9(0x2800000,i9.DEFAULT_COLLECTION_PERCENTILE,i9.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),i9.DISABLED=new i9(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new se(0)}static Qn(){return new se(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st([e,t],[n,r]){let i=n_(e,n);return 0===i?n_(t,r):i}class sn{constructor(e){this.Gn=e,this.buffer=new nz(st),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>st(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sr{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return null!==this.Jn}Yn(e){ns("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){nM(e)?ns("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await nO(e)}await this.Yn(3e5)})}}class si{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return nL.resolve(nP.oe);let n=new sn(t);return this.Zn.forEachTarget(e,e=>n.Hn(e.sequenceNumber)).next(()=>this.Zn.er(e,e=>n.Hn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(ns("LruGarbageCollector","Garbage collection skipped; disabled"),nL.resolve(i7)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(ns("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),i7):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let n,r,i,s,o,a,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(ns("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),ni()<=E.DEBUG&&ns("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${r} in `+(o-s)+"ms\n"+`	Removed ${i} targets in `+(a-o)+"ms\n"+`	Removed ${e} documents in `+(l-a)+"ms\n"+`Total Duration: ${l-u}ms`),nL.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.changes=new rz(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rc.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?nL.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&il(n.mutation,e,nK.empty(),nC.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,rJ()).next(()=>t))}getLocalViewOfDocuments(e,t,n=rJ()){let r=rW();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=rH();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=rW();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,rJ()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=rG,s=rW(),o=rW();return t.forEach((e,t)=>{let o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof ic)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),il(o.mutation,t,o.mutation.getFieldMask(),nC.now())):s.set(t.key,nK.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new so(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){let n=rW(),r=new nj((e,t)=>e-t),i=rJ();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=n.get(e)||nK.empty();o=i.applyToLocalView(s,o),n.set(e,o);let a=(r.get(i.batchId)||rJ()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{let s=[],o=r.getReverseIterator();for(;o.hasNext();){let r=o.getNext(),a=r.key,l=r.value,u=rW();l.forEach(e=>{if(!i.has(e)){let r=ia(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return nL.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return nD.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):nL.resolve(rW()),o=-1,a=i;return s.next(t=>nL.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?nL.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,rJ())).next(e=>({batchId:o,changes:rQ(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new nD(t)).next(e=>{let t=rH();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=rH();return this.indexManager.getCollectionParents(e,i).next(o=>nL.forEach(o,o=>{let a=new rL(o.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,rc.newInvalidDocument(r)))});let n=rH();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&il(s.mutation,r,nK.empty(),nC.now()),r$(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return nL.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,{id:t.id,version:t.version,createTime:iz(t.createTime)}),nL.resolve()}getNamedQuery(e,t){return nL.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=iH(e);return 4===t.length?nA.emptyPath():iJ(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,o=null;if(s>0){1===s||nu();let e=i.from[0];e.allDescendants?o=e.collectionId:r=r.child(e.collectionId)}let a=[];i.where&&(a=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=i1(e.unaryFilter.field);return ry.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=i1(e.unaryFilter.field);return ry.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=i1(e.unaryFilter.field);return ry.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=i1(e.unaryFilter.field);return ry.create(i,"!=",{nullValue:"NULL_VALUE"});default:return nu()}}(t):void 0!==t.fieldFilter?ry.create(i1(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return nu()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?rv.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return nu()}}(t.compositeFilter.op)):nu()}(e);return n instanceof rv&&rE(t=n)&&rw(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new rg(i1(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new rf(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new rf(e.values||[],t)}(i.endAt)),new rL(r,o,l,a,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?rB(t,t.limit,"L"):t}(t.bundledQuery),readTime:iz(t.readTime)}),nL.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.overlays=new nj(nD.comparator),this.dr=new Map}getOverlay(e,t){return nL.resolve(this.overlays.get(t))}getOverlays(e,t){let n=rW();return nL.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.Tt(e,t,r)}),nL.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.dr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.dr.delete(n)),nL.resolve()}getOverlaysForCollection(e,t,n){let r=rW(),i=t.length+1,s=new nD(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return nL.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new nj((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=rW(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=rW(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return nL.resolve(o)}Tt(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.dr.get(r.largestBatchId).delete(n.key);this.dr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new iE(t,n));let i=this.dr.get(t);void 0===i&&(i=rJ(),this.dr.set(t,i)),this.dr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.sessionToken=nQ.EMPTY_BYTE_STRING}getSessionToken(e){return nL.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,nL.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.Er=new nz(sf.Ar),this.Rr=new nz(sf.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){let n=new sf(e,t);this.Er=this.Er.add(n),this.Rr=this.Rr.add(n)}mr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.gr(new sf(e,t))}pr(e,t){e.forEach(e=>this.removeReference(e,t))}yr(e){let t=new nD(new nA([])),n=new sf(t,e),r=new sf(t,e+1),i=[];return this.Rr.forEachInRange([n,r],e=>{this.gr(e),i.push(e.key)}),i}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new nD(new nA([])),n=new sf(t,e),r=new sf(t,e+1),i=rJ();return this.Rr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new sf(e,0),n=this.Er.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class sf{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return nD.comparator(e.key,t.key)||n_(e.br,t.br)}static Vr(e,t){return n_(e.br,t.br)||nD.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new nz(sf.Ar)}checkEmpty(e){return nL.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new iv(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.vr=this.vr.add(new sf(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return nL.resolve(s)}lookupMutationBatch(e,t){return nL.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Fr(t+1),r=n<0?0:n;return nL.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return nL.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(e){return nL.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new sf(t,0),r=new sf(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([n,r],e=>{let t=this.Cr(e.br);i.push(t)}),nL.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new nz(n_);return t.forEach(e=>{let t=new sf(e,0),r=new sf(e,Number.POSITIVE_INFINITY);this.vr.forEachInRange([t,r],e=>{n=n.add(e.br)})}),nL.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;nD.isDocumentKey(i)||(i=i.child(""));let s=new sf(new nD(i),0),o=new nz(n_);return this.vr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.br)),!0)},s),nL.resolve(this.Mr(o))}Mr(e){let t=[];return e.forEach(e=>{let n=this.Cr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Or(t.batchId,"removed")||nu(),this.mutationQueue.shift();let n=this.vr;return nL.forEach(t.mutations,r=>{let i=new sf(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=n})}Bn(e){}containsKey(e,t){let n=new sf(t,0),r=this.vr.firstAfterOrEqual(n);return nL.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,nL.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this.Nr=e,this.docs=new nj(nD.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Nr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return nL.resolve(n?n.document.mutableCopy():rc.newInvalidDocument(t))}getEntries(e,t){let n=rG;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():rc.newInvalidDocument(e))}),nL.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=rG,s=t.path,o=new nD(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=nD.comparator(e.documentKey,t.documentKey))?n:n_(e.largestBatchId,t.largestBatchId)}(new nR(o.readTime,o.key,-1),n)||(r.has(o.key)||r$(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return nL.resolve(i)}getAllFromCollectionGroup(e,t,n,r){nu()}Br(e,t){return nL.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sg(this)}getSize(e){return nL.resolve(this.size)}}class sg extends ss{constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.hr.addEntry(e,r)):this.hr.removeEntry(n)}),nL.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.persistence=e,this.Lr=new rz(e=>rR(e),rk),this.lastRemoteSnapshotVersion=nI.min(),this.highestTargetId=0,this.kr=0,this.qr=new sc,this.targetCount=0,this.Qr=se.qn()}forEachTarget(e,t){return this.Lr.forEach((e,n)=>t(n)),nL.resolve()}getLastRemoteSnapshotVersion(e){return nL.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return nL.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),nL.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.kr&&(this.kr=t),nL.resolve()}Un(e){this.Lr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new se(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,nL.resolve()}updateTargetData(e,t){return this.Un(t),nL.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,nL.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Lr.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Lr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),nL.waitFor(i).next(()=>r)}getTargetCount(e){return nL.resolve(this.targetCount)}getTargetData(e,t){let n=this.Lr.get(t)||null;return nL.resolve(n)}addMatchingKeys(e,t,n){return this.qr.mr(t,n),nL.resolve()}removeMatchingKeys(e,t,n){this.qr.pr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),nL.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),nL.resolve()}getMatchingKeysForTargetId(e,t){let n=this.qr.Sr(t);return nL.resolve(n)}containsKey(e,t){return nL.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,t){this.Kr={},this.overlays={},this.$r=new nP(0),this.Ur=!1,this.Ur=!0,this.Wr=new sh,this.referenceDelegate=e(this),this.Gr=new sm(this),this.indexManager=new i8,this.remoteDocumentCache=new sp(e=>this.referenceDelegate.zr(e)),this.serializer=new i5(t),this.jr=new sl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new su,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Kr[e.toKey()];return n||(n=new sd(t,this.referenceDelegate),this.Kr[e.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,n){ns("MemoryPersistence","Starting transaction:",e);let r=new sv(this.$r.next());return this.referenceDelegate.Hr(),n(r).next(e=>this.referenceDelegate.Jr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Yr(e,t){return nL.or(Object.values(this.Kr).map(n=>()=>n.containsKey(e,t)))}}class sv extends nk{constructor(e){super(),this.currentSequenceNumber=e}}class sw{constructor(e){this.persistence=e,this.Zr=new sc,this.Xr=null}static ei(e){return new sw(e)}get ti(){if(this.Xr)return this.Xr;throw nu()}addReference(e,t,n){return this.Zr.addReference(n,t),this.ti.delete(n.toString()),nL.resolve()}removeReference(e,t,n){return this.Zr.removeReference(n,t),this.ti.add(n.toString()),nL.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),nL.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(e=>this.ti.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ti.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return nL.forEach(this.ti,n=>{let r=nD.fromPath(n);return this.ni(e,r).next(e=>{e||t.removeEntry(r,nI.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(e=>{e?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return nL.or([()=>nL.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class sE{constructor(e,t){this.persistence=e,this.ri=new rz(e=>/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new si(this,t)}static ei(e,t){return new sE(e,t)}Hr(){}Jr(e){return nL.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}nr(e){let t=0;return this.er(e,e=>{t++}).next(()=>t)}er(e,t){return nL.forEach(this.ri,(n,r)=>this.ir(e,n,r).next(e=>e?nL.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Br(e,r=>this.ir(e,r,t).next(e=>{e||(n++,i.removeEntry(r,nI.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),nL.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),nL.resolve()}removeReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),nL.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),nL.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(n3(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=n0(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return nJ(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var r;let i;return r=t.mapValue,i=0,nF(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw nu()}}(e.data.value)),t}ir(e,t,n){return nL.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.ri.get(t);return nL.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Wi=n,this.Gi=r}static zi(e,t){let n=rJ(),r=rJ();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new sb(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=!function(){var e;let t=null===(e=eT())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(X.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.Xi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.es(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new s_;return this.ts(e,t,n).next(r=>{if(i.result=r,this.Hi)return this.ns(e,t,n,r.size)})}).next(()=>i.result)}ns(e,t,n,r){return n.documentReadCount<this.Ji?(ni()<=E.DEBUG&&ns("QueryEngine","SDK will not create cache indexes for query:",rj(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),nL.resolve()):(ni()<=E.DEBUG&&ns("QueryEngine","Query:",rj(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Yi*r?(ni()<=E.DEBUG&&ns("QueryEngine","The SDK decides to create cache indexes for query:",rj(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rU(t))):nL.resolve())}Xi(e,t){if(rM(t))return nL.resolve(null);let n=rU(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=rU(t=rB(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=rJ(...r);return this.Zi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.rs(t,r);return this.ss(t,s,i,n.readTime)?this.Xi(e,rB(t,null,"F")):this.os(e,s,t,n)}))})))}es(e,t,n,r){return rM(t)||r.isEqual(nI.min())?nL.resolve(null):this.Zi.getDocuments(e,n).next(i=>{let s=this.rs(t,i);return this.ss(t,s,n,r)?nL.resolve(null):(ni()<=E.DEBUG&&ns("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),rj(t)),this.os(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new nR(nI.fromTimestamp(1e9===r?new nC(n+1,0):new nC(n,r)),nD.empty(),-1)}(r,0)).next(e=>e))})}rs(e,t){let n=new nz(rq(e));return t.forEach((t,r)=>{r$(e,r)&&(n=n.add(r))}),n}ss(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(e,t,n){return ni()<=E.DEBUG&&ns("QueryEngine","Using full collection scan to execute query:",rj(t)),this.Zi.getDocumentsMatchingQuery(e,t,nR.min(),n)}os(e,t,n,r){return this.Zi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t,n,r){this.persistence=e,this._s=t,this.serializer=r,this.us=new nj(n_),this.cs=new rz(e=>rR(e),rk),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(n)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sa(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}async function sI(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Ps(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],o=rJ();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(n,o).next(e=>({Ts:e,removedBatchIds:i,addedBatchIds:s}))})})}function sS(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}async function sA(e,t,n){let r=e.us.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!nM(e))throw e;ns("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.us=e.us.remove(t),e.cs.delete(r.target)}function sx(e,t,n){let r=nI.min(),i=rJ();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.cs.get(n);return void 0!==r?nL.resolve(e.us.get(r)):e.Gr.getTargetData(t,n)})(e,s,rU(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Gr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e._s.getDocumentsMatchingQuery(s,t,n?r:nI.min(),n?i:rJ())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ls.get(r)||nI.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ls.set(r,s),{documents:n,Es:i}}))}class sN{constructor(){this.activeTargetIds=rZ}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class sD{constructor(){this._o=new sN,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,n){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new sN,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){for(let e of(ns("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.To))e(0)}Po(){for(let e of(ns("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.To))e(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sO=null;function sL(){return null===sO?sO=0x10000000+Math.round(0x80000000*Math.random()):sO++,"0x"+sO.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sU="WebChannelConnection";class sB extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=t+"://"+e.host,this.Mo=`projects/${n}/databases/${r}`,this.xo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Oo(e,t,n,r,i){let s=sL(),o=this.No(e,t.toUriEncodedString());ns("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);let a={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(a,r,i),this.Lo(e,o,a,n).then(t=>(ns("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw na("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}ko(e,t,n,r,i,s){return this.Oo(e,t,n,r,i)}Bo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+nn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}No(e,t){let n=sM[e];return`${this.Fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,n,r){let i=sL();return new Promise((s,o)=>{let a=new T;a.setWithCredentials(!0),a.listenOnce(I.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case S.NO_ERROR:let t=a.getResponseJson();ns(sU,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case S.TIMEOUT:ns(sU,`RPC '${e}' ${i} timed out`),o(new nc(nh.DEADLINE_EXCEEDED,"Request time out"));break;case S.HTTP_ERROR:let n=a.getStatus();if(ns(sU,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(nh).indexOf(t)>=0?t:nh.UNKNOWN}(t.status);o(new nc(e,t.message))}else o(new nc(nh.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new nc(nh.UNAVAILABLE,"Connection failed."));break;default:nu()}}finally{ns(sU,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);ns(sU,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)})}qo(e,t,n){let r=sL(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=D(),o=N(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Bo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;let u=i.join("");ns(sU,`Creating RPC '${e}' stream ${r}: ${u}`,a);let h=s.createWebChannel(u,a),c=!1,f=!1,d=new sP({Eo:t=>{f?ns(sU,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(c||(ns(sU,`Opening RPC '${e}' stream ${r} transport.`),h.open(),c=!0),ns(sU,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},Ao:()=>h.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(h,C.EventType.OPEN,()=>{f||(ns(sU,`RPC '${e}' stream ${r} transport opened.`),d.So())}),p(h,C.EventType.CLOSE,()=>{f||(f=!0,ns(sU,`RPC '${e}' stream ${r} transport closed`),d.Do())}),p(h,C.EventType.ERROR,t=>{f||(f=!0,na(sU,`RPC '${e}' stream ${r} transport errored:`,t),d.Do(new nc(nh.UNAVAILABLE,"The operation could not be completed")))}),p(h,C.EventType.MESSAGE,t=>{var n;if(!f){let i=t.data[0];i||nu();let s=(null==i?void 0:i.error)||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){ns(sU,`RPC '${e}' stream ${r} received error:`,s);let t=s.status,n=function(e){let t=M[e];if(void 0!==t)return i_(t)}(t),i=s.message;void 0===n&&(n=nh.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,d.Do(new nc(n,i)),h.close()}else ns(sU,`RPC '${e}' stream ${r} received:`,i),d.vo(i)}}),p(o,x.STAT_EVENT,t=>{t.stat===A.PROXY?ns(sU,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===A.NOPROXY&&ns(sU,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.bo()},0),d}}function sF(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sV(e){return new iV(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(e,t,n=1e3,r=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=n,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),r=Math.max(0,t-n);r>0&&ns("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(e,t,n,r,i,s,o,a){this.li=e,this.Yo=n,this.Zo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new sj(e,t)}i_(){return 1===this.state||5===this.state||this.s_()}s_(){return 2===this.state||3===this.state}start(){this.n_=0,4!==this.state?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&null===this.e_&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,4!==e?this.r_.reset():t&&t.code===nh.RESOURCE_EXHAUSTED?(no(t.toString()),no("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===nh.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Xo===t&&this.I_(e,n)},t=>{e(()=>{let e=new nc(nh.UNKNOWN,"Fetching auth token failed: "+t.message);return this.d_(e)})})}I_(e,t){let n=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(e=>{n(()=>this.d_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.n_?this.A_(e):this.onNext(e))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ns("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ns("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sq extends s${constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:nu(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||nu(),nQ.fromBase64String(i||"")):(void 0===i||i instanceof tD||i instanceof Uint8Array||nu(),nQ.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new ik(s,o,a,l&&new nc(void 0===l.code?nh.UNKNOWN:i_(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=iW(e,r.document.name),s=iz(r.document.updateTime),o=r.document.createTime?iz(r.document.createTime):nI.min(),a=new rh({mapValue:{fields:r.document.fields}}),l=rc.newFoundDocument(i,s,o,a);n=new iD(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=iW(e,r.document),s=r.readTime?iz(r.readTime):nI.min(),o=rc.newNoDocument(i,s);n=new iD([],r.removedTargetIds||[],o.key,o)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=iW(e,r.document);n=new iD([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return nu();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new ib(r,i);n=new iR(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return nI.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?nI.min():t.readTime?iz(t.readTime):nI.min()}(e);return this.listener.R_(t,n)}V_(e){let t={};t.database=iX(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=rO(r)?{documents:{documents:[iY(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(i=o,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=iY(e,i);let a=function(e){if(0!==e.length)return function e(t){return t instanceof ry?function(e){if("=="===e.op){if(rs(e.value))return{unaryFilter:{field:i0(e.field),op:"IS_NAN"}};if(ri(e.value))return{unaryFilter:{field:i0(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(rs(e.value))return{unaryFilter:{field:i0(e.field),op:"IS_NOT_NAN"}};if(ri(e.value))return{unaryFilter:{field:i0(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:i0(e.field),op:iB[e.op],value:e.value}}}(t):t instanceof rv?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:iF[t.op],filters:n}}}(t):nu()}(rv.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:i0(e.field),direction:iU[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=ij(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{ct:s,parent:i}}(e,r).ct}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=iq(e,t.resumeToken);let r=ij(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(nI.min())>0){n.readTime=i$(e,t.snapshotVersion.toTimestamp());let r=ij(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return nu()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.c_(t)}m_(e){let t={};t.database=iX(this.serializer),t.removeTarget=e,this.c_(t)}}class sz extends s${constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return e.streamToken||nu(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&nu(),this.listener.p_()}onNext(e){var t,n;e.streamToken||nu(),this.lastStreamToken=e.streamToken,this.r_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||nu(),t.map(e=>{let t;return(t=e.updateTime?iz(e.updateTime):iz(n)).isEqual(nI.min())&&(t=iz(n)),new ir(t,e.transformResults||[])})):[]),i=iz(e.commitTime);return this.listener.y_(i,r)}w_(){let e={};e.database=iX(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof ih)r={update:iZ(e,t.key,t.value)};else if(t instanceof im)r={delete:iQ(e,t.key)};else if(t instanceof ic)r={update:iZ(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof iy))return nu();r={verify:iQ(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof r5)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof r3)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof r4)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof r9)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw nu()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:i$(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:nu()),r})(this.serializer,e))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new nc(nh.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,n,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Oo(e,iK(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nh.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nc(nh.UNKNOWN,e.toString())})}ko(e,t,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.ko(e,iK(t,n),r,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nh.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nc(nh.UNKNOWN,e.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class sK{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,"Online"===e&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(no(t),this.C_=!1):ns("OnlineStateTracker",t)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sH{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(e=>{n.enqueueAndForget(async()=>{s2(this)&&(ns("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.k_.add(4),await sW(e),e.K_.set("Unknown"),e.k_.delete(4),await sQ(e)}(this))})}),this.K_=new sK(n,r)}}async function sQ(e){if(s2(e))for(let t of e.q_)await t(!0)}async function sW(e){for(let t of e.q_)await t(!1)}function sY(e,t){e.L_.has(t.targetId)||(e.L_.set(t.targetId,t),s1(e)?s0(e):ol(e).s_()&&sJ(e,t))}function sX(e,t){let n=ol(e);e.L_.delete(t),n.s_()&&sZ(e,t),0===e.L_.size&&(n.s_()?n.a_():s2(e)&&e.K_.set("Unknown"))}function sJ(e,t){if(e.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(nI.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ol(e).V_(t)}function sZ(e,t){e.U_.xe(t),ol(e).m_(t)}function s0(e){e.U_=new iL({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.L_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),ol(e).start(),e.K_.F_()}function s1(e){return s2(e)&&!ol(e).i_()&&e.L_.size>0}function s2(e){return 0===e.k_.size}async function s6(e){e.K_.set("Online")}async function s5(e){e.L_.forEach((t,n)=>{sJ(e,t)})}async function s3(e,t){e.U_=void 0,s1(e)?(e.K_.O_(t),s0(e)):e.K_.set("Unknown")}async function s8(e,t,n){if(e.K_.set("Online"),t instanceof ik&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.L_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.L_.delete(r),e.U_.removeTarget(r))}(e,t)}catch(n){ns("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await s4(e,n)}else if(t instanceof iD?e.U_.$e(t):t instanceof iR?e.U_.Je(t):e.U_.Ge(t),!n.isEqual(nI.min()))try{let t=await sS(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.U_.it(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.L_.get(r);i&&e.L_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.L_.get(t);if(!r)return;e.L_.set(t,r.withResumeToken(nQ.EMPTY_BYTE_STRING,r.snapshotVersion)),sZ(e,t);let i=new i6(r.target,t,n,r.sequenceNumber);sJ(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ns("RemoteStore","Failed to raise snapshot:",t),await s4(e,t)}}async function s4(e,t,n){if(!nM(t))throw t;e.k_.add(1),await sW(e),e.K_.set("Offline"),n||(n=()=>sS(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{ns("RemoteStore","Retrying IndexedDB access"),await n(),e.k_.delete(1),await sQ(e)})}function s7(e,t){return t().catch(n=>s4(e,n,t))}async function s9(e){let t=ou(e),n=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;s2(e)&&e.B_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.B_.length&&t.a_();break}n=r.batchId,function(e,t){e.B_.push(t);let n=ou(e);n.s_()&&n.f_&&n.g_(t.mutations)}(e,r)}catch(t){await s4(e,t)}oe(e)&&ot(e)}function oe(e){return s2(e)&&!ou(e).i_()&&e.B_.length>0}function ot(e){ou(e).start()}async function on(e){ou(e).w_()}async function or(e){let t=ou(e);for(let n of e.B_)t.g_(n.mutations)}async function oi(e,t,n){let r=e.B_.shift(),i=iw.from(r,t,n);await s7(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await s9(e)}async function os(e,t){t&&ou(e).f_&&await async function(e,t){var n;if(function(e){switch(e){default:return nu();case nh.CANCELLED:case nh.UNKNOWN:case nh.DEADLINE_EXCEEDED:case nh.RESOURCE_EXHAUSTED:case nh.INTERNAL:case nh.UNAVAILABLE:case nh.UNAUTHENTICATED:return!1;case nh.INVALID_ARGUMENT:case nh.NOT_FOUND:case nh.ALREADY_EXISTS:case nh.PERMISSION_DENIED:case nh.FAILED_PRECONDITION:case nh.ABORTED:case nh.OUT_OF_RANGE:case nh.UNIMPLEMENTED:case nh.DATA_LOSS:return!0}}(n=t.code)&&n!==nh.ABORTED){let n=e.B_.shift();ou(e).__(),await s7(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await s9(e)}}(e,t),oe(e)&&ot(e)}async function oo(e,t){e.asyncQueue.verifyOperationInProgress(),ns("RemoteStore","RemoteStore received new credentials");let n=s2(e);e.k_.add(3),await sW(e),n&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await sQ(e)}async function oa(e,t){t?(e.k_.delete(2),await sQ(e)):t||(e.k_.add(2),await sW(e),e.K_.set("Unknown"))}function ol(e){var t,n,r;return e.W_||(e.W_=(t=e.datastore,n=e.asyncQueue,r={Ro:s6.bind(null,e),mo:s5.bind(null,e),po:s3.bind(null,e),R_:s8.bind(null,e)},t.b_(),new sq(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.q_.push(async t=>{t?(e.W_.__(),s1(e)?s0(e):e.K_.set("Unknown")):(await e.W_.stop(),e.U_=void 0)})),e.W_}function ou(e){var t,n,r;return e.G_||(e.G_=(t=e.datastore,n=e.asyncQueue,r={Ro:()=>Promise.resolve(),mo:on.bind(null,e),po:os.bind(null,e),p_:or.bind(null,e),y_:oi.bind(null,e)},t.b_(),new sz(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.q_.push(async t=>{t?(e.G_.__(),await s9(e)):(await e.G_.stop(),e.B_.length>0&&(ns("RemoteStore",`Stopping write stream with ${e.B_.length} pending writes`),e.B_=[]))})),e.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new nf,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new oh(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new nc(nh.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oc(e,t){if(no("AsyncQueue",`${t}: ${e}`),nM(e))return new nc(nh.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{static emptySet(e){return new of(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||nD.comparator(t.key,n.key):(e,t)=>nD.comparator(e.key,t.key),this.keyedMap=rH(),this.sortedSet=new nj(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof of)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new of;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.z_=new nj(nD.comparator)}track(e){let t=e.doc.key,n=this.z_.get(t);n?0!==e.type&&3===n.type?this.z_=this.z_.insert(t,e):3===e.type&&1!==n.type?this.z_=this.z_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.z_=this.z_.remove(t):1===e.type&&2===n.type?this.z_=this.z_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):nu():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class op{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new op(e,t,of.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rF(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class om{constructor(){this.queries=oy(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=oy(),n.forEach((e,n)=>{for(let e of n.J_)e.onError(t)})}(this,new nc(nh.ABORTED,"Firestore shutting down"))}}function oy(){return new rz(e=>rV(e),rF)}async function ov(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.Y_()&&t.Z_()&&(n=2):(i=new og,n=+!t.Z_());try{switch(n){case 0:i.H_=await e.onListen(r,!0);break;case 1:i.H_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=oc(n,`Initialization of query '${rj(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.J_.push(t),t.ea(e.onlineState),i.H_&&t.ta(i.H_)&&o_(e)}async function ow(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.J_.indexOf(t);e>=0&&(i.J_.splice(e,1),0===i.J_.length?r=+!t.Z_():!i.Y_()&&t.Z_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function oE(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.J_)e.ta(r)&&(n=!0);i.H_=r}}n&&o_(e)}function ob(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.J_)e.onError(n);e.queries.delete(t)}function o_(e){e.X_.forEach(e=>{e.next()})}(B=U||(U={})).na="default",B.Cache="cache";class oT{constructor(e,t,n){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new op(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){return!(e.fromCache&&this.Z_())||(!this.options.ua||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}aa(e){e=op.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==U.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.key=e}}class oI{constructor(e){this.key=e}}class oS{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=rJ(),this.mutatedKeys=rJ(),this.Va=rq(e),this.ma=new of(this.Va)}get fa(){return this.Ea}ga(e,t){let n=t?t.pa:new od,r=t?t.ma:this.ma,i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1,a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=r$(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),f=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),d=!1;u&&h?u.data.isEqual(h.data)?c!==f&&(n.track({type:3,doc:h}),d=!0):this.ya(u,h)||(n.track({type:2,doc:h}),d=!0,(a&&this.Va(h,a)>0||l&&0>this.Va(h,l))&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),d=!0):u&&!h&&(n.track({type:1,doc:u}),d=!0,(a||l)&&(o=!0)),d&&(h?(s=s.add(h),i=f?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ma:s,pa:n,ss:o,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let s=e.pa.j_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nu()}};return n(e)-n(t)})(e.type,t.type)||this.Va(e.doc,t.doc)),this.wa(n),r=null!=r&&r;let o=t&&!r?this.Sa():[],a=+(0===this.Ra.size&&!!this.current&&!r),l=a!==this.Aa;return(this.Aa=a,0!==s.length||l)?{snapshot:new op(this.query,e.ma,i,s,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:o}:{ba:o}}ea(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ma:this.ma,pa:new od,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(e=>this.Ea=this.Ea.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ea=this.Ea.delete(e)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=rJ(),this.ma.forEach(e=>{this.Da(e.key)&&(this.Ra=this.Ra.add(e.key))});let t=[];return e.forEach(e=>{this.Ra.has(e)||t.push(new oI(e))}),this.Ra.forEach(n=>{e.has(n)||t.push(new oC(n))}),t}va(e){this.Ea=e.Es,this.Ra=rJ();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return op.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,0===this.Aa,this.hasCachedResults)}}class oA{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ox{constructor(e){this.key=e,this.Fa=!1}}class oN{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ma={},this.xa=new rz(e=>rV(e),rF),this.Oa=new Map,this.Na=new Set,this.Ba=new nj(nD.comparator),this.La=new Map,this.ka=new sc,this.qa={},this.Qa=new Map,this.Ka=se.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}async function oD(e,t,n=!0){let r;let i=oX(e),s=i.xa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Ca()):r=await ok(i,t,n,!0),r}async function oR(e,t){let n=oX(e);await ok(n,t,!0,!1)}async function ok(e,t,n,r){var i,s;let o;let a=await (i=e.localStore,s=rU(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Gr.getTargetData(e,s).next(n=>n?(t=n,nL.resolve(t)):i.Gr.allocateTargetId(e).next(n=>(t=new i6(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.Gr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.us.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.us=i.us.insert(e.targetId,e),i.cs.set(s,e.targetId)),e})),l=a.targetId,u=e.sharedClientState.addLocalQueryTarget(l,n);return r&&(o=await oO(e,t,l,"current"===u,a.resumeToken)),e.isPrimaryClient&&n&&sY(e.remoteStore,a),o}async function oO(e,t,n,r,i){e.Ua=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ga(n);i.ss&&(i=await sx(e.localStore,t.query,!1).then(({documents:e})=>t.view.ga(e,i)));let s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return oK(e,t.targetId,a.ba),a.snapshot})(e,t,n,r);let s=await sx(e.localStore,t,!0),o=new oS(t,s.Es),a=o.ga(s.documents),l=iN.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);oK(e,n,u.ba);let h=new oA(t,n,o);return e.xa.set(t,h),e.Oa.has(n)?e.Oa.get(n).push(t):e.Oa.set(n,[t]),u.snapshot}async function oL(e,t,n){let r=e.xa.get(t),i=e.Oa.get(r.targetId);if(i.length>1)return e.Oa.set(r.targetId,i.filter(e=>!rF(e,t))),void e.xa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await sA(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&sX(e.remoteStore,r.targetId),oz(e,r.targetId)}).catch(nO)):(oz(e,r.targetId),await sA(e.localStore,r.targetId,!0))}async function oM(e,t){let n=e.xa.get(t),r=e.Oa.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),sX(e.remoteStore,n.targetId))}async function oP(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=oV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oj.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=nC.now(),s=t.reduce((e,t)=>e.add(t.key),rJ());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=rG,l=rJ();return e.hs.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=r6(r.transform,e||null);null!=i&&(null===n&&(n=rh.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new ic(e.key,t,function e(t){let n=[];return nF(t.fields,(t,r)=>{let i=new nN([t]);if(ro(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new nK(n)}(t.value.mapValue),ii.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:rQ(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.qa[i.currentUser.toKey()])||(e=new nj(n_)),e=e.insert(r,n),i.qa[i.currentUser.toKey()]=e,await oQ(i,s.changes),await s9(i.remoteStore)}catch(t){let e=oc(t,"Failed to persist write");n.reject(e)}}async function oU(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let o,a;let l=e.hs.newChangeBuffer({trackRemovals:!0});r=e.us;let u=[];t.targetChanges.forEach((s,o)=>{var a;let l=r.get(o);if(!l)return;u.push(e.Gr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Gr.addMatchingKeys(i,s.addedDocuments,o)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?h=h.withResumeToken(nQ.EMPTY_BYTE_STRING,nI.min()).withLastLimboFreeSnapshotVersion(nI.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(o,h),a=h,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Gr.updateTargetData(i,h))});let h=rG,c=rJ();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,o=rJ(),a=rJ(),s.forEach(e=>o=o.add(e)),l.getEntries(i,o).next(e=>{let t=rG;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(a=a.add(n)),r.isNoDocument()&&r.version.isEqual(nI.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):ns("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Is:t,ds:a}})).next(e=>{h=e.Is,c=e.ds})),!n.isEqual(nI.min())){let t=e.Gr.getLastRemoteSnapshotVersion(i).next(t=>e.Gr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return nL.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.us=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.La.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||nu(),t.addedDocuments.size>0?r.Fa=!0:t.modifiedDocuments.size>0?r.Fa||nu():t.removedDocuments.size>0&&(r.Fa||nu(),r.Fa=!1))}),await oQ(e,n,t)}catch(e){await nO(e)}}function oB(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.xa.forEach((e,n)=>{let r=n.view.ea(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.J_)e.ea(t)&&(n=!0)}),n&&o_(r),i.length&&e.Ma.R_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function oF(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.La.get(t),i=r&&r.key;if(i){let n=new nj(nD.comparator);n=n.insert(i,rc.newNoDocument(i,nI.min()));let r=rJ().add(i),s=new ix(nI.min(),new Map,new nj(n_),n,r);await oU(e,s),e.Ba=e.Ba.remove(i),e.La.delete(t),oH(e)}else await sA(e.localStore,t,!1).then(()=>oz(e,t,n)).catch(nO)}async function oV(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),o=nL.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||nu(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=rJ();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});oq(e,r,null),o$(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await oQ(e,i)}catch(e){await nO(e)}}async function oj(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||nu(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});oq(e,t,n),o$(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await oQ(e,i)}catch(e){await nO(e)}}function o$(e,t){(e.Qa.get(t)||[]).forEach(e=>{e.resolve()}),e.Qa.delete(t)}function oq(e,t,n){let r=e.qa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.qa[e.currentUser.toKey()]=r}}function oz(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Oa.get(t)))e.xa.delete(r),n&&e.Ma.Wa(r,n);e.Oa.delete(t),e.isPrimaryClient&&e.ka.yr(t).forEach(t=>{e.ka.containsKey(t)||oG(e,t)})}function oG(e,t){e.Na.delete(t.path.canonicalString());let n=e.Ba.get(t);null!==n&&(sX(e.remoteStore,n),e.Ba=e.Ba.remove(t),e.La.delete(n),oH(e))}function oK(e,t,n){for(let r of n)r instanceof oC?(e.ka.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.Ba.get(n)||e.Na.has(r)||(ns("SyncEngine","New document in limbo: "+n),e.Na.add(r),oH(e))}(e,r)):r instanceof oI?(ns("SyncEngine","Document no longer in limbo: "+r.key),e.ka.removeReference(r.key,t),e.ka.containsKey(r.key)||oG(e,r.key)):nu()}function oH(e){for(;e.Na.size>0&&e.Ba.size<e.maxConcurrentLimboResolutions;){let t=e.Na.values().next().value;e.Na.delete(t);let n=new nD(nA.fromString(t)),r=e.Ka.next();e.La.set(r,new ox(n)),e.Ba=e.Ba.insert(n,r),sY(e.remoteStore,new i6(rU(new rL(n.path)),r,"TargetPurposeLimboResolution",nP.oe))}}async function oQ(e,t,n){let r=[],i=[],s=[];e.xa.isEmpty()||(e.xa.forEach((o,a)=>{s.push(e.Ua(a,t,n).then(t=>{var s;if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:null===(s=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(a.targetId,r?"current":"not-current")}if(t){r.push(t);let e=sb.zi(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Ma.R_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>nL.forEach(t,t=>nL.forEach(t.Wi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>nL.forEach(t.Gi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!nM(e))throw e;ns("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.us.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.us=e.us.insert(t,i)}}}(e.localStore,i))}async function oW(e,t){var n;if(!e.currentUser.isEqual(t)){ns("SyncEngine","User change. New user:",t.toKey());let r=await sI(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Qa.forEach(e=>{e.forEach(e=>{e.reject(new nc(nh.CANCELLED,n))})}),e.Qa.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await oQ(e,r.Ts)}}function oY(e,t){let n=e.La.get(t);if(n&&n.Fa)return rJ().add(n.key);{let n=rJ(),r=e.Oa.get(t);if(!r)return n;for(let t of r){let r=e.xa.get(t);n=n.unionWith(r.view.fa)}return n}}function oX(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=oU.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oY.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oF.bind(null,e),e.Ma.R_=oE.bind(null,e.eventManager),e.Ma.Wa=ob.bind(null,e.eventManager),e}class oJ{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sV(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){var t;return t=this.persistence,new sC(t,new sT,e.initialUser,this.serializer)}ja(e){return new sy(sw.ei,this.serializer)}za(e){return new sD}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oJ.provider={build:()=>new oJ};class oZ extends oJ{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){return this.persistence.referenceDelegate instanceof sE||nu(),new sr(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}ja(e){let t=void 0!==this.cacheSizeBytes?i9.withCacheSize(this.cacheSizeBytes):i9.DEFAULT;return new sy(e=>sE.ei(e,t),this.serializer)}}class o0{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oB(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=oW.bind(null,this.syncEngine),await oa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new om}createDatastore(e){let t=sV(e.databaseInfo.databaseId),n=new sB(e.databaseInfo);return new sG(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new sH(t,this.datastore,e.asyncQueue,e=>oB(this.syncEngine,e,0),sk.p()?new sk:new sR)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){let a=new oN(e,t,n,r,i,s);return o&&(a.$a=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){ns("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await sW(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}o0.provider={build:()=>new o0};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):no("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=nt.UNAUTHENTICATED,this.clientId=nb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{ns("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(ns("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new nf;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=oc(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function o6(e,t){e.asyncQueue.verifyOperationInProgress(),ns("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await sI(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function o5(e,t){e.asyncQueue.verifyOperationInProgress();let n=await o3(e);ns("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>oo(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>oo(t.remoteStore,n)),e._onlineComponents=t}async function o3(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){ns("FirestoreClient","Using user provided OfflineComponentProvider");try{await o6(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===nh.FAILED_PRECONDITION||t.code===nh.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;na("Error using user provided cache. Falling back to memory cache: "+t),await o6(e,new oJ)}}else ns("FirestoreClient","Using default OfflineComponentProvider"),await o6(e,new oZ(void 0))}return e._offlineComponents}async function o8(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ns("FirestoreClient","Using user provided OnlineComponentProvider"),await o5(e,e._uninitializedComponentsProvider._online)):(ns("FirestoreClient","Using default OnlineComponentProvider"),await o5(e,new o0))),e._onlineComponents}async function o4(e){let t=await o8(e),n=t.eventManager;return n.onListen=oD.bind(null,t.syncEngine),n.onUnlisten=oL.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=oR.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=oM.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o7(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o9=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,n){if(!n)throw new nc(nh.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function at(e){if(!nD.isDocumentKey(e))throw new nc(nh.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function an(e){if(nD.isDocumentKey(e))throw new nc(nh.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ar(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":nu()}function ai(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new nc(nh.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=ar(e);throw new nc(nh.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new nc(nh.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new nc(nh.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new nc(nh.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=o7(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new nc(nh.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new nc(nh.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new nc(nh.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ao{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new as({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new nc(nh.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new nc(nh.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new as(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new np;switch(e.type){case"firstParty":return new nv(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new nc(nh.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=o9.get(e);t&&(ns("ComponentProvider","Removing Datastore"),o9.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new aa(this.firestore,e,this._query)}}class al{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new au(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new al(this.firestore,e,this._key)}}class au extends aa{constructor(e,t,n){super(e,t,new rL(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new al(this.firestore,null,new nD(e))}withConverter(e){return new au(this.firestore,e,this._path)}}function ah(e,t,...n){if(e=eO(e),ae("collection","path",t),e instanceof ao){let r=nA.fromString(t,...n);return an(r),new au(e,null,r)}{if(!(e instanceof al||e instanceof au))throw new nc(nh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(nA.fromString(t,...n));return an(r),new au(e.firestore,null,r)}}function ac(e,t,...n){if(e=eO(e),1==arguments.length&&(t=nb.newId()),ae("doc","path",t),e instanceof ao){let r=nA.fromString(t,...n);return at(r),new al(e,null,new nD(r))}{if(!(e instanceof al||e instanceof au))throw new nc(nh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(nA.fromString(t,...n));return at(r),new al(e.firestore,e instanceof au?e.converter:null,new nD(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new sj(this,"async_queue_retry"),this.fu=()=>{let e=sF();e&&ns("AsyncQueue","Visibility state changed to "+e.visibilityState),this.r_.Jo()},this.gu=e;let t=sF();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;let t=sF();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});let t=new nf;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!nM(e))throw e;ns("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(e=>{let t;throw this.Au=e,this.Ru=!1,no("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.Ru=!1,e))));return this.gu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let r=oh.createAndSchedule(this,e,t,n,e=>this.Su(e));return this.Eu.push(r),r}pu(){this.Au&&nu()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(let t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{for(let t of(this.Eu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Eu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class ad extends ao{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new af,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new af(e),this._firestoreClient=void 0,await e}}}function ap(e){if(e._terminated)throw new nc(nh.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r,i;let s=e._freezeSettings(),o=(i=e._databaseId,new n2(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,o7(s.experimentalLongPollingOptions),s.useFetchStreams));e._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new o2(e._authCredentials,e._appCheckCredentials,e._queue,o,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ag(nQ.fromBase64String(e))}catch(e){throw new nc(nh.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ag(nQ.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new nc(nh.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nN(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new nc(nh.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new nc(nh.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return n_(this._lat,e._lat)||n_(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=/^__.*__$/;class ab{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ic(e,this.data,this.fieldMask,t,this.fieldTransforms):new ih(e,this.data,t,this.fieldTransforms)}}class a_{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ic(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aT(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nu()}}class aC{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new aC(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.xu({path:n,Nu:!1});return r.Bu(e),r}Lu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.xu({path:n,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return aM(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(0===e.length)throw this.qu("Document fields must not be empty");if(aT(this.Mu)&&aE.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class aI{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||sV(e)}$u(e,t,n,r=!1){return new aC({Mu:e,methodName:t,Ku:n,path:nN.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aS(e){let t=e._freezeSettings(),n=sV(e._databaseId);return new aI(e._databaseId,!!t.ignoreUndefinedProperties,n)}class aA extends ay{_toFieldTransform(e){if(2!==e.Mu)throw 1===e.Mu?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof aA}}function ax(e,t){if(aD(e=eO(e)))return aR("Unsupported field value:",t,e),aN(e,t);if(e instanceof ay)return function(e,t){if(!aT(t.Mu))throw t.qu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.qu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Nu&&4!==t.Mu)throw t.qu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=ax(i,t.ku(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){var n,r,i;if(null===(e=eO(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!nU(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?r1(r):r0(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=nC.fromDate(e);return{timestampValue:i$(t.serializer,n)}}if(e instanceof nC){let n=new nC(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:i$(t.serializer,n)}}if(e instanceof av)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ag)return{bytesValue:iq(t.serializer,e._byteString)};if(e instanceof al){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.qu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:iG(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof aw)return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.qu("VectorValues must only contain numeric values.");return r0(t.serializer,e)})}}}}};throw t.qu(`Unsupported field value: ${ar(e)}`)}(e,t)}function aN(e,t){let n={};return nV(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):nF(e,(e,r)=>{let i=ax(r,t.Ou(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function aD(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof nC||e instanceof av||e instanceof ag||e instanceof al||e instanceof ay||e instanceof aw)}function aR(e,t,n){if(!aD(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=ar(n);throw"an object"===r?t.qu(e+" a custom object"):t.qu(e+" "+r)}}function ak(e,t,n){if((t=eO(t))instanceof am)return t._internalPath;if("string"==typeof t)return aL(e,t);throw aM("Field path arguments must be of type string or ",e,!1,void 0,n)}const aO=RegExp("[~\\*/\\[\\]]");function aL(e,t,n){if(t.search(aO)>=0)throw aM(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new am(...t.split("."))._internalPath}catch(r){throw aM(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function aM(e,t,n,r,i){let s=r&&!r.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new nc(nh.INVALID_ARGUMENT,a+e+l)}function aP(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new al(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new aB(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(aF("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class aB extends aU{data(){return super.data()}}function aF(e,t){return"string"==typeof t?aL(e,t):t instanceof am?t._internalPath:t._delegate._internalPath}class aV{convertValue(e,t="none"){switch(n3(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nX(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nJ(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw nu()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return nF(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;return new aw(null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>nX(e.doubleValue)))}convertGeoPoint(e){return new av(nX(e.latitude),nX(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=n0(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(n1(e));default:return null}}convertTimestamp(e){let t=nY(e);return new nC(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=nA.fromString(e);i2(n)||nu();let r=new n6(n.get(1),n.get(3)),i=new nD(n.popFirst(5));return r.isEqual(t)||no(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class a$ extends aU{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new aq(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(aF("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class aq extends a${data(e={}){return super.data(e)}}class az{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new aj(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new aq(this._firestore,this._userDataWriter,n.key,n,new aj(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new nc(nh.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new aq(e._firestore,e._userDataWriter,n.doc.key,n.doc,new aj(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new aq(e._firestore,e._userDataWriter,t.doc.key,t.doc,new aj(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return nu()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class aG extends aV{constructor(e){super(),this.firestore=e}convertBytes(e){return new ag(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new al(this.firestore,null,t)}}function aK(e,t,n,...r){e=ai(e,al);let i=ai(e.firestore,ad),s=aS(i);return aH(i,[("string"==typeof(t=eO(t))||t instanceof am?function(e,t,n,r,i,s){let o=e.$u(1,t,n),a=[ak(t,r,n)],l=[i];if(s.length%2!=0)throw new nc(nh.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(ak(t,s[e])),l.push(s[e+1]);let u=[],h=rh.empty();for(let e=a.length-1;e>=0;--e)if(!aP(u,a[e])){let t=a[e],n=l[e];n=eO(n);let r=o.Lu(t);if(n instanceof aA)u.push(t);else{let e=ax(n,r);null!=e&&(u.push(t),h.set(t,e))}}return new a_(h,new nK(u),o.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){let i=e.$u(1,t,n);aR("Data must be an object, but it was:",i,r);let s=[],o=rh.empty();return nF(r,(e,r)=>{let a=aL(t,e,n);r=eO(r);let l=i.Lu(a);if(r instanceof aA)s.push(a);else{let e=ax(r,l);null!=e&&(s.push(a),o.set(a,e))}}),new a_(o,new nK(s),i.fieldTransforms)}(s,"updateDoc",e._key,t)).toMutation(e._key,ii.exists(!0))])}function aH(e,t){return function(e,t){let n=new nf;return e.asyncQueue.enqueueAndForget(async()=>oP(await o8(e).then(e=>e.syncEngine),t,n)),n.promise}(ap(e),t)}new WeakMap,function(e=!0){nn="11.2.0",tr(new eL("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new ad(new nm(t.getProvider("auth-internal")),new nE(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new nc(nh.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new n6(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),ta(ne,"4.7.6",void 0),ta(ne,"4.7.6","esm2017")}(),(s=F||(F={})).STRING="string",s.NUMBER="number",s.INTEGER="integer",s.BOOLEAN="boolean",s.ARRAY="array",s.OBJECT="object",(o=V||(V={})).LANGUAGE_UNSPECIFIED="language_unspecified",o.PYTHON="python",(a=j||(j={})).OUTCOME_UNSPECIFIED="outcome_unspecified",a.OUTCOME_OK="outcome_ok",a.OUTCOME_FAILED="outcome_failed",a.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aQ=["user","model","function","system"];(l=$||($={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",l.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",l.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",l.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",l.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(u=q||(q={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",u.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",u.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",u.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",u.BLOCK_NONE="BLOCK_NONE",(h=z||(z={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",h.NEGLIGIBLE="NEGLIGIBLE",h.LOW="LOW",h.MEDIUM="MEDIUM",h.HIGH="HIGH",(c=G||(G={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",c.SAFETY="SAFETY",c.OTHER="OTHER",(f=K||(K={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",f.STOP="STOP",f.MAX_TOKENS="MAX_TOKENS",f.SAFETY="SAFETY",f.RECITATION="RECITATION",f.LANGUAGE="LANGUAGE",f.OTHER="OTHER",(d=H||(H={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",d.RETRIEVAL_QUERY="RETRIEVAL_QUERY",d.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",d.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",d.CLASSIFICATION="CLASSIFICATION",d.CLUSTERING="CLUSTERING",(p=Q||(Q={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",p.AUTO="AUTO",p.ANY="ANY",p.NONE="NONE",(g=W||(W={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",g.MODE_DYNAMIC="MODE_DYNAMIC";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aW extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class aY extends aW{constructor(e,t){super(e),this.response=t}}class aX extends aW{constructor(e,t,n,r){super(e),this.status=t,this.statusText=n,this.errorDetails=r}}class aJ extends aW{}(m=Y||(Y={})).GENERATE_CONTENT="generateContent",m.STREAM_GENERATE_CONTENT="streamGenerateContent",m.COUNT_TOKENS="countTokens",m.EMBED_CONTENT="embedContent",m.BATCH_EMBED_CONTENTS="batchEmbedContents";class aZ{constructor(e,t,n,r,i){this.model=e,this.task=t,this.apiKey=n,this.stream=r,this.requestOptions=i}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",r=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",i=`${r}/${n}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}async function a0(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.21.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let r=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(e){throw new aJ(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${e.message}`)}for(let[e,t]of r.entries()){if("x-goog-api-key"===e)throw new aJ(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new aJ(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function a1(e,t,n,r,i,s){let o=new aZ(e,t,n,r,s);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(s)),{method:"POST",headers:await a0(o),body:i})}}async function a2(e,t,n,r,i,s={},o=fetch){let{url:a,fetchOptions:l}=await a1(e,t,n,r,i,s);return a6(a,l,o)}async function a6(e,t,n=fetch){let r;try{r=await n(e,t)}catch(t){!function(e,t){let n=e;throw e instanceof aX||e instanceof aJ||((n=new aW(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n}(t,e)}return r.ok||await a5(r,e),r}async function a5(e,t){let n,r="";try{let t=await e.json();r=t.error.message,t.error.details&&(r+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new aX(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${r}`,e.status,e.statusText,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a3(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),a7(e.candidates[0]))throw new aY(`${a9(e)}`,e);return function(e){var t,n,r,i;let s=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(i=null===(r=e.candidates)||void 0===r?void 0:r[0].content)||void 0===i?void 0:i.parts)t.text&&s.push(t.text),t.executableCode&&s.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&s.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}(e)}if(e.promptFeedback)throw new aY(`Text not available. ${a9(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),a7(e.candidates[0]))throw new aY(`${a9(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),a8(e)[0]}if(e.promptFeedback)throw new aY(`Function call not available. ${a9(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),a7(e.candidates[0]))throw new aY(`${a9(e)}`,e);return a8(e)}if(e.promptFeedback)throw new aY(`Function call not available. ${a9(e)}`,e)},e}function a8(e){var t,n,r,i;let s=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(i=null===(r=e.candidates)||void 0===r?void 0:r[0].content)||void 0===i?void 0:i.parts)t.functionCall&&s.push(t.functionCall);return s.length>0?s:void 0}const a4=[K.RECITATION,K.SAFETY,K.LANGUAGE];function a7(e){return!!e.finishReason&&a4.includes(e.finishReason)}function a9(e){var t,n,r;let i="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)i+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(i+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(i+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(r=e.candidates)||void 0===r?void 0:r[0]){let t=e.candidates[0];a7(t)&&(i+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(i+=`: ${t.finishMessage}`))}return i}function le(e){return this instanceof le?(this.v=e,this):new le(e)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function ln(e){let t=[],n=e.getReader();for(;;){let{done:e,value:r}=await n.read();if(e)return a3(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].groundingMetadata=e.groundingMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let r={};for(let i of e.content.parts)i.text&&(r.text=i.text),i.functionCall&&(r.functionCall=i.functionCall),i.executableCode&&(r.executableCode=i.executableCode),i.codeExecutionResult&&(r.codeExecutionResult=i.codeExecutionResult),0===Object.keys(r).length&&(r.text=""),n.candidates[t].content.parts.push(r)}}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(e,t,n,r){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function r(){return t.read().then(({value:t,done:i})=>{let s;if(i){if(n.trim()){e.error(new aW("Failed to parse stream"));return}e.close();return}let o=(n+=t).match(lt);for(;o;){try{s=JSON.parse(o[1])}catch(t){e.error(new aW(`Error parsing JSON response: "${o[1]}"`));return}e.enqueue(s),o=(n=n.substring(o[0].length)).match(lt)}return r()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(e,t||[]),s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(e){i[e]&&(r[e]=function(t){return new Promise(function(n,r){s.push([e,t,n,r])>1||a(e,t)})})}function a(e,t){try{var n;(n=i[e](t)).value instanceof le?Promise.resolve(n.value.v).then(l,u):h(s[0][2],n)}catch(e){h(s[0][3],e)}}function l(e){a("next",e)}function u(e){a("throw",e)}function h(e,t){e(t),s.shift(),s.length&&a(s[0][0],s[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield le(t.read());if(n)break;yield yield le(a3(e))}})}(t),response:ln(n)}}(await a2(t,Y.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),r))}async function li(e,t,n,r){let i=await a2(t,Y.GENERATE_CONTENT,e,!1,JSON.stringify(n),r);return{response:a3(await i.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function lo(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},r=!1,i=!1;for(let s of e)"functionResponse"in s?(n.parts.push(s),i=!0):(t.parts.push(s),r=!0);if(r&&i)throw new aW("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new aW("No content is provided for sending chat message.");return r?t:n}(t)}function la(e){let t;return t=e.contents?e:{contents:[lo(e)]},e.systemInstruction&&(t.systemInstruction=ls(e.systemInstruction)),t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],lu={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},lh="SILENT_ERROR";class lc{constructor(e,t,n,r={}){this.model=t,this.params=n,this._requestOptions=r,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:r}=n;if(!t&&"user"!==e)throw new aW(`First content should be with role 'user', got ${e}`);if(!aQ.includes(e))throw new aW(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(aQ)}`);if(!Array.isArray(r))throw new aW("Content should have 'parts' property with an array of Parts");if(0===r.length)throw new aW("Each Content should have at least one part");let i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of r)for(let t of ll)t in e&&(i[t]+=1);let s=lu[e];for(let t of ll)if(!s.includes(t)&&i[t]>0)throw new aW(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,r,i,s,o,a;let l;await this._sendPromise;let u=lo(e),h={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(r=this.params)||void 0===r?void 0:r.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(s=this.params)||void 0===s?void 0:s.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,u]},c=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>li(this._apiKey,this.model,h,c)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(u);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=a9(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,r,i,s,o,a;await this._sendPromise;let l=lo(e),u={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(r=this.params)||void 0===r?void 0:r.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(s=this.params)||void 0===s?void 0:s.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,l]},h=Object.assign(Object.assign({},this._requestOptions),t),c=lr(this._apiKey,this.model,u,h);return this._sendPromise=this._sendPromise.then(()=>c).catch(e=>{throw Error(lh)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=a9(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==lh&&console.error(e)}),c}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf(e,t,n,r){return(await a2(t,Y.COUNT_TOKENS,e,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(e,t,n,r){return(await a2(t,Y.EMBED_CONTENT,e,!1,JSON.stringify(n),r)).json()}async function lp(e,t,n,r){let i=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await a2(t,Y.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:i}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=ls(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let r=la(e),i=Object.assign(Object.assign({},this._requestOptions),t);return li(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},r),i)}async generateContentStream(e,t={}){var n;let r=la(e),i=Object.assign(Object.assign({},this._requestOptions),t);return lr(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},r),i)}startChat(e){var t;return new lc(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let r={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},i=null!=e.generateContentRequest;if(e.contents){if(i)throw new aJ("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=e.contents}else if(i)r=Object.assign(Object.assign({},r),e.generateContentRequest);else{let t=lo(e);r.contents=[t]}return{generateContentRequest:r}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),r=Object.assign(Object.assign({},this._requestOptions),t);return lf(this.apiKey,this.model,n,r)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:lo(e)}:e,r=Object.assign(Object.assign({},this._requestOptions),t);return ld(this.apiKey,this.model,n,r)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return lp(this.apiKey,this.model,e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new aW("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new lg(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new aJ("Cached content must contain a `name` field.");if(!e.model)throw new aJ("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new aJ(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let r=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new lg(this.apiKey,r,n)}}const ly=function(e,t){let n=(function(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)})("object"==typeof e?e:function(e=e4){let t=e9.get(e);if(!t&&e===e4&&eS())return to();if(!t)throw ti.create("no-app",{appName:e});return t}(),"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!n._initialized){let e=eI("firestore");e&&function(e,t,n,r={}){var i;let s=(e=ai(e,ao))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&na("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=nt.MOCK_USER;else{t=function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ev(JSON.stringify({alg:"none",type:"JWT"})),ev(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new nc(nh.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new nt(s)}e._authCredentials=new ng(new nd(t,n))}}(n,...e)}return n}(to({apiKey:"AIzaSyA3n0yJDEGULLwPmO5PlY906sVxjVTYLnw",authDomain:"my-first-pwa-1af14.firebaseapp.com",projectId:"my-first-pwa-1af14",storageBucket:"my-first-pwa-1af14.appspot.com",messagingSenderId:"764859055293",appId:"1:764859055293:web:e912e7c3e2bd74098b4bd4"}));async function lv(){n=new lm((await function(e){e=ai(e,al);let t=ai(e.firestore,ad);return(function(e,t,n={}){let r=new nf;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new o1({next:a=>{s.eu(),t.enqueueAndForget(()=>ow(e,o));let l=a.docs.has(n);!l&&a.fromCache?i.reject(new nc(nh.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&a.fromCache&&r&&"server"===r.source?i.reject(new nc(nh.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new oT(new rL(n.path),s,{includeMetadataChanges:!0,ua:!0});return ov(e,o)})(await o4(e),e.asyncQueue,t,n,r)),r.promise})(ap(t),e._key).then(n=>(function(e,t,n){let r=n.docs.get(t._key),i=new aG(e);return new a$(e,i,t._key,r,new aj(n.hasPendingWrites,n.fromCache),t.converter)})(t,e,n))}(ac(ly,"apikey","googlegenai"))).data().key).getGenerativeModel({model:"gemini-1.5-flash"})}const lw=document.getElementById("taskInput"),lE=document.getElementById("addTaskBtn"),lb=document.getElementById("taskList"),l_=document.getElementById("send-btn"),lT=document.getElementById("chat-input"),lC=document.getElementById("chat-history");async function lI(){let e=await lA();lb.innerHTML="";let t=e.map(e=>({id:e.id,text:e.text,completed:e.completed,timeCreated:e.timeCreated||new Date().toISOString()}));t.sort((e,t)=>new Date(t.timeCreated)-new Date(e.timeCreated)),t.forEach(e=>{e.completed||lx(e.id,e.text)})}async function lS(e){return(await function(e,t){var n;let r=ai(e.firestore,ad),i=ac(e),s=(n=e.converter)?n.toFirestore(t):t;return aH(r,[(function(e,t,n,r,i,s={}){let o,a;let l=e.$u(2*(!!s.merge||!!s.mergeFields),t,n,i);aR("Data must be an object, but it was:",l,r);let u=aN(r,l);if(s.merge)o=new nK(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=ak(t,r,n);if(!l.contains(i))throw new nc(nh.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);aP(e,i)||e.push(i)}o=new nK(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new ab(new rh(u),o,a)})(aS(e.firestore),"addDoc",i._key,s,null!==e.converter,{}).toMutation(i._key,ii.exists(!1))]).then(()=>i)}(ah(ly,"todos"),{text:e,completed:!1,timeCreated:new Date().toISOString()})).id}async function lA(){return(await function(e){e=ai(e,aa);let t=ai(e.firestore,ad),n=ap(t),r=new aG(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new nc(nh.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let r=new nf;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new o1({next:n=>{s.eu(),t.enqueueAndForget(()=>ow(e,o)),n.fromCache&&"server"===r.source?i.reject(new nc(nh.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new oT(n,s,{includeMetadataChanges:!0,ua:!0});return ov(e,o)})(await o4(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new az(t,r,e,n)))}(ah(ly,"todos"))).docs.map(e=>({id:e.id,...e.data()}))}function lx(e,t){let n=document.createElement("li");n.id=e,n.textContent=t,n.tabIndex=0,lb.appendChild(n)}async function lN(e){if(e.startsWith("add task")){let t=e.replace("add task","").trim();return t?(await lS(t),lR("Task '"+t+"' added!")):lR("Please enter a task"),!0}if(e.startsWith("complete")){let t=e.replace("complete","").trim();return t?lR(await lk(t)?`Task '${t}' marked as completed!`:"Task not found"):lR("Please enter a task name"),!0}return!1}async function lD(e){let t=await n.generateContent(e);lR(t.candidates[0]?.content?.parts[0]?.text||"No response")}function lR(e){let t=document.createElement("div");t.textContent=e,t.className="history",lC.appendChild(t)}async function lk(e){let t=(await lA()).find(t=>t.text.toLowerCase()===e.toLowerCase());return!!t&&(await aK(ac(ly,"todos",t.id),{completed:!0}),lI(),!0)}window.addEventListener("load",()=>{lv(),lI()}),lE.addEventListener("click",async()=>{let e=lw.value.trim();if(e){let t=await lS(e);lw.value="",lx(t,e)}else alert("Please enter a task!")}),lb.addEventListener("click",async e=>{"LI"===e.target.tagName&&(await aK(ac(ly,"todos",e.target.id),{completed:!0}),e.target.remove())}),lw.addEventListener("keypress",function(e){"Enter"===e.key&&lE.click()}),lb.addEventListener("keypress",async function(e){"LI"===e.target.tagName&&"Enter"===e.key&&(await aK(ac(ly,"todos",e.target.id),{completed:!0}),lI())}),l_.addEventListener("click",async()=>{let e=lT.value.trim().toLowerCase();e?await lN(e)||await lD(e):lR("Please enter a prompt")});var lO={};if(lO=new URL("service-worker.833c79d9.js",import.meta.url).toString(),"serviceWorker"in navigator){let e=new URL(lO);navigator.serviceWorker.register(e.href).then(()=>console.log("Service Worker Registered")).catch(e=>console.error("Service Worker Error:",e))}window.addEventListener("error",function(e){console.error("Error occurred: ",e.message)});
//# sourceMappingURL=index.a07e2819.js.map
