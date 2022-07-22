class Solution:
    def longestPalindrome(self, s: str) -> int:
        chars = set()
        count = 0

        for c in s:
          if c not in chars:
            chars.add(c)
          else:
            chars.remove(c)
            count += 2

        if len(chars):
           return count + 1
        else:
          return count
