import React, { useState } from 'react';
import RatingBreakdown from './RatingBreakdown'
import './raiting.css'

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  const highlightStars = (value) => {
    setSelectedRating(value);
  };

  return (
  <div className="container-raiting">
    <span className="heading">My develop rating</span>
    <span className="heading2">but</span>
    <span> I need 5 star</span>
<div className="star-rating">
  {[1, 2, 3, 4, 5].map((value) => (
    <span
      key={value}
      className={`fa fa-star ${value <= selectedRating ? 'checked' : ''}`}
      onMouseOver={() => highlightStars(value)}
    ></span>
  ))}
{selectedRating === 5 && (
          <>
            <span role="img" aria-label="Smiley" className="smiley">😎</span>
            
            <div>
              <RatingBreakdown />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Rating;
