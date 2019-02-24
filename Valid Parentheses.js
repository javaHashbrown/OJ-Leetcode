/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2) return false;
  var stack = [];
  var lookup = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (letter of s) {
    if (lookup[letter]) {
      stack.push(lookup[letter]);
    } else if (stack.length == 0 || letter != stack.pop()) {
      return false;
    }
  }
  return stack.length == 0;
};
