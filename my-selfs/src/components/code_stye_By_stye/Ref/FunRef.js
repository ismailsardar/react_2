import React, { useRef } from 'react'

const FunRef = () => {

    const myRef = useRef();

    const handelRef = ()=>{
        console.log(myRef.current.value);
    }

  return (
    <div>
        <h2>FunRef</h2>
        <input type="text" ref={myRef} />
        <button onClick={handelRef} >submit</button>
    </div>
  )
}

export default FunRef