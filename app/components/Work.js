"use client"
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Project data
const mainProjects = [
  {
    title: 'Georenz',
    video: '/georenz.mp4',
    
    live: 'https://georenz.com/',
    description:
      'Georenz is a solar installation company that provides solar energy solutions to individuals and businesses. The website serves as a lead-generation platform showcasing the company’s services, expertise, and customer commitment.',
    tech: ['Next.Js', 'Framer Motion', 'Tailwind'],
    aos: 'fade-right',
  },
  {
    title: 'Kamil & Iwona',
    video: '/kamil.mp4',
    
    live: 'https://kamil-iwona-foods.vercel.app/',
    description:
      'Kamil-Iwona Foods is an online raw food delivery platform offering a wide range of traditional ingredients to households and businesses. The platform was developed to digitize and streamline the food ordering process.',
    tech: ['Next.Js', 'Css', 'Tailwind', 'Firebase'],
    aos: 'zoom-in',
  },

  {
    title: 'Nsukka Legends FA',
    video: '/nsukka.mp4',
    
    live: 'https://www.nsukkalegendsfa.com/',
    description:
      'Nsukka Legends Football Academy is a youth-focused football academy promoting athletic development and sports education. The site was created to share match updates, display team profiles, and communicate the academy vision.',
    tech: ['Next.Js', 'Css', 'Tailwind', 'Firebase'],
    aos: 'fade-right',
  },
  {
    title: 'MetroFund',
    video: 'https://res.cloudinary.com/dibwnfwk9/video/upload/v1736887965/WhatsApp_Video_2025-01-14_at_20.34.44_231ea1dc_iklxkd.mp4',
    
    live: 'https://metrofund.vercel.app',
    description:
      'MetroFund is a decentralized crowdfunding platform built on blockchain technology for secure and transparent financial management. As part of the team, I contributed to developing a responsive and dynamic interface, ensuring seamless interaction with the blockchain backend. My role focused on optimizing the user experience, making the platform accessible and easy to use. The project showcases team collaboration to create a smooth, user-friendly dApp.',
    tech: ['Next.Js', 'Css', 'Tailwind'],
    aos: 'zoom-in',
  },
];

const dropdownProjects = [
  {
    title: 'MediLink',
    video: 'https://res.cloudinary.com/dibwnfwk9/video/upload/v1736888840/WhatsApp_Video_2025-01-14_at_20.31.07_6ca8e5ca_wuhyne.mp4',
    
    live: 'https://medi-link-tau.vercel.app/',
    description:
      'Medi Link is an innovative platform designed to connect healthcare professionals and patients seamlessly. As a frontend developer, I worked on creating a clean, intuitive user interface that allows easy navigation and interaction. My responsibilities included designing responsive layouts and integrating essential features to improve patient-doctor communication.',
    tech: ['React.Js', 'Css', 'Tailwind'],
    aos: 'fade-up',
  },
  {
    title: 'WorshipTogether',
    video: 'https://res.cloudinary.com/dibwnfwk9/video/upload/v1736887947/WhatsApp_Video_2025-01-14_at_20.31.10_53b29416_qu1wbk.mp4',
  
    live: 'https://worshipetogether.vercel.app',
    description:
      'Worship Together project is a platform designed for easy collaboration and sharing of worship resources. I created a clean, user-friendly interface to help users explore and organize worship materials seamlessly. The site allows for efficient resource sharing, making it ideal for worship events. This showcases my ability to design functional, accessible, and visually appealing web applications tailored to specific user needs.',
    tech: ['Next.Js', 'Css', 'Tailwind'],
    aos: 'zoom-out',
  },
];

export default function WorkPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id='project' className='bg-white border-b dark:border-gray-700 dark:bg-[#000000] dark:text-gray-200 text-[#1D1753] py-[5%]'>
      <div className='w-[90%] mx-auto'>
        <h2 className="text-[#f25c34] text-2xl text-center">Our Recent Projects</h2>
        <h1 className="font-semibold text-3xl md:text-4xl pt-3 text-center">Innovative solutions we’ve delivered</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-12 gap-10'>
          {mainProjects.map((project, idx) => (
            <div
              key={project.title + idx}
              data-aos={project.aos}
              className='flex flex-col gap-5 md:w-[100%]  bg-gray-100 dark:bg-gray-900 px-5 pb-6 rounded-md'
            >
              <div>
                <video className="md:h-80" autoPlay muted>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className='flex flex-col gap-2 pr-5'>
                <div className='flex justify-between items-center'>
                  <h3 className='text-3xl font-semibold'>{project.title}</h3>
                  <div className='flex gap-6 items-center'>
                    
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
                <p className='text-sm'>{project.description}</p>
                <div className='flex gap-4 items-center pt-2'>
                  {project.tech.map((tech, i) => (
                    <span
                      key={tech + i}
                      className='bg-gray-200 flex items-center text-center dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Dropdown projects */}
        {isOpen && (
          <div className='flex justify-between gap-12 mt-12 md:flex-row flex-col'>
            {dropdownProjects.map((project, idx) => (
              <div
                key={project.title + idx}
                data-aos={project.aos}
                className='flex flex-col gap-5 md:w-[80%] bg-gray-100 dark:bg-gray-900 px-5 pb-6 rounded-md'
              >
                <div>
                  <video className="md:h-80" autoPlay muted>
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className='flex flex-col gap-2 pr-5'>
                  <div className='flex justify-between items-center'>
                    <h3 className='text-3xl font-semibold'>{project.title}</h3>
                    <div className='flex gap-6 items-center'>
                      
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt size={20} />
                      </a>
                    </div>
                  </div>
                  <p className='text-sm'>{project.description}</p>
                  <div className='flex gap-4 items-center pt-2'>
                    {project.tech.map((tech, i) => (
                      <span
                        key={tech + i}
                        className='bg-gray-200 flex items-center text-center dark:bg-gray-800 px-4 pt-1 pb-2 rounded-full text-sm'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Toggle button */}
        <div className='flex justify-center pt-10'>
          <button
            onClick={toggleDropdown}
            className="bg-[#f25c34] hover:bg-[#1D1753] dark:hover:bg-[#f25c34]/80 dark:bg-[#f25c34] text-white md:px-4 px-3 py-2 rounded-md"
          >
            Toggle Details
          </button>
        </div>
      </div>
    </section>
  );
}
