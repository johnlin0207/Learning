/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 对于此题： 递归的点怎么找？从拿到题的第一时间开始，思路如下：

 1.怎么判断一棵树是不是对称二叉树？ 答案：如果所给根节点，为空，那么是对称。如果不为空的话，当他的左子树与右子树对称时，他对称

 2.那么怎么知道左子树与右子树对不对称呢？在这我直接叫为左树和右树 答案：如果左树的左孩子与右树的右孩子对称，左树的右孩子与右树的左孩子对称，那么这个左树和右树就对称。

 仔细读这句话，是不是有点绕？怎么感觉有一个功能A我想实现，但我去实现A的时候又要用到A实现后的功能呢？

 当你思考到这里的时候，递归点已经出现了： 递归点：我在尝试判断左树与右树对称的条件时，发现其跟两树的孩子的对称情况有关系。

 想到这里，你不必有太多疑问，上手去按思路写代码，函数A（左树，右树）功能是返回是否对称

 def 函数A（左树，右树）： 左树节点值等于右树节点值 且 函数A（左树的左子树，右树的右子树），函数A（左树的右子树，右树的左子树）均为真 才返回真
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const def = (leftNode, rightNode) => {
    // 都等于null
    if(leftNode === null && rightNode === null){
      return true
    }
    // 只有一个等于null
    if(leftNode === null || rightNode === null){
      return false
    }
    // 都不等于null，直接判断val数值
    if(leftNode.val !== rightNode.val){
      return false
    }
    return (def(leftNode.left, rightNode.right) && (def(leftNode.right, rightNode.left)))
  };
  function compare(root){
    if(!root){ return false }
    return def(root.left, root.right);
  }
  return compare(root)
};

var r = isSymmetric(
  {
    val: 1,
    left: {
      val: 2,
      left: {val: 3, left: null, right: null},
      right: {val: 4, left: null, right: null}
    },
    right: {
      val: 2,
      left: {val: 4, left: null, right: null},
      right: {val: 3, left: null, right: null}
    },
  });
console.log(r);