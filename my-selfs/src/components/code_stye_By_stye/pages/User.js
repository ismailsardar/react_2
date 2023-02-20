import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    let params = useParams();
    let {name} = params;
    // console.log(name)
  return (
    <div>
        <h3>This is {name} pages</h3>
    </div>
  )
}

export default User