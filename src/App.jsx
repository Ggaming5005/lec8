// App.jsx
import React, { useState } from "react";
import FeedbackCard from "./components/FeedbackCard";
import ThankYouMessage from "./components/ThankYouMessage";
import "./app.css";

function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating) {
      setIsSubmitted(true);
    } else {
      alert("Please select a rating before submitting!");
    }
  };

  return (
    <div className="app-container">
      {!isSubmitted ? (
        <FeedbackCard
          selectedRating={selectedRating}
          onRatingSelect={handleRatingSelect}
          onSubmit={handleSubmit}
        />
      ) : (
        <ThankYouMessage selectedRating={selectedRating} />
      )}
    </div>
  );
}

export default App;
