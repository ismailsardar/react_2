import React, { useState } from 'react';

const Toggle = () => {
    const [toggle, setToggle] = useState(true);
  return (
    <div style={{backgroundColor:"purple",color:"white" ,margin:"1rem",padding:"1rem"}}>
       {
        toggle && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum velit nesciunt porro, vero temporibus veritatis laboriosam, corporis nemo non eligendi eveniet rem illo, repudiandae quas? Esse consequatur inventore vel atque.</p> 
       }
       <div style={{textAlign: "center"}}>
       <button onClick={()=> {setToggle(!toggle)}}>
        {toggle ? "Hide": "Show"}
       </button>
       {/* <button onClick={()=> {setToggle(true)}}>show</button>
       <button onClick={()=> {setToggle(false)}}>Heid</button> */}
       </div>
    </div>
  )
}

export default Toggle