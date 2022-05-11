// 写一个类MyQueue，包含add方法，给后台发送请求（调用fetch即可），限制同一时刻最多3个请求。（不考虑发送失败的情况）
// 如下 调用举例

function fetch(data){
  const delay = Math.random() * 6000
  return new Promise((rs, rj) => {
    setTimeout(() => {
      rs(data);
    }, delay)
  })
}

class MyQueue {
  constructor(limit){
    this.limit = limit || 3;
    this.nowTaskNumInQueue = 1;
    this.tempData = null;
    this.taskQueue = [];
    this.delayExec = this.throttle(this.exec);
  }

  add(data){
    this.tempData = data;
    return this
  }

  then(cb){
    this.taskQueue.push({data: this.tempData, cb});
    this.tempData = null;
    this.delayExec();
  }

  throttle(fn){
    let timer = null;
    return function(...data){
      if(!timer){
        timer = setTimeout(() => {
          fn.apply(this, data);
          clearTimeout(timer);
        }, 0)
      }
    }
  }

  exec(){
    if(this.nowTaskNumInQueue <= this.limit){
      for(let i = 0; i <= this.limit - this.nowTaskNumInQueue; i++) {
        if(this.taskQueue.length > 0){
          const thisTask = this.taskQueue.shift();
          this.nowTaskNumInQueue ++;
          fetch(thisTask.data).then((data) => {
              thisTask.cb(data);
              this.nowTaskNumInQueue--;
              this.exec();
          })
        }
      }
    }
  }
}

let myQueue = new MyQueue(3); 
for (let i = 0; i < 10; i++) { 
    myQueue.add(`消息${i + 1}`).then((data) => { 
        console.log(`${data}发送成功`)
    })
}