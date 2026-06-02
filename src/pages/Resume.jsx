import React from 'react'
import './Pages.css'

const Resume = () => {
  return (
    <div className="resume-main">
      
        <br /> <br /> 
      
      <div className="title-1">
        <br /><br /> <br /><br /><br />

      
        <h1>One Page Resume</h1> <br /><br /> 
      </div> 
      <br />
      
      <div className="resume-file">
        <img src="/resume.jpeg" alt="One page resume image" />
      </div> <br />
      <div className="download-resume">

      <a href="/Kabindra_Bohara_G_Resume_22_05_2026.pdf" download>Download One Page</a>
      <a href="/kabindra_bohara_ATS_2026.pdf" download>Download ATS</a>
      
      </div>

      <br /><br />

      <div className="title-1">
        <br /><br /> <br /><br /><br />

      
        <h1>Video Resume</h1>
      </div>

<br /><br />

      <div className="resume-video">
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/xE02X2RR_Eg?si=2-ZvREHrWRjapbBP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        <img src="public/project-na.jpeg" alt="" />
      </div>

      <br /><br />
      
    </div>
  )
}

export default Resume