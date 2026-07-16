import './Components.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer-main'>
      <p>
        Designed with <span>&hearts;</span> by Kabindra Bohara &copy; {currentYear}
      </p>
    </div>
  )
}

export default Footer