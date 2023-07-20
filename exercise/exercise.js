function isAdult(person) {
  let { id, firstName, lastName, age } = person;
  return age >= 18;
}

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

console.log(isAdult(person));
