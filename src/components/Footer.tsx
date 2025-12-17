'use client';
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/abdo-ahmed-b73234264', label: 'LinkedIn' },
    { icon: <GitHubIcon />, link: 'https://github.com/AbdElRahman9786', label: 'GitHub' },
    { icon: <FacebookIcon />, link: 'https://www.facebook.com/share/1DyA27T4jm/', label: 'Facebook' },
    { icon: <InstagramIcon />, link: 'https://www.instagram.com/abd_el_rahman15', label: 'Instagram' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='bg-[#111] text-white mt-20'>
      {/* Main Footer Content */}
      <div className='w-[90%] mx-auto py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {/* Brand Section */}
          <div>
            <h2 className='text-2xl font-bold mb-4'>AbdElRahman Ahmed</h2>
            <p className='text-gray-400 mb-4'>
              A passionate Full Stack Developer creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className='flex gap-4'>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='text-gray-400 hover:text-[#28a745] transition-colors duration-300 hover:scale-110'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className='text-gray-400 hover:text-[#28a745] hover:pl-2 transition-all duration-300'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact Info</h3>
            <div className='space-y-3 text-gray-400'>
              <p>📍 Giza, Egypt</p>
              <p>📧 abdelrahmanahmed7088@gmail.com</p>
              <p>📱 +20 1155209267</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='w-[90%] mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-400 text-center md:text-left flex items-center gap-1'>
            © {currentYear} AbdElRahman Ahmed. Made with <FavoriteIcon className='text-red-500' fontSize='small' /> All rights reserved.
          </p>
          
          {/* Scroll to Top Button */}
          <button 
            onClick={scrollToTop}
            className='bg-[#28a745] p-2 rounded-full hover:bg-[#218838] hover:scale-110 transition-all duration-300'
            aria-label='Scroll to top'
          >
            <KeyboardArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  )
}
