# O(n) T & M --> bfs and add values to lists
# q - FIFO
  # pop from sublist, when queue is empty, we know level is complete
  # add children to queue



# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

import collections

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []

        q = collections.deque()
        q.append(root)

        while q:
          qLen = len(q) #ensures we iterate 1 level at a time
          level = []
          for i in range(qLen):
            node = q.popleft()
            if node: #ensure node is not empty
              level.append(node.val) #append value to level
              q.append(node.left) # append left and right to q
              q.append(node.right)
          if level: #check that level is nonempty
            res.append(level) #add level to result

        return res


class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
      res = []
      q = collections.deque()

      q.append(root)
      while q:
        qLength = len(q)
        level = []
        for i in range(qLength):
          node = q.popleft()
          if node:
            level.append(node.val)
            if node.left:
              q.append(node.left)
            if node.right:
              q.append(node.right)
        if level:
          res.append(level)
      return res
