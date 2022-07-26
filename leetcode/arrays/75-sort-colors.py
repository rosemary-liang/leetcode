# bucket sort T: O(n) and M: O(1)
# quicksort partition with left/right pointers
  # compare, move to left pointer, and once left pointer sorted, shift left one over to right
  # edge: i pointer at a 1 value won't do anything
    # if a 0 is sandwiched between 1 and 1 in middle of arr; DONT SHIFT i pointer
      # if switch 2 with right pointer, DO NOT INCREMENT i pointer (continue comparing same i with left and right)
    # only move i pointer if left swap


class Solution:
  def sortColors(self, nums: List[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    l, r = 0, len(nums) - 1
    i = 0

    def swap(i, j):
      tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp

    while i <= r:
      #edge to swap left
      if nums[i] == 0:
        swap(l, i)
        l += 1

      #edge to swap right
      elif nums[i] == 2:
        swap(r, i)
        r -= 1
        i -= 1 # don't move i if right swap
      i += 1 #edge
