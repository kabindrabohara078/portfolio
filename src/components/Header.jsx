import './Components.css'
import { Link, NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className='header-main'>
      <div className="header-left">
        <Link to='/' onClick={() => props.setMenu(false)}>
          <h1>Portfolio</h1>
        </Link>
      </div>

      <div className="header-right-menu">
        <div 
          className="spans" 
          onClick={() => props.setMenu(!props.menu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className='header-right'>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/resume' className={({ isActive }) => isActive ? 'active' : ''}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' className={({ isActive }) => isActive ? 'active' : ''}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/contacts' className={({ isActive }) => isActive ? 'active' : ''}>
              Connect
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header