import { use } from "matter";
import React, { useEffect, useState } from "react"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { FiMenu } from "react-icons/fi"

type NavigationProps = {
  toggleDarkMode: () => void;
}

export const Navigation = ({ toggleDarkMode }: NavigationProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;

    useEffect(() => {
      if(isSmallScreen) {
        setIsOpen(false)
      }
    }, [isSmallScreen])
    
    const goToGameMode = () => {
      window.location.href = '/game-portfolio'
    }

    return (
        <nav className='py-10 mb-12 flex flex-col sm:flex-row justify-between'>
        <div className='flex justify-between items-center mb-4 sm:mb-0'>
          <button className='sm:hidden dark:text-white' onClick={() => setIsOpen(!isOpen)}><FiMenu className='text-2xl dark:' /></button>
          <BsFillMoonStarsFill className='cursor-pointer text-2xl dark:text-white transform transition duration-500 ease-in-out hover:scale-110' onClick={toggleDarkMode}/>
        </div>
        <ul className={`flex justify-between flex-col sm:flex-row items-center ${isOpen ? '' : 'hidden'}`}>
          <li className='mb-4 sm:mb-0 sm:mr-8'><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md font-poxel text-sm' onClick={goToGameMode}>Game Mode</a></li>
          <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' href="#">Resume</a></li>
        </ul>
      </nav>
    )
}