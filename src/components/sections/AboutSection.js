import React from 'react'
import './AboutSection.css'

function AboutSection() {
  return (
    <section className='about-sec'>
        <div className='container-xl'>
            <div className='row'>
                <div className='col-md-5 join-card'>
                    <div className='join-wrap'> 
                        <div className='join-wrap-inner'>
                            <span className='subtitle'>Become a</span>
                            <h2>Volunteer</h2>
                            <div className="cta-btn">
                                <a className="item-btn" href="#contact">Check Here</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-7 intro'>
                    <div className='intro-inner'>
                        <span className='subtitle'>WELCOME TO COMPASHON FAMILY</span>
                        <h2>A Brighter Future for All</h2>
                        <p>Compashon is a nonprofit organization dedicated to transforming lives through comprehensive support across various sectors. We believe that every individual deserves the opportunity to live a healthy, secure, and fulfilling life.</p>
                        <p>We are driven by a passionate team of volunteers, experts, and staff who are committed to making a positive difference in our community and beyond. Through our list of programs or services, such as health initiatives, food security programs, disaster relief efforts, and crisis response, we strive to address pressing needs, build resilience, and create sustainable change. Our approach is centered on compassion, empathy, and a commitment to providing holistic solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection