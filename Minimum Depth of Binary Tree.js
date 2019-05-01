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
var minDepth = function(root) {
  //do level order traversal, find the level which doesnot have 2^(n-1) nodes
  
  
  if(!root) return 0;
  var result=1;
  var q = [root];
  var node;
  while(q.length>0){
      var length = q.length;
      for(let i=0;i<length;i++){
          node = q.shift();
          if(!node.left && !node.right ) return result;
          if(node.left) q.push(node.left);
          if(node.right) q.push(node.right);
      }
      result++;        
  }
  return result;
};