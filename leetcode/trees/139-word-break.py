# recursion dp
# base case, dp[n] = True
# go backwards

class Solution:
  def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    dp = [False] * (len(s) + 1) #+1 for base case at last position out of bounds of string
    #initialize base case at last position
    dp[len(s)] = True

    #start at last index and decrement until beg of string
    for i in range(len(s) -1, -1, -1):
      # try every word in dict and see if matches
      for w in wordDict:
        # there are enough chars in s for us to compare
         # s at index i through i+len(w) ; are the first chars in range equal
        if (i + len(w)) <= len(s) and s[i : i + len(w)] == w:
          dp[i] = dp[i + len(w)]
        if dp[i]:
          # if true, then break out and move on to next index
          break
    return dp[0]

class Solution:
  def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    dp = [] * len(s) + 1
    dp[len(s)] = True

    for i in range(len(s) -1, -1, -1):
      for w in wordDict:
        if (i + len(w) <= len(s)) and s[i : i + len(w)] == w:
          dp[i] = dp[i + len(w)]
        if dp[i]:
          break
    return dp[0]
