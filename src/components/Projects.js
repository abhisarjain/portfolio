import React from "react";
import "./Projects.css";
import "animate.css";

export default function Projects() {
  const projects = " <Projects> ";
  const projectsend = "</Projects>";
  return (
    <>
      <div className="projects animate__fadeInDown animate__animated">
        <h1 className="h1projects"> {projects} </h1>
        <div className="listcards">
          <div className="items1">
            <div className="card">
              <img
                className="card-img-top"
                src="./portfolio.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>PORTFOLIO</b>
                </h5>
                <p className="card-text">
                  My portfolio website using the technologies Reactjs, Html and
                  css
                </p>
                <div className="extra-content">
                  <p>
                    The project is designed to showcase my professional
                    experience, skills, and accomplishments in a visually
                    appealing and easy-to-navigate format.
                  </p>
                  <p>
                    This project is built using ReactJS, a popular JavaScript
                    library for building user interfaces.
                  </p>
                  <p>Technologies Used: React.js</p>
                </div>
              </div>

              <div className="card-body">
                <a
                  href="https://github.com/abhisarjain/portfolio"
                  className="card-link"
                >
                  <b>GitHub</b>
                </a>
                {/* <a href="/" className="card-link">Another link</a> */}
              </div>
            </div>
          </div>
          <div className="items2">
            <div className="card">
              <img
                className="card-img-top"
                src="./ablogs.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>ABLOGS</b>
                </h5>
                <p className="card-text">
                  A blog website where CRUD opertions can be done using
                  technologies Django,Bootstrap, Beautifulsoup,API
                </p>
                <div className="extra-content">
                  <p>
                    I have developed a Blog website using Django which is one of
                    the most powerful frameworks written in Python. Here, users
                    can upload their blogs, and perform CRUD operations.
                  </p>
                  <p>The special features of the website are as follows:</p>
                  <p>1) Automated E-mail sending functionality to sign up.</p>
                  <p>2) User Login/Signup.</p>
                  <p>3) Dark Mode functionality.</p>
                  <p>4) Security.</p>
                  <p>5) Separate Admin portal.</p>
                  <p>6) Blogs Sorting functionality.</p>
                  <p>7) Dictionary API.</p>
                  <p>8) Web Scraping (News Headlines).</p>
                  <p>
                    Technologies Used : Django (MVT), API, Beautifulsoup,
                    dbsqlite
                  </p>
                </div>
              </div>

              <div className="card-body">
                <a
                  href="https://github.com/abhisarjain/ablogs"
                  className="card-link"
                >
                  <b>GitHub</b>{" "}
                </a>
                {/* <a href="/" className="card-link">Another link</a> */}
              </div>
            </div>
          </div>
        </div>
        <h1 className="h1projects"> {projectsend} </h1>
      </div>
    </>
  );
}
