/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs == null || strs.length == 0) return "";
  var prefix = strs[0];
  var length = prefix.length;

  for (let i = 1; i < strs.length; i++) {
    var strLeng = strs[i].length;
    var strIndex = 0;
    for (strIndex = 0; strIndex < length && strIndex < strLeng; strIndex++) {
      if (prefix[strIndex] !== strs[i][strIndex]) {
        break;
      }
    }
    prefix = prefix.substring(0, strIndex);
  }
  return prefix;
};
