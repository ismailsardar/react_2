import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handelClick = (url)=>{
    navigate(url)
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore inventore ad fugiat corporis quis omnis quam iure laborum at dicta saepe, eum quaerat quos nulla eaque eligendi rerum dolorem illo.</p><br />
      <button onClick={()=>handelClick('/filter')}>Go filter page</button>
      <button onClick={()=>handelClick('/about')}>Go about page</button>
    </div>
  )
}

export default Home