import React, { useContext } from "react";
import "./Review.css";
import { Icon } from "@iconify/react";
import { RestaurantContext } from "../RestaurantContext";

function ReviewCard({ reviewTitle, reviewComment, reviewUser, reviewId }) {
  const { handleDeleteReview } = useContext(RestaurantContext);
  return (
    <div className="review-card">
      <div className="review-info">
        <div className="reviewer-info">
          <h4>{reviewUser.username}</h4>
          <img src={reviewUser.image_url} alt={reviewUser.username} />
        </div>
        <Icon
          icon="ic:baseline-delete"
          className="delete-icon"
          onClick={() => handleDeleteReview(reviewId)}
        />
      </div>

      <h3> {reviewTitle}</h3>
      <p>{reviewComment}</p>
    </div>
  );
}

export default ReviewCard;
