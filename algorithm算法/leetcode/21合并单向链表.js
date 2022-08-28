// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if(list1 === null){
    return list2
  } else if(list2 === null){
    return list1
  } else if(list1.val > list2.val){
    list2.next = mergeTwoLists(list1, list2.next);
    return list2
  } else {
    list1.next = mergeTwoLists(list2, list1.next);
    return list1
  }
};

let l1 = {val: 2, next: {val: 5, next: null}};
let l2 = {val: 1, next: {val: 3, next: null}};
let result = mergeTwoLists(l1, l2)
console.log(result)