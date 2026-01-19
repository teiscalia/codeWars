// Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:

// ["ab", "aaa"]    =>  true
// ["trances", "nectar"]    =>  true
// ["compadres", "DRAPES"]  =>  true
// ["parses", "parsecs"]    =>  false
// Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.

// Strings

function letterCheck(arr) {
  secondString = arr[1].toLowerCase().split("").sort().join("");
  firstString = arr[0].toLowerCase().split("").sort().join("");
  console.log(secondString);
  console.log(secondString.length);
  console.log("hi");
  console.log(firstString);

  let i = 0;
  let j = 0;
  let count = 0;

  for (i; i < firstString.length; i++) {
    for (j; j < firstString.length; j++) {
      if (firstString[i] == secondString[j]) {
        count++;
        continue;
      }
      break;
    }
  }
  console.log(count);
  if (count == secondString.length) return true;
  return false;
}

console.log(letterCheck(["trances", "nectar"]));

//======ANOTHER SOLUTION====

function letterCheck(arr) {
  let string1 = arr[0].toLowerCase();
  let string2 = arr[1].toLowerCase();
  return string2.split("").every((letter) => string1.includes(letter));
}
