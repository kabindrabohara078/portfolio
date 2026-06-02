import React from 'react'
import './Components.css'

const Card = (props) => {

    console.log(props.link);
    return (


        <div className="card-main">
            <br />
            <div className="image">

                <img src={props.logo} alt="project snapshot" />
            </div>

            <div className="details">

                <h2>{props.name}</h2>

                <h3>Created on: {props.date}</h3>

                <h5 className='description'
                    style={{
                        overflowY: 'auto',
                        lineHeight: '1.5em',
                        maxHeight: 'calc(2*1.5em)'
                    }}
                >{props.desc}</h5>


                <h5>{props.ver}</h5>


                <div className={props.link === 'NA' ? 'disabled-link' : 'link'}>

                    <a href={props.link} target='_blank'>VIEW</a>
                </div>


            </div>
        </div>
    )
}

export default Card