/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if(!nums || nums.length<3) return 0;
  nums.sort((a,b)=>a-b);
  var sum,
      // map={},
      minDiff=Number.MAX_SAFE_INTEGER;
  for(let i=0;i<nums.length;i++){
      let start = i+1,
          end = nums.length-1;
      
      while(start<end){
          let curSum = nums[i]+nums[start]+nums[end],
          curDiff = Math.abs(target-curSum);
          if(curSum==target){
              sum = curSum;
              minDiff = 0;
              return sum;
          }else if(curSum<target){
              if(minDiff>curDiff){
                  minDiff = curDiff;
                  sum = curSum;
              }
              start++;
          }else{
              if(minDiff>curDiff){
                  minDiff = curDiff;
                  sum = curSum;
              }
              end--;
          }
      }
      // console.log(sum)
  }
  return sum;
};