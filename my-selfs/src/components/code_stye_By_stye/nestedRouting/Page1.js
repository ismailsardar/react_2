import React from 'react'
import { useLocation } from 'react-router-dom'

const Page1 = () => {
  const location = useLocation();
  console.log(location);
  
  return (
    <div>
        <h2>Company</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, recusandae!</p>
    </div>
  )
}

export default Page1