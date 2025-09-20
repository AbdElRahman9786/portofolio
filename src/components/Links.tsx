'use client'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CodeIcon from '@mui/icons-material/Code';
import CommentIcon from '@mui/icons-material/Comment';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
export const Links = () => {
  const [section, setSection] = useState<string>('home');
  function handleSetSection(name: string) {
    setSection(name);
  }
  return (
<>
 <div className='flex px-3 py-2 items-center rounded-3xl gap-2 hover:bg-[#f1f1f1] hover:scale-105 duration-200 cursor-pointer group ' onClick={() => handleSetSection('home')}>
          <div className=" group-hover:rotate-45  duration-150">
          <HomeIcon  />
          </div>
          <p>Home</p>
        </div>
        
        <div className='flex px-3 py-2 items-center rounded-3xl gap-2 hover:bg-[#f1f1f1] hover:scale-105 duration-200 cursor-pointer group ' onClick={() => handleSetSection('about')}>
          <div className=" group-hover:rotate-45   duration-150">
          <PersonIcon  />
          </div>
          <p>About</p>
        </div>
         <div className='flex px-3 py-2 items-center rounded-3xl gap-2 hover:bg-[#f1f1f1] hover:scale-105 duration-200 cursor-pointer group' onClick={()=> handleSetSection('experience')}>
          <div className=" group-hover:rotate-45  duration-150">
          <HistoryToggleOffIcon  />
          </div>
          <p>Experience</p>
        </div>
          <div className='flex px-3 py-2 items-center rounded-3xl gap-2 hover:bg-[#f1f1f1] hover:scale-105 duration-200 cursor-pointer group' >
          <div className=" group-hover:rotate-45   duration-150">
          <BusinessCenterIcon  />
          </div>
          <p>Projects</p>
        </div>
          <div className='flex px-3 py-2 items-center rounded-3xl gap-2 hover:bg-[#f1f1f1] hover:scale-105 duration-200 cursor-pointer group'>
          <div className=" group-hover:rotate-45   duration-150">
          <CodeIcon  />
          </div>
          <p>Skills</p>
        </div>
         <div className='flex px-3 py-2 items-center rounded-3xl gap-2 hover:bg-[#f1f1f1] hover:scale-105 duration-200 cursor-pointer group'>
          <div className=" group-hover:rotate-45   duration-150">
          <CommentIcon  />
          </div>
          <p>Testimonials</p>
        </div>
        <div className='flex px-3 py-2 items-center rounded-3xl gap-2 hover:bg-[#f1f1f1] hover:scale-105 duration-200 cursor-pointer group'>
          <div className=" group-hover:rotate-45   duration-150">
          <MailIcon  />
          </div>
          <p>Contact</p>
        </div>
</>
  )
}
