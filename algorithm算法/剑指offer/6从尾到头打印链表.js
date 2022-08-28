/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head, res = []) {
  if(!head){
    return [];
  }
  res.unshift(head.val);
  reversePrint(head.next, res);
  return res
};

var r = reversePrint({val: 1, next: {val: 3, next: {val: 2, next: null}}});
console.log(r);