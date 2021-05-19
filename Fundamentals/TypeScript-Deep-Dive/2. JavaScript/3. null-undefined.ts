/**
 *  Something hasn't been initialized : undefined.
 *  Something is currently unavailable: null.
 */

// ============ Checking for either =================================

console.log(null == null); // true (of course)
console.log(undefined == undefined); // true (of course)
console.log(null == undefined); // true

console.log(0 == undefined); // false
console.log("" == undefined); // false
console.log(false == undefined); // false

function foo(arg: string | null | undefined) {
  if (arg != null) {
    // arg must be a string as `!=` rules out both null and undefined.
  }
}

// ============== Checking for root level undefined ==================
var someglobal: any;
if (typeof someglobal !== "undefined") {
  // someglobal is now safe to use
  console.log(someglobal);
}

// =============== Limit explicit use of undefined ==================
// Because TypeScript gives you the opportunity to
// document your structures separately from values

// =============== Node style =======================================
// do set null for err object, use promise and err will be catched

// ================ Don't use undefined as a means of denoting validity ===========
// function toInt(str: string) {
//   return str ? parseInt(str) : undefined;
// }

function toInt(str: string): { valid: boolean; int?: number } {
  const int = parseInt(str);
  if (isNaN(int)) {
    return { valid: false };
  } else {
    return { valid: true, int };
  }
}

// ================ JSON and serialization  =========================
/**
 * JSON-based databases may support null values but not undefined values. 
 * Since attributes set to null are encoded, 
 * you can transmit the intent to clear an attribute by setting its value to null 
 * before encoding and transmitting the object to a remote store.
  Setting attribute values to undefined can save on storage and transmission costs,
 * as the attribute names will not be encoded. 
 * However, this can complicate the semantics of clearing values vs. absent values.
 */
