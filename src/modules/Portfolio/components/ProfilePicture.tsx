import React from "react";

export const ProfilePicture = () => {
    return (
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full py-4 pl-12 w-80 h-80 mt-20 overflow-hidden'>
        <img src='/assets/images/profile.png' alt='profile picture' width={300}  />
      </div>
    )
}