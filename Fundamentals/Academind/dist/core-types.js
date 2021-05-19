"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
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
if (person.role2 === Role.ADMIN) {
    console.log("Admin Role");
}
