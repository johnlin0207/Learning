// 对行为请求和行为实现做解耦，实现两者的松耦合，叫做命令模式

var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')


class Executor {
    setCommand(btn, command){
        btn.onclick = function(){
            command.execute();
        }
    }
}

// 定义方法--命令接受
class Menu {
    refresh (){
        console.log('refresh');
    }

    addSubMenu(){
        console.log('addbtn')
    }
}

class RefreshMenu {
    constructor(props){
        this.receiver = props; 
    }

    execute(){
        this.receiver.refresh();
    }
}

class AddSubMenu {
    constructor(props){
        this.receiver = props; 
    }

    execute(){
        this.receiver.addSubMenu();
    }
}


var menu = new Menu()
var executor = new Executor()

var refreshMenu = new RefreshMenu(menu)
// 给按钮1添加刷新功能
executor.setCommand(btn1, refreshMenu)

var addSubMenu = new AddSubMenu(menu)
// 给按钮2添加增加子菜单功能
executor.setCommand(btn2, addSubMenu)