function Say(name, age){
  this.name = name;
  this.age = age;
}

Say.prototype.bark = function(){
  console.log(this.name + ' ' + this.age)
};

function newFn(Fn, ...args){
  let o = Object.create(Fn.prototype);
  Fn.apply(o, args);
  return o;
}

const obj = newFn(Say, 'Tom', 22)
obj.bark();