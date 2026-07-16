import './Pages.css'

const Contact = () => {
  const contactLinks = [
    {
      id: 'email',
      name: 'Email',
      value: 'kabindrabohara1@gmail.com',
      href: 'mailto:kabindrabohara1@gmail.com',
      icon: '/email-mail-svgrepo-com.svg',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      value: 'kabindra-bohara-g',
      href: 'https://www.linkedin.com/in/kabindra-bohara-g',
      icon: '/linkedin-svgrepo-com.svg',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      value: '+91 70105 24507',
      href: 'https://wa.me/917010524507',
      icon: '/whatsapp-svgrepo-com.svg',
    },
    {
      id: 'phone',
      name: 'Phone',
      value: '+91 70105 24507',
      href: 'tel:+917010524507',
      icon: '/phone-out-circle-fill-svgrepo-com.svg',
    }
  ];

  const technicalProfiles = [
    {
      id: 'leetcode',
      name: 'Leetcode',
      value: 'Kabindra_bohara',
      href: 'https://leetcode.com/u/Kabindra_bohara/',
      icon: '/leetcode-svgrepo-com.svg'
    },
    {
      id: 'github',
      name: 'GitHub',
      value: 'kabindrabohara078',
      href: 'https://github.com/kabindrabohara078',
      icon: '/github-color-svgrepo-com.svg'
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Connect With Me</h1>
        <p>Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
      </div>

      <div className="contact-section">
        <h2 className="section-title">Contact Channels</h2>
        <div className="contact-grid">
          {contactLinks.map((item) => (
            <a 
              key={item.id} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <div className="contact-icon">
                <img src={item.icon} alt={item.name} />
              </div>
              <div className="contact-details">
                <h3>{item.name}</h3>
                <p>{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="contact-section">
        <h2 className="section-title">Technical Profiles</h2>
        <div className="contact-grid technical-grid">
          {technicalProfiles.map((item) => (
            <a 
              key={item.id} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card technical-card"
            >
              <div className="contact-icon">
                <img src={item.icon} alt={item.name} />
              </div>
              <div className="contact-details">
                <h3>{item.name}</h3>
                <p>{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact