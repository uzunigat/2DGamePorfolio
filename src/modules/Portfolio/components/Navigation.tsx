import React, { useEffect, useState } from "react"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { FiMenu } from "react-icons/fi"
import { FaGamepad } from 'react-icons/fa';
import { Button } from "./Button";
import { CountryDropdown } from "./CountryDropdown";


type NavigationProps = {
  toggleDarkMode: () => void;
}

export const Navigation = ({ toggleDarkMode }: NavigationProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;
    const [countryCode, setCountryCode] = useState('en')

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
          <CountryDropdown />
          <Button className='mx-2 font-poxel' text='Game Mode' onClick={goToGameMode} Icon={FaGamepad}/>
        </ul>
      </nav>
    )
}