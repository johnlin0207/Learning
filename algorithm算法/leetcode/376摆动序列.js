/**
 * 贪心解法，去除非顶点的节点实现局部最优，从而整体最优
 * 时间复杂度 O(n)，空间复杂度O(1)
 * https://leetcode.cn/problems/wiggle-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  let prevDiff = 0;
  let currentDiff = 0;
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    currentDiff = nums[i+1] - nums[i];
    // 判断是不是顶点
    if((currentDiff > 0 && prevDiff <= 0) || (currentDiff < 0 && prevDiff >= 0)){
      prevDiff = currentDiff;
      count ++;
    }
  }
  return count
};

var r = wiggleMaxLength([1]);
console.log(r);
