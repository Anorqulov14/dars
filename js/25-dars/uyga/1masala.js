function greet(name) {
  return new Promise((resolve, reject) => {
    if (name === "") {
      reject("Name required!");
    } else {
      setTimeout(() => {
        resolve(`Hello, ${name}!`);
      }, 2000);
    }
  });
}

greet("Ali")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

greet("")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));