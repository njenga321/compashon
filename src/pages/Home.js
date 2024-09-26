import React from 'react'
import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/AboutSection'
import SupportSection from '../components/sections/SupportSection'
import PaymentForm from '../components/forms/PaymentForm'
import ProgramSlider from '../components/sliders/ProgramSlider'
import EventSection from '../components/sections/EventSection'

function Home() {
  return (
    <>
    <Hero />
    
    <AboutSection />

    <SupportSection />

    <ProgramSlider />

    <EventSection />
    </>
  )
}

export default Home