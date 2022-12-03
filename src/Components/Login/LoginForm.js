import React from "react";
import "./LoginForm.css";

export default function LoginForm() {
  return (
    <div className="login-div">
      <div className="login-img">
        <img
          src="./images/table-setting.jpg"
          alt="restaurant table"
          id="login-img"
        />

        <p className="login-info">
          <h3>Restro</h3>
          We're here to help you find the best restaurant in your area.
          <br />
          Whether you're looking for a place to grab a bite with friends,
          <br />
          or a place to celebrate with family, we've got you covered.
        </p>
      </div>
      <form className="login-form">
        <label htmlFor="username"> Username</label>
        <br />
        <input
          type="text"
          name="username"
          className="login-input"
          autoComplete="off"
        />
        <br />
        <label htmlFor="password"> Password</label>
        <br />
        <input
          type="password"
          name="password"
          className="login-input"
          autoComplete="current-password"
        />
        <br />
        <button type="submit" className="login-btn">
          Login
        </button>
        <span id="signup-section"> Don't have an account? Login</span>
      </form>
    </div>
  );
}
