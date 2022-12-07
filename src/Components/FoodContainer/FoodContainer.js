import React from "react";

import FoodCard from "./FoodCard";
import "./FoodContainer.css";
function FoodContainer({ foods }) {
  // const { foods } = useContext(RestaurantContext);
  const foodList = foods?.map((food) => (
    <FoodCard
      key={food.id}
      foodName={food.name}
      foodPrice={food.price}
      foodImage={food.image_url}
      foodRating={food.rating}
      foodDescription={food.description}
    />
  ));
  return <div className="food-container">{foodList}</div>;
}

export default FoodContainer;
