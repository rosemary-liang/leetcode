# bc asking for o(logn), use binary search
# use left, middle, right
  # if left <= mid, then our target is in left sorted portion
  # if left side, will move mid and right for next iteration

class Solution:
  def search(self, nums: List[int], target: int) -> int:
    l, r = 0, len(nums) - 1

    # bc if array only has 1 value
    while l <= r:
      mid = (l + r) // 2 # take lower mid
      if nums[mid] == target: return mid

      #if in left sorted portion
      if nums[1] <= nums[mid]:
        if target > nums[mid] or target < nums[l]:
          # search sub right (if target on right of mid)
          l = mid + 1
        else:
          #search sub left (if target on left of mid)
          r = mid - 1

      #if in right sorted
      else:
        if target < nums[mid] or target > nums[r]:
          #search sub left (if target on left of mid)
          r = mid - 1
        else:
          #search sub right (if target on right of mid)
          l = mid + 1
    return -1


class Solution:
  def search(self, nums: List[int], target: int) -> int:
    l, r = 0 , len(nums) - 1

    while l <= r:
      mid = (l + r) // 2
      if nums[mid] == target: return mid

      #left sorted, then sub left, sub right
      if nums[l] <= nums[mid]:
        if target > nums[mid] or target < nums[l]:
          r = mid - 1
        else:
          l = mid + 1

      # right sorted, then sub left and sub right
      else:
        if target < nums[mid] or target > nums[r]:
          r = mid - 1
        else:
          l = mid + 1
    return -1
