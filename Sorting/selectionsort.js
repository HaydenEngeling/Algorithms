function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) smallest = j;
    }
    if (i !== smallest) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }

  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]))
console.log(selectionSort([1, 3, 2, 4, 5, 7, 6, 8, 9, 0,]))
console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(selectionSort([12, 34, 65, 23, 76, 1]))
