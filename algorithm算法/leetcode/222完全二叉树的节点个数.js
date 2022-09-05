/**
 * https://leetcode.cn/problems/count-complete-tree-nodes/
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * 递归
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) {
    return 0
  }
  const leftCount = countNodes(root.left);
  const rightCount = countNodes(root.right);
  return leftCount + rightCount + 1
};

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6)));
const r = countNodes(tree);
// console.log(r);


/**
 * 迭代法
 * @param root
 */
var countNodes2 = function (root) {
  if(!root){ return 0 }
  const queue = [root];
  let count = 0;
  while (queue.length) {
    const len = queue.length;
    count += len;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return count;
};

const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6)));
const r2 = countNodes2(tree2);
console.log(r2);
