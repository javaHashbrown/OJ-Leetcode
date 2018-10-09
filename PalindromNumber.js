/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let src = x.toString(),
      length = src.length,
      halfLeng = Math.floor(length/2);
  for(let i=0;i<halfLeng;i++){
     if(src[i]!==src[length-i-1]){
         return false;
     }
  }
  return true;
};