'use client'
import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'a04b6135-08dc-4333-98cf-9401a53d75d2', // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon className="text-[#28a745]" />,
      title: 'Email',
      value: 'abdelrahmanahmed7088@gmail.com',
      link: 'mailto:abdelrahmanahmed7088@gmail.com'
    },
    {
      icon: <LocalPhoneIcon className="text-[#28a745]" />,
      title: 'Phone',
      value: '+20 1155209267',
      link: 'tel:+201155209267'
    },
    {
      icon: <LocationOnIcon className="text-[#28a745]" />,
      title: 'Location',
      value: 'Giza, Egypt',
      link: null
    }
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/abdo-ahmed-b73234264', label: 'LinkedIn' },
    { icon: <GitHubIcon />, link: 'https://github.com/AbdElRahman9786', label: 'GitHub' },
    { icon: <FacebookIcon />, link: 'https://www.facebook.com/share/1DyA27T4jm/', label: 'Facebook' },
    { icon: <InstagramIcon />, link: 'https://www.instagram.com/abd_el_rahman15', label: 'Instagram' }
  ];

  return (
    <div id="contact" className='w-[90%] mx-auto mt-20'>
      <div className='text-center mb-10'>
        <h1 className='text-3xl font-bold mb-3'>Get In Touch</h1>
        <p className='text-gray-500'>Have a project in mind? Let&apos;s talk about it</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {/* Contact Info Section */}
        <div className='space-y-6'>
          <div className='bg-[#1a1a1a] border border-gray-800 shadow-2xl rounded-xl p-6'>
            <h2 className='text-2xl font-bold mb-6'>Contact Information</h2>
            
            <div className='space-y-4'>
              {contactInfo.map((info, index) => (
                <div key={index} className='flex items-center gap-4 p-3 rounded-lg hover:bg-[#252525] transition-colors duration-300'>
                  <div className='p-3 bg-[#252525] rounded-lg'>
                    {info.icon}
                  </div>
                  <div>
                    <p className='text-gray-400 text-sm'>{info.title}</p>
                    {info.link ? (
                      <a href={info.link} className='font-medium hover:text-[#28a745] transition-colors'>
                        {info.value}
                      </a>
                    ) : (
                      <p className='font-medium'>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className='mt-8'>
              <h3 className='font-bold mb-4'>Follow Me</h3>
              <div className='flex gap-4'>
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.label}
                    className='p-3 bg-[#252525] rounded-lg text-gray-300 hover:bg-[#28a745] hover:text-white transition-all duration-300 hover:scale-110'
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Availability Status */}
          <div className='bg-gradient-to-r from-[#28a745] to-[#20c997] rounded-xl p-6 text-white'>
            <h3 className='text-xl font-bold mb-2'>Available for Freelance</h3>
            <p className='opacity-90'>I&apos;m currently accepting new projects. Feel free to reach out!</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className='bg-[#1a1a1a] border border-gray-800 shadow-2xl rounded-xl p-6'>
          <h2 className='text-2xl font-bold mb-6'>Send Me a Message</h2>
          
          {status === 'success' && (
            <div className='mb-4 p-4 bg-[#28a745]/20 border border-[#28a745] rounded-lg text-[#28a745]'>
              ✓ Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!
            </div>
          )}
          
          {status === 'error' && (
            <div className='mb-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400'>
              ✗ Oops! Something went wrong. Please try again or email me directly.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium mb-2'>Your Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className='w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#252525] focus:border-[#28a745] focus:ring-2 focus:ring-[#28a745]/20 outline-none transition-all duration-300 text-white placeholder-gray-500 disabled:opacity-50'
                  placeholder='John Doe'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2'>Your Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className='w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#252525] focus:border-[#28a745] focus:ring-2 focus:ring-[#28a745]/20 outline-none transition-all duration-300 text-white placeholder-gray-500 disabled:opacity-50'
                  placeholder='john@example.com'
                />
              </div>
            </div>

            <div>
              <label htmlFor='subject' className='block text-sm font-medium mb-2'>Subject</label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isLoading}
                className='w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#252525] focus:border-[#28a745] focus:ring-2 focus:ring-[#28a745]/20 outline-none transition-all duration-300 text-white placeholder-gray-500 disabled:opacity-50'
                placeholder='Project Discussion'
              />
            </div>

            <div>
              <label htmlFor='message' className='block text-sm font-medium mb-2'>Message</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                rows={5}
                className='w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#252525] focus:border-[#28a745] focus:ring-2 focus:ring-[#28a745]/20 outline-none transition-all duration-300 resize-none text-white placeholder-gray-500 disabled:opacity-50'
                placeholder='Tell me about your project...'
              />
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className='w-full bg-[#28a745] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#218838] hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100'
            >
              {isLoading ? (
                <span className='animate-pulse'>Sending...</span>
              ) : (
                <>
                  <SendIcon /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
