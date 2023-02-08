import { useEffect, useState } from 'react'
import axios from 'axios'

const useCustom = (url) => {
    const [data, setData] = useState([]);
    const [isLoding, setLoding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      axios.get(url)
           .then((res)=>{
               setData(res.data);
               setLoding(false);
               setError(null);
           })
           .catch((err)=>{
               setError(err.message);
               setLoding(false);
           }); 
      
    }, [url]);
  return {data,isLoding,error}
}

export default useCustom