import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function SignUp() {
  const [signupData, setSignupData] = useState({
    username: "ChichiiBobo",
    password: "123",
    image_url: "",
    password_confirmation: "123",
  });

  const [signupError, setSignupError] = useState([]);

  function handleSignupChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setSignupData({ ...signupData, [name]: value });
  }
  return (
    <div className="signup-div">
      <form className="signup-form">
        <label> Username </label> <br />
        <input
          type="text"
          name="username"
          autoComplete="off"
          className="signup-input"
          value={signupData.username}
          onChange={handleSignupChange}
        />
        <br />
        <label htmlFor="password"> Password </label> <br />
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          className="signup-input"
          value={signupData.password}
          onChange={handleSignupChange}
        />
        <br />
        <label type="password"> Password Confirmation </label> <br />
        <input
          type="password"
          name="password-confirmation"
          autoComplete="current-password"
          className="signup-input"
          value={signupData.password_confirmation}
          onChange={handleSignupChange}
        />
        <br />
        <label type="imageUrl"> Profile Image </label> <br />
        <input
          type="text"
          id="imageUrl"
          className="signup-input"
          name="image_url"
          value={signupData.image_url}
          onChange={handleSignupChange}
        />
        <br />
        <button type="submit" id="signup-btn">
          Sign Up
        </button>
        <Link to={"/login"}>
          <span id="login-section"> Have an account already ? Login </span>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
