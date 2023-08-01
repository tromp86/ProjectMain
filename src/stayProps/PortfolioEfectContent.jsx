import React from 'react';
import { useInView } from 'react-intersection-observer';

function PortfolioEfectContent(props) {
  const { text } = props;
  const [inViewRef, inView] = useInView({
    triggerOnce: false, 
    threshold: 1,
  });

  const handleIntersection = (isVisible) => {
    const content = document.getElementById('content');
    if (content) {
      if (isVisible) {
        content.classList.add("contentAdd");
      } else {
        content.classList.remove("contentAdd");
      }
    }
  };

  React.useEffect(() => {
    handleIntersection(inView);
  }, [inView]);

  return (
    <div ref={inViewRef}>
      <h1 id='content'></h1>
    </div>
  );
}

export default PortfolioEfectContent;