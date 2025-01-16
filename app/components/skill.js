import React from 'react';
import { FaReact, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const TechStack = () => {
  return (
    <div  className='bg-white border-b    dark:border-gray-700 dark:bg-[#000000] dark:text-gray-200 text-[#1D1753] text-center py-[5%]'>
<div data-aos="zoom-in" className='w-[90%] mx-auto'>
<h2 className='text-[#f25c34] text-2xl'>Technical Expertise</h2>
<h1 className='font-semibold text-3xl md:text-4xl pt-3'>Tools & Technologies Powering My Creations</h1>

<div className="flex gap-4 md:gap-10 pt-6 md:pt-12 justify-center items-center">
     
     <FaReact  color="#61DBFB"  className='text-6xl'/>

    
     <SiJavascript  color="#F7DF1E"  className='text-6xl'/>

    
     <SiTypescript  color="#3178C6" className='text-6xl' />

    
     <SiTailwindcss  color="#38BDF8" className='text-6xl' />

     
     <SiNextdotjs  className='text-6xl' />

    
     <FaGitAlt  color="#F05032" className='text-6xl'/>

     
     <FaBootstrap color="#7952B3" className='text-6xl' />
   </div>
   </div>
    </div>
  );
};

export default TechStack;
