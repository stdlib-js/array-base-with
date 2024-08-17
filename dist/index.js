"use strict";var q=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var p=q(function(H,g){
var R=require('@stdlib/array-base-slice/dist'),j=require('@stdlib/array-base-resolve-setter/dist'),k=require('@stdlib/ndarray-base-normalize-index/dist'),z=require('@stdlib/error-tools-fmtprodmsg/dist');function C(a,r){return typeof a[r]=="function"}function D(a,r,o){var e,n;if(C(a,"with"))return a.with(r,o);if(r=k(r,a.length-1),r<0)throw new RangeError(z("invalid argument. Index argument is out-of-bounds. Value: `%d`.",r));return e=R(a,0,a.length),n=j(e),n(e,r,o),e}g.exports=D
});var b=q(function(J,I){
var h=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),m=require('@stdlib/array-base-assert-is-boolean-data-type/dist'),E=require('@stdlib/assert-is-complex-like/dist'),P=require('@stdlib/boolean-ctor/dist'),y=require('@stdlib/array-base-arraylike2object/dist'),f=require('@stdlib/strided-base-reinterpret-complex/dist'),w=require('@stdlib/strided-base-reinterpret-boolean/dist'),T=require('@stdlib/ndarray-base-normalize-index/dist'),V=require('@stdlib/complex-float64-real/dist'),L=require('@stdlib/complex-float64-imag/dist'),M=require('@stdlib/error-tools-fmtprodmsg/dist');function d(a,r,o,e,n,v){var t,i;for(t=v,i=0;i<a.length;i++)e[t]=a[i],t+=n;return e[v+r*n]=o,e}function O(a,r,o,e,n,v){var t,i,s,u,l,c;for(t=a.data,i=e.data,s=a.accessors[0],u=e.accessors[1],l=v,c=0;c<t.length;c++)u(i,l,s(t,c)),l+=n;return u(i,v+r*n,o),i}function S(a,r,o,e,n,v){var t,i,s,u;for(t=n*2,i=v*2,s=0;s<a.length/2;s++)u=s*2,e[i]=a[u],e[i+1]=a[u+1],i+=t;return i=(v+r*n)*2,e[i]=V(o),e[i+1]=L(o),e}function W(a,r,o,e,n,v){var t,i;if(r=T(r,a.length-1),r<0)throw new RangeError(M("invalid argument. Index argument is out-of-bounds. Value: `%d`.",r));return t=y(a),i=y(e),t.accessorProtocol||i.accessorProtocol?h(t.dtype)&&h(i.dtype)&&E(o)?(S(f(a,0),r,o,f(e,0),n,v),e):m(t.dtype)&&m(i.dtype)?(d(w(a,0),r,P(o),w(e,0),n,v),e):(O(t,r,o,i,n,v),e):(d(a,r,o,e,n,v),e)}I.exports=W
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=p(),F=b();A(B,"assign",F);module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
