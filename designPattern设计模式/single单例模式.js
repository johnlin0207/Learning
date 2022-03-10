// 一个类仅有一个实例，并提供一个全局访问它的访问点

// 利用闭包存储初始化后的实例
var createSingle = (function(){
    let instance = null;
    return function(fn, ...args){
        if(!instance){
            instance = new fn(...args)
        }
        return instance
    }
})()

// 处理只出一次弹窗
class Popup {
    constructor(...props){
        console.log('将会出弹窗')
        console.log(...props)
    }
}
createSingle(Popup, '出了');
createSingle(Popup, '再次调用出弹窗'); //不会再次出弹窗
