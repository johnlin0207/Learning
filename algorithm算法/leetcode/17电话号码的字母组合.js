/**
 * digits[i] 是范围 ['2', '9'] 的一个数字
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits){
        return []
    }

    const result = []; let path = '', arr = [];

    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    var loop = (arr, index) => {
        if(path.length === digits.length){
            result.push(path);
            return
        }
        const thisArr = arr[index];
        for (let i = 0; i < thisArr.length; i++) {
            path += thisArr[i];
            loop(arr, index + 1);
            path = path.slice(0, path.length - 1);
        }
    }

    for (let i = 0; i < digits.length; i++) {
        arr.push(map[digits[i]]);
    }
    loop(arr, 0);
    return result
};

const r = letterCombinations('345');
console.log(r);