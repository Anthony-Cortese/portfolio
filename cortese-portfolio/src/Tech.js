import React from "react";
import "./Tech.css";

function Tech() {
  return (
    <div className="tech-div">
      <div className="info-div">
        <h1 className="tech-title">Tech.</h1>
      </div>
      <div className="all-lang">
        <div className="frontend">
          <div className="be-img">
            <img
              className="be-i"
              src="https://i.postimg.cc/HxB7G7JW/Group-1.png"
              border="0"
              alt="Group-1"
            />
          </div>
          <h3 className="tech-font">Front-End</h3>
          <ul className="fe-tech">
            <span>
              <li>Javascript</li>
            </span>
            <span>
              <li>React JS</li>
            </span>
            <span>
              <li>HTML(5)</li>
            </span>
            <span>
              <li>Redux</li>
            </span>
            <span>
              <li>CSS(3)</li>
            </span>
            <span>
              <li>Tailwind CSS</li>
            </span>
            <span>
              <li>Bootstrap(4)</li>
            </span>
            <span>
              <li>Jest</li>
            </span>
            {/* <li>React Testing Library</li> */}
            <li>Cypress</li>
          </ul>
        </div>
        <div className="backend">
          <div className="be-img">
            <img
              className="be-i"
              src="https://i.postimg.cc/HxB7G7JW/Group-1.png"
              border="0"
              alt="Group-1"
            />
          </div>
          <h3 className="tech-font">Back-end</h3>
          <ul className="be-tech">
            <li>Express</li>
            <li>Node JS</li>
            <li>Python</li>
            <li>Firebase</li>
            {/* <li>Restful Web Services</li> */}
            <li>Api | Ajax</li>
            <li>CRUD</li>
            <li>Knex</li>
            <li>SQL</li>
            <li>SQLite(3)</li>
          </ul>
        </div>
      </div>
      <div className="tools-design">
        <div className="design">
          <div className="be-img">
            <img
              className="be-i2"
              src="https://i.postimg.cc/SRGT0DLX/Group-1.png"
              border="0"
              alt="Group-1"
            />
          </div>
          <h3 className="tech-font">Design</h3>
          <ul className="tools-tech">
            <li>Adobe Premiere Pro</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe XD</li>
            <li>Figma</li>
            <li>Whimsical</li>
            {/* <li>Docker</li>
            <li>Agile Workflow</li> */}
          </ul>
        </div>
        <div className="tools">
          <div className="be-img">
            <img
              className="be-i"
              src="https://i.postimg.cc/HxB7G7JW/Group-1.png"
              border="0"
              alt="Group-1"
            />
          </div>
          <h3 className="tech-font">Tools</h3>
          <ul className="tools-tech">
            <li>Github</li>
            <li>Postman</li>
            <li>npm</li>
            <li>Trello</li>
            {/* <li>Slack</li> */}
            <li>Docker</li>
            <li>Agile Workflow</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tech;
