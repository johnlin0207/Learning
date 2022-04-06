/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  // debugger
  if(!head){
    return head
  }
  // if(head.val === head.next.val){
  //   head.next = head.next.next;
  //   deleteDuplicates(head)
  // } else {
  //   if(head.next.val === null){
  //     head.next = null;
  //   }
  //   deleteDuplicates(head.next)
  // }
  // cur是个游标
  let cur = head;
  while(cur.next){
    if(cur.val === cur.next.val){
      cur.next = cur.next.next;
    } else { 
      cur = cur.next
    }
  }
  return head;
};
const result = deleteDuplicates({val: -1, next: {val: 0, next: {val: 3, next: null}}});
console.log(JSON.stringify(result))