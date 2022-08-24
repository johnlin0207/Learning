// 方法1：api大法：[].plat(Infinity)方法可以拍平n层嵌套的数组

// 方法2：递归
const arr = [1,2,[3,4,[5,6]]];
function plain(args, plainArr = []){
  for(let i of args) {
    if(Array.isArray(i)){
      plain(i, plainArr)
    } else {
      plainArr.push(i);
    }
  }
  return plainArr
}

var r = plain(arr);

console.log(r);
