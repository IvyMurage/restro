import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RestaurantContext = createContext();

function RestaurantProvider({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [restraurantsError, setRestaurantsError] = useState([]);
  const [restaurantId, setRestaurantId] = useState("");
  const [restaurant, setRestaurant] = useState({});
  const [restaurantError, setRestaurantError] = useState([]);
  useEffect(() => {
    const payload = async () => {
      setLoading(true);
      const response = await fetch("/restaurants");

      const restaurants = await response.json();
      if (response.ok) {
        setRestaurants(restaurants);
        setLoading(false);
      } else {
        setRestaurantsError(restaurants.errors);
      }
    };

    // Function call
    payload();
  }, []);

  useEffect(() => {
    const payload = async () => {
      setLoading(true);
      const response = await fetch(`/restaurants/${restaurantId}`);
      const restaurant = await response.json();
      if (response.ok) {
        localStorage.setItem("restaurant", JSON.stringify(restaurant));
        setRestaurant(restaurant);
        setLoading(false);
      } else {
        setRestaurantError(restaurant.errors);
      }
    };
    payload();
  }, [restaurantId]);

  // const localRestaurantJson = localStorage.getItem("restaurant");
  // const localRestaurant = localRestaurantJson
  //   ? JSON.parse(localRestaurantJson)
  //   : [];

  function handleRestaurant(restaurant) {
    setRestaurantId(restaurant.id);
    navigate(`/restaurants/${restaurant.id}`);
  }

  const values = {
    loading,
    restraurantsError,
    restaurants,
    restaurant,
    restaurantError,
    handleRestaurant,
  };
  return (
    <RestaurantContext.Provider value={values}>
      {children}
    </RestaurantContext.Provider>
  );
}

export { RestaurantContext, RestaurantProvider };
