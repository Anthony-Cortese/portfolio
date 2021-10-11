import React from "react";
import { CgScreen } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import "./Projects.css";
import { CgFigma } from "react-icons/cg";

function Projects() {
  return (
    <div className="projects-div">
      <div className="projects-title">
        <h1 className="projects">Projects.</h1>
      </div>
      <div className="imdb">
        <div className="imdb-info">
          <h1 className="clone">IMDb Clone</h1>
          <img
            className="imdb-logo"
            src="https://i.postimg.cc/3rXxDhSY/Screen-Shot-2021-10-07-at-5-45-17-PM.png"
            border="0"
            alt="Screen-Shot-2021-10-07-at-5-45-17-PM"
          />
          <div className="imdb-para">
            <p>
              IMDb is my favorite website that I use daily, so I decided to
              build it out from scratch which you could call "my version". The
              website has a fully functional navigation bar, each button will
              take you to a new page. The play buttons will bring up a trailer
              on click, and on the IMDbTV page will do the same if you click on
              the movie poster. The website is fully responsive, and with a
              horizontal scroll the images will change-- and a final fun fact on
              the Coming Soon To Theatres section are 3 short films that I have
              personally directed!
            </p>
          </div>
          <div className="screen">
            <a href="https://github.com/Anthony-Cortese/IMDb-Clone">
              <AiFillGithub className="icons" />{" "}
            </a>
            <a href="https://akc-imdb.netlify.app/">
              <CgScreen className="icons" />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="two">
        <div className="family-promise">
          <div className="family-title">
            <h1 className="fp-text">Family Promise</h1>
            <h2>Service Tracker</h2>
          </div>
          <div className="family-info">
            <img
              className="family-img"
              src="https://i.postimg.cc/90VnrK1F/Screen-Shot-2021-10-07-at-10-04-05-PM.png"
              border="0"
              alt="Screen-Shot-2021-10-07-at-5-31-56-PM"
            />
            <div className="fam-para">
              <p>
                Family Promise is a non-profit organization geared to help
                homeless people get off the street and into self-reliant,
                sustainable situations. One of the ways they accomplish that
                mission is by offering a variety of services. This app was a
                tracker for services offered, and a tool for various positions
                at the organization to see recipients of services, what stage in
                their journey they were on, what other services they were
                eligible for and much more.
              </p>
            </div>

            <div className="view">
              <a href="https://github.com/Lambda-School-Labs/family-promise-service-tracker-fe-a">
                <AiFillGithub className="icons" />{" "}
              </a>
              <a href="https://www.figma.com/proto/iM4t3H148ndBvVf8WmkTuO/Family-Promise?node-id=24%3A10&starting-point-node-id=24%3A10&scaling=scale-down">
                <CgFigma className="icons" />{" "}
              </a>{" "}
              <a href="www.familypromise.com">
                <CgScreen className="icons" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="family-promise1">
          <div className="family-title1">
            <h1>Family Promise Service Tracker</h1>
          </div>
          <p>
            being a huge fan of the website I built out the entire front page
          </p>
          <a href="https://github.com/Anthony-Cortese">
            <AiFillGithub className="icons" />{" "}
          </a>
          <a href="https://www.figma.com/proto/iM4t3H148ndBvVf8WmkTuO/Family-Promise?node-id=24%3A10&starting-point-node-id=24%3A10&scaling=scale-down">
            <CgFigma className="icons" />{" "}
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Projects;
