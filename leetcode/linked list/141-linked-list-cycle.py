# issue is going to next node will loop forever, so you need to detect that you are hitting same node twice
# O(n) for time and space hashset and add node obj after visiting
# O(n) for fast and slow pointers
  # on every iteration, gap btwn slow and fast reduces by 1

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        slow, fast = head, head

        while fast and fast.next:
          slow = slow.next
          fast = fast.next.next

          if slow == fast return True
        return False




class Solution:
  def hasCycle(self, head: ListNode) -> bool:
    slow, fast = head, head

    while fast and fast.next:
      slow = slow.next
      fast = fast.next.next

      if slow == fast return True
    return False
