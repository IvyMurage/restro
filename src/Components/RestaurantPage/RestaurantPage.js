import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FoodContainer from "../FoodContainer/FoodContainer";
import { RestaurantContext } from "../RestaurantContext";
import ReviewContainer from "../Review/ReviewContainer";
import ReviewForm from "../Review/ReviewForm";
import "./RestaurantPage.css";

export default function RestaurantPage() {
  const { restaurant, restaurantError, trigger } =
    useContext(RestaurantContext);

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
        <div className="restaurant-info ">
          <div className="intro">
            <h2> {restaurant.name} </h2>
            <p> {restaurant.description} </p>
            <a href="#food-container">
              <button className="menu-btn">View Menu</button>
            </a>
          </div>
          <div className="restaurant-page-img">
            <img src={restaurant.image_url} alt={restaurant.name} />
          </div>
        </div>
        <FoodContainer foods={restaurant.foods} />
        <ReviewContainer />
        {trigger ? <ReviewForm /> : null}
      </div>
    </>
  );
}
