import React, { useContext } from 'react'
import { MyContext } from './myContext'

const ContextApi_4 = () => {
    const {user,text} = useContext(MyContext);
  return (
    <div>
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
        <h2>{text}</h2>
    </div>
  )
}

export default ContextApi_4