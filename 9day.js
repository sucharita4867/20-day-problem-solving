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
