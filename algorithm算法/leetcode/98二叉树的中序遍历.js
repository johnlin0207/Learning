var inorderTraversal = function(root) {
  const res = [];
  const inorder = (root) => {
    if(!root){
      return []
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return res;
};

const result = inorderTraversal({val: 1, left: null, right: {val: 2, left: {val: 3, left: null, right: null}, right: null}});
console.log(result)