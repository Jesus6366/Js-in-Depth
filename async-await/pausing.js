const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done! ");
    }, ms);
  });
  return timeout;
};

console.log("Program started");

const fetchData = async () => {
  console.log("Fetching first set of data...");
  const result1 = makeTimeout(2000);
  console.log("Fetching second set of data..", result1);
  const result2 = makeTimeout(2000);
  const finalResult = await Promise.all([result1, result2]);
  console.log("Done fetching data!", finalResult);
};

fetchData();

console.log("Program complete...");
