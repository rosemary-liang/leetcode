# sort input array and avoid duplicates
# find a, do twoSum for rest of it (hashmap or 2 POINTERS left/right)
  # move r pointer to the left if sum > 0
  # move l to right if sum < 0

#time o(nlogn) if sorting + O(n)^2
  # final is o()^2

# space could use o(1) or o(n)

# initialize res = []
# sort array
# enumerate nums
  # if not first value in input array && duplicate integer, continue
  # l = i + 1, r = nums[i -1]
  # while l<r (don't let pointers meet)
    #threeSum = a + nums[l] + nums[r]
    # if threeSum vs 0, move r, move l, or
      #res.append(a,nums[l],nums[r]) && move l to keep checking
      # check for duplicate sum
        # while nums[l] == nums[l-1] and l < r, move pointer to right


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        for i, a in enumerate(nums):
          # if not first val in input array & is duplicate value
          if i > 0 and a = nums[i - 1]:
            continue

          l, r = i + 1, len(nums) - 1
          while l < r:
            threeSum = a + nums[l] + nus[r]
            if threeSum > 0:
              r -= 1
            elif threeSum < 0:
              r += 1
            else:
              res.append([a, nums[l], nums[r]])
              l += 1
              #bc don't want same sum
              while nums[l] == nums[l -1] and l < r:
                l += 1
        return res


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
      res = []
      nums.sort()

      for i, a in enumerate(nums):
        if i > 0 and a == nums[i - 1]: #avoid duplicate a pointer
          continue

        # 2pointers
        l, r = i + 1, len(nums) - 1
        while l < r:
          threeSum = a + nums[l] + nums[r]
          if threeSum > 0:
            r -= 1
          elif threeSum < 0:
            l += 1
          else:
            res.append([a, nums[l], nums[r]])
            l += 1 # move pointer
            while nums[l] == nums[l - 1] and l < r:
              l += 1 #don't have same duplicate b pointer

      return res
