# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


# recursive bs

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def valid(node, left, right):
          # base cases
          if not node: return True #because empty tree is valid
          if note (node.val < right and node.val > left): return false #if not in boundaries

          # if going left subtree, right boundary must be set to current node val
          return (valid(node.left, left, node.val) and  #replace right with node.val
          valid(node.right, node.val, right)) #replace left with node.val

    # call valid with l and right at -inf and inf
    valid(root, float('-inf'), float('inf'))
