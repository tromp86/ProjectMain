import React, { useState, useEffect } from 'react';

function PrintText({ sampleText }) {
  const [printedText, setPrintedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setPrintedText((prevText) => prevText + sampleText[currentIndex]);
      currentIndex++;
      if (currentIndex === sampleText.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [sampleText]);

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: printedText }} />
    </div>
  );
}

export default PrintText;