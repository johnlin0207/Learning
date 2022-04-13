// vdom {tagName, props{}, text|children}
import vNode from './vnode'
export default function(tagName, data, child){
  if(tagName && data){
    let text = '';
    let children = child;
    if(!child){
      children = []
    } else if(Object.prototype.toString.call(child) === '[object Object]'){
      throw Error('child must not be an object')
    }
    if(typeof child === 'string'){
      text = child;
      children = [];
    }
    return vNode(tagName, data.props || {}, children, text, null);
  } else {
    throw Error('参数缺失')
  }
}