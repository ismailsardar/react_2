import React from 'react'

const Function = () => {
  return (
    <div>
      <h3>Function Component</h3>
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