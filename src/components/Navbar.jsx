import React from "react";
import ArrowIcon from "./Icons/ArrowIcon";
import RedirectIcon from "./Icons/RedirectIcon";

const Navbar = () => {
  return (
    <div className="navbar-outer-component">
      <div className="company-logo"> 𝒱𝒾𝒿𝒶𝓎 𝒦𝓊𝓂𝒶𝓇 𝒮𝒾𝓃𝑔𝒽</div>
      <div className="right-menu-container">
        <div className="menu">
          Menu
          <ArrowIcon />
        </div>
        <div className="contact-us">Contact Us</div>
        <div className="share-link">
          <RedirectIcon />
          Share Link
        </div>
      </div>
    </div>
  );
};

export default Navbar;
