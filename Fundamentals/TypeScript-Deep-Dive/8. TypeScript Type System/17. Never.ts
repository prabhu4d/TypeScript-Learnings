/**
 *
 *
 * The never type is used in TypeScript to denote this bottom type.
 * Cases when it occurs naturally:
 *
 *  - A function never returns (e.g. if the function body has while(true){
 * })
 *
 *  - A function always throws (e.g. in function foo(){throw new Error
 * ('Not Implemented')} the return type of foo is never)
 *
 */

let foo : never;

// let foo: never = 123; // Error: Type number is not assignable to never

// Okay as the function's return type is `never`
let bar: never = (() => { throw new Error(`Throw my hands in the air like I just don't care`) })();



// ================ Use case: Exhaustive Checks
function fooFails(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }

  // Without a never type we would error :
  // - Not all code paths return a value (strict null checks)
  // - Or Unreachable code detected
  // But because TypeScript understands that `fail` function returns `never`
  // It can allow you to call it as you might be using it for runtime safety / exhaustive checks.
  return fail("Unexhaustive!");
}

function fail(message: string): never { throw new Error(message); }



// ================ Confusion with void
/**
 * 
 * void -> unit
 * never -> falsum
 * 
 */


// ================ Type inference in never returning functions

// Inferred return type: void
function failDeclaration(message: string): never {
  throw new Error(message);
}

// Inferred return type: never
const failExpression = function(message: string): never {
  throw new Error(message);
};


class Base {
    overrideMe() {
        throw new Error("You forgot to override me!");
    }
}

class Derived extends Base {
    overrideMe() {
        // Code that actually returns here
    }
}