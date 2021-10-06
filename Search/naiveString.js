function naiveString(str, match) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < match.length; j++) {
      if (str[i + j] !== match[j]) break;
      if (j === match.length - 1) count++
    }
  }
  return count
}