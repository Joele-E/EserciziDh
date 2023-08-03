let items = {
  id: 1,
  users: ["pippo", "pluto", "topolino"],
  class: "sezione_a",
};
for (key in items) {
  customsetitem(key, items[key]);
}

function customsetitem(key, item) {
  localStorage.setItem(key, item);
}

const storage = localStorage;
console.log(storage);
/* return JSON.stringify(localStorage); */

/* 
const user = {
  id: 1,
  name: "John",
  age: 25,
};

localStorage.setItem("user", JSON.stringify(user));

function getMyStorage(key) {
  let user = JSON.parse(localStorage.getItem(key));
  console.log(user);
}

getMyStorage("user"); */
