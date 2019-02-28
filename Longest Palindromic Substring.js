/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length<2) return s;
  var length = s.length, maxLen = 0, start = 0;
  for(let i=0;i<length;i++){
      search(s, i, i);
      search(s, i, i+1);
  }
  // console.log(maxLen, start)
  
  function search(target,left,right){
      while(left>=0 && right < target.length && target[left]==target[right]){
          left--;
          right++;
      }
      // console.log(left,right);
      //out of loop, right = target.length && left = -1
      if(maxLen < right-left-1){
          maxLen = right-left-1;
          console.log(maxLen,left);
          start = left+1;
      }
  }
  // console.log(start,maxLen);
  return s.substring(start,start+maxLen);
};