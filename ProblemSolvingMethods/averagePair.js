// function averagePair(arr, target) {
//   if (arr.length === 0) return false;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       let avg = (arr[i] + arr[j]) / 2;
//       if (avg === target) return true;
//     }
//   }
//   return false;
// } O(n^2) haydens first attempt

function averagePair(arr, num) {
  let start = 0
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true;
    else if (avg < num) start++
    else end--
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) //true
console.log(averagePair([-1, 0, 3, 4, 5], 4.1)) // false
console.log(averagePair([], 4)) // false
