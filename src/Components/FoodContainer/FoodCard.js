import React from "react";
import "./FoodContainer.css";
function FoodCard({ foodName, foodPrice, foodImage, foodRating }) {
  return (
    <div className="foodContainer">
      <div className="food-card">
        <img src={foodImage} alt={foodName} />
        <h3> {foodName} </h3>
        <p>{foodPrice}</p>
        <span>{foodRating}</span>
      </div>
    </div>
  );
}

export default FoodCard;
