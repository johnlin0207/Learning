// 定义：当持续触发事件时，保证隔间时间触发一次事件。

function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      return;
    }
    timer = setInterval(() => {
      fn.apply(this, args);
      clearInterval(timer);
      timer = null;
    }, delay);
  };
}

function log(a, b) {
  console.log(a, b);
}

var t = throttle(log, 1000);
t(2, 3);
