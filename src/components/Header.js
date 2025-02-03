// import React from 'react'
// import "./header.css"

// function Header() {
//   return (
//     <div className='header'>
//         <div><img src={require('./images/header.png')} height={74} width={246} /></div>
//         <div className='header-item'>
//             <div>HOME</div>
//             <div>ABOUT US</div>
//             <div>PRODUCTS</div>
//             <div>PAGES</div>
//             <div>BLOG</div>
//             <div>CONTACT US</div>
//         </div>
//     </div>
//   )
// }

// export default Header

import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io'; // Importing icons
import './header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div>
        <img src={require('./images/header.png')} alt="Logo" height={74} width={246} />
      </div>
      <div className={`header-item ${isMenuOpen ? 'open' : ''}`}>
        <div>HOME</div>
        <div>ABOUT US</div>
        <div>PRODUCTS</div>
        <div>PAGES</div>
        <div>BLOG</div>
        <div>CONTACT US</div>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
      </div>
    </div>
  );
}

export default Header;
