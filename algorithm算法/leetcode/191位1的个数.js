/**
 * https://leetcode.cn/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let ret = 0;
  while (n) {
    n &= n - 1;
    ret++;
  }
  return ret;
};

var r = hammingWeight(0b0000000000000000000000000001011);
console.log(r);