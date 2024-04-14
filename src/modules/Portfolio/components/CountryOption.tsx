import React from 'react';

type CountryOptionProps = {
    countryValue: string
    Icon: React.FC
}

export const CountryOption = ({ countryValue, Icon }: CountryOptionProps) => {    
    return (
        <li value={countryValue} className=''>
            <Icon />
        </li>
    )
}