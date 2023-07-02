import React from "react";
import "./Skills.css";
import "animate.css";
export default function Skills() {
  const skills = " <Skills> ";
  const skillsend = "</Skills>";
  return (
    <>

      <div className="skills animate__fadeInDown animate__animated">
        <h1 className="h1skill"> {skills} </h1>
        <div className="listing">
          <div className="item1">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./java.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>JAVA</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item2">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./python.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>PYTHON</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item3">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./django.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>DJANGO</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item4">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./react1.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>REACT</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item5">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./spring.svg" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>SPRING</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item6">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./mysql.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>MySQL</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item7">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./dsa.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>DSA</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item8">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./html.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item9">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./css.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item10">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./dbms.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>DBMS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="h1skill">{skillsend}</h1>
  
      </div>
      
    </>
  );
}
