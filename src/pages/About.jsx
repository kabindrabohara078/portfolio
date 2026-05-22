import React from 'react'
import './Pages.css'

const About = () => {
    return (
        <div className="about-main">
            <h1 className='name name-up' style={{ textAlign: 'center' }}>KABINDRA BOHARA G</h1>

            <div className="profile-image">
                <img src="/profile-picture.jpeg" alt="" />
            </div>

            <h1 className='name-down' style={{ textAlign: 'center' }}>KABINDRA BOHARA G</h1>

            <div className="about">
            <h1>About Me</h1> <br className='bracket'/>
                <p>
                    I’m a 20-year-old Computer Science & Engineering student currently in my 4th year at SNS College of Technology, Coimbatore, and will be graduating in 2027. I completed my schooling at Mount Carmel Matric. Hr. Secondary School in 2023 with a background in Mathematics and Computer Science.

                    My interest in Computer Science comes from my passion for programming and the creativity it offers. I enjoy the idea of building things through code and making computers solve real-world problems.

                    I’m especially interested in Machine Learning and Data Science, and I’m continuously learning and improving my skills in these areas through projects and practice.

                    Apart from academics, I enjoy playing battle royale games like Free Fire, BGMI, and Call of Duty, exploring interesting content on YouTube, reading articles, traveling, and binge-watching series.

                    I strongly believe that passion, consistency, and determination are the keys to achieving success.
                </p>
            </div> 

            <div className="keywords">
                <h1>Few Keywords that define me</h1> <br className='bracket'/>
                <ul>
                    <li>1. Design Thinker</li>
                    <li>2. Team Leader</li>
                    <li>3. Optimistic Thinker</li>
                </ul>
            </div>



        </div>
    )
}

export default About