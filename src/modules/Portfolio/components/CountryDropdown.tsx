import React from 'react'
import { US } from 'country-flag-icons/react/3x2'
import { ES } from 'country-flag-icons/react/3x2';
import { FR } from 'country-flag-icons/react/3x2';
import { CountryOption } from './CountryOption';


const options = [
    {
        countryValue: 'en',
        Icon: US,
    },
    {
        countryValue: 'es',
        Icon: ES,
    },
    {
        countryValue: 'fr',
        Icon: FR,
    },
];

export const CountryDropdown = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState(options[0]);

    const { Icon: SelectedIcon } = selectedOption;

    return (
        <div className='dropdown rounded-lg shadow-xl z-20'>
            <div className='dropdown-header' onClick={() => setIsOpen(!isOpen)}>
                <SelectedIcon />
            </div>
            {isOpen && (
                <ul className='dropdown-list'>
                    {options.map((option, index) => (
                        <CountryOption 
                            key={index} 
                            countryValue={option.countryValue} 
                            Icon={option.Icon} 
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}

