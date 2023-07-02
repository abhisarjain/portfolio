import React from 'react'
import "./Certifications.css";
import "animate.css";
export default function Certifications() {
    const certi = " <Certifications> ";
  const certisend = "</Certifications>";
  return (
    <>
      <div className="projects animate__fadeInDown animate__animated">
      <h1 className="h1projects"> {certi} </h1>
      <h1 className="h1projects"> {certisend} </h1>
      </div>
    </>
  )
}
