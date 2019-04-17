/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if(!root) return [];
  var res=[],
      stack = [],
      node = root;
  while(node || stack.length>0){
      while(node){
          stack.push(node);
          node = node.left;
      }
      node = stack.pop();
      res.push(node.val);
      node = node.right;
  }
  return res;
};

