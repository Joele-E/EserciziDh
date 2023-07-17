function sum(...numbers) {
  return numbers.reduce((number, added) => added + number);
}

console.log(sum(1, 2, 3, 4, 5));
