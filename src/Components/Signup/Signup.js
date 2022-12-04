import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Signup.css";

function SignUp() {
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
      Navigate("/");
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
  return (
    <div className="signup-div">
      <form className="signup-form" onSubmit={handleSubmitSignupDetails}>
        <label> Username </label> <br />
        <input
          type="text"
          name="username"
          autoComplete="off"
          className="signup-input"
          value={signupData.username}
          onChange={handleSignupChange}
        />
        {signupError.length > 0 ? (
          <p style={{ color: "red", fontSize: "15px" }}>
            {signupError.find((error) => error.includes("Username"))}!!!
          </p>
        ) : null}
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
        {signupError.length > 0 ? (
          <p style={{ color: "red", fontSize: "15px" }}>
            {signupError.find((error) => error.includes("Password"))}!!!
          </p>
        ) : null}
        <br />
        <label type="password"> Password Confirmation </label> <br />
        <input
          type="password"
          name="password_confirmation"
          autoComplete="current-password"
          className="signup-input"
          value={signupData.password_confirmation}
          onChange={handleSignupChange}
        />
        {signupError.length > 0 ? (
          <p style={{ color: "red", fontSize: "15px" }}>
            {signupError.find((error) => error.includes("confirmation"))}!!!
          </p>
        ) : null}
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
          {signupLoading ? "Loading..." : "Sign Up"}
        </button>
        <Link to={"/login"}>
          <span id="login-section"> Have an account already ? Login </span>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
