/**
 * https://leetcode.cn/problems/merge-two-binary-trees/
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
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {

  const loop = (node1, node2) => {
    if(node1 === null){
      return node2
    }
    if(node2 === null){
      return node1
    }
    // 前序遍历，可以调整位置使其变成中序和后序结果不变
    node1.val = node1.val + node2.val;
    node1.left = loop(node1.left, node2.left);
    node1.right = loop(node1.right, node2.right);
    return node1
  };

  return loop(root1, root2);
};

const t1 = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
const t2 = new TreeNode(1, new TreeNode(3), new TreeNode(2, null, new TreeNode(4)));

const r = mergeTrees(t1, t2);
console.log(r);