const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

/* Person1 gets modified as well because person2 
is not a copy of person1 but is instead a reference to person1 */

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
