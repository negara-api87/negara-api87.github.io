import React from 'react'

const Features = () => {
  const features = [
    {
      icon: 'fas fa-cut',
      title: 'AI Smart Slicing',
      description: 'Automatically splits large files into optimal chunks for fastest upload/download speeds.'
    },
    {
      icon: 'fas fa-lock',
      title: 'Zero-Knowledge',
      description: 'End-to-end 256-bit encryption. We never see your files.'
    },
    {
      icon: 'fas fa-infinity',
      title: 'Unlimited Bandwidth',
      description: 'No download limits or throttling. Share with unlimited recipients.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Lightning Fast',
      description: 'Global CDN with parallel downloads. Resume interrupted transfers.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Optimized',
      description: 'Perfect on all devices. Progressive Web App support.'
    },
    {
      icon: 'fas fa-calendar-check',
      title: 'Smart Expiration',
      description: 'Auto-delete after last download or set custom expiration.'
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2>Everything You Need to Share Files</h2>
          <p>Simple, secure, and stupidly fast.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features