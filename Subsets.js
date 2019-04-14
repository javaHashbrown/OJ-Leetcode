/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var res = [],
      cur = [];
  if(nums.length==0) return res;
  nums.sort();
  console.log(nums)
  getSubset(nums,0,cur,res);
  return res;
};

function getSubset(set, start, current, res){
  res.push([...current]);
  for(let i=start;i<set.length;i++){
      current.push(set[i])
      getSubset(set, i+1, current, res);
      current.pop();
  }
}