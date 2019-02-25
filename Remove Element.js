/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var slow = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[slow] = nums[i];
      slow++;
    }
  }
  return slow;
};
