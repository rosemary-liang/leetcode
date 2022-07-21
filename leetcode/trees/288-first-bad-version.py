# start index at 1 instead of 0

# O(n) to iterate from the end
# O(n log n) binary search - search middle first to see if bad
  # if bad, check ones before it, if not bad, check the ones after it


# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
      l, r = 1, n

      while (l < r):
        m = (l + r) // 2
        if isBadVersion(mid):
          r = mid
        else:
          l = mid + 1 # need +1 here bc want first bad verson, not last good version

      return l
