/***
 *
 *  function * is the syntax used to create a generator function.
 *  Calling a generator function returns a generator object.
 *  The generator object just follows the iterator interface
 *  (i.e. the next, return and throw functions).
 *
 */

function* sequence(num) {
  var i = 0;
  while (i < num) {
    yield i++;
  }
}

var iter = sequence(100);
for (let i = 0; i < 110; i++) {
  console.log(iter.next());
}

// =========== Externally Controlled Execution
function* generator() {
  console.log("Execution started");
  yield 0;
  console.log("Execution resumed");
  yield 1;
  console.log("Execution resumed");
}

var iterator = generator();
console.log("Starting iteration"); // This will execute before anything in the generator function body executes
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
