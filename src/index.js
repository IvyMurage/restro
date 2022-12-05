import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RestaurantProvider } from "./Components/RestaurantContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RestaurantProvider>
        <App />
      </RestaurantProvider>
    </BrowserRouter>
  </React.StrictMode>
);
