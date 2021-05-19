/**
 *  Core Type
 *  JavaScript has only one number type.
 *  It is a double-precision 64-bit Number
 */
var log = console.log;
log(0.1 + 0.2);
var number = 1111111111111111111111111111111111111111111;
log(number);
// big.js
// library for number manipulation
// NaN
log(NaN === NaN);
log(Number.isNaN(NaN));
log(Number);
// Infinity
log(Number.MAX_SAFE_INTEGER);
log(Number.MAX_VALUE);
log(Number.MIN_VALUE);
log(Number.MIN_SAFE_INTEGER);
log(-1 / 0);
log(1 / 0);
log(Number.POSITIVE_INFINITY === Infinity);
log(Number.NEGATIVE_INFINITY === -Infinity);
log(Infinity > 1);
log(-Infinity < -1);
// Infinitesimal
log(Number.MIN_VALUE / 10);
log(0 < Number.MIN_VALUE);
