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
