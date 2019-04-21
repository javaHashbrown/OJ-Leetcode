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
var isSymmetric = function(root) {
  if(!root) return true;
  var q1 = [root.left];
  var q2 = [root.right];
  var node1,node2;
  while(q1.length>0 && q2.length>0){
       node1 = q1.shift();
       node2 = q2.shift();
      if(!node1 && !node2) continue;
      if( !node1 && node2 || node1 && !node2 || node1.val != node2.val){
          return false;
      }
      q1.push(node1.left);
      q1.push(node1.right);
      q2.push(node2.right);
      q2.push(node2.left);
  }
  return true;
  
};

function isBalanced(left, right){
  if(!left && !right) return true;
  if(left && !right || !left && right || left.val !== right.val) return false;
  return isBalanced(left.left,right.right) & isBalanced(left.right, right.left);
}