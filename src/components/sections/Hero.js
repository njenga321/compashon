import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className='main-hero'>
        <div className='container-xl'>
            <div className='hero-inner'>
                <div className='hero-content'>
                    <span className='subtitle'>Give a hand &</span>
                    <h2>Make a Better World for Everyone</h2>
                    <div className="cta-btn">
                        <a className="item-btn" href="#contact">Donate Now</a>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}

export default Hero