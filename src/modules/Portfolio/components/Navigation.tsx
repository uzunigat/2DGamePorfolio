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
    const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;
    
    const goToGameMode = () => {
      window.location.href = '/game-portfolio'
    }

    return (
        <nav className='py-10 mb-12 flex flex-row justify-between'>
        <div className='flex justify-between items-center mb-4 sm:mb-0'>
          <BsFillMoonStarsFill className='cursor-pointer text-2xl dark:text-white transform transition duration-500 ease-in-out hover:scale-110' onClick={toggleDarkMode}/>
        </div>
          {/* <CountryDropdown /> */}
          <Button className='mx-2 font-poxel' text='Game Mode' onClick={goToGameMode} Icon={FaGamepad}/>
      </nav>
    )
}