"use strict";var s=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var i=s(function(m,o){
var f=require('@stdlib/array-base-slice/dist'),h=require('@stdlib/array-base-resolve-setter/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function g(t,r){return typeof t[r]=="function"}function l(t,r,u){var e,a;if(g(t,"with"))return t.with(r,u);if(r<0){if(r+=t.length,r<0)throw new RangeError(n('1sT2M',r))}else if(r>=t.length)throw new RangeError(n('1sT2M',r));return e=f(t,0,t.length),a=h(e),a(e,r,u),e}o.exports=l
});var v=i();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
