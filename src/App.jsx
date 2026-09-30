import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero' 
import AboutSection from './components/AboutSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ContactSection from './components/ContactSection.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <AboutSection/>
    <SkillsSection/>
    <ProjectsSection/>
    <ExperienceSection/>
    <ContactSection/>
    </>
  )
}

export default App
