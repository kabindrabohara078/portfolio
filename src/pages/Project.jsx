import Card from '../components/Card'
import './Pages.css'

const Project = () => {
  const projects = [
    {
      id: '4',
      project_name: 'Circle Sync',
      project_date: '20-06-2026',
      project_logo: '/circle_synk.png',
      project_desc: 'A social media application leveraging graph data structures to map and traverse users, interests, and connections dynamically.',
      project_version: 'v0.0.3',
      project_link: 'https://circle-sync-pxo7.vercel.app/'
    },
    {
      id: '3',
      project_name: 'EchoGraph',
      project_date: '07-06-2026',
      project_logo: '/echograph.png',
      project_desc: 'An AI semantic memory system built on React, allowing cognitive contextual storage, embedding search, and API queries.',
      project_version: 'v0.0.5',
      project_link: 'https://echograph-frontend.vercel.app/'
    },
    {
      id: '2',
      project_name: 'Personal Portfolio',
      project_date: '22-05-2026',
      project_logo: '/portfolio-logo.jpeg',
      project_desc: 'A modern developer portfolio showing skills, resume, and experience. Built with React and designed with high aesthetics.',
      project_version: 'v1.0.0',
      project_link: 'NA'
    },
    {
      id: '1',
      project_name: 'Basic Todo App',
      project_date: '15-05-2026',
      project_logo: '/just_do.png',
      project_desc: 'A clean and simple task manager. Add, complete, filter, and persist your daily todo items seamlessly.',
      project_version: 'v1.0.0',
      project_link: 'https://just-do-jet.vercel.app/'
    },
    {
      id: '0',
      project_name: 'Basic Text Game',
      project_date: '08-05-2026',
      project_logo: '/basic-text-game-app-logo.jpeg',
      project_desc: 'A simple text modifier tool executing string operations such as reversal, casing changes, size variations, and count analysis.',
      project_version: 'v1.0.0',
      project_link: 'https://text-game-app.onrender.com/'
    }
  ]

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>A selection of application and database engineering projects I have built.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            id={project.id} 
            name={project.project_name} 
            date={project.project_date} 
            logo={project.project_logo} 
            desc={project.project_desc} 
            ver={project.project_version} 
            link={project.project_link}
          />
        ))}
      </div>
    </div>
  )
}

export default Project
