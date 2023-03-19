//  Readonly Fields
interface Cat {
  name: string;
  breed: string;
}

function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed,
  };
}

const usul = makeCat("Usul", "Tabby");
// usul.name = "Piter"; // Usul is not any more Usul, it is not good

// Readonly Tuples
function makePoint(x: number, y: number): readonly [number, number] {
  return [x, y];
}

const p1 = makePoint(10, 20);
// p1[0] = 20;
console.log({ p1 });

// Really Const Array
const reallyConst = [1, 2, 3] as const;
// reallyConst[1] = 10;
