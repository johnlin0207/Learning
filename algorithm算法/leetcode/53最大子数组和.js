/**
 * 暴力双循环解法
 * https://leetcode.cn/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(sum, max);
    }
  }
  return max
};

var r = maxSubArray([5,4,-1,7,8]);
// console.log(r);


/**
 * 贪心，遇到会拉低累积和为负数的那个数直接跳过
 * 时间复杂度O(n)，空间复杂度O(1)
 * @param nums
 */
var maxSubArray2 = function(nums) {
  let max = -Infinity, sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    // 算上当前这个数的累计值sum大于之前的最大局部，更新最大局部和为当前累积值
    max = Math.max(max, sum);
    // 若算上当前这个数的累计值sum小于0，说明当前数拉低了总体和，清空包含目前项的累积值，跳到下一个数
    if(sum < 0){
      sum = 0;
    }
  }
  return max
};
var r2 = maxSubArray2([-2, -1]);
// console.log(r2);


/**
 * 动态规划
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param nums
 * @returns {number}
 */
var maxSubArray3 = function(nums) {
  if(nums.length === 0){ return 0 }
  // dp为保存当前推导出的状态数组
  let dp = [nums[0]];
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]); //递推公式
    max = Math.max(dp[i], max);
  }
  return max
  };
var r3 = maxSubArray3([-2, -1, 1, -2, 5]);
console.log(r3);