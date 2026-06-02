import React from 'react'
import './Pages.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="about-main">
            <h1 className='name name-up' style={{ textAlign: 'center' }}>KABINDRA BOHARA G</h1>

            <div className="profile-image">
                <img src="/profile-picture.jpeg" alt="" />
                 <div className="page-quick">

                    <Link to='https://one-page-resume-ashen.vercel.app/'>
                        <div className="click-quick">
                            Click here for a one-page version
                        </div>
                    </Link>
                </div>
            </div>

            <h1 className='name-down' style={{ textAlign: 'center' }}>KABINDRA BOHARA G</h1>
            
            <div className="one-page-quick">
                <div className="page-quick">

                    <Link to='https://one-page-resume-ashen.vercel.app/'>
                        <div className="click-quick">
                            Click here for a one-page version
                        </div>
                    </Link>
                </div>
            </div>

            <div className="about">
                <h1>About Me</h1> <br className='bracket' />

                <p>
                    I’m 21 years old and currently in my final year of Computer Science & Engineering at SNS College of Technology, Coimbatore. I completed my schooling at Mount Carmel Matriculation Higher Secondary School in 2023, with a background in Mathematics and Computer Science. I chose Computer Science and Engineering because I’ve always enjoyed programming—it’s fascinating how, with the right knowledge, you can make a computer do almost anything you imagine. Lately, I’ve been especially interested in Machine Learning and Data Science, and I’m actively working on building my skills in these areas. Outside of academics, I enjoy battle royale games like Free Fire and Call of Duty. I also like reading articles, exploring random YouTube content, traveling, and binge-watching series. I strongly believe that passion, combined with determination, can take you a long way.
                </p>
            </div>
            <br />

            <div className="keywords">
                <h1>Few Keywords that define me</h1> <br className='bracket' /> <br />
                <ul>
                    <li>1. Design Thinker</li>
                    <li>2. Team Leader</li>
                    <li>3. Optimistic Thinker</li>
                </ul>

            </div>
            <br /><br /> <br />



        </div>
    )
}

export default About