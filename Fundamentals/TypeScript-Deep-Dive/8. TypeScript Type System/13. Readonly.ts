/**
 *
 *        READONLY
 *
 *
 * TypeScript's type system allows you to mark individual properties on an
 * interface as readonly. This allows you to work in a functional way
 * (unexpected mutation is bad):
 *
 */

function foo(config: { readonly bar: number; readonly bas: number }) {
  // ..
  // config.bar = 10; // Readonly property can't be assigned
}

let config = { bar: 123, bas: 123 };
foo(config);
// You can be sure that `config` isn't changed 🌹

type Foo = {
  readonly bar: number;
  readonly bas: number;
};

// Initialization is okay
let foo1: Foo = { bar: 123, bas: 456 };

// Mutation is not
// foo1.bar = 456; // Error: Left-hand side of assignment expression cannot be a constant or a read-only property

class FooClass {
  readonly bar = 1; // OK
  readonly baz: string;
  constructor() {
    this.baz = 'hello'; // OK
  }
}

// ============= Readonly
type Foo2 = {
  bar: number;
  bas: number;
};

type FooReadonly = Readonly<Foo2>;

let foo2: Foo = { bar: 123, bas: 456 };
let fooReadonly: FooReadonly = { bar: 123, bas: 456 };

foo.bar = 456; // Okay
// fooReadonly.bar = 456; // ERROR: bar is readonly

// ================ Various Use Cases
interface Props {
  readonly foo: number;
}
interface State {
  readonly bar: number;
}
// export class Something extends React.Component<Props,State> {
//   someMethod() {
//     // You can rest assured no one is going to do
//     this.props.foo = 123; // ERROR: (props are immutable)
//     this.state.baz = 456; // ERROR: (one should use this.setState)
//   }
// }

// ==== Seamless Immutable
/**
 * Declaration
 */
interface FooInfinite {
  readonly [x: number]: number;
}

/**
 * Usage
 */
let foo4: FooInfinite = { 0: 123, 2: 345 };
console.log(foo4[0]); // Okay (reading)
// foo4[0] = 456; // Error (mutating): Readonly

let array: ReadonlyArray<number> = [1, 2, 3];
console.log(foo[0]); // Okay
// array.push(4);           // Error: `push` does not exist on ReadonlyArray as it mutates the array
const newArray = array.concat([4]); // Okay: create a copy

// ================= Automatic Inference
class Person {
  firstName: string = 'John';
  lastName: string = 'Doe';
  get fullName() {
    return this.firstName + this.lastName;
  }
}

const person = new Person();
console.log(person.fullName); // John Doe
// person.fullName = "Dear Reader"; // Error! fullName is readonly

// ============= const vs readonly
let foo3: {
  readonly bar: number;
} = {
  bar: 123,
};

function iMutateFoo(foo3: { bar: number }) {
  foo3.bar = 456;
}

iMutateFoo(foo3); // The foo argument is aliased by the foo parameter
console.log(foo3.bar); // 456!


/** I DON'T UNDERSTAND THE LAST ONE */
