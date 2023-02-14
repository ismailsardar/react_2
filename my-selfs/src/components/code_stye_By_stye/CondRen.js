import React, { useState } from 'react'

const CondRen = () => {
    // const [login, setLogin] = useState(false);
    const login = false;
  return (
    <div>
        {login ? <h1>I am true</h1>:<h1>I am False</h1>}
    </div>
  )
}

export default CondRen