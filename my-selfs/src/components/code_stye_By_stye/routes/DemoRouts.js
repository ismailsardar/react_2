import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import About from '../pages/About'
import Filter from '../pages/Filter'
import Home from '../pages/Home'
import Page404 from '../pages/Page404'
import User from '../pages/User'
import NavDemo from './nav/NavDemo'

const DemoRouts = () => {
  return (
    <div>
        <BrowserRouter>
        <NavDemo />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />

            <Route path='/filter' element={<Filter />} />

            {/* params routing */}
            <Route path='/user/:name' element={<User />} />
            {/* params routing end */}

            <Route path='/*' element={<Page404 />} />
            {/* <Route path='/*' element={<Navigate to="/" />} /> */}
         </Routes>
        </BrowserRouter>
    </div>
  )
}

export default DemoRouts