// expr:指代的变量名 例如v-text='msg'的expr是msg
// eventName:click
const compileUtil = {
  getVal(data, str){
    const attrArr = str.split('.');
    const val = attrArr.reduce((currentObj, thisAttr) => {
      return currentObj[thisAttr]
    }, data);
    return val;
  },
  setVal(str, vm, value){
    const attrArr = str.split('.');
    const val = attrArr.reduce((data, thisAttr) => {
      data[thisAttr] = value;
    }, vm.$data);
    return val;
  },
  getContentVal(expr, vm){
    return expr.replace(/{{([\w|\.]+)}}/g, (...args) => {
      // args[1]是每次匹配到的{{}}里边的变量名例如person.name，命中几次这里的回调调用几次
      return this.getVal(vm.$data, args[1])
    })
  },
  // 把v-text指令后边的变量替换到节点里边
  text(node, expr, vm) {
    // 是文本模板形式
    let value = '';
    if(expr.match('{{')){
      // {{person.name}} - {{person.age}}
      // 这里的value是多次匹配后最终替换完成时的值，即 小狗 -- 2
      value = expr.replace(/{{([\w|\.]+)}}/g, (...args) => {
        // args[1]是每次匹配到的{{}}里边的变量名例如person.name，命中几次这里的回调调用几次
        new Watcher(vm, args[1], (newVal) => {
          console.log(newVal)
          // 回调以后执行
          this.updater.textUpdater(node, this.getContentVal(expr, vm))
        });
        return this.getVal(vm.$data, args[1])
      })
    } else {
      value = this.getVal(vm.$data, expr);
      new Watcher(vm, expr, (newVal) => {
        // 回调以后执行
        this.updater.textUpdater(node, newVal)
      });
    }
    this.updater.textUpdater(node, value);
  },
  html(node, expr, vm) {
    const value = this.getVal(vm.$data, expr);
    // 初始化时执行
    this.updater.htmlUpdater(node, value);
    // 绑定更新视图的监听
    new Watcher(vm, expr, (newVal) => {
      // 回调以后执行
      this.updater.htmlUpdater(node, newVal)
    });
  },
  model(node, expr, vm) {
    const value = this.getVal(vm.$data, expr);
    this.updater.modelUpdater(node, value);
    // this.on(node, expr, vm, 'input');
    // 数据驱动视图
    new Watcher(vm, expr, (newVal) => {
      // 回调以后执行
      this.updater.modelUpdater(node, newVal)
    });
    // 视图驱动数据
    node.addEventListener('input', e => {
      const value = e.target.value;
      this.setVal(expr, vm, value);
    })
  },
  on(node, expr, vm, eventName) {
    let fn = vm.$options.methods[expr];
    node.addEventListener(eventName, fn.bind(vm), false);

  },
  bind(node, expr, vm, eventName) {
    // todo
  },
  // 更新函数
  updater: {
    textUpdater(node, value){
      node.textContent = value;
    },
    htmlUpdater(node, value){
      node.innerHTML = value;
    },
    modelUpdater(node, value){
      node.value = value;
    }
  }
}

class Compile {
  constructor(el, vm){
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    // 获取文档碎片对象
    const fragment = this.node2Fragment(this.el);
    // 编译模板
    this.compile(fragment);
    // 追加子元素到根元素
    this.el.appendChild(fragment)
  }
  isElementNode(node){
    // 判断是否是原生节点
    return node.nodeType === 1
  }
  // 获取文档碎片对象,原生节点缓存到内存中,减少页面的回流与重绘的性能消耗
  node2Fragment(node){
    const f = document.createDocumentFragment();
    while(node.firstChild){
      f.appendChild(node.firstChild)
    }
    return f;
  }
  compile(fragment){
    // 获取子节点 
    const childNodes = fragment.childNodes;
    [...childNodes].forEach(child => {
      // 判断是否为元素节点或文本节点
      // 如果是元素节点
      if(this.isElementNode(child)){
        // 编译元素节点
        this.compileElement(child)
      } else {
        // 是文本节点
        this.compileText(child)
      }

      // 判断是否含有子元素，继续遍历
      if(child.childNodes && child.childNodes.length){
        this.compile(child)
      }
    })
  }
  // 取各种指令作相应操作
  compileElement(node){
    const attributes = node.attributes;
    [...attributes].forEach(attr => {
      const {name, value} = attr; //name: v-text v-html;value: msg, htmlStr
      const isDirective = name.startsWith('v-');
      // 如果是指令，处理相应的指令
      if(isDirective){
        const [, directive] = name.split('-'); // text html model on:click
        const [dirName, eventName] = directive.split(':'); // dirName: text html model on; eventName: click
        if(dirName){
          // 将数据渲染到页面 数据驱动视图
          compileUtil[dirName](node, value, this.vm, eventName);

          // 删除有指令的标签上的属性
          node.removeAttribute(name);
        }
      } else if(name.match('@')){
        // 针对@绑定事件的处理
        const [, eventName] = name.split('@');
        compileUtil['on'](node, value, this.vm, eventName);
      }
    })
  }

  // 编译文本 {{}}
  compileText(node){
    // 只匹配有{{}}的文本节点
    // console.log(node)
    const match = node.textContent.match(/{{.+}}/);
    if(match){
      compileUtil['text'](node, node.textContent, this.vm)
    }
  }
}

class MVue {
  constructor(options){
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options;
    if(this.$el && typeof this.$el === 'string'){
      // 1,实现一个数据观察者
      new Observer(this.$data);
      // 2,实现一个指令解析器
      new Compile(this.$el, this);
    }
  }
}