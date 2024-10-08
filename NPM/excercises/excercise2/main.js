const fs = require("fs-extra");

// Define the file name and data to write
const fileName = "hello.txt";
const data = "Hello, from NodeJS!";

// Write data to the file
fs.writeFile(fileName, data, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File created successfully:", fileName);
  }
});
