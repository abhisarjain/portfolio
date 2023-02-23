import React from 'react'
import './Experience.css';
import Experience from './Experience';
import 'animate.css';
export default function Eduex() {
  return (
    <>
      <Experience/>


      <section className="timeline-section animate__fadeInDown animate__animated">
	<div className="timeline-items">

    <div className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">2019 - Present</div>
			<div className="timeline-content">
				<h3>Bachelor of Technology in Computer Science (Data Science Specialization) | The Northcap University | Gurgaon, Haryana</h3>
				<p>CURRENT CGPA : 8.8  </p>
			</div>
		</div>
		

		<div className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">2018 - 2019</div>
			<div className="timeline-content">
				<h3>12th Grade | Heeralal Public School | Delhi</h3>
				<p>Percentage: 85.2% </p>
			</div>
		</div>

		

        <div className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">2016-2017</div>
			<div className="timeline-content">
				<h3>10th Grade | Shree Krishna Pranami Public School | Hansi,Haryana</h3>
				<p>CGPA : 9.6 </p>
			</div>
		</div>

		
	</div>
</section>
    </>
  )
}
