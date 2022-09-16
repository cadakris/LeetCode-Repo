/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  let current = head
  const oddList = new ListNode(null)
  const evenList = new ListNode(null)
  let tailOdd = oddList
  let tailEven = evenList
  let count = 0

  while (current) {
     count++
     if (count % 2 !== 0) {
      tailOdd.next = current
      tailOdd = tailOdd.next
    } else {
      tailEven.next = current
      tailEven = tailEven.next
    }
    current = current.next
  }
  tailEven.next = null
  tailOdd.next = evenList.next
  return oddList.next
};