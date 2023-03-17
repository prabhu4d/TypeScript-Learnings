export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

type MutationFunction = (v: number) => number;

// Function Params with Params
export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

// Function as Types
const fiveMutation: MutationFunction = (v: number) => v + 5;
const tenMutation: MutationFunction = (v: number) => v + 10;

console.log(arrayMutate([1, 2, 3, 4], fiveMutation));
console.log(arrayMutate([1, 2, 3, 4], tenMutation));

// Returning Function
type AdderFunction = (val: number) => number;

function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(10));
const addTen = createAdder(10);
console.log(addTen(10));
