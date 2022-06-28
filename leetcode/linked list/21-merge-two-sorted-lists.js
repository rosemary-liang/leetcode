// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list.The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

//   Example 1:
// Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
// Output: [1, 1, 2, 3, 4, 4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range[0, 50].
// - 100 <= Node.val <= 100
// Both list1 and list2 are sorted in non - decreasing order.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
  }
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// const mergeTwoLists = (list1, list2) => {
//   let l1 = list1;
//   let l2 = list2;

//   let merged = new ListNode();
//   let head = merged;

//   // if (!l1 || !l2) return (l1 ? l1 : l2); // check if empty list, if yes immediately return the non-empty list

//   while (l1 && l2) {
//     console.log("merged:", merged);
//     if (l1.val < l2.val) {
//       console.log('attach l1');
//       merged.next = l1; // attach current l1
//       l1 = l1.next; // set l1 to next node
//     } else {
//       console.log("attach l2");
//       merged.next = l2; // attach l2 even if both values are the same because doesn't matter which node to attach
//       l2 = l2.next;
//     }
//     console.log('merged.next', merged.next);
//     merged = merged.next; // after attaching in iteration,
//     console.log('merged:', merged);
//     console.log('head:', head)
//     console.log('l1', l1);
//     console.log('l2', l2)

//   }

// };


// var mergeTwoLists = function (l1, l2) {
//   var mergedHead = { val: -1, next: null },
//     crt = mergedHead;
//   while (l1 && l2) {
//     if (l1.val > l2.val) {
//       console.log('crt.next:', crt.next)
//       crt.next = l2;
//       l2 = l2.next;
//     } else {
//       console.log("crt.next:", crt.next);
//       crt.next = l1;
//       l1 = l1.next;
//     }
//     crt = crt.next;
//   }
//   crt.next = l1 || l2;

//   return mergedHead.next;
// };



var mergeTwoLists = function (l1, l2) {
  var mergedHead = { val: -1, next: null }, // set dummy head
    crt = mergedHead;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      crt.next = l1; // set both crt.next and mH.next since they reference same place
      l1 = l1.next;
    } else {
      crt.next = l2;
      l2 = l2.next;
    }
    crt = crt.next. // change crt so it's no longer mH, instead it's mH.n...
  }

  crt next = l1 || l2;

  return mergedHead.next; // remove dummy head
};
