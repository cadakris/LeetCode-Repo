/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let current1 = list1
  let current2 = list2
  const newList = new ListNode(null)
  tail = newList

  if (!current1 && !current2) return null

  while (current1 && current2) {
    if (current1.val < current2.val) {
      tail.next = current1
      current1 = current1.next
    } else {
      tail.next = current2
      current2 = current2.next
    }
    tail = tail.next
  }
  if (current1 === null) tail.next = current2
  if (current2 === null) tail.next = current1

  return newList.next
};