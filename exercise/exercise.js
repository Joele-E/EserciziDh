const isLogged = true;

function checkLogin(isLogged) {
  return new Promise((resolve, reject) => {
    let rand = Math.random();
    if (isLogged) {
      resolve(rand);
    } else {
      reject(new Error("Not logged in"));
    }
  });
}

function getInfo(number) {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Could not find Info"));
    }
  });
}

checkLogin(isLogged)
  .then(getInfo)
  .then((info) => console.log(info))
  .catch((err) => console.error(err))
  .finally(() => console.log("Checked user login status"));
