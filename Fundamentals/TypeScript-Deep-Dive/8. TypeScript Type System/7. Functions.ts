/*
 *
 * The TypeScript type system pays a lot of love to functions, after all *    they are the core building blocks of a composable system.
 *
 */

// ============= Parameter Annotations

function foo({ bar: number }) {}

// ============== Return type Annotation

interface point {
  x: number;
  y: number;
}

function draw({ x, y }: point): point {
  return {
    x: 10,
    y: 120,
  };
}

// ============ Optional Parameters
function optional(x: number, y?: number): number {
  if (y) return x + y;
  return x;
}

// ============= Overloading
/****
 * Function overloading in TypeScript doesn't come with any runtime overhead. It just allows you to document the manner you expect the function to be called in and the compiler holds the rest of your code in check.
 */

interface paddingType {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

function padding(all: number): paddingType;
function padding(topAndBottom: number, leftAndRight: number): paddingType;
function padding(
  top: number,
  right: number,
  bottom: number,
  left: number
): paddingType;
function padding(a: number, b?: number, c?: number, d?: any): paddingType {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d,
  };
}

// =============== Declaring Functions
type LongHand = {
  (a: number): number;
};

type ShortHand = (a: number) => number;

type LongHandAllowsOverloadDeclarations = {
  (a: number): number;
  (a: string): string;
};
