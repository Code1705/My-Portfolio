import React from "react";
import bg from "../../assets/website_design.png";
import "./intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="">Hello</span>
        <span className="introText">
          I'm <span className="introName">Sikta Mondal</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">
          I am currently pursuing B.Tech in Information Technology
          <br /> and am interested in software development.
          <br />
          My areas of interest include building solution for real life problems
          <br />
          using variety of technologies, want to be a full stack developer.
          <br />
        </p>
        <img src={bg} alt="Profile" className="bg" />
      </div>
    </section>
  );
};

export default Intro;
