#sliding window O(n)

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charSet = set()
        l = 0
        res = 0

        for r in range(len(s)): #set r as char in range
          while s[r] in charSet:
            #if char is dupe, remove first substring char from set, move l pointer; keep doing this if dupe remains in set
            charSet.remove(s[l])
            l += 1

          charSet.add(s[r])
          # update res,
          res = max(res, r - l + 1)
          return res

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
      charSet = set()
      l = 0
      res = 0 # to track max substr length

      for r in range(len(s)):
        while s[r] in charSet:
          charSet.remove(s[l])
          l += 1
        charSet.add(s[r])
        res = max(res, r - l + 1)
      return res
