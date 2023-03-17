type Three3Coordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: Three3Coordinate,
  c2: Three3Coordinate
): Three3Coordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinate([1, 2, 3], [1, 2, 3]));

// Tuples with Different Types
function useCounter(initial: number): [() => number, (num: number) => void] {
  let count: number = initial;

  return [
    () => {
      console.log("Get Counter");
      return count;
    },
    (num: number) => {
      console.log("Set Counter");
      count = num;
    },
  ];
}

const [counter, setCounter] = useCounter(10);

console.log(counter());
setCounter(20);
console.log(counter());
