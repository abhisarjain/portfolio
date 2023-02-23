import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
export default function Header() {
  
  return (
    <><div className="container my-3">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark nb">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Abhisar Jain</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/skills">Skills</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/educationexperience">Experience</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        
      </ul>
      
    </div></div></nav>
  </div>


  







</>

  )
}
