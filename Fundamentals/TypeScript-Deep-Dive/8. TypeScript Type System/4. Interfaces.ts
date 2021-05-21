/**
 * Interfaces have zero runtime JS impact.
 * There is a lot of power in TypeScript interfaces
 * to declare the structure of variables.
 */

// Sample A - inline Annotation
declare var myPoint: { x: number; y: number };

// Sample B - Interface
interface Point {
  x: number;
  y: number;
}
declare var myPoint2: Point;

// ------------ Extending Interface
// Lib a.d.ts
interface Point {
  x: number;
  y: number;
}
// Lib b.d.ts
interface Point {
  z: number;
}
declare var myPoint1: Point;

myPoint1.z; // Allowed

// --------------- Classes implements interfaces
interface Point {
  x: number;
  y: number;
  z: number; // New member
}

class MyPoint implements Point {
  x: number;
  y: number;
  z: number;
}

var foo: Point = new MyPoint();

// ================Not every interface is implementable easily

// interface Crazy {
//   new (): {
//     hello: number;
//   };
// }

// class CrazyClass implements Crazy {
//   constructor() {
//     return { hello: 123 };
//   }
// }
// // Because
// const crazy = new CrazyClass(); // crazy would be {hello:123}
