import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import com from '../assets/com.png'
const About = () => {
  return (
    <div name='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-3'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2>Who I Am</h2>
                <p className='py-2 text-gray-600'>I'm a front-end web application developer i build scallable error free website with mobile resposive design in 2020 i started working with HTML & CSS to then i started learning javascript which is a long journey for me i mostly spent my time with learning javascript then i learned basic about NODEJS,EXPRESSJS,MONGODB,REACT and i focused one at a time currently i belive i can build any website front-end with calling API.</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check Out Some of My Projects</p>
            </div>
            <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-104 ease-in duration-300 '>
                <LazyLoadImage className='rounded-xl' src={com} alt="computer" />
            </div>
        </div>
    </div>
  )
}

export default About