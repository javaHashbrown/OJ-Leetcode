/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if(!inorder || !postorder || inorder.length != postorder.length) return
  var map={};
  for(i=0;i<inorder.length;i++){
      map[inorder[i]] = i;
  }
  
  return rebuildTree(inorder,0, inorder.length-1, postorder, 0, postorder.length-1, map);
};

function rebuildTree(inorder, inorder_start, inorder_end, postorder, postorder_start, postorder_end, map){
  if(inorder_start > inorder_end || postorder_start > postorder_end) return null;
  var curRootNode = new TreeNode(postorder[postorder_end]);  
  var i= map[postorder[postorder_end]];
  curRootNode.left = rebuildTree(inorder,inorder_start,i-1,postorder,postorder_start,postorder_start+i-1-inorder_start,map);
  curRootNode.right = rebuildTree(inorder,i+1,inorder_end,postorder,postorder_start+i-inorder_start,postorder_end-1,map);
  return curRootNode;
}