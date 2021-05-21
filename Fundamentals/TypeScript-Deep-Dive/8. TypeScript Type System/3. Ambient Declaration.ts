/**
 *   A major design goal of TypeScript was to make it possible for
 *   you to safely and easily use existing JavaScript libraries in
 *   TypeScript. TypeScript does this by means of declaration.
 */

// ================== Declaration Files
declare var foo: any;
foo = 123; // allowed

/**
 * declare type definitions in global.d.ts or vendor.d.ts
 */

// ================ Variables

interface Process {
  exit(code?: number): void;
}
declare var process: Process;

interface Process {
  exitWithLogging(code?: number): void;
}
process.exitWithLogging = function () {
  console.log("exiting");
  process.exit.apply(process, arguments);
};
