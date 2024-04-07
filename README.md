<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# arrayWith

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a new array with the element at the specified index replaced with a provided value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import arrayWith from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-with@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-base-with/tags). For example,

```javascript
import arrayWith from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-with@v0.0.0-esm/index.mjs';
```

#### arrayWith( x, index, value )

Returns a new array with the element at the specified index replaced with a provided value.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = arrayWith( x, 0, 5 );
// returns [ 5, 2, 3, 4 ]

out = arrayWith( x, -1, 6 );
// returns [ 1, 2, 3, 6 ]

```

The function accepts the following arguments:

-   **x**: an input array.
-   **index**: element index.
-   **value**: replacement value.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having a `with` method, the function defers execution to that method and assumes that the method has the following signature:

    ```text
    x.with( index, value )
    ```

    If provided an array-like object without a `with` method, the function shallow copies input array data to a new generic array, normalizes a provided index, and sets a specified element.

-   Negative indices are resolved relative to the last array element, with the last element corresponding to `-1`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import arrayWith from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-with@esm/index.mjs';

// Define an array:
var opts = {
    'dtype': 'generic'
};
var x = discreteUniform( 5, -100, 100, opts );

// Define an array containing random index values:
var indices = discreteUniform( 100, -x.length, x.length-1, opts );

// Define an array with random values to set:
var values = discreteUniform( indices.length, -10000, 10000, opts );

// Randomly set elements in the input array:
var i;
for ( i = 0; i < indices.length; i++ ) {
    console.log( 'x = [%s]', arrayWith( x, indices[ i ], values[ i ] ).join( ',' ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-with.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-with

[test-image]: https://github.com/stdlib-js/array-base-with/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-with/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-with/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-with?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-with.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-with/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-with/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-with/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-with/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-with/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-with/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-with/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-with/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-with/main/LICENSE

</section>

<!-- /.links -->
