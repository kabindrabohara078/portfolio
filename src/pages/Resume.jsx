import './Pages.css'

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-section">
        <div className="section-header">
          <h1>My Resume</h1>
          <p>View and download my professional credentials</p>
        </div>

        <div className="resume-preview-container">
          <div className="resume-file">
            <img src="/resume.jpeg" alt="One Page Resume Preview" />
          </div>
          
          <div className="download-resume">
            <a href="/Kabindra_Bohara_G_Resume_22_05_2026.pdf" download className="btn-primary">
              Download One Page
            </a>
            <a href="/kabindra_bohara_g_ats_july_2026.pdf" download className="btn-secondary">
              Download ATS Version [latest]
            </a>
          </div>
        </div>
      </div>

      <div className="resume-section video-section">
        <div className="section-header">
          <h2>Video Resume</h2>
          <p>A short video introduction of my skills and experience</p>
        </div>

        <div className="resume-video-container">
          <div className="video-coming-soon">
            {/* <div className="coming-soon-icon"></div> */}
            <h3>Coming Soon</h3>
            <p>Producing a short video presentation to showcase my projects and technical background. Please wait!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume