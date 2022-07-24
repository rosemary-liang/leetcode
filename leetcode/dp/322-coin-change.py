# can solve top down DFS
# optimal: can solve DP bottom up
# #(number) of coins vs AMT val of coins

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
      # initialize dp with list with len(amount + 1) <-- bc go from 0...amount
        # example start: dp = [] * (amount +1)
        # default val inside list: amount + 1 <-- this is a max value
      dp = [amount + 1] * (amount + 1)
      # base case: dp[0] = 0 <-- bc to compute amount 0, it takes 0 coins
      dp[0] = 0

      # for every amt in range, go bottom up so from 1 to amount + 1
      for a in range(1, amount + 1):
        # go through every coin, calc the dp[amt]
        for c in coins:
          # if amt - coin is non-negative, can continue searching
          if a - c >= 0:
            #possibly found solution for dp[a]
            # set to min of itself or 1 + dp[amt - coin]
              # 1 comes from # coins being used currrently (1 coin)
              # dp[a-c] comes from how much dp amt is left to compute for remaining coins
                # ex/ if coin = 4 && a = 7
                # dp[7] = 1 + dp[3]
                  # dp[3] because dp[7 - 4]
                  # dp[3] remaining coin amt because dp[at - current coin amt]
            dp[a] = min(dp[a], 1 + dp[a - c])

      # only return if dp[amount] is not default value from first line in initializing dp
      if dp[amount] != amount + 1:
        return dp[amount]
      else:
        return -1

# initialize dp list to track # of coins needed as dp[amt]
# list length should be amount +1 bc using base case dp[0] = 0

# loop through each amount list index after 0, so 1 through amount +1
# loop through each coin (brute force)
  # check if coin amount does not exceed amount
    #potential solution - calc the dp[amount] = minimum of dp[amount - coin value]
    # this works because the smaller amounts are already calculated and stored in array
# if dp[amount] not default val from initializing list, then return dp[amt]
# else return -1 because it was not found. means that smallest coin val > amount
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
      dp = [amount + 1] * (amount + 1)
      #base: takes 0 coins to get to 0 amount value
      dp[0] = 0


      # this means loop start at dp[0]
      for a in range(1, amount + 1):
        for c in coin:
          if c <= a:
            #number of coins needed = 1 # of current coin + dp[amount - coin value]
            dp[a] = min(dp[a], 1 + dp[a - c])

      # edge: only return if dp[amount] is not the default value from initializing list
      return dp[amount] if dp[amount] != amount + 1 else -1
