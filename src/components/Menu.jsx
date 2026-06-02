import React from 'react'
import { Link } from 'react-router-dom'
import './Components.css'

const Menu = (props) => {
    return (
        <div className='menu-main'>

            <div className="list">

                <ul>



                    <ul>
                        <Link onClick={() => {
                            props.setMenu(!props.menu)
                        }} to='/'>About</Link>
                    </ul>


                    <ul>
                        <Link onClick={() => {
                            props.setMenu(!props.menu)
                        }} to='/resume'>Resume</Link>

                        <div className='sub'>


                        <Link to='/resume' onClick={()=> props.setMenu(false)} className="subs">ATS</Link> <br />
                        <Link to='/resume' onClick={()=> props.setMenu(false)} className="subs">One Page</Link><br />
                        <Link to='/resume' onClick={()=> props.setMenu(false)} className="subs">Video Resume</Link>

                        </div>
                    </ul>


                    <ul>
                        <Link onClick={() => {
                            props.setMenu(!props.menu)
                        }} to='/projects'>Projects</Link>
                    </ul>


                    <ul>
                        <Link onClick={() => {
                            props.setMenu(!props.menu)
                        }} to='/contacts'>Contact</Link>
                    </ul>



                </ul>
            </div>

        </div>
    )
}

export default Menu