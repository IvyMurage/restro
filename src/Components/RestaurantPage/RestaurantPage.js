import React, { useContext } from "react";
import FoodContainer from "../FoodContainer/FoodContainer";
import { RestaurantContext } from "../RestaurantContext";
import "./RestaurantPage.css";

export default function RestaurantPage() {
  const { restaurant, restaurantError } = useContext(RestaurantContext);

  console.log(restaurant.foods);

  return (
    <>
      {restaurantError.length > 0
        ? restaurantError.map((error) => <span className="error">{error}</span>)
        : null}
      <div className="restaurant-page">
        <div className="restaurant-info">
          <img src={restaurant.image_url} alt={restaurant.name} />
          <h2> {restaurant.name} </h2> <p> {restaurant.description} </p>
        </div>
        <FoodContainer />
      </div>
    </>
  );
}
