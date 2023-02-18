import React, { Component, createRef } from 'react'

class ClassRef extends Component {

    constructor(props) {
      super(props)
    
      this.myRef = createRef();
      this.myRef2 = createRef();
    }

    /**
     * if you use ref in class component
     * import createRef from react
     * make instant this.name = createRef()
     * we can us Ref multiple element one component
     * But one element one Ref
     */

    givItem(){
         console.log(this.myRef.current.value);
         console.log(this.myRef2.current.value);
    }

  render() {
    return (
      <div>
        <h1>ClassRef</h1>
        <input type="text" ref={this.myRef} />
        <input type="text" ref={this.myRef2} />
        <button onClick={()=>this.givItem()}>submit</button>
      </div>
    )
  }
}
export default  ClassRef;