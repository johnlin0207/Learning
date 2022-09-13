/**
 * 回溯
 * https://leetcode.cn/problems/combinations/
 * 给定两个整数 n 和 k，返回在范围 [1, n] 中所有可能的 k 个数的组合
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let result = [];
let path = [];

var loop = (startIndex, n, k) => {
  if(path.length === k){
    result.push([...path]);
    return
  }
  for (let i = startIndex; i <= n; i++) {
    path.push(i);
    loop(i + 1, n , k);
    path.pop();
  }
};

var combine = function(n, k) {
  // 不加清空在leecode因全局变量问题报错
  result = [];
  loop(1, n, k);
  return result;
};


var r = combine(1, 1);
console.log(r);