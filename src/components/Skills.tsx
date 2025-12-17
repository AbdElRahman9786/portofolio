'use client'
import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import BrushIcon from '@mui/icons-material/Brush';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <CodeIcon className="text-[#28a745]" />,
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      icon: <StorageIcon className="text-[#28a745]" />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'SQL']
    },
    {
      title: 'Tools & Technologies',
      icon: <BuildIcon className="text-[#28a745]" />,
      skills: ['Git & GitHub', 'VS Code', 'npm/yarn', 'Vercel', 'AWS S3']
    },
    {
      title: 'Design & Others',
      icon: <BrushIcon className="text-[#28a745]" />,
      skills: ['Responsive Design', 'UI/UX Principles', 'Figma', 'Framer Motion']
    }
  ]

  return (
    <div id="skills" className='w-[90%] mx-auto mt-20'>
      <div className='text-center mb-10'>
        <h1 className='text-3xl font-bold mb-3'>My Skills</h1>
        <p className='text-gray-500'>Technologies and tools I work with</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {skillCategories.map((category, index) => (
          <div key={index} className='bg-[#1a1a1a] border border-gray-800 shadow-2xl rounded-xl p-6 hover:shadow-3xl transition-shadow duration-300'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='p-3 bg-[#252525] rounded-lg'>
                {category.icon}
              </div>
              <h2 className='text-xl font-bold'>{category.title}</h2>
            </div>
            
            <div className='flex flex-wrap gap-3'>
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className='bg-[#252525] text-gray-300 px-4 py-2 rounded-full font-medium hover:bg-[#28a745] hover:text-white transition-all duration-300'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Icons */}
      <div className='mt-16 text-center'>
        <h2 className='text-2xl font-bold mb-8'>Tech Stack</h2>
        <div className='flex flex-wrap justify-center gap-4'>
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Git', 'Vercel'].map((tech, index) => (
            <span 
              key={index}
              className='bg-[#28a745] text-white px-6 py-3 rounded-full font-medium hover:bg-[#218838] hover:scale-105 transition-all duration-300 cursor-default'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
