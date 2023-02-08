import React from 'react'
import useCustom from './useCustom'

const DataFatch = () => {
    //This is custom Hook
    const {data, isLoding, error} = useCustom('https://jsonplaceholder.typicode.com/todos') 

    const lodingMessage = <h2>Lodding....</h2>
    const errorMessage = <h2>{error}</h2>
    
  return (
    <div>
        <h2>Data Fatch</h2>
        
        {error && errorMessage}
        {isLoding && lodingMessage}
        {
            data && data.map((item)=> <article key={item.id} className='card'>
                <h2>ID : {item.id}</h2>
                <h3>Title : {item.title}</h3>
            </article> )
        }
        
    </div>
  )
}

export default DataFatch