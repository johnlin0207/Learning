/**
 * https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  // 包里双循环
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if(nums[i] === nums[j]){
  //       return nums[i]
  //     }
  //   }
  // }

  // 维护哈希表找出存在的那个即为重复数
  const o = {};
  for (let i = 0; i < nums.length; i++) {
    if(!o[nums[i]]){
      o[nums[i]] = 1;
    } else {
      return nums[i]
    }
  }
};

var r = findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);
console.log(r);