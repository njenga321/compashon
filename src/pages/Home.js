import React from 'react'
import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/AboutSection'
import SupportSection from '../components/sections/SupportSection'
import PaymentForm from '../components/forms/PaymentForm'
import ProgramSlider from '../components/sliders/ProgramSlider'
import EventSection from '../components/sections/EventSection'
import UpdateSection from '../components/sections/UpdateSection'

function Home() {
  return (
    <>
    <Hero />
    
    <AboutSection />

    <SupportSection />

    <ProgramSlider />

    <EventSection />

    <UpdateSection />
    </>
  )
}

export default Home