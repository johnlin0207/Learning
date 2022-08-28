/**
 * https://leetcode-cn.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if(nums[0] > target){
    return 0
  }
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if(element === target){
      return index
    }
    if(index === nums.length - 1){
      return nums.length
    }
    if(target > element && target < nums[index + 1] ){
      return index + 1
    }
  }
};
const result = searchInsert([1,3,5,6], 5);
console.log(result);