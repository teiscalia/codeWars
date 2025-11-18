// You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

// Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.

function oddBall(arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] == "odd") {
      // return i;
      if (arr.includes(i)) {
        return "true";
      } else {
        return "false";
      }
    }
  }
}

// console.log(oddBall(["even", 10, "odd", 2, "even"]));
console.log(
  oddBall([
    "even",
    4,
    "even",
    7,
    "even",
    55,
    "even",
    6,
    "even",
    9,
    "odd",
    3,
    "even",
  ])
);
