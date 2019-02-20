/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var lookup = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var total = 0;

  for (let i = 0; i < s.length; i++) {
    let cur = lookup[s[i]];
    let next = lookup[s[i + 1]];
    let sign = next == undefined || cur >= next ? 1 : -1;
    total += sign * cur;
  }
  return total;
};
