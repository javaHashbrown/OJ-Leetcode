/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if(target<nums[0]) return 0;
  if(target>nums[nums.length-1]) return nums.length;
  var min = 0;
  var max = nums.length-1;
  var mid;
  while(min<max){
      mid = Math.floor((max-min)/2)+min;
      if(nums[mid] == target){
          return mid;
      }
      if(nums[mid]<target){
          min = mid+1;
      }else{
          max = mid;
      }
  }
  return max;
};