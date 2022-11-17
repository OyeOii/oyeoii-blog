import React, { useState } from 'react';
// import styled from 'styled-components';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/oyeoii_pink_logo.PNG';
// import images from '../../constants/images';
import './navbar.css';

// const Nav = styled.nav``
//   height: 60px;
//   background: red;
// `;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="oyeoii__navbar">

      <div className="oyeoii__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="oyeoii__navbar-links_container">
        <p><a href = "#home">Home</a></p>
        <p><a href = "#aboutme">About me</a></p>
        <p><a href = "#Destination">Destination</a></p>
        <p><a href = "#blog">blog</a></p>
        <p><a href = "#shop">shop</a></p>
        <p><a href = "#food">Food</a></p>
        <p><a href = "#cat"></a>Cats</p>
      </div>

      <div className="oyeoii__navbar-sign">
        <p><a href='#' className = "o__opensans">My Portfolio</a></p>
        <p><a href='#' className = "o__opensans">Contact me</a></p>
      </div>


      
      <div className="oyeoii__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenuLine color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="oyeoii__navbar-menu_container scale-up-center">
          <div className="oyeoii__navbar-menu_container-links">
          <p><a href = "#home">Home</a></p>
          <p><a href = "#aboutme">About me</a></p>
          <p><a href = "#Destination">Destination</a></p>
          <p><a href = "#blog">blog</a></p>
          <p><a href = "#shop">shop</a></p>
          <p><a href = "#food">Food</a></p>
          <p><a href = "#cat"></a>Cats</p>
        </div>
        
          <div className="oyeoii__navbar-menu_container-links-sign">
            <p><a href='#' className = "o__opensans">My Portfolio</a></p>
            <p><a href='#' className = "o__opensans">Contact me</a></p>
          </div>
        </div>
        )}
      </div>
    
    </nav>
  );
};


    

export default Navbar;