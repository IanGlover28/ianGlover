import React from "react";
import './about.css';


function About() {
    return (
      <>
        <div className="banner"><img  src={wall} alt="fireSpot"/></div>
    <div className="nav-link">
    <div className="header">
    <h2>i<span>GLOVER</span></h2>
    
    </div>
     <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="skills.html">skills</a> </li>
                <li><a href="services.html">Services</a></li>
            </ul>
            </div>
      </>
    );
}

export default About;