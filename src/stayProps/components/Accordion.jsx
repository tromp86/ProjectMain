import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <div>
      <button className="accordion-button accordion" onClick={toggleAccordion}>
        {title}
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;