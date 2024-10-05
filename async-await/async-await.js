const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done! ");
    }, ms);
  });
  return timeout;
};

console.log("Program started");

makeTimeout(1000).then((res) => console.log("From .then()", res));

const fetchStuff = async () => {
  const result = await makeTimeout(2000);
  console.log("From async func", result);
};

fetchStuff();

console.log("Program complete...");
