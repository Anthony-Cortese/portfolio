import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="main-nav">

      <div className="nav-links">
        {/* <Link to="/"> */}
        <nav>home</nav>
        {/* </Link> */}
        {/* <Link to="/AboutMe"> */}
        <nav>about me</nav>
        {/* </Link> */}
        {/* <Link to="/Projects"> */}
        <nav>projects</nav>
        {/* </Link> */}
        {/* <Link to='/Contact'><nav>contact</nav></Link> */}
        <nav>resume</nav>
        <a href="https://www.linkedin.com/in/anthony-cortese/">
          {" "}
          <AiFillLinkedin className="icons" />
        </a>
        <a href="https://github.com/Anthony-Cortese">
          <AiFillGithub className="icons" />{" "}
        </a>
      </div>

      <div className="nav-icons"></div>
    </div>
  );
}

export default Navbar;
