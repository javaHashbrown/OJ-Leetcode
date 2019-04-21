/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var res = [];
  helper(root,0,res);
  return res;
};
function helper(root,levelIndex,res){
  if(!root) return null;
  if(res.length == levelIndex) res.push([]);
  res[levelIndex].push(root.val);
  if(root.left) helper(root.left,levelIndex+1,res);
  if(root.right) helper(root.right,levelIndex+1,res);
}