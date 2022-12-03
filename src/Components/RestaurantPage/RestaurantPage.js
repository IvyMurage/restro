import React, { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";

export default function RestaurantPage() {
 

  const { restaurant } = useContext(RestaurantContext);
  return (
    <div className="restaurant-page">
      <div className="restaurant-info">
        <img src={restaurant.image_url} alt={restaurant.name} />
        <h2> {restaurant.name} </h2> <p> {restaurant.description} </p>
      </div>
    </div>
  );
}
