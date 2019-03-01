/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var low = 0, high = nums.length -1, mid;
  while(low <=high){
      mid = Math.floor((high-low)/2)+low;
      if(nums[mid]==target) return mid;
      if(nums[low]<=nums[mid]){
          if(target <= nums[mid] && target>=nums[low] ){
              high = mid;
          }else{
              low = mid+1;
          }
      }else{
          if(target < nums[low] && target > nums[mid]){
              low = mid+1
          }else{
              high = mid-1;
          }
      }
  }
  return nums[low]==target ? low: -1;
};