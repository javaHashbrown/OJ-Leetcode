/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  if (str == "" || str == null) return 0;

  var index = 0;
  var sign = 1;
  var result = 0;
  var maxInt = Math.pow(2, 31) - 1;
  var minInt = -1 * (maxInt + 1);

  //remove whitespace-prefix
  while (str[index] === " ") {
    index++;
  }
  //get sign (it's only allowed once)
  if (str[index] == "+" || str[index] == "-") {
    sign = str[index] == "+" ? 1 : -1;
    index++;
  }

  while (index < str.length) {
    //deal with non-numerics (return the result when encountered )
    if (str[index] < "0" || str[index] > "9") {
      break;
    }
    //get numbers
    let curDigit = Number(str[index]);
    result = result * 10 + curDigit;
    //deal with overflow
    if (sign > 0 && result > maxInt) return maxInt;
    if (sign < 0 && result > maxInt + 1) return minInt;
    index++;
  }
  return sign * result;
};
