/**
 * https://leetcode.cn/problems/binary-tree-postorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  var arr = [];
  var loop = (root) => {
    if(!root){ return }
    loop(root.left);
    loop(root.right);
    arr.push(root.val);
  };
  loop(root);
  return arr
};

var r = postorderTraversal({val: 1, left: null, right: {val: 2, left: {val: 3, left: null, right: null}, right: null}});
console.log(r);