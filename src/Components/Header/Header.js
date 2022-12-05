import React from "react";
import Logo from "./Logo";
import "./Header.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";

export default function Header() {
  const { loginStatus, handleLogoutClick } = useContext(RestaurantContext);
  return (
    <header>
      <Logo />
      <Link to={"/"}>
        <h3> Restaurants </h3>
      </Link>
      <Search />

      <Link to={"/login"}>
        <button className="header-login" onClick={handleLogoutClick}>
          {loginStatus ? "Log Out" : " Login"}
        </button>
      </Link>
      <Link to={"/signup"}>
        <button className="header-sign">Sign Up</button>
      </Link>
    </header>
  );
}
