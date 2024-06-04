import "./star-rating.styles.css";
import { useState } from "react";
const StarRating = () => {
  const maxRating: number = 5;

  const [currentRating, setCurrentRating] = useState(0);

  return (
    <div className='star-rating-container'>
      Current Rating: {currentRating}
      {
        // stars
        [...Array(maxRating)].map((_, idx) => {
          const ratingValue: number = idx + 1;
          return (
            <p
              key={idx}
              onClick={() => setCurrentRating(ratingValue)}
              className={`star ${ratingValue <= currentRating ? "active" : ""}`}
            >
              {ratingValue}
            </p>
          );
        })
      }
    </div>
  );
};

export default StarRating;
