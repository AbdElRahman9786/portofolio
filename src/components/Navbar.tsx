

import { SideNav } from './SideNav';
import { Links } from './Links';



export const Navbar = () => {
  
  return (
    <>
    <div className='!sticky top-5 z-50 rounded-4xl bg-[#1a1a1a] border border-gray-800 w-2/3 mx-auto px-5 py-3 shadow-2xl max-xl:hidden'>
      <div className='flex justify-between'>
          <Links/>
      </div>
    </div>
    <SideNav />
    </>
  )
}

