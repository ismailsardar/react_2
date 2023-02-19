import React, { useState } from 'react'

const HocFunction = () => {
  return (
    <div>
        <h1>HocFunction</h1>
        <Hoc comp={Counter} />
        <Hoc1 comp={Counter} />
    </div>
  )
}

const Hoc = (props)=>{
    return(
     <div style={{backgroundColor:"green",color:"white",width:"200px"}}>
       <h3>HOC</h3>
       <props.comp />
     </div>
    )
}

const Hoc1 = (props)=>{
    return(
     <div style={{backgroundColor:"purple",color:"white",width:"200px"}}>
       <h3>HOC</h3>
       <props.comp />
     </div>
    )
}

const Counter = ()=>{
    const [count, setCount] = useState(0);

    return(
        <>
          <h2>Count : {count}</h2>
          <button onClick={()=>setCount(count+1)} >count</button>
        </>
    )
}

export default HocFunction