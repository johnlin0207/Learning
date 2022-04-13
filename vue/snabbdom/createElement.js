export default function createElement(vnode) {
  const node = document.createElement(vnode.sel);
  vnode.elm = node;
  // 只有text没有children
  if (vnode.text !== "" && vnode.children.length === 0) {
    node.innerText = vnode.text;
  } else if (vnode.children.length > 0) {
    for (const childNode of vnode.children) {
      const childVnode = createElement(childNode);
      vnode.elm.appendChild(childVnode);
      childNode.elm = childVnode
    }
  } else {
    // text为空
  }
  return vnode.elm;
}
