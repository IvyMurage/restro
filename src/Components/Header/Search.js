import React, { useContext} from "react";
import { Icon } from "@iconify/react";
import { RestaurantContext } from "../RestaurantContext";

export default function Search() {
  const { search, handleSearchChange } = useContext(RestaurantContext);

  return (
    <form className="search-form">
      <Icon icon="material-symbols:search" className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        id="search"
        value={search}
        onChange={handleSearchChange}
      />
    </form>
  );
}
