import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = {
    fontWeight: 'bold',
    position: 'absolute',
    right: '40px',
    zIndex: 2,
  };
  const accordionContent = {
    overflowY: "scroll",
    textOverflow: "ellipsis",
    maxHeight: 140,
    transition: 'height 1.3s ease', 
  };

  const toggleAccordion = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <div>
      <button className="accordion-button accordion" onClick={toggleAccordion}>
      more about {title}  <b style={styles}>{isOpen ? '▲' : '▼'}</b>
      </button>
      {isOpen && (
        <div>
          <p style={accordionContent} className='textLeft'>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;