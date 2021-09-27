function sameFrequency(n1, n2) {
  let s1 = n1.toString();
  let s2 = n2.toString();
  let o1 = {};
  let o2 = {};
  if (s1.length !== s2.length) return false;
  for (let char of s1) {
    o1[char] = o1[char]++ || 1;
  };
  for (let char of s2) {
    o2[char] = o2[char]++ || 1;
  };
  for (let key in o1) {
    if (!(key in o2)) {
      return false;
    }
    if (o1[key] !== o2[key]) {
      return false;
    }
  }
  return true;
}
