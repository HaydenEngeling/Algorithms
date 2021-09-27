function minSubArrayLen(arr, target) {
  //loop over arr
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    //second loop for window
    let temp = 0;
    for (let w = i; w < arr.length; w++) {
      temp += arr[w]
      if (temp >= target) {
        if ((w - i + 1) < smallest) {
          smallest = w - i;
        }
        break;
      }
    }
  }
  return smallest;
  //when num us met store the size of window and move to next iteration of loop
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55))
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))
