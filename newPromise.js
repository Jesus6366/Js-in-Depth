const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello my friend");
    resolve("Here is your ice cream!"); // Resolve with a string

    // reject("Sorry no ice cream for you");
  }, 2000);
})
  .then((resolved) => {
    console.log("Promise seems to be done!");
    console.log(resolved);
    return "Yo!";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("Hello ?");
console.log(myPromise);
