/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(!preorder || !inorder || preorder.length != inorder.length) return
  var map={};
  for(let i=0;i<inorder.length;i++){
      map[inorder[i]] = i;
  }
  return build(inorder, 0, inorder.length-1, preorder,0, preorder.length-1, map)
};

function build(inorder, i_start, i_end, preorder, p_start, p_end, map){
  if(i_start>i_end || p_start>p_end) return null;
  var i = map[preorder[p_start]];
  var curRoot = new TreeNode(preorder[p_start]);
  
  curRoot.left = build(inorder, i_start, i-1, preorder, p_start+1, p_start-i_start+i, map);
  curRoot.right = build(inorder, i+1, i_end, preorder, p_start-i_start+i+1,p_end,map);
                           
  return curRoot;
}