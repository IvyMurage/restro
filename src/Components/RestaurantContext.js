import React, { Children, createContext, useEffect, useState } from "react";

const RestaurantContext = createContext();

function RestaurantProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const payload = async () => {
      setLoading(true);
      const response = await fetch("/restaurants");
      console.log(response);

      const restaurants = await response.json();
      if (response.ok) {
        setRestaurants(restaurants);
        setLoading(false);
      } else {
        setErrors(restaurants.errors);
      }
    };
    // Function call
    payload();
  }, []);

  const values = {
    loading,
    restaurants,
    errors,
  };
  return (
    <RestaurantContext.Provider value={values}>
      {children}
    </RestaurantContext.Provider>
  );
}

export { RestaurantContext, RestaurantProvider };
