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
var levelOrderBottom = function(root) {
  var result = [];
  if(!root) return result;
  var q = [root];
  var node;
  while(q.length>0){
      var length = q.length;
      var level = [];
      for(let i=0;i<length;i++){
          node = q.shift();
          level.push(node.val);
          if(node.left) q.push(node.left);
          if(node.right) q.push(node.right);
      }
      result.push(level);
  }
  return result.reverse();
};