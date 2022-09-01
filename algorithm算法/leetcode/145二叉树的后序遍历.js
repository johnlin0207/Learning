/**
 * https://leetcode.cn/problems/binary-tree-postorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  var arr = [];
  var loop = (root) => {
    if(!root){ return }
    loop(root.left);
    loop(root.right);
    arr.push(root.val);
  };
  loop(root);
  return arr
};

var r = postorderTraversal({val: 1, left: null, right: {val: 2, left: {val: 3, left: null, right: null}, right: null}});
// console.log(r);

// 迭代法遍历，修改先序遍历的左右顺序，再reverse最终的数组结果
// 入栈顺序改为中左右，出栈为中右左，反转为左右中
var inorderTraversal2 = function (root, res = []) {
  if(!root){ return res }
  let cur = root;
  let stack = [cur];
  while(stack.length){
    let cur = stack.pop();
    res.push(cur.val);
    cur.left && stack.push(cur.left);
    cur.right && stack.push(cur.right);
  }
  return res.reverse();
};
const result2 = inorderTraversal2({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {val: 3, left: {val: 4, left: null, right: null}, right: {val: 5, left: null, right: null}}
});
console.log(result2);