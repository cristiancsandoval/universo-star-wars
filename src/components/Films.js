import React from 'react'
import Character from './Character';

const Films = ({data}) => {

    console.log(data);

  return (
    <main>
        {
            data.map((dat)=>(
                <div key={dat.episode_id}>
                    <h3>{dat.title}</h3>
                    <p><span>Director: </span>{dat.director}</p>
                    <p><span>Lanzamiento: </span>{dat.release_date}</p>
                    {
                        dat.characters.map((char, index)=>(
                            <Character key={index} endpoint={char}/>
                        ))
                    }
                </div>
            ))
        }
    </main>
  )
}

export default Films