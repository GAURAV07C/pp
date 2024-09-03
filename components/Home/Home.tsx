import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Project from './project/Project'
import Skills from './skills/Skills'
import Review from './Review/Review'

const Home = () => {
  return (
    <div className=' overflow-hidden'>
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      <Review />
      </div>
  )
}

export default Home
