import React, { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";
import FoodCard from "./FoodCard";
import "./FoodContainer.css";
function FoodContainer() {
  const { foods } = useContext(RestaurantContext);
  const foodList = foods.map((food) => (
    <FoodCard
      key={food.id}
      foodName={food.name}
      foodPrice={food.price}
      foodImage={food.image_url}
      foodRating={food.rating}
    />
  ));
  return <div className="food-container">{foodList}</div>;
}

export default FoodContainer;
