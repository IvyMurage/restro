import React from "react";
import "./FoodContainer.css";

function FoodCard({ foodName, foodPrice, foodImage, foodRating }) {
  return (
    <div className="food-card">
      <img src={foodImage} alt={foodName} className="food-img" />
      <h3> {foodName} </h3>
      <p> Price: {foodPrice} </p> <span> {foodRating} </span>
    </div>
  );
}

export default FoodCard;
