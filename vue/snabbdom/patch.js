import vNode from './vnode';
import createElement from './createElement';

export default function(oldVNode, newVNode){
  // 判断老节点是虚拟节点还是真实的dom节点
  // 如果是dom节点，将其转换为虚拟节点
  if(!oldVNode.sel){
    oldVNode = vNode(oldVNode.tagName.toLowerCase(), {}, [], undefined, oldVNode);
  }
  // console.log(oldVNode)
  // 判断oldvnode和newvnode是否为同一个节点
  if(oldVNode.sel === newVNode.sel && oldVNode.tagName === newVNode.tagName){
    // 精细化比较
    console.log('是同一个节点')
  } else {
    // 暴力删除旧的，插入新的
    // console.log('暴力删除旧的，插入新的')
    const newNode = createElement(newVNode);
    oldVNode.elm.parentNode.insertBefore(newNode, oldVNode.elm);
    // console.log(oldVNode.elm.parentNode, oldVNode.elm)
    oldVNode.elm.parentNode.removeChild(oldVNode.elm)
  }
}