function add(n1: number, n2: number): string {
  return n1.toString() + n2.toString();
}

function show(name: string): void {
  console.log("Hello " + name);
}

function addAndShow(a: number, b: number, cb: (num: number) => void) {
  let result = a + b;
  cb(result);
}

console.log(add(10, 20));
show("Ammu");

let someValue = undefined;

let combineValues: (a: number, b: number) => string;
combineValues = add;
// combineValues = show;
console.log(combineValues(1, 2));

addAndShow(10, 20, (result) => {
  console.log(result);
});
