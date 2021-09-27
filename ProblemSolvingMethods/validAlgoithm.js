const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let str1Obj = {};
  let str2Obj = {};
  for (let char of str1) {
    str1Obj[char] = ++str1Obj[char] || 1;
  };
  for (let char of str2) {
    str2Obj[char] = ++str2Obj[char] || 1;
  };
  for (let key in str1Obj) {
    if (!(key in str2Obj)) return false;
    if (str1Obj[key] !== str2Obj[key]) return false;
  };
  return true;
};



console.log(validAnagram('', '')) //true
console.log(validAnagram('aaz', 'aaz!')) //false
console.log(validAnagram('aaz', 'zza')) //false
console.log(validAnagram('anagram', 'nagaram')) //true