import React from 'react'
import './Experience.css';
import 'animate.css';
export default function Workex() {
	const contact = "<Work Experience>";
	const contactend = "</Work Experience>";
  return (
    <>
    {/* <Experience/> */}
	
      <section className="timeline-section animate__fadeInDown animate__animated">
	  <h1 className='workex'>{contact}</h1>
	<div className="timeline-items">

	<div className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">08/2023 - Present</div>
			<div className="timeline-content">
				<h3>Software Engineer | Volkswagen Group Technology Solutions | Pune,India</h3>
				
		    </div>
		</div>




		<div className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">05/2022 - 07/2022</div>
			<div className="timeline-content">
				<h3>Backend Developer Intern | NIA Agrocommodity Marketplace Pvt. Ltd. | Gurgaon,Haryana</h3>
				<p>1) As a Backend Developer Intern at the Company, I worked for two months on developing the backend of their website wheatbazar.com. </p>
			<p>2) I utilized the technologies Spring Boot and MsSQL to build the website's backend, ensuring that it was scalable, efficient, and user-friendly.</p>
           <p>3) I gained valuable experience in software development, project management, and team collaboration, and contributed to the success of the wheatbazar.com project.</p>
		   <p> <b>Skills: </b> Spring Boot · Microsoft SQL Server</p>
		    </div>
		</div>

		
	</div>
	<h1 className='workex my-5'>{contactend}</h1>
</section>

    </>
  )
}
