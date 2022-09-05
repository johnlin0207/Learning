/**
 * https://leetcode.cn/problems/balanced-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 高度平衡二叉树定义为：一个二叉树每个节点的左右两个子树的高度差的绝对值不超过 1 。
 * 条件一：如果左右子树的高度差是否不超过 1，条件二：再分别递归地遍历左右子节点，并判断左子树和右子树是否平衡；满足这两个条件证明当前节点是AVL(平衡二叉树)
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if(!root){ return true}
  var leftMax = height(root.left);
  var rightMax = height(root.right);
  return Math.abs(leftMax - rightMax) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

// 寻找二叉树某一个节点的最大深度，参考leetcode 103题
function height(root){
  if(!root){
    return 0
  }
  return Math.max(height(root.left), height(root.right)) + 1
}

var r = height({
  val: 3,
  left: {val: 9, left: null, right: null},
  right: {val: 20,
    left: {val: 15, left: null, right: null},
    right: {val: 7, lefty: null, right: null}
  }
});
// console.log(r);



function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @return number
 * @param node
 */
const depth = (node) => {
  if(!node){ return 0 }
  return Math.max(depth(node.left), depth(node.right)) + 1
};

var isBalanced2 = function(root){
  if(!root){ return true }
  // 计算左右子节点的深度
  return isBalanced2(root.left) && isBalanced2(root.right) && (Math.abs(depth(root.left) - depth(root.right)) <= 1)
};

const r2 = isBalanced2(new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3)));
console.log(r2);















