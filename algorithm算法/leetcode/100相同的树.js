function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * 递归法
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(p === null && q === null){ return true }
  if(p === null || q === null || p.val !== q.val){ return false }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var r = isSameTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)), new TreeNode(1, new TreeNode(2), new TreeNode(3)));
// console.log(r);


/**
 * 迭代法
 * @param p
 * @param q
 */
var isSameTree2 = function(p, q) {
  if(!p && !q){ return true }
  const queue = [p, q];

  while (queue.length) {
    const rightNode = queue.pop();
    const leftNode = queue.pop();

    if(leftNode === null && rightNode === null){ continue }
    if(leftNode !== null && rightNode === null){
      return true
    }
    if(leftNode === null || rightNode === null || leftNode.val !== rightNode.val){ return false }
    // 不同于对称二叉树的迭代，这里是对比相同位置的节点
    queue.push(leftNode.left);
    queue.push(rightNode.left);
    queue.push(leftNode.right);
    queue.push(rightNode.right);
  }
  return true;
};

var r2 = isSameTree2(new TreeNode(0, new TreeNode(1, new TreeNode(2))), new TreeNode(0, new TreeNode(1)));
console.log(r2);