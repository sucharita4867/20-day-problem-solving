// problem 1
function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
}
countProperties({ a: 1, b: 2, c: 3, d: 3 });
// console.log(countProperties({ a: 1, b: 2, c: 3, d: 3, e: 9 }));

// problem 2
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
// console.log(mergeObjects({ a: 1 }, { b: 2 }));

// problem 3
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
// fizzBuzz(15);

// problem 4
function invertObject(obj) {
  const inverted = {};
  for (let key in obj) {
    inverted[obj[key]] = key;
  }
  return inverted;
}
// console.log(invertObject({ a: 1, b: 2, c: 3 }));
