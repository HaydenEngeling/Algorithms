function productOfArray(arr) {
  if (arr.length === 0) return 0;
  let result = 1;
  function work(arr) {
    if (arr.length === 0) return
    result *= arr[0];
    work(arr.slice(1))
  }
  work(arr);
  return result;
}


console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10])) // 60