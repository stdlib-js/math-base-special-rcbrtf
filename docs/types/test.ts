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

import rcbrtf = require( './index' );


// TESTS //

// The function returns a number...
{
	rcbrtf( 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	rcbrtf( true ); // $ExpectError
	rcbrtf( false ); // $ExpectError
	rcbrtf( null ); // $ExpectError
	rcbrtf( undefined ); // $ExpectError
	rcbrtf( '5' ); // $ExpectError
	rcbrtf( [] ); // $ExpectError
	rcbrtf( {} ); // $ExpectError
	rcbrtf( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	rcbrtf(); // $ExpectError
}
