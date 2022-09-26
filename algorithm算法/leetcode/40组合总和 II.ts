/**
 * https://leetcode.cn/problems/combination-sum-ii/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    let path: Array<number> = [];
    let result: Array<object> = [];
    let sum: number = 0;
    let usedIndex: Array<number> = [];

    candidates = candidates.sort((x, y) => x-y);

    const loop = (startIndex: number, sum: number) => {

        if(sum === target){
            result.push([...path])
        }

        for (let i = startIndex; i < candidates.length; i++) {
            if(candidates[i] + sum > target || (candidates[i] === candidates[i - 1] && usedIndex.includes(i))){
                continue
            }
            const thisItem = candidates[i];
            sum += thisItem;
            usedIndex.push(i);
            path.push(thisItem);
            loop(i + 1, sum)
            path.pop();
            usedIndex.pop();
            sum-=thisItem;
        }
    }

    loop(0, sum);
    return result;
};

// @ts-ignore
const r = combinationSum2([10,1,2,7,6,1,5], 8);
console.log(r);