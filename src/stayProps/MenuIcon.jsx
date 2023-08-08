import React, { useState } from 'react';

const MenuIcon = () => {
  const [showMobileLinks, setShowMobileLinks] = useState(false);

  const handleClick = () => {
    document.querySelector('.containerMobile').classList.toggle('change');
    setShowMobileLinks(!showMobileLinks);
  };

  return (
    <div className="containerMobile" onClick={handleClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
      <div className={`mobile-container ${showMobileLinks ? 'show' : ''}`}>
        <div className="topnav">
          <div className="myLinks">
            <a href="#skills">skills</a>
            <a href="#work">works</a>
            <a href="#contact">contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIcon;