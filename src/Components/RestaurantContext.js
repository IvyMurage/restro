import React, { createContext, useEffect, useState } from "react";

const RestaurantContext = createContext();

function RestaurantProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [restraurantserror, setRestaurantsError] = useState([]);
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
        setRestaurant(restaurant);
        setLoading(false);
      } else {
        setRestaurantError(restaurant.errors);
      }
    };
    payload();
  }, [restaurantId]);

  function handleRestaurant(restaurantId) {
    setRestaurantId(restaurantId);
  }

  const values = {
    loading,
    restraurantserror,
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
