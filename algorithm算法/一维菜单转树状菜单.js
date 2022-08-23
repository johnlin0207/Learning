let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
  {id: 6, name: '部门6', pid: 0}
]

function convert2tree(arr){
  let tree = [];
  let arrObj = {}; 
  let ids = arr.map(item => item.id);
  // 先循环一遍找出顶级，pid对应不上id即顶级
  // 将数组转换成以pid为key的对象
  arr.forEach(item => {
    if(arrObj[item.pid]){
      arrObj[item.pid].push(item)
    } else {
      arrObj[item.pid] = [item];
    }
    if(!ids.includes(item.pid)){
      tree.push(item)
    }
  });
  // 递归出子元素
  iterator(tree, arrObj)
  return tree
}

function iterator(tree, arrObj){
  tree.forEach(item => {
    // 判断否是存在下级节点，若存在push到当前tree的item的children中
    const thisChildArr = arrObj[item.id];
    if(thisChildArr){
      thisChildArr.forEach(_item => {
        item.children ? item.children.push(_item) : item.children = [_item]
      })
    }
    if(item.children){
      iterator(item.children, arrObj)
    } else {
      item.children = null
    }
  })
}

let r = convert2tree(arr)
console.log(r)