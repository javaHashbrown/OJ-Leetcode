/**
 * @param {string} s
 * @return {number}
 */

/* use two-pointer
test cases:
""
"abcdefg"
"abcabcbb"
"bcbcbcbc"
*/
var lengthOfLongestSubstring = function(s) {
  var map = {},
    fast = 0,
    slow = -1,
    count = 0;
  while (fast < s.length) {
    let curChar = s[fast];
    if (map[curChar] == undefined) {
      map[curChar] = fast;
    } else if (map[curChar] > slow) {
      slow = map[curChar];
    }
    map[curChar] = fast;
    let newCount = fast - slow;
    count = Math.max(count, newCount);
    fast++;
  }
  return count;
};
