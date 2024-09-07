import React from "react";
import "./work.css";

import workImg1 from "../../assets/work1.png";
import workImg2 from "../../assets/work2.png";
// import workImg3 from "../../assets/work3.jpg";
// import workImg4 from "../../assets/work3.jpg";
// import workImg5 from "../../assets/work4.jpg";
// import workImg6 from "../../assets/work5.jpg";

import ProjectCard from "./ProjectCard/ProjectCard";

const Work = () => {
  const projects = [
    {
      title: "Weather App",
      description: "A weather forecasting app with real-time updates.",
      technologies: ["React", "OpenWeatherMap API", "CSS"],
      imageUrl: workImg2,
      link: "https://code1705.github.io/Weather-App/",
      repoLink: "https://github.com/Code1705/Weather-App",
    },
    {
      title: "Sort Visualizer",
      description: "A web app to visualize sorting algorithms.",
      technologies: ["React", "CSS"],
      imageUrl: workImg1,
      link: "https://code1705.github.io/Sort--Visualizer/",
      repoLink: "https://github.com/Code1705/Sort--Visualizer",
    },
  ];

  return (
    <section id="works">
      <h2 className="workTitle">My Portfolio</h2>
      <span className="workDesc">
        Here are a few of the projects I have worked on. You can view more of my
        work on my github profile
      </span>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            link={project.link}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
