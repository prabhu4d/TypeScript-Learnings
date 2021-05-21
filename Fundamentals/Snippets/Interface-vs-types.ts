// ===============  Interface  =================
// =========== Extending

interface point2d {
  x: number;
  y: number;
}

interface point3d extends point2d {
  z: number;
}

// ===========  Merging
interface rect {
  x: number;
  y: number;
}
interface rect {
  name: string;
}

// ================ Types ======================
// Primitives
type Prime = number;

// Unions
type str_num = string | number;

// Shorthand Functions
type sum = (x: number, y: number) => number;

// Conditional Typing
type Emit<T, Y> = T extends Y ? T : never;
