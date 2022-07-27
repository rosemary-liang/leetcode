
class Solution:
  def canPartition(self, nums: List[int]) -> bool:
    # if sum of nums is odd, impossible to partition to equal half
    if sum(nums) % 2:
      return False

    dp = set()
    # base, can add up to sum of 0 if don't choose any el's from input arr
    dp.add(0)
    target = sum(nums) // 2

    for i in range(len(nums) -1, -1, -1):
      nextDP = set() # need this new Setcause you can't add to dp while iterating through it
      for t in dp:
        # for every t in dp, add nums[i] to it
        nextDP.add(t + nums[i])
        #don't want to lose original values in dp, so add t vals to nextDP
        nextDP.add(t)

      dp = nextDP
    return True if target in dp else False
