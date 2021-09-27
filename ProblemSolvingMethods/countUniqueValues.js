const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    //compare arr[i] to arr[j]
    //if equal, j++
    if (arr[i] === arr[j]) {
      j++;
    } else {
      //if not equal, i++, arr[i] = arr[j], j++
      i++;
      arr[i] = arr[j];
      j++
    }
  }


  return i + 1;
}

i
[1, 2, 3, 4, 5, 6, 4, 4, 5, 6]
j