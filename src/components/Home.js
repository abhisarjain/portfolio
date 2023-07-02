import React from "react";
import "./Home.css";
import "animate.css";
export default function Home() {
  return (
    <>
      <div className="home animate__animated animate__zoomIn">
        <div className=" img">
          <img className="imgg" src="./whatsappdp.jpg" alt="" />
        </div>

        <div className="written">
          <h1 className="typed">
            {" "}
            <b> Hi, I am Abhisar Jain</b>
          </h1>
          {/* <h1 className='typed2'> <b> Hi, I am Abhisar Jain</b></h1> */}
          <h4>
            I am a recent graduate with a B.Tech degree in Computer Science,
            specializing in Data Science. Throughout my academic journey, I have
            been a self-motivated and patient student, driven by my passion for
            technology and its applications. I have developed a keen interest in
            Full Stack Development and am eager to explore career opportunities
            in the IT sector.
          </h4>
        </div>
      </div>

      <div className="links">
        <a href="https://www.linkedin.com/in/abhisar-jain-00b020186/">
          <div className="itemslink">
            <img className="handle" src="./linkedin.png" alt="" />
          </div>
        </a>
        <a href="https://github.com/abhisarjain/">
          <div className="itemslink">
            <img className="handle" src="./github.png" alt="" />
          </div>
        </a>
        <a href="https://www.instagram.com/abhisarjain/">
          <div className="itemslink">
            <img className="handle" src="./instagram.png" alt="" />
          </div>
        </a>
        <a href="https://www.hackerrank.com/abhisarjain?hr_r=1">
          <div className="itemslink">
            <img className="handle" src="./hack.png" alt="" />
          </div>
        </a>
        <a href="https://leetcode.com/abhisarjain/">
          <div className="itemslink">
            <img className="handle" src="./leetcode.png" alt="" />
          </div>
        </a>
      </div>
    </>
  );
}
