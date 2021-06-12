/**
 *
 *              LITERAL TYPES
 *
 *  Literals are exact values that are JavaScript primitives.
 */

// ============= String Literals
type CardinalDirection = 'North' | 'East' | 'South' | 'West';

function move(distance: number, direction: CardinalDirection) {
  // ...
}

move(1, 'North'); // Okay
// move(1,"Nurth"); // Error!

// ==============  Other literal types
type OneToFive = 1 | 2 | 3 | 4 | 5;
type Bools = true | false;

// ============== Inference
function iTakeFoo(foo: 'foo') {}
const test = {
  someProp: 'foo' as 'foo',
};
iTakeFoo(test.someProp); // Okay!

function iTakeFooType(foo: 'foo') {}
type Test = {
  someProp: 'foo';
};
const testType: Test = {
  // Annotate - inferred someProp is always === 'foo'
  someProp: 'foo',
};
iTakeFoo(testType.someProp); // Okay!

// ============== Use Cases
// String Enum
/** Utility function to create a K:V from a list of strings */
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

/**
 * Sample create a string enum
 */

/** Create a K:V */
const Direction = strEnum(['North', 'South', 'East', 'West']);
/** Create a Type */
type Direction = keyof typeof Direction;

/**
 * Sample using a string enum
 */
let sample: Direction;

sample = Direction.North; // Okay
sample = 'North'; // Okay
// sample = 'AnythingElse'; // ERROR!

// ================== Modelling existing JavaScript APIs

type readOnly = boolean | 'nocursor';

// ==============  Discriminated Unions
