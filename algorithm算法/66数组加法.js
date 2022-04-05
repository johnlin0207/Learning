/**
 * https://leetcode-cn.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let plusOneFlag = true;
  for (let i = digits.length - 1; i >= 0; i--) {
    const element = digits[i];
    if(plusOneFlag){
      if(element + 1 > 9){
        digits.splice(i, 1, 0);
        plusOneFlag = true;
      } else {
        digits.splice(i, 1, element + 1);
        plusOneFlag = false
      }
    }
  }
  if(plusOneFlag){
    digits.unshift(1);
  }
  console.log(digits)
  return digits
};

const result = plusOne([9,8,7,6,5,4,3,2,1,0]);
console.log(result)