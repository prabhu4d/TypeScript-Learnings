/**
 *  Fat Arrow Function
 *  1. You don't need to keep typing function
 *  2. It lexically captures the meaning of this
 *  3. It lexically captures the meaning of arguments
 *
 */

class Person {
  constructor(public age: number) {}
  growOld = () => {
    this.age++;
  };
}
var person = new Person(1);
setTimeout(person.growOld, 1000);

setTimeout(function () {
  console.log(person.age);
}, 2000); // 2

// =========== Tip: Arrow Function Need
// Beyond the terse syntax, you only need to use the fat arrow
// if you are going to give the function to someone else to call

// ========== Tip: Arrow Function Danger

// ========= Tip: Arrow functions with libraries that use this

// ========= Tip: Arrow functions and inheritance
class Adder {
  constructor(public a: number) {}
  // This function is now safe to pass around
  add = (b: number): number => {
    return this.a + b;
  };
}

class ExtendedAdder extends Adder {
  // Create a copy of parent before creating our own
  private superAdd = this.add;
  // Now create our override
  add = (b: number): number => {
    return this.superAdd(b);
  };
}

// ==========  Tip: Quick object return
// WRONG WAY TO DO IT
// var foo = () => {
//     bar: 123
// };

// Correct 🌹
var foo = () => ({
  bar: 123,
});
