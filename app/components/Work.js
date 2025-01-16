"use client"
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import Swiper styles
import "swiper/css";

export default function WorkPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  return (
    <section id='project' className='bg-white border-b    dark:border-gray-700 dark:bg-[#000000] dark:text-gray-200 text-[#1D1753]  py-[5%]'>
<div className='w-[90%] mx-auto'>
<h2 className="text-[#f25c34] text-2xl text-center">Our Recent Projects</h2>
<h1 className="font-semibold text-3xl md:text-4xl pt-3 text-center">Innovative solutions we’ve delivered</h1>
<div className='flex justify-between  gap-12 mt-12'>
    {/*line one  */}
<div data-aos="fade-right" className='flex flex-col gap-5 w-[80%] bg-gray-100  dark:bg-gray-900 px-5 pb-6 rounded-md'>
<div>
<video className="h-80" autoPlay muted>
  <source src="https://res.cloudinary.com/dibwnfwk9/video/upload/v1736887933/WhatsApp_Video_2025-01-14_at_20.04.49_70d911f5_npxr8x.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>  
</div>

<div className='flex flex-col gap-2  pr-5'>
  <div className='flex justify-between items-center'>
    <h3 className='text-3xl font-semibold'>Governator</h3>
    <div className='flex gap-6 items-center'>
  <a href="https://github.com/Elite-tch/governator-voting-page.git" target="_blank" rel="noopener noreferrer">
    <FaGithub size={20} />
  </a>
  <a href="https://governator-voting-page-c4gp.vercel.app/" target="_blank" rel="noopener noreferrer">
    <FaExternalLinkAlt size={20} />
  </a>
</div>
    </div>  
<p className='text-sm'>Governator is a decentralized voting platform designed to enhance transparency and security in elections. As a frontend developer, I played a key role in creating a user-friendly interface, ensuring smooth interaction with the blockchain backend, and optimizing the voting process. The platform allows users to cast secure votes, and the results are transparently recorded on the blockchain. </p>
<div className='flex gap-4 items-center pt-2'>
    <span className='bg-gray-200  flex items-center text-center dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full  text-sm'>Next.Js </span>
    <span className='bg-gray-200 dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full  text-sm'>Css </span>
    <span className='bg-gray-200 dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full  text-sm'>Tailwind </span>

</div>
    
</div> 
</div>
{/*line two */}

<div data-aos="zoom-in" className='flex flex-col gap-5 w-[80%] bg-gray-100  dark:bg-gray-900 px-5 pb-6 rounded-md'>
<div>
<video className="h-80" autoPlay muted>
  <source src="https://res.cloudinary.com/dibwnfwk9/video/upload/v1736887965/WhatsApp_Video_2025-01-14_at_20.34.44_231ea1dc_iklxkd.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>  
</div>

<div className='flex flex-col gap-2 pr-5'>
  <div className='flex justify-between items-center'>
    <h3 className='text-3xl font-semibold'>MetroFund</h3>
    <div className='flex gap-6 items-center'>
  <a href="https://github.com/Elite-tch/projectx-gofundme.git" target="_blank" rel="noopener noreferrer">
    <FaGithub size={20} />
  </a>
  <a href="https://metrofund.vercel.app" target="_blank" rel="noopener noreferrer">
    <FaExternalLinkAlt size={20} />
  </a>
</div>
    </div>  
<p className='text-sm'>MetroFund is a decentralized crowdfunding platform built on blockchain technology for secure and transparent financial management. As part of the team, I contributed to developing a responsive and dynamic interface, ensuring seamless interaction with the blockchain backend. My role focused on optimizing the user experience, making the platform accessible and easy to use. The project showcases team collaboration to create a smooth, user-friendly dApp.</p>
<div className='flex gap-4 items-center pt-2'>
    <span className='bg-gray-200  flex items-center text-center dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full  text-sm'>Next.Js </span>
    <span className='bg-gray-200 dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full  text-sm'>Css </span>
    <span className='bg-gray-200 dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full  text-sm'>Tailwind </span>

</div>
    
</div>
  
</div>
</div>
{/*line dropdown */}


      {isOpen && (

<div className='flex justify-between  gap-12 mt-12'>
    {/*line three */}
        <div data-aos="fade-up" className='flex flex-col gap-5 w-[80%] bg-gray-100 dark:bg-gray-900 px-5 pb-6 rounded-md'>
          <div>
            <video className="h-80" autoPlay muted>
              <source src="https://res.cloudinary.com/dibwnfwk9/video/upload/v1736888840/WhatsApp_Video_2025-01-14_at_20.31.07_6ca8e5ca_wuhyne.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className='flex flex-col gap-2 pr-5'>
            <div className='flex justify-between items-center'>
              <h3 className='text-3xl font-semibold'> MediLink</h3>
              <div className='flex gap-6 items-center'>
                <a href="https://github.com/Elite-tch/MediLink.git" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                </a>
                <a href="https://medi-link-tau.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>  
            <p className='text-sm'>
            Medi Link is an innovative platform designed to connect healthcare professionals and patients seamlessly. As a frontend developer, I worked on creating a clean, intuitive user interface that allows easy navigation and interaction. My responsibilities included designing responsive layouts and integrating essential features to improve patient-doctor communication. 
            </p>
            <div className='flex gap-4 items-center pt-2'>
              <span className='bg-gray-200 flex items-center text-center dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full text-sm'>
                React.Js
              </span>
              <span className='bg-gray-200 dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full text-sm'>
                Css
              </span>
              <span className='bg-gray-200 dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full text-sm'>
                Tailwind
              </span>
            </div>
          </div>
        </div>
{/*line fourth */}
<div data-aos="zoom-out" className='flex flex-col gap-5 w-[80%] bg-gray-100 dark:bg-gray-900 px-5 pb-6 rounded-md'>
<div>
  <video className="h-80" autoPlay muted>
    <source src="https://res.cloudinary.com/dibwnfwk9/video/upload/v1736887947/WhatsApp_Video_2025-01-14_at_20.31.10_53b29416_qu1wbk.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<div className='flex flex-col gap-2 pr-5'>
  <div className='flex justify-between items-center'>
    <h3 className='text-3xl font-semibold'>WorshipTogether</h3>
    <div className='flex gap-6 items-center'>
      <a href="https://github.com/Elite-tch/worshipetogether.git" target="_blank" rel="noopener noreferrer">
        <FaGithub size={20} />
      </a>
      <a href="https://worshipetogether.vercel.app" target="_blank" rel="noopener noreferrer">
        <FaExternalLinkAlt size={20} />
      </a>
    </div>
  </div>  
  <p className='text-sm'>
  Worship Together project is a platform designed for easy collaboration and sharing of worship resources. I created a clean, user-friendly interface to help users explore and organize worship materials seamlessly. The site allows for efficient resource sharing, making it ideal for worship events. This showcases my ability to design functional, accessible, and visually appealing web applications tailored to specific user needs.
  </p>
  <div className='flex gap-4 items-center pt-2'>
    <span className='bg-gray-200 flex items-center text-center dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full text-sm'>
      Next.Js
    </span>
    <span className='bg-gray-200 dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full text-sm'>
      Css
    </span>
    <span className='bg-gray-200 dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full text-sm'>
      Tailwind
    </span>
  </div>
</div>
</div>
</div>
      )}

      {/*line dropdown */}
<div className='flex justify-center pt-10'>
<button  onClick={toggleDropdown}  className="bg-[#f25c34] hover:bg-[#1D1753] dark:hover:bg-[#f25c34]/80 dark:bg-[#f25c34] text-white md:px-4 px-3 py-2 rounded-md">
         Toggle Details
      </button>
</div>







    









</div>


   </section>
  );
}
