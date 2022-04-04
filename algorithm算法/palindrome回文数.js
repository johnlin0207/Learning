var isPalindrome = function(x) {
  if(x < 0)
  return false;
  cur = 0;
  num = x;
  while(num != 0) {
    cur = cur * 10 + num % 10;
    num /= 10;
  }
  return cur == x;
}

var a = isPalindrome(121)
console.log(a)