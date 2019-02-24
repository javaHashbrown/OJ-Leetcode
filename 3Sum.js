/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  //sort the array asscending order
  nums.sort((a, b) => a - b);
  var res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let head = i + 1,
      tail = nums.length - 1,
      src = 0 - nums[i];
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    while (head < tail) {
      let curSum = nums[head] + nums[tail];
      if (curSum == src) {
        res.push([nums[i], nums[head], nums[tail]]);
        while (nums[head] == nums[head + 1]) head++;
        while (nums[tail] == nums[tail - 1]) tail--;
        head++;
        tail--;
      } else if (curSum < src) head++;
      else tail--;
    }
  }
  return res;
};
