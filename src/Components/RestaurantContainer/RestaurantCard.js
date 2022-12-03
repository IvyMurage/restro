import React, { useContext } from "react";
import { Icon } from "@iconify/react";
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
        <h3 onClick={() => handleRestaurant(restaurant.id)}>
          {restaurantName}
        </h3>
        <h4> {restaurantAddress} </h4>
        <Icon icon="material-symbols:star-rate" className="logo-icon" />
      </div>
    </div>
  );
}

export default RestaurantCard;
