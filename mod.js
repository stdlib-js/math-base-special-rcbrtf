// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Math.fround?Math.fround:null;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var i,a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"";i=e&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,a,c,f;if(null==r)return t.call(r);i=r[o],f=o,e=null!=(c=r)&&n.call(c,f);try{r[o]=void 0}catch(e){return t.call(r)}return a=t.call(r),e?r[o]=i:delete r[o],a}:function(r){return t.call(r)};var c=i,f="function"==typeof Float32Array;var u=Number.POSITIVE_INFINITY,l="function"==typeof Float32Array?Float32Array:null;var p,s="function"==typeof Float32Array?Float32Array:void 0;p=function(){var r,e,t;if("function"!=typeof l)return!1;try{e=new l([1,3.14,-3.14,5e40]),t=e,r=(f&&t instanceof Float32Array||"[object Float32Array]"===c(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===u}catch(e){r=!1}return r}()?s:function(){throw new Error("not implemented")};var y=new p(1);var g="function"==typeof r?r:function(r){return y[0]=r,y[0]},d=2147483648,v=2147483647,h="function"==typeof Uint32Array;var w="function"==typeof Uint32Array?Uint32Array:null;var b,m="function"==typeof Uint32Array?Uint32Array:void 0;b=function(){var r,e,t;if("function"!=typeof w)return!1;try{e=new w(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(h&&t instanceof Uint32Array||"[object Uint32Array]"===c(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?m:function(){throw new Error("not implemented")};var A=b,_="function"==typeof Float64Array;var E="function"==typeof Float64Array?Float64Array:null;var F,U="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,e,t;if("function"!=typeof E)return!1;try{e=new E([1,3.14,-3.14,NaN]),t=e,r=(_&&t instanceof Float64Array||"[object Float64Array]"===c(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var S=F,I="function"==typeof Uint8Array;var x="function"==typeof Uint8Array?Uint8Array:null;var k,j="function"==typeof Uint8Array?Uint8Array:void 0;k=function(){var r,e,t;if("function"!=typeof x)return!1;try{e=new x(e=[1,3.14,-3.14,256,257]),t=e,r=(I&&t instanceof Uint8Array||"[object Uint8Array]"===c(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?j:function(){throw new Error("not implemented")};var T=k,O="function"==typeof Uint16Array;var V="function"==typeof Uint16Array?Uint16Array:null;var $,G="function"==typeof Uint16Array?Uint16Array:void 0;$=function(){var r,e,t;if("function"!=typeof V)return!1;try{e=new V(e=[1,3.14,-3.14,65536,65537]),t=e,r=(O&&t instanceof Uint16Array||"[object Uint16Array]"===c(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?G:function(){throw new Error("not implemented")};var N,H={uint16:$,uint8:T};(N=new H.uint16(1))[0]=4660;var W=52===new H.uint8(N.buffer)[0],C=!0===W?1:0,L=new S(1),P=new A(L.buffer);function R(r){return L[0]=r,P[C]}var Z=!0===W?1:0,M=new S(1),X=new A(M.buffer);var Y,z,q=Number.NEGATIVE_INFINITY;!0===W?(Y=1,z=0):(Y=0,z=1);var B={HIGH:Y,LOW:z},D=new S(1),J=new A(D.buffer),K=B.HIGH,Q=B.LOW;function rr(r,e){return J[K]=r,J[Q]=e,D[0]}var er="function"==typeof Object.defineProperty?Object.defineProperty:null;var tr=Object.defineProperty;function nr(r){return"number"==typeof r}function ir(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ar(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+ir(i):ir(i)+r,n&&(r="-"+r)),r}var or=String.prototype.toLowerCase,cr=String.prototype.toUpperCase;function fr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!nr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ar(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ar(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===cr.call(r.specifier)?cr.call(t):or.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var ur=Math.abs,lr=String.prototype.toLowerCase,pr=String.prototype.toUpperCase,sr=String.prototype.replace,yr=/e\+(\d)$/,gr=/e-(\d)$/,dr=/^(\d+)$/,vr=/^(\d+)e/,hr=/\.0$/,wr=/\.0*e/,br=/(\..*[^0])0*e/;function mr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!nr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":ur(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=sr.call(t,br,"$1e"),t=sr.call(t,wr,"e"),t=sr.call(t,hr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=sr.call(t,yr,"e+0$1"),t=sr.call(t,gr,"e-0$1"),r.alternate&&(t=sr.call(t,dr,"$1."),t=sr.call(t,vr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===pr.call(r.specifier)?pr.call(t):lr.call(t)}function Ar(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _r=String.fromCharCode,Er=Array.isArray;function Fr(r){return r!=r}function Ur(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Sr(r){var e,t,n,i,a,o,c,f,u,l,p,s,y;if(!Er(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)o+=n;else{if(e=void 0!==n.precision,!(n=Ur(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Fr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Fr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=fr(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!Fr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Fr(a)?String(n.arg):_r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=mr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ar(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,p=n.width,s=n.padRight,y=void 0,(y=p-l.length)<0?l:l=s?l+Ar(y):Ar(y)+l)),o+=n.arg||"",c+=1}return o}var Ir=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function xr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function kr(r){var e,t,n,i;for(t=[],i=0,n=Ir.exec(r);n;)(e=r.slice(i,Ir.lastIndex-n[0].length)).length&&t.push(e),t.push(xr(n)),i=Ir.lastIndex,n=Ir.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function jr(r){var e,t;if("string"!=typeof r)throw new TypeError(jr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[kr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Sr.apply(null,e)}var Tr,Or=Object.prototype,Vr=Or.toString,$r=Or.__defineGetter__,Gr=Or.__defineSetter__,Nr=Or.__lookupGetter__,Hr=Or.__lookupSetter__;Tr=function(){try{return er({},"x",{}),!0}catch(r){return!1}}()?tr:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Vr.call(r))throw new TypeError(jr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Vr.call(t))throw new TypeError(jr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Nr.call(r,e)||Hr.call(r,e)?(n=r.__proto__,r.__proto__=Or,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$r&&$r.call(r,e,t.get),o&&Gr&&Gr.call(r,e,t.set),r};var Wr,Cr,Lr=Tr;!0===W?(Wr=1,Cr=0):(Wr=0,Cr=1);var Pr={HIGH:Wr,LOW:Cr},Rr=new S(1),Zr=new A(Rr.buffer),Mr=Pr.HIGH,Xr=Pr.LOW;function Yr(r,e,t,n){return Rr[0]=r,e[n]=Zr[Mr],e[n+t]=Zr[Xr],e}function zr(r){return Yr(r,[0,0],1,0)}Lr(zr,"assign",{configurable:!1,enumerable:!1,writable:!1,value:Yr});var qr=4294967295,Br=3221225472,Dr=0x40000000000000,Jr=2147483648,Kr=1,Qr=715094163,re=696219795,ee=R(22250738585072014e-324),te=[0,0];function ne(r){var e,t,n,i;return 0===r||function(r){return r!=r}(r)||function(r){return r===u||r===q}(r)?r:(e=((t=R(r)>>>0)&d)>>>0,i=(t&=v)<ee?rr(e|(((R(i=Dr*r)&v)>>>0)/3>>>0)+re>>>0,0):function(r,e){return M[0]=r,X[Z]=e>>>0,M[0]}(i=0,e|(t/3>>>0)+Qr>>>0),i*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(n=i*i*(i/r)),zr.assign(i,te,1,0),te[1]&Jr?(te[0]+=Kr,te[1]&=~Jr):te[1]|=Jr,i=rr(te[0]&qr,te[1]&Br),i+=i*(n=((n=r/(i*i))-i)/(i+i+n)))}function ie(r){return g(1/ne(g(r)))}export{ie as default};
//# sourceMappingURL=mod.js.map
