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
          <div>
              <h3>Cargando información...</h3>
          </div>
      )
  }

  return (
    <main>
      <h2>Vehicles</h2>
      <div>
        {
          data.map((dat, index)=>(
            <div key={index}>

            </div>
          ))
        }
      </div>
    </main>
  )
}

export default Vehicles