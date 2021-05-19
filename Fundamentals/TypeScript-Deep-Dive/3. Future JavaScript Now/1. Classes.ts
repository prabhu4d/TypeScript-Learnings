// ===============   Classes
// it offers useful structural abstraction

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

let p1 = new Point(10, 20);
let p2 = new Point(20, 30);
let p1p2 = p1.add(p2);
console.log(p1p2);

// ====================  Inheritance
class Point3D extends Point {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  add(point: Point3D) {
    let point2D = super.add(point);
    return new Point3D(point2D.x, point2D.y, this.z + point.z);
  }
}

let p1_3D = new Point3D(0, 10, 50);
let p2_3D = new Point3D(0, 50, 10);
let p3_3D = p1_3D.add(p2_3D);
console.log(p3_3D);

// ===================  Static Methods
class Something {
  static instances = 0;
  constructor() {
    Something.instances++;
  }
}

let s1 = new Something();
let s2 = new Something();
console.log(Something.instances);

// ================  Access Modifiers
class FooBase {
  public x: number;
  private y: number;
  protected z: number;
}

// EFFECT ON INSTANCES
var foo = new FooBase();
foo.x; // okay
// foo.y; // ERROR : private
// foo.z; // ERROR : protected

// EFFECT ON CHILD CLASSES
class FooChild extends FooBase {
  constructor() {
    super();
    this.x; // okay
    // this.y; // ERROR: private
    this.z; // okay
  }
}

// =========== Abstract
abstract class FooCommand {
  abstract execute(): string;
}

// class BarErrorCommand extends FooCommand {} // 'BarErrorCommand' needs implement abstract member 'execute'.

class BarCommand extends FooCommand {
  execute() {
    return `Command Bar executed`;
  }
}
const barCommand = new BarCommand();
barCommand.execute(); // Command Bar executed

// ===========  Constructor is optional
class Cont {}
let cont = new Cont();

// ============ Define using constructor
class Foo {
  x: number;
  constructor(x: number) {
    this.x = x;
  }
}
//  Shorthand
// class Foo {
//     constructor(public x:number) {
//     }
// }

// ============== Property Initializer
class Init {
  members = []; // Initialize directly
  add(x: any) {
    this.members.push(x);
  }
}
