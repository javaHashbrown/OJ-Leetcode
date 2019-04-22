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
var zigzagLevelOrder = function(root) {
  if(!root || root.length==0) return [];
  var res=[],
      q = [root],
      depth = 1;;
  while(q.length){
      let length = q.length;
      let level = [];
      for(let i=0;i<length;i++){
          let node = q.shift();
          node && level.push(node.val);
          if(node && node.left) q.push(node.left);
          if(node && node.right) q.push(node.right)
      }
      console.log(level)
      if(depth%2) res.push(level)
      else res.push(level.reverse());
      depth++;
  }
  return res;
};