/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  var maxStep = 0;
  for(let i=0;i<nums.length;i++){
      if(i>maxStep) return false;
      maxStep = Math.max(nums[i]+i,maxStep);
  }
  return true;
};