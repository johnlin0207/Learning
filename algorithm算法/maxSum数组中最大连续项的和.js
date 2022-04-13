function sum(arr){
  let sum = 0;
  for (const iterator of arr) {
    sum += iterator;
  }
  return sum;
}

function maxSum(arr){
  var max = 0;
  var prev = 0;
  var arr1 = []
  var arr2 = []
  for (const item of arr) {
    if(item === (prev + 1)){
      if(arr2.length !== 0){
        arr2 = [];
      }
      arr1.push(item)
      console.log(arr1)
    } else if(item === (prev - 1)){
      if(arr1.length == 0){
        arr1 = [];
      }
      arr2.push(item)
      console.log(arr2)
    } else {
      arr1 = [item];
      arr2 = [item];
    }
    prev = item;
    max = Math.max(max, sum(arr1), sum(arr2))
  }
  return max;
}

var sum = maxSum([3,1,2,3,4,5,8,4,9,8]);
console.log(sum)