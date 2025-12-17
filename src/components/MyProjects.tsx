import React from 'react'
import img1 from '../../public/images/Screenshot 2025-09-24 155900.png'
import img2 from '../../public/images/Screenshot 2025-09-26 170034.png'
import img3 from '../../public/images/Screenshot 2025-09-26 171114.png'
import img4 from '../../public/images/Screenshot 2025-09-26 171657.png'
import Image, { StaticImageData } from 'next/image'
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

export const MyProjects = () => {
    type project={
    id:number,
    title:string,
    description:string, 
    technologies:string[],
    demo:string,
    github_frontend?:string,
    github_backend?:string,
    image_link:StaticImageData,
    github?:string

    }[]
    const projects:project=[
          {
    id: 1,
    title: 'Booxtore (Online Bookstore)',
    description: `Built a full-stack online bookstore. Frontend is a React/Vite app for browsing books, viewing details, and managing a shopping cart. Backend is a REST API (Node.js/Express) to handle book data, CRUD operations, authentication, and API routing.`,
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'Node.js',
      'Express',
      'REST API',
      'MongoDB'  
    ],
    demo: 'https://booxtore.vercel.app/',
    github_frontend: 'https://github.com/AbdElRahman9786/Booxtore',
    github_backend: 'https://github.com/AbdElRahman9786/library-api',
    image_link: img1
    
  },
  {
  id: 2,
  title: 'Fooder (Restaurant Ordering App)',
  description: `Built a full-stack restaurant ordering platform using Next.js. Customers can browse meals, view details, add to cart, and place orders. Integrated AWS S3 for asset storage, Tailwind CSS for styling, and Framer Motion for animations.`,
  technologies: [
    'Next.js',
    'React',
    'JavaScript',
    'API Routes',
    'SQLite3',
    'AWS S3',
    'Tailwind CSS',
    'Framer Motion'
  ],
  demo: 'https://fooder-orcin.vercel.app/',
  github: 'https://github.com/AbdElRahman9786/fooder',
  image_link: img2
},
{
  id: 3,
  title: 'ASCDC (Multilingual Site)',
  description: `Built a multilingual international website using Next.js, offering content in multiple languages. Features include internationalization (i18n) setup, localized routing, content management, and responsive design.`,
  technologies: [
    'Next.js',
    'React',
    'JavaScript',
    'API Routes',
    'i18n',
    'Tailwind CSS'
  ],
  demo: 'https://ascdc.vercel.app/en',
  github: 'https://github.com/AbdElRahman9786/ascdc',
  image_link: img3
},
{
  id: 4,
  title: 'QuizApp (Interactive Quiz Game)',
  description: `Developed a frontend quiz application using React. Users can answer multiple-choice questions, view results instantly, and track their score. Features dynamic state management and smooth user experience.`,
  technologies: [
    'React',
    'JavaScript',
    
  ],
  demo: 'https://quiz-app-umber-one.vercel.app/',
  github: 'https://github.com/AbdElRahman9786/QuizApp',
  image_link: img4
}
    ]

  return (
    <div id="projects" className='w-[90%] mx-auto mt-20'>
      {/* Section Header */}
      <div className='text-center mb-12'>
        <span className='bg-[#dcfce7] text-[#28a745] px-4 py-2 rounded-full text-sm font-semibold'>PORTFOLIO</span>
        <h1 className='text-4xl font-bold mt-4 mb-3'>My Projects</h1> 
        <p className='text-gray-500 max-w-2xl mx-auto'>A showcase of my development work — from full-stack applications to interactive web experiences</p>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {projects.map((project) => (
          <div 
            key={project.id} 
            className='group bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-800'
          >
            {/* Image Container */}
            <div className='relative overflow-hidden'>
              <Image 
                src={project.image_link} 
                alt={project.title} 
                className='w-full h-56 object-cover object-top group-hover:scale-110 transition-transform duration-500'
              />
              {/* Overlay on hover */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4'>
                <a 
                  href={project.demo} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='bg-white text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-[#28a745] hover:text-white transition-colors duration-300'
                >
                  <LaunchIcon fontSize='small'/> View Live
                </a>
              </div>
            </div>

            {/* Content */}
            <div className='p-6'>
              {/* Title */}
              <h2 className='text-xl font-bold mb-3 group-hover:text-[#28a745] transition-colors duration-300'>
                {project.title}
              </h2>

              {/* Description */}
              <p className='text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3'>
                {project.description}
              </p>

              {/* Technologies */}
              <div className='mb-5'>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.slice(0, 5).map((tech, index) => (
                    <span 
                      key={index} 
                      className='bg-[#252525] text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-[#28a745] hover:text-white transition-colors duration-300'
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className='bg-[#28a745] text-white px-3 py-1 rounded-full text-xs font-medium'>
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex gap-3 pt-4 border-t border-gray-800'>
                <a 
                  href={project.demo} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='flex-1 bg-[#28a745] text-white py-2.5 rounded-lg font-semibold text-center hover:bg-[#218838] transition-colors duration-300 flex items-center justify-center gap-2'
                >
                  <LaunchIcon fontSize='small'/> Live Demo
                </a>
                {project.github ? (
                  <a 
                    href={project.github} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='flex-1 border-2 border-gray-700 text-gray-300 py-2.5 rounded-lg font-semibold text-center hover:border-[#28a745] hover:text-[#28a745] transition-colors duration-300 flex items-center justify-center gap-2'
                  >
                    <GitHubIcon fontSize='small'/> Code
                  </a>
                ) : (
                  <div className='flex-1 flex gap-2'>
                    <a 
                      href={project.github_frontend} 
                      target='_blank' 
                      rel='noopener noreferrer' 
                      className='flex-1 border-2 border-gray-700 text-gray-300 py-2.5 rounded-lg font-semibold text-center hover:border-[#28a745] hover:text-[#28a745] transition-colors duration-300 text-xs flex items-center justify-center'
                    >
                      Frontend
                    </a>
                    <a 
                      href={project.github_backend} 
                      target='_blank' 
                      rel='noopener noreferrer' 
                      className='flex-1 border-2 border-gray-700 text-gray-300 py-2.5 rounded-lg font-semibold text-center hover:border-[#28a745] hover:text-[#28a745] transition-colors duration-300 text-xs flex items-center justify-center'
                    >
                      Backend
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className='text-center mt-12'>
        <a 
          href="https://github.com/AbdElRahman9786" 
          target="_blank" 
          rel="noopener noreferrer"
          className='inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-[#28a745] hover:border-[#28a745] transition-colors duration-300'
        >
          <GitHubIcon /> View More on GitHub
        </a>
      </div>
    </div>
  )
}
