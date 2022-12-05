import React from "react";
import { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";
import "./Review.css";
function ReviewForm() {
  const { setTrigger } = useContext(RestaurantContext);
  return (
    <div className="popup">
      <form id="review-form">
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" name="title" />
        <br />
        <label htmlFor="comment">Description</label>
        <br />
        <textarea cols="50" rows="4" className="text-area"></textarea>
        <br />
        <div className="action-btns">
          <button type="submit" className="review-btn-1">
            Submit Your Review
          </button>
          <br />
          <button
            type="button"
            className="review-btn-1"
            onClick={() =>setTrigger((prevState) => !prevState)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
