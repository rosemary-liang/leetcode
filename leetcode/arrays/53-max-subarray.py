# sliding window, move left pointer if negative prefix
# O(n)

#iniitalize maxSub to first el
# initialize curSum to 0

# interate through nums array
#   if curSum negative, reset to 0
#   += curSum with current el
#   compare maxSub with curSum, replace maxSub

# return maxSub

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = nums[0]
        curSum = 0

        for n in nums:
          if curSum < 0:
            curSum = 0
          curSum += n
          maxSum = max(maxSum, curSum)
        return maxSum
