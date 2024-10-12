import React from "react";
import "./Skills.css";
import "animate.css";
export default function Skills() {
  const skills = " <Skills> ";
  const skillsend = "</Skills>";
  const otherskills = " <Other Skills> ";
  const otherskillsend = "</Other Skills>";
  return (
    <>
      <div className="skills animate__fadeInDown animate__animated">
        <h1 className="h1skill"> {skills} </h1>
        <div className="listing">
          <div className="item1">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./springboot.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>SPRING BOOT</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item4">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./react.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>REACT</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item2">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./aws.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>AMAZON WEB SERVICES</h3>
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
          <div className="item6">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./redis.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <h3>REDIS</h3>
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
        </div>

        <h1 className="h1skill">{skillsend}</h1>
        {/* <h1 className="h1skill"> {otherskills} </h1>
        <div className="listing"></div>
        <h1 className="h1skill">{otherskillsend}</h1> */}
      </div>
    </>
  );
}
