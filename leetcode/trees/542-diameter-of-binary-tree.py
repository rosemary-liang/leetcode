# if no children, the node diameter is 0
# O(n^2) brute force is top down
# O(n) recursion is bottom up; traverse each node 1x by returning height
  # look at left and right diameter of node, also want height of tree
  # return [diameter, height]
    # height = 1+ max(leftChildHeight, rightChildHeight) <-- must add 1 bc node with no children has height of -1
    # D = lHeight + rHeight + 2
      # +2 because currNode has left and right not counted in childrens' heights
    # height is returned to node above to continue calcing height
    # diameter is used to compare against the max


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:


      def dfs(root):
        nonlocal maxDiam

        if not root:
          return 0

        #recursively find height of subtrees
        left = dfs(root.left)
        right = dfs(root.right)

        maxDiam = max(maxDiam, left + right)
          # max of itself or diameter

        return 1 + max(left,right) # return height to be used recursively

      maxDiam = 0 # to track max diameter
      dfs(root)
      return maxDiam
