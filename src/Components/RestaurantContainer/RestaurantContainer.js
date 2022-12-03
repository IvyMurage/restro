import React, { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";
import RestaurantCard from "./RestaurantCard";
import "./RestaurantContainer.css";

function RestaurantContainer() {
  const { loading, restaurantserror, restaurants } =
    useContext(RestaurantContext);

  const restaurantList = restaurants.map((restaurant) => (
    <RestaurantCard
      key={restaurant.id}
      restaurantName={restaurant.name}
      restaurantAddress={restaurant.address}
      restaurantRating={restaurant.rating}
      restaurantLike={restaurant.like}
      restaurantImage={restaurant.image_url}
      restaurant={restaurant}
    />
  ));
  return (
    <div className="restaurant-container">
      {/* <h2>Popular Restaurants</h2> */}
      {restaurantserror.length > 0
        ? restaurantserror.map((error) => (
            <span className="error-message" key={error}>
              {error}
            </span>
          ))
        : null}
      {loading ? <h2>Loading...</h2> : restaurantList}
    </div>
  );
}

export default RestaurantContainer;
