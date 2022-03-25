import React, { useEffect, useState } from 'react'
import { getData } from '../data/getData';
import Character from './Character';

const Films = () => {

    const [data, setData] = useState([]);
    const endpoint = 'https://swapi.dev/api/films/';
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
    <main className='films'>
        <h2>Películas (Films)</h2>
        {
            data.map((dat)=>(
                <div key={dat.episode_id}>
                    <h3>{dat.title}</h3>
                    <p><span>Director: </span>{dat.director}</p>
                    <p><span>Lanzamiento: </span>{dat.release_date}</p>
                    <p><span>Personajes: </span></p>
                    <div>
                        {
                            dat.characters.map((char, index)=>(
                                <Character key={index} endpoint={char}/>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </main>
  )
}

export default Films