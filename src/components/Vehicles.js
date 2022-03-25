import React, { useEffect, useState } from 'react'
import { getData } from '../data/getData';

const Vehicles = () => {

  const [data, setData] = useState([]);
  const endpoint = 'https://swapi.dev/api/vehicles/';
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    getData(endpoint, setData, setLoading);

  }, [])

  if(loading){
      return(
          <div className='loader'> 
              <h3>Cargando vehicles...</h3>
          </div>
      )
  }

  return (
    <main>
      <h2>Vehicles</h2>
      <div className='cards-cntr'>
        {
          data.map((dat, index)=>(
            <div key={index}>
                <h3>{dat.name}</h3>
                <p><span>Modelo: </span>{dat.model}</p>
                <p><span>Fabricante: </span>{dat.manufacturer}</p>
                <p><span>Pasajeros: </span>{dat.passengers}</p>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default Vehicles