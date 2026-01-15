//Count the number of consecutive vowels in a string

console.log("hi");

function getTheVowels(word) {
  vowelSequence = "aeiou";
  currentVowelIndex = 0;
  consecutiveCount = 0;

  for (letter of word) {
    if (letter == vowelSequence[currentVowelIndex]) {
      consecutiveCount++;
      currentVowelIndex = (currentVowelIndex + 1) % vowelSequence.length;
      console.log(currentVowelIndex);
    }
  }
  return consecutiveCount;
}

console.log(getTheVowels("akfheujfkgiaaaofmmfkdfuaiiie"));

//MY ALMOST ANSWER

// function getTheVowels(word) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let i = 0; i < vowels.length; i++) {
//     // console.log(vowels[i]);

//     if (word.includes(vowels[i])) {
//       //   console.log(vowels[i]);
//       count++;
//     }
//     console.log(count);
//   }
//   console.log("hi again");

//   //   if (word.includes) return 0;
// }

//===============FIRST SOLUTION======================
//===================================================
// function getTheVowels(word) {
//   let vowelSequence = "aeiou"; // correct sequence of vowels
//   let currentVowelIndex = 0; // index of vowel in the sequence currentlly being checked
//   let consecutiveCount = 0; // how many consecutive vowels are in the word

//   //  check every letter of the word against current vowel
//   for (letter of word) {
//     if (letter == vowelSequence[currentVowelIndex]) {
//       consecutiveCount++;
//       currentVowelIndex = (currentVowelIndex + 1) % vowelSequence.length;
//     }
//   }

//   return consecutiveCount;
// }

//======OTHER ANSWERS ====
// let mySet = "aeiou";
// console.log(mySet[6]);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// console.log(sum); // Output: 15

// console.log(getTheVowels("erfaiekjudhyfimngukduo"));

// const getTheVowels = (word, vowels = "aeiou") =>
//   word
//     .split("")
//     .reduce(
//       (count, char) => count + (char === vowels[count % vowels.length]),
//       0
//     );

// function getTheVowels(string) {
//     let arrayOfVowels = ['a','e','i','o','u'];
//     let count = 0;
//     let arrayOfLetters = string.split('');

//     // Iterates through the array of letters
//     for (let i = 0; i < arrayOfLetters.length; i++) {
//         // If "a" is found
//         if (arrayOfVowels[0] == arrayOfLetters[i]) {    // (really means first index of array)
//             // Increment count by one.
//             count++;
//             // Remove "a" from array of vowels
//             arrayOfVowels.shift();                      // (really means first index of array)
//         }
//         // If arrayOfVowels is empty
//         if (arrayOfVowels.length == 0) {
//             // Reload the array of vowels
//             arrayOfVowels = ['a','e','i','o','u'];
//         }
//     }
//     return count;
// }

// const exampleOne = getTheVowels("Hello world");
// const exampleTwo = getTheVowels("agrtertyfikfmroyrntbvsukldkfa");
// const exampleThree = getTheVowels("Humuhumunukunukuapuaa");

// console.log(exampleOne);
// console.log(exampleTwo);
// console.log(exampleThree);
