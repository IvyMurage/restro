import React from "react";
import RestaurantCard from "./RestaurantCard";
import "./RestaurantContainer.css"

function RestaurantContainer() {
  return (
    <div className="restaurant-container">
      {/* <h2>Popular Restaurants</h2> */}
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
}

export default RestaurantContainer;
