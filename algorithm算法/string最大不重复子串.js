/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = [];
  let max = 0;
  for (const v of s) {
    while(res.includes(v)){
      res.shift();
    }
    res.push(v);
    max = Math.max(max, res.length)
  }
  return max
};

var result = lengthOfLongestSubstring("babad")
console.log(result)
