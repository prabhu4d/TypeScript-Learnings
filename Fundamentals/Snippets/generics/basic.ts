// =================  Array
const last = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};

console.log(last([1, 2, 3]));
console.log(last(["a", "b", "c"]));

// ================ Tuples
const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

console.log(makeArr(1, 2));
console.log(makeArr(1, "2"));

// ============= Extending Generic Type
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const fullname = makeFullName({
  firstName: "Prabhu",
  lastName: "Krishna Moorthy",
});
console.log(fullname);

// ========== Interface
interface Tab<T> {
  id: number;
  position: string;
  tab: T;
}

const numberTab: Tab<string> = {
  id: 1,
  position: "Manager",
  tab: "Note",
};

console.log(numberTab);
