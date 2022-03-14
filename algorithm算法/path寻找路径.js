const resData = [
  {
    code: "110000",
    name: "北京市",
    child: [
      {
        code: "110100",
        name: "北京城区",
        child: [
          { code: "110106", name: "丰台区", child: null },
          { code: "110107", name: "石景山区", child: null },
          { code: "110108", name: "海淀区", child: null },
          { code: "110109", name: "门头沟区", child: null },
          { code: "110111", name: "房山区", child: null },
          { code: "110112", name: "通州区", child: null },
          { code: "110113", name: "顺义区", child: null },
          { code: "110114", name: "昌平区", child: null },
          { code: "110115", name: "大兴区", child: null },
          { code: "110116", name: "怀柔区", child: null },
          { code: "110117", name: "平谷区", child: null },
        ],
      },
      {
        code: "110200",
        name: "北京城区",
        child: [
          { code: "110106", name: "丰台区", child: null },
          { code: "110107", name: "石景山区", child: null },
          { code: "110108", name: "海淀区", child: null },
          { code: "110109", name: "门头沟区", child: null },
          { code: "110111", name: "房山区", child: null },
          { code: "110112", name: "通州区", child: null },
          { code: "110113", name: "顺义区", child: null },
          { code: "110114", name: "昌平区", child: null },
          { code: "110115", name: "大兴区", child: null },
          { code: "110116", name: "怀柔区", child: null },
          { code: "110117", name: "平谷区", child: null },
        ],
      },
    ],
  },
];

var result = [];
var name = [];
function findItem(arr, targetId, parent){
  if(parent){
    result.push(parent.code);
    name.push(parent.name);
  }
  for (const item of arr) {
    if(item.code === targetId){
      return item.code
    } else if(item.child && item.child.length > 0){
      var thisRoundResult = findItem(item.child, targetId, item);
      // 返回有效值说明找到了，另外result长度不为零说明找到了，只有当result为[]说明没找到才继续pop
      if(!thisRoundResult && result.length === 0){
        result.pop();
      }
      if(thisRoundResult){
        break;
      }
    }
  }
}

findItem(resData, '110117')
console.log(result)
console.log(name)





// const defaults = {
//   props: {
//     children: "children",
//   },
// };

// const findParent = (data, node, predicate, options = {}) => {
//   let config = Object.assign({}, defaults, options);
//   let parent = undefined;
//   for (let i = 0; i < data.length; i++) {
//     if (parent) return parent;
//     let item = data[i];
//     if (item[config.props.children] && item[config.props.children].length > 0) {
//       let children = item[config.props.children].filter((c) =>
//         predicate(c, node)
//       );
//       if (children.length > 0) {
//         parent = item;
//       }
//       if (parent === undefined) {
//         parent = findParent(
//           item[config.props.children],
//           node,
//           predicate,
//           config
//         );
//       } else {
//         break;
//       }
//     }
//   }
//   return parent;
// };

// const findAllParents = (data, node, predicate, options = {}) => {
//   let config = Object.assign({}, defaults, options);
//   let allParents = [];
//   let parent = findParent(data, node, predicate, config);
//   while (parent !== undefined) {
//     allParents.unshift(parent);
//     parent = findParent(data, parent, predicate, config);
//   }
//   return allParents;
// };

// function getAreaCode(nodeId) {
//   const parents = findAllParents(
//     resData,
//     { code: nodeId },
//     (item, node) => item.code === node.code,
//     {
//       props: {
//         children: "children",
//       },
//     }
//   );
//   let codes = [],
//     names = [];
//   for (let node of parents) {
//     codes.push(node.code);
//     names.push(node.name);
//   }
//   codes.push(nodeId);
//   let data = { codes: codes, names: names };
//   return data;
// }

// const result = getAreaCode("110106");
// console.log(result);
