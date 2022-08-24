var _Promise = function(callback){
  this.status = 'PENDING';
  this.data = null;
  this.successFnQuene = [];
  this.errorFnQuene = [];

  const resolve = (data) => {
    this.data = data;
    this.status = 'FULFILLED';
  }
  const reject = (data) => {
    this.data = data;
    this.status = 'REJECTED'
  }

  callback(resolve, reject);
}

_Promise.prototype.then = function(successFn, errorFn){
  if(this.status === 'PENDING'){
    this.successFnQuene.push(successFn);
    this.errorFnQuene.push(errorFn);
  } else if(this.status === 'FULFILLED'){
    this.successFnQuene.forEach(callback => {
      callback(this.data)
    })
  } else {
    this.errorFnQuene.forEach(callback => {
      callback(this.data)
    })
  }
  return this
}

var p = new Promise((rs, rj) => {
  setTimeout(() => {
    rs(true)
  }, 1000)
})
p.then((data) => {
  console.log('then1')
  console.log(data)
  return 123
}).then((data) => {
  console.log('then2')
  console.log(data)
})