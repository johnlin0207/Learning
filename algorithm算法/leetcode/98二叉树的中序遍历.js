var inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (!root) {
      return []
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
};

const result = inorderTraversal({
  val: 1,
  left: null,
  right: {val: 2, left: {val: 3, left: null, right: null}, right: null}
});
// console.log(result);

// 迭代法遍历
var inorderTraversal2 = function (root, res = []) {
  const stack = [];
  let cur = root;
  if (!root) {
    return res
  }
  while (stack.length || cur) {
    if(cur){
      stack.push(cur);
      cur = cur.left;
    } else {
      const leafNode = stack.pop();
      res.push(leafNode.val);
      cur = leafNode.right;
    }
  }
  return res
};
const result2 = inorderTraversal2({
  val: 1,
  left: {
    val: 2,
    left: {val: 3, left: null, right: null},
  },
  right: {val: 4, left: {val: 5, left: null, right: null}, right: null}
});
console.log(result2);
