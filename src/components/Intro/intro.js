import React from "react";
import bg from "../../assets/website_design.png";
import btnImg from "../../assets/hire_me.jpg";
import "./intro.css";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Sikta Mondal</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">
          I am currently pursuing B.Tech in Information Technology and am
          interested in software development. My areas of interest include
          building solution for real life problems using variety of
          technologies, want to be a full stack developer.
          <br />
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" />
            {/* Hire Me */}
          </button>
        </Link>
        <img src={bg} alt="Profile" className="bg" />
      </div>
    </section>
  );
};

export default Intro;
