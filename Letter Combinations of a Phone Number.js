/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits) return [];
  var map = ['','','abc','def','ghi','jkl','mno','prqs','tuv','wxyz'];
  var res = [''];
  for(let i=0;i<digits.length;i++){
      if(!digits[i]) continue;
      let t = [];
      let chars = map[digits[i]];
      // console.log(chars)
      for(let j=0;j<chars.length;j++){
          
          for(let k=0;k<res.length;k++){
              t.push(res[k]+chars[j]);
          }
      }
      // console.log(t);
      res = t;
  }
  return res;
};