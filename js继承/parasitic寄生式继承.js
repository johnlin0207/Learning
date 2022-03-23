// 寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用
// 寄生式继承无法做到函数复用
function createPrototypeES5(obj) {
  var o = Object.create(obj);
  o.say = function () {};
  return o;
}

var obj = {
  name: "name",
  age: 22,
  color: [1, 2],
};

var A = createPrototype(obj);
A.color.push("3");
console.log(A);

var B = createPrototype(obj);
console.log(B);
