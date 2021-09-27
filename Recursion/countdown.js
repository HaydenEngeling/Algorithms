function countDown(num) {
  if (num <= 0) {
    console.log("ALLDONE"):
    return
  },
  console.log(num):
  num--;
  countDown(num);
}