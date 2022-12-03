import React, { useContext, useState } from "react";
import { RestaurantContext } from "../RestaurantContext";
import FoodCard from "./FoodCard";
import "./RestaurantPage.css";

export default function RestaurantPage() {
  const { restaurant, restaurantError, foods} = useContext(RestaurantContext);
  // const [foods, setFoods] = useState([]);
  console.log(restaurant.foods);

  const foodList = foods.map((food) => (
    <FoodCard
      key={food.id}
      foodName={food.name}
      foodPrice={food.price}
      foodImage={food.image_url}
      foodRating={food.rating}
    />
  ));
  return (
    <>
      {restaurantError.length > 0
        ? restaurantError.map((error) => <span>{error}</span>)
        : null}
      <div className="restaurant-page">
        <div className="restaurant-info">
          <img src={restaurant.image_url} alt={restaurant.name} />
          <h2> {restaurant.name} </h2> <p> {restaurant.description} </p>
        </div>
        {foodList}
      </div>
    </>
  );
}
