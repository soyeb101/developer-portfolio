import React from 'react';
import projectImg4 from '../assets/projects/project1.jpg';
import projectImg2 from '../assets/projects/project2.jpg';
import projectImg3 from '../assets/projects/project3.png';
import projectImg from '../assets/projects/project4.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div name='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h1 className='py-4'>What I've Built</h1>
            <div className='grid md:grid-cols-2 gap-8'>
           
            <ProjectItem title='Modern Bank' backgroundImg={projectImg} 
            used='React JS' projectUrl='/' />
            <ProjectItem title='Landing Page' backgroundImg={projectImg2} used='React JS' projectUrl='/' />
            <ProjectItem title='Tip Calculator' backgroundImg={projectImg3} used='Vanilla JS' projectUrl='/' />
            <ProjectItem title='Eccomerce Front-end' backgroundImg={projectImg4} used='React JS' projectUrl='/' />

            </div>

        </div>
        
    </div>
  )
}

export default Projects;