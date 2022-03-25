import React, { useEffect, useState } from 'react'
import Modal from './Modal';

const Character = ({endpoint}) => {

    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

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
        <h5 onClick={()=>setShowModal(true)}> {data.name} </h5>
        <Modal data={data} state={[showModal, setShowModal]}/>
    </div>
  )
}

export default Character