import React from 'react'
import profilePic from '../../public/images/WhatsApp Image 2025-09-07 at 23.15.33_8434d320.jpg'
import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';

export const About: React.FC = () => {
  return (
    
    <div className='w-[90%] mx-auto'>
    
      <div className='text-center mt-20'>
        <h1 className='font-bold text-4xl mb-3'>About Me</h1>
        <p className='text-gray-500'>Passionate about creating innovative solutions through technology</p>
      </div>
      <div className='flex items-center justify-center mt-10 max-lg:flex-col gap-10'>
        <div className=''>
          <Image src={profilePic} alt='Profile Picture' className='w-[70%] rounded-2xl max-lg:hidden' />
        </div>
        <div className='p-3 rounded-md shadow-2xl bg-[#1a1a1a] border border-gray-800'>
          <h1 className='text-2xl font-bold mb-3'>Hello There!</h1>
          <p className='text-gray-400'>I&apos;m a Full Stack Developer specialized in building modern, trend-aligned websites that reflect the essence of today&apos;s digital design era. I help startups and small businesses who are often concerned about cost, by delivering high-performing, scalable, and visually impactful solutions — without breaking their budget. My mission is to make cutting-edge design and technology accessible to everyone, no matter the size of their business. Feel free to get in touch for value-driven results and a hands-on experience.</p>
          <div className=' grid grid-cols-2 gap-5  mt-10 max-sm:grid-cols-1'>
            <div>
              <div className='flex items-center gap-5 rounded shadow-md p-2 bg-[#252525] hover:mb-1 duration-150'>
                <div className='p-3 bg-[#333] rounded'>
<PersonIcon className='text-[#28a745]'/>
</div>
<div className='flex flex-col'>
<h2 className='text-gray-400 text-sm'>Name</h2>
<h2>AbdElrahman Ahmed</h2>
</div>
              </div>
              <div className='flex items-center gap-5 rounded shadow-md p-2 bg-[#252525] hover:mb-1 duration-150'>
                <div className='p-3 bg-[#333] rounded'>
<SchoolIcon className='text-[#28a745]'/>
</div>
<div className='flex flex-col'>
<h2 className='text-gray-400 text-sm'>Education</h2>
<h2>Computer Science,</h2>
<h2>Acu</h2>
</div>
              </div>
              <div className='flex items-center gap-5 rounded shadow-md p-2 bg-[#252525] hover:mb-1 duration-150'>
                <div className='p-3 bg-[#333] rounded'>
<LocalPhoneIcon className='text-[#28a745]'/>
</div>
<div className='flex flex-col'>
<h2 className='text-gray-400 text-sm'>Phone</h2>
<h2>+20 1155209267</h2>
</div>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-5 rounded shadow-md p-2 bg-[#252525] hover:mb-1 duration-150'>
                <div className='p-3 bg-[#333] rounded'>
<LocationPinIcon className='text-[#28a745]'/>
</div>
<div className='flex flex-col'>
<h2 className='text-gray-400 text-sm'>Location</h2>
<h2>Giza, Egypt</h2>
</div>
              </div>
              <div className='flex items-center gap-5 rounded shadow-md p-2 bg-[#252525] hover:mb-1 duration-150'>
                <div className='p-3 bg-[#333] rounded'>
<EmailIcon className='text-[#28a745]'/>
</div>
<div className='flex flex-col'>
<h2 className='text-gray-400 text-sm'>Email</h2>
<h2>abdelrahmanahmed7088</h2>
<h2>@gamil.com</h2>
</div>
              </div>
              <div className='flex items-center gap-5 rounded shadow-md p-2 bg-[#252525] hover:mb-1 duration-150'>
                <div className='p-3 bg-[#333] rounded'>
<CheckCircleIcon className='text-[#28a745]'/>
</div>
<div className='flex flex-col'>
<h2 className='text-gray-400 text-sm'>Status</h2>
<h2>Available for Work</h2>
</div>
              </div>
            </div>

          </div>
          <h1 className='my-5 font-bold'>Interests & Focus</h1>
          <div className='flex items-center gap-3 flex-wrap'>
            <p className='bg-[#dcfce7] text-[#28a745] rounded-md px-3 py-1 font-medium'>Frontend Development</p>
            <p className='bg-[#dcfce7] text-[#28a745] rounded-md px-3 py-1 font-medium'>Backend Development</p>
          </div>
          <div className='flex items-center gap-5 mb-5'>
            <button className='flex items-center gap-2 bg-[#28a745] text-white px-3 py-2 max-sm:px-2 rounded-md mt-5 hover:bg-[#218838] duration-150'><DownloadIcon/> Download CV</button>
            <button className='flex items-center gap-2 border border-[#28a745] text-[#28a745] px-3 py-2 max-sm:px-2 rounded-md mt-5 hover:bg-[#28a745] hover:text-white duration-150'><SendIcon/> Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}
