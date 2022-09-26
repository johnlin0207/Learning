/**
 * https://leetcode.cn/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let path = [];
    let result = [];

    const loop = (startIndex) => {
        result.push([...path])
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i]);
            loop(i + 1);
            path.pop();
        }
    }

    loop(0);
    return result;
};

// @ts-ignore
const r = subsets([1,2,3]);
console.log(r);