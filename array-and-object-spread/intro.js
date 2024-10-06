const array = [10, 20, 30, 40, 50];

const arrayCopy1 = [];

for (const value of array) {
  arrayCopy1.push(value);
}

arrayCopy1.push(60);

console.log(arrayCopy1);

const arrayCopy2 = [...array, 60, 70, 80];

console.log(arrayCopy2);
