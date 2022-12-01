import React from "react";
import Logo from "./Logo";
import "./Header.css";
import Search from "./Search";

export default function Header() {
  return (
    <header>
      <Logo />
      <h3> Restaurants </h3>
      <Search />
      <button className="header-login">Login</button>
      <button className="header-sign">Sign Up</button>
    </header>
  );
}
