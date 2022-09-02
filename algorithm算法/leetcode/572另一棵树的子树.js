function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  if(!root && !subRoot){ return true }
  let leftRoot = null;
  // 先遍历root树，找到与q树val相同的节点开始对比
  const loop = (node) => {
    if(!node){ return }
    if(node.val === subRoot.val){
      leftRoot = node
    }
    loop(node.left);
    loop(node.right);
  };
  loop(root);

  const queue = [leftRoot, subRoot];

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

var r = isSubtree(new TreeNode(0, new TreeNode(1, new TreeNode(2))), new TreeNode(0, new TreeNode(1)));
console.log(r);