import React, { useState } from "react";

function Letter ({
  letter,
  paddingLeft,
  borderColor,
  textColor,
  padding,
  fontWeight,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 3000);
  };

  const letterStyle = {
    transform: isHovered ? 'rotateY(180deg)' : 'none',
    transition: 'transform 0.3s ease-in-out',
    marginRight: '1px',
    paddingLeft: paddingLeft || '0',
    border: letter === 'T' ? `2px solid ${borderColor}` : 'none',
    color: textColor || '#213547',
    padding: padding || '0',
    fontWeight: fontWeight || 'bold',
    cursor: 'pointer'
  };

  return (
    <span className="letter" onMouseEnter={handleHover} style={letterStyle}>
      {letter}
    </span>
  );
};

export default Letter;