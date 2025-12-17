'use client'
import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      role: 'CEO at TechStart',
      content: 'AbdElRahman delivered an exceptional website for our startup. His attention to detail and understanding of modern web design trends really set him apart. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Mohamed',
      role: 'Project Manager',
      content: 'Working with AbdElRahman was a great experience. He understood our requirements perfectly and delivered a responsive, beautiful website on time. Will definitely work with him again.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Omar Khaled',
      role: 'Founder of BookHub',
      content: 'The bookstore website AbdElRahman built for us exceeded our expectations. Clean code, great performance, and excellent communication throughout the project.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Fatima Ali',
      role: 'Restaurant Owner',
      content: 'Our restaurant ordering app is now a key part of our business. AbdElRahman created a smooth, user-friendly experience that our customers love. Thank you!',
      rating: 5,
    },
  ]

  return (
    <div id="testimonials" className='w-[90%] mx-auto mt-20'>
      <div className='text-center mb-10'>
        <h1 className='text-3xl font-bold mb-3'>Client Testimonials</h1>
        <p className='text-gray-500'>What my clients say about working with me</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className='bg-white shadow-2xl rounded-xl p-6 hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 relative'
          >
            <div className='absolute top-4 right-4 text-[#28a745] opacity-20'>
              <FormatQuoteIcon style={{ fontSize: 60 }} />
            </div>
            
            {/* Rating Stars */}
            <div className='flex gap-1 mb-4'>
              {[...Array(testimonial.rating)].map((_, index) => (
                <StarIcon key={index} className='text-yellow-400' fontSize='small' />
              ))}
            </div>

            {/* Testimonial Content */}
            <p className='text-gray-500 mb-6 leading-relaxed italic'>
              &quot;{testimonial.content}&quot;
            </p>

            {/* Client Info */}
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 bg-[#28a745] rounded-full flex items-center justify-center text-white font-bold text-lg'>
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h3 className='font-bold text-lg'>{testimonial.name}</h3>
                <p className='text-gray-500 text-sm'>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className='text-center mt-12 p-8 bg-gradient-to-r from-[#28a745] to-[#20c997] rounded-2xl text-white'>
        <h2 className='text-2xl font-bold mb-4'>Ready to start your project?</h2>
        <p className='mb-6 opacity-90'>Let&apos;s create something amazing together</p>
        <button className='bg-white text-[#28a745] px-8 py-3 rounded-full font-bold hover:scale-105 hover:shadow-lg transition-all duration-300'>
          Get in Touch
        </button>
      </div>
    </div>
  )
}
