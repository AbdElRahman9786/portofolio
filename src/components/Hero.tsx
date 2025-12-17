'use client'
import img from '../../public/images/WhatsApp Image 2025-09-07 at 23.15.33_8434d320.jpg';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Hero = () => {
  return (
    <div className='flex w-[80%] mx-auto justify-between items-center mt-20 max-xl:flex-col max-xl:gap-10'>
      
        <div className='basis-3/4 max-xl:text-center max-xl:basis-full'>
            <p className='mb-5 bg-[#dcfce7] text-[#28a745] border border-[#28a745] w-fit px-3 py-2 rounded-3xl font-bold block max-xl:mx-auto hover:scale-105 hover:shadow-[28a745] duration-150 animate-fade-in-down'>Available for freelance work</p>
            <h1 className='text-5xl font-bold max-md:text-3xl animate-fade-in-up animation-delay-200'>Hi, I&apos;m <span className='text-[#28a745] animate-text-shimmer bg-clip-text'>AbdElRahman Ahmed</span></h1>
            <h2 className='mt-3 opacity-50 animate-fade-in-up animation-delay-400'>A Full Stack Developer</h2>
            <p className='mt-3 opacity-50 font-bold animate-fade-in-up animation-delay-600'>I create beautiful, functional, and user-centered digital experiences.
I bring ideas to life with clean code and thoughtful design.</p>
<div className='mt-5 flex gap-5 max-xl:justify-center max-md:flex-col max-md:gap-3 animate-fade-in-up animation-delay-800'>
<a href="#contact" className='bg-[#28a745] text-white px-4 py-2 max-md:px-2 rounded-3xl font-bold hover:scale-105 hover:shadow-[28a745] hover:bg-[#218838] duration-150'>Lets work together</a>
<a href="#projects" className='border border-[#28a745] text-[#28a745] px-4 py-2 max-md:px-2 max-md:py-1 rounded-3xl font-bold hover:scale-105 hover:shadow-[28a745] hover:bg-[#28a745] hover:text-white duration-150'>View Projects</a>

</div>
<div className='flex gap-3 text-[#28a745] mt-5 max-xl:justify-center animate-fade-in-up animation-delay-1000'>
  <a href='https://www.linkedin.com/in/abdo-ahmed-b73234264' target='_blank' rel='noopener noreferrer' className='hover:scale-125 duration-150 cursor-pointer'>
    <LinkedInIcon />
    </a>
    <a href='https://github.com/AbdElRahman9786' target='_blank' rel='noopener noreferrer' className='hover:scale-125 duration-150 cursor-pointer'>
    <GitHubIcon />
    </a>
    <a href='https://www.facebook.com/share/1DyA27T4jm/' target='_blank' rel='noopener noreferrer' className='hover:scale-125 duration-150 cursor-pointer'>
    <FacebookIcon />
    </a>
    <a href='https://www.instagram.com/abd_el_rahman15' target='_blank' rel='noopener noreferrer' className='hover:scale-125 duration-150 cursor-pointer'>
    <InstagramIcon />
    </a>
    </div>
            </div>
              <div className='w-1/3 max-xl:w-1/2 max-md:w-3/4 max-xl:basis-full animate-fade-in-left animation-delay-400'>
            <Image src={img} alt="Hero Image" className='rounded-2xl hover:scale-105 transition-transform duration-500' priority/>
        </div>
        
    </div>
  )
}
