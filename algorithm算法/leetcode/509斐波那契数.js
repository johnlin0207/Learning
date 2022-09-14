/**
 * 循环构建数列法，时间复杂度O(n)，空间复杂度O(1)
 * 动态规划
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let last = 1;
  let last2 = 0;
  for (let i = 2; i <= n; i++) {
    const temp = last2;
    last2 = last;
    last = temp + last2;
  }
  return n === 0 ? last2 : last
};

var r = fib(5);
// console.log(r);

/**
 * 递归，时间复杂度O(2^n)，空间复杂度O(n)
 * @param n
 * @returns {number|*}
 */
var fib2 = function (n) {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return fib2(n - 1) + fib2(n - 2)
  }
};

var r2 = fib2(3);
console.log(r2);