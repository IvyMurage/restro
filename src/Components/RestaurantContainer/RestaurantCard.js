import React, { useContext } from "react";
import "./RestaurantContainer.css";
import { RestaurantContext } from "../RestaurantContext";

function RestaurantCard({
  restaurant,
  restaurantName,
  restaurantRating,
  restaurantImage,
  restaurantAddress,
}) {
  const { handleRestaurant } = useContext(RestaurantContext);
  return (
    <div className="restaurant-card">
      <div className="restaurant-img">
        <img src={restaurantImage} alt={restaurantName} />
      </div>
      <div className="restro-info">
        <h3 onClick={() => handleRestaurant(restaurant)}>{restaurantName}</h3>
        <h4> {restaurantAddress} </h4>
        {[...Array(restaurantRating)].map((star) => {
          return (
            <span className="star" style={{ color: "#e1f52c" }}>
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantCard;
