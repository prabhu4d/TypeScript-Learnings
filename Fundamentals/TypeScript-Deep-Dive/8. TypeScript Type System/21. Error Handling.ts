/***
 * 
 * 
 * 
 */

try {
  throw new Error('Something bad happened');
}
catch(e) {
  console.log(e);
}

// ========== Error Sub Types

// ========= RangeError
// Call console with too many arguments
console.log.apply(console, new Array(1000000000)); // RangeError: Invalid array length




// ========= ReferenceError
'use strict';
console.log(notValidVar); // ReferenceError: notValidVar is not defined



// =========== Syntax Error
1****3



// ============= Type Error
('1.2').toPrecision(1); // TypeError: '1.2'.toPrecision is not a function



// ============ URIerror
decodeURI('%'); // URIError: URI malformed



// =========== Always use Error
try {
  throw 'Something bad happened';
}
catch(e) {
  console.log(e);
}



// ========== You don't have to throw an error
function doSomethingAsync(callback: Function){
  callback();
}
function myFunction (callback: (e?: Error)){
  let somethingWrong = true;
  doSomethingAsync(function () {
    if (somethingWrong) {
      callback(new Error('This is my error'))
    } else {
      callback();
    }
  });
}



// ============== Exceptional cases
// ============= Unclear where it is thrown
function runTask1(){}
function runTask2(){}

try {
  const foo = runTask1();
  const bar = runTask2();
}
catch(e) {
  console.log('Error:', e);
}


// ============= Makes graceful handling hard
let foo: number; // Notice use of `let` and explicit type annotation
try {
  foo = runTask1();
}
catch(e) {
  console.log('Error:', e);
}
try {
  const bar = runTask2(foo);
}
catch(e) {
  console.log('Error:', e);
}



// ========== Not well represented in the type system
function validate(value: number) {
  if (value < 0 || value > 100) throw new Error('Invalid value');
}

function validate1(value: number): {error?: string} {
  if (value < 0 || value > 100) return {error:'Invalid value'};
}



