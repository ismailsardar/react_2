import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <h1>Contact Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, laborum voluptatem. Dignissimos, ducimus pariatur impedit iste repellat quos dolor dolore?</p>
        <br /><br /><br />
        <NavLink to="company" >Company</NavLink>
        <NavLink to="service" >Service</NavLink>
        <NavLink to="project" >Project</NavLink>
        <Outlet />
    </div>
  )
}

export default Contact