import React from "react";
import "./LoginForm.css"

export default function LoginForm() {
  return (
    <div className="login-div">
      <div className="login-img">
        <img src="./images/table-setting.jpg" alt="restaurant table" />
      </div>
      <form className="login-form">
        <label htmlFor="username"> Username</label>
        <br />
        <input type="text" name="username" />
        <br />
        <label htmlFor="password"> Password</label>
        <br />
        <input type="password" name="password" />
        <br/>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}
