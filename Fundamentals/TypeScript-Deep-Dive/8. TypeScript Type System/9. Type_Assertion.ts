/**
 * TypeScript allows you to override its inferred and analyzed view of types
 * in any way you want to. This is done by a mechanism called "type
 * assertion". TypeScript's type assertion is purely you telling the
 * compiler that you know about the types better than it does, and that it
 * should not second guess you.
 */

interface Foo {
    bar: number;
    bas: string;
}
var foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';

// ===========  as foo vs. <foo>
var foo1: any;
var bar = <string> foo1; // bar is now of type "string"


// ============ Double Assertion
function handler (event: Event) {
    let mouseEvent = event as MouseEvent;
}

function handler1(event: Event) {
    let element = event as HTMLElement; // Error: Neither 'Event' nor type 'HTMLElement' is assignable to the other
}

function handler2(event: Event) {
    let element = event as unknown as HTMLElement; // Okay!
}