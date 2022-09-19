/**
 * 贪心，某2天之间的收益可以分解成每相邻2天的总收益之和，筛选出收益为正的相加和为这2天内的最大收益
 * 时间复杂度O(n)，空间复杂度O(1)
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/submissions/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  for(let i = 1; i < prices.length; i++){
    let thisProfit = prices[i] - prices[i - 1];
    if(thisProfit > 0){
      profit += thisProfit
    }
  }
  return profit
};

var r = maxProfit([1,2,3,4,5]);
console.log(r)


/**
 * 动态规划，二维数组dp[i][0]记录第i天持有的最多现金,dp[i][1]记录第i天持有股票后的最多现金
 * @param prices
 * @returns {number}
 */
var maxProfit2 = function(prices) {

};

var r2 = maxProfit2([1,2,3,4,5]);
console.log(r2)