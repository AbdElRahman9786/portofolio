import React from 'react'
import img from '../../public/images/WhatsApp Image 2025-09-07 at 23.15.33_8434d320.jpg'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='flex w-[80%] mx-auto justify-between items-center mt-20'>
      
        <div className='basis-3/4 '>
            <p className='mb-5 bg-[#dcfce7] text-[#28a745] border border-[#28a745] w-fit px-3 py-2 rounded-3xl font-bold hover:scale-105 hover:shadow-[28a745] duration-150'>Available for freelance work</p>
            <h1 className='text-5xl font-bold'>Hi, I'm <span>AbdElRahman Ahmed</span></h1>
            <h2 className='mt-3 opacity-50'>A Frontend Developer</h2>
            <p className='mt-3 opacity-50 font-bold'>I create beautiful, functional, and user-centered digital experiences.
I bring ideas to life with clean code and thoughtful design.</p>
<div className='mt-5 flex gap-5'>
<button className='bg-[#28a745] text-white px-4 py-2 rounded-3xl font-bold hover:scale-105 hover:shadow-[28a745] duration-150'>Lets work together</button>
<button className='border border-[#28a745] text-[#28a745] px-4 py-2 rounded-3xl font-bold hover:scale-105 hover:shadow-[28a745] duration-150'>View Projects</button>
</div>
            </div>
              <div className=' w-1/3'>
            <Image src={img} alt="Hero Image" className=' rounded-2xl '/>
        </div>
        
    </div>
  )
}
