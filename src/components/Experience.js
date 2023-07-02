import React, { Suspense } from 'react';
import "./Experience.css";
import Workex from "./Workex"
const OtherComponent = React.lazy(() => import('./Eduex'));
export default function Experience() {
  
  
  return (
    <>

{/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
</nav> */}
 
<Workex/>

{/* <Eduex/> */}
<Suspense fallback={<div>Loading...</div>}>
<OtherComponent/>
</Suspense>
      
    </>
  )
}
