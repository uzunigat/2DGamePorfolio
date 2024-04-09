import React from "react";
import { Navigation } from "./components/Navigation";
import { Resume } from "./components/Resume";
import { SocialIcons } from "./components/SocialIcons";
import { ProfilePicture } from "./components/ProfilePicture";

type PresentationProps = {
   toggleDarkMode: () => void;
}    

export const Presentation = ({ toggleDarkMode }: PresentationProps) => {
    return (
      <section className='min-h-screen'>
        <Navigation toggleDarkMode={toggleDarkMode}/>
        <Resume />
        <SocialIcons />
        <ProfilePicture />
      </section>
    )
}