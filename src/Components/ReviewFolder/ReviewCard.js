import React, { useContext } from "react";
import "./Review.css";
import { Icon } from "@iconify/react";
import { RestaurantContext } from "../RestaurantContext";
import { useState } from "react";

function ReviewCard({ reviewTitle, reviewComment, reviewUser, reviewId }) {
  const { handleDeleteReview, user, restaurantId, setReviews } =
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
      `https://restro-server-production.up.railway.app/restaurants/${restaurantId}/reviews/${reviewId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(update),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setReviews((prevState) =>
          prevState.map((review) => {
            if (review.id === data.id) {
              return data;
            } else {
              return review;
            }
          })
        );
        setUpdate({ comment: "" });
      });
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
      </div>
      <h3> {reviewTitle} </h3> <p> {reviewComment} </p>
      {user ? (
        <form id="review-change" onSubmit={handleSubmit}>
          <h3 style={{ color: "#e1f52c" }}>Edit Comment</h3>
          <input
            type="text"
            name="comment"
            value={update.comment}
            onChange={handleUpdate}
          />
          <button type="type">Edit Review</button>
        </form>
      ) : null}
    </div>
  );
}

export default ReviewCard;
