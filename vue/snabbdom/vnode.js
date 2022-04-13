export default function(sel, data, children, text, elm){
  return {
    sel,
    data,
    children: children || [],
    text: text || '',
    elm
  }
}