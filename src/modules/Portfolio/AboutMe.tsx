import React from "react";
import { Button } from "./components/Button";


export const AboutMe = () => {
    return (
        <div className=''>
            <div>
                <h3 className='text-3xl py-1 mb-4 text-gray-500 text-center dark:text-white opacity-80'> About Me </h3>
            </div>
            <p className='py-4 text-justify dark:text-white opacity-50'>A dancer at heart, a game development enthusiast with an entrepreneurial spirit, and a passion for coding. Originally from Mexico City, I later moved to France to pursue my Computer Science Engineering Degree at the University of Technology of Compiegne. My journey into the world of software development began with an internship at Faurecia, where I gained my first hands-on experience as a Developer. To complete my Engineering degree, I embarked on an apprenticeship as a Salesforce consultant, further honing my skills. Currently, I am thriving as a Fullstack Engineer, leveraging my diverse background and expertise to make a positive impact in the tech industry.</p>

            <h4 className='text-2xl py-1 mb-4 text-gray-500 text-center dark:text-white opacity-80'> Contact Details </h4>
            <div className="flex justify-center mx-20">
                <div className="dark:text-white opacity-50 mx-20">
                    <p> Rodrigo Zuniga</p>
                    <p> Paris, France</p>
                    <p> +33 7 66 79 76 19</p>
                </div>
                <Button className='mx-2 text-right h-12' text='Resume' onClick={() => window.open('')} />
            </div>
        </div>
    )
}