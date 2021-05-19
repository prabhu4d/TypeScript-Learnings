enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  role2: Role;
} = {
  name: "Prabhu",
  age: 30,
  hobbies: ["programming", "eating", "music"],
  role: [2, "Programmer"],
  role2: Role.ADMIN,
};

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// person.role.push("Admin");
// push method work
// person.role[1] = 10;
// assign to different type is not allowed
// person.role = [3, "Cooker"];
// assigning whole in correct

if (person.role2 === Role.ADMIN) {
  console.log("Admin Role");
}
