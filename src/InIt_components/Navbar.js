import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sidenav">
      <ul>
        <li className="currentLink"> <Link to="/"> Home </Link></li>
        <li className="currentLink"> <Link to="/About"> About </Link></li>
        <li className=""> <Link to="/Contact"> Contact </Link></li>
      </ul>
      <ul className="user-nav">
      {/* ADD YOUR LINK HERE! */}
      {/* 
          <li>
            <Link to="***NAME***">
              < ***LINK TEXT***>
            </Link>
          </li>
          */}
        <li><Link to="/Juan_P">Juan Pérez (EXAMPLE USER)</Link></li>
        <li><Link to="/javila35">Joe</Link></li>
        <li><Link to="/Shawn_H">Shawn</Link></li>
        <li><Link to="/Alicia_C">Alicia</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
