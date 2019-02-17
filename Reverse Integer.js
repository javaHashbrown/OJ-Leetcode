/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var max = Math.pow(2, 31);
  var result = 0;
  while (x !== 0) {
    var remainder = x % 10;
    var curResult = result * 10 + remainder;
    if (curResult > max - 1 || curResult < -max) return 0;
    result = curResult;
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
  }
  return result;
};
