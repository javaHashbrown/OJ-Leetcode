/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(!nums) return null;
  return getElementBST(nums,0,nums.length-1);
  
  function getElementBST(nums,left,right){
      if(left>right) return null;
      var mid = Math.floor((right-left)/2)+left;
      var curRoot = new TreeNode(nums[mid]);
      curRoot.left = getElementBST(nums,left,mid-1);
      curRoot.right = getElementBST(nums,mid+1,right);
      return curRoot;
  }
};