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