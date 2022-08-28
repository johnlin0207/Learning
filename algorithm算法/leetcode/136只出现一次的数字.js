/**
 * https://leetcode.cn/problems/single-number/
 * 思路：先排序，再每每2个数作对比，对比完成后指针指向下下一个数继续执行对比
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === nums[i+1]){
      i++
    } else {
      return nums[i];
    }
  }
};

var r = singleNumber([1,1,2,2]);
console.log(r);


// 异或方法题解
// 一个数和 0 做 XOR 运算等于本身：a⊕0 = a
// 一个数和其本身做 XOR 运算等于 0：a⊕a = 0
// XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
// 根据交换律和结合律只需要通过异或运算就可以找出落单的那个数

var singleNumber2 = function(nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i]
  }
  return ans
};

var r2 = singleNumber2([1,1,2,2]);
console.log(r2);