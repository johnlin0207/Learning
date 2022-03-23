// 原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同
// 缺点：返回新对象的引用类型值属性是共享的

function createPrototype(obj) {
  var F = function () {};
  F.prototype = obj;
  return new F();
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
