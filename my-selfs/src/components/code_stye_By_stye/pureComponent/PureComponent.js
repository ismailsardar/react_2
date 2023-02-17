import React, { PureComponent } from 'react'
import MyPure from './MyPure'

class PureComponents extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
  render() {
    console.log("render")
    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        <button onClick={()=> this.setState({count: this.state.count+1})}>Increment</button>
        <MyPure />
      </div>
    )
  }
}
export default PureComponents;