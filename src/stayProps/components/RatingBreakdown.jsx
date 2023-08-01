import React, { useState, useEffect } from 'react';

const RatingBreakdown = () => {
  const [barWidths, setBarWidths] = useState({
    'bar-5': 0,
    'bar-4': 0,
    'bar-3': 0,
    'bar-2': 0,
    'bar-1': 0,
  });

  useEffect(() => {
    const targetWidths = {
      'bar-5': 90,
      'bar-4': 89,
      'bar-3': 94,
      'bar-2': 85,
      'bar-1': 87,
    };

    const animationDuration = 1000; 
    const intervalDuration = 10;
    const steps = animationDuration / intervalDuration;

    const stepValue = Object.keys(targetWidths).reduce((acc, bar) => {
      acc[bar] = targetWidths[bar] / steps;
      return acc;
    }, {});

    let currentWidths = { ...barWidths };

    const interval = setInterval(() => {
      let finished = true;

      for (const bar in targetWidths) {
        if (currentWidths[bar] < targetWidths[bar]) {
          currentWidths[bar] += stepValue[bar];
          finished = false;
        }
      }

      setBarWidths({ ...currentWidths });

      if (finished) {
        clearInterval(interval);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="row">
      <div className="middle">
        <div className="bar-container">
          <div className="bar-5" style={{ width: `${barWidths['bar-5']}%` }}></div>
        </div>
      </div>
      <div className="side right">
        <div>Angular</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar-4" style={{ width: `${barWidths['bar-4']}%` }}></div>
        </div>
      </div>
      <div className="side right">
        <div>React</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar-3" style={{ width: `${barWidths['bar-3']}%` }}></div>
        </div>
      </div>
      <div className="side right">
        <div>JS</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar-2" style={{ width: `${barWidths['bar-2']}%` }}></div>
        </div>
      </div>
      <div className="side right">
        <div>Css</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar-1" style={{ width: `${barWidths['bar-1']}%` }}></div>
        </div>
      </div>
      <div className="side right">
        <div>Html</div>
      </div>
    </div>
  );
};

export default RatingBreakdown;