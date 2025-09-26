import React from 'react'
import img1 from '../../public/images/Screenshot 2025-09-24 155900.png'
import img2 from '../../public/images/Screenshot 2025-09-26 170034.png'
import img3 from '../../public/images/Screenshot 2025-09-26 171114.png'
import img4 from '../../public/images/Screenshot 2025-09-26 171657.png'
import Image, { StaticImageData } from 'next/image'

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
    description: `Built a full-stack online bookstore. Frontend is a React/Vite app for browsing books, viewing details, and managing a shopping cart. Backend is a REST API (Node.js/Express) to handle book data, CRUD operations, authentication, and API routing. The two integrate so the frontend fetches and displays data dynamically from the backend.`,
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
  description: `Built a full-stack restaurant ordering platform using Next.js. 
Customers can browse meals, view details, add to cart, and place orders. 
The backend leverages Next.js API routes with better-sqlite3 for fast local database access. 
Integrated AWS S3 for asset storage, Tailwind CSS for styling, and Framer Motion for animations. 
The app provides a smooth and responsive user experience.`,
  technologies: [
    'Next.js',
    'React',
    'JavaScript',
    'API Routes',
    'Better SQLite3',
    'AWS S3',
    'Tailwind CSS',
    'Framer Motion',
    'Lucide Icons',
    'Swiper'
  ],
  demo: 'https://fooder-orcin.vercel.app/',
  github: 'https://github.com/AbdElRahman9786/fooder',
  image_link: img2
},
{
  id: 3,
  title: 'ASCDC (Multilingual / International Site)',
  description: `Built a multilingual international website using Next.js, offering content in multiple languages. 
Features include internationalization (i18n) setup, localized routing, content management, and responsive design. 
Backend logic is handled with Next.js API routes for data fetching, translations, and content updates.`,
  technologies: [
    'Next.js',
    'React',
    'JavaScript',
    'Next.js API Routes',
    'i18n / Internationalization',
    'Tailwind CSS'  // or whatever styling you used
  ],
  demo: 'https://ascdc.vercel.app/en',
  github: 'https://github.com/AbdElRahman9786/ascdc',
  image_link: img3
},
{
  id: 4,
  title: 'QuizApp (Interactive Quiz Game)',
  description: `Developed a frontend quiz application using React. 
Users can answer multiple-choice questions, view results instantly, and track their score. 
The app features dynamic state management, responsive design, and smooth user experience without requiring a backend.`,
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
    <div className='w-[90%] mx-auto shadow-2xl p-3 rounded-md'>
        <div className='text-center mt-20'>
       <h1 className='text-3xl font-bold mb-3'>MyProjects</h1> 
       <p className='text-[#665b5e]'>A showcase of my development work across web</p>
       </div>
       <div className='mt-10'>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {projects.map((project)=>(<div key={project.id} className=' shadow-2xl p-2 rounded-md hover:scale-105 duration-150'>
                <Image src={project.image_link} alt={project.title} className='w-full  object-cover rounded-md mb-4'/>
                <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
                <p className='text-[#575b5e] mb-4'>{project.description}</p>
                <div className='mb-4'>
                    <h3 className='font-semibold mb-2'>Technologies Used:</h3>
                    <ul className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech,index)=>(<li key={index} className='bg-[#f1f1f1] px-2 py-1 rounded'>{tech}</li>))}
                    </ul>
                </div>
                <div className='flex gap-4 max-md:flex-wrap'>
                    <a href={project.demo} target='_blank' rel='noopener noreferrer' className='bg-black text-white px-4 py-2  rounded hover:bg-gray-800 duration-150'>Live Demo</a>
                  {project.github?(
                    <a href={project.github} target='_blank' rel='noopener noreferrer' className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800 duration-150'>GitHub Code</a>):(
                      <>
 <a href={project.github_frontend} target='_blank' rel='noopener noreferrer' className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800 duration-150'>Frontend Code</a>
                    <a href={project.github_backend} target='_blank' rel='noopener noreferrer' className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800 duration-150'>Backend Code</a>
                    </>
                    )
                  } 
                </div>
            </div>
            ))}
         </div>
       </div>
        </div>
  )
}
