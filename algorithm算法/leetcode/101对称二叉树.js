function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * method1:递归法
 * 对称二叉树思路跟翻转二叉树并不同，翻转二叉树只需要交换每一个节点的左右子节点即可，对称二叉树不能对一个节点的左右子节点作对比
 * 对称二叉树是在交叉对比，即将左节点的左子元素跟右节点的右子元素对比，和将左节点的右子元素跟右节点的左子元素对比
 * @param root
 */
function isSymmetric(root) {

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

  if (!root) {
    return false
  }

  return equal(root.left, root.right)
}

var r = isSymmetric(new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(2, null, new TreeNode(4))));
console.log(r);

/**
 * method2:层序迭代法，比较每一层的val是否对称，没有子节点的val值用undefined代替
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

console.log(r2);
