/**
 * https://leetcode.cn/problems/maximum-product-of-two-elements-in-an-array/submissions/
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if(maxCount < (nums[i]-1)*(nums[j]-1)){
        maxCount = (nums[i]-1)*(nums[j]-1);
      }
    }
  }
 return maxCount
};

var r = maxProduct([1,5,4,5]);
console.log(r);