/**
 * A special declaration file lib.d.ts ships with every installation of TypeScript. 
 * This file contains the ambient declarations for various common JavaScript 
 * constructs present in JavaScript runtimes and the DOM.
 *
 */


// =============  lib.d.ts inside look
/**
 * The contents of lib.d.ts are primarily a bunch of variable declarations 
 * e.g. window, document, math and a bunch of similar interface declarations 
 * e.g. Window , Document, Math.
 */

/* declare var window: Window;

interface Window extends EventTarget, WindowTimers, WindowSessionStorage, WindowLocalStorage, WindowConsole, GlobalEventHandlers, IDBEnvironment, WindowBase64 {
    animationStartTime: number;
    applicationCache: ApplicationCache;
    clientInformation: Navigator;
    closed: boolean;
    crypto: Crypto;
    // so on and so forth...
} */


// ================ Modifying Native Types
interface Window {
    helloWorld(): void;
}

interface Math {
    seedrandom(seed?: string);
}

declare var Date: DateConstructor;



//  ============= Using your own custom lib.d.ts


// ============= Compiler target effect on lib.d.ts


// ============ lib option


// ============= Polyfill for old JavaScript engines
