import React from 'react'
import Card from '../components/Card'
import './Pages.css'

const Project = () => {

  const projects=[
    {
      id:'4',
      project_name:'Dummy',
      project_date: '__-__-____',
      project_logo:'/project-na.jpeg',
      project_desc:'This is a dummy test template. This will be replaced by a project soon!',
      project_version: 'v-.-.-',
      project_link:'NA'
    },
    {
      id:'3',
      project_name:'Dummy',
      project_date: '__-__-____',
      project_logo:'/project-na.jpeg',
      project_desc:'This is a dummy test template. This will be replaced by a project soon!',
      project_version: 'v-.-.-',
      project_link:'NA'
    },
    {
      id:'2',
      project_name:'Dummy',
      project_date: '__-__-____',
      project_logo:'/project-na.jpeg',
      project_desc:'This is a dummy test template. This will be replaced by a project soon!',
      project_version: 'v-.-.-',
      project_link:'NA'
    },
    {
      id:'1',
      project_name:'Personal Portfolio',
      project_date: '22-05-2026',
      project_logo:'/portfolio-logo.jpeg',
      project_desc:'This is a personal site made for myself. It has my projects and resume informations. It displays my skills with reactjs. Basically the one you are watching right now.',
      project_version: 'v0.2.0',
      project_link:'NA'
    },
    {
      id:'0',
      project_name:'Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.jpeg',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.vercel.app/'
    }
  ]

  return (
    <> 

    <br className='bracket'/><br className='bracket'/><br className='bracket'/>
      <div className="pro"><h1>My Projects so far! (most are dummy, scroll to the end)</h1></div>
    <div className="projects-main">



      <div className="card">

      {projects.map((project)=>{
        return <Card key={project.id} id={project.id} name={project.project_name} date={project.project_date} logo={project.project_logo} desc={project.project_desc} ver={project.project_version} link={project.project_link}/>
      })}
      </div>


    </div> 
    </> 
  )
}

export default Project