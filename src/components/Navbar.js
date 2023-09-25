import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
      
<h2 className="navbar-h2">DevRishi</h2>

      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/login">Login</Link>
        <Link to="/conti"> Contribution </Link>
        <Link to="/book">  E-books/pdf</Link>
        <Link to="/disc"> Discussion forum  </Link>
        <button onClick={toggleNavbar}>
         
        </button>
      </div>
    </div>
  );
}

export default Navbar;