# time: O logn = height of tree
# space: O(1)

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
      cur = root

      while cur:
        # if both p and q are greater than curr, move to cur.right
        if p.val > cur.val and q.val > cur.val:
          cur = cur.right
        if p.val < cur.val and q.val < cur.val:
          cur = cur.left

        # if either of p or q are equal to cur, that must be LCA
        else:
          return cur
