// problem 21
function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

// console.log(factorial(5));

// problem 22
function fibonacci(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return a;
}

// console.log(fibonacci(6));
