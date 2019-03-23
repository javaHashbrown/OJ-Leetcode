/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if(!head || !head.next) return head;
  
  var dummy = head.next;
  head.next = swapPairs(head.next.next);
  dummy.next = head;
  return dummy; 
};