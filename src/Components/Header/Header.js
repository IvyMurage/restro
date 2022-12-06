import React, { useState } from "react";
import Logo from "./Logo";
import "./Header.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";

export default function Header({ loggedUser }) {
  const [header, setHeader] = useState(false);
  const { handleLogoutClick } = useContext(RestaurantContext);

  function changeBackground() {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={header ? "header active" : "header"}>
      <Logo />
      <Link to={"/"}>
        <h3> Restaurants </h3>
      </Link>
      <Search />
      {loggedUser ? (
        <button className="header-login" onClick={handleLogoutClick}>
          Log out
        </button>
      ) : (
        <Link to={"/login"}>
          <button className="header-login">Login</button>
        </Link>
      )}

      <Link to={"/signup"}>
        <button className="header-sign">Sign Up</button>
      </Link>
      {loggedUser ? (
        <button className="user-profile">
          {loggedUser.username.charAt(0)}
        </button>
      ) : null}
    </header>
  );
}
