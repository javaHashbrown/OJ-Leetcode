/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let res = {},
    leng = nums.length;
  for (let index = 0; index < leng; index++) {
    let residual = target - nums[index];
    if (res[residual] !== undefined) {
      return [res[residual], index];
    } else {
      res[nums[index]] = index;
    }
  }
  return null;
};
