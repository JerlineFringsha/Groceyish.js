import axios from 'axios';
import { useState, useEffect } from 'react';

const Datafetching = () => {
    const[data, setData]=useState([]);
    const[loading, setLoading]=useState(true);

useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        setData(res.data)
        setLoading(false)
    })
    .catch((err)=>{
        console.log(err)
        setLoading(false)

    })
},[]);

if(loading) return <p>Loading...</p>

  return (
    <>
    <h1>AXIOS</h1>
    {data.map((item)=>{
        <li key={item.id}>
            {item.title}
        </li>
    })}
      
    </>
  )
}

export default Datafetching
