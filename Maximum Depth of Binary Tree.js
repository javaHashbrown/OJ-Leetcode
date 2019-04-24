/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  return maxDepthHelper(root,0);
  
  
};
function maxDepthHelper(root,depth){
  if(!root) return depth;
  return Math.max(maxDepthHelper(root.left,depth+1),maxDepthHelper(root.right,depth+1));
}