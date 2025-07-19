"use client"

import { useState, useEffect } from 'react'
import SimpleCentered from '@/components/blocks/simple-centered'
import AnimatedRobot from '@/components/custom/animated-robot'
import ProjectsSection from '@/components/custom/projects-section'
import SimpleThreeColumnWithLargeIconsOnDark from '@/components/blocks/simple-three-column-with-large-icons-on-dark'
import ExperienceTimeline from '@/components/custom/experience-timeline'
import { SimpleCenteredContactForm } from '@/components/blocks/simple-centered-contact-form'
import OpenSourceContributions from '@/components/custom/open-source'

export default function Page() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
      const sections = ['hero', 'projects', 'skills', 'experience', 'Open-Source', 'contact']
      const sectionHeight = window.innerHeight
      const sectionIndex = Math.floor(position / sectionHeight)
      
      if (sectionIndex < sections.length) {
        setCurrentSection(sections[sectionIndex])
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      <AnimatedRobot scrollPosition={scrollPosition} currentSection={currentSection} />

      {/* Main Content */}
      <div id="hero">
        <SimpleCentered />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="skills">
        <SimpleThreeColumnWithLargeIconsOnDark />
      </div>
      <div id="experience">
        <ExperienceTimeline />
      </div>
      <div id="Open-Source">
        <OpenSourceContributions />
      </div>
      <div id="contact">
        <SimpleCenteredContactForm />
      </div>
    </div>
  )
}