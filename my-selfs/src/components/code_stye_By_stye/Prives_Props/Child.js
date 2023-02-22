import React, { useEffect, useRef } from 'react'

const Child = (props) => {
    let preState = useRef();
    useEffect(()=>{
        preState.current=props.count;
    });
    
    console.log(preState.current)
  return (
    <div>
        <h3>Crunt value {props.count}</h3>
        <h5>Previs : {preState.current}</h5>
    </div>
  )
}

export default Child