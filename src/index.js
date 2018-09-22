module.exports = function getZerosCount(number) {
  var answer = 0,
      num = 5;
  while (num < number) {
    answer += Math.floor(number/num);
    num *= 5;
  }
  return answer;
}
