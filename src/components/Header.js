import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div>
            <h1>Universo Star Wars</h1>
        </div>
        <nav>
            <Link to='/'>Films</Link>
            <Link to='/starships'>Starships</Link>
            <Link to='/vehicles'>Vehicles</Link>
        </nav>
    </header>
  )
}

export default Header