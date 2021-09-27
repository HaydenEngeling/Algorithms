function isSubsequence(s1, s2) {
  //loop over s2
  //set refrance
  let ref = '';
  //set s1 index
  let i = 0;
  for (let char of s2) {
    //for each char ask if it is === to s1[i]
    if (char === s1[i]) {
      //if yes
      //add s2[j] to refranace variable
      ref = ref + char
      // increase s1 index and continue
      i++
    }
  }
  //if s1 !== refance
  if (s1 === ref) return true;
  return false;
  //return false
}

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) //true
console.log(isSubsequence('abc', "abracadabra")) //true
console.log(isSubsequence('abc', 'acb')) // false (order matters)