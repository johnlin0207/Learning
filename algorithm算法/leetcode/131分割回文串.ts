/**
 * https://leetcode.cn/problems/palindrome-partitioning/
 * @param {string} s
 * @return {string[][]}
 */
const partition = function(s: string) {
    let result: Array<object>;
    let path: Array<string>;
    result = [];
    path = [];
    let len: number = s.length;

    const isPalindrome = (str: string) => {
        let start = 0;
        let end = str.length - 1;
        for (let i = start; i < end && start < end; i++) {
            if(str[start] !== str[end]){
                return false
            } else {
                start ++
                end --;
            }
        }
        return true
    }

    const loop = (startIndex: number) => {

        if(startIndex === s.length){
            result.push([...path])
        }

        for (let i = startIndex; i < len; i++) {
            let substr = s.substring(startIndex, i + 1);
            if(isPalindrome(substr)){
                path.push(substr);
                loop(i + 1);
                path.pop()
            }
        }
    }

    loop(0)
    return result;
};

const r = partition("a");
console.log(r);