function sum(...numbers) {
  return numbers.reduce((number, added) => added + number);
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));
