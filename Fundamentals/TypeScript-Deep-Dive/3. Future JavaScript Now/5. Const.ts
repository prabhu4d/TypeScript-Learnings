let x = 10;
// Low readability
if (x > 10) {
}

// Better!
const maxRows = 10;
if (x > maxRows) {
}

// =================  const declarations must be initialized
// const foo;

// =================  Left hand side of assignment cannot be a constant
const a = 10;
// a = 20;

// ================  Block Scoped
const b = 20;
if (true) {
  const b = 30;
}

// ================   Deep Immutability
const foo = { bar: 123 };
foo.bar = 456; // Allowed!
console.log(foo); // { bar: 456 }
