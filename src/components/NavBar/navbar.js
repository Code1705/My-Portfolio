import React from "react";
import "./navbar.css";
import logo from "../../assets/name.jpg";
import contact from "../../assets/contact.png";
import { Link } from "react-scroll";

const navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navbarLogo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
      </div>
      <button className="desktopMenuButton">
        <img src={contact} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default navbar;
