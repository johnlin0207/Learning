/**
 * https://leetcode.cn/problems/path-sum/
 * @param val
 * @param left
 * @param right
 * @constructor
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/** 递归回溯
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false
  }
  let hasSum = false;

  const loop = (node, sum) => {
    if (!node) {
      return
    }
    if (node.left === null && node.right === null) {
      if(sum === targetSum){
        hasSum = true
      }
    }
    if (node.left) {
      sum += node.left.val;
      loop(node.left, sum);
      sum -= node.left.val;
    }
    if (node.right) {
      sum += node.right.val;
      loop(node.right, sum);
      sum -= node.right.val;
    }
  };
  loop(root, root.val);
  return hasSum
};

var r2 = hasPathSum(new TreeNode(1, new TreeNode(2, new TreeNode(4),
  new TreeNode(5)), new TreeNode(3, null, new TreeNode(7, null, new TreeNode(8)))),
  9);

console.log(r2);
