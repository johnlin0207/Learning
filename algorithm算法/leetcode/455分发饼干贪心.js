/**
 * 先从小到大排序，再从分别从右往左对比两个数组
 * https://leetcode.cn/problems/assign-cookies/
 * @param {number[]} weiKou 胃口
 * @param {number[]} size 饼干大小
 * @return {number}
 */
var findContentChildren = function(weiKou, size) {
  // 先对胃口和饼干排序，从大到小
  let sortWeiKou = weiKou.sort((x,y) => x - y);
  let sortSize = size.sort((x,y) => x - y);
  let thisWeiKou = sortWeiKou.pop();
  let thisSize = sortSize.pop();
  let count = 0;

  // 分别匹配胃口和饼干
  while (thisWeiKou && thisSize) {
    if(thisSize >= thisWeiKou){
      count ++;
      // 同时往前移动一位
      thisWeiKou = sortWeiKou.pop();
      thisSize = sortSize.pop();
    } else {
      // 当前饼干大小不符合当前胃口，尝试匹配下一个胃口
      thisWeiKou = sortWeiKou.pop();
    }
  }

  return count
};

var r = findContentChildren([1,2,3], [1,1]);
console.log(r);