import React from 'react'
import Card from '../components/Card'
import './Pages.css'

const Project = () => {

  const projects=[
    {
      project_name:'Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.png',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.vercel.app/'
    },
    {
      project_name:'Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.png',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.vercel.app/'
    },
    {
      project_name:'Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.png',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.vercel.app/'
    },
    {
      project_name:'Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.png',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.vercel.app/'
    },
    {
      project_name:'Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.png',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.vercel.app/'
    },
    {
      project_name:'Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.png',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.vercel.app/'
    },
    {
      project_name:'Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.png',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.vercel.app/'
    },
    {
      project_name:'Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.png',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.vercel.app/'
    },
    {
      project_name:'Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.png',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.vercel.app/'
    },
    {
      project_name:'Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.png',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.vercel.app/'
    },
    {
      project_name:'Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.png',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.vercel.app/'
    },
    {
      project_name:'Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.png',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.vercel.app/'
    }
  ]

  return (
    <> 

    <br className='bracket'/><br className='bracket'/><br className='bracket'/>
      <div className="pro"><h1>My Projects so far!</h1></div>
    <div className="projects-main">



      <div className="card">

      {projects.map((project)=>{
        return <Card name={project.project_name} date={project.project_date} logo={project.project_logo} desc={project.project_desc} ver={project.project_version} link={project.project_link}/>
      })}
      </div>


    </div> 
    </> 
  )
}

export default Project