/**
 * https://leetcode.cn/problems/restore-ip-addresses/
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let path = [];
    let pathLength = 0;
    let result = [];
    const check = (str) => {
        // 排除只要有一个字符不是数字
        if (/[^\d]+$/.test(str)) {
            return false;
        }
        // 排除形如0XX的数字
        if (/^0\d+?/.test(str)) {
            return false;
        }
        // 排除数值大于255
        if (Number(str) > 255) {
            return false;
        }
        return true;
    };
    const loop = (startIndex) => {
        if (path.length === 4 && pathLength === s.length) {
            result.push(path.join('.'));
            return;
        }
        for (let i = startIndex; i < s.length; i++) {
            let substr = s.substring(startIndex, i + 1);
            if (check(substr)) {
                pathLength += substr.length;
                path.push(substr);
                loop(i + 1);
                path.pop();
                pathLength -= substr.length;
            }
        }
    };
    loop(0);
    return result;
};
// @ts-ignore
const r = restoreIpAddresses("101023");
console.log(r);
