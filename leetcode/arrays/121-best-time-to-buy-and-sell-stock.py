# track both min and profit
# return max profit

# initialize left and right pointers at index 0 and 1 (left is min, right is max)
# initialize maxP at 0

# interate while r is less than len(prices)
#   check if profitable - price at l is less than price at r
#     true - calc profit and compare against maxP
#     else - assign l to r bc r is the minimum

#   move r 1 index to the right

# return maxP

class Solution:
  def maxProfit(self, prices: [int]) -> int:
    l, r = 0, 1 # l is buy, r is sell
    maxP = 0

    while r < len(prices):
      #profitable
      if prices[l] < prices[r]:
        profit = prices[r] - prices[l]
        maxP = max(maxP, profit)
      #not profitable - move l pointer to new min, which is currently r
      else:
        l = r
      r += 1
    return maxP


class Solution:
  def maxProfit(self, prices: [int]) -> int:
    l, r = 0, 1 # l = min, r = max
    maxP = 0

    while r < len(prices):
      # profitable?
      if prices[l] < prices[r]:
        profit = prices[r] - prices[l]
        maxP = max(maxP, profit)
      #not profitable
      else:
        l = r #the right is lower than left, so move left to lowest
      r += 1

    return maxP
