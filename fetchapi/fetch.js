// import fetch from "node-fetch";

const response = fetch("https://www.wallhaven.cc");

response
  .then((res) => {
    //   for (const key in res) {
    //     console.log(key);
    //   }
    return res.text();
  })
  .then((data) => {
    console.log(data);
  });
