import React from 'react';
import { useInView } from 'react-intersection-observer';

function PortfolioEfect(props) {
  const { text } = props;
  const [inViewRef, inView] = useInView({
    triggerOnce: false, 
    threshold: 1,
  });

  const handleIntersection = (isVisible) => {
    const h1 = document.getElementById('PortfolioEfect');
    if (h1) {
      if (isVisible) {
        setTimeout(() => {
        h1.style.color = "#ff416c";
      }, 1000);
        h1.classList.add("h1animation");
      } else {
        h1.style.color = "silver";
        h1.classList.remove("h1animation");
      }
    }
  };

  React.useEffect(() => {
    handleIntersection(inView);
  }, [inView]);

  return (
    <div ref={inViewRef}>
      <h1 id='PortfolioEfect' className='categoryH1'>{ text }</h1>
    </div>
  );
}

export default PortfolioEfect;