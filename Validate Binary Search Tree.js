/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return validator(root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)
};
function validator(root, low, high){
  if(!root) return true;
  if(root.val<=low || root.val >= high) return false;
  return validator(root.left, low, root.val) & validator(root.right,root.val,high);
}