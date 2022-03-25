import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Films from '../components/Films'
import Header from '../components/Header'
import Starships from '../components/Starships'
import Vehicles from '../components/Vehicles'

const AppRouter = () => {

    const [data, setData] = useState([]);
    const endpoint = 'https://swapi.dev/api/films/';
    const [loading, setLoading] = useState(true);

    const getData = async() =>{
        
        const api = await fetch(endpoint);
        const results = (await api.json()).results;
        setData(results);
        setLoading(false);

    }

    useEffect(()=>{

        getData();

    }, [])

    if(loading){
        return(
            <div>
                <h3>Cargando información...</h3>
            </div>
        )
    }

  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='*' element={<Films data={data} />} />
            <Route path='/starships' element={<Starships data={data} />} />
            <Route path='/vehicles' element={<Vehicles data={data} />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter