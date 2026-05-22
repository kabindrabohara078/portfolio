import React from 'react'
import './Components.css'

const Card = (props) => {

    let view;
    if(props.id === '1'){
        view = 0;
    }
    else{
        view = 1;
    }
    
    return (
        <div className="card-main">
            <br />
            <div className="image">

                <img src={props.logo} alt="project snapshot" />
            </div>

            <div className="details">

                <h2>{props.name}</h2>
                <h3>Created on: {props.date}</h3>
                <h5>{props.desc}</h5>
                <h5>{props.ver}</h5>  <br/>
                <div className={view ? 'link': 'disabled-link link'} style={{
                backgroundColor: view ? '#095285' : 'grey'
            }}>

                    <a href={props.link} target='_blank'>VIEW</a>
                </div>
            </div>
        </div>
    )
}

export default Card