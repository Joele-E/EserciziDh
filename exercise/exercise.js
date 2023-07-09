class Person {
  #firstName;
  #lastName;
  #age;
  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(myVal) {
    this.#firstName = myVal;
  }
  get firstName() {
    return this.#firstName;
  }
  set lastName(myVal) {
    this.#lastName = myVal;
  }

  get lastName() {
    return this.#lastName;
  }

  set age(myVal) {
    this.#age = myVal;
  }

  get age() {
    return this.#age;
  }

  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
