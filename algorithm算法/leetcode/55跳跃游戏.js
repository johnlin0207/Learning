/**
 * 贪心：算出每次跳跃跳最大步数，最后看整体覆盖范围是否可以不间断地触及终点
 * https://leetcode.cn/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let cover = nums[0];
    for (let i = 0; i < nums.length; i++) {
        // 先比较当前位置是否被覆盖
        if(cover >= i){
            // nums[i]+i表示当前的cover能覆盖到的索引，根上一个cover覆盖到的索引对比
            cover = Math.max(nums[i] + i, cover);
        }
        if(cover >= nums.length - 1){
            return true
        }
    }
    return false;
};

var r = canJump([4,3,2,1]);
console.log(r);