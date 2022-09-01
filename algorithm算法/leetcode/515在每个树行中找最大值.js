/**
 * https://leetcode.cn/problems/find-largest-value-in-each-tree-row/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param root
 * @param res
 * @returns {Array}
 */
var largestValues = function(root, res = []) {
  if(!root){ return res }
  // queue存储每层的节点元素
  const queue = [root];
  while(queue.length){
    // 当前层的数值
    let levelMax = -Infinity;
    const len = queue.length;
    for (let i = 0; i < len ; i++) {
      // 逐个添加本层的节点val
      const node = queue.shift();
      levelMax = Math.max(levelMax, node.val);
      // 迭代每个当前层的下层元素
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(levelMax)
  }
  return res
};

var r = largestValues({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {val: 3, left: {val: 4, left: null, right: null}, right: {val: 5, left: null, right: null}}
});

console.log(r);