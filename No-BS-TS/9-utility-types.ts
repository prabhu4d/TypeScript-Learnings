/***
 *
 * Create types based on another types
 */
interface myUser {
  name: string;
  id: string;
  email?: string;
  // what if you need to add phone, then you also need to add in myUserOptionals
}

// Manully partialing the interface
// interface myUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

type myUserOptionals = Partial<myUser>;

const mergeUser = (user: myUser, overrides?: myUserOptionals): myUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  mergeUser(
    { name: "Prabhu", id: "abcd1234", email: "prabhu@email.com" },
    { email: "newemail@prabhu.com" }
  )
);

// email is not longer optional
type requiredUser = Required<myUser>;

type justNameAndEmail = Pick<myUser, "name" | "email">;

type UserWithOutID = Omit<myUser, "id">;

const mapByID = (users: myUser[]): Record<myUser["id"], UserWithOutID> => {
  return users.reduce((acc, value) => {
    const { id, ...others } = value;
    return {
      ...acc,
      [id]: others,
    };
  }, {});
};

console.log(
  mapByID([
    {
      id: "one",
      name: "Prabhu",
    },
    { id: "two", name: "Ammu" },
  ])
);
