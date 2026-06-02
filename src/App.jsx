import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Project from './pages/Project'
import About from './pages/About'
import Menu from './components/Menu'

const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className='app-main'>

      <BrowserRouter>
      

      <div className="header">
      <Header menu={menu} setMenu={setMenu}/>
      </div>



      {menu && 
        <div className="menu-container">

          <Menu menu={menu} setMenu={setMenu}/>
        </div>
      }

      <div className="content"  onClick={() => setMenu(false)}>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/contacts' element={<Contact/>}/>
      </Routes>


      </div>


      </BrowserRouter>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default App