// Optional Params
function printIngredient(quantity: string, ingrediant: string, extra?: string) {
  console.log(`${quantity} ${ingrediant} ${extra ? extra : ""}`);
}

printIngredient("1C", "Sugar");

// Optional Fields

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }

  return "";
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

// Optional Callbacks
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  callback?.();
}
