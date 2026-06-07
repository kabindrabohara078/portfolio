import React from 'react'
import Card from '../components/Card'
import './Pages.css'

const Project = () => {

  const projects=[
    {
      id:'3',
      project_name:'Circle Sync [not mobile friendly + no backend yet]',
      project_date: '31-05-2026',
      project_logo:'/Screenshot_2026-05-31_19-38-55.png',
      project_desc:'This project is a social media application that utilizes graph data structures to represent users, interests, and interactions.',
      project_version: 'v0.0.3',
      project_link:'https://circle-sync-pxo7.vercel.app/'
    },
    {
      id:'2',
      project_name:'EchoGraph',
      project_date: '27-05-2026',
      project_logo:'/echograph.png',
      project_desc:'[React-based] EchoGraph — an AI semantic memory system for storing, searching, and interacting with contextual memories through a clean API-driven interface. ',
      project_version: 'v0.0.5',
      project_link:'https://echograph-frontend.vercel.app/'
    },
    {
      id:'1',
      project_name:'Personal Portfolio',
      project_date: '22-05-2026',
      project_logo:'/portfolio-logo.jpeg',
      project_desc:'This is a personal site made for myself. It has my projects and resume informations. It displays my skills with reactjs. Basically the one you are looking at right now.',
      project_version: 'v1.0.0',
      project_link:'NA'
    },
    {
      id:'0',
      project_name:'[1st Project]  Basic Text Game',
      project_date: '08-05-2026',
      project_logo:'/basic-text-game-app-logo.jpeg',
      project_desc:'This is a simple text converter app. It can do basic text operations like reversing, size increasing and decreasing, upper, and lower conversions.',
      project_version: 'v1.0.0',
      project_link:'https://text-game-app.onrender.com/'
    }
  ]

  return (
    <> 

    <br className='bracket'/><br className='bracket'/><br className='bracket'/>
    <br />
      <div className="pro"><h1>My Projects under development</h1></div> <br />
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
