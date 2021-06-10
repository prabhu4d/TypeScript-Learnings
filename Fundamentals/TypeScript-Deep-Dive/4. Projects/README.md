# Projects

## Compilation Context

- The compilation context is basically just a fancy term for grouping of the files that TypeScript will parse and analyze to determine what is valid and what isn't.
- we use tsconfig.json

### Which Files

- include
- exclude
- files
- \*\*/\*

## Declaration Spaces

### Type Declaration Space

```javascript
class Foo {}
interface Bar {}
type Bas = {};
```

### Variable Declaration Space

```javascript
var foo = 123;
var bar: foo; // ERROR: "cannot find name 'foo'"
```

## Modules

### Global Module

```javascript
// file: foo.ts
var foo = 10;
// file: too.ts
var too = foo;
```

## File Module Details

### ES Module Syntax

```javascript
// file `foo.ts`
export let someVar = 123;
export type SomeType = {
  foo: string,
};
// file `foo.ts`
let someVar = 123;
type SomeType = {
  foo: string,
};
export { someVar, SomeType };
// file `foo.ts`
let someVar = 123;
export { someVar as aDifferentName };
// file `bar.ts`
import { someVar, SomeType } from './foo';
// file `bar.ts`
import { someVar as aDifferentName } from './foo';
// file `bar.ts`
import * as foo from './foo';
// you can use `foo.someVar` and `foo.SomeType` and anything else that foo might export.
import 'core-js'; // a common polyfill library
export * from './foo';
export { someVar } from './foo';
export { someVar as aDifferentName } from './foo';
```

### Default exports/imports

```javascript
// some var
export default someVar = 123;
// OR Some function
export default function someFunction() { }
// OR Some class
export default class SomeClass { }
import someLocalNameForThisFile from "../foo";
```

### Module Paths

#### Relative path modules

```javascript
import * as foo from './foo';
import * as foo from '../foo';
import * as foo from '../someFolder/foo';
```

#### Dynamic lookup

```javascript
import * as foo from 'something/foo'
/*
* ./node_modules/something/foo
* ../node_modules/something/foo
* ../../node_modules/something/foo
/
```

### What is Place

```javascript
import * as foo from 'foo';
```

- foo.ts
- foo/index.ts
- foo/package.json
- package.json

### Overturning dynamic lookup just for types

```javascript
// global.d.ts
declare module 'foo' {
  // Some variable declarations
  export var bar: number; /*sample*/
}
```

```javascript
// anyOtherTsFileInYourProject.ts
import * as foo from 'foo';
// TypeScript assumes (without doing any lookup) that
// foo is {bar:number}
```

### import/require for importing type only

- Imports the type information of the foo module.
- Specifies a runtime dependency on the foo module.

### global.d.ts

- global.d.ts => declare compile-time constants
- lib.d.ts => standard type declarations

## Namespaces

```javascript
(function (something) {
  something.foo = 123;
})(something || (something = {}));

console.log(something); // {foo:123}

(function (something) {
  something.bar = 456;
})(something || (something = {}));

console.log(something); // {foo:123, bar:456}
```

```typescript
namespace Utility {
  export function log(msg) {
    console.log(msg);
  }
  export function error(msg) {
    console.error(msg);
  }
}

// usage
Utility.log('Call me');
Utility.error('maybe!');
```

## Dynamic Import Expressions

```typescript
import(/* webpackChunkName: "momentjs" */ 'moment')
  .then((moment) => {
    // lazyModule has all of the proper types, autocomplete works,
    // type checking works, code references work \o/
    const time = moment().format();
    console.log('TypeScript >= 2.4.0 Dynamic Import Expression:');
    console.log(time);
  })
  .catch((err) => {
    console.log('Failed to load moment', err);
  });
```
