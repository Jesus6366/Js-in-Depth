// throw "There was a bad thing that happened!";

// console.log("hello");

try {
  const message = "hello there";
  console.log(message);

  throw new Error("Boomn!");
} catch (error) {
  console.error(error);
  console.error("caught!");
}

console.log("HI?");
