/**
 *
 *  The variables in the outer function have been closed by (or bound in)
 *  the inner function. Hence the term closure
 */

let log = console.log;

function outer(name: string) {
  let value = name;
  function inner() {
    console.log(value);
  }
  return inner;
}

outer("Prabhu")();

function counter() {
  let i = 0;
  return {
    get() {
      return i;
    },
    increment() {
      i++;
    },
  };
}

let counter1 = counter();
log(counter1);
log(counter1.get());
counter1.increment();
log(counter1.get());
