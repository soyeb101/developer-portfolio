/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react'

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'



const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [shadow,setShadow] = useState(false);

    const handleNav = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
      const handleShadow = () => {
        if(window.scrollY >= 90) {
          setShadow(true)
        } else {
          setShadow(false)
        }
      }
      window.addEventListener('scroll', handleShadow)
    },[])

    
  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[-100] cursor-pointer' : 'fixed w-full h-20  z-[-100] cursor-pointer'}>
    <div className='w-full flex py-6 justify-between items-center  '>
      <h1>SI</h1>

      <ul className='hidden md:flex '>
      
        <li className='ml-10 text-sm uppercase hover:border-b '>
          <a href='#hero'>Home</a>
          </li>
      
      
        <li className='ml-10 text-sm uppercase hover:border-b '>
        <a href='#about' >About</a>
        </li>
      
      
        <li className='ml-10 text-sm uppercase hover:border-b '>
          <a href='#skills' smooth={true} duration={500}>Skills</a>
        </li>
      
      
        <li className='ml-10 text-sm uppercase hover:border-b '>
          <a href='#projects'>Projects</a>
        </li>
      
      
        <li className='ml-10 text-sm uppercase hover:border-b '>
          <a href='#contact' >Contact</a>
          </li>
      
      </ul>
      
      <div className='md:hidden'>
        <AiOutlineMenu onClick={handleNav} size={25}/>
      </div>
      </div>
      <div className={toggle ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={toggle ? ' fixed left-0 top-0 w-[60%] md:w-[45%] h-screen bg-[#ecf0f3]'
        : 'fixed left-[100%] top-0 p-10 ease-in duration-500'}>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <h2>SI</h2>
                    <div  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose onClick={handleNav}/>
                    </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Let's buld something great together</p>
                </div>
            </div>
            <div className='py-4 flex flex-col'>
           <ul className='uppercase'>
            <li className='py-4 text-sm'>Home</li>
            <li className='py-4 text-sm'>About</li>
            <li className='py-4 text-sm'>Skills</li>
            <li className='py-4 text-sm'>Projects</li>
            <li className='py-4 text-sm'>Contact</li>
           </ul>
           <div className='pt-[100px] '>
            <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>

                <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>

                <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>

                <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>

                <BsPersonLinesFill />
                </div>
                
            </div>
           </div>
            </div>
            <div>
                </div>
                </div>
            </div>

        
      

      
    
    </div>
  )
}

export default Navbar;