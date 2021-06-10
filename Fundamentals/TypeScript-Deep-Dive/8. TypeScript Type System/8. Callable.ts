// You can annotate callables as a part of a type or an interface as follows

interface ReturnString {
  (): number;
}

declare const foo: ReturnString;
const bar = foo(); // bar is inferred as a string

// ============== Obvious examples
interface Complex {
  (foo: string, bar?: number, ...others: boolean[]): number;
}

interface Overloaded {
  (foo: string): string;
  (foo: number): number;
}

// example implementation
function stringOrNumber(foo: number): number;
function stringOrNumber(foo: string): string;
function stringOrNumber(foo: any): any {
  if (typeof foo === 'number') {
    return foo * foo;
  } else if (typeof foo === 'string') {
    return `hello ${foo}`;
  }
}

const overloaded: Overloaded = stringOrNumber;

// example usage
const str = overloaded(''); // type of `str` is inferred as `string`
const num = overloaded(123); // type of `num` is inferred as `number`

// ================ Arrow Syntax
const simple: (foo: number) => string = (foo) => foo.toString();

// =============== Newable
interface CallMeWithNewToGetString {
  new (): string;
}
// Usage
declare const Foo: CallMeWithNewToGetString;
const bar1 = new Foo(); // bar is inferred to be of type string
