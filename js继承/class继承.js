class Parent{

  constructor(props){
    console.log('>>>>>>>>>>>>>>>')
    console.log(props)

      this.props = props;
  }

  p(){
    console.log(this.props.className)
  }
}

class Child extends Parent {

  constructor(props){
      super(props);
      this.state.age = 23
  }

  say(){
      console.log(this.props)
      // super.p()
  }
}

var c = new Parent({className: 'red'})
c.p()