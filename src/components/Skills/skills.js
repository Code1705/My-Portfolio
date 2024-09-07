import "./skills.css";
import webImg from "../../assets/web_icon.jpg";
import uiImg from "../../assets/ui.jpg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        {" "}
        I have a passion for web development and love to create visually
        appealing websites. I am always eager to learn new technologies and
        improve my skills.I am proficient in HTML, CSS, JavaScript and React
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={webImg} alt="webImage" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>This is my main skill and I am proficient in it</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={uiImg} alt="Ui Img" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX design</h2>
            <p>This is a skill that I am currently learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
