// 定义一系列的算法，把它们一个个封装起来，并使它们可以替换
const multi1 = function(val){
    return val
}

const multi2 = function(val){
    return 2 * val
}

const multi3 = function(val){
    return 3 * val
}

const calculate = function(fn, val){
    return fn(val)
}

const result = calculate(multi3, 3)
console.log(result)