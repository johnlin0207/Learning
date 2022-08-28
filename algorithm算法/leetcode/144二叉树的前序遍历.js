/**
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/
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
var preorderTraversal = function(root) {
  var arr = [];
  const loop = (root) => {
    if(root){
      arr.push(root.val);
      loop(root.left);
      loop(root.right);
    }
  };
  loop(root);
  return arr;
};

var r = preorderTraversal({val: 1, left: null, right: {val: 2, left: {val: 3, left: null, right: null}, right: null}});
console.log(r);