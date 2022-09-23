/**
 * https://leetcode.cn/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let len = candidates.length;
    let path = [];
    let result = [];
    let sum = 0;
    // candidates = candidates.sort((x, y) => x - y);
    const loop = (startIndex, path, sum) => {
        if(sum > target){
            return
        }
        if(sum === target){
            result.push([...path]);
            return
        }
        for (let i = startIndex; i < len; i++) {
            let item = candidates[i];
            if(sum + item > target){
                continue
            }
            path.push(item);
            sum+=candidates[i];
            loop(i, path, sum);
            sum-=item;
            path.pop();
        }
    }

    result = [];
    loop(0, path, sum);
    return result;
};

const r = combinationSum([1,2,3,7], 6);
console.log(r);