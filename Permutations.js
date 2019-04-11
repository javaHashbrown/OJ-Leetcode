/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var res=[],
      visited = {};
  permutation(nums,res,0,[],visited);
  return res;
};

function permutation(nums, res, level, curPermute, visited){
  
  if(curPermute.length == nums.length) {
      res.push(curPermute.slice(0));
      // console.log(curPermute,'###',res)
      return;
  }
  for(let i=0;i<nums.length;i++){
      if(visited[i]) continue;
      visited[i] = true;
      curPermute.push(nums[i]);
      permutation(nums, res, level+1, curPermute,visited);
      curPermute.pop();
      visited[i]=false;
  }
  
}