class Event {
    
  constructor(){
      this.events = {};
  }
  
  on(name, fn){
      if(!this.events[name]){
          this.events[name] = [fn];
      } else {
          this.events[name].push(fn)
      }
  }
  
  emit(name, data){
      const eventArr = this.events[name];
      if(Array.isArray(eventArr)){
          eventArr.forEach(fn => {
              fn(data);
          });
      }
  }
  
  once(name, fn){
    const that = this;
      // 只执行一次后不再执行
      function onceFn(...args){
        fn.apply(this, args);
        that.off(name);
      }
      this.on(name, onceFn)
  }
  off(name, fn){
      if(this.events[name]){
          delete this.events[name]
      }
  }
}
var e = new Event();
e.on('a', function(){
  console.log(123)
})
e.on('b', function(){
  console.log(456)
})

e.once('c', function(){
  console.log(789)
})
e.emit('c')
e.emit('c')
// e.emit('a')
// e.off('b')
// e.emit('b')