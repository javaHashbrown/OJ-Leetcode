/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length == 0) return 0;
  var targetSize = needle.length;
  var temp;
  for (let i = 0; i < haystack.length; i++) {
    temp = haystack.substring(i, i + targetSize);
    // console.log(temp);
    if (temp == needle) return i;
  }
  return -1;
};
