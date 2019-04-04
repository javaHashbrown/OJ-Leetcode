/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n<=2) return n;
  var [n1,n2] =[1,2];
  var result=0;
  for(let i=3;i<=n;i++){
      result = n1 + n2;
      n1 = n2;
      n2 = result;
  }
  return result
};