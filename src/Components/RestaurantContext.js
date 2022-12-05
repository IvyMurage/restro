import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RestaurantContext = createContext();

function RestaurantProvider({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [restraurantsError, setRestaurantsError] = useState([]);
  const [restaurantId, setRestaurantId] = useState(1);
  const [restaurant, setRestaurant] = useState({});
  const [restaurantError, setRestaurantError] = useState([]);
  const [foods, setFoods] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewsError, setReviewsError] = useState([]);

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

  console.log(restaurantId);
  useEffect(() => {
    const payload = async () => {
      setLoading(true);
      const response = await fetch(`/restaurants/${restaurantId}`);
      const restaurant = await response.json();
      if (response.ok) {
        localStorage.setItem("restaurants", JSON.stringify(restaurant));
        setRestaurant(restaurant);
        setFoods(restaurant.foods);
        setLoading(false);
      } else {
        setRestaurantError(restaurant.errors);
      }
    };

    payload();
    // const localRestaurantJson = localStorage.getItem("restaurant");
    // const localRestaurant = localRestaurantJson
    //   ? JSON.parse(localRestaurantJson)
    //   : [];

    // setFoods(localFood);
  }, [restaurantId]);

  useEffect(() => {
    const data = localStorage.getItem("restaurant");
    if (data) {
      setRestaurant(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const payload = async () => {
      const response = await fetch(`/restaurants/${restaurantId}/reviews`);

      const reviews = await response.json();
      if (response.ok) {
        setReviews(reviews);
      } else {
        setReviewsError(reviews.errors);
      }
    };

    payload();
  }, [restaurantId]);

  function handleRestaurant(restaurant) {
    setRestaurantId((prevstate) => (prevstate = restaurant.id));
    navigate(`/restaurants/${restaurant.id}`);
  }

  // start of sign up functionality
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    image_url: "",
    password_confirmation: "",
  });

  const [signupError, setSignupError] = useState([]);
  const [signupLoading, setSignupLoading] = useState(false);

  function handleSignupChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setSignupData({ ...signupData, [name]: value });
  }

  async function handleSubmitSignupDetails(event) {
    event.preventDefault();
    setSignupLoading(true);
    const response = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    });

    const userData = await response.json();
    if (response.ok) {
      setSignupData(userData);
      setSignupError([]);
      setSignupLoading(false);
      navigate("/");
      setSignupData({
        username: "",
        password: "",
        image_url: "",
        password_confirmation: "",
      });
    } else {
      setSignupError(userData.errors);
      setSignupLoading(false);
    }
  }
  // end of sign up functionality

  // Start of adding Login functionality
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState({});
  const [loginError, setLoginError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleLoginChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  async function handleSubmitLoginDetails(event) {
    event.preventDefault();
    setIsLoading(true);
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    const userData = await response.json();

    if (response.ok) {
      setIsLoading(false);
      setUser(userData);
      setLoginError([]);
      setLoginData({
        username: "",
        password: "",
      });
      navigate("/");
    } else {
      setLoginError(userData.errors);
    }
  }
  // End of Login functionality

  const values = {
    loading,
    restraurantsError,
    foods,
    restaurants,
    restaurant,
    restaurantError,
    handleRestaurant,

    // State and functions for login
    handleLoginChange,
    handleSubmitLoginDetails,
    loginError,
    loginData,
    isLoading,

    // State and functions for sign up
    handleSignupChange,
    handleSubmitSignupDetails,
    signupData,
    signupError,
    signupLoading,

    //Add functionality for getting and setting reviews
    reviews,
    reviewsError,
  };

  return (
    <RestaurantContext.Provider value={values}>
      {children}
    </RestaurantContext.Provider>
  );
}

export { RestaurantContext, RestaurantProvider };
