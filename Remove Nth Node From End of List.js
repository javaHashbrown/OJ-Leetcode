/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var h = new ListNode(0);
  var p1 = h;
  var p2 = h;
  h.next = head;
  while (n > 0) {
    p2 = p2.next;
    n--;
  }
  while (p2.next) {
    p1 = p1.next;
    p2 = p2.next;
  }
  p1.next = p1.next.next;
  return h.next;
};
