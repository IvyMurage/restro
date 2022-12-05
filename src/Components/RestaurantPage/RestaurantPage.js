import React, { useContext } from "react";
import FoodContainer from "../FoodContainer/FoodContainer";
import { RestaurantContext } from "../RestaurantContext";
import ReviewContainer from "../Review/ReviewContainer";
import "./RestaurantPage.css";

export default function RestaurantPage() {
  const { restaurant, restaurantError } = useContext(RestaurantContext);

  return (
    <>
      {restaurantError.length > 0
        ? restaurantError.map((error, index) => (
            <span key={index} className="error">
              {error}
            </span>
          ))
        : null}
      <div className="restaurant-page">
        <div className="restaurant-info">
          <img src={restaurant.image_url} alt={restaurant.name} />
          <h2> {restaurant.name} </h2> <p> {restaurant.description} </p>
        </div>
        <FoodContainer />
        <ReviewContainer />
      </div>
    </>
  );
}
