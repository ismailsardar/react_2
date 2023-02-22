import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);
    const handelChange = ()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h2>Parent Component</h2>
        <Child count={count} />
        <button onClick={handelChange} >update</button>
    </div>
  )
}

export default Parent