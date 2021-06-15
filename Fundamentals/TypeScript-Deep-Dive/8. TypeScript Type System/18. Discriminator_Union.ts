/***
 *
 * If you have a class with a literal member then you can use that
 * property to discriminate between union members.
 *
 */

interface Square {
  kind: 'square';
  size: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}
type Shape = Square | Rectangle | Circle;

// ================  Exhaustive Checks
interface Circle {
  kind: 'circle';
  radius: number;
}

function area(s: Shape) {
  if (s.kind === 'square') {
    return s.size * s.size;
  } else if (s.kind === 'rectangle') {
    return s.width * s.height;
  } else if (s.kind === 'circle') {
    return Math.PI * s.radius ** 2;
  } else {
    // Okay once more
    const _exhaustiveCheck: never = s;
  }
}

// ============== Switch
function area1(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.width * s.height;
    case 'circle':
      return Math.PI * s.radius * s.radius;
    default:
      const _exhaustiveCheck: never = s;
  }
}

// ============== strictNullChecks
function area2(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.width * s.height;
    case 'circle':
      return Math.PI * s.radius * s.radius;
    default:
      const _exhaustiveCheck: never = s;
      return _exhaustiveCheck;
  }
}

// ============= Throw in exhaustive checks
function assertNever(x: never): never {
  throw new Error('Unexpected value. Should have been never.');
}

// ============ Retrospective Versioning
type DTO =
  | {
      version: 0; // version 0
      name: string;
    }
  | {
      version: 1;
      firstName: string;
      lastName: string;
    }
  // Even later
  | {
      version: 2;
      firstName: string;
      middleName: string;
      lastName: string;
    };
// So on

const dto: DTO = {
  version: 0,
  name: 'Prabhu',
};

function printDTO(dto: DTO) {
  if (dto.version == 0) {
    console.log(dto.name);
  } else if (dto.version == 1) {
    console.log(dto.firstName, dto.lastName);
  } else if (dto.version == 2) {
    console.log(dto.firstName, dto.middleName, dto.lastName);
  } else {
    const _exhaustiveCheck: never = dto;
  }
}



// ========= Redux
type Action
  = {
    type: 'INCREMENT'
  }
  | {
    type: 'DECREMENT'
  }

function counter(state = 0, action: Action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}