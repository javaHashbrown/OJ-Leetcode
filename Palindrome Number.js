/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0) return false;
  var res=0,
      tmp =x;
  while(tmp>0){
      let digit = tmp%10;
      res = res*10 + digit;
      tmp = Math.floor(tmp/10);
  }
  return res == x;
};