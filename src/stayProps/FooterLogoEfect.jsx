import React from 'react';
import { useInView } from 'react-intersection-observer';
import imageTromp86 from '../assets/ico/tromp86.png';
import '../footer.css';

function FooterLogoEfect() {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleIntersection = (isVisible) => {
    const imageLogo = document.getElementById('logo');
    if (imageLogo) {
      if (isVisible) {
        imageLogo.style.animation = 'bounce-in-right 0.6s ease-in-out';
        // imageLogo.style.transform = 'translateX(100px)';
      } else {
        // imageLogo.style.transform = 'translateX(300px)';
        imageLogo.style.animation = 'none';
      }
    }
  };

  React.useEffect(() => {
    handleIntersection(inView);
  }, [inView]);

  return (
    <div ref={inViewRef}>
      <img id="logo" className='img-logo' src={imageTromp86} alt="Logo" />
    </div>
  );
}

export default FooterLogoEfect;