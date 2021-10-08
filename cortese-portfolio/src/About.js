import React from "react";
import "./About.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
function About() {
  return (
    <div className="about">
      <div className="ab-tit">
        <h1 className="about-title">Say hi.</h1>
      </div>

      <div className="about-div">
        <div className="about-info">
          <h1>anthonykcortese@gmail.com</h1>
          <p>
            I am a passionate, and highly motivated individual looking to carve
            my way into the tech field where I can showcase my previous skills
            in combination with my proficiency with React.js, Redux, HTML, CSS,
            Node.js, and Express. Through the years I've developed strong
            communication, problem-solving, and time management skills. I am
            interested in and passionate about learning new languages and
            technologies, improving my own development process to align with
            industry-standard best practices, developing new relationships, and
            building and improving innovative software.
          </p>
          <p>Anthony Kennedy Cortese</p>
          <p>Provo, Utah</p>
          <a href="https://www.linkedin.com/in/anthony-cortese/">
            {" "}
            <AiFillLinkedin className="icons" />
          </a>
          <a href="https://github.com/Anthony-Cortese">
            <AiFillGithub className="icons" />{" "}
          </a>
        </div>
        {/* <div className="img-about">
          <img
            className="blue"
            src="https://i.postimg.cc/Zn2L4VyR/portfolio-tony.png"
            border="0"
            alt="bkg"
          />
        </div> */}
      </div>
    </div>
  );
}

export default About;
