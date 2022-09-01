function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * 层序迭代法，比较每一层的val是否对称，没有子节点的val值用undefined代替
 * @param root
 * @returns {boolean}
 */
function isSymmetric2(root) {
  if (!root) {
    return false
  }
  const queue = [root];
  let isSym = true;

  while (queue.length) {
    const levelValList = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      levelValList.push(node.val);
      if (node.left) {
        queue.push(node.left);
      } else if (node.left === null) { // 没有left或right的其对应的值用undefined代替
        queue.push({})
      }
      if (node.right) {
        queue.push(node.right);
      } else if (node.right === null) { // 没有left或right的其对应的值用undefined代替
        queue.push({})
      }
    }
    for (let j = 0; j < levelValList.length; j++) {
      isSym = isSym && (levelValList[j] === levelValList[len - j - 1])
    }
  }
  return isSym
}

var r2 = isSymmetric2(new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(2, null, new TreeNode(4))));

// console.log(r2);


/**
 * 递归法
 * @param root
 */
function isSymmetric3(root) {

  function compare(root) {
    if (!root) {
      return false
    }
    return equal(root.left, root.right)
  }

  function equal(leftNode, rightNode) {
    // 对于本轮对比的两个元素作比对
    if (leftNode === null && rightNode === null) {
      return true
    }
    if (leftNode === null || rightNode === null) {
      return false
    }
    if (leftNode.val !== rightNode.val) {
      return false
    }
    // 交叉对比：将左节点的左子元素跟右节点的右子元素对比，将左节点的右子元素跟右节点的左子元素对比
    return equal(leftNode.left, rightNode.right) && equal(leftNode.right, rightNode.left)
  }

  return compare(root)
}

var r3 = isSymmetric3(new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(2, null, new TreeNode(4))));
console.log(r3);