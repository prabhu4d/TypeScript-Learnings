/**
 *
 *                     TYPE GUARD
 *
 * Type Guards allow you to narrow down the type of an object within a
 * conditional block.
 *
 */

// ============= typeof
function doSomething(x: number | string) {
  if (typeof x === 'string') {
    // Within the block TypeScript knows that `x` must be a string
    // console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
    console.log(x.substr(1)); // OK
  }
  // x.substr(1); // Error: There is no guarantee that `x` is a `string`
}

// ============= instanceof

class Foo {
  foo = 123;
  common = '123';
}

class Bar {
  bar = 123;
  common = '123';
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // OK
    // console.log(arg.bar); // Error!
  }
  if (arg instanceof Bar) {
    // console.log(arg.foo); // Error!
    console.log(arg.bar); // OK
  }

  console.log(arg.common); // OK
  // console.log(arg.foo); // Error!
  // console.log(arg.bar); // Error!
}

doStuff(new Foo());
doStuff(new Bar());

// ================== in
interface A {
  x: number;
}
interface B {
  y: string;
}

function doStuffin(q: A | B) {
  if ('x' in q) {
    // q: A
  } else {
    // q: B
  }
}

// ================= Literal Type Guard
type TriState = 'yes' | 'no' | 'unknown';

function logOutState(state: TriState) {
  if (state == 'yes') {
    console.log('User selected yes');
  } else if (state == 'no') {
    console.log('User selected no');
  } else {
    console.log('User has not made a selection yet');
  }
}

// ================ null and undefined with strictNullChecks
function foo(a?: number | null) {
  if (a == null) return;

  // a is number now.
}

// =============== User Defined Type Guards
/**
 * Just some interfaces
 */
interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

/**
 * User Defined Type Guard!
 */
function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

/**
 * Sample usage of the User Defined Type Guard
 */
function doStuffUser(arg: Foo | Bar) {
  if (isFoo(arg)) {
    console.log(arg.foo); // OK
    // console.log(arg.bar); // Error!
  } else {
    // console.log(arg.foo); // Error!
    console.log(arg.bar); // OK
  }
}

doStuff({ foo: 123, common: '123' });
doStuff({ bar: 123, common: '123' });

// ================= Type Guards and callbacks
// Example Setup
declare var foo1: { bar?: { baz: string } };
function immediate(callback: () => void) {
  callback();
}

// Type Guard
if (foo1.bar) {
  console.log(foo1.bar.baz); // Okay
  immediate(() => {
    console.log(foo1.bar.baz); // TS error: Object is possibly 'undefined'"
  });
}
