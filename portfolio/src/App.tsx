import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import './index.css'
import { Navbar } from './Navbar/Navbar'
import { About } from './About/About'
import { Experience } from './Experience/Experience'
import { Projects } from './Projects/Projects'
import { Contact } from './Contact/Contact'

function App() {

  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <div className='bg_blur -top-8 left-0'></div>
      <div className='bg_blur top-120 -right-24'></div>
    </>
  )
}

export default App
