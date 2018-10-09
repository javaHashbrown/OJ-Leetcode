/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if(!l1 || !l2){
      return !l1?l2:l1;
  }
  let head = new ListNode(),
      tail = head;
  while(l1 && l2){
      if(l1.val<=l2.val){
          tail.next = l1;
          l1 = l1.next
      }else{
          tail.next = l2;
          l2 = l2.next;
      }
      tail = tail.next;
  }
  if(l1){
      tail.next = l1;
  }else if(l2){
      tail.next = l2;
  }
  return head.next;
};