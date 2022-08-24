//使用Map函数
function deepCopy(obj, map = new Map()) {
  if (typeof obj !== 'object') {
    return obj
  }
  var newObj = Array.isArray(obj) ? [] : {};

  // map记录所有不重名的属性用于处理循环引用
  if (map.get(obj)) {
    return map.get(obj)
  }
  map.set(obj, newObj);

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const item = obj[key];
      if (typeof item === 'object') {
        newObj[key] = deepCopy(obj[key], map)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  return newObj;
}

const obj1 = {
  x: 1,
  y: 2,
  d: {
    a: 3,
    b: 4
  }
}
obj1.child = obj1;
const obj2 = deepCopy(obj1);
obj1.z = obj1;

console.log(obj2)

//node 输出{ x: 1, y: 2, d: { a: 3, b: 4 }, z: [Circular] }
//控制台输出{x: 1, y: 2, d: {…}, z: {…}}
