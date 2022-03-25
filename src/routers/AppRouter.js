import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Films from '../components/Films'
import Header from '../components/Header'
import Starships from '../components/Starships'
import Vehicles from '../components/Vehicles'

const AppRouter = () => {

    const [data, setData] = useState([]);
    const endpoint = 'https://swapi.dev/api/films/';
    const [loading, setLoading] = useState(false);

    const getData = async() =>{
        
        setLoading(true);
        const api = await fetch(endpoint);
        const results = (await api.json()).results;
        setData(results);
        setLoading(false);

    }

    useEffect(()=>{

        getData()

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
            <Route path='*' element={<Films/>} />
            <Route path='/starships' element={<Starships/>} />
            <Route path='/vehicles' element={<Vehicles/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter