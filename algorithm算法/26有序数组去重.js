/**
 * 使用双指针方式，一个指针指向不重复的位置记为slow，另一个指向当前遍历的元素，记为fast
 * 要求不使用额外空间
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr){
  let slowIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    const fastIndex = i;
    const fastElement = arr[fastIndex];
    const slowElement = arr[slowIndex];
    if(fastElement !== slowElement){
      slowIndex ++;
      arr[slowIndex] = fastElement
    }
  }
  return slowIndex + 1;
}

var result = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
console.log(result)