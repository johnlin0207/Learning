/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param root
 * @param res
 * @returns {Array}
 */
var levelOrder = function (root, res = []) {
  if(!root){ return res}
  let queue = [root];
  while(queue.length) {
    let thisLevelVal = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      thisLevelVal.push(node.val);
      node.children && node.children.forEach(j => {
        queue.push(j)
      })
    }
    res.push(thisLevelVal)
  }
  return res;
};

var r = levelOrder({
  val: 1,
  children: [
    {val: 2, children: null},
    {
      val: 3, children:
        [
          {val: 4, children: null}
        ]
    },
    {val: 5, children: null},
  ]
});

console.log(r);