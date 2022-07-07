// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

//   Example 2:
// Input: prices = [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

//  @param {number[]} prices
//  @return {number}

// solution (not my solution) 5/24/22

const maxProfit = (prices) => {
  let profit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }
  return profit;
};

/* 7/6/22
sliding window
initialize profit at 0 because return 0 if no profit achieveable
intiialize min at prices[0]

for loop, iterate through prices and check min and profit need to be reassigned
  check if min is less than prices[i], if true reassign min
  ELSE: check if current profit (prices[i] - min) is greater than existing profit, if true reassign profit

  exit loop
  return profit
 */

const maxProfit = (prices) => {
  let profit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else if (profit < prices[i] - min) {
      profit = prices[i] - min;
    }
  }

  return profit;
};

/* 7/6/22 part 2
return max profit or 0
initialize profit at 0
initialize min at prices[0]

loop through prices
  compare against min, if el < min, reassign min
  ELSE: compare profit against el - min, if profit is less, reassign profit

exit loop
return profit
 */
const maxProfit = (prices) => {
  let profit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else if (profit < prices[i] - min) {
      profit = prices[i] - min;
    }
  }
  return profit;
};
