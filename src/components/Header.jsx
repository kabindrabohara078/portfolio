import React from 'react'
import './Components.css'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Header = (props) => {
  return (
    <div className='header-main'>

        <div className="header-left"><Link to='/' onClick={() => props.setMenu(false)}>
            <h1>Portfolio</h1>
        </Link>
        </div>

        <div className="header-right-menu">
          <div className="spans" 
          style={{
            cursor:'pointer'
          }}
          onClick={ () => {

            props.setMenu(!props.menu)
          }
          }>

          <span></span>
          <span></span>
          <span></span>
          </div>
        </div>


        <div className='header-right'>
            <ul><Link 
            style={{
              color:'white'
            }} to='/'>About</Link></ul>
            <ul><Link 
            style={{
              color:'white'
            }} to='/resume'>Resume</Link></ul>
            <ul><Link 
            style={{
              color:'white'
            }} to='/projects'>Projects</Link></ul>
            <ul><Link 
            style={{
              color:'white'
            }} to='/contacts'>Connect</Link></ul>
        </div>
    </div>
  )
}

export default Header