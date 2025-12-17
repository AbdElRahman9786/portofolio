'use client'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CodeIcon from '@mui/icons-material/Code';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';

export const Links = () => {
  const [section, setSection] = useState<string>('home');
  function handleSetSection(name: string) {
    setSection(name);
  }
  return (
<>
 <a href="#" className='flex px-3 py-2 items-center rounded-3xl gap-2 hover:bg-[#252525] hover:text-[#28a745] hover:scale-105 duration-200 cursor-pointer group' onClick={() => handleSetSection('home')}>
          <div className="group-hover:rotate-45 duration-150">
          <HomeIcon />
          </div>
          <p>Home</p>
        </a>
        
        <a href="#about" className='flex px-3 py-2 items-center rounded-3xl gap-2 hover:bg-[#252525] hover:text-[#28a745] hover:scale-105 duration-200 cursor-pointer group' onClick={() => handleSetSection('about')}>
          <div className="group-hover:rotate-45 duration-150">
          <PersonIcon />
          </div>
          <p>About</p>
        </a>
        <a href="#projects" className='flex px-3 py-2 items-center rounded-3xl gap-2 hover:bg-[#252525] hover:text-[#28a745] hover:scale-105 duration-200 cursor-pointer group'>
          <div className="group-hover:rotate-45 duration-150">
          <BusinessCenterIcon />
          </div>
          <p>Projects</p>
        </a>
        <a href="#skills" className='flex px-3 py-2 items-center rounded-3xl gap-2 hover:bg-[#252525] hover:text-[#28a745] hover:scale-105 duration-200 cursor-pointer group'>
          <div className="group-hover:rotate-45 duration-150">
          <CodeIcon />
          </div>
          <p>Skills</p>
        </a>
        <a href="#contact" className='flex px-3 py-2 items-center rounded-3xl gap-2 hover:bg-[#252525] hover:text-[#28a745] hover:scale-105 duration-200 cursor-pointer group'>
          <div className="group-hover:rotate-45 duration-150">
          <MailIcon />
          </div>
          <p>Contact</p>
        </a>
</>
  )
}
