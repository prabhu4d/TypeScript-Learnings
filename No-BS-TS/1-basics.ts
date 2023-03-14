let myName: string = "Prabhu";
let phoneNumber: number = 1234567;
let isFake: boolean = true;
let regEx: RegExp = /findme/;

const names: string[] = myName.split("");
const myValues: Array<number> = [1, 2, 3];
// const myValues: Array<number> = [1, 2, 3, "arr"];

interface Person {
  firstName: string;
  lastName?: string;
}

let prabhu: Person = {
  firstName: "Prabhu",
};

let krishna: Person = {
  firstName: "Krishna",
  lastName: "Moorthy",
};

const IDS: Record<number, string> = {
  10: "A",
  20: "B",
};

IDS[30] = "C";

// Conditional Expressions

/*
 * This comparison appears to be unintentional because the types
 * 'string'and'number' have no overlap.ts(2367)
 */
// IDS[20] === 20;

IDS[20] === "20";

// For loops
[1, 2, 3, 4, "5"].forEach((num) => console.log(num));

// TS infers outputs is numbers[]
const outputs = [1, 2, 3, 4].map((num) => num * 10);
