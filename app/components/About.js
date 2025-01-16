import Image from 'next/image'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function About() {
  return (
<section id='about' className='bg-white border-b    dark:border-gray-700 dark:bg-[#000000] dark:text-gray-200 text-[#1D1753] pt-[5%]'>

<div data-aos="fade-right" className='flex gap-10 md:gap-16 w-[90%] md:w-[80%] mx-auto py-10 justify-center md:flex-row flex-col '>
<div>
<Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1736750835/New_Project_27_cdrrv0.png' alt='' width={350} height={350} className="w-[100%] h-[100%] "/>    
</div>

<div data-aos="fade-up" className='md:w-[47%] flex flex-col  gap-2'>
<h2 className='text-[#f25c34] text-2xl'>Who I Am</h2>
<h1 className='font-semibold text-4xl'>Tech Innovator & Problem Solver</h1>
 <p className='text-sm'>I'm a passionate and results-driven Frontend Developer and Blockchain Enthusiast with a strong background in building responsive and interactive web applications. Over the years, I've actively collaborated with diverse teams and contributed to multiple projects, helping bring innovative ideas to life. My experience spans designing user-friendly interfaces, improving website performance, ensuring cross-platform compatibility, and integrating blockchain solutions for enhanced security and transparency. I thrive in dynamic environments where creativity and problem-solving drive success, and I'm always eager to learn and take on new challenges to deliver impactful digital solutions.</p>   
 <div className='flex gap-4 mt-4'>
      <a href="https://x.com/IzuchukwuJ99034?t=C0oDZva2STQieP_PRp08Gg&s=09 " target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} className='dark:text-gray-200 text-[#1D1753] hover:text-[#f25c34] dark:hover:text-[#f25c34]' />
      </a>
  <a href="https://github.com/Elite-tch " target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className='dark:text-gray-200 text-[#1D1753] hover:text-[#f25c34] dark:hover:text-[#f25c34]' />
      </a>
      <a href="https://www.linkedin.com/in/izuchukwu-johnbosco-364657323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className='dark:text-gray-200 text-[#1D1753] hover:text-[#f25c34] dark:hover:text-[#f25c34]' />
      </a>
    </div>
</div>


</div>


</section>


  )


     }