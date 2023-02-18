import React, { useRef } from 'react'
import ForwardChild from './ForwardChild';

const ForwardRef = () => {

    const forwardRef = useRef();
    const handelInput = ()=>{
        console.log(forwardRef.current.value)
    }

  return (
    <div>
        <h1>Forward Ref</h1>
        <ForwardChild ref={forwardRef} />
        <button onClick={handelInput} >input</button>
    </div>
  )
} 

export default ForwardRef 