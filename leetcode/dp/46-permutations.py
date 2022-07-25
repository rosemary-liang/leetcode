# recursive dfs - backtracking
#inialize res = []
#base case if only len(nums) ==1, 1 perm only so return a copy of nums

#loop through all indexes of nums
  # pop item at 0th index
  # recurse here: permute through remaining items after popping first item
    #perms = self.permute(nums)
#return result

  # loop through each perm
  #   append popped item back to end of perm (to complete the perm)
  # add those updated perms to end of results List
  #append popped item back to nums array

#https://leetcode.com/problems/permutations/discuss/993970/Python-4-Approaches-%3A-Visuals-%2B-Time-Complexity-Analysis

# CLEANER - doesnt run in leetcode tho
class Solution:
  def permute(self, nums: List[int]) -> List[List[int]]:
    res = []
    if len(nums) == 1: return [nums[:]]

    for i in range(len(nums)):
      n = nums[0] # initialize at first index
      perms = self.permute(nums[1:]) #passing in all items of nums except for first item (0th index)
      for perm in perms:
        perm.append(n)
      res.extend(perms)
      return res


class Solution:
  def permute(self, nums: List[int]) -> List[List[int]]:
    result = []

    #base case - only 1 value means only 1 permutation
    if (len(nums) == 1):
      return [nums.copy()] #make copy

    for i in range(len(nums)):
      n = nums.pop(0) #pop item at 0th index

      perms = self.permute(nums) #permute through remaining items after popping the first

      for perm in perms:
        perm.append(n)
      result.extend(perms) #add on additional values
      nums.append(n)

    return result


class Solution:
  def permute(self, nums: List[int]) -> List[List[int]]:
    res = []

    #base - only 1 item in array, return it
    if len(nums) == 1: return [nums.copy()]

    for i in range(len(nums)):
      n = nums.pop()
      perms = self.permute(nums)
      for perm in perms:
        perm.append(n) #to add back popped item, bc otherwise missing it
      res.extend(perms)
      nums.append(n) # to add back poopped item to nums array (in the end all added back in same order)
    return res
