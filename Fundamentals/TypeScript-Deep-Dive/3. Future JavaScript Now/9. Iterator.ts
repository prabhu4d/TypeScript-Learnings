interface Iterator<T> {
  next(value?: any): IteratorResult1<T>;
  return?(value?: any): IteratorResult1<T>;
  throw?(e?: any): IteratorResult1<T>;
}

interface IteratorResult1<T> {
  done: boolean;
  value: T;
}

class Component {
  constructor(public name: string) {}
}

class Frame implements Iterator<Component> {
  private pointer = 0;

  constructor(public name: string, public components: Component[]) {}

  public next(): IteratorResult1<Component> {
    if (this.pointer < this.components.length) {
      return {
        done: false,
        value: this.components[this.pointer++],
      };
    } else {
      return {
        done: true,
        value: null,
      };
    }
  }
}

let frame = new Frame("Door", [
  new Component("top"),
  new Component("bottom"),
  new Component("left"),
  new Component("right"),
]);
let iteratorResult1 = frame.next(); //{ done: false, value: Component { name: 'top' } }
let iteratorResult2 = frame.next(); //{ done: false, value: Component { name: 'bottom' } }
let iteratorResult3 = frame.next(); //{ done: false, value: Component { name: 'left' } }
let iteratorResult4 = frame.next(); //{ done: false, value: Component { name: 'right' } }
let iteratorResult5 = frame.next(); //{ done: true, value: null }

//It is possible to access the value of iterator result via the value property:
let component = iteratorResult1.value; //Component { name: 'top' }

class Fib implements Iterator<number> {
  protected f1 = 0;
  protected f2 = 1;

  constructor(protected maxValue?: number) {}

  public next(): IteratorResult1<number> {
    let current = this.f1;
    this.f1 = this.f2;
    this.f2 = current + this.f1;
    if (this.maxValue !== null && current >= this.maxValue) {
      return {
        done: true,
        value: null,
      };
    }
    return {
      done: false,
      value: current,
    };
  }
  [Symbol.iterator](): Iterator<number> {
    return this;
  }
}

let fib1 = new Fib(30);
// console.log(fib1.next());
// console.log(fib1.next());
// console.log(fib1.next());
// console.log(fib1.next());
// console.log(fib1.next());
// console.log(fib1.next());
// console.log(fib1.next());
// console.log(fib1.next());

for (let f of fib1) {
  console.log(f);
}
