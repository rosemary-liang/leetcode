/*
Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// recursive
// time complexity O(n) where n is number of nodes
// space complexity O(n) worst case if each node only has children on the left side (essentially linked list)

//if no node, return null
// store left node in temp
// switch left and right node
// assign right node to temp

// recursive calls to left and right

// return root

var invertTree = function (root) {
  if (!root) return null;

  temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.right);
  invertTree(root.left);

  return root;
};

// BFS
/*
empty node edge case
initialize queue with root

while queue has items
  remove 1 item and use array destructuring to switch left and right
  check if each side is truthy, if truthy push to queue

exit loop
return root
*/
var invertTree = function (root) {
  if (!root) return null;

  let queue = [root];

  while (queue.length) {
    const node = queue.shift();
    [node.left, node.right] = [node.right, node.left] //destructuring assignment
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right;)
  }

  return root
};

//DFS
/*
initialize stack with root

while stack has items
  pop to remove and assign to node
  switch left/right with array destructuring assignment
  if each side truthy, push to stack

return root
*/
var invertTree = function (root) {
  if (!root) return null;

  const stack = [root];

  while(stack.length) {
    const node = stack.pop();
    [node.left, node.right] = [node.right, node.left]
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right;)
  }
  return root
};
