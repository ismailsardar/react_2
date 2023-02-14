import React from 'react'
import CondRen from './CondRen'
import From from './From'
import Function from './Function'
import Props from './Props'

const MyComponent = () => {
  return (
    <div>
        <h2>Code Step By Step</h2>
        <Function />
        <Props name={"Ismile"} />
        <From />
        <CondRen />
    </div>
  )
}

export default MyComponent