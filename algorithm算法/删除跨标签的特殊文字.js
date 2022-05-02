function handle(htmlStr, str){
  // 去除标签
  var regExp = /<\/?\w+>/g;
  var noTagStr = htmlStr.replace(regExp, '');
  console.log(noTagStr)
  var a = noTagStr.match(new RegExp(str, 'g'))
  console.log(a)

}

var htmlStr = '<div>领导是s<span>b</span>sb</div>'
var str = 'sb'

var r = handle(htmlStr, str);