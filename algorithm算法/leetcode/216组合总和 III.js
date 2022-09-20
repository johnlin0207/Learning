/**
 * 要求1-9中的k个数相加和等于n，求出这些数的所有情况
 * https://leetcode.cn/problems/combination-sum-iii/
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var result = [], path = [];

var loop = (k, n, startIndex = 1, sum = 0) => {
    // 提前结束
    if(sum > n){
        return
    }
    // 足够k个数直接返回
    if(path.length === k && sum === n){
        console.log(path)
        // push前需要深拷贝，否则由于引用关系会导致最终的path为空
        result.push([...path])
        return
    }
    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
        path.push(i);
        startIndex = i + 1;
        loop(k, n, startIndex, sum + i);
        path.pop();
    }
    return result
}

var combinationSum3 = function(k, n) {
    result = [];
    return loop(k, n)
};

const r = combinationSum3(3, 9);
console.log(r);