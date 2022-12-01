import React from "react";
import "./Signup.css";

function SignUp() {
  return (
    <div className="signup-div">
      <form className="signup-form">
        <label> Username </label> <br />
        <input
          type="text"
          name="username"
          autoComplete="off"
          className="signup-input"
        />
        <br />
        <label htmlFor="password"> Password </label> <br />
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          className="signup-input"
        />
        <br />
        <label type="password"> Password Confirmation </label> <br />
        <input
          type="password"
          name="password-confirmation"
          autoComplete="current-password"
          className="signup-input"
        />
        <br />
        <label type="imageUrl"> Profile Image </label> <br />
        <input type="text" id="imageUrl" className="signup-input" />
        <br />
        <button type="submit" id="signup-btn">
          Sign Up
        </button>
        <span id="login-section"> Have an account already? Login</span>
      </form>
    </div>
  );
}

export default SignUp;
