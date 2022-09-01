/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 对层级遍历取最右边的那个数即可
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root, res = []) {
  if(!root){ return res }
  // queue存储每层的节点元素
  const queue = [root];
  while(queue.length){
    // 当前层的数值
    let thisLevel = [];
    const len = queue.length;
    for (let i = 0; i < len ; i++) {
      // 逐个添加本层的节点val
      const node = queue.shift();
      thisLevel.push(node.val);
      // 迭代每个当前层的下层元素
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(thisLevel)
  }
  return res.map((arr) => {
    return arr.pop()
  });
};

var r = rightSideView({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {val: 3, left: {val: 4, left: null, right: null}, right: {val: 5, left: null, right: null}}
});

console.log(r);