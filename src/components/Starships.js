import React, { useEffect, useState } from 'react'
import { getData } from '../data/getData';

const Starships = () => {

  const [data, setData] = useState([]);
  const endpoint = 'https://swapi.dev/api/starships/';
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    getData(endpoint, setData, setLoading);

  }, [])

  if(loading){
      return(
          <div>
              <h3>Cargando información...</h3>
          </div>
      )
  }

  return (
    <main>
       <h2>Starships</h2>
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

export default Starships