# recursive dfs and return null if node !== p or q
class Solution:
  def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    #base1 if root == p or q, return the root node
    if root.val == p.val or root.val == q.val:
      return root
    #base2 if no children
    if not root.left and not root.right: return None

    left, right = None, None
    if root.left:
      left = self.lowestCommonAncestor(root.left, p, q)
    if root.right:
      right = self.lowestCommonAncestor(root.right, p, q)

    if left and right:
      return root

    return left if left else right
