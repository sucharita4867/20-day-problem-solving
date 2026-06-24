// problem 46
function wordCount(sentence) {
  return sentence.split(" ").reduce((count, word) => {
    count[word] = (count[word] || 0) + 1;
    return count;
  }, {});
}
// problem 47
function longestWord(sentence) {
  return sentence
    .split(" ")
    .reduce((longest, word) => (word.length > longest.length ? word : longest));
}
console.log(longestWord("The quick brown fox jumps over the lazy dog"));

// problem 48
function rotateArray(arr, k) {
  k = k % arr.length;

  return arr.slice(-k).concat(arr.slice(0, -k));
}

// problem 49
function romanToInt(s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (values[s[i]] < values[s[i + 1]]) {
      total -= values[s[i]];
    } else {
      total += values[s[i]];
    }
  }

  return total;
}

// problem 50
function pascalRow(n) {
  let row = [1];

  for (let i = 1; i <= n; i++) {
    let newRow = [1];

    for (let j = 1; j < row.length; j++) {
      newRow.push(row[j - 1] + row[j]);
    }

    newRow.push(1);
    row = newRow;
  }

  return row;
}
