function sumUntil(maxValue) {
  let rollCount = 0;
  for (let i = 1; i <= maxValue; i++) {
    rollCount += i;
  }

  return rollCount;
}

console.log(sumUntil(5));
