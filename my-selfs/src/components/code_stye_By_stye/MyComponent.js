import React from 'react'
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
    </div>
  )
}

export default MyComponent