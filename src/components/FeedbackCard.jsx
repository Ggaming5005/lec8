import React from "react";

function FeedbackCard({ selectedRating, onRatingSelect, onSubmit }) {
  return (
    <div className="feedback-card">
      <div className="star-icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0L15.09 7.36L23.18 8.64L17.09 13.36L18.18 21.5L12 17.77L5.82 21.5L6.91 13.36L0.82 8.64L8.91 7.36L12 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-buttons">
        {Array.from({ length: 5 }, (_, index) => (
          <button
            key={index}
            className={`rating-button ${
              selectedRating === index + 1 ? "selected" : ""
            }`}
            onClick={() => onRatingSelect(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button className="submit-button" onClick={onSubmit}>
        SUBMIT
      </button>
    </div>
  );
}

export default FeedbackCard;
