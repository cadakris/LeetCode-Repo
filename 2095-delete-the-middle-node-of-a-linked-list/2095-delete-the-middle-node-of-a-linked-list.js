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

const deleteMiddle = (head) => {
    if (!head.next) return null
    
  let slow = head
  let fast = head
  let prev = null

  while (fast && fast.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }
  prev.next = prev.next.next
  return head
}

//have two pointers fast and slow equal to the head
//have a previous to hold the previous value before the middle that will point .next.next (skipping the middle number to take out3  )
//while fast and fast.next are not null
  //Increment slow 
  //Increment fast by two 
  //When fast and fast.next.next run into null, slow will be two nodes behind and this will be the middle node. 