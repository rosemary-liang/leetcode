# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# time: O(n + m) - n is number of nodes in l1 and m is number of nodes in l2
# space: O(1) - constant space, just shifting pointers

# set up dummy head
# set tail to dummy head
# while both l1 and l2 not null
#   check if l1.val < l2.val
#     true - tail.next = l1 and move l1 node down the list
#     else, do above to l2
#   move tail pointer down
# assign tail.next to remaining not null list
# return dummy.next



class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
      dummy = ListNode()
      tail = dummy

      while l1 and l2:
        if l1.val < l2.val:
          tail.next = l1
          l1 = l1.next
        else:
          tail.next = l2
          l2 = l2.next
        tail = tail.next

      tail.next = l1 or l2

      return dummy.next
