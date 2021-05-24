/**
 *
 * Enum is way organize a collection of related Values
 *
 */

enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades,
}

let card = CardSuit.Clubs;
// card = "String Value";

// ================== Number Enums and Numbers
enum Color {
  red,
  green,
  blue,
}

console.log(Color.blue);

// =================  Number Enums and Strings
enum Tristate {
  False,
  True,
  Unknown,
}

/***
 *
 *  var Tristate;
  (function (Tristate) {
      Tristate[Tristate["False"] = 0] = "False";
      Tristate[Tristate["True"] = 1] = "True";
      Tristate[Tristate["Unknown"] = 2] = "Unknown";
  })(Tristate || (Tristate = {}));
 * 
 */

// ==================== Changing the number associated with a Number Enum
enum Classes {
  "1st" = 6,
  "2nd",
  "3rd",
  "4th",
  "5th",
}

console.log(Classes);

// =================== Number Enums as Flags
enum AnimalFlags {
  None = 0,
  HasClaws = 1 << 0,
  CanFly = 1 << 1,
}
type Animal = {
  flags: AnimalFlags;
};

function printAnimalAbilities(animal: Animal) {
  var animalFlags = animal.flags;
  if (animalFlags & AnimalFlags.HasClaws) {
    console.log("animal has claws");
  }
  if (animalFlags & AnimalFlags.CanFly) {
    console.log("animal can fly");
  }
  if (animalFlags == AnimalFlags.None) {
    console.log("nothing");
  }
}

let animal: Animal = { flags: AnimalFlags.None };
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws;
printAnimalAbilities(animal); // animal has claws
animal.flags &= ~AnimalFlags.HasClaws;
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
printAnimalAbilities(animal); // animal has claws, animal can fly

// ===================== String Enums
export enum EvidenceTypeEnum {
  UNKNOWN = "",
  PASSPORT_VISA = "passport_visa",
  PASSPORT = "passport",
  SIGHTED_STUDENT_CARD = "sighted_tertiary_edu_id",
  SIGHTED_KEYPASS_CARD = "sighted_keypass_card",
  SIGHTED_PROOF_OF_AGE_CARD = "sighted_proof_of_age_card",
}

// =================== Const Enums
// it is used for lookup tables

const enum Tristate1 {
  False,
  True,
  Unknown,
}

var lie = Tristate1.False;

// ============ Const enum preserveConstEnums
// --preserveConstEnums

// ============== Enums with Static Functions
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false;
      default:
        return true;
    }
  }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun)); // false



// =============== enums are open ended

enum Color {
  DarkRed = 3,
  DarkGreen,
  DarkBlue,
}
