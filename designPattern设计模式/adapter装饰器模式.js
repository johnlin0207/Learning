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