// problem 31
function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

// problem 32
function throttle(fn, limit) {
  let lastCall = 0;

  return function () {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn();
    }
  };
}

// problem 33
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 3;
