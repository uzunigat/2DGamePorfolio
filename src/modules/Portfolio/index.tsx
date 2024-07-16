import React, { useEffect, useState } from 'react'
import { Presentation } from './Presentation'
import { Projects } from './Projects'
import { AboutMe } from './AboutMe'
import { Education } from './Education'
import { Experience } from './Experience'

export const Portfolio = () => {
  // save darMode state in local storage
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true')

  const saveDarkMode = (darkMode: boolean) => {
    localStorage.setItem('darkMode', darkMode.toString())
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    saveDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-white scroll-smooth px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <Presentation toggleDarkMode={toggleDarkMode} />
        {/* <div className='my-6 border-b-2 border-gray-200 dark:border-gray-700 w-full lg:max-w-screen-2xl mx-auto'></div>
        <AboutMe /> */}
        <div className='my-6 border-b-2 border-gray-200 dark:border-gray-700 w-full lg:max-w-screen-2xl mx-auto'></div>
        <Education />
        <Experience />
        <div className='my-6 border-b-2 border-gray-200 dark:border-gray-700 w-full lg:max-w-screen-2xl mx-auto'></div>
        <Projects />
      </main>
    </div>
  )
}
