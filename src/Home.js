import React from 'react';
import './home.css';
import self from './self.jpg';



  
function home() {
  return (
    <>
    <nav>
    <div id='nav-link'>
    <div className='nav'>
    <div className='header'>
    <h1>i<span>GLOVER</span></h1>
    </div>
    <ul>
        <li><a href="home.html">HOME</a></li>
        <li><a href="skill.html">SKILLS</a></li>
        <li><a href='service.html'>SERVICE</a></li>
        <li><a href='about.html'>ABOUT</a></li>
    </ul>
    </div>
    </div>
    </nav>
    <div class="section">
            <div class="intro">
                <h2
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="600">HI I'M <span>IAN TITUS-GLOVER,</span></h2>
                <h3 id="typing-text"
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="600">FRONTEND DEVELOPER</h3>
                <h4
                data-aos="fade-left"
                data-aos-delay="700"
                data-aos-duration="700">Hi! I'm front-end developer with a passion for building beautiful, 
                    user-friendly websites. With experience in React, I'm confident that I
                    can help bring your website to life. Let's work together to build something great!</h4>
                    <div className='interact-section'>
                        <div className='img'
                        data-aos="zoom-in"
                        data-aos-delay="600"
                        data-aos-duration="900">
                        <img  src={self.jpg} alt="self"/>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="rgb(97, 210, 230)" d="M59.5,-60.4C71.9,-47.1,73.2,-23.6,69.3,-4C65.3,15.6,56.1,31.2,43.7,47.5C31.2,63.7,15.6,80.6,-0.5,81.1C-16.6,81.6,-33.2,65.7,-44.6,49.4C-56,33.2,-62.3,16.6,-62.9,-0.6C-63.5,-17.7,-58.3,-35.5,-46.9,-48.8C-35.5,-62.1,-17.7,-71,2.9,-73.9C23.6,-76.8,47.1,-73.7,59.5,-60.4Z" transform="translate(100 100)" />
                    </svg>

                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'
            data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="700">
                <h5>LET'S WORK TOGETHER TO BUILD SOMETHING GREAT!</h5>
                <p>©: GLOVER-Dev</p>
            </div>
            <div className='links'>
            <a href="https://github.com/Ianglover1"><i class="fa-brands fa-twitter"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="400"></i></a>
                <a href="https://github.com/Ianglover1"><i class="fa-brands fa-github"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="500"></i></a>
            <a href="mailto:ianglover31@gmail.com"><i class="fa-regular fa-envelope"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="600"></i></a>
            <a href="https://instagram.com/_glover.jnr?igshid=NTc4MTIwNjQ2YQ=="><i class="fa-brands fa-instagram"
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="700"></i></a>
            </div>
    </>
 );
}

export default home;