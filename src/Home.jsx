import React from "react";
import "./Home.css";
import bn1 from "./bn1.svg";

function Home() {
  return (
    <>
      <div className="NavBar">
        <div className="homeHeading">
          <img
            src="../public/LOGO2.png"
            width="50rem"
            height="50rem"
            alt="logo"
            style={{ position: "absolute", top: "18px", left: "50px" }}
          />
          <br />
        </div>

        <div className="leftNav">
          <span>Home</span>
          <span>About</span>
          <span>Explain</span>
          <span>Suggestion</span>
          <span>Activity</span>
          <span>Community</span>
        </div>
      </div>

      <div className="banner">
        <div>
          <button type="" className="bn1">
            Digital Marketing Agency
          </button>
          <h1>
            Advanced analytics to <br /> grow your business
          </h1>
          <p className="pcf">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="btflex">
            <button className="btn">Get Started</button>
            <button className="btn2">How it Works</button>
          </div>
        </div>
        <div >
          <img src={bn1} alt="err" id="imga" />

        </div>
      </div>
    </>
  );
}

export default Home;
