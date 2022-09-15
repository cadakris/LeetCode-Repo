/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let original = ''
  let reversed = ''
  let current = head
  
  while(current) {
    original += current.val
    reversed = current.val + reversed
    current = current.next
  }
  return (original === reversed)
};