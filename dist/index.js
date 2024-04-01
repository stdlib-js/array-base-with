"use strict";var h=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var f=h(function(w,s){"use strict";var a=require("@stdlib/array-base-resolve-getter");function p(t,r){return typeof t[r]=="function"}function v(t,r,u){var o=[],i,n,e;if(r<0&&(r+=t.length),r<0||r>=t.length)throw new RangeError("Index out of bounds");if(p(t,"with"))return t.with(r,u);for(e=0;e<t.length;e++)e===r?o.push(u):(n=a(t),i=n(t,e),o.push(i));return o}s.exports=v});var c=f();module.exports=c;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
