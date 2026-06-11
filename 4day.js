// problem 1
function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
}
countProperties({ a: 1, b: 2, c: 3, d: 3 });
console.log(countProperties({ a: 1, b: 2, c: 3, d: 3, e: 9 }));

// problem 2
