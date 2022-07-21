# recursive  -- children must be balanced, not just at root
# search from bottom most nodes first for O(n)
  # if node has no children, it is balanced
  # get height of each subtree and return to parent
  # return a boolean at each subtree if balanced
  # return [balanced, height]

# if search from root node, O(n^2)

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def isBalanced(self, root: Optional[TreeNode]) -> bool:

    def dfs(root):
      # if no node
      if not root: return [True, 0]

      left, right = dfs(root.left), dfs(root.right) #call dfs on both subtrees
      balanced = (left[0] and right[0] and #only true if all deeper subtrees were balanced
      abs(left[1] - right[1]) <= 1)

      return [balanced, 1 + max(left[1], right[1])]

  return dfs(root)[0]


# notes:
# recursive dfs because we want to check the deepest nodes first
# if root is balalnced, deeper nodes could be unbalanced (like a linked list)
# if the deepest nodes are not balanced, then the nodes above do not matter bc tree is unbalanced

# define a function within main function for dfs -> return height and boolean-balanced?
#   check if node is None, means no children and thus assume balanced and height of 0
#    true - return [True, 0]

#   if node exists, assign left & right and call dfs on both sides
