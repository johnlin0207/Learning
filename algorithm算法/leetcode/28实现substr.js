// 在long中匹配short字符串
const isMatch = function(long, LongIndex, short){
  for (let index = 0; index < short.length; index++) {
    const element = short[index];
    if(element !== long[LongIndex + index]){
      return false
    }
  }
  return true;
}

/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle === ''){
    return 0
  }
  const char = needle[0];
  for (let index = 0; index < haystack.length; index++) {
    const element = haystack[index];
    if(element === char){
      if(isMatch(haystack, index, needle)){
        return index
      }
    }
  }
  return -1;
};


const result = strStr('aaaaa', 'bba');
console.log(result)