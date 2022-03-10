class Creator {
    create(...args) {
        return new Animal(...args)
    }
}

class Animal {
    constructor(name, bark) {
        this.name = name;
        this.bark = bark;
    }
}

var creator = new Creator()

var duck = creator.create('Duck', 'GAGAGA')
console.log(duck.name) // Duck
console.log(duck.bark) // Duck

var chicken = creator.create('Chicken')
console.log(chicken.name) // Chicken