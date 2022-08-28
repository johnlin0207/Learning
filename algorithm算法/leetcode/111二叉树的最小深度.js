/**
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if(!root){
    return 0
  }
  if(root.left === null && root.right === null){
    return 1
  }
  var ans = Number.MAX_SAFE_INTEGER;
  if(root.left !== null){
    ans = Math.min(minDepth(root.left), ans)
  }
  if(root.right !== null){
    ans = Math.min(minDepth(root.right), ans)
  }
  return ans + 1
};

var r = minDepth({
  val: 3,
  left: {val: 9, left: null, right: null},
  right: {val: 20, left: {val: 15, left: null, right: null}, right: {val: 7, left: null, right: null}}
});

console.log(r)