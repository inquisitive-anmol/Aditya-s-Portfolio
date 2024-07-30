import React from 'react'

const Navbar = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
}) => {
  return (
<div className='w-full flex items-center justify-between text-xl top-0 left-0 absolute z-20 py-2 lg:px-32 md:px-8 p-4 pt-4'>
  <div className='lg:text-4xl text-2xl text-blue-200 font-bold w-1/5'>Aditya</div>
  <div className='lg:w-[48%] md:w-3/5  w-[70%] '>
  <ul className='flex items-center justify-between'>
 {
   navItems.map(({link, name}) => (
    <li> <a className='text-white hover:text-meColorT-200 cursor-pointer md:text-md lg:text-xl text-xs' href={link}>{name}</a></li>
   ))
 }
    
  </ul>
  </div>
</div>
  )
}

export default Navbar