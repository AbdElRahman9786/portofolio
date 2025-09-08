import React from 'react'

import { SideNav } from './SideNav';
import { Links } from './Links';


export const Navbar = () => {
  return (
    <>
    <div className='!sticky top-5 rounded-4xl bg-white w-2/3 mx-auto px-5 py-3 shadow-2xl max-xl:hidden'>
      <div className='flex justify-between'>
          <Links/>
      </div>
    </div>
    <SideNav />
    </>
  )
}

