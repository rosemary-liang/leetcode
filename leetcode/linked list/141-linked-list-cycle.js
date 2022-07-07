/**141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.



Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.


Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.


Follow up: Can you solve it using O(1) (i.e. constant) memory? */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Hash Map
// Runtime: 112 ms, faster than 39.99% of JavaScript online submissions for Linked List Cycle.
//Memory Usage: 46.2 MB, less than 6.18% of JavaScript online submissions for Linked List Cycle.
var hasCycle = function (head) {
  const set = new Set();

  while (head) {
    if (set.has(head)) return true;
    set.add(head);
    head = head.next;
  }

  return false;
};

// Two Pointers O(1) - WINNER
// Runtime: 79 ms, faster than 90.97% of JavaScript online submissions for Linked List Cycle.
//Memory Usage: 44.9 MB, less than 67.90% of JavaScript online submissions for Linked List Cycle.

// Pseudocode
// Set up pointers fast and slow, initialize at head
// while both pointers are truthy,
// if either fast or fast.next falsy, return false (because skipping to next.next)
// if fast.next === slow return true (WHY?)
// move fast to next.next
// move slow to next

var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast && slow) {
    if (!fast || !fast.next) return false;
    if (fast.next === slow) return true;
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
};

// Add Property
// Runtime: 110 ms, faster than 43.00% of JavaScript online submissions for Linked List Cycle.
//Memory Usage: 45.1 MB, less than 50.36% of JavaScript online submissions for Linked List Cycle.

var hasCycle = function (head) {
  while (head) {
    if (head.seen) return true;
    head.seen = true;
    head = head.next;
  }
  return false;
};

/* 7/7/22
2 pointers - 1 fast and 1 slow, if they are ever equal return true, otherwise return false
initialize fast and slow pointers to head
while both fast and slow are not null
  if fast.next = slow return true
  if fast.next null return false (indicates break in cycle)

  move fast 2 nodes
  move slow 1 node

  exit loop if either fast or slow points to null
  return false

add a property/hashmap - if a head has been traversed already return true, otherwise return false

initialize set

while head is not null
if set has head, return true
if not, add head to set

exit if
move head to head.next

exit loop
return false
*/

const hasCycle = (head) => {
  const set = new Set();

  while(head) {
    if set.has(head) {
      return true;
    } else {
      set.add(head);
    }
    head = head.next;
  }
  return false;
}

const hasCycle = (head) => {
  let fast = head;
  let slow = head;

  while (fast && slow) {
    if (fast.next = slow) return true;
    if (!fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
}

/* 7/7/22 part 2
2 pointers or set/adding a property
initialize fast and slow to head

while fast && slow not null
  if fast.next = slow


set
initialize set

while head is not null
  check if set has head
    if true, return true
    if false, add head to set
  exit if
  move head pointer
exit loop
return false

*/

const hasCycle = (head) => {
  const set = new Set();

  while(head) {
    if (set.has(head)) {
      return true;
    } else {
      set.add(head)
    }
    head = head.next;
  }
  return false;
}


const hasCycle = (head) => {
  let fast = head;
  let slow = head;

  while(fast && slow) {
    if (!fast.next) return false;
    if (fast.next === slow) return true;
    fast = fast.next.next;
    slow = slow.next;

  }
  return false
}
