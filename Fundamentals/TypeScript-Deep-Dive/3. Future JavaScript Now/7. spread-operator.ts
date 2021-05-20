// ============ Apply
function foo(x: number, y: number, z: number) {}
var args = [0, 1, 2];
// foo(...args);

// ============= Destructuring
var [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining); // 1,2,[3,4]

// =============  Array Assingment
var list = [1, 2];
list = [0, ...list, 4];
console.log(list); // [0,1,2,4]

// ========= Object Spread
const a = { x: 0, y: 2, z: 33 };
const b = { x: 11, y: 22 };

const ab = { ...a, ...b };
console.log(ab);
