import React from 'react'
import './Projects.css'
import 'animate.css';


export default function Projects() {

    const projects = " <projects> "
  const projectsend = "</projects>"
  return (
    <>
      <div className="projects animate__fadeInDown animate__animated">
      <h1 className='h1projects'> {projects} </h1>
      <div className="listcards">

        <div className="items1"><div className="card">
  <img className="card-img-top" src="./portfolio.png" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title"><b>PORTFOLIO</b></h5>
    <p className="card-text">My portfolio website using the technologies Reactjs, Html and css</p>
  </div>
  
  <div className="card-body">
    <a href="https://github.com/abhisarjain/portfolio" className="card-link"><b>GitHub</b></a>
    {/* <a href="/" className="card-link">Another link</a> */}
  </div>
</div></div>
        <div className="items2"><div className="card">
  <img className="card-img-top" src="./ablogs.png" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title"><b>ABLOGS</b></h5>
    <p className="card-text">A blog website where CRUD opertions can be done using technologies Django,Bootstrap, Beautifulsoup,API</p>
  </div>
  
  <div className="card-body">
    <a href="https://github.com/abhisarjain/ablogs" className="card-link"><b>GitHub</b> </a>
    {/* <a href="/" className="card-link">Another link</a> */}
  </div>
</div></div>
        
       

      </div>
      <h1 className='h1projects'> {projectsend} </h1>
        
        </div>
    </>
  )
}
