function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) return true;
  }
  return false;
} 4