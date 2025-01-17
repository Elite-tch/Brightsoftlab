'use client'
import Link from 'next/link'
import { DarkThemeToggle } from "flowbite-react";
import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div>
      <div className="w-full  ">
        <nav className="text-[#1D1753] dark:text-gray-200 z-10 shadow-2xl w-full dark:shadow-lg fixed py-6 bg-white  dark:bg-custom-gradient ">
          <div className='flex justify-between items-center w-[90%] mx-auto'>
            <h2 className="text-3xl font-bold">Bright<span className='text-[#f25c34]'>SoftLabs.</span></h2>
            <div className="md:hidden flex items-center gap-3 justify-center">
            <DarkThemeToggle className='mt-0 !outline-none !border-none !ring-0 !ring-offset-0 !shadow-none hover:!bg-transparent active:!bg-transparent focus:!bg-transparent dark:!bg-transparent dark:hover:!bg-transparent hover:!border-none focus:!border-none active:!border-none dark:!border-none dark:hover:!border-none dark:!outline-none dark:focus:!ring-0 dark:active:!outline-none' />
    
              <button onClick={toggleSidebar} className="text-3xl">
                &#9776;
              </button>

            </div>
            <ul className="hidden md:flex justify-center items-center space-x-4">
              <Link className='hover:border-b-2 hover:border-[#f25c34] px-4 py-1 ' href="#home">Home</Link>
              <Link className='hover:border-b-2 hover:border-[#f25c34] px-4 py-1 ' href="#about">About</Link>
              <Link className=' hover:border-b-2 hover:border-[#f25c34]  px-4 py-1 ' href="#contact">Contact</Link>
              <Link className='hover:border-b-2 hover:border-[#f25c34]  px-4 py-1' href="#project">Projects</Link>
              <Link className='hover:border-b-2 hover:border-[#f25c34]  px-4 py-1' href="#testimonials">Testimonials</Link>
        
            </ul>
            <div className='hidden md:flex items-center'>
              <button className="bg-[#f25c34] hover:bg-[#1D1753] dark:hover:bg-[#f25c34]/80 dark:bg-[#f25c34] text-white md:px-4 px-3 py-2 rounded-md">
                <Link href="https://docs.google.com/document/d/1kxZU15HRndlZsN3i7kTk9ILCo39URT7CvSooX1RpNAo/edit?usp=sharing">Download CV</Link>
              </button>
              <DarkThemeToggle className='md:ml-6 !outline-none !border-none !ring-0 !ring-offset-0 !shadow-none hover:!bg-transparent active:!bg-transparent focus:!bg-transparent dark:!bg-transparent dark:hover:!bg-transparent hover:!border-none focus:!border-none active:!border-none dark:!border-none dark:hover:!border-none dark:!outline-none dark:focus:!ring-0 dark:active:!outline-none' />
            </div>
          </div>
        </nav>
        <div className={`fixed top-0 right-0 w-[70%] z-10 px-8 h-full bg-white dark:bg-custom-gradient shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <button onClick={toggleSidebar} className="text-3xl p-4">
            &times;
          </button>
          <ul className="flex flex-col space-y-4 mt-5 text-[#1D1753] dark:text-gray-200">
          <Link className='hover:border-b-2 hover:border-[#f25c34] px-4 py-1 w-fit' href="#home">Home</Link>
            <Link className='hover:border-b-2 hover:border-[#f25c34] px-4 py-1 w-fit' href="#about">About</Link>
            <Link className='hover:border-b-2 hover:border-[#f25c34] px-4 py-1 w-fit' href="#contact">Contact</Link>
            <Link className='hover:border-b-2 hover:border-[#f25c34] px-4 py-1 w-fit' href="#project">Projects</Link>
            <Link className='hover:border-b-2 hover:border-[#f25c34] w-fit  px-4 py-1' href="#testimonials">Testimonials</Link>
        
            <button className="hover:bg-[#1D1753] bg-[#f25c34] dark:bg[#f25c34]  w-fit text-white px-4 py-2 rounded-md">
              <Link href="https://docs.google.com/document/d/1kxZU15HRndlZsN3i7kTk9ILCo39URT7CvSooX1RpNAo/edit?usp=sharing">Download CV</Link>
            </button>
            <DarkThemeToggle className='mt-4 !outline-none !border-none !ring-0 !ring-offset-0 !shadow-none hover:!bg-transparent active:!bg-transparent focus:!bg-transparent dark:!bg-transparent dark:hover:!bg-transparent hover:!border-none focus:!border-none active:!border-none dark:!border-none dark:hover:!border-none dark:!outline-none dark:focus:!ring-0 dark:active:!outline-none' />
          </ul>
        </div>
      </div>
    </div>
  )
}