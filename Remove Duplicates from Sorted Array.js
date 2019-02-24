/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length;
  var length = 0;
  var i = 1;
  while (i < nums.length) {
    if (nums[i] != nums[i - 1]) {
      length++;
      nums[length] = nums[i];
    }
    i++;
  }
  return length + 1;
};
