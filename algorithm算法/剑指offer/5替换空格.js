/**
 * https://leetcode.cn/problems/ti-huan-kong-ge-lcof/
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  // API大法
  // return s.replace(/\s/g, function(){
  //   return '%20'
  // })

  let r = '';
  for (let i = 0; i < s.length; i++) {
    if(s[i] === ' '){
      r += '%20'
    } else {
      r += s[i]
    }
  }
  return r;

};

var r = replaceSpace("We are happy.");
console.log(r);