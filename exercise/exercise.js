function printAsyncName(name, printHello) {
  setTimeout(printHello, 1000);
  setTimeout(() => console.log(name), 2000);
}

const printHello = () => {
  console.log("Hello ");
};

printAsyncName("Joele", printHello);
