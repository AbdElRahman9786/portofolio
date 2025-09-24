'use client'

import React, { useState } from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { MyProjects } from './MyProjects';

export const Experience:React.FC  = () => {
    const [section,setSection]=useState<string>('work')


  return (
    
    <div>
        
        <div className='text-center mt-30'>
        <h1 className='text-3xl font-bold mb-5'>My Experience</h1>
        <p className='text-[#665b5e] mb-5'>A journey through my professional growth, education, and achievements</p>
        <ul className='flex gap-5 justify-center  items-center mb-5'>
            <li className={` ${section==='work'&&'bg-black text-white  rounded-2xl'} px-3 py-2 cursor-pointer`} onClick={() => setSection('work')}><BusinessCenterIcon/> Work Experience</li>
            <li className={` ${section==='education'&&'bg-black text-white  rounded-2xl'} px-3 py-2 cursor-pointer`} onClick={() => setSection('education')}><SchoolIcon/> Education</li>
            <li className={` ${section==='certification'&&'bg-black text-white  rounded-2xl'} px-3 py-2 cursor-pointer`} onClick={() => setSection('certification')}><WorkspacePremiumIcon/> Certification</li>
        </ul>
        </div>
        {section==='work'&&<MyProjects/>}
    </div>
  )
}
