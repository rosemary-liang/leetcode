class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {} # val: index
        for i, n in enumerate(nums):
          complement = target - n
          if complement in hashmap:
            return [hashmap[complement], i]
          hashmap[n] = i
        return

# set up hashmap containing value and index
# enumerate index and n
# assign complement to calc target-n
# check if complement in hashmap
  # if true return indexes
  # if false add key/value pair to hashmap
# void return

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      hashmap = {}

      for i, n in enumerate(nums):
        diff = target - n
        if diff in hashmap:
          return [hashmap[diff], i]
        return

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      hashmap = {}
      for i, n in enumerate(nums):
        diff = target - n
        if diff in hashmap:
          return [hashmap[diff], i]
        hashmap[n] = i
      return
