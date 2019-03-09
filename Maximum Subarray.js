/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var maxSum = nums[0];
  var curMax = nums[0]
  var start = 0;
  var end = 0;
  var result = [nums[0]];
  for(let i=1;i<nums.length;i++){
      curMax = Math.max(curMax+nums[i],nums[i]);
      if(curMax>maxSum){
          maxSum = curMax;
          end = i;
      }
      //track start & end
      if(maxSum==nums[i]){
          start = i;
      }
  }
  return maxSum;
};