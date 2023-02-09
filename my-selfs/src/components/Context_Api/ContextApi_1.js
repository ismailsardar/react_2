import React, { useState } from 'react'
import ContextApi2 from './ContextApi_2'
import { MyContext } from './myContext'

const ContextApi_1 = () => {

    const [user, setUser] = useState({name:"Ismile",age:23});
    const [text, setText] = useState("I am another Context Api");


  return (
    <MyContext.Provider  value={{user,text}}>
        <p>Number 1</p>
        <ContextApi2 />
    </MyContext.Provider>
  )
}

export default ContextApi_1