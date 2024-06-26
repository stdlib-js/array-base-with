/*
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

import Complex128Array = require( '@stdlib/array-complex128' );
import Complex64Array = require( '@stdlib/array-complex64' );
import toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
import arrayWith = require( './index' );


// TESTS //

// The function returns an updated array...
{
	arrayWith( [ 1, 2, 3, 4 ], 0, 5 ); // $ExpectType number[]
	arrayWith( new Complex128Array( 5 ), 0, { 're': 1.0, 'im': 1.0 } ); // $ExpectType Complex128Array
	arrayWith( new Complex64Array( 5 ), 0, { 're': 1.0, 'im': 1.0 } ); // $ExpectType Complex64Array
	arrayWith<number>( toAccessorArray( [ 1, 2, 3, 4 ] ), 0, 5 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	arrayWith( 5, 0, 5 ); // $ExpectError
	arrayWith( true, 0, 5 ); // $ExpectError
	arrayWith( false, 0, 5 ); // $ExpectError
	arrayWith( null, 0, 5 ); // $ExpectError
	arrayWith( void 0, 0, 5 ); // $ExpectError
	arrayWith( {}, 0, 5 ); // $ExpectError
	arrayWith( ( x: number ): number => x, 0, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	arrayWith( x, 'abc', 5 ); // $ExpectError
	arrayWith( x, true, 5 ); // $ExpectError
	arrayWith( x, false, 5 ); // $ExpectError
	arrayWith( x, null, 5 ); // $ExpectError
	arrayWith( x, void 0, 5 ); // $ExpectError
	arrayWith( x, [ '1' ], 5 ); // $ExpectError
	arrayWith( x, {}, 5 ); // $ExpectError
	arrayWith( x, ( x: number ): number => x, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3, 4 ];

	arrayWith(); // $ExpectError
	arrayWith( x ); // $ExpectError
	arrayWith( x, 0 ); // $ExpectError
	arrayWith( x, 0, 0, 5 ); // $ExpectError
}
