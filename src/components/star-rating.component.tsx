import "./star-rating.styles.css";
import { useState } from "react";
const StarRating = () => {
  const maxRating: number = 5;

  const [currentRating, setCurrentRating] = useState(0);

  const setCurrentRatingClickHanldler = (ratingValue: number) => {
    currentRating === ratingValue
      ? setCurrentRating(0)
      : setCurrentRating(ratingValue);
  };

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
              onClick={() => setCurrentRatingClickHanldler(ratingValue)}
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
