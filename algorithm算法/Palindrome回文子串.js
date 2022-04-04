function isPalindrome(s){
  let flag = false;;
  for (let i = 0; i < s.length; i++) {
    if(s[i] !== s[s.length - 1 - i]){
      return false
    }
  }
  return flag ? s : '';
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length === 1){
    return s
  }
  if([...new Set(s)].length === s.length){
    return s[0]
  }
  let str = '';
  for (let i = 0; i < s.length; i++) {
    const outerElement = s[i];
    for (let j = i + 1; j < s.length; j++) {
      const innerElement = s[j];
      if(innerElement === outerElement){
        let substr = s.substring(i, j + 1);
        if(isPalindrome(substr)){
          str = substr.length > str.length ? substr : str
        } else {
          str = substr.length > str.length ? substr[0] : str
        }
      } 
    }
  }
  console.log(str)
  return str
};

var result = longestPalindrome('abcdedcsf');