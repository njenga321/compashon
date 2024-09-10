import React from 'react'
import './SupportSection.css'
import DonationForm from '../forms/DonationForm'

function SupportSection() {
  return (
    <section className='support'>
        <div className='container-xl'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='support-box'>
                        <div className='support-box-wrap'>
                            <h2>Support Us</h2>
                            <p>Together, we can make a lasting difference. Donate today and be a part of the change!</p>
                            <DonationForm />
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='stat'>
                        <div className='stat-map'>
                        </div>
                        <div className='stat-box'>
                            <h4>21<span>+</span> Countries</h4>
                            <h4>3000<span>+</span> Volunteers</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SupportSection