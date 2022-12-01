import React from "react";
import { Icon } from "@iconify/react";

export default function Search() {
  return (
    <form className="search-form">
      <Icon icon="material-symbols:search" className="search-icon" />
      <input type="text" placeholder="Search" id="search" />
    </form>
  );
}
