/**
 * https://leetcode-cn.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let index = s.length - 1;
  let len = 0;
  while(s[index] === ' '){
    index --
  }
  while(s[index] !== ' ' && index >= 0){
    index --;
    len ++;
  }
  return len
};

const result = lengthOfLastWord( "   fly me   to   the moon  ");
console.log(result)