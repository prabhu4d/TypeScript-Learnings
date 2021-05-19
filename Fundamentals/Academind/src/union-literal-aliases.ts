type Combinable = string | number;
type resultType = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: resultType
) {
  let result: string | number;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combineAges = combine("23", "10", "as-text");
console.log(combineAges);
