/**
 * 经过分析可知爬到第i层只能通过第i-1和i-2这两层爬上去，则第i层的方法数f(i) = f(i-1) + f(i-2)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let list = [1, 2];
  for (let i = 2; i <= n; i++) {
    list[i] = list[i-1] + list[i-2]
  }
  return list[n-1]
};

var r = climbStairs(5);
// console.log(r);

/**
 * 拓展，一次最多跨m层
 * @param n
 * @param m
 * @returns {number}
 */
var climbStairs2 = function(n, m) {
  let list = [1, 2];
  for (let i = 2; i <= n; i++) {
    list[i] = 0;
    for (let j = 1; j <= m; j++) {
      if(i>=j){
        list[i] += list[i-j]
      }
    }
  }
  return list[n-1]
};

var r2 = climbStairs2(5, 1);
console.log(r2);