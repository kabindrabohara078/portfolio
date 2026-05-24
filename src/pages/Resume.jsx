import React from 'react'
import './Pages.css'

const Resume = () => {
  return (
    <div className="resume-main">


      

      <div className="title-1">
        <br /><br /> <br /><br /><br />

      
        <h1>Video Resume (dummy)</h1> <br /><br />
      </div>
      <div className="resume-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xE02X2RR_Eg?si=2-ZvREHrWRjapbBP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>  <br /> <br />  <br /><br /><br />
      
      <div className="title-1">
        <br /><br /> <br /><br /><br />

      
        <h1>One Page Resume</h1> <br /><br />
      </div>
      
      <div className="resume-file">
        <img src="/resume.png" alt="One page resume image" />
      </div>
      <div className="download-resume">

      <a href="/Kabindra_Bohara_G_Resume_22_05_2026.pdf" download>Download Resume</a>
      </div>
    </div>
  )
}

export default Resume