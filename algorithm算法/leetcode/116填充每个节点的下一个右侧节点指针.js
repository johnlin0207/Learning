// Definition for a Node.
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

/**
 * @param root
 * @param res
 * @returns {Array}
 */
var connect = function (root) {
  if(!root){ return null }
  // queue记录遍历到的节点，queue保存的节点可能是不同层的，于是用queue.length长度循环保证循环内的属于同层
  let queue = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      // 拿出栈里第一项作为当前项
      const node = queue.shift();
      // 当前节点node的右侧节点是queue[0]
      if(i < len -1){
        // 更改同层最后一个节点之前的节点们的next指向为下一个节点queue[0]
        node.next = queue[0];
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root
};

var r = connect(new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7))));

console.log(r);