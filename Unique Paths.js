/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var dp = new Array(n);
  dp.fill(1);
  for(let i=1;i<m;i++){
      for(let j=1;j<n;j++){
          dp[j] +=dp[j-1]
      }
  }
  return dp[n-1];
};