/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let cover = nums[0];
    for (let i = 0; i < nums.length; i++) {
        // 先比较当前位置是否被覆盖
        if(cover >= i){
            // nums[i]+i表示当前的cover能覆盖到的索引，根上一个cover覆盖到的索引对比
            cover = Math.max(nums[i] + i, cover);
            console.log(cover)
        }
    }

};

const r = jump([2,3,1,1,4]);
console.log(r);