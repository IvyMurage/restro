import React from "react";
import "./Review.css";
function ReviewCard({ reviewTitle, reviewComment, reviewUser }) {
  console.log(reviewUser);
  return (
    <div className="review-card">
      <div className="reviewer-info">
        <h4>{reviewUser.username}</h4>
        <img src={reviewUser.image_url} alt={reviewUser.username} />
      </div>
      <h3> {reviewTitle}</h3>
      <p>{reviewComment}</p>
    </div>
  );
}

export default ReviewCard;
