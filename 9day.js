// problem 41
function twoSum(arr, target) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[arr[i]] = i;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));

// problem 42
function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent"));

// problem 43
function findMissing(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}
// console.log(findMissing([1, 2, 4, 5], 5));

// problem 44
function isValidParentheses(str) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
