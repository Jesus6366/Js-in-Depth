const monkey = {
  name: "Abu",
  species: "Capuchin",
  hobbies: "Stealing",

  age: 10,
};

const printMonkey = () => {
  monkey.age++;
  console.log(monkey.name);
};

// module.exports = printMonkey; // named export

export { monkey };

export default printMonkey;
