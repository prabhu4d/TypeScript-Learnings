/**
 *  "var" is function scoped
 *  "let" is blocked scoped
 */

var index = 0;
var array = [1, 2, 3];
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}
console.log(index);

// ======================     Functions create a new scope
var foo = 123;
function test() {
  var foo = 456;
}
test();
console.log(foo); // 123

// =========================   Generated JS
var foo1 = "123";
if (true) {
  let foo1 = 123;
}

// becomes //

// var foo1 = "123";
// if (true) {
//   var foo1_1 = 123; // Renamed
// }

// =========================    Switch
let n = "x";
switch (n) {
  case "x": {
    let x = 5;
    // ...
    break;
  }
  case "y": {
    let x = 10;
    // ...
    break;
  }
}

// ======================= let in closures

var funcs = [];
// create a bunch of functions
for (var i = 0; i < 3; i++) {
  funcs.push(function () {
    console.log(i);
  });
}
// call them
for (var j = 0; j < 3; j++) {
  funcs[j]();
}

// var funcs = [];
// // create a bunch of functions
// for (var i = 0; i < 3; i++) {
//   (function () {
//     var local = i;
//     funcs.push(function () {
//       console.log(local);
//     });
//   })();
// }
// // call them
// for (var j = 0; j < 3; j++) {
//   funcs[j]();
// }

// var funcs = [];
// // create a bunch of functions
// for (let i = 0; i < 3; i++) { // Note the use of let
//     funcs.push(function() {
//         console.log(i);
//     })
// }
// // call them
// for (var j = 0; j < 3; j++) {
//     funcs[j]();
// }