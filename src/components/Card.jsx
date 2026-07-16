import { useRef } from 'react'
import './Components.css'

const Card = (props) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <div 
      className="card-main" 
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <div className="image">
        <img src={props.logo} alt={`${props.name} snapshot`} />
      </div>

      <div className="details">
        <h2>{props.name}</h2>
        <h3>Created on: {props.date}</h3>
        <p className='description'>{props.desc}</p>
        <h5>{props.ver}</h5>
        
        <div className={props.link === 'NA' ? 'disabled-link' : 'link'}>
          {props.link === 'NA' ? (
            <a href="#projects" onClick={(e) => e.preventDefault()}>CURRENT PROJECT</a>
          ) : (
            <a href={props.link} target='_blank' rel="noopener noreferrer">VIEW PROJECT</a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card