import React from 'react'

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
                </div>
            ))
        }
    </main>
  )
}

export default Films