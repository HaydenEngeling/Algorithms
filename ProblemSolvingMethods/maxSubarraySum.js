function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    let window = num - 1;
    let temp = 0;
    while (window >= 0) {
      temp += arr[i + window];
      // console.log('temp', temp);
      // console.log('window', window);
      window = window - 1;
    }
    if (temp > max) max = temp;
  }
  return max;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) //5
console.log(maxSubarraySum([2, 3], 3)) //null
