import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import css from '../assets/css.png'
import firebase from '../assets/firebase.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import wp from '../assets/wp.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='py-4'>Skills</p>
            <h2 className='text-xl tracking-widest uppercase text-[#5651e5]'>What Technologies I Use</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>



            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <LazyLoadImage src={html} width={64} height={64}/>

                    </div>
                <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
                </div>
                </div>

            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <LazyLoadImage src={css} width={64} height={64}/>

                    </div>
                <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
                </div>
                </div>

            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <LazyLoadImage src={js} width={64} height={64}/>

                    </div>
                <div className='flex flex-col items-center justify-center'>
                <h3>JAVASCRIPT</h3>
                </div>
                </div>

            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <LazyLoadImage src={react} width={64} height={64}/>

                    </div>
                <div className='flex flex-col items-center justify-center'>
                <h3>REACT JS</h3>
                </div>
                </div>

            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <LazyLoadImage src={tailwind} width={64} height={64}/>

                    </div>
                <div className='flex flex-col items-center justify-center'>
                <h3>TAILWIND CSS</h3>
                </div>
                </div>

            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <LazyLoadImage src={github} width={64} height={64}/>

                    </div>
                <div className='flex flex-col items-center justify-center'>
                <h3>GITHUB</h3>
                </div>
                </div>

            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <LazyLoadImage src={wp} width={64} height={64}/>

                    </div>
                <div className='flex flex-col items-center justify-center'>
                <h3>WORDPRESS</h3>
                </div>
                </div>

            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <LazyLoadImage src={firebase} width={64} height={64}/>

                    </div>
                <div className='flex flex-col items-center justify-center'>
                <h3>FIREBASE</h3>
                </div>
                </div>

            </div>


            </div>

        </div>

    </div>
  )
}

export default Skills