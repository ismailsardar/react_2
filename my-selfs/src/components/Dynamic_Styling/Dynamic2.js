import React, { useEffect, useState } from 'react'

const Dynamic2 = () => {
    const [name, setName] = useState('');
    const [validInput, setValidInput] = useState(false);

    useEffect(() => {
        if (name.length < 4) {
            setValidInput(false);
        } else {
            setValidInput(true);
        }
    }, [name]);
    

    const handelChange = (e)=>{
        setName(e.target.value);
        
    } 

  return (
    <div>
        <input 
        type="text" 
        value={name}
        onChange={handelChange}
        className={validInput ? "valid" : "inValid"}
        />
    </div>
  )
}

export default Dynamic2