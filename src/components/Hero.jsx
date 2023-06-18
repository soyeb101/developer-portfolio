import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Hero = () => {
  return (
    <div  className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center '>
            <div>
                <p className='upparcase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-600'>Hi, I'm <span className='text-[#5651e5]'>Shoaib</span></h1>
                <h1 className='py-2 text-gray-600'>A Front-End Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a front-end web developer i started learning web development in covid era , currently i'am focused on learning backend development.I love to build error free web application and 100% responsive website.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        < AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero