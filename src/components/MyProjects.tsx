import React from 'react'
import img from '../../public/images/Screenshot 2025-09-24 155900.png'
import Image from 'next/image'

export const MyProjects = () => {
    type project={
    id:number,
    title:string,
    description:string, 
    technologies:string[],
    demo:string,
    github_frontend:string,
    github_backend:string,
    image_link:string
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
    image_link: img.src
    
  },
  
    ]
  return (
    <div className='w-[90%] mx-auto shadow-2xl p-3 rounded-md'>
        <div className='text-center mt-20'>
       <h1 className='text-3xl font-bold mb-3'>MyProjects</h1> 
       <p className='text-[#665b5e]'>A showcase of my development work across web</p>
       </div>
       <div className='mt-10'>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {projects.map((project)=>(<div key={project.id} className='border p-2 rounded-md'>
                <Image src={img} alt={project.title} className='w-full  object-cover rounded-md mb-4'/>
                <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
                <p className='text-[#575b5e] mb-4'>{project.description}</p>
                <div className='mb-4'>
                    <h3 className='font-semibold mb-2'>Technologies Used:</h3>
                    <ul className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech,index)=>(<li key={index} className='bg-[#f1f1f1] px-2 py-1 rounded'>{tech}</li>))}
                    </ul>
                </div>
                <div className='flex gap-4'>
                    <a href={project.demo} target='_blank' rel='noopener noreferrer' className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800 duration-150'>Live Demo</a>
                    <a href={project.github_frontend} target='_blank' rel='noopener noreferrer' className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800 duration-150'>Frontend Code</a>
                    <a href={project.github_backend} target='_blank' rel='noopener noreferrer' className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800 duration-150'>Backend Code</a>
                </div>
            </div>
            ))}
         </div>
       </div>
        </div>
  )
}
