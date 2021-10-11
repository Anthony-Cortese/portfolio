import React from "react";
import "./About.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="about">
      <div className="ab-tit">
        <h1 className="about-title">Say hi.</h1>
      </div>

      <div className="about-div">
        <div className="about-info">
          <Link>
            <h1 className="email">anthonykcortese@gmail.com</h1>
          </Link>
          <div className="about-para">
            <h1 className="line">___________</h1>
            <p>
              I love to design, create, and make new things. I am passionate,
              and am a highly motivated individual looking to carve my way into
              the tech field where I can showcase all my talents. I enjoy movies
              and television and I write and direct my own short independant
              films.
            </p>
          </div>
          <div className="locate">
            <p>Anthony Kennedy Cortese</p>
            <p>Provo, Utah</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/anthony-cortese/">
              {" "}
              <AiFillLinkedin className="icons" />
            </a>
            <a href="https://github.com/Anthony-Cortese">
              <AiFillGithub className="icons" />{" "}
            </a>
          </div>
        </div>
        {/* <div className="my-photo">
          <img
            className="tony"
            src="https://i.postimg.cc/hPcPpbnd/IMG-2781.jpg"
            border="0"
            alt="IMG-2781"
          />
        </div> */}
      </div>
    </div>
  );
}

export default About;
