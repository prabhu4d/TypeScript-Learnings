function getMeAPromise() {
  return new Promise((res, rej) => {
    res(1000);
  });
}
async function foo() {
  try {
    var val = await getMeAPromise();
    console.log(val);
  } catch (err) {
    console.log("Error: ", err.message);
  }
}

foo();

/**
 * Ability to pause function execution.
 * Ability to put a value inside the function.
 * Ability to throw an exception inside the function.
 */
