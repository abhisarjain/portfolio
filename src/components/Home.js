import React from 'react'
// import img from './images/image.jpg';
import "./Home.css";
import Fade from 'react-reveal/Fade';
import 'animate.css';
export default function Home() {
    return (
        <>
        
            <div className="home animate__animated animate__zoomIn">
             
                <div className=" img">
                    <img className='imgg' src="./image.jpg" alt="" />
                </div>

                <div className="written">
                    <h1 className='typed'> <b> Hi, I am Abhisar Jain</b></h1>
                     <h4>A self-motivated and patient student
                        pursuing B.Tech in Computer Science (Data Science Specialization) and having great interest in Full Stack Development, seek
                        a position at a company that will allow
                        exploring career options in the IT sector.</h4>
                </div>

            </div>

            <div className='links'>
            <a href="https://www.linkedin.com/in/abhisar-jain-00b020186/">
            <div className="itemslink">
                
                <img className='handle' src="./linkedin.png" alt="" />
            </div></a>
            <a href="https://github.com/abhisarjain/">
            <div className="itemslink">
            <img className='handle' src="./github.png" alt="" />
            </div></a>
            <a href="https://www.instagram.com/abhisarjain/">
            <div className="itemslink">
            <img className='handle' src="./instagram.png" alt="" />
            </div></a>
              
            </div>
        </>
    )
}
