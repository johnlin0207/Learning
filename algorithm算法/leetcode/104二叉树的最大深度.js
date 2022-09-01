function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * method1:递归法
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  var left = maxDepth(root.left);
  var right = maxDepth(root.right);
  return Math.max(left, right) + 1
};

var r = maxDepth(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(7, null, new TreeNode(8)))));

console.log(r);


/**
 * method2:使用层迭代方式计算最大深度
 * @param root
 * @returns {null|*}
 */
var maxDepth2 = function (root) {
  if (!root) {
    return null
  }
  // queue记录遍历到的节点，queue保存的节点可能是不同层的，于是用queue.length长度循环保证循环内的属于同层
  let queue = [root];
  let depth = 0;
  while (queue.length) {
    depth++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      // 拿出栈里第一项作为当前项
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return depth
};

var r2 = maxDepth2(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(7, null, new TreeNode(8)))));

console.log(r2);