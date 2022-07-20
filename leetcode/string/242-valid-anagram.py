# check if length of both strings match

#decrement
class Solution:
  def isAnagram(self, s: str, t: str) -> bool:
    if len(s) != len(t):
      return False

    map = {}

    for i in range(len(s)):
      map[s[i]] = map.get(s[i], 0) + 1 #if s[i] key doesnt exist, use default value 0

    for i in range(len(t)):
      if map.get(t[i], 0) == 0:
        return False
      else:
        map[t[i]] -= 1

    return True







# set up hashmaps to count char occurrences for both strings
# iterate through indexes of first string
#   set count to count.get default 0 or increment for both strings
# iterate through keys in first string
#   if count at key in s does not match count.get default 0 at key in t, return false
# return True


# class Solution:
#   def isAnagram(self, s: str, t: str) -> bool:
#     if len(s) != len(t):
#       return False

#     countS, countT = {}, {}

#     for i in range(len(s)):
#       countS[s[i]] = countS.get(s[i], 0) + 1 #if s[i] key doesnt exist, use default value 0
#       countT[t[i]] = countT.get(t[i], 0) + 1

#     for c in countS:
#       if countS[c] != countT.get(c, 0): # if key doesn't exist, set default value
#         return False

#     return True
