function reverse(str) {
  let result = '';
  (function work(str) {
    if (str.length === 0) return
    result += str[str.length - 1]
    work(str.slice(0, str.length - 1))
  })(str)
  return result;
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'