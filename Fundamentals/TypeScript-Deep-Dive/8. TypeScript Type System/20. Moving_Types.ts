/**
 *
 * TypeScript's type system is extremely powerful and allows moving and
 * slicing types in ways not possible in any other single language out
 * there.
 *
 *
 * Key motivation for these : You change one thing and everything else
 * just updates automatically and you get nice errors if something is
 * going to break, like a well designed constraint system.
 *
 */

// ============== Copying both the Type + Value
class Foo1 {}
var Bar1 = Foo1;
// var bar1: Bar1; // ERROR: cannot find name 'Bar'

namespace importing {
  export class Foo {}
}

import Bar = importing.Foo;
var bar: Bar; // Okay

// =============== Capturing the type of a variable
var a = 10;
var b: typeof a;
// b = "10";

// =============== Capturing the type of a class member
class Cap {
  foo: number;
}

let capType: Cap['foo'];

declare let _cap: Cap;

let capTyep2: typeof _cap.foo;




// ============= Capturing the type of magic strings
const magicStr = 'Hello';

let magicStr1: typeof magicStr;
magicStr1 = 'Hello';
// magicStr1 = "Hello World";




// ============== Capturing Key Names
const Color = {
  red: 'reddish',
  blue: 'bluish',
};

let color: keyof typeof Color;

color = "red";
color = "blue";
// color = "green";

