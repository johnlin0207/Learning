let find = function(root){
  let res = [];
  let loop = function(root){
    if(!root){
      return
    }
    loop(root.left);
    res.push(root.val);
    loop(root.right)
  };
  loop(root);
  return res;
};

const data = {val: 2, left: null, right: {val: 3, left: {val: 1, right: null}, right: null}}
let result = find(data);
console.log(result)