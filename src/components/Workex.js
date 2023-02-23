import React from 'react'
import './Experience.css';
import Experience from './Experience';
import 'animate.css';
export default function Workex() {
  return (
    <>
    <Experience/>
      <section className="timeline-section animate__fadeInDown animate__animated">
	<div className="timeline-items">

		<div className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">05/2022 - 07/2022,</div>
			<div className="timeline-content">
				<h3>Backend Developer Intern | NIA Agrocommodity Marketplace Pvt. Ltd. | Gurgaon,Haryana</h3>
				<p>My role was to develop one of their websites' backend,wheatbazar.com. </p>
			<p> We used Java MVC framework, Spring Boot for the backend
and MsSQL for database</p>
            </div>
		</div>

		
	</div>
</section>
    </>
  )
}
