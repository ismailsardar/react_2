import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Page1 from '../nestedRouting/Page1'
import Page2 from '../nestedRouting/Page2'
import Page3 from '../nestedRouting/Page3'
import About from '../pages/About'
import Contact from '../pages/Contact'
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

            <Route path='/contact/' element={<Contact />} >
              <Route path='company' element={<Page1 />} />
              <Route path='service' element={<Page2 />} />
              <Route path='project' element={<Page3 />} />
            </Route>

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