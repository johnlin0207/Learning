let retry = function(fn, timeout, retryTimes){
  let total = retryTimes;
  return new Promise((rs, rj) => {
    let loop = () => {
      fn().then(() => {
        console.log('success')
        rs();
      }).catch(() => {
        console.log('fail')
        if(retryTimes > 0){
          console.log(`第${total - retryTimes + 1}次retry...`)
          setTimeout(() => {
            loop();
          }, timeout)
        } else {
          rj()
        }
        retryTimes --
      })
    }
    if(retryTimes > 0){
      loop()
    } else {
      rj();
    }
  })
}

let fetch = function(){
  return new Promise((rs, rj) => {
    let timer = Math.random();
    console.log('loading...')
    if(timer < .2){
      rs();
    } else {
      rj();
    }
  })
}

retry(fetch, 1000, 5).then(() => {
  console.log('finished')
}).catch(() => {
  console.log('abort')
})