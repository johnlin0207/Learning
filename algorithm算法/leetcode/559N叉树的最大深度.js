function Node(val, children) {
  this.val = val || null;
  this.children = children || null;
}

/**
 * 迭代法
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  const queue = [root];
  let depth = 0;
  // 同一个while循环同一层
  while (queue.length) {
    depth++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.children) {
        for (let j of node.children) {
          queue.push(j);
        }
      }
    }
  }
  return depth
};

var r = maxDepth(new Node(1, [new Node(2, [new Node(5)]), new Node(3), new Node(4)]));
// console.log(r);

/**
 * 递归法
 * @param root
 * @returns {number}
 */
var maxDepth2 = function (root) {
  if (!root) {
    return 0
  }
  let maxDepth = 0;
  if(root.children){
    for(let i of root.children){
      maxDepth = Math.max(maxDepth, maxDepth2(i));
    }
  }
  return maxDepth + 1;
};

var r2 = maxDepth2(new Node(1, [new Node(2, [new Node(5)]), new Node(3), new Node(4)]));
console.log(r2);