
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
            <p className='mb-5 bg-[#dcfce7] text-[#28a745] border border-[#28a745] w-fit px-3 py-2 rounded-3xl font-bold block max-xl:mx-auto hover:scale-105 hover:shadow-[28a745] duration-150'>Available for freelance work</p>
            <h1 className='text-5xl font-bold max-md:text-3xl'>Hi, I&apos;m <span>AbdElRahman Ahmed</span></h1>
            <h2 className='mt-3 opacity-50'>A Frontend Developer</h2>
            <p className='mt-3 opacity-50 font-bold'>I create beautiful, functional, and user-centered digital experiences.
I bring ideas to life with clean code and thoughtful design.</p>
<div className='mt-5 flex gap-5 max-xl:justify-center max-md:flex-col max-md:gap-3'>
<button className='bg-[#28a745] text-white px-4 py-2 max-md:px-2 rounded-3xl font-bold hover:scale-105 hover:shadow-[28a745] hover:bg-white hover:text-[#28a745] duration-150'>Lets work together</button>
<button className='border border-[#28a745] text-[#28a745] px-4 py-2 max-md:px-2 max-md:py-1 rounded-3xl font-bold hover:scale-105 hover:shadow-[28a745] hover:bg-[#28a745] hover:text-white duration-150'>View Projects</button>

</div>
<div className='flex gap-3 text-[#28a745] mt-5 max-xl:justify-center'>
  <div className='hover:scale-125 duration-150 cursor-pointer'>
    <LinkedInIcon />
    </div>
    <div className='hover:scale-125 duration-150 cursor-pointer'>
    <GitHubIcon />
    </div>
    <div className='hover:scale-125 duration-150 cursor-pointer'>
    <FacebookIcon />
    </div>
    <div className='hover:scale-125 duration-150 cursor-pointer'>
    <InstagramIcon />
    </div>
    </div>
            </div>
              <div className=' w-1/3 max-xl:w-1/2 max-md:w-3/4 max-xl:basis-full'>
            <Image src={img} alt="Hero Image" className=' rounded-2xl ' priority/>
        </div>
        
    </div>
  )
}
