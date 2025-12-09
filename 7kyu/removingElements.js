// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  return arr.filter((item, index) => {
    if (index % 2 == 0) {
      return item;
    }
  });
}

//2nd Solution added

// function removeEveryOther(arr) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i += 2) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// removeEveryOther(["Hello", "Goodbye", "Hello Again"]);

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
