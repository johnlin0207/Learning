class Creater {
    constructor (list){
        this.list = list;
    }

    createIterator(){
        return new Iterator(this.list)
    }
}

class Iterator {
    constructor(list){
        this.index = 0;
        this.list = list;
    }

    next(){
        const v = this.list[this.index];
        this.index ++;
        return v;
    }
    isDone(){
        return this.index >= this.list.length;
    }
}


var arr = [1, 2, 3, 4]

var creater = new Creater(arr)
var iterator = creater.createIterator()
// console.log(iterator.list)  // [1, 2, 3, 4]
// iterator.next()

// iterator.next()

while (!iterator.isDone()) {
    console.log(iterator.next())
}
