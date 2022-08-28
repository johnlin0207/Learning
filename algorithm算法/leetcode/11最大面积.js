/**
 * https://leetcode-cn.com/problems/container-with-most-water/
 * https://leetcode-cn.com/problems/container-with-most-water/solution/sheng-zui-duo-shui-de-rong-qi-by-leetcode-solution/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let leftIndex = 0;
  let rightIndex = height.length - 1 - leftIndex;
  let maxArea = 0;
  // 使用双指针从两侧向中间靠拢，两个指针所指向的哪个值小就从那个靠拢
  while(leftIndex < rightIndex){
    let leftVal = height[leftIndex];
    let rightVal = height[rightIndex];
    let minHieght = Math.min(leftVal, rightVal);
    let delta = Math.abs(leftIndex - rightIndex);
    let area = delta * minHieght;
    if(rightVal >= leftVal){
      leftIndex++;
    } else {
      rightIndex--
    }
    maxArea = Math.max(maxArea, area)
    // console.log(area, leftVal, rightVal, delta, minHieght)
  }
  return maxArea;
};

const result = maxArea([1,8,6,2,5,4,8,3,7]);
console.log(result)