import React, { PureComponent } from 'react'

class MyPure extends PureComponent {
  render() {
    console.log("Child Re-randers")
    return (
      <div>MyPure</div>
    )
  }
}

export default MyPure