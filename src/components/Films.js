import React from 'react'
import Character from './Character';

const Films = ({data}) => {

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