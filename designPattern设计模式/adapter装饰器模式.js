// 适配器模式主要解决两个接口之间不匹配的问题，不会改变原有的接口，而是由一个对象对另一个对象的包装
class GooleMap {
    show() {
        console.log('渲染谷歌地图')
    }
}

class BaiduMap {
    display() {
        console.log('渲染百度地图')
    }
}

class BaiduMapAdapter {
    show(){
        new BaiduMap().display();
    }
}

function render(ApiClass){
    new ApiClass().show();
}

render(GooleMap)
render(BaiduMapAdapter)