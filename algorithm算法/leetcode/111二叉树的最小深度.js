/**
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0
  }
  let leftDepth = minDepth(root.left);
  let rightDepth = minDepth(root.right);

  // 当一个左子树为空，右不为空，这时并不是最低点，+1后继续递归
  if(root.left === null && root.right !== null){
    return rightDepth + 1
  }
  // 当一个右子树为空，左不为空，这时并不是最低点，+1后继续递归
  if(root.right === null && root.left !== null){
    return leftDepth + 1
  }
  return Math.min(leftDepth, rightDepth) + 1
};

var r = minDepth({
  val: 3,
  left: {val: 9, left: null, right: null},
  right: {val: 20, left: {val: 15, left: null, right: null}, right: {val: 7, left: null, right: null}}
});

console.log(r);


/**
 * method2:使用层序迭代方式计算最小深度
 * @param root
 * @returns {null|*}
 */
var minDepth2 = function (root) {
  if (!root) {
    return null
  }
  // queue记录遍历到的节点，queue保存的节点可能是不同层的，于是用queue.length长度循环保证循环内的属于同层
  let queue = [root];
  let depth = 0, minDepth = Infinity;
  while (queue.length) {
    depth++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      // 拿出栈里第一项作为当前项
      const node = queue.shift();
      if (!node.left && !node.right) {
        minDepth = Math.min(minDepth, depth)
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return minDepth
};

var r2 = minDepth2(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(7, null, new TreeNode(8)))));

// console.log(r2);