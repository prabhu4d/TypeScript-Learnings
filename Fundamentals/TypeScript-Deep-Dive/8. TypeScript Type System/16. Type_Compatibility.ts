/**
 *
 *
 * Type Compatibility (as we discuss here) determines if one thing can be
 * assigned to another. E.g. string and number are not compatible:
 *
 */

let str: string = 'Hello';
let num: number = 123;

// str = num; // ERROR: `number` is not assignable to `string`
// num = str; // ERROR: `string` is not assignable to `number`

// ============== soundness
let fooSoundness: any = 123;
fooSoundness = 'Hello';

// Later
fooSoundness.toPrecision(3); // Allowed as you typed it as `any`

// =============== Structural
interface Point2D {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}
var point2D: Point2D = { x: 0, y: 10 };
var point3D: Point3D = { x: 0, y: 10, z: 20 };
function iTakePoint2D(point: Point2D) {
  /* do something */
}

iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay
// iTakePoint2D({ x: 0 }); // Error: missing information `y`

// =========== Variance
// ???

// ==================   Functions
// =========== Return Type
/** Type Hierarchy */
interface Point2D {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}

/** Two sample functions */
let iMakePoint2D = (): Point2D => ({ x: 0, y: 0 });
let iMakePoint3D = (): Point3D => ({ x: 0, y: 0, z: 0 });

/** Assignment */
iMakePoint2D = iMakePoint3D; // Okay
// iMakePoint3D = iMakePoint2D; // ERROR: Point2D is not assignable to Point3D

// ========== Number of Arguments
let iTakeSomethingAndPassItAnErr = (x: (err: Error, data: any) => void) => {
  /* do something */
};

iTakeSomethingAndPassItAnErr(() => null); // Okay
iTakeSomethingAndPassItAnErr((err) => null); // Okay
iTakeSomethingAndPassItAnErr((err, data) => null); // Okay

// ERROR: Argument of type '(err: any, data: any, more: any) => null' is not assignable to parameter of type '(err: Error, data: any) => void'.
// iTakeSomethingAndPassItAnErr((err, data, more) => null);

// ============== Optional and Rest Parameters
let foo = (x: number, y: number) => {
  /* do something */
};
let bar = (x?: number, y?: number) => {
  /* do something */
};
let bas = (...args: number[]) => {
  /* do something */
};

foo = bar = bas;
bas = bar = foo;

// ========== Types of arguments
/** Event Hierarchy */
interface Event {
  timestamp: number;
}
interface MouseEvent extends Event {
  x: number;
  y: number;
}
interface KeyEvent extends Event {
  keyCode: number;
}

/** Sample event listener */
enum EventType {
  Mouse,
  Keyboard,
}
function addEventListener(eventType: EventType, handler: (n: Event) => void) {
  /* ... */
}

// Unsound, but useful and common. Works as function argument comparison is bivariant
// addEventListener(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

// Undesirable alternatives in presence of soundness
addEventListener(EventType.Mouse, (e: Event) =>
  console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y)
);
addEventListener(EventType.Mouse, <(e: Event) => void>(
  ((e: MouseEvent) => console.log(e.x + ',' + e.y))
));

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
// addEventListener(EventType.Mouse, (e: number) => console.log(e));

// ================ ENUMS
enum Status {
  Ready,
  Waiting,
}
enum Color {
  Red,
  Blue,
  Green,
}

let statuss = Status.Ready;
let color = Color.Red;
let num1 = 0;

// statuss = color; // ERROR

// ================ Classess
class Animal {
  feet: number;
  constructor(name: string, numFeet: number) {
    /** do something */
  }
}

class Size {
  feet: number;
  constructor(meters: number) {
    /** do something */
  }
}

let a: Animal;
let s: Size;

a = s; // OK
s = a; // OK

/**
 * 
 * 
 * 
class Animal { protected feet: number; }
class Cat extends Animal { }

let animal: Animal;
let cat: Cat;

animal = cat; // OKAY
cat = animal; // OKAY


class Size { protected feet: number; }

let size: Size;

animal = size; // ERROR
size = animal; // ERROR
 *
 * 
 */

// ============= Generics
interface Empty<T> {}
let x: Empty<number>;
let y: Empty<string>;

x = y; // okay, y matches structure of x

interface NotEmpty<T> {
  data: T;
}
let x1: NotEmpty<number>;
let y1: NotEmpty<string>;

// x1 = y1;  // error, x and y are not compatible

class List<T> {
  add(val: T) {}
}

class Animal1 {
  name: string;
}
class Cat extends Animal1 {
  meow() {}
}

const animals = new List<Animal1>();
animals.add(new Animal1()); // Okay
animals.add(new Cat()); // Okay

const cats = new List<Cat>();
// cats.add(new Animal1()); // Error
cats.add(new Cat()); // Okay
