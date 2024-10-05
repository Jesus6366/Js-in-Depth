const fetchData = async () => {
  return "Hello";
};

const result = fetchData();
console.log(result);

result
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));

const useHello = async () => {
  const result = await fetchData();
  console.log(result, "from async");
};

useHello();
