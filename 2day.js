function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// console.log(reverseString("Hello, World"));

// problem 2
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
// console.log(countVowels("Hello, World"));

// problem 3
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// console.log(isPalindrome("racecart"));
// problem 4

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
// console.log(titleCase("hello world  javascript"));
// problem 5
function countChar(str, char) {
  let count = 0;
  for (let c of str) {
    if (c === char) {
      count++;
    }
  }
  return count;
}
// console.log(countChar("hello world", "o"));

// Recruiter Reach: 3 mail and 3 company
// Recruiter Reach link: https://docs.google.com/spreadsheets/d/1nSniNnveUXar8jGYn5nwROcLXYh_Fs8SYzWTZyw3QEs/edit?gid=657355284#gid=657355284
// job apply : 0 
// github link : https://github.com/sucharita4867/20-day-problem-solving
// interview docs: 
// job apply sheet : https://docs.google.com/spreadsheets/d/1nSniNnveUXar8jGYn5nwROcLXYh_Fs8SYzWTZyw3QEs/edit?gid=0#gid=0
// job search : 