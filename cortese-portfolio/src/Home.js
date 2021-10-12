import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-div">
      <div className="fontpage-display">
        <h4 className="logo-1">Anthony Cortese</h4>
      </div>
      {/* <div className="name">
        <span className="first">Anthony</span>
      </div>
      <div className="name1">
        <span className="middle">Kennedy</span>
      </div>
      <div className="name2">
        <span className="last">Cortese</span>
      </div> */}

      <div className="img-div">
        <img
          className="home-img"
          src="https://i.postimg.cc/7Z8GvmRY/Untitled-AKC.png"
          border="0"
          alt="Untitled-AKC"
        />

        <div className="fe-dev">
          <span className="fe"> Front-End Web Developer</span>
        </div>

        {/* <img
          className="home-img"
          src="https://i.postimg.cc/Zn2L4VyR/portfolio-tony.png"
          border="0"
          alt="portfolio-tony"
        /> */}
      </div>
    </div>
  );
}

export default Home;
