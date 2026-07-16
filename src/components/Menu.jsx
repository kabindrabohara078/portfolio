import { NavLink } from 'react-router-dom'
import './Components.css'

const Menu = (props) => {
  const closeMenu = () => props.setMenu(false);

  return (
    <div className='menu-main'>
      <div className="list">
        <ul>
          <li>
            <NavLink onClick={closeMenu} to='/'>
              About
            </NavLink>
          </li>

          <li>
            <NavLink onClick={closeMenu} to='/resume'>
              Resume
            </NavLink>
            <div className='sub'>
              <a href="/kabindra_bohara_ATS_2026.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="subs">
                ATS PDF
              </a>
              <a href="/Kabindra_Bohara_G_Resume_22_05_2026.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="subs">
                One Page PDF
              </a>
            </div>
          </li>

          <li>
            <NavLink onClick={closeMenu} to='/projects'>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink onClick={closeMenu} to='/contacts'>
              Connect
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu