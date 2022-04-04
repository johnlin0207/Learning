/**
 * https://leetcode-cn.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let i = nums.length - 1; i >= 0; i--) {
    const element = nums[i];
    if(element === val){
      nums.splice(i, 1)
    }
  }
  return nums.length
};

const result = removeElement([3,2,2,3], 3);
console.log(result);