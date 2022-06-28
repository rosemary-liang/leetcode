// 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]
// Example 2:

// Input: head = [1, 2]
// Output: [2, 1]
// Example 3:

// Input: head = []
// Output: []


// Constraints:
// The number of nodes in the list is the range[0, 5000].
// - 5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively.Could you implement both ?


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

// 5/31/22
// next = head.next ; reset the temp next head
// head.next = prev ; concat current head + prev stored
// prev = head ; copy down to store prev
// head = next ; move to next head stored in first line

const reverseList = (head) => {
  const prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};
