import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../index.css'

function PortfolioEfect() {
    const [inViewRef, inView] = useInView({
        triggerOnce: true, // Тригерити подію лише один раз, коли елемент з'являється на сторінці
        threshold: 1, // Поріг, при якому вважати елемент видимим (0.5 означає половину видимості)
      });
    
      const handleIntersection = (isVisible) => {
        if (isVisible) {
          console.log('Елемент став видимим!');
        }
      };

      React.useEffect(() => {
        handleIntersection(inView);
      }, [inView]);
    
      return (
        <div ref={inViewRef}>
          <h1>hello</h1>
        </div>
      );
    }


export default PortfolioEfect;