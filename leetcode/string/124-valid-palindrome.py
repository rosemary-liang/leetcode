

# memory O(n)
# 2 pointers left and right and move to center
class Solution:
  def isPalindrome(self, s: str) -> bool:
    l, r = 0, len(s) - 1

  def alphaNum(self, c):
     return (ord('A') <= ord(c) <= ('Z') or
      ord('a') <= ord(c) <= ('z') or
      ord('0') <= ord(c) <= ('9'))

  while l < r:
    while l < r and not self.alphaNum(s[l]):
      l += 1

    while l < r and not self.alphaNum(s[r]):
    r -= 1

    if s[l].lower() != s[r].lower():
      return False

    l += 1
    r -= 1

  return True




# this has space deficiencies
class Solution:
  def isPalindrome(self, s: str) -> bool:
    result = '' # uses extra memory

    for c in s:
      if c.isalnum():
        #lower case the string and concatenate if alphanumeric char
        result += c.lower()
      return result == result[::-1] # new string reversal uses extra memory
