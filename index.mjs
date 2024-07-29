// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-slice@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-setter@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function s(s,n,i){var o;if("function"==typeof s["with"])return s.with(n,i);if(n<0){if((n+=s.length)<0)throw new RangeError(t("null2M",n))}else if(n>=s.length)throw new RangeError(t("null2M",n));return o=e(s,0,s.length),r(o)(o,n,i),o}export{s as default};
//# sourceMappingURL=index.mjs.map
