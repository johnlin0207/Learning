/**
 * https://leetcode.cn/problems/binary-tree-paths/
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
 * 递归，回溯
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(!root){ return [] }

  const loop = (node, p, path) => {
    if(!node){ return }
    if(node.left === null && node.right === null){
      path.push(p.join('->'));
    }
    if(node.left){
      p.push(node.left.val);
      loop(node.left, p, path);
      p.pop();
    }
    if(node.right){
      p.push(node.right.val);
      loop(node.right, p, path);
      p.pop();
    }
    return path
  };
  return loop(root, [root.val], []);
};

var r = binaryTreePaths(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(7, null, new TreeNode(8)))));

// console.log(r);


/**
 * 迭代法
 * @param root
 */
var binaryTreePaths2 = function(root) {
  if(!root){ return [] }

  let stack = [root], paths = [''], res = [];

  while (stack.length) {
    const node = stack.pop();
    let path = paths.pop();
    if(node.left === null && node.right === null){
      path += node.val;
      res.push(path);
    }
    path += node.val + '->';
    if(node.right){
      paths.push(path);
      stack.push(node.right)
    }
    if(node.left){
      paths.push(path);
      stack.push(node.left)
    }
  }
  return res;
};

var r2 = binaryTreePaths2(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(7, null, new TreeNode(8)))));

console.log(r2);
