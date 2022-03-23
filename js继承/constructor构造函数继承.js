// 第二种方式是使用借用构造函数的方式，这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。
// 优点：可以像父类传递参数
// 方法都在构造函数中定义，函数无法复用。
// 无法继承父类中原型定义的方法。

function Parent(name) {
  this.name = name;
}

Parent.prototype.say = function () {};

function Child(name) {
  Parent.call(this, name);
  this.age = "22";
}

var o = new Child("tom");
console.log(o);
