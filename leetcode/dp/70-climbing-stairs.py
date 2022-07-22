#O(n) using DFS because decision trees duplicate; use cache / memoization
# bottom up DP approach (solve at base case and work our way up)

class Solution:
    def climbStairs(self, n: int) -> int:
        one, two = 1, 1

        for i in range(n - 1):
          temp = one
          one = one + two #add 2 prev values to get new result
          two = temp #moves to old value of one

        return one
