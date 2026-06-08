// problem 1
let a = 5;
let b = 10;
[a, b] = [b, a];
// console.log(a, b);

// problem 2

let n = 52;
if (n % 2 === 0) {
  //   console.log("Even");
} else {
  //   console.log("Odd");
}

// problem 3
function largest(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
// console.log(largest(1790, 20, 195));
//  problem 4
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(toFahrenheit(100));
