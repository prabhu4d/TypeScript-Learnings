"use strict";
function add(n1, n2) {
    return n1.toString() + n2.toString();
}
function show(name) {
    console.log("Hello " + name);
}
function addAndShow(a, b, cb) {
    let result = a + b;
    cb(result);
}
console.log(add(10, 20));
show("Ammu");
let someValue = undefined;
let combineValues;
combineValues = add;
console.log(combineValues(1, 2));
addAndShow(10, 20, (result) => {
    console.log(result);
});
