import React from 'react'
import AboutHero from '../../components/AboutHero/AboutHero'
import AboutMain from '../../components/AboutMain/AboutMain'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'


function About() {
  return (
    <div>
        <Header />            
        <AboutHero title='About Us' />
        <AboutMain />
        <Footer />
    </div>
  )
}

export default About