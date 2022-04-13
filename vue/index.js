import h from './snabbdom/h';
import patch from './snabbdom/patch'

const vnode1 = h('ul', {}, [
  h('li', {}, '1'),
  h('li', {}, '2'),
  h('li', {}, '3')
]);

const vnode2 = h('ol', {}, [
  h('li', {}, 'a'),
  h('li', {}, 'b'),
  h('li', {}, 'c')
]);

const container = document.getElementById('container');
patch(container, vnode1)

const btn = document.getElementById('btn');
btn.onclick = function(){
  patch(vnode1, vnode2)
}