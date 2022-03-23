// console.log("start");
// setTimeout(() => {
//   console.log("timer1");
//   Promise.resolve().then(function () {
//     console.log("promise1");
//   });
// }, 0);
// setTimeout(() => {
//   console.log("timer2");
//   Promise.resolve().then(function () {
//     console.log("promise2");
//   });
// }, 0);
// Promise.resolve().then(function () {
//   console.log("promise3");
// });
// console.log("end");

new Promise((resolve, reject) => {
  console.log(1);
  resolve();
})
  .then(() => {
    console.log(2);
    new Promise((resolve, reject) => {
      console.log(3);
      setTimeout(() => {
        reject();
      }, 3 * 1000);
      resolve();
    })
      .then(() => {
        console.log(4);
        new Promise((resolve, reject) => {
          console.log(5);
          resolve();
        })
          .then(() => {
            console.log(7);
          })
          .then(() => {
            console.log(9);
          });
      })
      .then(() => {
        console.log(8);
      });
  })
  .then(() => {
    console.log(6);
  });
