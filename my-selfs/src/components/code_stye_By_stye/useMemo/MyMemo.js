import React, { useMemo, useState } from 'react'

const MyMemo = () => {

    const[count, setCount] = useState(0);
    const[item, setItem] = useState(5);

    let updateMemo = useMemo(()=>{
        console.log("update item");
        return item*5;
    },[item]);

  return (
    <div>
        <h2>Uer Memo Hook</h2>
        <h3>count : {count}</h3>
        <h4>item : {item}</h4>
        <h5>{updateMemo}</h5>
        <button onClick={()=>setCount(count+1)} >count</button>
        <button onClick={()=>setItem(item+5)} >item</button>
    </div>
  )
}

export default MyMemo