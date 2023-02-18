import React from 'react'
import ForwardRef from './Ref/ForwardRef'
import ClassRef from './Ref/ClassRef'
import CondRen from './CondRen'
import From from './From'
import Function from './Function'
import MyClass from './myClass'
import Props from './Props'
import PureComponents from './pureComponent/PureComponent'
import MyMemo from './useMemo/MyMemo'
import FunRef from './Ref/FunRef'

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
        <MyMemo />
        <ClassRef />
        <FunRef />
        <ForwardRef />
    </div>
  )
}

export default MyComponent