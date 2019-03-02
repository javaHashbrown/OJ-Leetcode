/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var min=0;
  var max = nums.length-1;
  var mid;
  var result=[-1,-1];
  if(target<nums[min] || target>nums[max]) return [-1,-1];
  while(min<max){
      mid = Math.floor((max-min)/2)+min;
      
      if(target <= nums[mid]){
          max = mid;
      }else{
          min = mid+1;
      }
  }
  if(nums[max]!=target) return result;
  
  result[0] = max;
  max = nums.length-1;
  
  while(min<max){
      mid = Math.floor((max-min)/2)+min+1;
      
      
      if(target < nums[mid]){
          max = mid-1;
          
      }else{
          min = mid;
         
      }
  }
  result[1] = min;
  return result;
};