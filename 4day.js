// problem 1
function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
}
countProperties({ a: 1, b: 2, c: 3, d: 3 });
// console.log(countProperties({ a: 1, b: 2, c: 3, d: 3, e: 9 }));

// problem 2
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
// console.log(mergeObjects({ a: 1 }, { b: 2 }));

// problem 3
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
// fizzBuzz(15);

// problem 4
function invertObject(obj) {
  const inverted = {};
  for (let key in obj) {
    inverted[obj[key]] = key;
  }
  return inverted;
}
// console.log(invertObject({ a: 1, b: 2, c: 3 }));

// Github Repo: https://github.com/sucharita4867/20-day-problem-solving
// Interview Question Doc: https://docs.google.com/document/d/1DA-eEOuBauO4PulWt0pk4VdlfdtpD2OKGdxKuUlWskY/edit?tab=t.0
// Job Apply Sheet: https://docs.google.com/spreadsheets/d/1nSniNnveUXar8jGYn5nwROcLXYh_Fs8SYzWTZyw3QEs/edit?gid=0#gid=0
// Recruiter Reach: https://docs.google.com/spreadsheets/d/1nSniNnveUXar8jGYn5nwROcLXYh_Fs8SYzWTZyw3QEs/edit?gid=657355284#gid=657355284
// job sheet: https://docs.google.com/document/d/11ELw_ZiR1Q7ON6Z1a6HF_vqIAoSwzHAPb-hfgraXXGs/edit?usp=sharing
