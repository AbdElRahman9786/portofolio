'use client'
import React, { useEffect, useState } from 'react'

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      const target = e.target as HTMLElement
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      
      setIsPointer(isClickable)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  if (isHidden) return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        className='fixed pointer-events-none z-[9999] mix-blend-difference max-md:hidden'
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className={`rounded-full bg-[#28a745] transition-all duration-150 ease-out ${
            isClicking ? 'w-3 h-3' : isPointer ? 'w-5 h-5' : 'w-3 h-3'
          }`}
        />
      </div>
      
      {/* Cursor ring */}
      <div
        className='fixed pointer-events-none z-[9998] max-md:hidden'
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out',
        }}
      >
        <div 
          className={`rounded-full border-2 border-[#28a745] transition-all duration-300 ease-out ${
            isClicking ? 'w-8 h-8 opacity-50' : isPointer ? 'w-12 h-12 opacity-100' : 'w-8 h-8 opacity-50'
          }`}
        />
      </div>
    </>
  )
}
