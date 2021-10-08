import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-div">
      <div className="projects-title">
        <h1 className="projects">Projects.</h1>
      </div>
      <div className="imdb">
        <div className="imdb-info">
          <h1>IMDb Clone</h1>
          <img
            className="imdb-logo"
            src="https://i.postimg.cc/3rXxDhSY/Screen-Shot-2021-10-07-at-5-45-17-PM.png"
            border="0"
            alt="Screen-Shot-2021-10-07-at-5-45-17-PM"
          />
          <h2>Built from scratch</h2>
          <p>
            being a huge fan of the website I built out the entire front page
          </p>
          <a href="https://github.com/Anthony-Cortese">
            <AiFillGithub className="icons" />{" "}
          </a>
        </div>
      </div>
      <div className="two">
        <div className="family-promise">
          <div className="family-title">
            <h1>Family Promise Service Tracker</h1>
          </div>
          <div className="family-info">
            <img
              className="family-img"
              src="https://i.postimg.cc/QxgKs1Gg/Screen-Shot-2021-10-07-at-5-31-56-PM.png"
              border="0"
              alt="Screen-Shot-2021-10-07-at-5-31-56-PM"
            />
            <p>
              Family Promise is a non-profit organization geared to help
              homeless people get off the street and into self-reliant,
              sustainable situations. One of the ways they accomplish that
              mission is by offering a variety of services. This app was a
              tracker for services offered, and a tool for various positions at
              the organization to see recipients of services, what stage in
              their journey they were on, what other services they were eligible
              for and much more.
            </p>
            <a href="https://github.com/Anthony-Cortese">
              <AiFillGithub className="icons" />{" "}
            </a>
          </div>
        </div>
        <div className="family-promise">
          <div className="family-title">
            <h1>Family Promise Service Tracker</h1>
          </div>
          <p>
            being a huge fan of the website I built out the entire front page
          </p>
          <a href="https://github.com/Anthony-Cortese">
            <AiFillGithub className="icons" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
