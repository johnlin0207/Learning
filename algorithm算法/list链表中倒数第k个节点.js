/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var list = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: {val: 6, next: null}}}}}};

var getKthFromEnd = function (head, k) {
  var fast = head;
  var slow = head;
  var delta = k - 1;

  var iterator = function(fastHead, delta){
    // 此时慢指针slow应该开始工作
    if(delta <= 0){
      slow = slow.next;
    }
    if(fastHead.next){
      fast = fastHead.next;
      delta--;
      // 如果fast.next是null，则此时的slow就是所求，反之继续递归
      fast.next && iterator(fast, delta)
    }
    return slow
  };

  return iterator(fast, delta)
};

const target = getKthFromEnd(list, 2);
console.log(target);