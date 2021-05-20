// ========== Subscribing to the Fate of the promise
const promise = new Promise((resolve, reject) => {
  resolve(123);
});
promise.then((res) => {
  console.log("I get called:", res === 123); // I get called: true
});
promise.catch((err) => {
  // This is never called
});

// =================== Chaining Ability of Promises
const result: Promise<string> = new Promise((res, rej) => {
  let result: string;
  if (1 === 1) {
    result = "1 is equal to 1";
    res(result);
  } else {
    result = "1 is not equal to 1";
    rej(result);
  }
});

result.then((res) => console.log(res)).catch((err) => console.log(err));

// =============== TS and Promises

// =============== Converting a callback style function to return a promise

// ============== Parallel Control Flow
// an async function to simulate loading an item from some server
function loadItem(id: number): Promise<{ id: number }> {
  return new Promise((resolve) => {
    console.log("loading item", id);
    setTimeout(() => {
      // simulate a server delay
      resolve({ id: id });
    }, 1000);
  });
}

// Chained / Sequential
let item1, item2;
loadItem(1)
  .then((res) => {
    item1 = res;
    return loadItem(2);
  })
  .then((res) => {
    item2 = res;
    console.log("done");
  }); // overall time will be around 2s

// Concurrent / Parallel
Promise.all([loadItem(1), loadItem(2)]).then((res) => {
  [item1, item2] = res;
  console.log("done");
}); // overall time will be around 1s


var task1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'one');
});
var task2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 2000, 'two');
});

Promise.race([task1, task2]).then(function(value) {
  console.log(value); // "one"
  // Both resolve, but task1 resolves faster
});