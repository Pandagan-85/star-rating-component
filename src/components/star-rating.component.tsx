import "./star-rating.styles.css";
import { useState, useCallback, useEffect } from "react";
const StarRating = ({ maxRating = 5, onChange = () => {} }) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const setCurrentRatingClickHanldler = useCallback(
    (ratingValue: number) => {
      currentRating === ratingValue
        ? setCurrentRating(0)
        : setCurrentRating(ratingValue);
    },
    [currentRating]
  );

  useEffect(() => {
    onChange(currentRating);
  }, [currentRating, onChange]);

  return (
    <div className='star-rating-container'>
      {/* Current Rating: {currentRating} */}
      {
        // stars
        [...Array(maxRating)].map((_, idx) => {
          const ratingValue: number = idx + 1;
          return (
            <p
              key={idx}
              onClick={() => setCurrentRatingClickHanldler(ratingValue)}
              onMouseEnter={() => setHoverRating(ratingValue)}
              onMouseLeave={() => setHoverRating(0)}
              className={`star ${
                ratingValue <= (hoverRating || currentRating) ? "active" : ""
              }`}
              //   className={`star ${ratingValue <= currentRating ? "active" : ""}`}
            >
              {/* {ratingValue} */}
              &#9733;
            </p>
          );
        })
      }
    </div>
  );
};

export default StarRating;
