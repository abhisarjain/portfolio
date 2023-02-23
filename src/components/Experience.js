import React from 'react'
import { Link } from 'react-router-dom';
import "./Experience.css";
export default function Experience() {
  return (
    <>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container justify-content-center">
  <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
    <ul class="navbar-nav ms-auto">
      
      <li class="nav-item mx-3">
        <Link class="nav-link " to="/educationexperience">Education Experience</Link>
      </li>
      <li class="nav-item mx-5">
        <Link class="nav-link" to="/workexperience">Work Experince</Link>
      </li>
     
    </ul>
  </div></div>
</nav>
      
    </>
  )
}
