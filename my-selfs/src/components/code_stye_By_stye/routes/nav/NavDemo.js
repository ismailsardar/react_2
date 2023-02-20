import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavDemo = () => {
  return (
    <div>
      <ul className="myNav" >
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>          
        </li>
        <li>          
          <NavLink to="/filter">Filter</NavLink>          
        </li>
        <li>
        {/* <Link to="/about">About</Link> */}
        <NavLink to="/about">About</NavLink>
        {/* <NavLink to="/about" style={(isActive)=>{return {backgroundColor: isActive ? "#00050e" : "white"}}}>About</NavLink> */}
        </li>

        {/* params routing */}
        <li>
        <Link to="/user/ismile">ismile</Link>
        </li>
        <li>
        <Link to="/user/sardar">sardar</Link>
        </li>
        {/* params routing end */}
      </ul>
    </div>
  );
};

export default NavDemo;
