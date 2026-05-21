import React from 'react'
import './Components.css'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Header = (props) => {
  return (
    <div className='header-main'>

        <div className="header-left">
            <h1>Portfolio</h1>
        </div>

        <div className="header-right-menu">
          <div className="spans" onClick={ () => {

            props.setMenu(!props.menu)
          }
          }>

          <span></span>
          <span></span>
          <span></span>
          </div>
        </div>


        <div className='header-right'>
            <ul><Link to='/'>About</Link></ul>
            <ul><Link to='/resume'>Resume</Link></ul>
            <ul><Link to='/projects'>Projects</Link></ul>
            <ul><Link to='/contacts'>Contact</Link></ul>
        </div>
    </div>
  )
}

export default Header