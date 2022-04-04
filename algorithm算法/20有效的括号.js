/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  var obj = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    // 判断指针当前指向的是不是跟之前的互补，是的话弹出栈中最后一个，不是的话压入stack
    if(s[i] === obj[stack[stack.length - 1]]){
      // 弹出栈中最后一个
      stack.pop();
    } else {
      stack.push(s[i])
    }
  }
  return stack.length === 0
};

const result = isValid("(){}}{}");
console.log(result);