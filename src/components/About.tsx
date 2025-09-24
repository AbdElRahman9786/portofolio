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
        <p className='text-[#575b5e]'>Passionate about creating innovative solutions through technology</p>
      </div>
      <div className='flex items-center justify-center mt-10 max-lg:flex-col gap-10'>
        <div className=''>
          <Image src={profilePic} alt='Profile Picture' className='w-[70%] rounded-2xl max-lg:hidden' />
        </div>
        <div className='p-3 rounded-md shadow-2xl'>
          <h1 className='text-2xl font-bold mb-3'>Hello There!</h1>
          <p>I&apos;m a Full Stack Developer specialized in building modern, trend-aligned websites that reflect the essence of today&apos;s digital design era. I help startups and small businesses who are often concerned about cost, by delivering high-performing, scalable, and visually impactful solutions — without breaking their budget. My mission is to make cutting-edge design and technology accessible to everyone, no matter the size of their business. Feel free to get in touch for value-driven results and a hands-on experience.</p>
          <div className=' grid grid-cols-2 gap-5  mt-10 max-sm:grid-cols-1'>
            <div>
              <div className='flex items-center gap-5 rounded shadow-md p-2  hover:mb-1 duration-150'>
                <div className='p-3 bg-[#f1f1f1] rounded'>
<PersonIcon/>
</div>
<div className='flex flex-col'>
<h2>Name</h2>
<h2>AbdElrahman Ahmed</h2>
</div>
              </div>
              <div className='flex items-center gap-5 rounded shadow-md p-2 hover:mb-1 duration-150'>
                <div className='p-3 bg-[#f1f1f1] rounded'>
<SchoolIcon/>
</div>
<div className='flex flex-col'>
<h2>Education</h2>
<h2>Computer Science,</h2>
<h2>Acu</h2>
</div>
              </div>
              <div className='flex items-center gap-5 rounded shadow-md p-2 hover:mb-1 duration-150'>
                <div className='p-3 bg-[#f1f1f1] rounded'>
<LocalPhoneIcon/>
</div>
<div className='flex flex-col'>
<h2>Phone</h2>
<h2>+20 1155209267</h2>
</div>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-5 rounded shadow-md p-2 hover:mb-1 duration-150'>
                <div className='p-3 bg-[#f1f1f1] rounded'>
<LocationPinIcon/>
</div>
<div className='flex flex-col'>
<h2>Location</h2>
<h2>Giza, Egypt</h2>
</div>
              </div>
              <div className='flex items-center gap-5 rounded shadow-md p-2 hover:mb-1 duration-150'>
                <div className='p-3 bg-[#f1f1f1] rounded'>
<EmailIcon/>
</div>
<div className='flex flex-col'>
<h2>Email</h2>
<h2>abdelrahmanahmed7088</h2>
<h2>@gamil.com</h2>
</div>
              </div>
              <div className='flex items-center gap-5 rounded shadow-md p-2 hover:mb-1 duration-150'>
                <div className='p-3 bg-[#f1f1f1] rounded'>
<CheckCircleIcon/>
</div>
<div className='flex flex-col'>
<h2>Status</h2>
<h2>Available for Work</h2>
</div>
              </div>
            </div>

          </div>
          <h1 className='my-5 font-bold'>Interests & Focus</h1>
          <div className='flex items-center gap-3 flex-wrap'>
            <p className='bg-[#ced4da] rounded-md  px-2'>Frontend Development</p>
            <p className='bg-[#ced4da] rounded-md  px-2'>Backend Development</p>
          </div>
          <div className='flex items-center gap-5 mb-5'>
            <button className='flex items-center gap-2 bg-black text-white px-3 py-2 max-sm:px-2 rounded-md mt-5 hover:mb-1 duration-150'><DownloadIcon/> Download CV</button>
            <button className='flex items-center gap-2 bg-black text-white px-3 py-2 max-sm:px-2 rounded-md mt-5 hover:mb-1 duration-150'><SendIcon/> Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}
