module.exports = function getZerosCount(number) {
  let answer = 0;
  let  num = 5;
  while (num < number) {
    answer += Math.floor(number/num);
    num *= 5;
  }
  return answer;
}
