import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between max-w-[1840px] px-2 mx-auto items-center h-24 text-white' >
        <h1 className='w-full text-3xl font-bold text-[#00df9a]' >Garden Of Heathens</h1>
        <ul className='flex hidden' >
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Subscribe</li>

        </ul>
        <div onClick={handleNav}>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div >
        <div className={!nav ? 'fixed left-0 ease-in-out duration-500 top-0 w-[60%] bg-[000300] border-r h-full border-r-gray-900' : 'fixed left-[-100%]' } >
            
            <ul className='pt-24 uppercase ' > 
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Subscribe</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar