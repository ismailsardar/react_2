import React from "react";
import { Link } from "react-router-dom";

const NavDemo = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>          
        </li>
        <li>
        <Link to="/about">About</Link>
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
