const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("All done! ");
      reject("There was an error");
    }, ms);
  });
  return timeout;
};

const causeError = async () => {
  try {
    const result = await makeTimeout(2000);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

console.log("Program started");

causeError();
console.log("Program done");
