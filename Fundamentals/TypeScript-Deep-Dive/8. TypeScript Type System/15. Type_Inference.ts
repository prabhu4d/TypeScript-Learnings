/**
 * 
 *              TYPE INFERENCE
 * 
 * 
 * TypeScript can infer (and then check) the type of a variable based on a
 * few simple rules. Because these rules are simple you can train your brain
 * to recognize safe / unsafe code (it happened for me and my teammates quite
 * quickly).
 * 
 */


// ================ Variable Definition
let foo = 123; // foo is a `number`
let bar = "Hello"; // bar is a `string`
// foo = bar; // Error: cannot assign `string` to a `number`



// ================ Function Return Type
function add(a: number, b: number) {
    return a + b;
}


// ============== Assignment
type Adder = (a: number, b: number) => number;
let fooAdder: Adder = (a, b) => a + b;

// fooAdder(10,10);


function iTakeAnAdder(adder: Adder) {
    return adder(1, 2);
}
iTakeAnAdder((a, b) => {
    // a = "hello"; // Would Error: cannot assign `string` to a `number`
    return a + b;
});


// =================== Structuring
let fooStruct = {
    bar: [1, 3, 4]
};
// foo.bar[0] = 'hello'; // Would error: cannot assign `string` to a `number`



// =================== Destructuring
let fooDestruct = {
    a: 123,
    b: 456
};
let {a} = fooDestruct;
// a = "hello"; // Would Error: cannot assign `string` to a `number`


// ================= Type Guards


// ================ WARNINGS
// =============== Be careful around parameters

type TwoNumberFunction = (a: number, b: number) => void;
const fooAdd : TwoNumberFunction = (a, b) => { /* do something */ };


// ============== Be careful around function return
function fooReturn(a: number, b: number) {
    return a + addOne(b);
}
// Some external function in a library someone wrote in JavaScript
function addOne(c: any) {
    return c + 1;
}



// =========== noImplicitAny