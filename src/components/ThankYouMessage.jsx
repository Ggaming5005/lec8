import React from "react";

function ThankYouMessage({ selectedRating }) {
  return (
    <div className="thank-you-card">
      <img
        src="/public/images/Frame.svg"
        alt="Thank you icon"
        className="thank-you-icon"
      />

      <p className="user-rating-display">
        You selected {selectedRating} out of 5
      </p>
      <h2>Thank you!</h2>
      <p className="thank-you-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYouMessage;
