'use client'
import React from 'react'

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-[#28a745] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-40 w-80 h-80 bg-[#20c997] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-20 w-80 h-80 bg-[#28a745] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#6ee7b7] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-6000"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#28a745] rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#20c997] rounded-full opacity-40 animate-float animation-delay-2000"></div>
      <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-[#28a745] rounded-full opacity-30 animate-float animation-delay-4000"></div>
      <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-[#6ee7b7] rounded-full opacity-20 animate-float animation-delay-6000"></div>
      <div className="absolute top-3/4 left-1/2 w-3 h-3 bg-[#28a745] rounded-full opacity-35 animate-float animation-delay-3000"></div>
      <div className="absolute top-1/5 right-1/2 w-4 h-4 bg-[#20c997] rounded-full opacity-25 animate-float animation-delay-5000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#28a74508_1px,transparent_1px),linear-gradient(to_bottom,#28a74508_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,white_70%)]"></div>
    </div>
  )
}
