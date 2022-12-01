import React from "react";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <Logo />
      <span id="copy-right">CopyRight@2022</span>
      <div className="social-icons">
        <Icon icon="ri:facebook-fill" className="social-icon" />
        <Icon icon="ri:instagram-line" className="social-icon" />
        <Icon icon="ri:twitter-fill" className="social-icon" />
      </div>
    </footer>
  );
}
