import React from 'react'
import { useNavigate } from 'react-router-dom'

const Countact = () => {
  const navIgate = useNavigate();
  return (
    <div>
        <h1>Contact pages</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa tempore laudantium cum temporibus quaerat. Quae, doloribus sequi quasi odit quia eos itaque sed a corrupti. Placeat voluptas rem quisquam tempora?</p>

        <button onClick={()=>{
          navIgate('/')
        }}>Go To Home</button>
    </div>
  )
}

export default Countact