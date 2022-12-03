import React from "react";
import { Icon } from "@iconify/react";
import "./RestaurantContainer.css";

function RestaurantCard() {
  return (
    <div className="restaurant-card">
      <div className="restaurant-img">
        <img src="./images/CharlieBistro.jpg" alt="charlie Bistro" />
      </div>
      <div className="restro-info">
        <h3> Charlie Bistro </h3>
        <h4> Nairobi, Kenya </h4>
        <Icon icon="material-symbols:star-rate" className="logo-icon" />
      </div>
    </div>
  );
}

export default RestaurantCard;
