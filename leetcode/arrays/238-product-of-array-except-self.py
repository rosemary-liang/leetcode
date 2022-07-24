class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # default array value is 1, length is len(nums)
        # loop one direction, and then backwards to get product
        res = [1] * (len(nums))

        #initialize prefix at 1
        prefix = 1
        # for each index,  store prefix in res[i], then mult/assign nums[i] for new prefix
          #res[i] = prefix
          #prefix *= nums[i]
        for i in range(len(nums)):
          res[i] = prefix
          prefix *= nums[i]

        postfix = 1
        # start with len-1, keep going until just before -1 (basically 0), decrement by 1
        for i in range(len(nums), -1, -1, -1)
          res[i] *= postfix
          postfix *= nums[i]

        return res
