/**
 * 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。
 * https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 只需要反转正序的层级遍历的结果即可
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root, res = []) {
  if(!root){ return res }
  // queue存储每层的节点元素
  const queue = [root];
  while(queue.length){
    // 当前层的数值
    let thisLevel = [];
    const len = queue.length;
    for (let i = 0; i < len ; i++) {
      // 逐个添加本层的节点val
      const node = queue.shift();
      thisLevel.push(node.val);
      // 迭代每个当前层的下层元素
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(thisLevel)
  }
  return res.reverse()
};

var r = levelOrderBottom({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {val: 3, left: {val: 4, left: null, right: null}, right: {val: 5, left: null, right: null}}
});

console.log(r);