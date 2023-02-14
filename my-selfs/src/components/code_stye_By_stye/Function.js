import React from 'react'

const Function = () => {
  
  function innerFun() {
    return(<div>
      <p>inner Function</p>
    </div>)
  }

  return (
    <div>
      <h3>Function Component</h3>
      {/* <innerFun /> */}
      {innerFun()}
      <Gard />
    </div>
  )
}

const Gard = () => {
  return(
    <>
      <p>This is inner Component</p>
    </>
  )
}

export default Function