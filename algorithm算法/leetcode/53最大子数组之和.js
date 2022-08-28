var maxSubArray = function(nums) {
  let preSum = 0;
  let maxSum = nums[0]
  nums.forEach(item => {
    preSum = Math.max(preSum + item, item);
    maxSum = Math.max(maxSum, preSum);
  });
  return maxSum;
};
const result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(result);