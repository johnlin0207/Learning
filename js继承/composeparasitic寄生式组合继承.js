// 组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性
// 优点：避免了在Child.prototype上面创建不必要、多余的属性

function inheritPrototype(Parent, Child) {
  // 创建一个原型prototype，用于关联Parent和Child
  var prototype = Object.create(Parent.prototype);
  prototype.constructor = Child;
  Child.prototype = prototype;
}

function Parent(name) {
  this.name = name;
  this.color = ["red", "black"];
}

Parent.prototype.sayName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
inheritPrototype(Child, Parent);

Child.prototype.sayAge = function () {
  console.log(this.age);
};

var instanceA = new Child("jack", 18);
instanceA.color.push("pink");
console.log(instanceA); // jack
// console.log(instanceA.color); // [ 'red', 'black', 'pink' ]

var instanceB = new Child("rose", 20);
console.log(instanceB); // [ 'red', 'black' ]
// console.log(instanceB.name); // rose
