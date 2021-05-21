/**
 *    TypeScript Type System
 *
 */

// ============ Basic Annotations
var num: number = 123;
function identity(num: number): number {
  return num;
}

// ===========  Primitive Types
var num: number;
var str: string;
var bool: boolean;

num = 123;
num = 123.456;
// num = "123"; // Error

str = "123";
// str = 123; // Error

bool = true;
bool = false;
// bool = "false"; // Error

// ===========  Arrays
var boolArray: boolean[];

boolArray = [true, false];
console.log(boolArray[0]); // true
console.log(boolArray.length); // 2
boolArray[1] = true;
boolArray = [false, false];

// boolArray[0] = 'false'; // Error!
// boolArray = 'false'; // Error!
// boolArray = [true, 'false']; // Error!

// ===========  Interfaces
interface Name {
  first: string;
  second: string;
}

var name1: Name;
name1 = {
  first: "John",
  second: "Doe",
};

// name1 = {           // Error : `second` is missing
//     first: 'John'
// };
// name1 = {           // Error : `second` is the wrong type
//     first: 'John',
//     second: 1337
// };

// ===========  Inline Type Annotations
var name2: {
  first: string;
  second: string;
};
name2 = {
  first: "John",
  second: "Doe",
};

// name2 = {           // Error : `second` is missing
//     first: 'John'
// };
// name2 = {           // Error : `second` is the wrong type
//     first: 'John',
//     second: 1337
// };

// ===========  Special Types
// ===========  any
var power: any;

// Takes any and all types
power = "123";
power = 123;

// Is compatible with all types
var num: number;
power = num;
num = power;

// ===========  null and undefined
var num: number;
var str: string;

// These literals can be assigned to anything
num = null;
str = undefined;

// ===========  :void
function log(message: string): void {
  console.log(message);
}

// ===========  Generics
function reverse<T>(items: T[]): T[] {
  var toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i]);
  }
  return toreturn;
}

var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1

// Safety!
// reversed[0] = "1"; // Error!
// reversed = ["1", "2"]; // Error!

reversed[0] = 1; // Okay
reversed = [1, 2]; // Okay

// ===========  Union Types
function formatCommandline(command: string[] | string) {
  var line = "";
  if (typeof command === "string") {
    line = command.trim();
  } else {
    line = command.join(" ").trim();
  }

  // Do stuff with line: string
}

// ===========  Intersection Types
function extend<T, U>(first: T, second: U): T & U {
  return { ...first, ...second };
}

const x = extend({ a: "hello" }, { b: 42 });

// x now has both `a` and `b`
const a = x.a;
const b = x.b;

// ===========  Tuple type
var nameNumber: [string, number];

// Okay
nameNumber = ["Jenny", 8675309];

// Error!
// nameNumber = ['Jenny', '867-5309'];

var nameNumber: [string, number];
nameNumber = ["Jenny", 8675309];

var [name3, num] = nameNumber;

// ===========  Type Alias
type StrOrNum = string | number;

// Usage: just like any other notation
var sample1: StrOrNum;
sample1 = 123;
sample1 = "123";

// Just checking
// sample = true; // Error!
type Text1 = string | { text: string };
type Coordinates = [number, number];
type Callback = (data: string) => void;
