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
          <h3>Front-End</h3>
          <ul className="fe-tech">
            <li>Javascript</li>
            <li>React JS</li>
            <li>HTML(5)</li>
            <li>Redux</li>
            <li>CSS(3)</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap(4)</li>
            <li>Jest</li>
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
          <h3>Back-end</h3>
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
        <div className="tools">
          <h3>Tools</h3>
          <ul className="tools-tech">
            <li>Github</li>
            <li>Postman</li>
            <li>npm</li>
            <li>Trello</li>
            <li>Slack</li>
            <li>Docker</li>
            <li>Agile Workflow</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tech;
