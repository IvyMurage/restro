import React, { useContext } from "react";
import "./Review.css";
import { Icon } from "@iconify/react";
import { RestaurantContext } from "../RestaurantContext";
import { useState } from "react";

function ReviewCard({ reviewTitle, reviewComment, reviewUser, reviewId }) {
  const { handleDeleteReview, user, restaurantId } =
    useContext(RestaurantContext);
  const [update, setUpdate] = useState({
    comment: "",
  });

  function handleUpdate(event) {
    const value = event.target.value;
    const name = event.target.name;
    setUpdate({ [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(
      `https://restro-backend-production.up.railway.app/restaurants/${restaurantId}/reviews/${reviewId}`
    )
      .then((response) => response.json())
      .then((data) => setUpdate(data));
  }

  return (
    <div className="review-card">
      <div className="review-info">
        <div className="reviewer-info">
          {/* <h4>{reviewUser.username}</h4>
                <img src={reviewUser.image_url} alt={reviewUser.username} /> */}
        </div>
        {user ? (
          <Icon
            icon="ic:baseline-delete"
            className="delete-icon"
            onClick={() => handleDeleteReview(reviewId)}
          />
        ) : null}
        <form id="review-form" onSubmit={handleSubmit}>
          <label htmlFor="title"> Title </label> <br />
          <input
            type="text"
            name="comment"
            value={update.comment}
            onChange={handleUpdate}
          />
        </form>
      </div>
      <h3> {reviewTitle} </h3> <p> {reviewComment} </p>
    </div>
  );
}

export default ReviewCard;
