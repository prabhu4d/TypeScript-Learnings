// console.log(5 == "5");  // JS : False, TS : Error
// console.log(5 === '5') // JS : True, TS : Error

// console.log("" == "0");  // JS : False, TS : Error
// console.log(0 == "");    // JS : True, TS : Error

// console.log("" === "0"); // JS : False, TS : Error
// console.log(0 === "");   // JS : False, TS : Error

/**
 * Structural Equality
 */

type IdDisplay = {
  id: string;
  display: string;
};
const list: IdDisplay[] = [
  {
    id: "foo",
    display: "Foo Select",
  },
  {
    id: "bar",
    display: "Bar Select",
  },
];

const fooIndex = list.map((i) => i.id).indexOf("foo");
console.log(fooIndex); // 0
