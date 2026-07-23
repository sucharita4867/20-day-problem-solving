// problem1
function findMin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}
// problem 2
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
// problem 3
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return [...duplicates];
}

// problem4
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}
// problem 5
function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }

  return second;
}

// problem 6
function groupEvenOdd(arr) {
  const result = {
    even: [],
    odd: [],
  };

  for (let num of arr) {
    if (num % 2 === 0) {
      result.even.push(num);
    } else {
      result.odd.push(num);
    }
  }

  return result;
}
// problem 7

function countEven(arr) {
  let count = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }

  return count;
}
// problem 8
function removeFalsy(arr) {
  const result = [];

  for (let value of arr) {
    if (value) {
      result.push(value);
    }
  }

  return result;
}

// problem 9
function containsWord(sentence, word) {
  return sentence.includes(word);
}

// problem 10
function findAverage(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum / arr.length;
}

// problem 11
function toUpperCaseString(str) {
  return str.toUpperCase();
}
// problem 12

function longestLength(arr) {
  let maxLength = 0;

  for (let str of arr) {
    if (str.length > maxLength) {
      maxLength = str.length;
    }
  }

  return maxLength;
}

// problem 13
function countCharacters(str) {
  return str.length;
}
// problem 14
function getPositiveNumbers(arr) {
  const result = [];

  for (let num of arr) {
    if (num > 0) {
      result.push(num);
    }
  }

  return result;
}

// problem 15
function findFirstGreaterThanTen(arr) {
  for (let num of arr) {
    if (num > 10) {
      return num;
    }
  }
}

// problem 15
function countOdd(arr) {
  let count = 0;

  for (let num of arr) {
    if (num % 2 !== 0) {
      count++;
    }
  }

  return count;
}
// problem 16
// Remove Negative Numbers
function removeNegative(arr) {
  const result = [];

  for (let num of arr) {
    if (num >= 0) {
      result.push(num);
    }
  }

  return result;
}
// problem 17
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}
// problem 18
function sumEven(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}

// problem 19
function shortestWord(arr) {
  let shortest = arr[0];

  for (let word of arr) {
    if (word.length < shortest.length) {
      shortest = word;
    }
  }

  return shortest;
}

// problem 20
function removeDuplicateNumbers(arr) {
  const result = [];

  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

// problem 21
function containsValue(arr, value) {
  return arr.includes(value);
}
// problem 22
function countUppercase(str) {
  let count = 0;

  for (let char of str) {
    if (char >= "A" && char <= "Z") {
      count++;
    }
  }

  return count;
}

// problem 23
function multiplyArray(arr) {
  let result = 1;

  for (let num of arr) {
    result *= num;
  }

  return result;
}

// Problem 24: Count Digits in a Number
function countDigits(num) {
  let count = 0;

  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }

  return count;
}
// Problem 25: Find the Last Element of an Array
function lastElement(arr) {
  return arr.pop();
}

// Problem 26: Reverse an Array

function reverseArray(arr) {
  return arr.reverse();
}

// Problem 27: Find the Largest Number in an Array
function findLargest(arr) {
  let largest = arr[0];

  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }

  return largest;
}


// Problem 28: Check if a Number Exists in an Array
function hasNumber(arr, num) {
  for (let value of arr) {
    if (value === num) {
      return true;
    }
  }

  return false;
}
