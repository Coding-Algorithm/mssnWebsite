import React from 'react'
import Header from '../../components/Header/Header'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import HomeHero from '../../components/HomeHero/HomeHero'
import HomeSession from '../../components/HomeSession/HomeSession'
import HomeLectures from '../../components/HomeLectures/HomeLectures'
import HomeNews from '../../components/HomeNews/HomeNews'
import Footer from '../../components/Footer/Footer'


function Home() {
  return (
    <div>
      <Header />
      <HomeHero />
      <HomeAbout />
      <HomeSession />
      <HomeLectures />
      <HomeNews />
      <Footer />
    </div>
  )
}

export default Home