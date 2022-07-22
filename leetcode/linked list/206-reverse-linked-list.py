# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

#recursive O(n) for time and space
#edge empty LL

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
      if not head:
        return None

      newHead = head
      if head.next: # until you get to end of LL, keep reassigning newHead as recursion of next node
        newHead = self.reverseList(head.next) #maintain last node as newHead
        head.next.next = head #reverses pointer btwn next node and head
      head.next = None # set new end of LL

      return newHead
