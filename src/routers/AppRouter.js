import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Films from '../components/Films'
import Header from '../components/Header'
import Starships from '../components/Starships'
import Vehicles from '../components/Vehicles'

const AppRouter = () => {
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