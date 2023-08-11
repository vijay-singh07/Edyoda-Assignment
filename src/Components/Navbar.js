import React from 'react';
import '../Styles/Navbar.style.css';
import { Link } from 'react-router-dom';
import Logo from './LOGO.jpg';

function Navbar() {


  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
            <img src={Logo} alt='logo'></img>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
