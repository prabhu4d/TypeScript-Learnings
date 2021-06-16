/***
 *
 *
 *
 */

class Foo {
  constructor(public message: string) {}
  log() {
    console.log(this.message);
  }
}

let foo: any = {};
foo['Hello'] = new Foo('World');
foo['Hello'].log(); // World

// toString is called if index is Object
let obj = {
  toString() {
    console.log('toString called');
    return 'Hello';
  },
};

// // let foo: any = {};
// foo[obj] = 'World'; // toString called
// console.log(foo[obj]); // toString called, World
// console.log(foo['Hello']); // World

// ============  TypeScript Index Signature
foo[obj.toString()] = 'World';

// ================ Declaring an index signature
let foo1: { [index: string]: { message: string } } = {};

/**
 * Must store stuff that conforms to the structure
 */
/** Ok */
foo1['a'] = { message: 'some message' };
/** Error: must contain a `message` of type string. You have a typo in `message` */
// foo1['a'] = { messages: 'some message' };

/**
 * Stuff that is read is also type checked
 */
/** Ok */
foo1['a'].message;
/** Error: messages does not exist. You have a typo in `message` */
// foo1['a'].messages;



// ============== All members must conform to the string index signature
interface FooMem {
  x: number;
  y: number;
}
let foo2: FooMem = { x: 1, y: 2 };

// Directly
foo2['x']; // number

// Indirectly
let x = 'x';
foo2[x]; // number



// =========== Using a limited set of string literals
type Index = 'a' | 'b' | 'c'
type FromIndex = { [k in Index]?: number }

const good: FromIndex = {b:1, c:2}

// Error:
// Type '{ b: number; c: number; d: number; }' is not assignable to type 'FromIndex'.
// Object literal may only specify known properties, and 'd' does not exist in type 'FromIndex'.
// const bad: FromIndex = {b:1, c:2, d:3};

type FromSomeIndex<K extends string> = { [key in K]: number }



// =============== Having both string and number indexers
interface ArrStr {
  [key: string]: string | number; // Must accommodate all members

  [index: number]: string; // Can be a subset of string indexer

  // Just an example member
  length: number;
}




// ================= Design Pattern: Nested index signature
/* interface NestedCSS {
  color?: string;
  [selector: string]: string | NestedCSS | undefined;
}

const example: NestedCSS = {
  color: 'red',
  '.subclass': {
    color: 'blue'
  }
}

const failsSilently: NestedCSS = {
  colour: 'red', // No error as `colour` is a valid string selector
} */


interface NestedCSS {
  color?: string;
  nest?: {
    [selector: string]: NestedCSS;
  }
}

const example: NestedCSS = {
  color: 'red',
  nest: {
    '.subclass': {
      color: 'blue'
    }
  }
}

const failsSilently: NestedCSS = {
  // colour: 'red', // TS Error: unknown property `colour`
}




// ================ Excluding certain properties from the index signature
type FieldState = {
  value: string
}

type FormState =
  { isValid: boolean }
  & { [fieldName: string]: FieldState }


// Use it for some JavaScript object you are getting from somewhere 
declare const foo3:FormState; 

const isValidBool = foo3.isValid;
const somethingFieldState = foo3['something'];

// Using it to create a TypeScript object will not work
// const bar: FormState = { // Error `isValid` not assignable to `FieldState
//   isValid: false
// }
