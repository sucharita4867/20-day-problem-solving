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