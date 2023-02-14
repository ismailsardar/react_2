import React, { useState } from 'react'

const From = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [agree, setAgree] = useState(false);

    const handelSubmit = (e)=>{
        e.preventDefault();
        let myData = {
            name,
            subject,
            agree
        };
        console.log(myData);
    }


  return (
    <>
        <form onSubmit={handelSubmit} >
            <input type="text" placeholder='Full name' value={name} onChange={(e)=>setName(e.target.value)} /> <br /> <br />
            <label htmlFor="subject">Subject : </label>
            <select value={subject} onChange={(e)=>setSubject(e.target.value)} >
                <option value="css" >CSS</option>
                <option value="eee">EEE</option>
                <option value="bsc">BSC</option>
            </select> <br /> <br />
            <input type="checkbox" value={agree} onChange={(e)=>setAgree(e.target.checked)} /> <span>I Accept</span> <br /><br />
            <button type="submit">submit</button>
        </form>
    </>
  )
}

export default From