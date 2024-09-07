import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/name.png";
import contact from "../../assets/contact.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu_icon.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMobileScreen = window.matchMedia("(max-width: 768px)").matches;

  return (
    <nav className="navbar">
      <Link to="intro" offset={-100} smooth={true} duration={1000}>
        <img src={logo} alt="logo" className="navbarLogo" />
      </Link>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          className="desktopMenuListItem"
          spy={true}
          to="intro"
          offset={-100}
          smooth={true}
          duration={1000}>
          {" "}
          Home{" "}
        </Link>
        <Link
          activeClass="active"
          className="desktopMenuListItem"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}>
          About
        </Link>
        <Link
          activeClass="active"
          className="desktopMenuListItem"
          to="works"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}>
          Portfolio
        </Link>
      </div>
      <Link
        activeClass="active"
        className="desktopMenuButton"
        to="contact-me"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}>
        <img src={contact} alt="" className="desktopMenuImg" />
        Contact Me
      </Link>
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className="navMenu"
        style={{ display: isMobileScreen && showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          className="listItem"
          spy={true}
          to="intro"
          offset={-100}
          smooth={true}
          duration={1000}
          onClick={() => setShowMenu(false)}>
          {" "}
          Home{" "}
        </Link>
        <Link
          activeClass="active"
          className="listItem"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onClick={() => setShowMenu(false)}>
          About
        </Link>
        <Link
          activeClass="active"
          className="listItem"
          to="works"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          onClick={() => setShowMenu(false)}>
          Portfolio
        </Link>
        <Link
          activeClass="active"
          className="listItem"
          to="contact-me"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          onClick={() => setShowMenu(false)}>
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
