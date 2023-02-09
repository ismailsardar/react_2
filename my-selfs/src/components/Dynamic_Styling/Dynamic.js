import React from 'react'

const Dynamic = () => {
    const error = false;
  return (
    <div>
        <h1 style={{
            color: error ? 'red' : 'purple',
            backgroundColor: error ? 'black' : 'pink'
        }} >Dynamic Styling</h1>
    </div>
  )
}

export default Dynamic