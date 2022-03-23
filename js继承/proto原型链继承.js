// 原型链继承的本质其实就是用父类的构造函数创建的实例重写了子类的原型对象
// 但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数
// 优点：实现了基本的继承，子类共享了父类的方法和属性
// 所以子类生成的实例都会共享父类实例中的属性，一旦在实例A中修改父类实例属性，那么所有实例中的那个属性都会生效
// 没有办法再不影响所有对象实例的情况下，给父类的构造函数传递参数
function Parent() {
  this.name = "name";
  this.color = ["red", "blue"];
}

Parent.prototype.say = function () {};

function Child() {
  this.age = 123;
}

Child.prototype = new Parent();

var A = new Child();
console.log(A);

A.color.push("green");

var B = new Child();
console.log(B);
