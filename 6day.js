// probelm 26
const user = {
  firstName: "Sara",
  lastName: "Khan",
  age: 25,
};

const { firstName: name, lastName, age } = user;

// console.log(name);
// console.log(lastName);
// console.log(age);

// problem 27
function mergeArrays(...arrays) {
  return arrays.flat();
}
// console.log(mergeArrays([1, 2], [3, 4], [5, 6]));

//  28

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(1000)
  .then(() => {
    console.log("1 sec");
    return delay(2000);
  })
  .then(() => {
    console.log("3 sec total");
  });
