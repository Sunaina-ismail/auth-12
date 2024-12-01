'use client'
import React from 'react'

import Hero from '../components/hero'

const Home = () => {
  return (
    <div className='relative h-screen bg-cover bg-center bg-no-repeat' style={{backgroundImage: 'url("/doctor.png")'}}>
    
  <Hero/>
  </div>

  )
}

export default Home