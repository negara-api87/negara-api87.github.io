import React from 'react'

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Simple Pricing</h2>
          <p>Free forever. Upgrade for more power.</p>
        </div>
        
        <div className="pricing-grid">
          <div className="pricing-card popular">
            <div className="pricing-badge">Most Popular</div>
            <div className="pricing-header">
              <h3>Pro</h3>
              <div className="price">
                <span className="currency">$</span>9
                <span className="period">/mo</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li><i className="fas fa-check"></i> 100GB storage</li>
              <li><i className="fas fa-check"></i> Custom domains</li>
              <li><i className="fas fa-check"></i> Password protection</li>
              <li><i className="fas fa-check"></i> Priority support</li>
            </ul>
            <button className="cta-button">Get Pro</button>
          </div>
          
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Free</h3>
              <div className="price free">
                $0
                <span className="period">Forever</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li><i className="fas fa-check"></i> 10GB uploads</li>
              <li><i className="fas fa-check"></i> Basic encryption</li>
              <li><i className="fas fa-check"></i> Unlimited downloads</li>
            </ul>
            <button className="cta-button secondary">Start Free</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing