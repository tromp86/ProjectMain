import React from 'react';
import { useInView } from 'react-intersection-observer';

function HederEfect(props) {
  const { text } = props;
  const [inViewRef, inView] = useInView({
    triggerOnce: false, 
    threshold: 1,
  });

  const handleIntersection = (isVisible) => {
    const h1 = document.getElementById('tagline');
    if (h1) {
      if (isVisible) {
        console.log('Header став видимим!');
        h1.style.transform = 'translateY(-30px)';
        h1.style.fontSize = '3.6rem'; 
        h1.classList.add('h1animation');
      } else {
        console.log('Header став невидимим!');
        h1.style.transform = 'translateY(30px)';
        h1.style.fontSize = '3.4rem';
        h1.classList.remove('h1animation');
      }
    }
  };

  React.useEffect(() => {
    handleIntersection(inView);
  }, [inView]);

  return (
    <div ref={inViewRef}>
      <h1 id="tagline">{ text }</h1>
    </div>
  );
}

export default HederEfect;