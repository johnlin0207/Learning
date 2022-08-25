/** https://leetcode-cn.com/problems/longest-common-prefix/
 * @param {string[]} arr
 * @return {string}
 */


var longestCommonPrefix = function(arr) {
  if(!arr.length){
    return ''
  }
  // 两两对比，依次找出最长公共前缀，最长的那个就是结果
  let ans = arr[0];
  // ans已经赋予[0]了，开始从[1]对比
  for (let i = 1; i < arr.length; i++) {
    // 对比ans和arr[i]，对比次数为length短的那个，j放到外边是为了拿到最短限制包括arr[i]长度小于ans长度造成的循环结束
    let j = 0;
    for (; j < ans.length && j < arr[i].length; j++) {
      // 开始逐字对比ans和arr[i]，只要遇到不相等的字符结束对比并截短ans
      if(arr[i][j] !== ans[j]){
        break;
      }
    }
    ans = ans.substring(0, j);
  }
  return ans
};

const result = longestCommonPrefix(["ab", "a"]);
console.log(result);