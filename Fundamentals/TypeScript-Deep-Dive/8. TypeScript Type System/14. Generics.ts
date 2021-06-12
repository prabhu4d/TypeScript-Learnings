/**
 *
 *
 *
 */

class Queue {
  private data = [];
  push(item) {
    this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
}

const queue = new Queue();
queue.push(0);
queue.push('1'); // Oops a mistake

// a developer walks into a bar
console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1)); // RUNTIME ERROR

/** A class definition with a generic parameter */
class QueueGeneric<T> {
  private data = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

/** Again sample usage */
const queueNumber = new QueueGeneric<number>();
queueNumber.push(0);
// queueNumber.push("1"); // ERROR : cannot push a string. Only numbers allowed

// ^ if that error is fixed the rest would be fine too

function reverse<T>(items: T[]): T[] {
  var toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i]);
  }
  return toreturn;
}

var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1

// Safety!
// reversed[0] = '1';     // Error!
// reversed = ['1', '2']; // Error!

reversed[0] = 1; // Okay
reversed = [1, 2]; // Okay

// ================ Design Pattern: Convenience generic
const getJSON = <T>(config: {
  url: string;
  headers?: { [key: string]: string };
}): Promise<T> => {
  const fetchConfig = {
    method: 'GET',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(config.headers || {}),
  };
  return fetch(config.url, fetchConfig).then<T>((response) => response.json());
};

type LoadUsersResponse = {
  users: {
    name: string;
    email: string;
  }[];  // array of user objects
}
function loadUsers() {
  return getJSON<LoadUsersResponse>({ url: 'https://example.com/users' });
}


