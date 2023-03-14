function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

// TS not showing return type
// const addStrings: (str1: string, str2: string) => string
const addStrings = (str1: string, str2: string): string => `${str1} ${str2}`;

// Union Types
type UnionParams = string | number;
const format = (title: string, params: UnionParams): string =>
  `${title} ${params}`;

// Void
const printFormat = (title: string, params: UnionParams): void =>
  console.log(format(title, params));

// Promises
const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data fetched from ${url}`);

// Rest parameters
const introduce = (salutation: string, ...names: string[]): string => {
  return `${salutation} ${names.join(" ")}`;
};
