import React from "react";
import "./Review.css";
function ReviewCard({ reviewTitle, reviewComment, reviewUser }) {
  console.log(reviewUser);
  return (
    <div className="review-card">
      <h4>{reviewUser.username}</h4>
      <h3> {reviewTitle}</h3>
      <p>{reviewComment}</p>
    </div>
  );
}

export default ReviewCard;
