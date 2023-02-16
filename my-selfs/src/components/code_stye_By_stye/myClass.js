import React, { Component } from 'react'

export default class MyClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"ismile"
      }
    //   this.setState({name:"sardar"})
    }
    componentDidMount(){
      console.log("component Did Mount")
    }

    componentDidUpdate(){
      console.log("component Did Update")
    }

    shouldComponentUpdate(){
      console.log("should Component Update")
      return true;
    }

  render() {
    // console.log("Render");
    return (
      <div>
        <h2>{this.state.name}</h2>
        <button onClick={()=>this.setState({name:"sardar"})}>update</button>
      </div>
    )
  }
}
