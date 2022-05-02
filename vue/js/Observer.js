class Watcher {
  // expr:指代的变量名,例如msg或person.name
  constructor(vm, expr, cb){
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;
    this.oldVal = this.getOldVal(vm.$data, expr);
  }

  // 获取对象的属性值
  getOldVal(data, expr){
    Dep.target = this;
    const val = compileUtil.getVal(data, expr)
    // 防止观察了一个，前一个没删除后一个又观察
    Dep.target = null;
    return val;
  }

  // update是由observer中的数据劫持调用，调用时已经是改变了的值
  update(){
    const newVal = compileUtil.getVal(this.vm.$data, this.expr);
    // 判断值会否变化，再去更新视图
    if(this.oldVal !== newVal){
      this.cb(newVal);
      this.oldVal = newVal;
    }
  }
}

// 依赖收集器，作用是添加watcher和通知watcher更新
// 有几个属性就有几个dep
class Dep {
  constructor(){
    this.subs = [];
  }

  // 添加watcher
  addSub(watcher){
    this.subs.push(watcher)
  }

  // 通知watcher更新
  notify(){
    console.log('通知了观察者', this.subs)
    this.subs.forEach(watcher => watcher.update())
  }
}

class Observer {
  constructor(data){
    this.data = data;
    this.observer(data);
  }
  // 数据劫持，这里是数据绑定的入口
  observer(data){
    // 只能针对对象
    /*
      {
        person: {
          name: '',
          fav: {
            a: ''
          }
        }
      }
    */
    if(data && typeof data === 'object'){
      const keys = Object.keys(data);
      keys.forEach(key => {
        this.defineReactive(data, key, data[key]);
      })
    }
  }

  defineReactive(obj, key, value){
    // 如果当前的被监听的值是一个对象，继续调用observer监听
    this.observer(value);
    const dep = new Dep();
    Object.defineProperty(obj, key, {
      enumerable: true, //是否可枚举
      configurable: false, //是否可以更改编写
      get: () => {
        // 有多少属性创建多少watcher，watcher收集在Dep容器中，用于数据更新时通知更新视图
        // Dep.target是watcher的this，即watcher实例后的对象
        Dep.target && dep.addSub(Dep.target);
        return value
      },
      set: (newVal) => {
        // 如果是更改了data.person的值，则需要对新数据（对象）重新绑定数据劫持
        this.observer(newVal);
        if(newVal !== value){
          value = newVal
        }
        // 更改完数据之后通知Dep更新
        dep.notify();
      }
    })
  }
}