import React from "react";
import { Icon } from "@iconify/react";
import "./RestaurantContainer.css";

function RestaurantCard({restaurantName, restaurantRating, restaurantImage, restaurantAddress}) {
  return (
    <div className="restaurant-card">
      <div className="restaurant-img">
        <img src={restaurantImage} alt={restaurantName} />
      </div>
      <div className="restro-info">
        <h3> {restaurantName} </h3>
        <h4> {restaurantAddress} </h4>
        <Icon icon="material-symbols:star-rate" className="logo-icon" />
      </div>
    </div>
  );
}

export default RestaurantCard;
