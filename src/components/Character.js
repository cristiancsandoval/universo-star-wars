import React, { useEffect, useState } from 'react'

const Character = ({endpoint}) => {

    const [data, setData] = useState({});

    const getData = async() =>{
        
        const api = await fetch(endpoint);
        const results = await api.json();
        setData(results);

    }

    useEffect(()=>{

        getData();

    }, [])

  return (
    <div>
        <h5>{data.name}</h5>
    </div>
  )
}

export default Character