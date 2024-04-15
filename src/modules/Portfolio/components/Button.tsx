import React from "react";

type ButtonProps = {
    text: string;
    onClick: () => void;
    className?: string;
    Icon?: React.ElementType;
    showText?: boolean;
}

export const Button = ({text, className, Icon, showText, onClick}: ButtonProps) => {
    return (          
        <button onClick={onClick} className={`${className} flex bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md cursor-pointer`}>
            {Icon && <Icon className='md:animate-bounce md:mr-4 size-5' />}
            <div className={`${!showText && 'hidden' } md:block text-md`}>{text}</div>
        </button>
    )
}