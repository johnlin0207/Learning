// js中最常见的继承模式
// 组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。
// 优点：弥补了原型链继承的重写属性问题和构造函数集成无法继承父类原型链属性的问题
// 缺点：会调用两次父类的构造函数，并且在子类中最终会包含父类对象的全部实例属性，所以第二次调用时会重写这些属性，并且覆盖原型中的属性
function Parent(name) {
  this.name = name;
  this.color = ["red", "blue"];
}

Parent.prototype.say = function () {
  console.log(this.name);
};

function Child(name) {
  this.age = 123;
  Parent.call(this, name);
}

Child.prototype = new Parent();

var A = new Child("aname");
A.color.push("green");
console.log(A); // {name: 'aname', color: ['red', 'blue', 'green'], __proto__}

var B = new Child("bname");
B.color.push("cyan");
console.log(B); // {name: 'bname', color: ['red', 'blue', 'cyan'], __proto__}
