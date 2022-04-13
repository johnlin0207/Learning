import h from './snabbdom/h';
import patch from './snabbdom/patch'

const newNode = h('ul', {}, [
  h('li', {}, '1'),
  h('li', {}, '2'),
  h('li', {}, '3')
]);
console.log(newNode)
const container = document.getElementById('container');
patch(container, newNode)