// 工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象，用工厂方法代替new操作的一种模式。

class Creator {
    create(fn, ...args) {
        return new fn(...args)
    }
}

class Animal {
    constructor(name, bark) {
        this.name = name;
        this.bark = bark;
    }
}

var creator = new Creator()

var duck = creator.create(Animal, 'Duck', 'GAGAGA')
console.log(duck.name) // Duck
console.log(duck.bark) // Duck

var chicken = creator.create(Animal, 'Chicken')
console.log(chicken.name) // Chicken