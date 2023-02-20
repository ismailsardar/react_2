import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Page404 from '../pages/Page404'
import NavDemo from './nav/NavDemo'

const DemoRouts = () => {
  return (
    <div>
        <BrowserRouter>
        <NavDemo />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            
            <Route path='/*' element={<Page404 />} />
            <Route path='/*' element={<Navigate to="/" />} />
         </Routes>
        </BrowserRouter>
    </div>
  )
}

export default DemoRouts