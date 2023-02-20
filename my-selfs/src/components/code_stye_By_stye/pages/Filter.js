import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    const [searchDatas, setSearchDatas] = useSearchParams();
    const [searchDatas1, setSearchDatas1] = useSearchParams();

    // console.warn(searchDatas.get("age"))
    // console.warn(searchDatas1.get("name"))

  return (
    <div>
        <h1>Filter</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate delectus magni officiis accusamus? Minima voluptatum consequuntur facilis a earum quo non, voluptas sunt illo omnis totam iste quos nulla illum quibusdam perspiciatis in, reprehenderit maxime quisquam consectetur! Laboriosam officiis architecto, minus dicta illum ad, aspernatur totam fugiat veniam quas impedit.</p>
        <br /><br />
        <button onClick={()=>setSearchDatas({name:"ismile"})} >setName</button>
        <button onClick={()=>setSearchDatas1({age:24})} >setAge</button>
    </div>
  )
}

export default Filter