import React from 'react';
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav>
        {/* <Link to='/'>Home</Link>
        <Link to='/countact'>Contact</Link> */}

        <NavLink to='/'>Home</NavLink>
        <NavLink to='/countact'>Contact</NavLink>
    </nav>
  )
}

export default NavLinks