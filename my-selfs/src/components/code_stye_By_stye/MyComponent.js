import React from 'react'
import CondRen from './CondRen'
import From from './From'
import Function from './Function'
import MyClass from './myClass'
import Props from './Props'
import PureComponents from './pureComponent/PureComponent'

const MyComponent = () => {
  return (
    <div>
        <h2>Code Step By Step</h2>
        <Function />
        <Props name={"Ismile"} />
        <From />
        <CondRen />
        <MyClass />
        <PureComponents />
    </div>
  )
}

export default MyComponent