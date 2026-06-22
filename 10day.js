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
