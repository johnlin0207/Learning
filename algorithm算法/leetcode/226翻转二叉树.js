function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}
/**
 * method1: 层序迭代法，依次交换左右子节点
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(!root){ return null }
  const queue = [root];

  while(queue.length){
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      // 交换左右子节点
      const left = node.left;
      node.left = node.right;
      node.right = left;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root
};

var r = invertTree(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(7, null, new TreeNode(8)))));
// console.log(r);

/**
 * method2: 递归法，依次交换左右子节点
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree2 = function(root) {
  if(!root){ return null }
  const left = root.left;
  root.left = root.right;
  root.right = left;
  invertTree2(root.left);
  invertTree2(root.right);
  return root
};

var r2 = invertTree2(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(7, null, new TreeNode(8)))));
console.log(r2);