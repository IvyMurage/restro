import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RestaurantContext } from "../RestaurantContext";
import "./LoginForm.css";

export default function LoginForm() {
  const {
    loginData,
    handleLoginChange,
    handleSubmitLoginDetails,
    loginError,
    isLoading,
  } = useContext(RestaurantContext);

  return (
    <>
      <div className="login-div">
        <div className="login-img">
          <img
            src="./images/table-setting.jpg"
            alt="restaurant table"
            id="login-img"
          />
          <div className="login-info">
            <h3> Restro </h3>
            <p>
              We 're here to help you find the best restaurant in your area.
              <br />
              Whether you 're looking for a place to grab a bite with friends,
              <br />
              or a place to celebrate with family, we 've got you covered.
            </p>
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmitLoginDetails}>
          <label htmlFor="username"> Username </label> <br />
          <input
            type="text"
            name="username"
            className="login-input"
            autoComplete="off"
            value={loginData.username}
            onChange={handleLoginChange}
          />
          <br />
          <label htmlFor="password"> Password </label> <br />
          <input
            type="password"
            name="password"
            className="login-input"
            autoComplete="current-password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
          <br />
          {loginError.map((error, index) => (
            <p className="loginError" key={index}>
              {error}!!
            </p>
          ))}
          <button type="submit" className="login-btn">
            {isLoading ? " Loading..." : "Login"}
          </button>
          <Link>
            <span id="signup-section"> Don 't have an account? Login</span>
          </Link>
        </form>
      </div>
    </>
  );
}
