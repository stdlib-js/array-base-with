"use strict";var h=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var f=h(function(w,s){
var a=require('@stdlib/array-base-resolve-getter/dist');function p(t,r){return typeof t[r]=="function"}function v(t,r,u){var o=[],i,n,e;if(r<0&&(r+=t.length),r<0||r>=t.length)throw new RangeError("Index out of bounds");if(p(t,"with"))return t.with(r,u);for(e=0;e<t.length;e++)e===r?o.push(u):(n=a(t),i=n(t,e),o.push(i));return o}s.exports=v
});var c=f();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
