import React from "react";
import Logo from "./Logo";
import "./Header.css";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Logo />
      <h3> Restaurants </h3>
      <Search />
      <Link to={"/login"}>
        <button className="header-login">Login</button>
      </Link>
      <Link to={"/signup"}>
        <button className="header-sign">Sign Up</button>
      </Link>
    </header>
  );
}
