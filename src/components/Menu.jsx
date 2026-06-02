import React from 'react'
import { Link } from 'react-router-dom'
import './Components.css'

const Menu = (props) => {
  return (
    <div className='menu-main'>
        
        <div className="list">

            <ul>



            <ul><Link onClick={()=>{
                props.setMenu(!props.menu)
            }} to='/'>About</Link></ul>


            <ul><Link onClick={()=>{
                props.setMenu(!props.menu)
            }} to='/resume'>Resume</Link></ul>


            <ul><Link onClick={()=>{
                props.setMenu(!props.menu)
            }} to='/projects'>Projects</Link></ul>

            
            <ul><Link onClick={()=>{
                props.setMenu(!props.menu)
            }} to='/contacts'>Contact</Link></ul>



            </ul>
        </div>

    </div>
  )
}

export default Menu