import React from "react";

type ButtonProps = {
    text: string;
    onClick: () => void;
    className?: string;
    Icon?: React.ElementType;
}

export const Button = ({text, className, Icon,  onClick}: ButtonProps) => {
    return (          
        <button onClick={onClick} className={`${className} flex bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md cursor-pointer`}>
            {Icon && <Icon className='animate-bounce mr-4 size-5' />}
            <div className="text-md">{text}</div>
        </button>
    )
}